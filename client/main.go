package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/gorilla/websocket"
	"github.com/peterh/liner"
)

type resp struct {
	Code int         `json:"code"`
	Msg  string      `json:"msg"`
	Data interface{} `json:"data"`
}

var savedToken string
var savedUID string

func readLine(prompt string, l *liner.State) string {
	line, err := l.Prompt(prompt)
	if err != nil {
		fmt.Println()
		os.Exit(0)
	}
	return line
}

func register(_ string, username, password, email string) {
	if len(password) < 3 || len(email) < 5 {
		fmt.Println("密码或邮箱长度不合法")
		return
	}
	body := map[string]string{"username": username, "password": password, "email": email}
	b, _ := json.Marshal(body)
	r, err := http.Post("http://localhost:8081/register", "application/json", bytes.NewReader(b))
	if err != nil {
		fmt.Println("注册请求失败:", err)
		return
	}
	defer r.Body.Close()
	var rp map[string]interface{}
	json.NewDecoder(r.Body).Decode(&rp)
	fmt.Println("注册响应:", rp["msg"])
	if code, ok := rp["code"].(float64); ok && code == 0 {
		if data, ok := rp["data"].(map[string]interface{}); ok {
			if uid, ok := data["uid"].(string); ok {
				fmt.Println("分配的UID:", uid)
			}
		}
	}
}

func login(uid, password string) {
	if uid == "" || password == "" {
		fmt.Println("UID和密码不能为空")
		return
	}
	body := map[string]string{"account": uid, "password": password}
	b, _ := json.Marshal(body)
	r, err := http.Post("http://localhost:8081/login", "application/json", bytes.NewReader(b))
	if err != nil {
		fmt.Println("登录请求失败:", err)
		return
	}
	defer r.Body.Close()
	var rp map[string]interface{}
	json.NewDecoder(r.Body).Decode(&rp)
	fmt.Println("登录响应:", rp["msg"])
	if code, ok := rp["code"].(float64); ok && code == 0 {
		if data, ok := rp["data"].(map[string]interface{}); ok {
			if token, ok := data["token"].(string); ok {
				savedToken = token
			}
			if uid, ok := data["account"].(string); ok {
				savedUID = uid
				fmt.Println("当前UID:", uid)
			}
		}
	}
}

func resetPwd(email, newPwd string, l *liner.State) {
	code := readLine("请输入邮箱验证码（模拟，输入123456）: ", l)
	if email == "" || newPwd == "" || code == "" {
		fmt.Println("邮箱、新密码和验证码不能为空")
		return
	}
	body := map[string]string{"email": email, "new_pwd": newPwd, "code": code}
	b, _ := json.Marshal(body)
	r, err := http.Post("http://localhost:8081/reset_pwd", "application/json", bytes.NewReader(b))
	if err != nil {
		fmt.Println("找回密码请求失败:", err)
		return
	}
	defer r.Body.Close()
	var rp map[string]interface{}
	json.NewDecoder(r.Body).Decode(&rp)
	fmt.Println("找回密码响应:", rp["msg"])
}

func updateUsername(uid, newUsername string) {
	if uid == "" || newUsername == "" {
		fmt.Println("UID和新昵称不能为空")
		return
	}
	body := map[string]string{"account": uid, "new_username": newUsername}
	b, _ := json.Marshal(body)
	r, err := http.Post("http://localhost:8081/update_username", "application/json", bytes.NewReader(b))
	if err != nil {
		fmt.Println("修改昵称请求失败:", err)
		return
	}
	defer r.Body.Close()
	var rp map[string]interface{}
	json.NewDecoder(r.Body).Decode(&rp)
	fmt.Println("修改昵称响应:", rp["msg"])
}

func updatePwd(uid, oldPwd, newPwd string) {
	if uid == "" || oldPwd == "" || newPwd == "" {
		fmt.Println("UID、原密码和新密码不能为空")
		return
	}
	body := map[string]string{"account": uid, "old_pwd": oldPwd, "new_pwd": newPwd}
	b, _ := json.Marshal(body)
	r, err := http.Post("http://localhost:8081/update_pwd", "application/json", bytes.NewReader(b))
	if err != nil {
		fmt.Println("修改密码请求失败:", err)
		return
	}
	defer r.Body.Close()
	var rp map[string]interface{}
	json.NewDecoder(r.Body).Decode(&rp)
	fmt.Println("修改密码响应:", rp["msg"])
}

