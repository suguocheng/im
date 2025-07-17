package plugin

// 插件接口
type Plugin interface {
	Name() string
	Init() error
	Shutdown() error
}
