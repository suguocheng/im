package handler

import (
	"bytes"
	"io"
	"net/http"
	"os"

	"im/internal/services/user-service/service"
	"im/internal/shared/auth"
	"im/internal/shared/logger"
	pb "im/internal/shared/protocol/pb"

	"google.golang.org/protobuf/proto"
)

// UserHandler 用户处理器
type UserHandler struct {
	service *service.UserService
	logger  *logger.Logger
}

// NewUserHandler 创建用户处理器
func NewUserHandler(service *service.UserService, logger *logger.Logger) *UserHandler {
	return &UserHandler{
		service: service,
		logger:  logger,
	}
}

// RegisterRoutes 注册路由
func (h *UserHandler) RegisterRoutes(mux *http.ServeMux) {
	mux.HandleFunc("/register", h.handleCORS(h.register))
	mux.HandleFunc("/login", h.handleCORS(h.login))
	mux.HandleFunc("/logout", h.handleCORS(h.logout))
	mux.HandleFunc("/user_info", h.handleCORS(h.getUserInfo))
	mux.HandleFunc("/update_username", h.handleCORS(h.updateUsername))
	mux.HandleFunc("/update_password", h.handleCORS(h.updatePassword))
	mux.HandleFunc("/delete_account", h.handleCORS(h.deleteAccount))
	mux.HandleFunc("/reset_password", h.handleCORS(h.resetPassword))
}

// writeResp 写入响应
func (h *UserHandler) writeResp(w http.ResponseWriter, code int, msg string, data []byte) {
	w.Header().Set("Content-Type", "application/x-protobuf")
	resp := &pb.APIResp{Code: int32(code), Msg: msg, Data: data}
	b, _ := proto.Marshal(resp)
	w.Write(b)
}

// handleCORS 处理CORS
func (h *UserHandler) handleCORS(handler http.HandlerFunc) http.HandlerFunc {
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

// register 用户注册
func (h *UserHandler) register(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 1001, "请求体读取失败", nil)
		return
	}
	var req pb.RegisterReq
	if err := proto.Unmarshal(body, &req); err != nil {
		h.writeResp(w, 1001, "请求格式错误", nil)
		return
	}
	if len(req.Password) < 3 || len(req.Email) < 5 {
		h.writeResp(w, 1002, "密码或邮箱长度不合法", nil)
		return
	}

	if req.EmailCode == "" {
		h.writeResp(w, 1003, "邮箱验证码不能为空", nil)
		return
	}

	// 验证邮箱验证码
	if !h.service.VerifyEmailCode(req.Email, req.EmailCode, "register") {
		h.writeResp(w, 1003, "邮箱验证码错误或已过期", nil)
		return
	}

	uid, err := h.service.CreateUser(req.Username, req.Password, req.Email)
	if err != nil {
		h.writeResp(w, 1004, err.Error(), nil)
		return
	}
	h.writeResp(w, 0, "注册成功", []byte(uid))
}

// login 用户登录
func (h *UserHandler) login(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 2001, "请求体读取失败", nil)
		return
	}
	var req pb.LoginReq
	if err := proto.Unmarshal(body, &req); err != nil {
		h.writeResp(w, 2001, "请求格式错误", nil)
		return
	}
	if req.Uid == "" || req.Password == "" {
		h.writeResp(w, 2002, "UID和密码不能为空", nil)
		return
	}

	// 检查用户是否存在
	_, err = h.service.GetUserByUID(req.Uid)
	if err != nil {
		h.writeResp(w, 2004, "用户不存在", nil)
		return
	}

	// 验证密码
	ok, err := h.service.CheckPassword(req.Uid, req.Password)
	if err != nil {
		h.writeResp(w, 2004, "密码校验失败", nil)
		return
	}
	if !ok {
		h.writeResp(w, 2004, "密码错误", nil)
		return
	}

	// 使用旧实现的 token 生成
	token, err := auth.GenerateToken(req.Uid)
	if err != nil {
		h.writeResp(w, 2006, "生成token失败", nil)
		return
	}
	h.writeResp(w, 0, "登录成功", []byte(token))
}

