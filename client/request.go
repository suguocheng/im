package main

import (
	"fmt"
	pb "im/core/protocol/pb"
	"strconv"
	"time"

	"google.golang.org/protobuf/proto"
)

// 处理请求菜单
func requestMenu() {
	for {
		fmt.Println("\n=== 处理请求 ===")
		fmt.Println("1. 处理好友请求")
		fmt.Println("2. 处理群组请求")
		fmt.Println("0. 返回")
		opStr := readLine("选择操作: ", nil)
		var op int
		fmt.Sscanf(opStr, "%d", &op)
		switch op {
		case 1:
			handleFriendRequests()
		case 2:
			handleGroupRequests()
		case 0:
			return
		default:
			fmt.Println("无效选择，请重新输入")
		}
	}
}

func handleFriendRequests() {
	fromUids, fromUsernames, msgs := getFriendRequestListWithNames(savedUID, savedToken)
	if len(fromUids) == 0 {
		fmt.Println("暂无好友请求")
		return
	}
	for i, from := range fromUids {
		uname := "<未知>"
		if i < len(fromUsernames) {
			uname = fromUsernames[i]
		}
		fmt.Printf("%d. %s(%s) 验证消息: %s\n", i+1, uname, from, msgs[i])
	}
	for {
		idxStr := readLine("选择要处理的请求编号(0返回): ", nil)
		idx, _ := strconv.Atoi(idxStr)
		if idx == 0 {
			return
		}
		if idx > 0 && idx <= len(fromUids) {
			acceptStr := readLine("同意? (y/n): ", nil)
			accept := acceptStr == "y" || acceptStr == "Y"
			handleFriend(fromUids[idx-1], savedUID, accept, savedToken)
			break
		} else {
			fmt.Println("编号超出范围")
		}
	}
}

func getFriendRequestListWithNames(uid, token string) ([]string, []string, []string) {
	req := &pb.FriendListReq{Uid: uid, Token: token} // 复用 FriendListReq
	resp, err := sendRequest("/friend_request_list", req)
	if err != nil {
		fmt.Println("获取好友请求列表失败:", err)
		return nil, nil, nil
	}
	if resp.Code != 0 {
		fmt.Printf("获取好友请求列表失败: %s\n", resp.Msg)
		return nil, nil, nil
	}
	var list pb.FriendRequestListResp
	if err := proto.Unmarshal(resp.Data, &list); err != nil {
		fmt.Println("好友请求列表解析失败:", err)
		return nil, nil, nil
	}
	return list.FromUids, list.FromUsernames, list.VerifyMsgs
}

// 处理好友请求
func handleFriend(fromUid, toUid string, accept bool, token string) {
	if fromUid == "" || toUid == "" {
		fmt.Println("UID不能为空")
		return
	}
	req := &pb.HandleFriendReq{FromUid: fromUid, ToUid: toUid, Accept: accept, Token: token}
	resp, err := sendRequest("/handle_friend", req)
	if err != nil {
		fmt.Println("处理好友请求失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("处理好友请求失败: %s\n", resp.Msg)
		return
	}
	fmt.Println("处理好友请求响应:", resp.Msg)
}

func handleGroupRequests() {
	for {
		items := getGroupInviteRequests(savedUID, savedToken)
		if len(items) == 0 {
			fmt.Println("暂无待审批的群组邀请/入群请求")
			return
		}
		for i, item := range items {
			var formattedTime string
			ts, err := strconv.ParseInt(item.CreatedAt, 10, 64)
			if err == nil {
				formattedTime = time.Unix(ts, 0).Format("2006-01-02 15:04:05")
			} else {
				formattedTime = item.CreatedAt // 解析失败则显示原始字符串
			}

			fmt.Printf("%d. 群[%s](%s) 申请/邀请: %s(%s)，发起人: %s(%s)，状态: %s，时间: %s\n",
				i+1, item.GroupName, item.GroupId, item.InviteeUsername, item.InviteeUid, item.InviterUsername, item.InviterUid, item.Status, formattedTime)
		}
		idxStr := readLine("选择要处理的请求编号(0返回): ", nil)
		idx, _ := strconv.Atoi(idxStr)
		if idx == 0 {
			return
		}
		if idx > 0 && idx <= len(items) {
			approveStr := readLine("同意? (y/n): ", nil)
			approve := approveStr == "y" || approveStr == "Y"
			err := handleGroupInvite(items[idx-1].Id, approve, items[idx-1].GroupId, items[idx-1].InviteeUid)
			if err != nil {
				fmt.Println("操作失败:", err)
			} else {
				fmt.Println("操作成功")
			}
			// 处理后刷新列表，继续处理下一个
		} else {
			fmt.Println("编号超出范围")
		}
	}
}

func getGroupInviteRequests(uid, token string) []*pb.GroupInviteItem {
	req := &pb.GroupInviteListReq{Uid: uid, Token: token}
	resp, err := sendRequest("/group_invite_requests", req)
	if err != nil {
		fmt.Println("获取群组邀请列表失败:", err)
		return nil
	}
	if resp.Code != 0 {
		fmt.Printf("获取群组邀请列表失败: %s\n", resp.Msg)
		return nil
	}
	var list pb.GroupInviteListResp
	if err := proto.Unmarshal(resp.Data, &list); err != nil {
		fmt.Println("群组邀请列表解析失败:", err)
		return nil
	}
	return list.Items
}

func handleGroupInvite(id string, approve bool, groupId string, invitee string) error {
	req := &pb.HandleGroupInviteReq{
		Id:         id,
		Approve:    approve,
		Token:      savedToken,
		GroupId:    groupId,
		InviteeUid: invitee,
	}
	resp, err := sendRequest("/handle_group_invite", req)
	if err != nil {
		return fmt.Errorf("处理群组邀请失败: %w", err)
	}
	if resp.Code != 0 {
		return fmt.Errorf("处理群组邀请失败: %s", resp.Msg)
	}

	fmt.Printf("群组邀请已%s\n", map[bool]string{true: "同意", false: "拒绝"}[approve])
	return nil
}
