package api

import (
	"fmt"
	"im/core/auth"
	pb "im/core/protocol/pb"
	"im/core/service"
	"io"
	"net/http"

	"im/core/protocol"
	"im/core/storage"
	"strings"
	"time"

	"im/config"

	"google.golang.org/protobuf/proto"
)

var storageManager = storage.GetStorageManager()
var fileService = service.NewFileService()
var emailService *service.EmailService

// 初始化邮件服务
func initEmailService() {
	config := config.GetEmailConfig()
	emailService = service.NewEmailService(config.Host, config.Port, config.Username, config.Password)
}

func writeResp(w http.ResponseWriter, code int, msg string, data []byte) {
	w.Header().Set("Content-Type", "application/x-protobuf")
	resp := &pb.APIResp{Code: int32(code), Msg: msg, Data: data}
	b, _ := proto.Marshal(resp)
	w.Write(b)
}

// 注册
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

	// 验证邮箱验证码
	if !emailService.VerifyCode(req.Email, req.EmailCode, "register") {
		writeResp(w, 1003, "邮箱验证码错误或已过期", nil)
		return
	}

	uid, err := storageManager.CreateUser(req.Username, req.Password, req.Email)
	if err != nil {
		writeResp(w, 1004, err.Error(), nil)
		return
	}
	writeResp(w, 0, "注册成功", []byte(uid))
}

// 发送邮箱验证码
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
	if req.Purpose != "register" && req.Purpose != "reset_password" {
		writeResp(w, 1, "无效的验证码用途", nil)
		return
	}

	// 检查邮箱是否已存在（注册时）或不存在（重置密码时）
	if req.Purpose == "register" {
		_, err := storageManager.GetUserByEmail(req.Email)
		if err == nil {
			writeResp(w, 1, "该邮箱已被注册", nil)
			return
		}
	} else if req.Purpose == "reset_password" {
		_, err := storageManager.GetUserByEmail(req.Email)
		if err != nil {
			writeResp(w, 1, "该邮箱未注册", nil)
			return
		}
	}

	// 发送验证码
	err = emailService.SendVerificationCode(req.Email, req.Purpose)
	if err != nil {
		writeResp(w, 1, "验证码发送失败: "+err.Error(), nil)
		return
	}

	writeResp(w, 0, "验证码已发送", nil)
}

// 重置密码
func ResetPasswordHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.ResetPasswordReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Email == "" || req.EmailCode == "" || req.NewPassword == "" {
		writeResp(w, 1, "邮箱、验证码和新密码不能为空", nil)
		return
	}

	// 验证邮箱验证码
	if !emailService.VerifyCode(req.Email, req.EmailCode, "reset_password") {
		writeResp(w, 1, "邮箱验证码错误或已过期", nil)
		return
	}

	// 获取用户信息
	user, err := storageManager.GetUserByEmail(req.Email)
	if err != nil {
		writeResp(w, 1, "用户不存在", nil)
		return
	}

	// 更新密码
	err = storageManager.UpdatePassword(user.UID, req.NewPassword)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}

	writeResp(w, 0, "密码重置成功", nil)
}

// 在线账号管理
var onlineAccounts = make(map[string]bool)

