package main

import (
	"fmt"

	"github.com/peterh/liner"
)

var savedToken string
var savedUID string

// 声明外部依赖，确保 main.go 能访问 user.go、util.go 的符号
// Go 会自动链接同包下的其他文件的全局变量和函数，无需 import "./user" 等
// 只需保证 main.go 没有重复声明，且所有符号在 client 包下唯一

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
				register(u, p, email)
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
