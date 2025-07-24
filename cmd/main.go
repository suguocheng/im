package main

import (
	"fmt"
	"im/api"
	"im/core/plugin"
	"im/core/protocol"
	pb "im/core/protocol/pb"
	"im/core/storage"
	"log"

	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"
)

func main() {
	// 获取存储管理器
	storageManager := storage.GetStorageManager()

	// 初始化MySQL存储
	log.Println("正在初始化MySQL存储...")
	if err := storageManager.InitMySQL(); err != nil {
		log.Fatal("MySQL存储初始化失败:", err)
	}
	log.Println("MySQL存储初始化成功")

	// 程序结束时关闭存储
	defer func() {
		if err := storageManager.Close(); err != nil {
			log.Printf("关闭存储时出错: %v", err)
		}
	}()
	for _, p := range plugin.All() {
		p.Init()
	}

	go func() {
		fmt.Println("HTTP 用户服务监听于 :8081")
		api.StartHTTPServer(":8081")
	}()

	go func() {
		wsProto := protocol.NewWSProtocol()
		wsProto.OnMessage(func(conn *websocket.Conn, data []byte) {
			var msg pb.IMMessage
			if err := proto.Unmarshal(data, &msg); err != nil {
				errMsg := &pb.IMMessage{Type: "error", Content: "消息格式错误"}
				b, _ := proto.Marshal(errMsg)
				conn.WriteMessage(websocket.BinaryMessage, b)
				return
			}

			isChatMessage := msg.Type == "chat" || msg.Type == "emoji" || msg.Type == "image" || msg.Type == "file"

			// --- 处理私聊消息 ---
			if isChatMessage && msg.To != "" {
				msg.FromUsername = senderUsername(storageManager, msg.From)
				b, _ := proto.Marshal(&msg)
				err := protocol.SendToUser(msg.To, b) // 始终推送消息
				if err != nil {
					errMsg := &pb.IMMessage{Type: "error", Content: "对方不在线"}
					b, _ := proto.Marshal(errMsg)
					conn.WriteMessage(websocket.BinaryMessage, b)
				}
				// 聊天通知+免打扰
				if !protocol.StorageFriendStoreGetDND(msg.To, msg.From) {
					notif := &pb.Notification{
						Type:         "private_chat_message",
						From:         msg.From,
						FromUsername: senderUsername(storageManager, msg.From),
						To:           msg.To,
						Content:      msg.Content,
						Timestamp:    msg.Timestamp,
					}
					_ = protocol.SendNotificationToUser(msg.To, notif)
				}
			}

			// --- 新增：处理群聊消息 ---
			if isChatMessage && msg.GroupId != "" {
				msg.FromUsername = senderUsername(storageManager, msg.From)
				// 新增禁言校验
				storageManager := storage.GetStorageManager()
				isMuted := false
				if muteStatus, err := storageManager.GetGroupMuteStatus(msg.GroupId, msg.From); err == nil {
					isMuted = muteStatus
				}
				if isMuted {
					errMsg := &pb.IMMessage{Type: "error", Content: "你已被禁言，无法发送消息"}
					b, _ := proto.Marshal(errMsg)
					conn.WriteMessage(websocket.BinaryMessage, b)
					return
				}

				// 1. 发送实时消息到群聊
				err := protocol.SendGroupMessageToMembers(&msg)
				if err != nil {
					errMsg := &pb.IMMessage{Type: "error", Content: "群消息发送失败: " + err.Error()}
					b, _ := proto.Marshal(errMsg)
					conn.WriteMessage(websocket.BinaryMessage, b)
					return // 发送失败则不发通知
				}

				// 2. 发送通知给群成员 (模仿私聊逻辑)
				group, err := storageManager.GetGroup(msg.GroupId)
				if err != nil {
					return
				}
				notif := &pb.Notification{
					Type:         "group_chat_message",
					From:         msg.From,
					FromUsername: senderUsername(storageManager, msg.From),
					GroupId:      group.GroupId,
					GroupName:    group.Name,
					Content:      msg.Content,
					Timestamp:    msg.Timestamp,
					Extra:        "", // 可扩展结构化内容
				}
				for _, memberUID := range group.MemberUids {
					if memberUID == msg.From {
						continue
					}
					// 判断群聊免打扰
					dnd, err := storageManager.GetGroupDND(group.GroupId, memberUID)
					if err == nil && dnd {
						continue // 跳过免打扰成员
					}
					_ = protocol.SendNotificationToUser(memberUID, notif)
				}
			}
		})
		fmt.Println("WebSocket 服务监听于 :8090/ws")
		wsProto.Start(":8090")
	}()

	select {} // 阻塞主进程，防止退出
}

// senderUsername辅助函数
func senderUsername(storageManager *storage.StorageManager, uid string) string {
	user, err := storageManager.GetUserByUID(uid)
	if err != nil {
		return uid
	}
	return user.Username
}