// 登录
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
	// 用 bcrypt 校验密码
	ok, err := storageManager.CheckPassword(req.Uid, req.Password)
	if err != nil {
		writeResp(w, 2004, "密码校验失败", nil)
		return
	}
	if !ok {
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

// 登出
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

// 用户信息
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

// 更新用户名
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

// 更新密码
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
	ok, err := storageManager.CheckPassword(req.Uid, req.OldPwd)
	if err != nil {
		writeResp(w, 1, "用户不存在", nil)
		return
	}
	if !ok {
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

// 删除账户
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

// Token检验
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
	// 新增：判断被添加用户是否存在
	_, err = storageManager.GetUserByUID(req.ToUid)
	if err != nil {
		writeResp(w, 1, "被添加用户不存在", nil)
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

// 设置好友备注
func UpdateFriendRemarkHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.UpdateFriendRemarkReq
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
	resp := &pb.UpdateFriendRemarkResp{Code: 0, Msg: "备注设置成功"}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 设置消息免打扰
func SetFriendDNDHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.SetFriendDNDReq
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
	resp := &pb.SetFriendDNDResp{Code: 0, Msg: "设置成功"}
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

// 处理好友请求
func HandleFriendRequestHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.HandleFriendRequestReq
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
	resp := &pb.HandleFriendRequestResp{Code: 0, Msg: "处理成功"}
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
	// 新增：判断群组是否存在
	_, err = storageManager.GetGroup(req.GroupId)
	if err != nil {
		writeResp(w, 1, "群组不存在", nil)
		return
	}

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
	// 使用 manager 层方法获取成员信息
	member, err := storageManager.GetGroupMemberInfo(req.GroupId, req.Uid)
	if err != nil {
		writeResp(w, 1, "成员不存在", nil)
		return
	}
	resp := &pb.GroupMemberInfoResp{
		Code:     0,
		Msg:      "ok",
		Uid:      member.Uid,
		Username: member.Username,
		Nickname: member.Nickname,
		Role:     member.Role,
		JoinTime: member.JoinTime,
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

	friends, _ := storageManager.GetFriends(req.InviterUid)

	for _, invitee := range req.InviteeUids {
		// 1. 判断被邀请用户是否存在
		_, err := storageManager.GetUserByUID(invitee)
		if err != nil {
			writeResp(w, 1, "被邀请用户不存在: "+invitee, nil)
			return
		}
		// 2. 判断是否是好友
		isFriend := false
		for _, f := range friends {
			if f == invitee {
				isFriend = true
				break
			}
		}
		if !isFriend {
			writeResp(w, 1, "只能邀请自己的好友进群: "+invitee, nil)
			return
		}

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
		err := storageManager.SetGroupMemberRole(req.GroupId, req.TargetUid, "member")
		if err != nil {
			writeResp(w, 1, "移除管理员权限失败: "+err.Error(), nil)
			return
		}
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
	// 使用 manager 层方法设置角色
	newRole := "member"
	if req.SetAdmin {
		newRole = "admin"
	}
	err = storageManager.SetGroupMemberRole(req.GroupId, req.TargetUid, newRole)
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

// 获取当前用户管理的群的待审批邀请请求
func GroupRequestListHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.GroupRequestListReq
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
	var items []*pb.GroupRequestItem
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

			item := &pb.GroupRequestItem{
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
	resp := &pb.GroupRequestListResp{
		Code:  0,
		Msg:   "ok",
		Items: items,
	}
	data, _ := proto.Marshal(resp)
	writeResp(w, 0, "ok", data)
}

// 审批群组邀请请求
func HandleGroupRequestHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.HandleGroupRequestReq
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

// 获取最近N条私聊消息
func GetRecentPrivateMessagesHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.GetRecentPrivateMessagesReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.From == "" || req.To == "" || req.Count <= 0 {
		writeResp(w, 1, "缺少参数", nil)
		return
	}
	sessionKey := "chat:" + req.From + ":" + req.To
	msgs, err := storageManager.GetRecentMessages(sessionKey, req.Count)
	var pbMsgs []*pb.IMMessage
	if err != nil || len(msgs) == 0 {
		// Redis查不到，查MongoDB
		mongoMsgs, err2 := storageManager.GetPrivateMessagesFromMongoDB(req.From, req.To, req.Count)
		if err2 != nil {
			writeResp(w, 1, "获取消息失败: "+err2.Error(), nil)
			return
		}
		pbMsgs = mongoMsgs
	} else {
		for _, m := range msgs {
			var msg pb.IMMessage
			if err := proto.Unmarshal([]byte(m), &msg); err == nil {
				pbMsgs = append(pbMsgs, &msg)
			}
		}
	}
	data, _ := proto.Marshal(&pb.IMMessageList{Messages: pbMsgs})
	writeResp(w, 0, "ok", data)
}

// 获取最近N条群聊消息
func GetRecentGroupMessagesHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.GetRecentGroupMessagesReq
	if err := proto.Unmarshal(body, &req); err != nil {
		writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.GroupId == "" || req.Count <= 0 {
		writeResp(w, 1, "缺少参数", nil)
		return
	}
	sessionKey := "group:" + req.GroupId
	msgs, err := storageManager.GetRecentMessages(sessionKey, req.Count)
	var pbMsgs []*pb.IMMessage
	if err != nil || len(msgs) == 0 {
		// Redis查不到，查MongoDB
		mongoMsgs, err2 := storageManager.GetGroupMessagesFromMongoDB(req.GroupId, req.Count)
		if err2 != nil {
			writeResp(w, 1, "获取消息失败: "+err2.Error(), nil)
			return
		}
		pbMsgs = mongoMsgs
	} else {
		for _, m := range msgs {
			var msg pb.IMMessage
			if err := proto.Unmarshal([]byte(m), &msg); err == nil {
				pbMsgs = append(pbMsgs, &msg)
			}
		}
	}
	data, _ := proto.Marshal(&pb.IMMessageList{Messages: pbMsgs})
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
	// 初始化邮件服务
	initEmailService()

	// 用户相关路由
	http.HandleFunc("/register", wrapCORS(RegisterHandler))
	http.HandleFunc("/send_email_code", wrapCORS(SendEmailCodeHandler))
	http.HandleFunc("/reset_password", wrapCORS(ResetPasswordHandler))
	http.HandleFunc("/login", wrapCORS(LoginHandler))
	http.HandleFunc("/logout", wrapCORS(LogoutHandler))
	http.HandleFunc("/user_info", wrapCORS(UserInfoHandler))
	http.HandleFunc("/update_username", wrapCORS(UpdateUsernameHandler))
	http.HandleFunc("/update_pwd", wrapCORS(UpdatePwdHandler))
	http.HandleFunc("/delete_account", wrapCORS(DeleteAccountHandler))
	http.HandleFunc("/token_check", wrapCORS(TokenCheckHandler))

	// 好友相关路由
	http.HandleFunc("/add_friend", wrapCORS(AddFriendHandler))
	http.HandleFunc("/friend_list", wrapCORS(FriendListHandler))
	http.HandleFunc("/friend_info", wrapCORS(FriendInfoHandler))
	http.HandleFunc("/update_friend_remark", wrapCORS(UpdateFriendRemarkHandler))
	http.HandleFunc("/set_friend_dnd", wrapCORS(SetFriendDNDHandler))
	http.HandleFunc("/delete_friend", wrapCORS(DeleteFriendHandler))
	http.HandleFunc("/friend_request_list", wrapCORS(FriendRequestListHandler))
	http.HandleFunc("/handle_friend_request", wrapCORS(HandleFriendRequestHandler))

	// 群组相关路由
	http.HandleFunc("/create_group", wrapCORS(CreateGroupHandler))
	http.HandleFunc("/join_group", wrapCORS(JoinGroupHandler))
	http.HandleFunc("/group_list", wrapCORS(GroupListHandler))
	http.HandleFunc("/group_info", wrapCORS(GroupInfoHandler))
	http.HandleFunc("/group_members", wrapCORS(GroupMembersHandler))
	http.HandleFunc("/leave_group", wrapCORS(LeaveGroupHandler))
	http.HandleFunc("/group_member_info", wrapCORS(GroupMemberInfoHandler))
	http.HandleFunc("/invite_to_group", wrapCORS(InviteToGroupHandler))
	http.HandleFunc("/set_group_nickname", wrapCORS(SetGroupNicknameHandler))
	http.HandleFunc("/set_group_remark", wrapCORS(SetGroupRemarkHandler))
	http.HandleFunc("/set_group_dnd", wrapCORS(SetGroupDNDHandler))
	http.HandleFunc("/set_group_mute", wrapCORS(SetGroupMuteHandler))
	http.HandleFunc("/kick_from_group", wrapCORS(KickFromGroupHandler))
	http.HandleFunc("/update_group_name", wrapCORS(UpdateGroupNameHandler))
	http.HandleFunc("/set_group_admin", wrapCORS(SetGroupAdminHandler))
	http.HandleFunc("/dismiss_group", wrapCORS(DismissGroupHandler))
	http.HandleFunc("/group_request_list", wrapCORS(GroupRequestListHandler))
	http.HandleFunc("/handle_group_request", wrapCORS(HandleGroupRequestHandler))

	// 消息相关路由
	http.HandleFunc("/get_recent_private_messages", wrapCORS(GetRecentPrivateMessagesHandler))
	http.HandleFunc("/get_recent_group_messages", wrapCORS(GetRecentGroupMessagesHandler))

	// 文件上传和下载路由
	http.HandleFunc("/upload", wrapCORS(UploadFileHandler))
	http.HandleFunc("/uploads/", wrapCORS(DownloadFileHandler))

	http.ListenAndServe(addr, nil)
}