func deleteAccount(uid string) {
	if uid == "" {
		fmt.Println("UID不能为空")
		return
	}
	body := map[string]string{"account": uid}
	b, _ := json.Marshal(body)
	r, err := http.Post("http://localhost:8081/delete_account", "application/json", bytes.NewReader(b))
	if err != nil {
		fmt.Println("注销账号请求失败:", err)
		return
	}
	defer r.Body.Close()
	var rp map[string]interface{}
	json.NewDecoder(r.Body).Decode(&rp)
	fmt.Println("注销账号响应:", rp["msg"])
}

func userInfo() {
	if savedToken == "" {
		fmt.Println("请先登录")
		return
	}
	req, _ := http.NewRequest("POST", "http://localhost:8081/user_info", nil)
	req.Header.Set("Authorization", savedToken)
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		fmt.Println("用户信息请求失败:", err)
		return
	}
	defer resp.Body.Close()
	var rp map[string]interface{}
	json.NewDecoder(resp.Body).Decode(&rp)
	fmt.Println("用户信息响应:", rp["msg"])
	if rp["code"].(float64) == 0 {
		fmt.Printf("用户信息: %+v\n", rp["data"])
	}
}

func logout() {
	if savedToken == "" {
		fmt.Println("未登录，无需登出")
		return
	}
	req, _ := http.NewRequest("POST", "http://localhost:8081/logout", nil)
	req.Header.Set("Authorization", savedToken)
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		fmt.Println("登出请求失败:", err)
		return
	}
	defer resp.Body.Close()
	var rp map[string]interface{}
	json.NewDecoder(resp.Body).Decode(&rp)
	fmt.Println("登出响应:", rp["msg"])
	if rp["code"].(float64) == 0 {
		savedToken = ""
		savedUID = ""
	}
}

func wsClientLiner(l *liner.State) {
	c, _, err := websocket.DefaultDialer.Dial("ws://127.0.0.1:8090/ws", nil)
	if err != nil {
		fmt.Println("WebSocket 连接失败:", err)
		return
	}
	defer c.Close()
	if savedToken == "" {
		fmt.Println("请先登录获取token")
		return
	}
	loginMsg := map[string]interface{}{"type": "login", "token": savedToken}
	b, _ := json.Marshal(loginMsg)
	c.WriteMessage(websocket.TextMessage, b)
	fmt.Println("已连接WebSocket IM服务器，输入: 对方UID:消息内容 发送私聊，Ctrl+C退出：")
	go func() {
		for {
			_, msg, err := c.ReadMessage()
			if err != nil {
				fmt.Println("服务器断开：", err)
				os.Exit(0)
			}
			fmt.Print("收到: ", string(msg), "\n")
		}
	}()
	for {
		text := readLine("", l)
		if text == "" {
			continue
		}
		var to, content string
		sep := -1
		for i, ch := range text {
			if ch == ':' {
				sep = i
				break
			}
		}
		if sep == -1 {
			fmt.Println("格式错误，应为 对方UID:消息内容")
			continue
		}
		to = text[:sep]
		content = text[sep+1:]
		msg := map[string]interface{}{"type": "chat", "to": to, "content": content}
		b, _ := json.Marshal(msg)
		c.WriteMessage(websocket.TextMessage, b)
	}
}

func main() {
	l := liner.NewLiner()
	defer l.Close()
	l.SetCtrlCAborts(true)
	for {
		if savedToken == "" {
			fmt.Println("1. 注册 2. 登录 0. 退出")
			opStr := readLine("选择操作: ", l)
			var op int
			fmt.Sscanf(opStr, "%d", &op)
			switch op {
			case 1:
				u := readLine("昵称: ", l)
				p := readLine("密码: ", l)
				email := readLine("邮箱: ", l)
				register("", u, p, email)
			case 2:
				uid := readLine("UID: ", l)
				p := readLine("密码: ", l)
				login(uid, p)
			case 0:
				return
			}
		} else {
			fmt.Println("1. 找回密码 2. 修改昵称 3. 修改密码 4. 注销账号 5. 用户信息 6. 登出 7. 连接IM(WebSocket) 0. 退出")
			opStr := readLine("选择操作: ", l)
			var op int
			fmt.Sscanf(opStr, "%d", &op)
			switch op {
			case 1:
				email := readLine("邮箱: ", l)
				newPwd := readLine("新密码: ", l)
				resetPwd(email, newPwd, l)
			case 2:
				uid := savedUID
				newU := readLine("新昵称: ", l)
				updateUsername(uid, newU)
			case 3:
				uid := savedUID
				oldPwd := readLine("原密码: ", l)
				newPwd := readLine("新密码: ", l)
				updatePwd(uid, oldPwd, newPwd)
			case 4:
				uid := savedUID
				deleteAccount(uid)
				savedToken = ""
				savedUID = ""
			case 5:
				userInfo()
			case 6:
				logout()
			case 7:
				wsClientLiner(l)
			case 0:
				return
			}
		}
	}
}