// getUserInfo 获取用户信息
func (h *UserHandler) getUserInfo(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.UserInfoReq
	if err := proto.Unmarshal(body, &req); err != nil {
		h.writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Token == "" {
		h.writeResp(w, 1, "缺少token", nil)
		return
	}

	uid, err := auth.ParseToken(req.Token)
	if err != nil {
		h.writeResp(w, 1, "token无效", nil)
		return
	}

	user, err := h.service.GetUserByUID(uid)
	if err != nil {
		h.writeResp(w, 1, "用户不存在", nil)
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
	h.writeResp(w, 0, "ok", data)
}

// updateUsername 更新用户名
func (h *UserHandler) updateUsername(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.UpdateUsernameReq
	if err := proto.Unmarshal(body, &req); err != nil {
		h.writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Uid == "" || req.NewUsername == "" {
		h.writeResp(w, 1, "UID和新昵称不能为空", nil)
		return
	}
	err = h.service.UpdateUsername(req.Uid, req.NewUsername)
	if err != nil {
		h.writeResp(w, 1, err.Error(), nil)
		return
	}
	h.writeResp(w, 0, "昵称修改成功", nil)
}

// updatePassword 更新密码
func (h *UserHandler) updatePassword(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.UpdatePwdReq
	if err := proto.Unmarshal(body, &req); err != nil {
		h.writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Uid == "" || req.OldPwd == "" || req.NewPwd == "" {
		h.writeResp(w, 1, "UID、原密码和新密码不能为空", nil)
		return
	}
	// 先验证旧密码
	ok, err := h.service.CheckPassword(req.Uid, req.OldPwd)
	if err != nil {
		h.writeResp(w, 1, "用户不存在", nil)
		return
	}
	if !ok {
		h.writeResp(w, 1, "原密码错误", nil)
		return
	}
	err = h.service.UpdatePassword(req.Uid, req.NewPwd)
	if err != nil {
		h.writeResp(w, 1, err.Error(), nil)
		return
	}
	h.writeResp(w, 0, "密码修改成功", nil)
}

// deleteAccount 删除账户
func (h *UserHandler) deleteAccount(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.DeleteAccountReq
	if err := proto.Unmarshal(body, &req); err != nil {
		h.writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Uid == "" {
		h.writeResp(w, 1, "UID不能为空", nil)
		return
	}
	err = h.service.DeleteUser(req.Uid)
	if err != nil {
		h.writeResp(w, 1, err.Error(), nil)
		return
	}
	h.writeResp(w, 0, "账号已注销", nil)
}

// resetPassword 重置密码（通过邮箱+验证码）
func (h *UserHandler) resetPassword(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.ResetPasswordReq
	if err := proto.Unmarshal(body, &req); err != nil {
		h.writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Email == "" || req.EmailCode == "" || req.NewPassword == "" {
		h.writeResp(w, 1, "邮箱、验证码和新密码不能为空", nil)
		return
	}

	// 调用通知服务校验验证码
	notifURL := os.Getenv("NOTIFICATION_SERVICE_URL")
	if notifURL == "" {
		notifURL = "http://127.0.0.1:8086/reset_password"
	}
	verifyReq := &pb.ResetPasswordReq{Email: req.Email, EmailCode: req.EmailCode}
	vrb, _ := proto.Marshal(verifyReq)
	resp, err := http.Post(notifURL, "application/x-protobuf", bytes.NewReader(vrb))
	if err != nil {
		h.writeResp(w, 1, "验证码服务不可用", nil)
		return
	}
	defer resp.Body.Close()
	buf, _ := io.ReadAll(resp.Body)
	var api pb.APIResp
	if err := proto.Unmarshal(buf, &api); err != nil || api.Code != 0 {
		h.writeResp(w, 1, "验证码无效", nil)
		return
	}

	// 根据邮箱查用户并更新密码
	user, err := h.service.GetUserByEmail(req.Email)
	if err != nil {
		h.writeResp(w, 1, "用户不存在", nil)
		return
	}
	if err := h.service.UpdatePassword(user.UID, req.NewPassword); err != nil {
		h.writeResp(w, 1, err.Error(), nil)
		return
	}
	h.writeResp(w, 0, "密码重置成功", nil)
}

// logout 用户登出
func (h *UserHandler) logout(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		h.writeResp(w, 1, "请求体读取失败", nil)
		return
	}
	var req pb.LogoutReq
	if err := proto.Unmarshal(body, &req); err != nil {
		h.writeResp(w, 1, "请求格式错误", nil)
		return
	}
	if req.Token == "" {
		h.writeResp(w, 1, "缺少token", nil)
		return
	}

	// 验证token（可选，登出时验证token是否有效）
	uid, err := auth.ParseToken(req.Token)
	if err != nil {
		h.writeResp(w, 1, "token无效", nil)
		return
	}

	h.logger.Infof("用户登出: %s", uid)
	h.writeResp(w, 0, "登出成功", nil)
}
