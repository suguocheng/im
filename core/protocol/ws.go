package protocol

import (
	"fmt"
	"im/core/auth"
	pb "im/core/protocol/pb"
	"net/http"
	"sync"
	"time"

	"im/core/storage"

	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"
)

// 用户与连接映射
var wsUserConn sync.Map // userID -> *websocket.Conn

// 在线账号管理（确保为包级变量）
var onlineAccounts = make(map[string]bool)

type WSProtocol struct {
	upgrader websocket.Upgrader
	handler  func(conn *websocket.Conn, data []byte)
}

func NewWSProtocol() *WSProtocol {
	return &WSProtocol{
		upgrader: websocket.Upgrader{
			CheckOrigin: func(r *http.Request) bool { return true },
		},
	}
}

func (w *WSProtocol) Start(addr string) error {
	http.HandleFunc("/ws", func(rw http.ResponseWriter, r *http.Request) {
		conn, err := w.upgrader.Upgrade(rw, r, nil)
		if err != nil {
			return
		}
		go w.handleConn(conn)
	})
	fmt.Println("WebSocket 协议监听于", addr+"/ws")
	return http.ListenAndServe(addr, nil)
}

func (w *WSProtocol) handleConn(conn *websocket.Conn) {
	var userID string
	defer func() {
		if userID != "" {
			delete(onlineAccounts, userID)
		}
		conn.Close()
	}()
	for {
		_, data, err := conn.ReadMessage()
		if err != nil {
			if userID != "" {
				wsUserConn.Delete(userID)
			}
			return
		}
		var msg pb.IMMessage
		if err := proto.Unmarshal(data, &msg); err != nil {
			// 替换所有 JSON 字符串消息为 IMMessage 结构体 proto.Marshal 后发送
			errMsg := &pb.IMMessage{Type: "error", Content: "消息格式错误"}
			b, _ := proto.Marshal(errMsg)
			conn.WriteMessage(websocket.BinaryMessage, b)
			continue
		}
		if userID == "" {
			if msg.Type != "login" || msg.Token == "" {
				// 替换所有 JSON 字符串消息为 IMMessage 结构体 proto.Marshal 后发送
				errMsg := &pb.IMMessage{Type: "error", Content: "请先登录"}
				b, _ := proto.Marshal(errMsg)
				conn.WriteMessage(websocket.BinaryMessage, b)
				return
			}
			uid, err := auth.ParseToken(msg.Token)
			if err != nil {
				// 替换所有 JSON 字符串消息为 IMMessage 结构体 proto.Marshal 后发送
				errMsg := &pb.IMMessage{Type: "error", Content: "token无效"}
				b, _ := proto.Marshal(errMsg)
				conn.WriteMessage(websocket.BinaryMessage, b)
				return
			}
			userID = uid
			wsUserConn.Store(userID, conn)

			// 检查并发送离线消息
			go sendOfflineMessages(userID, conn)

			// 替换所有 JSON 字符串消息为 IMMessage 结构体 proto.Marshal 后发送
			loginMsg := &pb.IMMessage{Type: "login", Content: "登录成功"}
			b, _ := proto.Marshal(loginMsg)
			conn.WriteMessage(websocket.BinaryMessage, b)
			continue
		}
		msg.From = userID // 账号
		b, _ := proto.Marshal(&msg)
		if w.handler != nil {
			w.handler(conn, b)
		}
	}
}

// 发送消息给指定用户
func SendToUser(userID string, data []byte) error {
	v, ok := wsUserConn.Load(userID)
	if !ok {
		return fmt.Errorf("用户不在线")
	}
	conn := v.(*websocket.Conn)
	return conn.WriteMessage(websocket.BinaryMessage, data)
}

// 发送群聊消息给群组所有在线成员，返回不在线的成员列表
func SendGroupMessageToMembers(msg *pb.IMMessage) ([]string, error) {
	storageManager := storage.GetStorageManager()
	group, err := storageManager.GetGroup(msg.GroupId)
	if err != nil {
		return nil, fmt.Errorf("获取群组信息失败: %v", err)
	}

	b, _ := proto.Marshal(msg)
	var offlineMembers []string
	for _, memberUID := range group.MemberUids {
		if memberUID != msg.From { // 不发给自己
			if err := SendToUser(memberUID, b); err != nil {
				// 记录不在线的成员
				offlineMembers = append(offlineMembers, memberUID)
			}
		}
	}
	return offlineMembers, nil
}

// 发送通知给指定用户
func SendNotificationToUser(userID string, notif *pb.Notification) error {
	v, ok := wsUserConn.Load(userID)
	if !ok {
		return fmt.Errorf("用户不在线")
	}
	conn := v.(*websocket.Conn)
	b, _ := proto.Marshal(notif)
	return conn.WriteMessage(websocket.BinaryMessage, b)
}

func (w *WSProtocol) Stop() error {
	// WebSocket 关闭由 http.Server 控制
	return nil
}

func (w *WSProtocol) Send(conn *websocket.Conn, data []byte) error {
	return conn.WriteMessage(websocket.BinaryMessage, data)
}

func (w *WSProtocol) OnMessage(handler func(conn *websocket.Conn, data []byte)) {
	w.handler = handler
}

// 导出免打扰判断
func StorageFriendStoreGetDND(uid, friendUid string) bool {
	storageManager := storage.GetStorageManager()
	dnd, err := storageManager.GetFriendDND(uid, friendUid)
	if err != nil {
		return false
	}
	return dnd
}

// 发送离线消息给刚登录的用户
func sendOfflineMessages(userID string, conn *websocket.Conn) {
	storageManager := storage.GetStorageManager()

	// 获取并清除离线消息
	offlineMessages, err := storageManager.GetAndClearOfflineMessages(userID)
	if err != nil {
		return
	}

	if len(offlineMessages) == 0 {
		return
	}

	// 统计私聊和群聊消息数量
	var privateCount, groupCount int
	for _, msgStr := range offlineMessages {
		var msg pb.IMMessage
		if err := proto.Unmarshal([]byte(msgStr), &msg); err == nil {
			if msg.GroupId != "" {
				groupCount++
			} else if msg.To != "" {
				privateCount++
			}
		}
	}

	// 发送离线消息通知
	var content string
	if privateCount > 0 && groupCount > 0 {
		content = fmt.Sprintf("您有 %d 条私聊消息和 %d 条群聊消息", privateCount, groupCount)
	} else if privateCount > 0 {
		content = fmt.Sprintf("您有 %d 条私聊消息", privateCount)
	} else if groupCount > 0 {
		content = fmt.Sprintf("您有 %d 条群聊消息", groupCount)
	}

	offlineNotif := &pb.Notification{
		Type:      "offline_messages",
		From:      "system",
		To:        userID,
		Content:   content,
		Timestamp: time.Now().Unix(),
		Extra:     fmt.Sprintf("private:%d,group:%d", privateCount, groupCount),
	}

	notifBytes, _ := proto.Marshal(offlineNotif)
	conn.WriteMessage(websocket.BinaryMessage, notifBytes)

	// 逐个发送离线消息
	for _, msgStr := range offlineMessages {
		// 尝试解析为IMMessage
		var msg pb.IMMessage
		if err := proto.Unmarshal([]byte(msgStr), &msg); err == nil {
			msgBytes, _ := proto.Marshal(&msg)
			conn.WriteMessage(websocket.BinaryMessage, msgBytes)
		}
	}
}
