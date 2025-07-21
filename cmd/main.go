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
				b, _ := proto.Marshal(&msg)
				err := protocol.SendToUser(msg.To, b)
				if err != nil {
					errMsg := &pb.IMMessage{Type: "error", Content: "对方不在线"}
					b, _ := proto.Marshal(errMsg)
					conn.WriteMessage(websocket.BinaryMessage, b)
				} else {
					// 聊天通知+免打扰
					if !protocol.StorageFriendStoreGetDND(msg.To, msg.From) {
						notif := &pb.Notification{
							Type:      "chat_message",
							From:      msg.From,
							To:        msg.To,
							Content:   msg.Content,
							Timestamp: msg.Timestamp,
						}
						_ = protocol.SendNotificationToUser(msg.To, notif)
					}
				}
			}

			// --- 新增：处理群聊消息 ---
			if isChatMessage && msg.GroupId != "" {
				storageManager := storage.GetStorageManager()
				sender, err := storageManager.GetUserByUID(msg.From)
				if err != nil {
					// 用户不存在，忽略消息
					return
				}

				groupMsg := &pb.GroupMessage{
					GroupId:      msg.GroupId,
					FromUid:      msg.From,
					FromUsername: sender.Username, // 使用查询到的真实用户名
					Content:      msg.Content,
					MessageType:  msg.Type,
					Timestamp:    msg.Timestamp,
				}

				// 1. 发送实时消息到群聊
				err = protocol.SendGroupMessageToMembers(msg.GroupId, groupMsg)
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
				for _, memberUID := range group.MemberUids {
					if memberUID == msg.From {
						continue // 不给自己发通知
					}
					// TODO: 增加群聊免打扰判断
					notif := &pb.Notification{
						Type:      "group_chat_message",
						From:      msg.From,
						To:        memberUID,
						Content:   fmt.Sprintf("[%s] %s", group.Name, msg.Content), // 通知内容包含群名
						Timestamp: msg.Timestamp,
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
