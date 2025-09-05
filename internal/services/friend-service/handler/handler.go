package handler

import (
	"bytes"
	"io"
	"net/http"
	"os"

	"im/internal/services/friend-service/service"
	"im/internal/shared/auth"
	"im/internal/shared/logger"
	pb "im/internal/shared/protocol/pb"

	"google.golang.org/protobuf/proto"
)

// FriendHandler 好友处理器
type FriendHandler struct {
	service *service.FriendService
	logger  *logger.Logger
}

// NewFriendHandler 创建好友处理器
func NewFriendHandler(service *service.FriendService, logger *logger.Logger) *FriendHandler {
	return &FriendHandler{service: service, logger: logger}
}

// RegisterRoutes 注册路由
func (h *FriendHandler) RegisterRoutes(mux *http.ServeMux) {
	mux.HandleFunc("/add_friend", h.handleCORS(h.addFriend))
	mux.HandleFunc("/friend_list", h.handleCORS(h.getFriendList))
	mux.HandleFunc("/friend_info", h.handleCORS(h.getFriendInfo))
	mux.HandleFunc("/update_friend_remark", h.handleCORS(h.updateFriendRemark))
	mux.HandleFunc("/set_friend_dnd", h.handleCORS(h.setFriendDND))
	mux.HandleFunc("/delete_friend", h.handleCORS(h.deleteFriend))
	mux.HandleFunc("/friend_request_list", h.handleCORS(h.getFriendRequestList))
	mux.HandleFunc("/handle_friend_request", h.handleCORS(h.handleFriendRequest))
}

// writeResp 写入响应
func (h *FriendHandler) writeResp(w http.ResponseWriter, code int, msg string, data []byte) {
	w.Header().Set("Content-Type", "application/x-protobuf")
	resp := &pb.APIResp{Code: int32(code), Msg: msg, Data: data}
	b, _ := proto.Marshal(resp)
	w.Write(b)
}

