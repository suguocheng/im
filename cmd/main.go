package main

import (
	"fmt"
	"im/api"
	"im/core/plugin"
	"im/core/protocol"
	pb "im/core/protocol/pb"

	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"
)

func main() {
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
			if msg.Type == "chat" && msg.To != "" {
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
