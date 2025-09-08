package websocket

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"sync"
	"time"

	"im/internal/shared/logger"

	"github.com/gorilla/websocket"
	"github.com/redis/go-redis/v9"
)

// ConnectionInfo 连接信息
type ConnectionInfo struct {
	UserID      string    `json:"user_id"`
	InstanceID  string    `json:"instance_id"`
	ConnectedAt time.Time `json:"connected_at"`
}

// ConnectionManager WebSocket连接管理器
type ConnectionManager struct {
	// 本地连接存储
	connections map[string]*websocket.Conn
	mu          sync.RWMutex
	logger      *logger.Logger

	// Redis客户端用于分布式连接管理
	redis *redis.Client

	// 实例ID，用于标识当前实例
	instanceID string

	// 连接池配置
	maxConnections    int
	heartbeatInterval time.Duration
	writeTimeout      time.Duration
	readTimeout       time.Duration
}

// NewConnectionManager 创建连接管理器
func NewConnectionManager(logger *logger.Logger, redis *redis.Client) *ConnectionManager {
	// 生成实例ID
	instanceID := fmt.Sprintf("message-service-%d", os.Getpid())

	return &ConnectionManager{
		connections:       make(map[string]*websocket.Conn),
		logger:            logger,
		redis:             redis,
		instanceID:        instanceID,
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

	// 添加到本地连接
	cm.connections[userID] = conn

	// 注册到Redis（分布式连接管理）
	ctx := context.Background()
	connInfo := ConnectionInfo{
		UserID:      userID,
		InstanceID:  cm.instanceID,
		ConnectedAt: time.Now(),
	}

	data, err := json.Marshal(connInfo)
	if err != nil {
		cm.logger.Errorf("序列化连接信息失败: %v", err)
	} else {
		// 存储连接信息到Redis，设置过期时间
		key := fmt.Sprintf("ws_connection:%s", userID)
		cm.redis.Set(ctx, key, data, 24*time.Hour)

		// 添加到实例连接集合
		instanceKey := fmt.Sprintf("ws_instance:%s", cm.instanceID)
		cm.redis.SAdd(ctx, instanceKey, userID)
		cm.redis.Expire(ctx, instanceKey, 24*time.Hour)
	}

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

		// 从Redis中移除连接信息
		ctx := context.Background()
		key := fmt.Sprintf("ws_connection:%s", userID)
		cm.redis.Del(ctx, key)

		// 从实例连接集合中移除
		instanceKey := fmt.Sprintf("ws_instance:%s", cm.instanceID)
		cm.redis.SRem(ctx, instanceKey, userID)

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

// BroadcastToUser 单用户发送（支持跨实例）
func (cm *ConnectionManager) BroadcastToUser(userID string, message []byte) error {
	// 首先检查本地连接
	cm.mu.RLock()
	conn, exists := cm.connections[userID]
	cm.mu.RUnlock()

	if exists {
		// 用户在当前实例，直接发送
		conn.SetWriteDeadline(time.Now().Add(cm.writeTimeout))
		return conn.WriteMessage(websocket.BinaryMessage, message)
	}

	// 用户不在当前实例，通过Redis Pub/Sub发送到其他实例
	ctx := context.Background()
	channel := fmt.Sprintf("ws_broadcast:%s", userID)

	// 构造消息
	broadcastMsg := map[string]interface{}{
		"user_id": userID,
		"message": string(message), // 将[]byte转换为string
		"from":    cm.instanceID,
	}

	data, err := json.Marshal(broadcastMsg)
	if err != nil {
		return fmt.Errorf("序列化广播消息失败: %v", err)
	}

	// 发布消息到Redis
	err = cm.redis.Publish(ctx, channel, data).Err()
	if err != nil {
		return fmt.Errorf("发布广播消息失败: %v", err)
	}

	cm.logger.Infof("用户 %s 不在当前实例，已通过Redis广播", userID)
	return nil
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

// StartRedisSubscriber 启动Redis订阅，处理跨实例消息
func (cm *ConnectionManager) StartRedisSubscriber(ctx context.Context) {
	// 订阅所有WebSocket广播频道
	pubsub := cm.redis.PSubscribe(ctx, "ws_broadcast:*")
	defer pubsub.Close()

	cm.logger.Info("启动Redis订阅，监听跨实例消息")

	for {
		select {
		case <-ctx.Done():
			return
		default:
			msg, err := pubsub.ReceiveMessage(ctx)
			if err != nil {
				cm.logger.Errorf("接收Redis消息失败: %v", err)
				continue
			}

			// 处理接收到的消息
			cm.handleBroadcastMessage(msg.Payload)
		}
	}
}

// handleBroadcastMessage 处理广播消息
func (cm *ConnectionManager) handleBroadcastMessage(payload string) {
	cm.logger.Infof("收到跨实例广播消息: %s", payload)

	var broadcastMsg map[string]interface{}
	err := json.Unmarshal([]byte(payload), &broadcastMsg)
	if err != nil {
		cm.logger.Errorf("解析广播消息失败: %v", err)
		return
	}

	userID, ok := broadcastMsg["user_id"].(string)
	if !ok {
		cm.logger.Errorf("广播消息缺少user_id")
		return
	}

	messageData, ok := broadcastMsg["message"].(string)
	if !ok {
		cm.logger.Errorf("广播消息缺少message")
		return
	}

	from, ok := broadcastMsg["from"].(string)
	if !ok {
		cm.logger.Errorf("广播消息缺少from")
		return
	}

	// 忽略自己发送的消息
	if from == cm.instanceID {
		return
	}

	// 检查用户是否在当前实例
	cm.mu.RLock()
	conn, exists := cm.connections[userID]
	cm.mu.RUnlock()

	if exists {
		// 用户在当前实例，发送消息
		conn.SetWriteDeadline(time.Now().Add(cm.writeTimeout))
		err := conn.WriteMessage(websocket.BinaryMessage, []byte(messageData))
		if err != nil {
			cm.logger.Errorf("发送跨实例消息失败: %v", err)
		} else {
			cm.logger.Infof("成功发送跨实例消息给用户: %s", userID)
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
