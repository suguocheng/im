package main

import (
	"bytes"
	"fmt"
	pb "im/core/protocol/pb"
	"io/ioutil"
	"net/http"
	"strings"
	"time"

	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"
)

var savedToken string
var savedUID string

// 声明外部依赖，确保 main.go 能访问 user.go、util.go 的符号
// Go 会自动链接同包下的其他文件的全局变量和函数，无需 import "./user" 等
// 只需保证 main.go 没有重复声明，且所有符号在 client 包下唯一

// 全局通知通道
var notifyChan = make(chan string, 100)

func main() {
	initReadline()
	defer closeReadline()
	// l := liner.NewLiner()
	// defer l.Close()
	// l.SetCtrlCAborts(true)
	var notifyStop chan struct{}
	for {
		if savedToken == "" {
			fmt.Println("1. 注册 2. 登录 0. 退出")
			opStr := readLine("选择操作: ", nil)
			var op int
			fmt.Sscanf(opStr, "%d", &op)
			switch op {
			case 1:
				u := readLine("昵称: ", nil)
				p := readLine("密码: ", nil)
				email := readLine("邮箱: ", nil)
				register(u, p, email)
			case 2:
				uid := readLine("UID: ", nil)
				p := readLine("密码: ", nil)
				login(uid, p)
				if savedToken != "" {
					if notifyStop != nil {
						close(notifyStop)
					}
					notifyStop = make(chan struct{})
					go wsNotifyListener(savedToken, notifyStop)
				}
			case 0:
				return
			}
		} else {
			for {
				select {
				case msg := <-notifyChan:
					fmt.Println("[通知]", msg)
				default:
				}
				fmt.Println("1. 好友 2. 个人中心 3. 退出")
				opStr := readLine("选择操作: ", nil)
				var op int
				fmt.Sscanf(opStr, "%d", &op)
				switch op {
				case 1:
					friendMenu(nil)
				case 2:
					userMenu(nil)
				case 3:
					if notifyStop != nil {
						close(notifyStop)
					}
					return
				}
			}
		}
	}
}

// WebSocket通知监听，支持关闭
func wsNotifyListener(token string, stop chan struct{}) {
	c, _, err := websocket.DefaultDialer.Dial("ws://127.0.0.1:8090/ws", nil)
	if err != nil {
		return
	}
	defer c.Close()
	loginMsg := &pb.IMMessage{Type: "login", Token: token}
	b, _ := proto.Marshal(loginMsg)
	c.WriteMessage(websocket.BinaryMessage, b)
	for {
		select {
		case <-stop:
			return
		default:
		}
		_, msg, err := c.ReadMessage()
		if err != nil {
			return
		}
		var im pb.IMMessage
		err = proto.Unmarshal(msg, &im)
		if err == nil && im.Type == "notification" {
			select {
			case notifyChan <- fmt.Sprintf("来自%s: %s", im.From, im.Content):
			default:
			}
		}
	}
}

func friendMenu(_ interface{}) {
	for {
		fmt.Println("1. 查看好友 2. 添加好友 3. 处理好友请求 0. 返回")
		opStr := readLine("选择操作: ", nil)
		var op int
		fmt.Sscanf(opStr, "%d", &op)
		switch op {
		case 1:
			friends := getFriendList(savedUID, savedToken)
			friendUsernames := getFriendUsernames(savedUID, savedToken)
			remarks := getFriendRemarks(savedUID, savedToken)
			if len(friends) == 0 {
				fmt.Println("暂无好友")
				continue
			}
			for i, f := range friends {
				name := friendUsernames[i]
				if i < len(remarks) && remarks[i] != "" {
					name = remarks[i]
				}
				fmt.Printf("%d. %s(%s)\n", i+1, name, f)
			}
			idxStr := readLine("选择好友编号进入详情(0返回): ", nil)
			var idx int
			fmt.Sscanf(idxStr, "%d", &idx)
			if idx > 0 && idx <= len(friends) {
				friendDetailMenu(nil, friends[idx-1])
			}
		case 2:
			toUid := readLine("对方UID: ", nil)
			msg := readLine("验证消息: ", nil)
			addFriend(savedUID, toUid, msg, savedToken)
		case 3:
			fromUids, fromUsernames, msgs := getFriendRequestListWithNames(savedUID, savedToken)
			if len(fromUids) == 0 {
				fmt.Println("暂无好友请求")
				continue
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
				idxStr = strings.TrimSpace(idxStr)
				var idx int
				n, _ := fmt.Sscanf(idxStr, "%d", &idx)
				if n != 1 {
					fmt.Println("请输入有效的数字编号")
					continue
				}
				if idx == 0 {
					return
				}
				if idx > 0 && idx <= len(fromUids) {
					acceptStr := readLine("同意? (y/n): ", nil)
					acceptStr = strings.TrimSpace(acceptStr)
					accept := acceptStr == "y" || acceptStr == "Y"
					handleFriend(fromUids[idx-1], savedUID, accept, savedToken)
					break
				} else {
					fmt.Println("编号超出范围")
				}
			}
		case 0:
			return
		}
	}
}

