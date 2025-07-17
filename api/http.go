package api

import (
	"fmt"
	"im/core/auth"
	pb "im/core/protocol/pb"
	"io/ioutil"
	"net/http"

	"google.golang.org/protobuf/proto"
)

var userStore = &auth.MemUserStore{}

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
	_, err = userStore.Register(uid, req.Username, req.Password, req.Email)
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
	user, err := userStore.Login(req.Uid, req.Password)
	if err != nil {
		writeResp(w, 2004, err.Error(), nil)
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
	err = userStore.ResetPasswordByEmail(req.Email, req.NewPwd)
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
	err = userStore.UpdateUsername(req.Uid, req.NewUsername)
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
	err = userStore.UpdatePassword(req.Uid, req.OldPwd, req.NewPwd)
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
	err = userStore.DeleteAccount(req.Uid)
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
	user, err := userStore.GetByUID(uid)
	if err != nil {
		writeResp(w, 1, err.Error(), nil)
		return
	}
	writeResp(w, 0, "ok", []byte(user.UID))
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
	http.ListenAndServe(addr, nil)
}
