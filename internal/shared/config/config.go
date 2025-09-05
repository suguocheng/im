package config

import (
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

// ServiceConfig 服务配置
type ServiceConfig struct {
	Server   ServerConfig   `json:"server"`
	Database DatabaseConfig `json:"database"`
	Redis    RedisConfig    `json:"redis"`
	Mongo    MongoConfig    `json:"mongo"`
	Log      LogConfig      `json:"log"`
	Email    EmailConfig    `json:"email"`
	File     FileConfig     `json:"file"`
}

// ServerConfig 服务器配置
type ServerConfig struct {
	Port int `json:"port"`
}

// DatabaseConfig 数据库配置
type DatabaseConfig struct {
	Host     string `json:"host"`
	Port     int    `json:"port"`
	Username string `json:"username"`
	Password string `json:"password"`
	Database string `json:"database"`
}

// RedisConfig Redis配置
type RedisConfig struct {
	Host     string `json:"host"`
	Port     int    `json:"port"`
	Password string `json:"password"`
	DB       int    `json:"db"`
}

// MongoConfig MongoDB配置
type MongoConfig struct {
	URI      string `json:"uri"`
	Database string `json:"database"`
}

// LogConfig 日志配置
type LogConfig struct {
	Level string `json:"level"`
}

// EmailConfig 邮件配置
type EmailConfig struct {
	Host      string `json:"host"`
	Port      int    `json:"port"`
	Username  string `json:"username"`
	Password  string `json:"password"`
	FromEmail string `json:"from_email"`
}

// FileConfig 文件配置
type FileConfig struct {
	UploadPath string `json:"upload_path"`
}

// LoadServiceConfig 加载服务配置
func LoadServiceConfig(serviceName string) *ServiceConfig {
	// 加载环境变量（优先根目录 config.env）
	_ = godotenv.Load("config.env")

	// 根据服务名设置不同的端口
	port := getPortForService(serviceName)

	return &ServiceConfig{
		Server: ServerConfig{
			Port: port,
		},
		Database: DatabaseConfig{
			Host:     getEnv("MYSQL_HOST", "localhost"),
			Port:     getEnvAsInt("MYSQL_PORT", 3306),
			Username: getEnv("MYSQL_USERNAME", "root"),
			Password: getEnv("MYSQL_PASSWORD", ""),
			Database: getEnv("MYSQL_DATABASE", "im_system"),
		},
		Redis: RedisConfig{
			Host:     getEnv("REDIS_HOST", "localhost"),
			Port:     getEnvAsInt("REDIS_PORT", 6379),
			Password: getEnv("REDIS_PASSWORD", ""),
			DB:       getEnvAsInt("REDIS_DB", 0),
		},
		Mongo: MongoConfig{
			URI:      getEnv("MONGODB_URI", "mongodb://localhost:27017"),
			Database: getEnv("MONGODB_DATABASE", "im_messages"),
		},
		Log: LogConfig{
			Level: getEnv("LOG_LEVEL", "info"),
		},
		Email: EmailConfig{
			Host:      firstNonEmpty(getEnv("SMTP_HOST", ""), getEnv("EMAIL_HOST", "smtp.gmail.com")),
			Port:      firstNonZero(getEnvAsInt("SMTP_PORT", 0), getEnvAsInt("EMAIL_PORT", 587)),
			Username:  firstNonEmpty(getEnv("SMTP_USERNAME", ""), getEnv("EMAIL_USERNAME", "")),
			Password:  firstNonEmpty(getEnv("SMTP_PASSWORD", ""), getEnv("EMAIL_PASSWORD", "")),
			FromEmail: firstNonEmpty(getEnv("FROM_EMAIL", ""), getEnv("EMAIL_FROM", "")),
		},
		File: FileConfig{
			UploadPath: firstNonEmpty(getEnv("UPLOAD_PATH", ""), getEnv("UPLOAD_DIR", "./uploads")),
		},
	}
}

// getPortForService 根据服务名获取端口
func getPortForService(serviceName string) int {
	ports := map[string]int{
		"user-service":         8081,
		"friend-service":       8082,
		"group-service":        8083,
		"message-service":      8084,
		"file-service":         8085,
		"notification-service": 8086,
		"gateway":              8080,
	}
	if port, exists := ports[serviceName]; exists {
		return port
	}
	return 8080
}

// getEnv 获取环境变量，如果不存在则返回默认值
func getEnv(key, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return defaultValue
}

// getEnvAsInt 获取环境变量并转换为整数
func getEnvAsInt(key string, defaultValue int) int {
	if value := os.Getenv(key); value != "" {
		if intValue, err := strconv.Atoi(value); err == nil {
			return intValue
		}
	}
	return defaultValue
}

// firstNonEmpty 返回第一个非空字符串，否则空串
func firstNonEmpty(values ...string) string {
	for _, v := range values {
		if v != "" {
			return v
		}
	}
	return ""
}

// firstNonZero 返回第一个非零整数，否则0
func firstNonZero(values ...int) int {
	for _, v := range values {
		if v != 0 {
			return v
		}
	}
	return 0
}