func getFriendList(uid, token string) []string {
	req := &pb.FriendListReq{Uid: uid, Token: token}
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/friend_list", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		fmt.Println("获取好友列表失败:", err)
		return nil
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		fmt.Println("响应解析失败:", err)
		return nil
	}
	var list pb.FriendListResp
	if err := proto.Unmarshal(resp.Data, &list); err != nil {
		fmt.Println("好友列表解析失败:", err)
		return nil
	}
	return list.FriendUids
}

func getFriendRequestList(uid, token string) ([]string, []string) {
	req := &pb.FriendListReq{Uid: uid, Token: token}
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/friend_request_list", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		fmt.Println("获取好友请求失败:", err)
		return nil, nil
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		fmt.Println("响应解析失败:", err)
		return nil, nil
	}
	var list pb.FriendRequestListResp
	if err := proto.Unmarshal(resp.Data, &list); err != nil {
		fmt.Println("好友请求列表解析失败:", err)
		return nil, nil
	}
	return list.FromUids, list.VerifyMsgs
}

func friendDetailMenu(_ interface{}, friendUid string) {
	for {
		fmt.Printf("好友: %s\n", friendUid)
		fmt.Println("1. 查看信息 2. 设置备注 3. 设置免打扰 4. 私聊 5. 删除好友 0. 返回")
		opStr := readLine("选择操作: ", nil)
		var op int
		fmt.Sscanf(opStr, "%d", &op)
		switch op {
		case 1:
			info := getFriendInfo(savedUID, friendUid, savedToken)
			fmt.Printf("UID: %s\n昵称: %s\n邮箱: %s\n备注: %s\n", info.Uid, info.Username, info.Email, info.Remark)
		case 2:
			remark := readLine("输入备注: ", nil)
			setFriendRemark(savedUID, friendUid, remark, savedToken)
		case 3:
			cur := getDND(savedUID, friendUid, savedToken)
			fmt.Printf("当前免打扰状态: %v\n", cur)
			setStr := readLine("是否开启免打扰? (y/n): ", nil)
			set := setStr == "y" || setStr == "Y"
			setDND(savedUID, friendUid, set, savedToken)
		case 4:
			wsChatWithFriend(nil, friendUid)
		case 5:
			deleteFriend(savedUID, friendUid, savedToken)
			return
		case 0:
			return
		}
	}
}

