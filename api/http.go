package api

import (
	"fmt"
	"im/core/auth"
	pb "im/core/protocol/pb"
	"io"
	"net/http"

	"im/core/protocol"
	"im/core/service"
	"im/core/storage"
	"strings"
	"time"

	"google.golang.org/protobuf/proto"
)

var storageManager = storage.GetStorageManager()
var fileService = service.NewFileService()
var nextUID = 1

func writeResp(w http.ResponseWriter, code int, msg string, data []byte) {
	w.Header().Set("Content-Type", "application/x-protobuf")
	resp := &pb.APIResp{Code: int32(code), Msg: msg, Data: data}
	b, _ := proto.Marshal(resp)
	w.Write(b)
}

func RegisterHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
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
	uid, err := storageManager.CreateUser(req.Username, req.Password, req.Email)
	if err != nil {
		writeResp(w, 1004, err.Error(), nil)
		return
	}
	writeResp(w, 0, "注册成功", []byte(uid))
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
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
	body, err := io.ReadAll(r.Body)
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
	body, err := io.ReadAll(r.Body)
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
	body, err := io.ReadAll(r.Body)
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
	body, err := io.ReadAll(r.Body)
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
	body, err := io.ReadAll(r.Body)
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
	body, err := io.ReadAll(r.Body)
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
	resp := &pb.UserInfoResp{
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
	body, err := io.ReadAll(r.Body)
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
	body, err := io.ReadAll(r.Body)
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
	body, err := io.ReadAll(r.Body)
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
	fromUser, _ := storageManager.GetUserByUID(req.FromUid)
	storageManager.AddFriendRequest(req.FromUid, req.ToUid, req.VerifyMsg)
	// 结构化通知
	notif := &pb.Notification{
		Type:         "friend_request",
		From:         req.FromUid,
		FromUsername: fromUser.Username,
		To:           req.ToUid,
		Content:      "",
		Extra:        "", // 只放特殊参数
	}
	protocol.SendNotificationToUser(req.ToUid, notif)
	resp := &pb.AddFriendResp{Code: 0, Msg: "好友请求已发送"}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 处理好友请求
func HandleFriendHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
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
	body, err := io.ReadAll(r.Body)
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
	body, err := io.ReadAll(r.Body)
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
	body, err := io.ReadAll(r.Body)
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
	body, err := io.ReadAll(r.Body)
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
	body, err := io.ReadAll(r.Body)
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
	body, err := io.ReadAll(r.Body)
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

// ==================== 群组相关接口 ====================

// 创建群组
func CreateGroupHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.CreateGroupReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Name == "" || req.OwnerUid == "" {
		writeResp(w, 1, "群组名称和群主UID不能为空", nil)
		return
	}
	// TODO: 校验token
	groupID, err := storageManager.CreateGroup(req.Name, req.OwnerUid)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}
	resp := &pb.CreateGroupResp{Code: 0, Msg: "群组创建成功", GroupId: groupID}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 获取群组列表
func GroupListHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.GroupListReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Uid == "" {
		writeResp(w, 1, "缺少UID", nil)
		return
	}
	// TODO: 校验token
	groups, err := storageManager.GetUserGroups(req.Uid)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}
	resp := &pb.GroupListResp{Code: 0, Msg: "ok", Groups: groups}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 获取群组信息
func GroupInfoHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.GroupInfoReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.GroupId == "" {
		writeResp(w, 1, "缺少群组ID", nil)
		return
	}
	// TODO: 校验token
	group, err := storageManager.GetGroup(req.GroupId)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}
	resp := &pb.GroupInfoResp{Code: 0, Msg: "ok", Group: group}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 获取群组成员
func GroupMembersHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.GroupMembersReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.GroupId == "" {
		writeResp(w, 1, "缺少群组ID", nil)
		return
	}
	// TODO: 校验token
	members, err := storageManager.GetGroupMemberDetails(req.GroupId)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}
	resp := &pb.GroupMembersResp{Code: 0, Msg: "ok", Members: members}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 加入群组
func JoinGroupHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.JoinGroupReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.GroupId == "" || req.Uid == "" {
		writeResp(w, 1, "群组ID和UID不能为空", nil)
		return
	}
	// TODO: 校验token

	// --- 修改逻辑：从直接加入变为提交入群申请 ---
	// 检查是否已有待审批的请求
	hasPending, _ := storageManager.HasPendingInvite(req.GroupId, req.Uid)
	if hasPending {
		writeResp(w, 1, "你已提交过申请，请耐心等待审批", nil)
		return
	}

	// 插入入群申请，申请人自己既是邀请者也是被邀请者
	err = storageManager.InsertInviteRequest(req.GroupId, req.Uid, req.Uid)
	if err != nil {
		writeResp(w, 1, "申请入群失败: "+err.Error(), nil)
		return
	}

	// 通知所有管理员和群主有新的审批
	group, _ := storageManager.GetGroup(req.GroupId)
	applicant, _ := storageManager.GetUserByUID(req.Uid)
	adminsAndOwner, _ := storageManager.GetGroupAdminsAndOwner(req.GroupId)
	for _, adminUID := range adminsAndOwner {
		notif := &pb.Notification{
			Type:         "group_application_pending",
			From:         req.Uid,
			FromUsername: applicant.Username,
			To:           adminUID,
			GroupId:      group.GroupId,
			GroupName:    group.Name,
			Content:      "",
			Extra:        "", // 只放特殊参数
		}
		protocol.SendNotificationToUser(adminUID, notif)
	}

	writeResp(w, 0, "入群申请已发送，请等待管理员审批", nil)
}

// 退出群组
func LeaveGroupHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.LeaveGroupReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.GroupId == "" || req.Uid == "" {
		writeResp(w, 1, "群组ID和UID不能为空", nil)
		return
	}
	// TODO: 校验token
	err = storageManager.LeaveGroup(req.GroupId, req.Uid)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}
	resp := &pb.LeaveGroupResp{Code: 0, Msg: "退出群组成功"}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 文件上传处理器
func UploadFileHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		writeResp(w, 4001, "只支持POST方法", nil)
		return
	}

	// 解析multipart表单
	if err := r.ParseMultipartForm(50 * 1024 * 1024); err != nil {
		writeResp(w, 4002, "解析表单失败", nil)
		return
	}

	// 获取文件
	file, header, err := r.FormFile("file")
	if err != nil {
		writeResp(w, 4003, "获取文件失败", nil)
		return
	}
	defer file.Close()

	// 调用业务层处理文件上传
	fileInfo, err := fileService.UploadFile(file, header.Filename, header.Size)
	if err != nil {
		writeResp(w, 4004, err.Error(), nil)
		return
	}

	// 返回文件信息
	data, _ := proto.Marshal(fileInfo)
	writeResp(w, 0, "上传成功", data)
}

// 文件下载处理器
func DownloadFileHandler(w http.ResponseWriter, r *http.Request) {
	filename := strings.TrimPrefix(r.URL.Path, "/uploads/")
	if filename == "" {
		http.NotFound(w, r)
		return
	}

	// 调用业务层获取文件路径
	filePath, err := fileService.GetFilePath(filename)
	if err != nil {
		http.NotFound(w, r)
		return
	}

	// 设置响应头
	w.Header().Set("Content-Type", fileService.GetMimeType(filename))
	w.Header().Set("Content-Disposition", fmt.Sprintf("attachment; filename=%s", filename))

	// 发送文件
	http.ServeFile(w, r, filePath)
}

// 获取群成员角色
func GroupMemberRoleHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.GroupMemberRoleReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.GroupId == "" || req.Uid == "" {
		writeResp(w, 1, "缺少参数", nil)
		return
	}
	role, err := storageManager.GetUserRoleInGroup(req.GroupId, req.Uid)
	if err != nil {
		writeResp(w, 1, "查询角色失败", nil)
		return
	}
	resp := &pb.GroupMemberRoleResp{Code: 0, Msg: "ok", Role: role}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 获取群成员详细信息
func GroupMemberInfoHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.GroupMemberInfoReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.GroupId == "" || req.Uid == "" {
		writeResp(w, 1, "缺少参数", nil)
		return
	}
	// 查询成员信息
	db := storageManager.GetDB()
	if db == nil {
		writeResp(w, 1, "数据库未初始化", nil)
		return
	}
	row := db.QueryRow(`SELECT gm.uid, u.username, gm.nickname, gm.role, gm.join_time FROM group_members gm LEFT JOIN users u ON gm.uid = u.uid WHERE gm.group_id = ? AND gm.uid = ?`, req.GroupId, req.Uid)
	var uid, username, nickname, role string
	var joinTime int64
	err = row.Scan(&uid, &username, &nickname, &role, &joinTime)
	if err != nil {
		writeResp(w, 1, "成员不存在", nil)
		return
	}
	resp := &pb.GroupMemberInfoResp{
		Code:     0,
		Msg:      "ok",
		Uid:      uid,
		Username: username,
		Nickname: nickname,
		Role:     role,
		JoinTime: joinTime,
	}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 邀请好友入群
func InviteToGroupHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.InviteToGroupReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.GroupId == "" || req.InviterUid == "" || len(req.InviteeUids) == 0 {
		writeResp(w, 1, "缺少参数", nil)
		return
	}

	// 获取邀请者在群组中的角色
	role, err := storageManager.GetUserRoleInGroup(req.GroupId, req.InviterUid)
	if err != nil {
		writeResp(w, 1, "无法获取邀请者身份", nil)
		return
	}

	for _, invitee := range req.InviteeUids {
		if role == "owner" || role == "admin" {
			// 管理员/群主直接添加成员
			err := storageManager.JoinGroup(req.GroupId, invitee)
			if err != nil {
				writeResp(w, 1, "添加成员失败: "+invitee+":"+err.Error(), nil)
				return
			}
		} else {
			// 普通成员邀请需审批
			hasPending, _ := storageManager.HasPendingInvite(req.GroupId, invitee)
			if hasPending {
				continue // 已有待审批请求
			}
			err := storageManager.InsertInviteRequest(req.GroupId, req.InviterUid, invitee)
			if err != nil {
				writeResp(w, 1, "邀请请求失败: "+invitee+":"+err.Error(), nil)
				return
			}

			// --- 新增通知逻辑 ---
			group, _ := storageManager.GetGroup(req.GroupId)
			inviter, _ := storageManager.GetUserByUID(req.InviterUid)
			inviteeUser, _ := storageManager.GetUserByUID(invitee)
			adminsAndOwner, _ := storageManager.GetGroupAdminsAndOwner(req.GroupId)
			for _, adminUID := range adminsAndOwner {
				notif := &pb.Notification{
					Type:         "group_invite",
					From:         req.InviterUid,
					FromUsername: inviter.Username,
					To:           adminUID,
					GroupId:      group.GroupId,
					GroupName:    group.Name,
					Content:      "",
					Extra:        fmt.Sprintf("invitee_uid:%s,invitee_username:%s", invitee, inviteeUser.Username),
				}
				protocol.SendNotificationToUser(adminUID, notif)
			}
		}
	}
	writeResp(w, 0, "邀请操作已处理", nil)
}

// 获取当前用户管理的群的待审批邀请请求
func GroupInviteRequestsHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.GroupInviteListReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Uid == "" {
		writeResp(w, 1, "缺少UID", nil)
		return
	}
	// 获取用户管理的群
	groupsByRole, err := storageManager.GetUserGroupsByRole(req.Uid)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}
	var items []*pb.GroupInviteItem
	for _, group := range append(groupsByRole["owner"], groupsByRole["admin"]...) {
		reqs, err := storageManager.GetPendingInviteRequests(group.GroupId)
		if err != nil {
			continue
		}
		for _, r := range reqs {
			inviter, _ := storageManager.GetUserByUID(r.InviterUID)
			invitee, _ := storageManager.GetUserByUID(r.InviteeUID)
			var inviterUsername, inviteeUsername string
			if inviter != nil {
				inviterUsername = inviter.Username
			}
			if invitee != nil {
				inviteeUsername = invitee.Username
			}

			item := &pb.GroupInviteItem{
				Id:              r.ID,
				GroupId:         r.GroupID,
				GroupName:       group.Name,
				InviterUid:      r.InviterUID,
				InviteeUid:      r.InviteeUID,
				Status:          r.Status,
				CreatedAt:       r.CreatedAt,
				InviterUsername: inviterUsername,
				InviteeUsername: inviteeUsername,
			}
			items = append(items, item)
		}
	}
	resp := &pb.GroupInviteListResp{
		Code:  0,
		Msg:   "ok",
		Items: items,
	}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 审批群组邀请请求
func HandleGroupInviteHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.HandleGroupInviteReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Id == "" || req.GroupId == "" || req.InviteeUid == "" {
		writeResp(w, 1, "缺少参数", nil)
		return
	}
	if req.Approve {
		err := storageManager.ApproveInviteRequest(req.Id)
		if err != nil {
			writeResp(w, 1, err.Error(), nil)
			return
		}
		// 审批通过，添加成员
		err = storageManager.JoinGroup(req.GroupId, req.InviteeUid)
		if err != nil {
			writeResp(w, 1, err.Error(), nil)
			return
		}

		// --- 新增通知逻辑 ---
		group, _ := storageManager.GetGroup(req.GroupId)
		notif := &pb.Notification{
			Type:      "group_invite_approved",
			From:      "system",
			To:        req.InviteeUid,
			GroupId:   group.GroupId,
			GroupName: group.Name,
			Content:   "",
			Extra:     "", // 只放特殊参数
		}
		protocol.SendNotificationToUser(req.InviteeUid, notif)

		writeResp(w, 0, "已同意并添加成员", nil)
		return
	} else {
		err := storageManager.RejectInviteRequest(req.Id)
		if err != nil {
			writeResp(w, 1, err.Error(), nil)
			return
		}
		writeResp(w, 0, "已拒绝邀请", nil)
		return
	}
}

