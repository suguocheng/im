package protocol

import (
	"fmt"
	"im/core/auth"
	pb "im/core/protocol/pb"
	"net/http"
	"sync"

	"im/core/storage"

	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"
)

// 用户与连接映射
var wsUserConn sync.Map // userID -> *websocket.Conn

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
	defer conn.Close()
	var userID string
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

// 发送群聊消息给群组所有在线成员
func SendGroupMessageToMembers(groupID string, groupMsg *pb.GroupMessage) error {
	storageManager := storage.GetStorageManager()
	group, err := storageManager.GetGroup(groupID)
	if err != nil {
		return fmt.Errorf("获取群组信息失败: %v", err)
	}

	// 构建群聊消息
	msg := &pb.IMMessage{
		Type:      "chat", // 应该与客户端发送的类型一致
		From:      groupMsg.FromUid,
		GroupId:   groupID, // 关键：必须给 GroupId 字段赋值
		Content:   groupMsg.Content,
		Timestamp: groupMsg.Timestamp,
		Extra:     fmt.Sprintf("group_id:%s,from_username:%s,message_type:%s", groupMsg.GroupId, groupMsg.FromUsername, groupMsg.MessageType),
	}
	b, _ := proto.Marshal(msg)

	// 发送给所有在线成员
	var sentCount int
	for _, memberUID := range group.MemberUids {
		if memberUID != groupMsg.FromUid { // 不发送给发送者自己
			if err := SendToUser(memberUID, b); err == nil {
				sentCount++
			}
		}
	}

	fmt.Printf("群聊消息发送给 %d 个在线成员\n", sentCount)
	return nil
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
