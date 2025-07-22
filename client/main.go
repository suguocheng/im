package main

import (
	"fmt"
	pb "im/core/protocol/pb"

	// Added for strings.NewReader
	"strings"

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
				fmt.Println("\n=== 主菜单 ===")
				fmt.Println("1. 消息")
				fmt.Println("2. 联系人")
				fmt.Println("3. 个人中心")
				fmt.Println("0. 退出")
				opStr := readLine("选择操作: ", nil)
				var op int
				fmt.Sscanf(opStr, "%d", &op)
				switch op {
				case 1:
					showMessageMenu()
				case 2:
					contactMenu()
				case 3:
					userMenu()
				case 0:
					if notifyStop != nil {
						close(notifyStop)
					}
					savedToken = ""
					savedUID = ""
					return
				default:
					fmt.Println("无效选择，请重新输入")
				}
			}
		}
	}
}

// 联系人菜单
func contactMenu() {
	for {
		fmt.Println("\n=== 联系人 ===")
		fmt.Println("1. 好友")
		fmt.Println("2. 群组")
		fmt.Println("3. 处理请求")
		fmt.Println("0. 返回")
		opStr := readLine("选择操作: ", nil)
		var op int
		fmt.Sscanf(opStr, "%d", &op)
		switch op {
		case 1:
			friendMenu()
		case 2:
			GroupMenu() // 用 group.go 的结构体方法
		case 3:
			requestMenu()
		case 0:
			return
		default:
			fmt.Println("无效选择，请重新输入")
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
		var notif pb.Notification
		err = proto.Unmarshal(msg, &notif)
		if err == nil && notif.Type != "" {
			extra := parseExtra(notif.Extra)
			var display string
			switch notif.Type {
			case "friend_request":
				display = fmt.Sprintf("[好友请求] %s(%s) 请求加你为好友", notif.FromUsername, notif.From)
			case "private_chat_message":
				display = fmt.Sprintf("[私聊] %s: %s", notif.FromUsername, notif.Content)
			case "group_chat_message":
				display = fmt.Sprintf("[群聊][%s] %s: %s", notif.GroupName, notif.FromUsername, notif.Content)
			case "group_application_pending":
				display = fmt.Sprintf("[群申请] %s(%s) 申请加入群聊 [%s]", notif.FromUsername, notif.From, notif.GroupName)
			case "group_invite":
				invitee := extra["invitee_username"]
				inviteeUid := extra["invitee_uid"]
				display = fmt.Sprintf("[群审批] %s(%s) 邀请 %s(%s) 加入群聊 [%s]，请审批", notif.FromUsername, notif.From, invitee, inviteeUid, notif.GroupName)
			case "group_invite_approved":
				display = fmt.Sprintf("[群通知] 你已成功加入群聊 [%s]", notif.GroupName)
			case "group_kicked":
				display = fmt.Sprintf("[群通知] 你已被 %s 移出群聊 [%s]", notif.FromUsername, notif.GroupName)
			case "group_admin_change":
				if extra["set_admin"] == "true" {
					display = fmt.Sprintf("[群通知] 你在群聊 [%s] 被设为管理员", notif.GroupName)
				} else {
					display = fmt.Sprintf("[群通知] 你在群聊 [%s] 被取消管理员", notif.GroupName)
				}
			case "dismissed":
				display = fmt.Sprintf("[群系统][%s] 群已被解散 by %s", notif.GroupName, notif.FromUsername)
			default:
				continue
			}
			select {
			case notifyChan <- display:
			default:
			}
		}
	}
}

// parseExtra辅助函数
func parseExtra(extra string) map[string]string {
	m := make(map[string]string)
	for _, part := range strings.Split(extra, ",") {
		kv := strings.SplitN(part, ":", 2)
		if len(kv) == 2 {
			m[kv[0]] = kv[1]
		}
	}
	return m
}
