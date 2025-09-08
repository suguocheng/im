package queue

import (
	"context"
	"fmt"

	"im/internal/services/message-service/service"
	ws "im/internal/services/message-service/websocket"
	"im/internal/shared/logger"
	"im/internal/shared/queue"
)

// MessageProcessor 消息处理器
type MessageProcessor struct {
	messageService    *service.MessageService
	connectionManager *ws.ConnectionManager
	logger            *logger.Logger
}

// NewMessageProcessor 创建消息处理器
func NewMessageProcessor(messageService *service.MessageService, connectionManager *ws.ConnectionManager, logger *logger.Logger) *MessageProcessor {
	return &MessageProcessor{
		messageService:    messageService,
		connectionManager: connectionManager,
		logger:            logger,
	}
}

// ProcessMessage 处理消息
func (mp *MessageProcessor) ProcessMessage(ctx context.Context, message *queue.QueueMessage) error {
	mp.logger.Debugf("处理消息: %s", message.Type)

	switch message.Type {
	case queue.MessageTypePrivateMessage:
		return mp.processPrivateMessage(ctx, message)
	case queue.MessageTypeGroupMessage:
		return mp.processGroupMessage(ctx, message)
	default:
		mp.logger.Warnf("未知消息类型: %s", message.Type)
		return nil
	}
}

// GetMessageType 获取消息类型
func (mp *MessageProcessor) GetMessageType() string {
	return "message_processor"
}

// processPrivateMessage 处理私聊消息
func (mp *MessageProcessor) processPrivateMessage(ctx context.Context, message *queue.QueueMessage) error {
	// 调试日志
	mp.logger.Infof("处理私聊消息，原始数据: %+v", message.Data)

	// 解析消息数据 - 数据在嵌套的data字段中
	var actualData map[string]interface{}
	if dataField, exists := message.Data["data"]; exists {
		if dataMap, ok := dataField.(map[string]interface{}); ok {
			actualData = dataMap
		}
	} else {
		// 如果没有嵌套，直接使用原始数据
		actualData = message.Data
	}

	from, _ := actualData["from"].(string)
	to, _ := actualData["to"].(string)
	msgType, _ := actualData["type"].(string)
	content, _ := actualData["content"].(string)
	extra, _ := actualData["extra"].(string)

	mp.logger.Infof("解析后的数据: from=%s, to=%s, type=%s, content=%s", from, to, msgType, content)

	// 发送消息
	msg, err := mp.messageService.SendPrivateMessage(from, to, msgType, content, extra)
	if err != nil {
		return fmt.Errorf("发送私聊消息失败: %v", err)
	}

	// 仅当接收者全局不在线时，存储为离线消息（分布式判定）
	if !mp.connectionManager.IsUserOnline(to) {
		mp.logger.Debugf("用户 %s 不在线，消息存为离线消息", to)
		mp.messageService.StoreOfflineMessage(to, msg)
	}

	// 注意：发送者的回显已经在WebSocket处理中完成，这里不需要重复推送

	return nil
}

// processGroupMessage 处理群聊消息
func (mp *MessageProcessor) processGroupMessage(ctx context.Context, message *queue.QueueMessage) error {
	// 解析消息数据 - 数据在嵌套的data字段中
	var actualData map[string]interface{}
	if dataField, exists := message.Data["data"]; exists {
		if dataMap, ok := dataField.(map[string]interface{}); ok {
			actualData = dataMap
		}
	} else {
		// 如果没有嵌套，直接使用原始数据
		actualData = message.Data
	}

	from, _ := actualData["from"].(string)
	groupID, _ := actualData["group_id"].(string)
	msgType, _ := actualData["type"].(string)
	content, _ := actualData["content"].(string)
	extra, _ := actualData["extra"].(string)

	// 发送消息（存储到数据库）
	_, err := mp.messageService.SendGroupMessage(from, groupID, msgType, content, extra)
	if err != nil {
		return fmt.Errorf("发送群聊消息失败: %v", err)
	}

	// 注意：群聊消息的实时推送已经在WebSocket处理中完成，这里只负责存储
	// 不需要重复推送，避免消息重复显示

	return nil
}
