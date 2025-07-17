package protocol

import (
	"fmt"
	"net/http"

	"encoding/json"
	"im/core/auth"
	"sync"

	"github.com/gorilla/websocket"
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
		var msg IMMessage
		if err := json.Unmarshal(data, &msg); err != nil {
			conn.WriteMessage(websocket.TextMessage, []byte(`{"type":"error","content":"消息格式错误"}`))
			continue
		}
		if userID == "" {
			if msg.Type != "login" || msg.Token == "" {
				conn.WriteMessage(websocket.TextMessage, []byte(`{"type":"error","content":"请先登录"}`))
				return
			}
			uid, err := auth.ParseToken(msg.Token)
			if err != nil {
				conn.WriteMessage(websocket.TextMessage, []byte(`{"type":"error","content":"token无效"}`))
				return
			}
			userID = uid
			wsUserConn.Store(userID, conn)
			conn.WriteMessage(websocket.TextMessage, []byte(`{"type":"login","content":"登录成功"}`))
			continue
		}
		msg.From = userID // 账号
		b, _ := json.Marshal(msg)
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
	return conn.WriteMessage(websocket.TextMessage, data)
}

func (w *WSProtocol) Stop() error {
	// WebSocket 关闭由 http.Server 控制
	return nil
}

func (w *WSProtocol) Send(conn *websocket.Conn, data []byte) error {
	return conn.WriteMessage(websocket.TextMessage, data)
}

func (w *WSProtocol) OnMessage(handler func(conn *websocket.Conn, data []byte)) {
	w.handler = handler
}
