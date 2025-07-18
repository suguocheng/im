package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"net/http"

	pb "im/core/protocol/pb"

	"google.golang.org/protobuf/proto"
)

func register(username, password, email string) {
	if len(password) < 3 || len(email) < 5 {
		fmt.Println("密码或邮箱长度不合法")
		return
	}
	req := &pb.RegisterReq{Username: username, Password: password, Email: email}
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/register", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		fmt.Println("注册请求失败:", err)
		return
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		fmt.Println("响应解析失败:", err)
		return
	}
	fmt.Println("注册响应:", resp.Msg)
	if resp.Code == 0 {
		fmt.Println("分配的UID:", string(resp.Data))
	}
}

func login(uid, password string) {
	if uid == "" || password == "" {
		fmt.Println("UID和密码不能为空")
		return
	}
	req := &pb.LoginReq{Uid: uid, Password: password}
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/login", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		fmt.Println("登录请求失败:", err)
		return
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		fmt.Println("响应解析失败:", err)
		return
	}
	fmt.Println("登录响应:", resp.Msg)
	if resp.Code == 0 {
		savedToken = string(resp.Data)
		savedUID = uid
		fmt.Println("当前UID:", uid)
	}
}

func resetPwd(email, newPwd string, _ interface{}) {
	code := readLine("请输入邮箱验证码（模拟，输入123456）: ", nil)
	if email == "" || newPwd == "" || code == "" {
		fmt.Println("邮箱、新密码和验证码不能为空")
		return
	}
	req := &pb.ResetPwdReq{Email: email, NewPwd: newPwd, Code: code}
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/reset_pwd", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		fmt.Println("找回密码请求失败:", err)
		return
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		fmt.Println("响应解析失败:", err)
		return
	}
	fmt.Println("找回密码响应:", resp.Msg)
}

func updateUsername(uid, newUsername string) {
	if uid == "" || newUsername == "" {
		fmt.Println("UID和新昵称不能为空")
		return
	}
	req := &pb.UpdateUsernameReq{Uid: uid, NewUsername: newUsername}
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/update_username", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		fmt.Println("修改昵称请求失败:", err)
		return
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		fmt.Println("响应解析失败:", err)
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
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/update_pwd", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		fmt.Println("修改密码请求失败:", err)
		return
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		fmt.Println("响应解析失败:", err)
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
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/delete_account", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		fmt.Println("注销账号请求失败:", err)
		return
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		fmt.Println("响应解析失败:", err)
		return
	}
	fmt.Println("注销账号响应:", resp.Msg)
}

// 删除 userInfo 的实现

func logout() {
	if savedToken == "" {
		fmt.Println("未登录，无需登出")
		return
	}
	req := &pb.LogoutReq{Token: savedToken}
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/logout", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		fmt.Println("登出请求失败:", err)
		return
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		fmt.Println("响应解析失败:", err)
		return
	}
	fmt.Println("登出响应:", resp.Msg)
	if resp.Code == 0 {
		savedToken = ""
		savedUID = ""
	}
}

// 添加好友
func addFriend(fromUid, toUid, verifyMsg, token string) {
	if fromUid == "" || toUid == "" {
		fmt.Println("UID不能为空")
		return
	}
	req := &pb.AddFriendReq{FromUid: fromUid, ToUid: toUid, VerifyMsg: verifyMsg, Token: token}
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/add_friend", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		fmt.Println("添加好友请求失败:", err)
		return
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		fmt.Println("响应解析失败:", err)
		return
	}
	fmt.Println("添加好友响应:", resp.Msg)
}

// 处理好友请求
func handleFriend(fromUid, toUid string, accept bool, token string) {
	if fromUid == "" || toUid == "" {
		fmt.Println("UID不能为空")
		return
	}
	req := &pb.HandleFriendReq{FromUid: fromUid, ToUid: toUid, Accept: accept, Token: token}
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/handle_friend", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		fmt.Println("处理好友请求失败:", err)
		return
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		fmt.Println("响应解析失败:", err)
		return
	}
	fmt.Println("处理好友请求响应:", resp.Msg)
}

// 获取好友列表
func friendList(uid, token string) {
	if uid == "" {
		fmt.Println("UID不能为空")
		return
	}
	req := &pb.FriendListReq{Uid: uid, Token: token}
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/friend_list", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		fmt.Println("获取好友列表失败:", err)
		return
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		fmt.Println("响应解析失败:", err)
		return
	}
	var list pb.FriendListResp
	if err := proto.Unmarshal(resp.Data, &list); err != nil {
		fmt.Println("好友列表解析失败:", err)
		return
	}
	fmt.Println("好友列表:", list.FriendUids)
}

// 删除好友
func deleteFriend(uid, friendUid, token string) {
	if uid == "" || friendUid == "" {
		fmt.Println("UID不能为空")
		return
	}
	req := &pb.DeleteFriendReq{Uid: uid, FriendUid: friendUid, Token: token}
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/delete_friend", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		fmt.Println("删除好友请求失败:", err)
		return
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		fmt.Println("响应解析失败:", err)
		return
	}
	fmt.Println("删除好友响应:", resp.Msg)
}

func userInfo() {
	if savedToken == "" {
		fmt.Println("请先登录")
		return
	}
	req := &pb.UserInfoReq{Token: savedToken}
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/user_info", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		fmt.Println("用户信息请求失败:", err)
		return
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		fmt.Println("响应解析失败:", err)
		return
	}
	var info pb.UserInfoResp
	if err := proto.Unmarshal(resp.Data, &info); err != nil {
		fmt.Println("用户信息解析失败:", err)
		return
	}
	fmt.Printf("UID: %s\n昵称: %s\n邮箱: %s\n", info.Uid, info.Username, info.Email)
}
