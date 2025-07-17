package protocol

import (
	"fmt"
	"im/core/auth"
	pb "im/core/protocol/pb"
	"net/http"
	"sync"

	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"
)

// 用户与连接映射
var wsUserConn sync.Map // userID -> *websocket.Conn

type WSProtocol struct {
	upgrader websocket.Upgrader
	handler  func(conn *websocket.Conn, data []byte)
}

func NewWSProtocol() *WSProtocol {
	return &WSProtocol{
		upgrader: websocket.Upgrader{
			CheckOrigin: func(r *http.Request) bool { return true },
		},
	}
}

func (w *WSProtocol) Start(addr string) error {
	http.HandleFunc("/ws", func(rw http.ResponseWriter, r *http.Request) {
		conn, err := w.upgrader.Upgrade(rw, r, nil)
		if err != nil {
			return
		}
		go w.handleConn(conn)
	})
	fmt.Println("WebSocket 协议监听于", addr+"/ws")
	return http.ListenAndServe(addr, nil)
}

func (w *WSProtocol) handleConn(conn *websocket.Conn) {
	defer conn.Close()
	var userID string
	for {
		_, data, err := conn.ReadMessage()
		if err != nil {
			if userID != "" {
				wsUserConn.Delete(userID)
			}
			return
		}
		var msg pb.IMMessage
		if err := proto.Unmarshal(data, &msg); err != nil {
			// 替换所有 JSON 字符串消息为 IMMessage 结构体 proto.Marshal 后发送
			errMsg := &pb.IMMessage{Type: "error", Content: "消息格式错误"}
			b, _ := proto.Marshal(errMsg)
			conn.WriteMessage(websocket.BinaryMessage, b)
			continue
		}
		if userID == "" {
			if msg.Type != "login" || msg.Token == "" {
				// 替换所有 JSON 字符串消息为 IMMessage 结构体 proto.Marshal 后发送
				errMsg := &pb.IMMessage{Type: "error", Content: "请先登录"}
				b, _ := proto.Marshal(errMsg)
				conn.WriteMessage(websocket.BinaryMessage, b)
				return
			}
			uid, err := auth.ParseToken(msg.Token)
			if err != nil {
				// 替换所有 JSON 字符串消息为 IMMessage 结构体 proto.Marshal 后发送
				errMsg := &pb.IMMessage{Type: "error", Content: "token无效"}
				b, _ := proto.Marshal(errMsg)
				conn.WriteMessage(websocket.BinaryMessage, b)
				return
			}
			userID = uid
			wsUserConn.Store(userID, conn)
			// 替换所有 JSON 字符串消息为 IMMessage 结构体 proto.Marshal 后发送
			loginMsg := &pb.IMMessage{Type: "login", Content: "登录成功"}
			b, _ := proto.Marshal(loginMsg)
			conn.WriteMessage(websocket.BinaryMessage, b)
			continue
		}
		msg.From = userID // 账号
		b, _ := proto.Marshal(&msg)
		if w.handler != nil {
			w.handler(conn, b)
		}
	}
}

// 发送消息给指定用户
func SendToUser(userID string, data []byte) error {
	v, ok := wsUserConn.Load(userID)
	if !ok {
		return fmt.Errorf("用户不在线")
	}
	conn := v.(*websocket.Conn)
	return conn.WriteMessage(websocket.BinaryMessage, data)
}

func (w *WSProtocol) Stop() error {
	// WebSocket 关闭由 http.Server 控制
	return nil
}

func (w *WSProtocol) Send(conn *websocket.Conn, data []byte) error {
	return conn.WriteMessage(websocket.BinaryMessage, data)
}

func (w *WSProtocol) OnMessage(handler func(conn *websocket.Conn, data []byte)) {
	w.handler = handler
}
