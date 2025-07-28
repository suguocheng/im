package config

import (
	"fmt"
	"log"
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

// MysqlConfig MySQL配置
type MysqlConfig struct {
	Host     string
	Port     int
	Username string
	Password string
	Database string
	Charset  string
}

// RedisConfig Redis配置
type RedisConfig struct {
	Host     string
	Port     int
	Password string
	DB       int
}

// EmailConfig 邮件服务配置
type EmailConfig struct {
	Host     string
	Port     int
	Username string
	Password string
}

// MongoDBConfig MongoDB配置
type MongoDBConfig struct {
	URI        string
	Database   string
	Collection string
}

// 初始化配置
func init() {
	// 尝试加载.env文件
	if err := godotenv.Load(); err != nil {
		// 如果.env文件不存在，尝试加载config.env
		if err := godotenv.Load("config.env"); err != nil {
			log.Println("未找到.env或config.env文件，将使用环境变量或默认值")
		} else {
			log.Println("已加载config.env文件")
		}
	} else {
		log.Println("已加载.env文件")
	}
}

// GetMysqlConfig 获取MySQL配置
func GetMysqlConfig() *MysqlConfig {
	return &MysqlConfig{
		Host:     getEnv("MYSQL_HOST", ""),
		Port:     getEnvAsInt("MYSQL_PORT", 0),
		Username: getEnv("MYSQL_USERNAME", ""),
		Password: getEnv("MYSQL_PASSWORD", ""),
		Database: getEnv("MYSQL_DATABASE", ""),
		Charset:  getEnv("MYSQL_CHARSET", "utf8mb4"),
	}
}

// GetRedisConfig 获取Redis配置
func GetRedisConfig() *RedisConfig {
	return &RedisConfig{
		Host:     getEnv("REDIS_HOST", ""),
		Port:     getEnvAsInt("REDIS_PORT", 0),
		Password: getEnv("REDIS_PASSWORD", ""),
		DB:       getEnvAsInt("REDIS_DB", 0),
	}
}

// GetEmailConfig 获取邮件服务配置
func GetEmailConfig() *EmailConfig {
	return &EmailConfig{
		Host:     getEnv("EMAIL_HOST", ""),
		Port:     getEnvAsInt("EMAIL_PORT", 0),
		Username: getEnv("EMAIL_USERNAME", ""),
		Password: getEnv("EMAIL_PASSWORD", ""),
	}
}

// GetMongoDBConfig 获取MongoDB配置
func GetMongoDBConfig() *MongoDBConfig {
	return &MongoDBConfig{
		URI:        getEnv("MONGODB_URI", "mongodb://localhost:27017"),
		Database:   getEnv("MONGODB_DATABASE", "im_system"),
		Collection: getEnv("MONGODB_COLLECTION", "messages"),
	}
}

// 获取DSN连接字符串
func (c *MysqlConfig) GetDSN() string {
	return fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=%s&parseTime=true&loc=Local",
		c.Username, c.Password, c.Host, c.Port, c.Database, c.Charset)
}

// 从环境变量获取字符串值
func getEnv(key, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return defaultValue
}

// 从环境变量获取整数值
func getEnvAsInt(key string, defaultValue int) int {
	if value := os.Getenv(key); value != "" {
		if parsedValue, err := strconv.Atoi(value); err == nil {
			return parsedValue
		}
	}
	return defaultValue
}
