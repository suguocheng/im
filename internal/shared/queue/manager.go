package queue

import (
	"context"
	"time"

	"im/internal/shared/database"
	"im/internal/shared/logger"

	"github.com/redis/go-redis/v9"
)

// Manager 消息队列管理器
type Manager struct {
	queue   *MessageQueue
	logger  *logger.Logger
	configs map[string]*QueueConfig
}

// NewManager 创建消息队列管理器
func NewManager(dbManager *database.Manager, logger *logger.Logger) *Manager {
	queue := NewMessageQueue(dbManager.GetRedis(), logger)

	// 预定义队列配置
	configs := map[string]*QueueConfig{
		"message_processing": {
			MaxLen:    10000,
			Approx:    true,
			BlockTime: 5 * time.Second,
		},
	}

	return &Manager{
		queue:   queue,
		logger:  logger,
		configs: configs,
	}
}

// PublishMessage 发布消息
func (m *Manager) PublishMessage(ctx context.Context, streamName string, messageType string, data map[string]interface{}) (string, error) {
	config, exists := m.configs[streamName]
	if !exists {
		// 使用默认配置
		config = &QueueConfig{
			MaxLen:    10000,
			Approx:    true,
			BlockTime: 5 * time.Second,
		}
	}

	return m.queue.PublishMessageWithConfig(ctx, streamName, messageType, data, config)
}

// ConsumeMessagesWithConfig 使用配置消费消息
func (m *Manager) ConsumeMessages(ctx context.Context, streamName string, consumerGroup string, consumerName string) ([]redis.XStream, error) {
	config, exists := m.configs[streamName]
	if !exists {
		config = &QueueConfig{
			MaxLen:    10000,
			Approx:    true,
			BlockTime: 5 * time.Second,
		}
	}

	return m.queue.ConsumeMessagesWithConfig(ctx, streamName, consumerGroup, consumerName, config)
}

// AcknowledgeMessage 确认消息
func (m *Manager) AcknowledgeMessage(ctx context.Context, streamName string, consumerGroup string, messageID string) error {
	return m.queue.AcknowledgeMessage(ctx, streamName, consumerGroup, messageID)
}

// GetPendingMessages 获取待处理消息
func (m *Manager) GetPendingMessages(ctx context.Context, streamName string, consumerGroup string) ([]redis.XPendingExt, error) {
	return m.queue.GetPendingMessages(ctx, streamName, consumerGroup)
}

// ClaimPendingMessages 认领待处理消息
func (m *Manager) ClaimPendingMessages(ctx context.Context, streamName string, consumerGroup string, consumerName string, minIdleTime time.Duration) ([]redis.XMessage, error) {
	return m.queue.ClaimPendingMessages(ctx, streamName, consumerGroup, consumerName, minIdleTime)
}

// ParseMessage 解析消息
func (m *Manager) ParseMessage(values map[string]interface{}) (*QueueMessage, error) {
	return m.queue.ParseMessage(values)
}

// GetStreamInfo 获取流信息
func (m *Manager) GetStreamInfo(ctx context.Context, streamName string) (*redis.XInfoStream, error) {
	return m.queue.GetStreamInfo(ctx, streamName)
}

// DeleteStream 删除流
func (m *Manager) DeleteStream(ctx context.Context, streamName string) error {
	return m.queue.DeleteStream(ctx, streamName)
}

// 预定义的流名称
const (
	StreamMessageProcessing = "message_processing" // 消息处理流
)

// 预定义的消息类型
const (
	MessageTypePrivateMessage = "private_message" // 私聊消息
	MessageTypeGroupMessage   = "group_message"   // 群聊消息
)

// 预定义的消费者组
const (
	ConsumerGroupMessageProcessor = "message_processor" // 消息处理器组
)
