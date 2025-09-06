package database

import (
	"context"
	"database/sql"
	"fmt"
	"sync"
	"time"

	"im/internal/shared/config"
	"im/internal/shared/logger"

	"github.com/redis/go-redis/v9"
	"go.mongodb.org/mongo-driver/mongo"
)

// Manager 数据库连接池管理器
type Manager struct {
	pool   *ConnectionPool
	logger *logger.Logger
	mu     sync.RWMutex
}

// NewManager 创建数据库连接池管理器
func NewManager(cfg config.DatabaseConfig, redisCfg config.RedisConfig, mongoCfg config.MongoConfig, logger *logger.Logger) (*Manager, error) {
	// 构建连接池配置
	poolConfig := PoolConfig{
		MySQL: MySQLConfig{
			Host:            cfg.Host,
			Port:            cfg.Port,
			Username:        cfg.Username,
			Password:        cfg.Password,
			Database:        cfg.Database,
			MaxOpenConns:    100,
			MaxIdleConns:    10,
			ConnMaxLifetime: 1 * time.Hour,
			ConnMaxIdleTime: 30 * time.Minute,
		},
		Mongo: MongoConfig{
			URI:             mongoCfg.URI,
			Database:        mongoCfg.Database,
			MaxPoolSize:     100,
			MinPoolSize:     10,
			MaxConnIdleTime: 30 * time.Minute,
		},
		Redis: RedisConfig{
			Host:         redisCfg.Host,
			Port:         redisCfg.Port,
			Password:     redisCfg.Password,
			DB:           redisCfg.DB,
			PoolSize:     100,
			MinIdleConns: 10,
			MaxRetries:   3,
		},
	}

	// 创建连接池
	pool, err := NewConnectionPool(poolConfig)
	if err != nil {
		return nil, fmt.Errorf("创建数据库连接池失败: %v", err)
	}

	manager := &Manager{
		pool:   pool,
		logger: logger,
	}

	// 启动健康检查
	go manager.startHealthCheck()

	return manager, nil
}

// GetMySQL 获取MySQL连接
func (m *Manager) GetMySQL() *sql.DB {
	m.mu.RLock()
	defer m.mu.RUnlock()
	return m.pool.MySQL
}

// GetMongoDB 获取MongoDB连接
func (m *Manager) GetMongoDB() *mongo.Client {
	m.mu.RLock()
	defer m.mu.RUnlock()
	return m.pool.MongoDB
}

// GetRedis 获取Redis连接
func (m *Manager) GetRedis() *redis.Client {
	m.mu.RLock()
	defer m.mu.RUnlock()
	return m.pool.Redis
}

// startHealthCheck 启动健康检查
func (m *Manager) startHealthCheck() {
	ticker := time.NewTicker(30 * time.Second)
	defer ticker.Stop()

	for range ticker.C {
		m.checkConnections()
	}
}

// checkConnections 检查连接健康状态
func (m *Manager) checkConnections() {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	// 检查MySQL连接
	if m.pool.MySQL != nil {
		if err := m.pool.MySQL.PingContext(ctx); err != nil {
			m.logger.Errorf("MySQL连接检查失败: %v", err)
		}
	}

	// 检查MongoDB连接
	if m.pool.MongoDB != nil {
		if err := m.pool.MongoDB.Ping(ctx, nil); err != nil {
			m.logger.Errorf("MongoDB连接检查失败: %v", err)
		}
	}

	// 检查Redis连接
	if m.pool.Redis != nil {
		if err := m.pool.Redis.Ping(ctx).Err(); err != nil {
			m.logger.Errorf("Redis连接检查失败: %v", err)
		}
	}
}

// GetStats 获取连接池统计信息
func (m *Manager) GetStats() map[string]interface{} {
	m.mu.RLock()
	defer m.mu.RUnlock()

	stats := make(map[string]interface{})

	if m.pool.MySQL != nil {
		stats["mysql"] = map[string]interface{}{
			"max_open_conns": m.pool.MySQL.Stats().MaxOpenConnections,
			"open_conns":     m.pool.MySQL.Stats().OpenConnections,
			"in_use":         m.pool.MySQL.Stats().InUse,
			"idle":           m.pool.MySQL.Stats().Idle,
		}
	}

	if m.pool.Redis != nil {
		stats["redis"] = map[string]interface{}{
			"pool_size":      m.pool.Redis.Options().PoolSize,
			"min_idle_conns": m.pool.Redis.Options().MinIdleConns,
		}
	}

	return stats
}

// Close 关闭所有连接
func (m *Manager) Close() error {
	m.mu.Lock()
	defer m.mu.Unlock()

	if m.pool != nil {
		return m.pool.Close()
	}
	return nil
}
