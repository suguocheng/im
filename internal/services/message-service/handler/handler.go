package handler

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
	"os"
	"sync"
	"time"

	"im/internal/services/message-service/model"
	"im/internal/services/message-service/service"
	"im/internal/shared/auth"
	"im/internal/shared/logger"
	pb "im/internal/shared/protocol/pb"

	"github.com/gorilla/websocket"

	"google.golang.org/protobuf/proto"
)

// MessageHandler 消息处理器
type MessageHandler struct {
	service *service.MessageService
	logger  *logger.Logger
}

// 维护在线连接
var (
	upgrader = websocket.Upgrader{CheckOrigin: func(r *http.Request) bool { return true }}
	userConn sync.Map // uid -> *websocket.Conn
)

// NewMessageHandler 创建消息处理器
func NewMessageHandler(service *service.MessageService, logger *logger.Logger) *MessageHandler {
	return &MessageHandler{
		service: service,
		logger:  logger,
	}
}

// RegisterRoutes 注册路由
func (h *MessageHandler) RegisterRoutes(mux *http.ServeMux) {
	mux.HandleFunc("/ws", h.ws)
	mux.HandleFunc("/notify", h.handleCORS(h.notify))
	mux.HandleFunc("/get_recent_private_messages", h.handleCORS(h.getRecentPrivateMessages))
	mux.HandleFunc("/get_recent_group_messages", h.handleCORS(h.getRecentGroupMessages))
}

// writeResp 写入响应
func (h *MessageHandler) writeResp(w http.ResponseWriter, code int, msg string, data []byte) {
	w.Header().Set("Content-Type", "application/x-protobuf")
	resp := &pb.APIResp{Code: int32(code), Msg: msg, Data: data}
	b, _ := proto.Marshal(resp)
	w.Write(b)
}

// handleCORS 处理CORS
func (h *MessageHandler) handleCORS(handler http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		handler(w, r)
	}
}

// 内部: 发送通知给在线用户
func (h *MessageHandler) sendNotification(to string, notif *pb.Notification) {
	if v, ok := userConn.Load(to); ok {
		if conn, ok2 := v.(*websocket.Conn); ok2 {
			b, _ := proto.Marshal(notif)
			_ = conn.WriteMessage(websocket.BinaryMessage, b)
		}
	} else {
		// 用户离线，存储离线消息
		h.storeOfflineNotification(to, notif)
	}
}

// 内部: 存储离线通知
func (h *MessageHandler) storeOfflineNotification(userID string, notif *pb.Notification) {
	// 将通知转换为消息格式存储
	msg := &model.IMMessage{
		From:      notif.From,
		To:        notif.To,
		Content:   notif.Content,
		Type:      notif.Type,
		Extra:     notif.GroupId + "|" + notif.GroupName, // 将群组信息存储在Extra字段
		Timestamp: time.Now().Unix(),
	}

	// 存储离线消息
	if err := h.service.StoreOfflineMessage(userID, msg); err != nil {
		h.logger.Errorf("存储离线消息失败: %v", err)
	}
}

// 内部: 推送离线消息
func (h *MessageHandler) pushOfflineMessages(userID string, conn *websocket.Conn) {
	// 获取离线消息
	messages, err := h.service.GetOfflineMessages(userID)
	if err != nil {
		h.logger.Errorf("获取离线消息失败: %v", err)
		return
	}

	if len(messages) == 0 {
		return
	}

	h.logger.Infof("用户 %s 有 %d 条离线消息", userID, len(messages))

	// 推送离线消息通知
	notif := &pb.Notification{
		Type:      "offline_messages",
		Content:   fmt.Sprintf("您有 %d 条离线消息", len(messages)),
		Timestamp: time.Now().Unix(),
	}

	b, _ := proto.Marshal(notif)
	_ = conn.WriteMessage(websocket.BinaryMessage, b)

	// 清除离线消息
	if err := h.service.ClearOfflineMessages(userID); err != nil {
		h.logger.Errorf("清除离线消息失败: %v", err)
	}
}

