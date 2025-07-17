package api

import (
	"encoding/json"
	"fmt"
	"im/core/auth"
	"net/http"
)

var userStore = &auth.MemUserStore{}

type resp struct {
	Code int         `json:"code"`
	Msg  string      `json:"msg"`
	Data interface{} `json:"data,omitempty"`
}

var nextUID = 1

func RegisterHandler(w http.ResponseWriter, r *http.Request) {
	var req struct {
		Username string `json:"username"`
		Password string `json:"password"`
		Email    string `json:"email"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		json.NewEncoder(w).Encode(resp{Code: 1001, Msg: "请求格式错误"})
		return
	}
	if len(req.Password) < 3 || len(req.Email) < 5 {
		json.NewEncoder(w).Encode(resp{Code: 1002, Msg: "密码或邮箱长度不合法"})
		return
	}
	uid := fmt.Sprintf("%d", nextUID)
	nextUID++
	user, err := userStore.Register(uid, req.Username, req.Password, req.Email)
	if err != nil {
		if err.Error() == "邮箱已被注册" {
			json.NewEncoder(w).Encode(resp{Code: 1003, Msg: "邮箱已被注册"})
		} else {
			json.NewEncoder(w).Encode(resp{Code: 1004, Msg: err.Error()})
		}
		return
	}
	json.NewEncoder(w).Encode(resp{Code: 0, Msg: "注册成功", Data: map[string]interface{}{"user": user, "uid": uid}})
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	var req struct {
		UID      string `json:"account"`
		Password string `json:"password"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		json.NewEncoder(w).Encode(resp{Code: 2001, Msg: "请求格式错误"})
		return
	}
	if req.UID == "" || req.Password == "" {
		json.NewEncoder(w).Encode(resp{Code: 2002, Msg: "UID和密码不能为空"})
		return
	}
	if onlineAccounts[req.UID] {
		json.NewEncoder(w).Encode(resp{Code: 2003, Msg: "该账号已在其他地方登录"})
		return
	}
	user, err := userStore.Login(req.UID, req.Password)
	if err != nil {
		if err.Error() == "账号或密码错误" {
			json.NewEncoder(w).Encode(resp{Code: 2004, Msg: "账号或密码错误"})
		} else {
			json.NewEncoder(w).Encode(resp{Code: 2005, Msg: err.Error()})
		}
		return
	}
	onlineAccounts[req.UID] = true
	token, err := auth.GenerateToken(user.UID)
	if err != nil {
		json.NewEncoder(w).Encode(resp{Code: 2006, Msg: "生成token失败"})
		return
	}
	json.NewEncoder(w).Encode(resp{Code: 0, Msg: "登录成功", Data: map[string]interface{}{"user": user, "token": token, "uid": user.UID}})
}

func ResetPwdHandler(w http.ResponseWriter, r *http.Request) {
	var req struct {
		Email  string `json:"email"`
		NewPwd string `json:"new_pwd"`
		Code   string `json:"code"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: "请求格式错误"})
		return
	}
	if req.Email == "" || req.NewPwd == "" {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: "邮箱和新密码不能为空"})
		return
	}
	// 发送验证码（模拟）
	// 实际应保存验证码并校验
	fmt.Printf("向 %s 发送验证码: 123456 (模拟)\n", req.Email)
	if req.Code != "123456" {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: "验证码错误(模拟)"})
		return
	}
	err := userStore.ResetPasswordByEmail(req.Email, req.NewPwd)
	if err != nil {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: err.Error()})
		return
	}
	json.NewEncoder(w).Encode(resp{Code: 0, Msg: "密码重置成功"})
}

func UpdateUsernameHandler(w http.ResponseWriter, r *http.Request) {
	var req struct {
		UID         string `json:"account"`
		NewUsername string `json:"new_username"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: "请求格式错误"})
		return
	}
	if req.UID == "" || req.NewUsername == "" {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: "UID和新昵称不能为空"})
		return
	}
	err := userStore.UpdateUsername(req.UID, req.NewUsername)
	if err != nil {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: err.Error()})
		return
	}
	json.NewEncoder(w).Encode(resp{Code: 0, Msg: "昵称修改成功"})
}

func UpdatePwdHandler(w http.ResponseWriter, r *http.Request) {
	var req struct {
		UID    string `json:"account"`
		OldPwd string `json:"old_pwd"`
		NewPwd string `json:"new_pwd"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: "请求格式错误"})
		return
	}
	if req.UID == "" || req.OldPwd == "" || req.NewPwd == "" {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: "UID、原密码和新密码不能为空"})
		return
	}
	err := userStore.UpdatePassword(req.UID, req.OldPwd, req.NewPwd)
	if err != nil {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: err.Error()})
		return
	}
	json.NewEncoder(w).Encode(resp{Code: 0, Msg: "密码修改成功"})
}

func TokenCheckHandler(w http.ResponseWriter, r *http.Request) {
	token := r.Header.Get("Authorization")
	if token == "" {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: "缺少token"})
		return
	}
	userID, err := auth.ParseToken(token)
	if err != nil {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: "token无效"})
		return
	}
	json.NewEncoder(w).Encode(resp{Code: 0, Msg: "token有效", Data: map[string]interface{}{"user_id": userID}})
}

func DeleteAccountHandler(w http.ResponseWriter, r *http.Request) {
	var req struct {
		UID string `json:"account"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: "请求格式错误"})
		return
	}
	if req.UID == "" {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: "UID不能为空"})
		return
	}
	err := userStore.DeleteAccount(req.UID)
	if err != nil {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: err.Error()})
		return
	}
	json.NewEncoder(w).Encode(resp{Code: 0, Msg: "账号已注销"})
}

func UserInfoHandler(w http.ResponseWriter, r *http.Request) {
	token := r.Header.Get("Authorization")
	if token == "" {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: "缺少token"})
		return
	}
	uid, err := auth.ParseToken(token)
	if err != nil {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: "token无效"})
		return
	}
	user, err := userStore.GetByUID(uid)
	if err != nil {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: err.Error()})
		return
	}
	json.NewEncoder(w).Encode(resp{Code: 0, Msg: "ok", Data: user})
}

// 在线账号管理
var onlineAccounts = make(map[string]bool)

func LogoutHandler(w http.ResponseWriter, r *http.Request) {
	token := r.Header.Get("Authorization")
	if token == "" {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: "缺少token"})
		return
	}
	userID, err := auth.ParseToken(token)
	if err != nil {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: "token无效"})
		return
	}
	delete(onlineAccounts, userID)
	json.NewEncoder(w).Encode(resp{Code: 0, Msg: "已登出"})
}

// 邮箱验证码功能预留接口（实际应集成邮件服务）
func SendEmailCodeHandler(w http.ResponseWriter, r *http.Request) {
	var req struct {
		Email string `json:"email"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: "请求格式错误"})
		return
	}
	if req.Email == "" {
		json.NewEncoder(w).Encode(resp{Code: 1, Msg: "邮箱不能为空"})
		return
	}
	// 这里应调用实际邮件服务发送验证码
	json.NewEncoder(w).Encode(resp{Code: 0, Msg: "验证码已发送(模拟)"})
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
