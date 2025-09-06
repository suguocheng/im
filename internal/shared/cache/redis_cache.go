package cache

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	"github.com/redis/go-redis/v9"
)

// RedisCache Redis缓存实现
type RedisCache struct {
	client *redis.Client
	prefix string
}

// NewRedisCache 创建Redis缓存
func NewRedisCache(client *redis.Client, prefix string) *RedisCache {
	return &RedisCache{
		client: client,
		prefix: prefix,
	}
}

// Set 设置缓存
func (c *RedisCache) Set(ctx context.Context, key string, value interface{}, expiration time.Duration) error {
	data, err := json.Marshal(value)
	if err != nil {
		return fmt.Errorf("序列化失败: %v", err)
	}

	fullKey := c.prefix + key
	return c.client.Set(ctx, fullKey, data, expiration).Err()
}

// Get 获取缓存
func (c *RedisCache) Get(ctx context.Context, key string, dest interface{}) error {
	fullKey := c.prefix + key
	data, err := c.client.Get(ctx, fullKey).Result()
	if err != nil {
		if err == redis.Nil {
			return ErrCacheMiss
		}
		return fmt.Errorf("获取缓存失败: %v", err)
	}

	return json.Unmarshal([]byte(data), dest)
}

// Delete 删除缓存
func (c *RedisCache) Delete(ctx context.Context, key string) error {
	fullKey := c.prefix + key
	return c.client.Del(ctx, fullKey).Err()
}

// Exists 检查缓存是否存在
func (c *RedisCache) Exists(ctx context.Context, key string) (bool, error) {
	fullKey := c.prefix + key
	count, err := c.client.Exists(ctx, fullKey).Result()
	return count > 0, err
}

// SetNX 设置缓存（仅当不存在时）
func (c *RedisCache) SetNX(ctx context.Context, key string, value interface{}, expiration time.Duration) (bool, error) {
	data, err := json.Marshal(value)
	if err != nil {
		return false, fmt.Errorf("序列化失败: %v", err)
	}

	fullKey := c.prefix + key
	return c.client.SetNX(ctx, fullKey, data, expiration).Result()
}

// Increment 递增
func (c *RedisCache) Increment(ctx context.Context, key string) (int64, error) {
	fullKey := c.prefix + key
	return c.client.Incr(ctx, fullKey).Result()
}

// Decrement 递减
func (c *RedisCache) Decrement(ctx context.Context, key string) (int64, error) {
	fullKey := c.prefix + key
	return c.client.Decr(ctx, fullKey).Result()
}

// Expire 设置过期时间
func (c *RedisCache) Expire(ctx context.Context, key string, expiration time.Duration) error {
	fullKey := c.prefix + key
	return c.client.Expire(ctx, fullKey, expiration).Err()
}

// TTL 获取剩余过期时间
func (c *RedisCache) TTL(ctx context.Context, key string) (time.Duration, error) {
	fullKey := c.prefix + key
	return c.client.TTL(ctx, fullKey).Result()
}

// MultiGet 批量获取
func (c *RedisCache) MultiGet(ctx context.Context, keys []string) (map[string]interface{}, error) {
	if len(keys) == 0 {
		return make(map[string]interface{}), nil
	}

	fullKeys := make([]string, len(keys))
	for i, key := range keys {
		fullKeys[i] = c.prefix + key
	}

	values, err := c.client.MGet(ctx, fullKeys...).Result()
	if err != nil {
		return nil, fmt.Errorf("批量获取失败: %v", err)
	}

	result := make(map[string]interface{})
	for i, value := range values {
		if value != nil {
			var data interface{}
			if err := json.Unmarshal([]byte(value.(string)), &data); err == nil {
				result[keys[i]] = data
			}
		}
	}

	return result, nil
}

// MultiSet 批量设置
func (c *RedisCache) MultiSet(ctx context.Context, data map[string]interface{}, expiration time.Duration) error {
	if len(data) == 0 {
		return nil
	}

	pipe := c.client.Pipeline()
	for key, value := range data {
		jsonData, err := json.Marshal(value)
		if err != nil {
			return fmt.Errorf("序列化失败: %v", err)
		}

		fullKey := c.prefix + key
		pipe.Set(ctx, fullKey, jsonData, expiration)
	}

	_, err := pipe.Exec(ctx)
	return err
}

// CacheManager 缓存管理器
type CacheManager struct {
	redisCache *RedisCache
}

// NewCacheManager 创建缓存管理器
func NewCacheManager(redisClient *redis.Client) *CacheManager {
	return &CacheManager{
		redisCache: NewRedisCache(redisClient, "im:"),
	}
}

// GetUserCache 获取用户缓存
func (cm *CacheManager) GetUserCache() *UserCache {
	return &UserCache{cache: cm.redisCache}
}

// GetMessageCache 获取消息缓存
func (cm *CacheManager) GetMessageCache() *MessageCache {
	return &MessageCache{cache: cm.redisCache}
}

// GetGroupCache 获取群组缓存
func (cm *CacheManager) GetGroupCache() *GroupCache {
	return &GroupCache{cache: cm.redisCache}
}

// UserCache 用户缓存
type UserCache struct {
	cache *RedisCache
}

// GetUserInfo 获取用户信息
func (uc *UserCache) GetUserInfo(ctx context.Context, userID string) (map[string]interface{}, error) {
	var userInfo map[string]interface{}
	err := uc.cache.Get(ctx, "user:"+userID, &userInfo)
	return userInfo, err
}

// SetUserInfo 设置用户信息
func (uc *UserCache) SetUserInfo(ctx context.Context, userID string, userInfo map[string]interface{}) error {
	return uc.cache.Set(ctx, "user:"+userID, userInfo, 1*time.Hour)
}

// MessageCache 消息缓存
type MessageCache struct {
	cache *RedisCache
}

// GetRecentMessages 获取最近消息
func (mc *MessageCache) GetRecentMessages(ctx context.Context, sessionKey string, count int) ([]string, error) {
	key := fmt.Sprintf("messages:%s", sessionKey)
	return mc.cache.client.LRange(ctx, key, 0, int64(count-1)).Result()
}

// SetRecentMessage 设置最近消息
func (mc *MessageCache) SetRecentMessage(ctx context.Context, sessionKey string, message string) error {
	key := fmt.Sprintf("messages:%s", sessionKey)
	pipe := mc.cache.client.Pipeline()
	pipe.LPush(ctx, key, message)
	pipe.LTrim(ctx, key, 0, 999)          // 保留最近1000条
	pipe.Expire(ctx, key, 7*24*time.Hour) // 7天过期
	_, err := pipe.Exec(ctx)
	return err
}

// GroupCache 群组缓存
type GroupCache struct {
	cache *RedisCache
}

// GetGroupMembers 获取群组成员
func (gc *GroupCache) GetGroupMembers(ctx context.Context, groupID string) ([]string, error) {
	var members []string
	err := gc.cache.Get(ctx, "group_members:"+groupID, &members)
	return members, err
}

// SetGroupMembers 设置群组成员
func (gc *GroupCache) SetGroupMembers(ctx context.Context, groupID string, members []string) error {
	return gc.cache.Set(ctx, "group_members:"+groupID, members, 30*time.Minute)
}

// 错误定义
var (
	ErrCacheMiss = fmt.Errorf("cache miss")
)
