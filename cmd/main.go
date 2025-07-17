package main

import (
	"encoding/json"
	"fmt"
	"im/api"
	"im/core/plugin"
	"im/core/protocol"

	"github.com/gorilla/websocket"
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
			var msg protocol.IMMessage
			if err := json.Unmarshal(data, &msg); err != nil {
				conn.WriteMessage(websocket.TextMessage, []byte(`{"type":"error","content":"消息格式错误"}`))
				return
			}
			if msg.Type == "chat" && msg.To != "" {
				b, _ := json.Marshal(msg)
				err := protocol.SendToUser(msg.To, b)
				if err != nil {
					conn.WriteMessage(websocket.TextMessage, []byte(`{"type":"error","content":"对方不在线"}`))
				}
			}
		})
		fmt.Println("WebSocket 服务监听于 :8090/ws")
		wsProto.Start(":8090")
	}()

	select {} // 阻塞主进程，防止退出
}
