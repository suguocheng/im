package main

import (
	"fmt"

	pb "im/core/protocol/pb"

	"google.golang.org/protobuf/proto"
)

func register(username, password, email string) {
	if len(password) < 3 || len(email) < 5 {
		fmt.Println("密码或邮箱长度不合法")
		return
	}
	req := &pb.RegisterReq{Username: username, Password: password, Email: email}
	resp, err := sendRequest("/register", req)
	if err != nil {
		fmt.Println("注册请求失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("注册失败: %s\n", resp.Msg)
		return
	}
	fmt.Println("注册响应:", resp.Msg)
	fmt.Println("分配的UID:", string(resp.Data))
}

func login(uid, password string) {
	if uid == "" || password == "" {
		fmt.Println("UID和密码不能为空")
		return
	}
	req := &pb.LoginReq{Uid: uid, Password: password}
	resp, err := sendRequest("/login", req)
	if err != nil {
		fmt.Println("登录请求失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("登录失败: %s\n", resp.Msg)
		return
	}
	fmt.Println("登录响应:", resp.Msg)
	if resp.Code == 0 {
		savedToken = string(resp.Data)
		savedUID = uid
		fmt.Println("当前UID:", uid)
	}
}

func userMenu() {
	for {
		fmt.Println("\n=== 个人中心 ===")
		fmt.Println("1. 修改昵称")
		fmt.Println("2. 修改密码")
		fmt.Println("3. 注销账号")
		fmt.Println("4. 查看个人信息")
		fmt.Println("5. 登出")
		fmt.Println("0. 返回")
		opStr := readLine("选择操作: ", nil)
		var op int
		fmt.Sscanf(opStr, "%d", &op)
		switch op {
		case 1:
			newU := readLine("新昵称: ", nil)
			updateUsername(savedUID, newU)
		case 2:
			oldPwd := readLine("原密码: ", nil)
			newPwd := readLine("新密码: ", nil)
			updatePwd(savedUID, oldPwd, newPwd)
		case 3:
			deleteAccount(savedUID)
			savedToken = ""
			savedUID = ""
			fmt.Println("账号已注销，已退出登录")
			return
		case 4:
			userInfo()
		case 5:
			logout()
			return
		case 0:
			return
		}
	}
}

func updateUsername(uid, newUsername string) {
	if uid == "" || newUsername == "" {
		fmt.Println("UID和新昵称不能为空")
		return
	}
	req := &pb.UpdateUsernameReq{Uid: uid, NewUsername: newUsername}
	resp, err := sendRequest("/update_username", req)
	if err != nil {
		fmt.Println("修改昵称请求失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("修改昵称失败: %s\n", resp.Msg)
		return
	}
	fmt.Println("修改昵称响应:", resp.Msg)
}

func updatePwd(uid, oldPwd, newPwd string) {
	if uid == "" || oldPwd == "" || newPwd == "" {
		fmt.Println("UID、原密码和新密码不能为空")
		return
	}
	req := &pb.UpdatePwdReq{Uid: uid, OldPwd: oldPwd, NewPwd: newPwd}
	resp, err := sendRequest("/update_pwd", req)
	if err != nil {
		fmt.Println("修改密码请求失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("修改密码失败: %s\n", resp.Msg)
		return
	}
	fmt.Println("修改密码响应:", resp.Msg)
}

func deleteAccount(uid string) {
	if uid == "" {
		fmt.Println("UID不能为空")
		return
	}
	req := &pb.DeleteAccountReq{Uid: uid}
	resp, err := sendRequest("/delete_account", req)
	if err != nil {
		fmt.Println("注销账号请求失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("注销账号失败: %s\n", resp.Msg)
		return
	}
	fmt.Println("注销账号响应:", resp.Msg)
}

func userInfo() {
	if savedToken == "" {
		fmt.Println("请先登录")
		return
	}
	req := &pb.UserInfoReq{Token: savedToken}
	resp, err := sendRequest("/user_info", req)
	if err != nil {
		fmt.Println("用户信息请求失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("获取用户信息失败: %s\n", resp.Msg)
		return
	}
	var info pb.UserInfoResp
	if err := proto.Unmarshal(resp.Data, &info); err != nil {
		fmt.Println("用户信息解析失败:", err)
		return
	}
	fmt.Printf("UID: %s\n昵称: %s\n邮箱: %s\n", info.Uid, info.Username, info.Email)
}

func logout() {
	if savedToken == "" {
		fmt.Println("未登录，无需登出")
		return
	}
	req := &pb.LogoutReq{Token: savedToken}
	resp, err := sendRequest("/logout", req)
	if err != nil {
		fmt.Println("登出请求失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("登出失败: %s\n", resp.Msg)
		return
	}
	fmt.Println("登出响应:", resp.Msg)
	if resp.Code == 0 {
		savedToken = ""
		savedUID = ""
	}
}
