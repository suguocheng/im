package main

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/chzyer/readline"
	"google.golang.org/protobuf/proto"

	pb "im/core/protocol/pb"
)

var rl *readline.Instance

func initReadline() {
	var err error
	rl, err = readline.New("")
	if err != nil {
		fmt.Println("readline 初始化失败:", err)
		os.Exit(1)
	}
}

func closeReadline() {
	if rl != nil {
		rl.Close()
	}
}

func readLine(prompt string, _ interface{}) string {
	rl.SetPrompt(prompt)
	line, err := rl.Readline()
	if err != nil {
		fmt.Println("Error reading line, exiting.", err)
		os.Exit(1)
	}
	return line
}

// sendRequest 是一个通用的网络请求辅助函数，用于发送Protobuf格式的HTTP POST请求
func sendRequest(endpoint string, req proto.Message) (*pb.APIResp, error) {
	// 序列化请求
	b, err := proto.Marshal(req)
	if err != nil {
		return nil, fmt.Errorf("序列化请求失败: %w", err)
	}

	// 发送HTTP POST请求
	r, err := http.Post("http://localhost:8081"+endpoint, "application/x-protobuf", bytes.NewReader(b))
	if err != nil {
		return nil, fmt.Errorf("HTTP请求失败: %w", err)
	}
	defer r.Body.Close()

	// 读取和解析响应
	respBytes, err := io.ReadAll(r.Body)
	if err != nil {
		return nil, fmt.Errorf("读取响应体失败: %w", err)
	}

	var resp pb.APIResp
	if err := proto.Unmarshal(respBytes, &resp); err != nil {
		return nil, fmt.Errorf("解析响应失败: %w", err)
	}

	return &resp, nil
}
