package storage

import (
	"database/sql"
	"fmt"
	"log"
	"strconv"
	"strings"

	_ "github.com/go-sql-driver/mysql"
)

// MySQL存储实现 - 基础存储接口
type MySQLStorage struct {
	db *sql.DB
}

// 创建MySQL存储实例
func NewMySQLStorage(dsn string) (*MySQLStorage, error) {
	// 首先尝试连接MySQL服务器（不指定数据库）
	// 从DSN中提取数据库名
	dbConfig := extractDBConfigFromDSN(dsn)
	serverDSN := fmt.Sprintf("%s:%s@tcp(%s:%d)/?charset=%s&parseTime=true&loc=Local",
		dbConfig.Username, dbConfig.Password, dbConfig.Host, dbConfig.Port, dbConfig.Charset)

	// 连接MySQL服务器
	serverDB, err := sql.Open("mysql", serverDSN)
	if err != nil {
		return nil, fmt.Errorf("连接MySQL服务器失败: %v", err)
	}
	defer serverDB.Close()

	// 测试服务器连接
	if err := serverDB.Ping(); err != nil {
		return nil, fmt.Errorf("MySQL服务器连接测试失败: %v", err)
	}

	// 创建数据库（如果不存在）
	createDBQuery := fmt.Sprintf("CREATE DATABASE IF NOT EXISTS `%s` CHARACTER SET %s COLLATE %s_unicode_ci",
		dbConfig.Database, dbConfig.Charset, dbConfig.Charset)
	if _, err := serverDB.Exec(createDBQuery); err != nil {
		return nil, fmt.Errorf("创建数据库失败: %v", err)
	}

	// 现在连接指定的数据库
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		return nil, fmt.Errorf("连接MySQL数据库失败: %v", err)
	}

	// 测试数据库连接
	if err := db.Ping(); err != nil {
		return nil, fmt.Errorf("MySQL数据库连接测试失败: %v", err)
	}

	storage := &MySQLStorage{db: db}

	// 初始化数据库表
	if err := storage.initTables(); err != nil {
		return nil, fmt.Errorf("初始化数据库表失败: %v", err)
	}

	return storage, nil
}

// 从DSN中提取数据库配置
type dbConfig struct {
	Username string
	Password string
	Host     string
	Port     int
	Database string
	Charset  string
}

func extractDBConfigFromDSN(dsn string) dbConfig {
	// 简单的DSN解析，格式: username:password@tcp(host:port)/database?charset=xxx
	var config dbConfig
	config.Charset = "utf8mb4" // 默认字符集
	config.Port = 3306         // 默认端口

	// 解析DSN格式: username:password@tcp(host:port)/database?charset=xxx
	// 这里使用简单的字符串处理，实际项目中可以使用正则表达式
	if len(dsn) == 0 {
		return config
	}

	// 提取用户名和密码
	if atIndex := strings.Index(dsn, "@"); atIndex > 0 {
		userPass := dsn[:atIndex]
		if colonIndex := strings.Index(userPass, ":"); colonIndex > 0 {
			config.Username = userPass[:colonIndex]
			config.Password = userPass[colonIndex+1:]
		} else {
			config.Username = userPass
		}
		dsn = dsn[atIndex+1:]
	}

	// 提取主机和端口
	if tcpIndex := strings.Index(dsn, "tcp("); tcpIndex >= 0 {
		dsn = dsn[tcpIndex+4:] // 跳过 "tcp("
		if closeIndex := strings.Index(dsn, ")"); closeIndex > 0 {
			hostPort := dsn[:closeIndex]
			if colonIndex := strings.Index(hostPort, ":"); colonIndex > 0 {
				config.Host = hostPort[:colonIndex]
				if port, err := strconv.Atoi(hostPort[colonIndex+1:]); err == nil {
					config.Port = port
				}
			} else {
				config.Host = hostPort
			}
			dsn = dsn[closeIndex+1:]
		}
	}

	// 提取数据库名
	if slashIndex := strings.Index(dsn, "/"); slashIndex >= 0 {
		dbPart := dsn[slashIndex+1:]
		if questionIndex := strings.Index(dbPart, "?"); questionIndex > 0 {
			config.Database = dbPart[:questionIndex]
		} else {
			config.Database = dbPart
		}
	}

	return config
}

// 初始化数据库表 - 由各个模块负责初始化自己的表
func (m *MySQLStorage) initTables() error {
	log.Println("MySQL数据库表初始化完成")
	return nil
}

// 关闭数据库连接
func (m *MySQLStorage) Close() error {
	return m.db.Close()
}

// 获取数据库连接
func (m *MySQLStorage) GetDB() *sql.DB {
	return m.db
}