// 内部: 获取群组成员列表
func (h *MessageHandler) getGroupMembers(groupID string) []string {
	groupURL := os.Getenv("GROUP_SERVICE_MEMBERS_URL")
	if groupURL == "" {
		groupURL = "http://127.0.0.1:8083/group_members"
	}
	req := &pb.GroupMembersReq{GroupId: groupID}
	b, _ := proto.Marshal(req)
	resp, err := http.Post(groupURL, "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		return nil
	}
	defer resp.Body.Close()
	buf, _ := io.ReadAll(resp.Body)
	var api pb.APIResp
	if err := proto.Unmarshal(buf, &api); err != nil || api.Code != 0 {
		return nil
	}
	membersResp := &pb.GroupMembersResp{}
	if err := proto.Unmarshal(api.Data, membersResp); err != nil {
		return nil
	}
	var uids []string
	for _, m := range membersResp.Members {
		uids = append(uids, m.Uid)
	}
	return uids
}

// 内部: 获取群组信息
func (h *MessageHandler) getGroupInfo(groupID string) (string, error) {
	groupURL := os.Getenv("GROUP_SERVICE_INFO_URL")
	if groupURL == "" {
		groupURL = "http://127.0.0.1:8083/group_info"
	}
	req := &pb.GroupInfoReq{GroupId: groupID}
	b, _ := proto.Marshal(req)
	resp, err := http.Post(groupURL, "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()
	buf, _ := io.ReadAll(resp.Body)
	var api pb.APIResp
	if err := proto.Unmarshal(buf, &api); err != nil || api.Code != 0 {
		return "", err
	}
	infoResp := &pb.GroupInfoResp{}
	if err := proto.Unmarshal(api.Data, infoResp); err != nil {
		return "", err
	}
	return infoResp.Group.Name, nil
}

// 内部: 检查好友免打扰状态
func (h *MessageHandler) isFriendDND(fromUID, toUID string) bool {
	friendURL := os.Getenv("FRIEND_SERVICE_INFO_URL")
	if friendURL == "" {
		friendURL = "http://127.0.0.1:8082/friend_info"
	}
	req := &pb.FriendInfoReq{Uid: toUID, FriendUid: fromUID}
	b, _ := proto.Marshal(req)
	resp, err := http.Post(friendURL, "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		return false // 出错时不阻止通知
	}
	defer resp.Body.Close()
	buf, _ := io.ReadAll(resp.Body)
	var api pb.APIResp
	if err := proto.Unmarshal(buf, &api); err != nil || api.Code != 0 {
		return false
	}
	infoResp := &pb.FriendInfoResp{}
	if err := proto.Unmarshal(api.Data, infoResp); err != nil {
		return false
	}
	return infoResp.Dnd
}

// 内部: 检查群组免打扰状态
func (h *MessageHandler) isGroupDND(groupID, userUID string) bool {
	groupURL := os.Getenv("GROUP_SERVICE_DND_URL")
	if groupURL == "" {
		groupURL = "http://127.0.0.1:8083/get_group_dnd"
	}
	req := &pb.SetGroupDNDReq{GroupId: groupID, Uid: userUID}
	b, _ := proto.Marshal(req)
	resp, err := http.Post(groupURL, "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		return false // 出错时不阻止通知
	}
	defer resp.Body.Close()
	buf, _ := io.ReadAll(resp.Body)
	var api pb.APIResp
	if err := proto.Unmarshal(buf, &api); err != nil || api.Code != 0 {
		return false
	}
	dndResp := &pb.SetGroupDNDResp{}
	if err := proto.Unmarshal(api.Data, dndResp); err != nil {
		return false
	}
	return dndResp.Dnd
}

// 内部: 检查群成员是否被禁言
func (h *MessageHandler) isGroupMemberMuted(groupID, userUID string) bool {
	groupURL := os.Getenv("GROUP_SERVICE_MEMBERS_URL")
	if groupURL == "" {
		groupURL = "http://127.0.0.1:8083/group_members"
	}
	req := &pb.GroupMembersReq{GroupId: groupID}
	b, _ := proto.Marshal(req)
	resp, err := http.Post(groupURL, "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		h.logger.Errorf("调用群组服务获取成员列表失败: %v", err)
		return false // 出错时不阻止发送
	}
	defer resp.Body.Close()
	buf, _ := io.ReadAll(resp.Body)
	var api pb.APIResp
	if err := proto.Unmarshal(buf, &api); err != nil || api.Code != 0 {
		h.logger.Errorf("群组服务返回错误: code=%d, msg=%s", api.Code, api.Msg)
		return false
	}
	membersResp := &pb.GroupMembersResp{}
	if err := proto.Unmarshal(api.Data, membersResp); err != nil {
		h.logger.Errorf("解析群成员列表失败: %v", err)
		return false
	}
	// 查找指定用户并检查禁言状态
	h.logger.Infof("获取到群组 %s 的成员列表，共 %d 个成员", groupID, len(membersResp.Members))
	for _, member := range membersResp.Members {
		h.logger.Infof("检查成员: UID=%s, Muted=%v", member.Uid, member.GetMuted())
		if member.Uid == userUID {
			muted := member.GetMuted()
			h.logger.Infof("找到用户 %s，禁言状态: %v", userUID, muted)
			return muted
		}
	}
	h.logger.Warnf("未找到用户 %s 在群组 %s 中的成员信息", userUID, groupID)
	return false
}

// ws WebSocket 握手与消息循环（protobuf IMMessage）
func (h *MessageHandler) ws(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		return
	}
	defer conn.Close()

	var uid string
	for {
		_, data, err := conn.ReadMessage()
		if err != nil {
			if uid != "" {
				userConn.Delete(uid)
			}
			return
		}
		var msg pb.IMMessage
		if err := proto.Unmarshal(data, &msg); err != nil {
			// 返回错误
			errMsg := &pb.IMMessage{Type: "error", Content: "消息格式错误"}
			b, _ := proto.Marshal(errMsg)
			_ = conn.WriteMessage(websocket.BinaryMessage, b)
			continue
		}
		if uid == "" {
			if msg.Type != "login" || msg.Token == "" {
				errMsg := &pb.IMMessage{Type: "error", Content: "请先登录"}
				b, _ := proto.Marshal(errMsg)
				_ = conn.WriteMessage(websocket.BinaryMessage, b)
				return
			}
			parsed, err := auth.ParseToken(msg.Token)
			if err != nil {
				errMsg := &pb.IMMessage{Type: "error", Content: "token无效"}
				b, _ := proto.Marshal(errMsg)
				_ = conn.WriteMessage(websocket.BinaryMessage, b)
				return
			}
			uid = parsed
			userConn.Store(uid, conn)

			// 推送离线消息
			h.pushOfflineMessages(uid, conn)

			ok := &pb.IMMessage{Type: "login", Content: "登录成功"}
			b, _ := proto.Marshal(ok)
			_ = conn.WriteMessage(websocket.BinaryMessage, b)
			continue
		}
		// 群聊消息处理
		if msg.GroupId != "" {
			h.logger.Infof("收到群聊消息: 用户 %s 在群组 %s 中发送消息", uid, msg.GroupId)
			// 检查发送者是否被禁言
			muted := h.isGroupMemberMuted(msg.GroupId, uid)
			h.logger.Infof("用户 %s 在群组 %s 中的禁言状态: %v", uid, msg.GroupId, muted)
			if muted {
				h.logger.Infof("用户 %s 被禁言，阻止消息发送", uid)
				// 发送禁言提示消息给发送者
				errorMsg := &pb.IMMessage{
					Type:      "error",
					From:      "system",
					To:        uid,
					Content:   "您已被禁言，无法发送消息",
					Timestamp: time.Now().Unix(),
				}
				bError, _ := proto.Marshal(errorMsg)
				_ = conn.WriteMessage(websocket.BinaryMessage, bError)
				continue
			}
			h.logger.Infof("用户 %s 未被禁言，允许消息发送", uid)

			msg.From = uid
			msg.Timestamp = time.Now().Unix() // 设置正确的时间戳

			// 秘密模式消息不进行持久化存储
			if msg.Type != "secret_chat" {
				// 业务存储
				_, _ = h.service.SendGroupMessage(uid, msg.GroupId, msg.Type, msg.Content, msg.Extra)
			}

			// 获取群成员并广播
			members := h.getGroupMembers(msg.GroupId)
			groupName, _ := h.getGroupInfo(msg.GroupId)
			for _, memberUID := range members {
				if memberUID == uid {
					// 回显给自己
					bSelf, _ := proto.Marshal(&msg)
					_ = conn.WriteMessage(websocket.BinaryMessage, bSelf)
				} else {
					// 转发给其他在线成员
					if v, ok := userConn.Load(memberUID); ok {
						if toConn, ok2 := v.(*websocket.Conn); ok2 {
							b, _ := proto.Marshal(&msg)
							_ = toConn.WriteMessage(websocket.BinaryMessage, b)
						}
					}
					// 检查群组免打扰状态，只有未设置免打扰且非秘密模式时才发送通知
					if !h.isGroupDND(msg.GroupId, memberUID) && msg.Type != "secret_chat" {
						n := &pb.Notification{Type: "group_chat_message", From: uid, To: memberUID, GroupId: msg.GroupId, GroupName: groupName, Content: msg.Content}
						h.sendNotification(memberUID, n)
					}
				}
			}
			continue
		}
		// 私聊转发与存储
		if msg.To != "" {
			msg.From = uid
			msg.Timestamp = time.Now().Unix() // 设置正确的时间戳

			// 秘密模式消息不进行持久化存储
			if msg.Type != "secret_chat" {
				// 业务存储
				_, _ = h.service.SendPrivateMessage(uid, msg.To, msg.Type, msg.Content, msg.Extra)
			}

			// 在线转发给对方
			if v, ok := userConn.Load(msg.To); ok {
				if toConn, ok2 := v.(*websocket.Conn); ok2 {
					b, _ := proto.Marshal(&msg)
					_ = toConn.WriteMessage(websocket.BinaryMessage, b)
				}
			}
			// 回显给自己
			bSelf, _ := proto.Marshal(&msg)
			_ = conn.WriteMessage(websocket.BinaryMessage, bSelf)
			// 检查好友免打扰状态，只有未设置免打扰且非秘密模式时才发送通知
			if !h.isFriendDND(uid, msg.To) && msg.Type != "secret_chat" {
				n := &pb.Notification{Type: "private_chat_message", From: uid, To: msg.To, Content: msg.Content}
				h.sendNotification(msg.To, n)
			}
			continue
		}
	}
}

