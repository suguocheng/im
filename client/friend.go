package main

import (
	"fmt"

	pb "im/core/protocol/pb"

	"google.golang.org/protobuf/proto"
)

// 好友菜单
func friendMenu() {
	for {
		fmt.Println("\n=== 好友 ===")
		fmt.Println("1. 查看好友")
		fmt.Println("2. 添加好友")
		fmt.Println("0. 返回")
		opStr := readLine("选择操作: ", nil)
		var op int
		fmt.Sscanf(opStr, "%d", &op)
		switch op {
		case 1:
			showFriendList()
		case 2:
			addFriendMenu()
		case 0:
			return
		default:
			fmt.Println("无效选择，请重新输入")
		}
	}
}

// 查看好友列表
func showFriendList() {
	req := &pb.FriendListReq{Uid: savedUID, Token: savedToken}
	resp, err := sendRequest("/friend_list", req)
	if err != nil {
		fmt.Println("获取好友列表失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("获取好友列表失败: %s\n", resp.Msg)
		return
	}
	var list pb.FriendListResp
	if err := proto.Unmarshal(resp.Data, &list); err != nil {
		fmt.Println("好友列表解析失败:", err)
		return
	}

	if len(list.FriendUids) == 0 {
		fmt.Println("暂无好友")
		return
	}
	fmt.Println("\n=== 好友列表 ===")
	for i, f := range list.FriendUids {
		name := list.FriendUsernames[i]
		if i < len(list.Remarks) && list.Remarks[i] != "" {
			name = list.Remarks[i]
		}
		fmt.Printf("%d. %s(%s)\n", i+1, name, f)
	}
	idxStr := readLine("选择好友编号进入详情(0返回): ", nil)
	var idx int
	fmt.Sscanf(idxStr, "%d", &idx)
	if idx > 0 && idx <= len(list.FriendUids) {
		friendDetailMenu(list.FriendUids[idx-1])
	}
}

// 添加好友菜单
func addFriendMenu() {
	toUid := readLine("对方UID: ", nil)
	msg := readLine("验证消息: ", nil)
	addFriend(savedUID, toUid, msg, savedToken)
}

// 添加好友
func addFriend(fromUid, toUid, verifyMsg, token string) {
	if fromUid == "" || toUid == "" {
		fmt.Println("UID不能为空")
		return
	}
	req := &pb.AddFriendReq{FromUid: fromUid, ToUid: toUid, VerifyMsg: verifyMsg, Token: token}
	resp, err := sendRequest("/add_friend", req)
	if err != nil {
		fmt.Println("添加好友请求失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("添加好友失败: %s\n", resp.Msg)
		return
	}
	fmt.Println("添加好友响应:", resp.Msg)
}

// 好友详情菜单
func friendDetailMenu(friendUid string) {
	for {
		fmt.Printf("\n=== 好友详情: %s ===\n", friendUid)
		fmt.Println("1. 查看信息")
		fmt.Println("2. 设置备注")
		fmt.Println("3. 设置免打扰")
		fmt.Println("4. 私聊")
		fmt.Println("5. 删除好友")
		fmt.Println("0. 返回")
		opStr := readLine("选择操作: ", nil)
		var op int
		fmt.Sscanf(opStr, "%d", &op)
		switch op {
		case 1:
			info := getFriendInfo(savedUID, friendUid, savedToken)
			if info != nil {
				fmt.Printf("UID: %s\n昵称: %s\n邮箱: %s\n备注: %s\n免打扰: %v\n", info.Uid, info.Username, info.Email, info.Remark, info.Dnd)
			}
		case 2:
			remark := readLine("输入备注: ", nil)
			setFriendRemark(savedUID, friendUid, remark, savedToken)
		case 3:
			info := getFriendInfo(savedUID, friendUid, savedToken)
			if info != nil {
				fmt.Printf("当前免打扰状态: %v\n", info.Dnd)
				setStr := readLine("是否开启免打扰? (y/n): ", nil)
				set := setStr == "y" || setStr == "Y"
				setDND(savedUID, friendUid, set, savedToken)
			}
		case 4:
			WsChatWithFriend(friendUid)
		case 5:
			deleteFriend(savedUID, friendUid, savedToken)
			return
		case 0:
			return
		default:
			fmt.Println("无效选择，请重新输入")
		}
	}
}

func getFriendInfo(uid, friendUid, token string) *pb.FriendInfoResp {
	req := &pb.FriendInfoReq{Uid: uid, FriendUid: friendUid, Token: token}
	resp, err := sendRequest("/friend_info", req)
	if err != nil {
		fmt.Println("获取好友信息失败:", err)
		return nil
	}
	if resp.Code != 0 {
		fmt.Printf("获取好友信息失败: %s\n", resp.Msg)
		return nil
	}
	var info pb.FriendInfoResp
	if err := proto.Unmarshal(resp.Data, &info); err != nil {
		fmt.Println("好友信息解析失败:", err)
		return nil
	}
	return &info
}

func setFriendRemark(uid, friendUid, remark, token string) {
	req := &pb.UpdateRemarkReq{Uid: uid, FriendUid: friendUid, Remark: remark, Token: token}
	resp, err := sendRequest("/update_remark", req)
	if err != nil {
		fmt.Println("设置备注失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("设置备注失败: %s\n", resp.Msg)
		return
	}
	fmt.Println(resp.Msg)
}

func setDND(uid, friendUid string, dnd bool, token string) {
	req := &pb.SetDNDReq{Uid: uid, FriendUid: friendUid, Dnd: dnd, Token: token}
	resp, err := sendRequest("/set_dnd", req)
	if err != nil {
		fmt.Println("设置免打扰失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("设置免打扰失败: %s\n", resp.Msg)
		return
	}
	fmt.Println(resp.Msg)
}

// 删除好友
func deleteFriend(uid, friendUid, token string) {
	if uid == "" || friendUid == "" {
		fmt.Println("UID不能为空")
		return
	}
	req := &pb.DeleteFriendReq{Uid: uid, FriendUid: friendUid, Token: token}
	resp, err := sendRequest("/delete_friend", req)
	if err != nil {
		fmt.Println("删除好友请求失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("删除好友失败: %s\n", resp.Msg)
		return
	}
	fmt.Println("删除好友响应:", resp.Msg)
}