// 移除群成员
func KickFromGroupHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.KickFromGroupReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.GroupId == "" || req.OperatorUid == "" || req.TargetUid == "" {
		writeResp(w, 1, "缺少参数", nil)
		return
	}
	// 权限校验
	operatorRole, err := storageManager.GetUserRoleInGroup(req.GroupId, req.OperatorUid)
	if err != nil {
		writeResp(w, 1, "无法获取操作者身份", nil)
		return
	}
	targetRole, err := storageManager.GetUserRoleInGroup(req.GroupId, req.TargetUid)
	if err != nil {
		writeResp(w, 1, "无法获取目标身份", nil)
		return
	}
	if operatorRole == "admin" && targetRole != "member" {
		writeResp(w, 1, "管理员只能移除普通成员", nil)
		return
	}
	if operatorRole == "owner" && req.TargetUid == req.OperatorUid {
		writeResp(w, 1, "群主不能移除自己", nil)
		return
	}
	if operatorRole != "owner" && operatorRole != "admin" {
		writeResp(w, 1, "无权限操作", nil)
		return
	}
	// 先移除管理员权限（如果有）
	if targetRole == "admin" && operatorRole == "owner" {
		// 这里假设有SetGroupAdmin接口，暂时略过
		// storageManager.SetGroupAdmin(req.GroupId, req.TargetUid, false)
	}
	err = storageManager.LeaveGroup(req.GroupId, req.TargetUid)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}

	// --- 新增通知逻辑 ---
	group, _ := storageManager.GetGroup(req.GroupId)
	operator, _ := storageManager.GetUserByUID(req.OperatorUid)
	notif := &pb.Notification{
		Type:         "group_kicked",
		From:         req.OperatorUid,
		FromUsername: operator.Username,
		To:           req.TargetUid,
		GroupId:      group.GroupId,
		GroupName:    group.Name,
		Content:      "",
		Extra:        "", // 只放特殊参数
	}
	protocol.SendNotificationToUser(req.TargetUid, notif)

	writeResp(w, 0, "已移除成员", nil)
}

// 设置/取消管理员
func SetGroupAdminHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.SetGroupAdminReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.GroupId == "" || req.OperatorUid == "" || req.TargetUid == "" {
		writeResp(w, 1, "缺少参数", nil)
		return
	}
	if req.OperatorUid == req.TargetUid {
		writeResp(w, 1, "不能设置自己为管理员", nil)
		return
	}
	role, err := storageManager.GetUserRoleInGroup(req.GroupId, req.OperatorUid)
	if err != nil || role != "owner" {
		writeResp(w, 1, "只有群主可以设置管理员", nil)
		return
	}
	// 更新角色
	newRole := "member"
	if req.SetAdmin {
		newRole = "admin"
	}
	db := storageManager.GetDB()
	_, err = db.Exec("UPDATE group_members SET role = ? WHERE group_id = ? AND uid = ?", newRole, req.GroupId, req.TargetUid)
	if err != nil {
		writeResp(w, 1, "设置失败: "+err.Error(), nil)
		return
	}
	msg := "已取消管理员"
	if req.SetAdmin {
		msg = "已设置为管理员"
	}

	// --- 新增通知逻辑 ---
	group, _ := storageManager.GetGroup(req.GroupId)
	operator, _ := storageManager.GetUserByUID(req.OperatorUid)
	notif := &pb.Notification{
		Type:         "group_admin_change",
		From:         req.OperatorUid,
		FromUsername: operator.Username,
		To:           req.TargetUid,
		GroupId:      group.GroupId,
		GroupName:    group.Name,
		Content:      "",
		Extra:        fmt.Sprintf("set_admin:%v", req.SetAdmin),
	}
	protocol.SendNotificationToUser(req.TargetUid, notif)

	resp := &pb.SetGroupAdminResp{Code: 0, Msg: msg}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 解散群组
func DismissGroupHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.DismissGroupReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.GroupId == "" || req.OperatorUid == "" {
		writeResp(w, 1, "缺少参数", nil)
		return
	}
	// 权限校验：只有群主可以解散群组
	role, err := storageManager.GetUserRoleInGroup(req.GroupId, req.OperatorUid)
	if err != nil || role != "owner" {
		writeResp(w, 1, "只有群主可以解散群组", nil)
		return
	}
	// 获取群名和操作者用户名
	group, _ := storageManager.GetGroup(req.GroupId)
	operator, _ := storageManager.GetUserByUID(req.OperatorUid)

	err = storageManager.DisbandGroup(req.GroupId)
	if err != nil {
		writeResp(w, 1, "解散群组失败: "+err.Error(), nil)
		return
	}

	// 用群组通知方式通知所有成员
	if group != nil && operator != nil {
		for _, memberUID := range group.MemberUids {
			if memberUID == req.OperatorUid {
				continue
			}
			notif := &pb.Notification{
				Type:         "dismissed",
				From:         req.OperatorUid,
				FromUsername: operator.Username,
				To:           memberUID,
				GroupId:      group.GroupId,
				GroupName:    group.Name,
				Content:      "",
				Timestamp:    time.Now().Unix(),
				Extra:        "", // 只放特殊参数
			}
			_ = protocol.SendNotificationToUser(memberUID, notif)
		}
	}

	resp := &pb.DismissGroupResp{Code: 0, Msg: "群组已解散"}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 新增：设置群昵称
func SetGroupNicknameHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.SetGroupNicknameReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.GroupId == "" || req.Uid == "" || req.Nickname == "" {
		writeResp(w, 1, "缺少参数", nil)
		return
	}
	// 权限校验
	role, err := storageManager.GetUserRoleInGroup(req.GroupId, req.Uid)
	if err != nil || role != "owner" {
		writeResp(w, 1, "只有群主可以设置群昵称", nil)
		return
	}
	err = storageManager.SetGroupNickname(req.GroupId, req.Uid, req.Nickname)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}
	resp := &pb.SetGroupNicknameResp{Code: 0, Msg: "群昵称设置成功"}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 新增：修改群名
func UpdateGroupNameHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.UpdateGroupNameReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.GroupId == "" || req.NewName == "" {
		writeResp(w, 1, "缺少参数", nil)
		return
	}
	// 权限校验
	role, err := storageManager.GetUserRoleInGroup(req.GroupId, req.OperatorUid)
	if err != nil || role != "owner" {
		writeResp(w, 1, "只有群主可以修改群名", nil)
		return
	}
	err = storageManager.UpdateGroupName(req.GroupId, req.NewName)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}
	resp := &pb.UpdateGroupNameResp{Code: 0, Msg: "群名修改成功"}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 新增：设置群备注
func SetGroupRemarkHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.SetGroupRemarkReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.GroupId == "" || req.Uid == "" || req.Remark == "" {
		writeResp(w, 1, "缺少参数", nil)
		return
	}
	// 权限校验
	role, err := storageManager.GetUserRoleInGroup(req.GroupId, req.Uid)
	if err != nil || role != "owner" {
		writeResp(w, 1, "只有群主可以设置群备注", nil)
		return
	}
	err = storageManager.SetGroupRemark(req.GroupId, req.Uid, req.Remark)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}
	resp := &pb.SetGroupRemarkResp{Code: 0, Msg: "群备注设置成功"}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 新增：设置群免打扰
func SetGroupDNDHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.SetGroupDNDReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.GroupId == "" || req.Uid == "" {
		writeResp(w, 1, "缺少参数", nil)
		return
	}
	// 权限校验
	role, err := storageManager.GetUserRoleInGroup(req.GroupId, req.Uid)
	if err != nil || role != "owner" {
		writeResp(w, 1, "只有群主可以设置群免打扰", nil)
		return
	}
	err = storageManager.SetGroupDND(req.GroupId, req.Uid, req.Dnd)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}
	resp := &pb.SetGroupDNDResp{Code: 0, Msg: "群免打扰设置成功"}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 新增：设置/取消禁言
func SetGroupMuteHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.SetGroupMuteReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.GroupId == "" || req.TargetUid == "" {
		writeResp(w, 1, "缺少参数", nil)
		return
	}
	// 权限校验
	operatorRole, err := storageManager.GetUserRoleInGroup(req.GroupId, req.OperatorUid)
	if err != nil {
		writeResp(w, 1, "无法获取操作者身份", nil)
		return
	}
	targetRole, err := storageManager.GetUserRoleInGroup(req.GroupId, req.TargetUid)
	if err != nil {
		writeResp(w, 1, "无法获取目标身份", nil)
		return
	}
	if req.TargetUid == req.OperatorUid {
		writeResp(w, 1, "不能禁言自己", nil)
		return
	}
	if operatorRole == "owner" {
		// 群主可以禁言任何人（除了自己）
	} else if operatorRole == "admin" {
		if targetRole != "member" {
			writeResp(w, 1, "管理员只能禁言普通成员，不能禁言群主或其他管理员", nil)
			return
		}
	} else {
		writeResp(w, 1, "无权限操作", nil)
		return
	}
	err = storageManager.SetGroupMute(req.GroupId, req.TargetUid, req.Mute)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}
	resp := &pb.SetGroupMuteResp{Code: 0, Msg: "群禁言设置成功"}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// CORS中间件
func wrapCORS(handler http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		handler(w, r)
	}
}

func StartHTTPServer(addr string) {
	http.HandleFunc("/register", wrapCORS(RegisterHandler))
	http.HandleFunc("/login", wrapCORS(LoginHandler))
	http.HandleFunc("/logout", wrapCORS(LogoutHandler))
	http.HandleFunc("/reset_pwd", wrapCORS(ResetPwdHandler))
	http.HandleFunc("/update_username", wrapCORS(UpdateUsernameHandler))
	http.HandleFunc("/update_pwd", wrapCORS(UpdatePwdHandler))
	http.HandleFunc("/delete_account", wrapCORS(DeleteAccountHandler))
	http.HandleFunc("/user_info", wrapCORS(UserInfoHandler))
	http.HandleFunc("/token_check", wrapCORS(TokenCheckHandler))
	http.HandleFunc("/add_friend", wrapCORS(AddFriendHandler))
	http.HandleFunc("/handle_friend", wrapCORS(HandleFriendHandler))
	http.HandleFunc("/friend_list", wrapCORS(FriendListHandler))
	http.HandleFunc("/delete_friend", wrapCORS(DeleteFriendHandler))
	http.HandleFunc("/friend_request_list", wrapCORS(FriendRequestListHandler))
	http.HandleFunc("/update_remark", wrapCORS(UpdateRemarkHandler))
	http.HandleFunc("/friend_info", wrapCORS(FriendInfoHandler))
	http.HandleFunc("/set_dnd", wrapCORS(SetDNDHandler))
	http.HandleFunc("/create_group", wrapCORS(CreateGroupHandler))
	http.HandleFunc("/group_list", wrapCORS(GroupListHandler))
	http.HandleFunc("/group_info", wrapCORS(GroupInfoHandler))
	http.HandleFunc("/group_members", wrapCORS(GroupMembersHandler))
	http.HandleFunc("/join_group", wrapCORS(JoinGroupHandler))
	http.HandleFunc("/leave_group", wrapCORS(LeaveGroupHandler))
	http.HandleFunc("/group_member_role", wrapCORS(GroupMemberRoleHandler))
	http.HandleFunc("/group_member_info", wrapCORS(GroupMemberInfoHandler))
	http.HandleFunc("/invite_to_group", wrapCORS(InviteToGroupHandler))
	http.HandleFunc("/group_invite_requests", wrapCORS(GroupInviteRequestsHandler))
	http.HandleFunc("/handle_group_invite", wrapCORS(HandleGroupInviteHandler))
	http.HandleFunc("/kick_from_group", wrapCORS(KickFromGroupHandler))
	http.HandleFunc("/set_group_admin", wrapCORS(SetGroupAdminHandler))
	http.HandleFunc("/dismiss_group", wrapCORS(DismissGroupHandler))
	http.HandleFunc("/set_group_nickname", wrapCORS(SetGroupNicknameHandler))
	http.HandleFunc("/update_group_name", wrapCORS(UpdateGroupNameHandler))
	http.HandleFunc("/set_group_remark", wrapCORS(SetGroupRemarkHandler))
	http.HandleFunc("/set_group_dnd", wrapCORS(SetGroupDNDHandler))
	http.HandleFunc("/set_group_mute", wrapCORS(SetGroupMuteHandler))

	// 文件上传和下载路由
	http.HandleFunc("/upload", wrapCORS(UploadFileHandler))
	http.HandleFunc("/uploads/", wrapCORS(DownloadFileHandler))

	http.ListenAndServe(addr, nil)
}
