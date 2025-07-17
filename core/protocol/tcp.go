package protocol

import (
	"bufio"
	"fmt"
	"net"
)

type TCPProtocol struct {
	listener net.Listener
	handler  func(conn net.Conn, data []byte)
}

func (t *TCPProtocol) Start(addr string) error {
	ln, err := net.Listen("tcp", addr)
	if err != nil {
		return err
	}
	t.listener = ln
	go t.acceptLoop()
	fmt.Println("TCP 协议监听于", addr)
	return nil
}

func (t *TCPProtocol) acceptLoop() {
	for {
		conn, err := t.listener.Accept()
		if err != nil {
			return
		}
		go t.handleConn(conn)
	}
}

func (t *TCPProtocol) handleConn(conn net.Conn) {
	defer conn.Close()
	r := bufio.NewReader(conn)
	for {
		data, err := r.ReadBytes('\n')
		if err != nil {
			return
		}
		if t.handler != nil {
			t.handler(conn, data)
		}
	}
}

func (t *TCPProtocol) Stop() error {
	if t.listener != nil {
		return t.listener.Close()
	}
	return nil
}

func (t *TCPProtocol) Send(conn net.Conn, data []byte) error {
	_, err := conn.Write(data)
	return err
}

func (t *TCPProtocol) OnMessage(handler func(conn net.Conn, data []byte)) {
	t.handler = handler
}
