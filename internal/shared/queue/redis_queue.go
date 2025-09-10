package queue

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	"im/internal/shared/logger"

	"github.com/redis/go-redis/v9"
)

// MessageQueue Redis消息队列
type MessageQueue struct {
	client *redis.Client
	logger *logger.Logger
}

// QueueMessage 队列消息结构
type QueueMessage struct {
	ID        string                 `json:"id"`
	Type      string                 `json:"type"`
	Data      map[string]interface{} `json:"data"`
	Timestamp int64                  `json:"timestamp"`
	Retry     int                    `json:"retry"`
}

// QueueConfig 队列配置
type QueueConfig struct {
	MaxLen    int64         // 最大消息数量
	Approx    bool          // 是否使用近似长度
	BlockTime time.Duration // 阻塞等待时间
}

// NewMessageQueue 创建消息队列
func NewMessageQueue(client *redis.Client, logger *logger.Logger) *MessageQueue {
	return &MessageQueue{
		client: client,
		logger: logger,
	}
}

// PublishMessageWithConfig 使用配置发布消息
func (q *MessageQueue) PublishMessageWithConfig(ctx context.Context, streamName string, messageType string, data map[string]interface{}, config *QueueConfig) (string, error) {
	msg := &QueueMessage{
		Type:      messageType,
		Data:      data,
		Timestamp: time.Now().Unix(),
		Retry:     0,
	}

	// 序列化消息
	msgData, err := json.Marshal(msg)
	if err != nil {
		return "", fmt.Errorf("序列化消息失败: %v", err)
	}

	// 构建XAdd参数
	args := &redis.XAddArgs{
		Stream: streamName,
		Values: map[string]interface{}{
			"type":  messageType,
			"data":  string(msgData),
			"retry": 0,
		},
	}

	// 设置最大长度
	if config.MaxLen > 0 {
		args.MaxLen = config.MaxLen
		args.Approx = config.Approx
	}

	// 发布到Redis Stream
	id, err := q.client.XAdd(ctx, args).Result()
	if err != nil {
		return "", fmt.Errorf("发布消息失败: %v", err)
	}

	q.logger.Debugf("消息已发布到队列 %s: %s", streamName, id)
	return id, nil
}

// ConsumeMessagesWithConfig 使用配置消费消息
func (q *MessageQueue) ConsumeMessagesWithConfig(ctx context.Context, streamName string, consumerGroup string, consumerName string, config *QueueConfig) ([]redis.XStream, error) {
	// 创建消费者组（如果不存在）
	err := q.client.XGroupCreateMkStream(ctx, streamName, consumerGroup, "0").Err()
	if err != nil && err.Error() != "BUSYGROUP Consumer Group name already exists" {
		return nil, fmt.Errorf("创建消费者组失败: %v", err)
	}

	// 消费消息
	streams, err := q.client.XReadGroup(ctx, &redis.XReadGroupArgs{
		Group:    consumerGroup,
		Consumer: consumerName,
		Streams:  []string{streamName, ">"},
		Block:    config.BlockTime,
	}).Result()
	if err != nil {
		if err == redis.Nil {
			return nil, nil // 没有消息
		}
		return nil, fmt.Errorf("消费消息失败: %v", err)
	}

	return streams, nil
}

// AcknowledgeMessage 确认消息处理完成
func (q *MessageQueue) AcknowledgeMessage(ctx context.Context, streamName string, consumerGroup string, messageID string) error {
	err := q.client.XAck(ctx, streamName, consumerGroup, messageID).Err()
	if err != nil {
		return fmt.Errorf("确认消息失败: %v", err)
	}

	q.logger.Debugf("消息已确认: %s", messageID)
	return nil
}

// GetPendingMessages 获取待处理消息
func (q *MessageQueue) GetPendingMessages(ctx context.Context, streamName string, consumerGroup string) ([]redis.XPendingExt, error) {
	pending, err := q.client.XPendingExt(ctx, &redis.XPendingExtArgs{
		Stream: streamName,
		Group:  consumerGroup,
		Start:  "-",
		End:    "+",
		Count:  100,
	}).Result()
	if err != nil {
		return nil, fmt.Errorf("获取待处理消息失败: %v", err)
	}

	return pending, nil
}

// ClaimPendingMessages 认领待处理消息
func (q *MessageQueue) ClaimPendingMessages(ctx context.Context, streamName string, consumerGroup string, consumerName string, minIdleTime time.Duration) ([]redis.XMessage, error) {
	messages, err := q.client.XClaim(ctx, &redis.XClaimArgs{
		Stream:   streamName,
		Group:    consumerGroup,
		Consumer: consumerName,
		MinIdle:  minIdleTime,
		Messages: []string{"0-0"}, // 认领所有消息
	}).Result()
	if err != nil {
		return nil, fmt.Errorf("认领消息失败: %v", err)
	}

	return messages, nil
}

// GetStreamInfo 获取流信息
func (q *MessageQueue) GetStreamInfo(ctx context.Context, streamName string) (*redis.XInfoStream, error) {
	info, err := q.client.XInfoStream(ctx, streamName).Result()
	if err != nil {
		return nil, fmt.Errorf("获取流信息失败: %v", err)
	}

	return info, nil
}

// DeleteStream 删除流
func (q *MessageQueue) DeleteStream(ctx context.Context, streamName string) error {
	err := q.client.Del(ctx, streamName).Err()
	if err != nil {
		return fmt.Errorf("删除流失败: %v", err)
	}

	q.logger.Infof("流已删除: %s", streamName)
	return nil
}

// ParseMessage 解析消息
func (q *MessageQueue) ParseMessage(values map[string]interface{}) (*QueueMessage, error) {
	msgType, ok := values["type"].(string)
	if !ok {
		return nil, fmt.Errorf("消息类型无效")
	}

	msgData, ok := values["data"].(string)
	if !ok {
		return nil, fmt.Errorf("消息数据无效")
	}

	retry, _ := values["retry"].(int)

	var data map[string]interface{}
	if err := json.Unmarshal([]byte(msgData), &data); err != nil {
		return nil, fmt.Errorf("解析消息数据失败: %v", err)
	}

	return &QueueMessage{
		Type:      msgType,
		Data:      data,
		Retry:     retry,
		Timestamp: time.Now().Unix(),
	}, nil
}
