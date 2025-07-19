package config

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
)

// 数据库配置
type DatabaseConfig struct {
	Host     string
	Port     int
	Username string
	Password string
	Database string
	Charset  string
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

// 获取数据库配置
func GetDatabaseConfig() *DatabaseConfig {
	return &DatabaseConfig{
		Host:     getEnv("DB_HOST", "localhost"),
		Port:     getEnvAsInt("DB_PORT", 3306),
		Username: getEnv("DB_USERNAME", "root"),
		Password: getEnv("DB_PASSWORD", ""),
		Database: getEnv("DB_DATABASE", "im_system"),
		Charset:  getEnv("DB_CHARSET", "utf8mb4"),
	}
}

// 获取DSN连接字符串
func (c *DatabaseConfig) GetDSN() string {
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
		if intValue, err := fmt.Sscanf(value, "%d", &defaultValue); err == nil && intValue == 1 {
			return defaultValue
		}
	}
	return defaultValue
}