// handleCORS 处理CORS
func (h *FriendHandler) handleCORS(handler http.HandlerFunc) http.HandlerFunc {
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

// helper: 调用用户服务获取单个用户名
func (h *FriendHandler) fetchUsernameByUID(uid string) string {
	userURL := os.Getenv("USER_SERVICE_INFO_URL")
	if userURL == "" {
		userURL = "http://127.0.0.1:8081/user_info"
	}
	// 生成正确的 JWT token 来获取用户信息
	token, err := auth.GenerateToken(uid)
	if err != nil {
		return ""
	}
	req := &pb.UserInfoReq{Token: token}
	b, _ := proto.Marshal(req)
	resp, err := http.Post(userURL, "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		return ""
	}
	defer resp.Body.Close()
	buf, _ := io.ReadAll(resp.Body)
	var api pb.APIResp
	if err := proto.Unmarshal(buf, &api); err != nil || api.Code != 0 {
		return ""
	}
	info := &pb.UserInfoResp{}
	if err := proto.Unmarshal(api.Data, info); err != nil {
		return ""
	}
	return info.Username
}

// fetchEmailByUID 从用户服务获取用户邮箱
func (h *FriendHandler) fetchEmailByUID(uid string) string {
	userURL := os.Getenv("USER_SERVICE_INFO_URL")
	if userURL == "" {
		userURL = "http://127.0.0.1:8081/user_info"
	}
	// 生成正确的 JWT token 来获取用户信息
	token, err := auth.GenerateToken(uid)
	if err != nil {
		return ""
	}
	req := &pb.UserInfoReq{Token: token}
	b, _ := proto.Marshal(req)
	resp, err := http.Post(userURL, "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		return ""
	}
	defer resp.Body.Close()
	buf, _ := io.ReadAll(resp.Body)
	var api pb.APIResp
	if err := proto.Unmarshal(buf, &api); err != nil || api.Code != 0 {
		return ""
	}
	info := &pb.UserInfoResp{}
	if err := proto.Unmarshal(api.Data, info); err != nil {
		return ""
	}
	return info.Email
}

// helper: 调用消息服务推送通知
func (h *FriendHandler) notify(to string, notif *pb.Notification) {
	nURL := os.Getenv("MESSAGE_SERVICE_NOTIFY_URL")
	if nURL == "" {
		nURL = "http://127.0.0.1:8084/notify"
	}
	b, _ := proto.Marshal(notif)
	_, _ = http.Post(nURL, "application/x-protobuf", bytes.NewReader(b))
}

// addFriend 添加好友
func (h *FriendHandler) addFriend(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.AddFriendReq
	if err := proto.Unmarshal(body, &req); err != nil {
		h.writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.FromUid == "" || req.ToUid == "" {
		h.writeResp(w, 1, "缺少UID", nil)
		return
	}

	// 新增：判断被添加用户是否存在
	username := h.fetchUsernameByUID(req.ToUid)
	if username == "" {
		h.writeResp(w, 1, "被添加用户不存在", nil)
		return
	}

	err = h.service.AddFriendRequest(req.FromUid, req.ToUid, req.VerifyMsg)
	if err != nil {
		h.writeResp(w, 1, err.Error(), nil)
		return
	}
	// 推送好友请求通知（旧类型）
	fromUsername := h.fetchUsernameByUID(req.FromUid)
	n := &pb.Notification{Type: "friend_request", From: req.FromUid, FromUsername: fromUsername, To: req.ToUid, Content: req.VerifyMsg}
	h.notify(req.ToUid, n)

	resp := &pb.AddFriendResp{Code: 0, Msg: "好友请求已发送"}
	data, _ := proto.Marshal(resp)
	h.writeResp(w, 0, "ok", data)
}

// getFriendList 获取好友列表
func (h *FriendHandler) getFriendList(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.FriendListReq
	if err := proto.Unmarshal(body, &req); err != nil {
		h.writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Uid == "" {
		h.writeResp(w, 1, "缺少UID", nil)
		return
	}
	friends, err := h.service.GetFriends(req.Uid)
	if err != nil {
		h.writeResp(w, 1, "获取好友列表失败", nil)
		return
	}
	var friendUsernames []string
	for _, f := range friends {
		uname := h.fetchUsernameByUID(f)
		friendUsernames = append(friendUsernames, uname)
	}
	var remarks []string
	for _, f := range friends {
		remark, _ := h.service.GetFriendRemark(req.Uid, f)
		remarks = append(remarks, remark)
	}
	resp := &pb.FriendListResp{FriendUids: friends, FriendUsernames: friendUsernames, Remarks: remarks, Code: 0, Msg: "ok"}
	data, _ := proto.Marshal(resp)
	h.writeResp(w, 0, "ok", data)
}

// getFriendInfo 获取好友信息
func (h *FriendHandler) getFriendInfo(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.FriendInfoReq
	if err := proto.Unmarshal(body, &req); err != nil {
		h.writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Uid == "" || req.FriendUid == "" {
		h.writeResp(w, 1, "缺少UID", nil)
		return
	}
	remark, _ := h.service.GetFriendRemark(req.Uid, req.FriendUid)
	dnd, _ := h.service.GetFriendDND(req.Uid, req.FriendUid)
	uname := h.fetchUsernameByUID(req.FriendUid)
	email := h.fetchEmailByUID(req.FriendUid)
	resp := &pb.FriendInfoResp{
		Uid:      req.FriendUid,
		Username: uname,
		Email:    email,
		Remark:   remark,
		Code:     0,
		Msg:      "ok",
		Dnd:      dnd,
	}
	data, _ := proto.Marshal(resp)
	h.writeResp(w, 0, "ok", data)
}

// updateFriendRemark 更新好友备注
func (h *FriendHandler) updateFriendRemark(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.UpdateFriendRemarkReq
	if err := proto.Unmarshal(body, &req); err != nil {
		h.writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Uid == "" || req.FriendUid == "" {
		h.writeResp(w, 1, "缺少UID", nil)
		return
	}
	err = h.service.SetFriendRemark(req.Uid, req.FriendUid, req.Remark)
	if err != nil {
		h.writeResp(w, 1, err.Error(), nil)
		return
	}
	resp := &pb.UpdateFriendRemarkResp{Code: 0, Msg: "备注设置成功"}
	data, _ := proto.Marshal(resp)
	h.writeResp(w, 0, "ok", data)
}

// setFriendDND 设置好友免打扰
func (h *FriendHandler) setFriendDND(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.SetFriendDNDReq
	if err := proto.Unmarshal(body, &req); err != nil {
		h.writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Uid == "" || req.FriendUid == "" {
		h.writeResp(w, 1, "缺少UID", nil)
		return
	}
	err = h.service.SetFriendDND(req.Uid, req.FriendUid, req.Dnd)
	if err != nil {
		h.writeResp(w, 1, err.Error(), nil)
		return
	}
	resp := &pb.SetFriendDNDResp{Code: 0, Msg: "设置成功"}
	data, _ := proto.Marshal(resp)
	h.writeResp(w, 0, "ok", data)
}

// deleteFriend 删除好友
func (h *FriendHandler) deleteFriend(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.DeleteFriendReq
	if err := proto.Unmarshal(body, &req); err != nil {
		h.writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Uid == "" || req.FriendUid == "" {
		h.writeResp(w, 1, "缺少UID", nil)
		return
	}
	err = h.service.DeleteFriend(req.Uid, req.FriendUid)
	if err != nil {
		h.writeResp(w, 1, err.Error(), nil)
		return
	}
	resp := &pb.DeleteFriendResp{Code: 0, Msg: "已删除"}
	data, _ := proto.Marshal(resp)
	h.writeResp(w, 0, "ok", data)
}

// getFriendRequestList 获取收到的好友请求列表
func (h *FriendHandler) getFriendRequestList(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.FriendListReq // 复用已有结构
	if err := proto.Unmarshal(body, &req); err != nil {
		h.writeResp(w, 1, "请求格式错误", nil)
		return
	}
	// TODO: 校验token（如需）
	reqs, err := h.service.GetFriendRequests(req.Uid)
	if err != nil {
		h.writeResp(w, 1, "获取好友请求失败", nil)
		return
	}
	var fromUids, fromUsernames, msgs []string
	for from, msg := range reqs {
		fromUids = append(fromUids, from)
		msgs = append(msgs, msg)
		fromUsernames = append(fromUsernames, h.fetchUsernameByUID(from))
	}
	resp := &pb.FriendRequestListResp{FromUids: fromUids, FromUsernames: fromUsernames, VerifyMsgs: msgs, Code: 0, Msg: "ok"}
	data, _ := proto.Marshal(resp)
	h.writeResp(w, 0, "ok", data)
}

// handleFriendRequest 处理好友请求
func (h *FriendHandler) handleFriendRequest(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.HandleFriendRequestReq
	if err := proto.Unmarshal(body, &req); err != nil {
		h.writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.FromUid == "" || req.ToUid == "" {
		h.writeResp(w, 1, "缺少UID", nil)
		return
	}
	err = h.service.HandleFriendRequest(req.FromUid, req.ToUid, req.Accept)
	if err != nil {
		h.writeResp(w, 1, err.Error(), nil)
		return
	}
	resp := &pb.HandleFriendRequestResp{Code: 0, Msg: "处理成功"}
	data, _ := proto.Marshal(resp)
	h.writeResp(w, 0, "ok", data)
}
