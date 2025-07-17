package main

import (
	"fmt"
	"im/core/plugin"
	"im/core/protocol"
	"net"
)

// 这里用伪代码演示如何组合各模块
func main() {
	// 初始化各模块（实际应通过配置和插件加载）
	var proto protocol.Protocol // = ...
	// var store storage.Storage     // = ...
	// var authen auth.Authenticator // = ...

	// 注册插件
	for _, p := range plugin.All() {
		p.Init()
	}

	// 启动协议监听
	proto.OnMessage(func(conn net.Conn, data []byte) {
		// 认证、存储、路由等处理
		// ...
		fmt.Println("收到消息", data)
	})
	proto.Start(":8080")
}