func userMenu(_ interface{}) {
	for {
		fmt.Println("1. 修改昵称 2. 修改密码 3. 注销账号 4. 查看个人信息 5. 登出 0. 返回")
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

func wsChatWithFriend(_ interface{}, friendUid string) {
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

	// 先进行WebSocket登录
	loginMsg := &pb.IMMessage{Type: "login", Token: savedToken}
	b, _ := proto.Marshal(loginMsg)
	if err := c.WriteMessage(websocket.BinaryMessage, b); err != nil {
		fmt.Println("WebSocket登录失败:", err)
		return
	}

	// 等待登录响应
	_, loginResp, err := c.ReadMessage()
	if err != nil {
		fmt.Println("读取登录响应失败:", err)
		return
	}
	var loginResponse pb.IMMessage
	if err := proto.Unmarshal(loginResp, &loginResponse); err != nil {
		fmt.Println("解析登录响应失败:", err)
		return
	}
	if loginResponse.Type == "error" {
		fmt.Println("WebSocket登录失败:", loginResponse.Content)
		return
	}

	fmt.Printf("已进入与 %s 的私聊，直接输入消息内容发送，输入 /exit 返回\n", friendUid)
	quit := make(chan struct{})
	go func() {
		for {
			_, msg, err := c.ReadMessage()
			if err != nil {
				select {
				case <-quit:
					// 正常退出，不提示
				default:
					fmt.Println("服务器断开：", err)
				}
				return
			}
			var im pb.IMMessage
			err = proto.Unmarshal(msg, &im)
			if err != nil {
				fmt.Println("收到非Protobuf消息：", string(msg))
			} else if im.Type == "chat" && im.From == friendUid {
				fmt.Printf("%s: %s\n", im.From, im.Content)
			} else if im.Type == "error" {
				fmt.Println("错误消息：", im.Content)
			}
		}
	}()
	for {
		select {
		case <-quit:
			return
		default:
			text := readLine("", nil)
			if text == "/exit" {
				close(quit)
				return
			}
			if text == "" {
				continue
			}
			msg := &pb.IMMessage{
				Type:      "chat",
				From:      savedUID,
				To:        friendUid,
				Content:   text,
				Timestamp: time.Now().Unix(),
			}
			b, _ := proto.Marshal(msg)
			if err := c.WriteMessage(websocket.BinaryMessage, b); err != nil {
				fmt.Println("发送消息失败:", err)
				return
			}
		}
	}
}

// 新增 getFriendUsernames 和 getFriendRequestListWithNames
func getFriendUsernames(uid, token string) []string {
	req := &pb.FriendListReq{Uid: uid, Token: token}
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/friend_list", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		return nil
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		return nil
	}
	var list pb.FriendListResp
	if err := proto.Unmarshal(resp.Data, &list); err != nil {
		return nil
	}
	return list.FriendUsernames
}

func getFriendRequestListWithNames(uid, token string) ([]string, []string, []string) {
	req := &pb.FriendListReq{Uid: uid, Token: token}
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/friend_request_list", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		return nil, nil, nil
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		return nil, nil, nil
	}
	var list pb.FriendRequestListResp
	if err := proto.Unmarshal(resp.Data, &list); err != nil {
		return nil, nil, nil
	}
	return list.FromUids, list.FromUsernames, list.VerifyMsgs
}

// 新增 getFriendRemarks、setFriendRemark、getFriendInfo
func getFriendRemarks(uid, token string) []string {
	req := &pb.FriendListReq{Uid: uid, Token: token}
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/friend_list", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		return nil
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		return nil
	}
	var list pb.FriendListResp
	if err := proto.Unmarshal(resp.Data, &list); err != nil {
		return nil
	}
	return list.Remarks
}

func setFriendRemark(uid, friendUid, remark, token string) {
	req := &pb.UpdateRemarkReq{Uid: uid, FriendUid: friendUid, Remark: remark, Token: token}
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/update_remark", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		fmt.Println("设置备注失败:", err)
		return
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		fmt.Println("响应解析失败:", err)
		return
	}
	fmt.Println("设置备注响应:", resp.Msg)
}

func getFriendInfo(uid, friendUid, token string) *pb.FriendInfoResp {
	req := &pb.FriendInfoReq{Uid: uid, FriendUid: friendUid, Token: token}
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/friend_info", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		fmt.Println("获取好友信息失败:", err)
		return &pb.FriendInfoResp{}
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		fmt.Println("响应解析失败:", err)
		return &pb.FriendInfoResp{}
	}
	var info pb.FriendInfoResp
	if err := proto.Unmarshal(resp.Data, &info); err != nil {
		fmt.Println("好友信息解析失败:", err)
		return &pb.FriendInfoResp{}
	}
	return &info
}

// 新增 getDND、setDND
func getDND(uid, friendUid, token string) bool {
	info := getFriendInfo(uid, friendUid, token)
	return info.Dnd
}

func setDND(uid, friendUid string, dnd bool, token string) {
	req := &pb.SetDNDReq{Uid: uid, FriendUid: friendUid, Dnd: dnd, Token: token}
	b, _ := proto.Marshal(req)
	r, err := http.Post("http://localhost:8081/set_dnd", "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		fmt.Println("设置免打扰失败:", err)
		return
	}
	defer r.Body.Close()
	respBytes, _ := ioutil.ReadAll(r.Body)
	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		fmt.Println("响应解析失败:", err)
		return
	}
	fmt.Println("设置免打扰响应:", resp.Msg)
}
