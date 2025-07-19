package api

import (
	"fmt"
	"im/core/auth"
	pb "im/core/protocol/pb"
	pbuser "im/core/protocol/pb"
	"io/ioutil"
	"net/http"

	"im/core/protocol"
	"im/core/storage"
	"time"

	"google.golang.org/protobuf/proto"
)

var storageManager = storage.GetStorageManager()
var nextUID = 1

func writeResp(w http.ResponseWriter, code int, msg string, data []byte) {
	w.Header().Set("Content-Type", "application/x-protobuf")
	resp := &pb.APIResp{Code: int32(code), Msg: msg, Data: data}
	b, _ := proto.Marshal(resp)
	w.Write(b)
}

func RegisterHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1001, "请求体读取失败", nil)
		return
	}
	var req pb.RegisterReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1001, "请求格式错误", nil)
		return
	}
	if len(req.Password) < 3 || len(req.Email) < 5 {
		writeResp(w, 1002, "密码或邮箱长度不合法", nil)
		return
	}
	uid := fmt.Sprintf("%d", nextUID)
	nextUID++
	err = storageManager.CreateUser(uid, req.Username, req.Password, req.Email)
	if err != nil {
		writeResp(w, 1004, err.Error(), nil)
		return
	}
	writeResp(w, 0, "注册成功", []byte(uid))
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 2001, "请求体读取失败", nil)
		return
	}
	var req pb.LoginReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 2001, "请求格式错误", nil)
		return
	}
	if req.Uid == "" || req.Password == "" {
		writeResp(w, 2002, "UID和密码不能为空", nil)
		return
	}
	if onlineAccounts[req.Uid] {
		writeResp(w, 2003, "该账号已在其他地方登录", nil)
		return
	}
	user, err := storageManager.GetUserByUID(req.Uid)
	if err != nil {
		writeResp(w, 2004, "用户不存在", nil)
		return
	}
	// 验证密码（这里需要实现密码验证逻辑）
	if user.Password != req.Password {
		writeResp(w, 2004, "密码错误", nil)
		return
	}
	onlineAccounts[req.Uid] = true
	token, err := auth.GenerateToken(user.UID)
	if err != nil {
		writeResp(w, 2006, "生成token失败", nil)
		return
	}
	writeResp(w, 0, "登录成功", []byte(token))
}

func ResetPwdHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.ResetPwdReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Email == "" || req.NewPwd == "" {
		writeResp(w, 1, "邮箱和新密码不能为空", nil)
		return
	}
	// 发送验证码（模拟）
	// 实际应保存验证码并校验
	fmt.Printf("向 %s 发送验证码: 123456 (模拟)\n", req.Email)
	if req.Code != "123456" {
		writeResp(w, 1, "验证码错误(模拟)", nil)
		return
	}
	user, err := storageManager.GetUserByEmail(req.Email)
	if err != nil {
		writeResp(w, 1, "用户不存在", nil)
		return
	}
	err = storageManager.UpdatePassword(user.UID, req.NewPwd)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}
	writeResp(w, 0, "密码重置成功", nil)
}

func UpdateUsernameHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.UpdateUsernameReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Uid == "" || req.NewUsername == "" {
		writeResp(w, 1, "UID和新昵称不能为空", nil)
		return
	}
	err = storageManager.UpdateUsername(req.Uid, req.NewUsername)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}
	writeResp(w, 0, "昵称修改成功", nil)
}

func UpdatePwdHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.UpdatePwdReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Uid == "" || req.OldPwd == "" || req.NewPwd == "" {
		writeResp(w, 1, "UID、原密码和新密码不能为空", nil)
		return
	}
	// 先验证旧密码
	user, err := storageManager.GetUserByUID(req.Uid)
	if err != nil {
		writeResp(w, 1, "用户不存在", nil)
		return
	}
	if user.Password != req.OldPwd {
		writeResp(w, 1, "原密码错误", nil)
		return
	}
	err = storageManager.UpdatePassword(req.Uid, req.NewPwd)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}
	writeResp(w, 0, "密码修改成功", nil)
}

func TokenCheckHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.TokenCheckReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Token == "" {
		writeResp(w, 1, "缺少token", nil)
		return
	}
	userID, err := auth.ParseToken(req.Token)
	if err != nil {
		writeResp(w, 1, "token无效", nil)
		return
	}
	writeResp(w, 0, "token有效", []byte(userID))
}

func DeleteAccountHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.DeleteAccountReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Uid == "" {
		writeResp(w, 1, "UID不能为空", nil)
		return
	}
	err = storageManager.DeleteUser(req.Uid)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}
	writeResp(w, 0, "账号已注销", nil)
}

func UserInfoHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.UserInfoReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Token == "" {
		writeResp(w, 1, "缺少token", nil)
		return
	}
	uid, err := auth.ParseToken(req.Token)
	if err != nil {
		writeResp(w, 1, "token无效", nil)
		return
	}
	user, err := storageManager.GetUserByUID(uid)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}
	resp := &pbuser.UserInfoResp{
		Uid:      user.UID,
		Username: user.Username,
		Email:    user.Email,
		Code:     0,
		Msg:      "ok",
	}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 在线账号管理
var onlineAccounts = make(map[string]bool)

func LogoutHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.LogoutReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Token == "" {
		writeResp(w, 1, "缺少token", nil)
		return
	}
	userID, err := auth.ParseToken(req.Token)
	if err != nil {
		writeResp(w, 1, "token无效", nil)
		return
	}
	delete(onlineAccounts, userID)
	writeResp(w, 0, "已登出", nil)
}

// 邮箱验证码功能预留接口（实际应集成邮件服务）
func SendEmailCodeHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.SendEmailCodeReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Email == "" {
		writeResp(w, 1, "邮箱不能为空", nil)
		return
	}
	// 这里应调用实际邮件服务发送验证码
	writeResp(w, 0, "验证码已发送(模拟)", nil)
}

// 添加好友请求
func AddFriendHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.AddFriendReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.FromUid == "" || req.ToUid == "" {
		writeResp(w, 1, "缺少UID", nil)
		return
	}
	// TODO: 校验token
	storageManager.AddFriendRequest(req.FromUid, req.ToUid, req.VerifyMsg)
	// 推送好友请求通知
	notif := &pb.Notification{
		Type:      "friend_request",
		From:      req.FromUid,
		To:        req.ToUid,
		Content:   req.VerifyMsg,
		Timestamp: time.Now().Unix(),
	}
	fmt.Println("准备推送通知给", req.ToUid)
	err = protocol.SendNotificationToUser(req.ToUid, notif)
	fmt.Println("推送结果：", err)
	resp := &pb.AddFriendResp{Code: 0, Msg: "好友请求已发送"}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 处理好友请求
func HandleFriendHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.HandleFriendReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.FromUid == "" || req.ToUid == "" {
		writeResp(w, 1, "缺少UID", nil)
		return
	}
	// TODO: 校验token
	storageManager.HandleFriendRequest(req.FromUid, req.ToUid, req.Accept)
	resp := &pb.HandleFriendResp{Code: 0, Msg: "处理成功"}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 获取好友列表
func FriendListHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.FriendListReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Uid == "" {
		writeResp(w, 1, "缺少UID", nil)
		return
	}
	// TODO: 校验token
	friends, err := storageManager.GetFriends(req.Uid)
	if err != nil {
		writeResp(w, 1, "获取好友列表失败", nil)
		return
	}
	var friendUsernames []string
	for _, f := range friends {
		user, err := storageManager.GetUserByUID(f)
		if err != nil {
			friendUsernames = append(friendUsernames, "<未知>")
		} else {
			friendUsernames = append(friendUsernames, user.Username)
		}
	}
	var remarks []string
	for _, f := range friends {
		remark, _ := storageManager.GetFriendRemark(req.Uid, f)
		remarks = append(remarks, remark)
	}
	resp := &pb.FriendListResp{FriendUids: friends, FriendUsernames: friendUsernames, Remarks: remarks, Code: 0, Msg: "ok"}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 设置好友备注
func UpdateRemarkHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.UpdateRemarkReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Uid == "" || req.FriendUid == "" {
		writeResp(w, 1, "缺少UID", nil)
		return
	}
	// TODO: 校验token
	storageManager.SetFriendRemark(req.Uid, req.FriendUid, req.Remark)
	resp := &pb.UpdateRemarkResp{Code: 0, Msg: "备注设置成功"}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 查看好友信息
func FriendInfoHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.FriendInfoReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Uid == "" || req.FriendUid == "" {
		writeResp(w, 1, "缺少UID", nil)
		return
	}
	// TODO: 校验token
	user, err := storageManager.GetUserByUID(req.FriendUid)
	if err != nil {
		writeResp(w, 1, "好友不存在", nil)
		return
	}
	remark, _ := storageManager.GetFriendRemark(req.Uid, req.FriendUid)
	dnd, _ := storageManager.GetFriendDND(req.Uid, req.FriendUid)
	resp := &pb.FriendInfoResp{
		Uid:      user.UID,
		Username: user.Username,
		Email:    user.Email,
		Remark:   remark,
		Code:     0,
		Msg:      "ok",
		// 新增 dnd 字段
		Dnd: dnd,
	}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 删除好友
func DeleteFriendHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.DeleteFriendReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Uid == "" || req.FriendUid == "" {
		writeResp(w, 1, "缺少UID", nil)
		return
	}
	// TODO: 校验token
	storageManager.DeleteFriendship(req.Uid, req.FriendUid)
	resp := &pb.DeleteFriendResp{Code: 0, Msg: "已删除"}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 获取收到的好友请求列表
func FriendRequestListHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.FriendListReq // 复用已有结构
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	// TODO: 校验token
	reqs, err := storageManager.GetFriendRequests(req.Uid)
	if err != nil {
		writeResp(w, 1, "获取好友请求失败", nil)
		return
	}
	var fromUids, fromUsernames, msgs []string
	for from, msg := range reqs {
		fromUids = append(fromUids, from)
		msgs = append(msgs, msg)
		user, err := storageManager.GetUserByUID(from)
		if err != nil {
			fromUsernames = append(fromUsernames, "<未知>")
		} else {
			fromUsernames = append(fromUsernames, user.Username)
		}
	}
	resp := &pb.FriendRequestListResp{FromUids: fromUids, FromUsernames: fromUsernames, VerifyMsgs: msgs, Code: 0, Msg: "ok"}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 设置消息免打扰
func SetDNDHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.SetDNDReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Uid == "" || req.FriendUid == "" {
		writeResp(w, 1, "缺少UID", nil)
		return
	}
	// TODO: 校验token
	storageManager.SetFriendDND(req.Uid, req.FriendUid, req.Dnd)
	resp := &pb.SetDNDResp{Code: 0, Msg: "设置成功"}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

func StartHTTPServer(addr string) {
	http.HandleFunc("/register", RegisterHandler)
	http.HandleFunc("/login", LoginHandler)
	http.HandleFunc("/logout", LogoutHandler)
	http.HandleFunc("/reset_pwd", ResetPwdHandler)
	http.HandleFunc("/update_username", UpdateUsernameHandler)
	http.HandleFunc("/update_pwd", UpdatePwdHandler)
	http.HandleFunc("/delete_account", DeleteAccountHandler)
	http.HandleFunc("/user_info", UserInfoHandler)
	http.HandleFunc("/token_check", TokenCheckHandler)
	http.HandleFunc("/add_friend", AddFriendHandler)
	http.HandleFunc("/handle_friend", HandleFriendHandler)
	http.HandleFunc("/friend_list", FriendListHandler)
	http.HandleFunc("/delete_friend", DeleteFriendHandler)
	http.HandleFunc("/friend_request_list", FriendRequestListHandler)
	http.HandleFunc("/update_remark", UpdateRemarkHandler)
	http.HandleFunc("/friend_info", FriendInfoHandler)
	http.HandleFunc("/set_dnd", SetDNDHandler)
	http.ListenAndServe(addr, nil)
}
