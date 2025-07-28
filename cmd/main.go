package main

import (
	"fmt"
	"im/api"
	"im/core/plugin"
	"im/core/protocol"
	pb "im/core/protocol/pb"
	"im/core/storage"
	"log"
	"time"

	"im/config"

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

	// 初始化Redis存储
	redisConfig := config.GetRedisConfig()
	redisAddr := fmt.Sprintf("%s:%d", redisConfig.Host, redisConfig.Port)
	storageManager.InitRedis(redisAddr, redisConfig.Password, redisConfig.DB)
	log.Println("Redis存储初始化成功")

	// 初始化MongoDB存储
	mongoConfig := config.GetMongoDBConfig()
	if err := storageManager.InitMongoDB(mongoConfig.URI, mongoConfig.Database); err != nil {
		log.Printf("MongoDB存储初始化失败: %v", err)
	} else {
		log.Println("MongoDB存储初始化成功")
	}

	// 程序结束时关闭存储
	defer func() {
		if err := storageManager.Close(); err != nil {
			log.Printf("关闭存储时出错: %v", err)
		}
	}()

	// 初始化插件
	for _, p := range plugin.All() {
		p.Init()
	}

	// 启动HTTP服务
	go func() {
		fmt.Println("HTTP 用户服务监听于 :8081")
		api.StartHTTPServer(":8081")
	}()

	// 启动WebSocket服务
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

			// 心跳包支持
			if msg.Type == "ping" {
				conn.WriteMessage(websocket.TextMessage, []byte("pong"))
				return
			}

			isChatMessage := msg.Type == "chat" || msg.Type == "secret_chat" || msg.Type == "emoji" || msg.Type == "image" || msg.Type == "file"
			// --- 处理私聊消息 ---
			if isChatMessage && msg.To != "" {
				msg.FromUsername = senderUsername(storageManager, msg.From)
				b, _ := proto.Marshal(&msg)

				// 尝试发送给接收者，但不因为对方不在线而失败
				err := protocol.SendToUser(msg.To, b)
				if err != nil {
					// 对方不在线，将消息存储为离线消息
					msgBytes, _ := proto.Marshal(&msg)
					_ = storageManager.StoreOfflineMessage(msg.To, string(msgBytes))
				}

				// 给发送者回显消息
				conn.WriteMessage(websocket.BinaryMessage, b)

				// 秘密聊天：只转发，不存储
				if msg.Type == "secret_chat" {
					return
				}

				// --- Redis缓存与推送 ---
				msgBytes, _ := proto.Marshal(&msg)
				sessionKey := getSessionKey(msg.From, msg.To)
				_ = storageManager.CacheMessage(sessionKey, string(msgBytes), 24*time.Hour)
				_ = storageManager.Publish("channel:"+msg.To, string(msgBytes))

				// --- MongoDB长期存储 ---
				_ = storageManager.StoreMessageToMongoDB(&msg)

				// 聊天通知（只在对方在线时发送）
				if err == nil && !protocol.StorageFriendStoreGetDND(msg.To, msg.From) {
					notif := &pb.Notification{
						Type:         "private_chat_message",
						From:         msg.From,
						FromUsername: msg.FromUsername,
						To:           msg.To,
						Content:      msg.Content,
						Timestamp:    msg.Timestamp,
					}
					_ = protocol.SendNotificationToUser(msg.To, notif)
				}
			}

			// --- 处理群聊消息 ---
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

				// 发送实时消息到群聊，获取不在线的成员列表
				offlineMembers, err := protocol.SendGroupMessageToMembers(&msg)
				if err != nil {
					errMsg := &pb.IMMessage{Type: "error", Content: "群消息发送失败: " + err.Error()}
					b, _ := proto.Marshal(errMsg)
					conn.WriteMessage(websocket.BinaryMessage, b)
					return // 发送失败则不发通知
				}

				// 给发送者回显消息
				b, _ := proto.Marshal(&msg)
				conn.WriteMessage(websocket.BinaryMessage, b)

				// 秘密聊天：只转发，不存储
				if msg.Type == "secret_chat" {
					return
				}

				// 只存一次群消息到Redis
				msgBytes, _ := proto.Marshal(&msg)
				groupSessionKey := "group:" + msg.GroupId
				_ = storageManager.CacheMessage(groupSessionKey, string(msgBytes), 24*time.Hour)

				// 为不在线的成员存储离线消息
				for _, offlineMember := range offlineMembers {
					_ = storageManager.StoreOfflineMessage(offlineMember, string(msgBytes))
				}

				// --- MongoDB长期存储 ---
				_ = storageManager.StoreMessageToMongoDB(&msg)

				// 发送通知给群成员 (模仿私聊逻辑)
				group, err := storageManager.GetGroup(msg.GroupId)
				if err != nil {
					return
				}
				notif := &pb.Notification{
					Type:         "group_chat_message",
					From:         msg.From,
					FromUsername: msg.FromUsername,
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
					_ = storageManager.Publish("group_channel:"+group.GroupId, string(msgBytes))
				}
			}
		})
		wsProto.Start(":8081")
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

// 获取私聊会话唯一key（双方顺序无关）
func getSessionKey(uid1, uid2 string) string {
	if uid1 < uid2 {
		return "chat:" + uid1 + ":" + uid2
	}
	return "chat:" + uid2 + ":" + uid1
}
