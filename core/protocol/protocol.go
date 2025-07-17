package protocol

import (
	"net"
)

// 协议处理接口
type Protocol interface {
	Start(addr string) error
	Stop() error
	Send(conn net.Conn, data []byte) error
	OnMessage(handler func(conn net.Conn, data []byte))
}
