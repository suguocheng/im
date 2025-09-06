package websocket

import (
	"context"
	"errors"
	"sync"
	"time"

	"im/internal/shared/logger"

	"github.com/gorilla/websocket"
)

// ConnectionManager WebSocket连接管理器
type ConnectionManager struct {
	connections map[string]*websocket.Conn
	mu          sync.RWMutex
	logger      *logger.Logger

	// 连接池配置
	maxConnections    int
	heartbeatInterval time.Duration
	writeTimeout      time.Duration
	readTimeout       time.Duration
}

// NewConnectionManager 创建连接管理器
func NewConnectionManager(logger *logger.Logger) *ConnectionManager {
	return &ConnectionManager{
		connections:       make(map[string]*websocket.Conn),
		logger:            logger,
		maxConnections:    10000,
		heartbeatInterval: 30 * time.Second,
		writeTimeout:      10 * time.Second,
		readTimeout:       60 * time.Second,
	}
}

// AddConnection 添加连接
func (cm *ConnectionManager) AddConnection(userID string, conn *websocket.Conn) error {
	cm.mu.Lock()
	defer cm.mu.Unlock()

	// 检查连接数限制
	if len(cm.connections) >= cm.maxConnections {
		return ErrMaxConnectionsReached
	}

	// 设置连接参数
	conn.SetReadDeadline(time.Now().Add(cm.readTimeout))
	conn.SetWriteDeadline(time.Now().Add(cm.writeTimeout))
	conn.SetPongHandler(func(string) error {
		conn.SetReadDeadline(time.Now().Add(cm.readTimeout))
		return nil
	})

	// 关闭旧连接
	if oldConn, exists := cm.connections[userID]; exists {
		oldConn.Close()
	}

	cm.connections[userID] = conn
	cm.logger.Infof("用户 %s 连接已添加，当前连接数: %d", userID, len(cm.connections))

	return nil
}

// RemoveConnection 移除连接
func (cm *ConnectionManager) RemoveConnection(userID string) {
	cm.mu.Lock()
	defer cm.mu.Unlock()

	if conn, exists := cm.connections[userID]; exists {
		conn.Close()
		delete(cm.connections, userID)
		cm.logger.Infof("用户 %s 连接已移除，当前连接数: %d", userID, len(cm.connections))
	}
}

// GetConnection 获取连接
func (cm *ConnectionManager) GetConnection(userID string) (*websocket.Conn, bool) {
	cm.mu.RLock()
	defer cm.mu.RUnlock()

	conn, exists := cm.connections[userID]
	return conn, exists
}

// BroadcastToGroup 群组广播
func (cm *ConnectionManager) BroadcastToGroup(userIDs []string, message []byte) {
	cm.mu.RLock()
	defer cm.mu.RUnlock()

	var wg sync.WaitGroup
	for _, userID := range userIDs {
		if conn, exists := cm.connections[userID]; exists {
			wg.Add(1)
			go func(conn *websocket.Conn) {
				defer wg.Done()
				conn.SetWriteDeadline(time.Now().Add(cm.writeTimeout))
				if err := conn.WriteMessage(websocket.BinaryMessage, message); err != nil {
					cm.logger.Errorf("发送消息失败: %v", err)
				}
			}(conn)
		}
	}
	wg.Wait()
}

// BroadcastToUser 单用户发送
func (cm *ConnectionManager) BroadcastToUser(userID string, message []byte) error {
	cm.mu.RLock()
	defer cm.mu.RUnlock()

	conn, exists := cm.connections[userID]
	if !exists {
		return ErrUserNotConnected
	}

	conn.SetWriteDeadline(time.Now().Add(cm.writeTimeout))
	return conn.WriteMessage(websocket.BinaryMessage, message)
}

// StartHeartbeat 启动心跳检测
func (cm *ConnectionManager) StartHeartbeat(ctx context.Context) {
	ticker := time.NewTicker(cm.heartbeatInterval)
	defer ticker.Stop()

	for {
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
			cm.sendHeartbeat()
		}
	}
}

// sendHeartbeat 发送心跳
func (cm *ConnectionManager) sendHeartbeat() {
	cm.mu.RLock()
	defer cm.mu.RUnlock()

	heartbeatMsg := []byte("ping")
	var wg sync.WaitGroup

	for userID, conn := range cm.connections {
		wg.Add(1)
		go func(userID string, conn *websocket.Conn) {
			defer wg.Done()
			conn.SetWriteDeadline(time.Now().Add(cm.writeTimeout))
			if err := conn.WriteMessage(websocket.PingMessage, heartbeatMsg); err != nil {
				cm.logger.Errorf("发送心跳失败，用户: %s, 错误: %v", userID, err)
				// 连接可能已断开，将在下次清理时移除
			}
		}(userID, conn)
	}
	wg.Wait()
}

// GetConnectionCount 获取连接数
func (cm *ConnectionManager) GetConnectionCount() int {
	cm.mu.RLock()
	defer cm.mu.RUnlock()
	return len(cm.connections)
}

// CleanupDeadConnections 清理死连接
func (cm *ConnectionManager) CleanupDeadConnections() {
	cm.mu.Lock()
	defer cm.mu.Unlock()

	for userID, conn := range cm.connections {
		// 尝试发送ping检测连接状态
		conn.SetWriteDeadline(time.Now().Add(1 * time.Second))
		if err := conn.WriteMessage(websocket.PingMessage, []byte("ping")); err != nil {
			conn.Close()
			delete(cm.connections, userID)
			cm.logger.Infof("清理死连接: %s", userID)
		}
	}
}

// 错误定义
var (
	ErrMaxConnectionsReached = errors.New("max connections reached")
	ErrUserNotConnected      = errors.New("user not connected")
)
