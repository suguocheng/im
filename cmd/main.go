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
			// 支持多种消息类型：chat, emoji, image, file
			if (msg.Type == "chat" || msg.Type == "emoji" || msg.Type == "image" || msg.Type == "file") && msg.To != "" {
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
		})
		fmt.Println("WebSocket 服务监听于 :8090/ws")
		wsProto.Start(":8090")
	}()

	select {} // 阻塞主进程，防止退出
}
