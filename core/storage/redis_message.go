package storage

import (
	"context"
	"time"

	"github.com/redis/go-redis/v9"
)

var ctx = context.Background()

// RedisMessageStorage 封装消息相关的Redis操作
type RedisMessageStorage struct {
	client *redis.Client
}

// NewRedisMessageStorage 初始化Redis客户端
func NewRedisMessageStorage(addr, password string, db int) *RedisMessageStorage {
	client := redis.NewClient(&redis.Options{
		Addr:     addr,
		Password: password,
		DB:       db,
	})
	return &RedisMessageStorage{client: client}
}

// 缓存一条消息到List（如未读/最近消息）
func (r *RedisMessageStorage) CacheMessage(sessionKey string, msg string, expire time.Duration) error {
	if err := r.client.LPush(ctx, sessionKey, msg).Err(); err != nil {
		return err
	}
	if expire > 0 {
		_ = r.client.Expire(ctx, sessionKey, expire).Err()
	}
	return nil
}

// 获取最近N条消息
func (r *RedisMessageStorage) GetRecentMessages(sessionKey string, count int64) ([]string, error) {
	return r.client.LRange(ctx, sessionKey, 0, count-1).Result()
}

// 发布实时消息（推送）
func (r *RedisMessageStorage) Publish(channel string, msg string) error {
	return r.client.Publish(ctx, channel, msg).Err()
}

// 订阅实时消息（推送）
func (r *RedisMessageStorage) Subscribe(channel string) *redis.PubSub {
	return r.client.Subscribe(ctx, channel)
}

// 删除缓存
func (r *RedisMessageStorage) DeleteCache(sessionKey string) error {
	return r.client.Del(ctx, sessionKey).Err()
}

// 存储离线消息
func (r *RedisMessageStorage) StoreOfflineMessage(userID string, msg string) error {
	key := "offline:" + userID
	return r.client.LPush(ctx, key, msg).Err()
}

// 获取并删除用户的所有离线消息
func (r *RedisMessageStorage) GetAndClearOfflineMessages(userID string) ([]string, error) {
	key := "offline:" + userID
	// 获取所有离线消息
	messages, err := r.client.LRange(ctx, key, 0, -1).Result()
	if err != nil {
		return nil, err
	}
	// 删除离线消息列表
	if len(messages) > 0 {
		_ = r.client.Del(ctx, key).Err()
	}
	return messages, nil
}

// 获取用户离线消息数量
func (r *RedisMessageStorage) GetOfflineMessageCount(userID string) (int64, error) {
	key := "offline:" + userID
	return r.client.LLen(ctx, key).Result()
}
