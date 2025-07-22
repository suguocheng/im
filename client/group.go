package main

import (
	"fmt"
	"strconv"
	"strings"

	pb "im/core/protocol/pb"

	"google.golang.org/protobuf/proto"
)

// 群组主菜单
func GroupMenu() {
	for {
		fmt.Println("\n=== 群组功能 ===")
		fmt.Println("1. 查看群组")
		fmt.Println("2. 创建群组")
		fmt.Println("3. 加入群组")
		fmt.Println("0. 返回上级菜单")
		choice := readLine("请选择操作: ", nil)
		switch choice {
		case "1":
			showMyGroups()
		case "2":
			createGroup()
		case "3":
			joinGroup()
		case "0":
			return
		default:
			fmt.Println("无效选择，请重试")
		}
	}
}

// 分类显示群组，编号进入详情
func showMyGroups() {
	fmt.Println("\n=== 我的群组 ===")
	// 获取群组列表
	req := &pb.GroupListReq{Uid: savedUID}
	resp, err := sendRequest("/group_list", req)
	if err != nil {
		fmt.Println("获取群组列表失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("获取群组列表失败: %s\n", resp.Msg)
		return
	}
	var listResp pb.GroupListResp
	if err := proto.Unmarshal(resp.Data, &listResp); err != nil {
		fmt.Println("解析响应失败:", err)
		return
	}
	if len(listResp.Groups) == 0 {
		fmt.Println("您还没有加入任何群组")
		return
	}
	// 分类
	ownerGroups := []*pb.Group{}
	adminGroups := []*pb.Group{}
	memberGroups := []*pb.Group{}
	for _, group := range listResp.Groups {
		roleReq := &pb.GroupMemberRoleReq{GroupId: group.GroupId, Uid: savedUID}
		roleResp, err := sendRequest("/group_member_role", roleReq)
		if err != nil {
			continue
		}
		if roleResp.Code != 0 {
			continue
		}
		var roleRespData pb.GroupMemberRoleResp
		if err := proto.Unmarshal(roleResp.Data, &roleRespData); err != nil {
			continue
		}
		switch roleRespData.Role {
		case "owner":
			ownerGroups = append(ownerGroups, group)
		case "admin":
			adminGroups = append(adminGroups, group)
		default:
			memberGroups = append(memberGroups, group)
		}
	}
	allGroups := []*pb.Group{}
	idx := 1
	if len(ownerGroups) > 0 {
		fmt.Println("\n【我创建的群组】")
		for _, g := range ownerGroups {
			displayName := g.Name
			if g.Remark != "" {
				displayName = g.Remark
			}
			fmt.Printf("%d. %s(%s)\n", idx, displayName, g.GroupId)
			allGroups = append(allGroups, g)
			idx++
		}
	}
	if len(adminGroups) > 0 {
		fmt.Println("\n【我管理的群组】")
		for _, g := range adminGroups {
			displayName := g.Name
			if g.Remark != "" {
				displayName = g.Remark
			}
			fmt.Printf("%d. %s(%s)\n", idx, displayName, g.GroupId)
			allGroups = append(allGroups, g)
			idx++
		}
	}
	if len(memberGroups) > 0 {
		fmt.Println("\n【我加入的群组】")
		for _, g := range memberGroups {
			displayName := g.Name
			if g.Remark != "" {
				displayName = g.Remark
			}
			fmt.Printf("%d. %s(%s)\n", idx, displayName, g.GroupId)
			allGroups = append(allGroups, g)
			idx++
		}
	}
	choice := readLine("\n请输入群组编号进入详情(0返回): ", nil)
	var sel int
	fmt.Sscanf(choice, "%d", &sel)
	if sel > 0 && sel <= len(allGroups) {
		showGroupDetail(allGroups[sel-1])
	}
}

// 创建群组
func createGroup() {
	fmt.Println("\n=== 创建群组 ===")

	name := readLine("请输入群组名称: ", nil)
	if name == "" {
		fmt.Println("群组名称不能为空")
		return
	}

	// 发送创建群组请求
	req := &pb.CreateGroupReq{
		Name:     name,
		OwnerUid: savedUID,
	}

	resp, err := sendRequest("/create_group", req)
	if err != nil {
		fmt.Println("创建群组失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("创建群组失败: %s\n", resp.Msg)
		return
	}

	var createResp pb.CreateGroupResp
	if err := proto.Unmarshal(resp.Data, &createResp); err != nil {
		fmt.Println("解析响应失败:", err)
		return
	}

	fmt.Printf("群组创建成功！群组ID: %s\n", createResp.GroupId)
}

// 加入群组
func joinGroup() {
	fmt.Println("\n=== 加入群组 ===")

	groupID := readLine("请输入群组ID: ", nil)
	if groupID == "" {
		fmt.Println("群组ID不能为空")
		return
	}

	req := &pb.JoinGroupReq{
		GroupId: groupID,
		Uid:     savedUID,
	}

	resp, err := sendRequest("/join_group", req)
	if err != nil {
		fmt.Println("申请加入群组失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("申请加入群组失败: %s\n", resp.Msg)
		return
	}

	var joinResp pb.JoinGroupResp
	if err := proto.Unmarshal(resp.Data, &joinResp); err != nil {
		fmt.Println("解析响应失败:", err)
		return
	}

	fmt.Println("申请加入群组成功！")
}

// 退出群组
func leaveGroup(groupId string) {
	fmt.Println("\n=== 退出群组 ===")

	req := &pb.LeaveGroupReq{
		GroupId: groupId,
		Uid:     savedUID,
	}

	resp, err := sendRequest("/leave_group", req)
	if err != nil {
		fmt.Println("退出群组失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("退出群组失败: %s\n", resp.Msg)
		return
	}

	var leaveResp pb.LeaveGroupResp
	if err := proto.Unmarshal(resp.Data, &leaveResp); err != nil {
		fmt.Println("解析响应失败:", err)
		return
	}

	fmt.Println("退出群组成功！")
}

// 群组详情页，按角色显示不同菜单
func showGroupDetail(group *pb.Group) {
	fmt.Printf("\n=== 群组详情: %s (%s) ===\n", group.Name, group.GroupId)
	fmt.Printf("群主: %s\n", group.OwnerUid)
	fmt.Printf("成员数: %d\n", len(group.MemberUids))
	// 获取当前用户在群组中的角色
	roleReq := &pb.GroupMemberRoleReq{GroupId: group.GroupId, Uid: savedUID}
	roleResp, err := sendRequest("/group_member_role", roleReq)
	role := "member"
	if err == nil {
		if roleResp.Code != 0 {
			fmt.Printf("获取角色失败: %s\n", roleResp.Msg)
			return
		}
		var roleRespData pb.GroupMemberRoleResp
		if err := proto.Unmarshal(roleResp.Data, &roleRespData); err == nil {
			role = roleRespData.Role
		}
	}
	for {
		fmt.Println("\n--- 群组操作菜单 ---")
		fmt.Println("1. 查看信息（含成员信息）")
		fmt.Println("2. 邀请新成员")
		fmt.Println("3. 设置备注")
		fmt.Println("4. 设置群昵称")
		fmt.Println("5. 设置免打扰")
		fmt.Println("6. 群聊")
		if role != "owner" {
			fmt.Println("7. 退出群组")
		}
		if role == "admin" || role == "owner" {
			fmt.Println("8. 修改群名")
			fmt.Println("9. 移除成员")
			fmt.Println("10. 设置禁言")
		}
		if role == "owner" {
			fmt.Println("11. 设置/取消管理员")
			fmt.Println("12. 解散群组")
		}
		fmt.Println("0. 返回")
		choice := readLine("请选择操作: ", nil)
		switch choice {
		case "1":
			showGroupMembersDetail(group)
		case "2":
			// 邀请新成员逻辑
			inviteToGroup(group.GroupId)
		case "3":
			// 设置备注
			setGroupRemark(group.GroupId)
		case "4":
			// 设置群昵称逻辑
			setGroupNickname(group.GroupId)
		case "5":
			// 设置免打扰
			setGroupDND(group.GroupId)
		case "6":
			WsChatWithGroup(group.GroupId, group.Name)
		case "7":
			if role != "owner" {
				leaveGroup(group.GroupId)
			}
		case "8":
			if role == "admin" || role == "owner" {
				// 修改群名
				updateGroupName(group.GroupId)
			}
		case "9":
			if role == "admin" || role == "owner" {
				kickFromGroup(group.GroupId, role)
			}
		case "10":
			if role == "admin" || role == "owner" {
				// 设置禁言
				setGroupMute(group.GroupId, role)
			}
		case "11":
			if role == "owner" {
				setGroupAdmin(group.GroupId)
			}
		case "12":
			if role == "owner" {
				dismissGroup(group.GroupId)
			}
		case "0":
			return
		default:
			fmt.Println("无效选择，请重新输入")
		}
	}
}

// 查看群成员详细信息
func showGroupMembersDetail(group *pb.Group) {
	fmt.Println("\n=== 群成员列表 ===")
	for i, member := range group.MemberUids {
		memberInfoReq := &pb.GroupMemberInfoReq{
			GroupId: group.GroupId,
			Uid:     member,
		}
		memberInfoResp, err := sendRequest("/group_member_info", memberInfoReq)
		if err != nil {
			fmt.Printf("%d. %s (UID: %s) - 角色: 未知\n", i+1, "未知用户", member)
			continue
		}
		if memberInfoResp.Code != 0 {
			fmt.Printf("%d. %s (UID: %s) - 角色: 未知\n", i+1, "未知用户", member)
			continue
		}
		var memberInfoRespData pb.GroupMemberInfoResp
		if err := proto.Unmarshal(memberInfoResp.Data, &memberInfoRespData); err != nil {
			fmt.Printf("%d. %s (UID: %s) - 角色: 未知\n", i+1, "未知用户", member)
			continue
		}
		displayName := memberInfoRespData.Username
		if memberInfoRespData.Nickname != "" {
			displayName = memberInfoRespData.Nickname
		}
		fmt.Printf("%d. %s (UID: %s) - 角色: %s\n", i+1, displayName, member, memberInfoRespData.Role)
	}
}

// 邀请新成员
func inviteToGroup(groupId string) {
	// 获取好友列表用于选择
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
		fmt.Println("暂无可邀请的好友")
		return
	}

	fmt.Println("可邀请的好友:")
	for i, f := range list.FriendUids {
		name := list.FriendUsernames[i]
		if i < len(list.Remarks) && list.Remarks[i] != "" {
			name = list.Remarks[i]
		}
		fmt.Printf("%d. %s(%s)\n", i+1, name, f)
	}

	input := readLine("请输入要邀请的好友编号(多个用逗号分隔): ", nil)
	if input == "" {
		fmt.Println("未选择好友")
		return
	}

	var inviteeUIDs []string
	parts := strings.Split(input, ",")
	for _, part := range parts {
		idx, err := strconv.Atoi(strings.TrimSpace(part))
		if err != nil || idx < 1 || idx > len(list.FriendUids) {
			fmt.Printf("无效编号: %s\n", part)
			continue
		}
		inviteeUIDs = append(inviteeUIDs, list.FriendUids[idx-1])
	}

	if len(inviteeUIDs) == 0 {
		return
	}

	inviteReq := &pb.InviteToGroupReq{
		GroupId:     groupId,
		InviterUid:  savedUID,
		InviteeUids: inviteeUIDs,
	}
	inviteResp, err := sendRequest("/invite_to_group", inviteReq)
	if err != nil {
		fmt.Println("邀请失败:", err)
		return
	}
	if inviteResp.Code != 0 {
		fmt.Printf("邀请失败: %s\n", inviteResp.Msg)
		return
	}
	fmt.Println(inviteResp.Msg)
}

// 设置群昵称
func setGroupNickname(groupId string) {
	nickname := readLine("请输入新的群昵称: ", nil)
	if nickname == "" {
		fmt.Println("群昵称不能为空")
		return
	}
	req := &pb.SetGroupNicknameReq{
		GroupId:  groupId,
		Uid:      savedUID,
		Nickname: nickname,
	}
	resp, err := sendRequest("/set_group_nickname", req)
	if err != nil {
		fmt.Println("设置失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("设置失败: %s\n", resp.Msg)
		return
	}
	fmt.Println(resp.Msg)
}

// 设置群备注
func setGroupRemark(groupId string) {
	remark := readLine("请输入你的群备注: ", nil)
	req := &pb.SetGroupRemarkReq{
		GroupId: groupId,
		Uid:     savedUID,
		Remark:  remark,
	}
	resp, err := sendRequest("/set_group_remark", req)
	if err != nil {
		fmt.Println("设置失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("设置失败: %s\n", resp.Msg)
		return
	}
	fmt.Println(resp.Msg)
}

// 设置群免打扰
func setGroupDND(groupId string) {
	// (可以先获取当前状态)
	setStr := readLine("是否开启免打扰? (y/n): ", nil)
	set := setStr == "y" || setStr == "Y"
	req := &pb.SetGroupDNDReq{
		GroupId: groupId,
		Uid:     savedUID,
		Dnd:     set,
	}
	resp, err := sendRequest("/set_group_dnd", req)
	if err != nil {
		fmt.Println("设置失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("设置失败: %s\n", resp.Msg)
		return
	}
	fmt.Println(resp.Msg)
}

// 修改群名
func updateGroupName(groupId string) {
	newName := readLine("请输入新的群组名称: ", nil)
	if newName == "" {
		fmt.Println("群组名称不能为空")
		return
	}
	req := &pb.UpdateGroupNameReq{
		GroupId:     groupId,
		OperatorUid: savedUID,
		NewName:     newName,
	}
	resp, err := sendRequest("/update_group_name", req)
	if err != nil {
		fmt.Println("修改失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("修改失败: %s\n", resp.Msg)
		return
	}
	fmt.Println(resp.Msg)
}

// 设置/取消禁言
func setGroupMute(groupId, operatorRole string) {
	// 获取群成员列表
	req := &pb.GroupMembersReq{GroupId: groupId}
	resp, err := sendRequest("/group_members", req)
	if err != nil {
		fmt.Println("获取群成员失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("获取群成员失败: %s\n", resp.Msg)
		return
	}
	var membersResp pb.GroupMembersResp
	if err := proto.Unmarshal(resp.Data, &membersResp); err != nil {
		fmt.Println("解析群成员失败:", err)
		return
	}
	if len(membersResp.Members) == 0 {
		fmt.Println("群成员为空")
		return
	}
	fmt.Println("可设置禁言的成员：")
	memberOptions := make([]*pb.GroupMember, 0)
	for _, m := range membersResp.Members {
		if m.Uid == savedUID {
			continue // 跳过自己
		}
		fmt.Printf("%d. %s(%s)\n", len(memberOptions)+1, m.Username, m.Uid)
		memberOptions = append(memberOptions, m)
	}
	if len(memberOptions) == 0 {
		fmt.Println("无可禁言的成员")
		return
	}
	idxStr := readLine("选择成员编号(0返回): ", nil)
	var idx int
	fmt.Sscanf(idxStr, "%d", &idx)
	if idx <= 0 || idx > len(memberOptions) {
		return
	}
	target := memberOptions[idx-1]
	setStr := readLine("是否禁言该成员? (y=禁言/n=取消禁言): ", nil)
	mute := setStr == "y" || setStr == "Y"

	// 调用后端接口
	reqMute := &pb.SetGroupMuteReq{
		GroupId:     groupId,
		OperatorUid: savedUID,
		TargetUid:   target.Uid,
		Mute:        mute,
	}
	respMute, err := sendRequest("/set_group_mute", reqMute)
	if err != nil {
		fmt.Println("设置禁言失败:", err)
		return
	}
	if respMute.Code != 0 {
		fmt.Printf("设置禁言失败: %s\n", respMute.Msg)
		return
	}
	fmt.Println(respMute.Msg)
}

// 移除群成员
func kickFromGroup(groupId, operatorRole string) {
	// 获取群成员列表
	req := &pb.GroupMembersReq{GroupId: groupId}
	resp, err := sendRequest("/group_members", req)
	if err != nil {
		fmt.Println("获取群成员失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("获取群成员失败: %s\n", resp.Msg)
		return
	}
	var membersResp pb.GroupMembersResp
	if err := proto.Unmarshal(resp.Data, &membersResp); err != nil {
		fmt.Println("群成员解析失败:", err)
		return
	}

	var candidates []*pb.GroupMember
	for _, m := range membersResp.Members {
		if m.Uid == savedUID {
			continue // 不能移除自己
		}
		if operatorRole == "admin" && m.Role != "member" {
			continue // 管理员只能移除普通成员
		}
		candidates = append(candidates, m)
	}

	if len(candidates) == 0 {
		fmt.Println("没有可移除的成员")
		return
	}

	fmt.Println("可移除成员:")
	for i, m := range candidates {
		fmt.Printf("%d. %s(%s) 角色:%s\n", i+1, m.Username, m.Uid, m.Role)
	}
	idxStr := readLine("选择要移除的成员编号(0返回): ", nil)
	idx, _ := strconv.Atoi(idxStr)
	if idx == 0 {
		return
	}
	if idx > 0 && idx <= len(candidates) {
		targetUid := candidates[idx-1].Uid
		kickReq := &pb.KickFromGroupReq{
			GroupId:     groupId,
			OperatorUid: savedUID,
			TargetUid:   targetUid,
		}
		kickResp, err := sendRequest("/kick_from_group", kickReq)
		if err != nil {
			fmt.Println("移除失败:", err)
		} else {
			if kickResp.Code != 0 {
				fmt.Printf("移除失败: %s\n", kickResp.Msg)
			} else {
				fmt.Println(kickResp.Msg)
			}
		}
	} else {
		fmt.Println("编号超出范围")
	}
}

// 设置/取消管理员
func setGroupAdmin(groupId string) {
	// 获取群成员列表
	req := &pb.GroupMembersReq{GroupId: groupId}
	resp, err := sendRequest("/group_members", req)
	if err != nil {
		fmt.Println("获取群成员失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("获取群成员失败: %s\n", resp.Msg)
		return
	}
	var membersResp pb.GroupMembersResp
	if err := proto.Unmarshal(resp.Data, &membersResp); err != nil {
		fmt.Println("群成员解析失败:", err)
		return
	}

	var candidates []*pb.GroupMember
	for _, m := range membersResp.Members {
		if m.Uid == savedUID {
			continue // 不能设置自己
		}
		candidates = append(candidates, m)
	}

	if len(candidates) == 0 {
		fmt.Println("没有可操作的成员")
		return
	}

	fmt.Println("可设置/取消管理员的成员:")
	for i, m := range candidates {
		status := "普通成员"
		if m.Role == "admin" {
			status = "管理员"
		}
		fmt.Printf("%d. %s(%s) [%s]\n", i+1, m.Username, m.Uid, status)
	}
	idxStr := readLine("选择成员编号(0返回): ", nil)
	idx, _ := strconv.Atoi(idxStr)
	if idx == 0 {
		return
	}
	if idx > 0 && idx <= len(candidates) {
		target := candidates[idx-1]
		setAdmin := target.Role != "admin" // 如果不是admin就设为admin，反之亦然

		req := &pb.SetGroupAdminReq{
			GroupId:     groupId,
			OperatorUid: savedUID,
			TargetUid:   target.Uid,
			SetAdmin:    setAdmin,
		}
		resp, err := sendRequest("/set_group_admin", req)
		if err != nil {
			fmt.Println("操作失败:", err)
			return
		}
		if resp.Code == 0 {
			fmt.Println("操作成功:", resp.Msg)
		} else {
			fmt.Println("操作失败:", resp.Msg)
		}
	} else {
		fmt.Println("编号超出范围")
	}
}

// 解散群组
func dismissGroup(groupId string) {
	confirm := readLine("确定要解散该群组吗？(y/n): ", nil)
	if confirm != "y" && confirm != "Y" {
		return
	}

	req := &pb.DismissGroupReq{GroupId: groupId, OperatorUid: savedUID}
	resp, err := sendRequest("/dismiss_group", req)
	if err != nil {
		fmt.Println("操作失败:", err)
		return
	}
	if resp.Code != 0 {
		fmt.Printf("操作失败: %s\n", resp.Msg)
		return
	}

	fmt.Println("操作成功:", resp.Msg)
	// 可以在这里加一个标记，返回到上上层菜单
}
