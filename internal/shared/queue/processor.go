package queue

import (
	"context"
	"time"

	"im/internal/shared/logger"

	"github.com/redis/go-redis/v9"
)

// MessageProcessor 消息处理器接口
type MessageProcessor interface {
	ProcessMessage(ctx context.Context, message *QueueMessage) error
	GetMessageType() string
}

// ProcessorManager 处理器管理器
type ProcessorManager struct {
	manager    *Manager
	processors map[string]MessageProcessor
	logger     *logger.Logger
}

// NewProcessorManager 创建处理器管理器
func NewProcessorManager(manager *Manager, logger *logger.Logger) *ProcessorManager {
	return &ProcessorManager{
		manager:    manager,
		processors: make(map[string]MessageProcessor),
		logger:     logger,
	}
}

// RegisterProcessor 注册消息处理器
func (pm *ProcessorManager) RegisterProcessor(processor MessageProcessor) {
	pm.processors[processor.GetMessageType()] = processor
	pm.logger.Infof("消息处理器已注册: %s", processor.GetMessageType())
}

// StartConsumer 启动消费者
func (pm *ProcessorManager) StartConsumer(ctx context.Context, streamName string, consumerGroup string, consumerName string) error {
	pm.logger.Infof("启动消费者: %s/%s", streamName, consumerName)

	for {
		select {
		case <-ctx.Done():
			pm.logger.Infof("消费者已停止: %s/%s", streamName, consumerName)
			return nil
		default:
			// 消费消息
			streams, err := pm.manager.ConsumeMessages(ctx, streamName, consumerGroup, consumerName)
			if err != nil {
				pm.logger.Errorf("消费消息失败: %v", err)
				time.Sleep(time.Second * 5)
				continue
			}

			if len(streams) == 0 {
				continue
			}

			// 处理消息
			for _, stream := range streams {
				for _, message := range stream.Messages {
					if err := pm.processMessage(ctx, streamName, consumerGroup, message); err != nil {
						pm.logger.Errorf("处理消息失败: %v", err)
						// 可以选择重试或记录错误
					}
				}
			}
		}
	}
}

// processMessage 处理单个消息
func (pm *ProcessorManager) processMessage(ctx context.Context, streamName string, consumerGroup string, message redis.XMessage) error {
	// 解析消息
	queueMsg, err := pm.manager.ParseMessage(message.Values)
	if err != nil {
		pm.logger.Errorf("解析消息失败: %v", err)
		return pm.manager.AcknowledgeMessage(ctx, streamName, consumerGroup, message.ID)
	}

	// 查找处理器
	processor, exists := pm.processors[queueMsg.Type]
	if !exists {
		pm.logger.Warnf("未找到消息处理器: %s", queueMsg.Type)
		return pm.manager.AcknowledgeMessage(ctx, streamName, consumerGroup, message.ID)
	}

	// 处理消息
	if err := processor.ProcessMessage(ctx, queueMsg); err != nil {
		pm.logger.Errorf("处理消息失败: %v", err)
		// 可以在这里实现重试逻辑
		return err
	}

	// 确认消息
	return pm.manager.AcknowledgeMessage(ctx, streamName, consumerGroup, message.ID)
}

// StartMultipleConsumers 启动多个消费者
func (pm *ProcessorManager) StartMultipleConsumers(ctx context.Context, consumers []ConsumerConfig) error {
	for _, config := range consumers {
		go func(cfg ConsumerConfig) {
			if err := pm.StartConsumer(ctx, cfg.StreamName, cfg.ConsumerGroup, cfg.ConsumerName); err != nil {
				pm.logger.Errorf("消费者启动失败: %s/%s, 错误: %v", cfg.StreamName, cfg.ConsumerName, err)
			}
		}(config)
	}

	return nil
}

// ConsumerConfig 消费者配置
type ConsumerConfig struct {
	StreamName    string
	ConsumerGroup string
	ConsumerName  string
}

// 默认消费者配置
func GetDefaultConsumerConfigs() []ConsumerConfig {
	return []ConsumerConfig{
		{
			StreamName:    StreamMessageProcessing,
			ConsumerGroup: ConsumerGroupMessageProcessor,
			ConsumerName:  "processor-1",
		},
	}
}