// notify 接收服务间通知并推送给用户
func (h *MessageHandler) notify(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var notif pb.Notification
	if err := proto.Unmarshal(body, &notif); err != nil {
		h.writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if notif.To == "" {
		h.writeResp(w, 1, "缺少接收者", nil)
		return
	}
	h.sendNotification(notif.To, &notif)
	h.writeResp(w, 0, "ok", nil)
}

// getRecentPrivateMessages 获取最近私聊消息
func (h *MessageHandler) getRecentPrivateMessages(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.GetRecentPrivateMessagesReq
	if err := proto.Unmarshal(body, &req); err != nil {
		h.writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.From == "" || req.To == "" || req.Count <= 0 {
		h.writeResp(w, 1, "缺少参数", nil)
		return
	}
	msgs, err := h.service.GetRecentPrivateMessages(req.From, req.To, int(req.Count))
	if err != nil {
		h.writeResp(w, 1, err.Error(), nil)
		return
	}
	var pbMsgs []*pb.IMMessage
	for _, m := range msgs {
		pbMsgs = append(pbMsgs, &pb.IMMessage{
			Type:      m.Type,
			From:      m.From,
			To:        m.To,
			Content:   m.Content,
			Timestamp: m.Timestamp,
			Extra:     m.Extra,
		})
	}
	list := &pb.IMMessageList{Messages: pbMsgs}
	data, _ := proto.Marshal(list)
	h.writeResp(w, 0, "ok", data)
}

// getRecentGroupMessages 获取最近群聊消息
func (h *MessageHandler) getRecentGroupMessages(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.GetRecentGroupMessagesReq
	if err := proto.Unmarshal(body, &req); err != nil {
		h.writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.GroupId == "" || req.Count <= 0 {
		h.writeResp(w, 1, "缺少参数", nil)
		return
	}
	msgs, err := h.service.GetRecentGroupMessages(req.GroupId, int(req.Count))
	if err != nil {
		h.writeResp(w, 1, err.Error(), nil)
		return
	}
	var pbMsgs []*pb.IMMessage
	for _, m := range msgs {
		pbMsgs = append(pbMsgs, &pb.IMMessage{
			Type:      m.Type,
			From:      m.From,
			Content:   m.Content,
			Timestamp: m.Timestamp,
			Extra:     m.Extra,
			GroupId:   req.GroupId,
		})
	}
	list := &pb.IMMessageList{Messages: pbMsgs}
	data, _ := proto.Marshal(list)
	h.writeResp(w, 0, "ok", data)
}

// Start 启动HTTP服务器
func (h *MessageHandler) Start(port int) error {
	mux := http.NewServeMux()
	h.RegisterRoutes(mux)

	addr := fmt.Sprintf(":%d", port)
	h.logger.Infof("服务启动在端口 %d", port)

	return http.ListenAndServe(addr, mux)
}
