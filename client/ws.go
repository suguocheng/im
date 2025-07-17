package main

import (
	"fmt"
	"im/core/protocol/pb"
	"os"
	"time"

	"github.com/gorilla/websocket"
	"github.com/peterh/liner"
	"google.golang.org/protobuf/proto"
)

func wsClientLiner(l *liner.State) {
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
	// 发送登录消息
	loginMsg := &pb.IMMessage{
		Type:  "login",
		Token: savedToken,
	}
	b, _ := proto.Marshal(loginMsg)
	c.WriteMessage(websocket.BinaryMessage, b)
	fmt.Println("已连接WebSocket IM服务器，输入: 对方UID:消息内容 发送私聊，Ctrl+C退出：")
	go func() {
		for {
			_, msg, err := c.ReadMessage()
			if err != nil {
				fmt.Println("服务器断开：", err)
				os.Exit(0)
			}
			var im pb.IMMessage
			err = proto.Unmarshal(msg, &im)
			if err != nil {
				fmt.Println("收到非Protobuf消息：", string(msg))
			} else {
				fmt.Printf("收到[%s] %s: %s\n", im.Type, im.From, im.Content)
			}
		}
	}()
	for {
		text := readLine("", l)
		if text == "" {
			continue
		}
		sep := -1
		for i, ch := range text {
			if ch == ':' {
				sep = i
				break
			}
		}
		if sep == -1 {
			fmt.Println("格式错误，应为 对方UID:消息内容")
			continue
		}
		to := text[:sep]
		content := text[sep+1:]
		msg := &pb.IMMessage{
			Type:      "chat",
			From:      savedUID,
			To:        to,
			Content:   content,
			Timestamp: time.Now().Unix(),
			Token:     savedToken,
		}
		b, _ := proto.Marshal(msg)
		c.WriteMessage(websocket.BinaryMessage, b)
	}
}
