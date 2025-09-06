package rpc

import (
	"context"
	"fmt"
	"sync"

	"im/internal/shared/logger"

	"google.golang.org/protobuf/proto"
)

// Manager RPC客户端池管理器
type Manager struct {
	clientPool *ClientPool
	registry   *ServiceRegistry
	logger     *logger.Logger
	mu         sync.RWMutex
}

// NewManager 创建RPC管理器
func NewManager(logger *logger.Logger) *Manager {
	return &Manager{
		clientPool: NewClientPool(),
		registry:   NewServiceRegistry(),
		logger:     logger,
	}
}

// RegisterService 注册服务
func (m *Manager) RegisterService(serviceName, address string) {
	m.mu.Lock()
	defer m.mu.Unlock()

	m.registry.Register(serviceName, address)
	m.logger.Infof("注册服务: %s -> %s", serviceName, address)
}

// GetClient 获取服务客户端
func (m *Manager) GetClient(serviceName string) (*ServiceClient, error) {
	m.mu.RLock()
	address, exists := m.registry.Get(serviceName)
	m.mu.RUnlock()

	if !exists {
		return nil, fmt.Errorf("服务 %s 未注册", serviceName)
	}

	return m.clientPool.GetClient(serviceName, address), nil
}

// Call 调用服务
func (m *Manager) Call(ctx context.Context, serviceName, endpoint string, req interface{}) ([]byte, error) {
	client, err := m.GetClient(serviceName)
	if err != nil {
		return nil, err
	}

	// 如果请求是proto.Message类型，直接调用
	if protoReq, ok := req.(proto.Message); ok {
		return client.Call(ctx, endpoint, protoReq)
	}

	return nil, fmt.Errorf("不支持的请求类型")
}

// CallWithRetry 带重试的调用
func (m *Manager) CallWithRetry(ctx context.Context, serviceName, endpoint string, req interface{}, maxRetries int) ([]byte, error) {
	client, err := m.GetClient(serviceName)
	if err != nil {
		return nil, err
	}

	if protoReq, ok := req.(proto.Message); ok {
		return client.CallWithRetry(ctx, endpoint, protoReq, maxRetries)
	}

	return nil, fmt.Errorf("不支持的请求类型")
}

// GetServiceAddress 获取服务地址
func (m *Manager) GetServiceAddress(serviceName string) (string, bool) {
	return m.registry.Get(serviceName)
}

// ListServices 列出所有服务
func (m *Manager) ListServices() map[string]string {
	return m.registry.List()
}

// Close 关闭管理器
func (m *Manager) Close() error {
	// 客户端池会自动管理连接，这里不需要特殊处理
	return nil
}
