package plugin

import "fmt"

type EchoPlugin struct{}

func (e *EchoPlugin) Name() string    { return "echo" }
func (e *EchoPlugin) Init() error     { fmt.Println("Echo插件初始化"); return nil }
func (e *EchoPlugin) Shutdown() error { fmt.Println("Echo插件关闭"); return nil }

func init() {
	Register(&EchoPlugin{})
}
