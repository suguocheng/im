package storage

import (
	"database/sql"
	"fmt"
	"log"
	"strconv"
	"strings"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

// MySQL存储实现
type MySQLStorage struct {
	db *sql.DB
}

// 用户信息表结构
type User struct {
	ID        int64     `db:"id"`
	UID       string    `db:"uid"`
	Username  string    `db:"username"`
	Password  string    `db:"password"`
	Email     string    `db:"email"`
	CreatedAt time.Time `db:"created_at"`
	UpdatedAt time.Time `db:"updated_at"`
}

// 好友关系表结构
type Friendship struct {
	ID        int64     `db:"id"`
	UserID    string    `db:"user_id"`
	FriendID  string    `db:"friend_id"`
	Remark    string    `db:"remark"`
	DND       bool      `db:"dnd"`
	CreatedAt time.Time `db:"created_at"`
	UpdatedAt time.Time `db:"updated_at"`
}

// 好友请求表结构
type FriendRequest struct {
	ID         int64     `db:"id"`
	FromUserID string    `db:"from_user_id"`
	ToUserID   string    `db:"to_user_id"`
	VerifyMsg  string    `db:"verify_msg"`
	Status     string    `db:"status"` // pending, accepted, rejected
	CreatedAt  time.Time `db:"created_at"`
	UpdatedAt  time.Time `db:"updated_at"`
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

// 初始化数据库表
func (m *MySQLStorage) initTables() error {
	// 用户表
	userTable := `
	CREATE TABLE IF NOT EXISTS users (
		id BIGINT AUTO_INCREMENT PRIMARY KEY,
		uid VARCHAR(64) UNIQUE NOT NULL,
		username VARCHAR(64) NOT NULL,
		password VARCHAR(255) NOT NULL,
		email VARCHAR(128) UNIQUE NOT NULL,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		INDEX idx_uid (uid),
		INDEX idx_email (email)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
	`

	// 好友关系表
	friendshipTable := `
	CREATE TABLE IF NOT EXISTS friendships (
		id BIGINT AUTO_INCREMENT PRIMARY KEY,
		user_id VARCHAR(64) NOT NULL,
		friend_id VARCHAR(64) NOT NULL,
		remark VARCHAR(128) DEFAULT '',
		dnd BOOLEAN DEFAULT FALSE,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		UNIQUE KEY unique_friendship (user_id, friend_id),
		INDEX idx_user_id (user_id),
		INDEX idx_friend_id (friend_id)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
	`

	// 好友请求表
	friendRequestTable := `
	CREATE TABLE IF NOT EXISTS friend_requests (
		id BIGINT AUTO_INCREMENT PRIMARY KEY,
		from_user_id VARCHAR(64) NOT NULL,
		to_user_id VARCHAR(64) NOT NULL,
		verify_msg VARCHAR(255) DEFAULT '',
		status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		UNIQUE KEY unique_request (from_user_id, to_user_id),
		INDEX idx_from_user_id (from_user_id),
		INDEX idx_to_user_id (to_user_id),
		INDEX idx_status (status)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
	`

	tables := []string{userTable, friendshipTable, friendRequestTable}

	for _, table := range tables {
		if _, err := m.db.Exec(table); err != nil {
			return fmt.Errorf("创建表失败: %v", err)
		}
	}

	log.Println("MySQL数据库表初始化完成")
	return nil
}

// 关闭数据库连接
func (m *MySQLStorage) Close() error {
	return m.db.Close()
}

// ==================== 用户相关操作 ====================

// 创建用户
func (m *MySQLStorage) CreateUser(uid, username, password, email string) error {
	query := `INSERT INTO users (uid, username, password, email) VALUES (?, ?, ?, ?)`
	_, err := m.db.Exec(query, uid, username, password, email)
	return err
}

// 根据UID获取用户
func (m *MySQLStorage) GetUserByUID(uid string) (*User, error) {
	query := `SELECT id, uid, username, password, email, created_at, updated_at FROM users WHERE uid = ?`
	user := &User{}
	err := m.db.QueryRow(query, uid).Scan(&user.ID, &user.UID, &user.Username, &user.Password, &user.Email, &user.CreatedAt, &user.UpdatedAt)
	if err != nil {
		return nil, err
	}
	return user, nil
}

// 根据邮箱获取用户
func (m *MySQLStorage) GetUserByEmail(email string) (*User, error) {
	query := `SELECT id, uid, username, password, email, created_at, updated_at FROM users WHERE email = ?`
	user := &User{}
	err := m.db.QueryRow(query, email).Scan(&user.ID, &user.UID, &user.Username, &user.Password, &user.Email, &user.CreatedAt, &user.UpdatedAt)
	if err != nil {
		return nil, err
	}
	return user, nil
}

// 更新用户昵称
func (m *MySQLStorage) UpdateUsername(uid, newUsername string) error {
	query := `UPDATE users SET username = ? WHERE uid = ?`
	_, err := m.db.Exec(query, newUsername, uid)
	return err
}

// 更新用户密码
func (m *MySQLStorage) UpdatePassword(uid, newPassword string) error {
	query := `UPDATE users SET password = ? WHERE uid = ?`
	_, err := m.db.Exec(query, newPassword, uid)
	return err
}

// 删除用户
func (m *MySQLStorage) DeleteUser(uid string) error {
	query := `DELETE FROM users WHERE uid = ?`
	_, err := m.db.Exec(query, uid)
	return err
}

// ==================== 好友关系相关操作 ====================

// 添加好友关系
func (m *MySQLStorage) AddFriendship(userID, friendID string) error {
	// 添加双向好友关系
	query := `INSERT INTO friendships (user_id, friend_id) VALUES (?, ?), (?, ?)`
	_, err := m.db.Exec(query, userID, friendID, friendID, userID)
	return err
}

// 删除好友关系
func (m *MySQLStorage) DeleteFriendship(userID, friendID string) error {
	query := `DELETE FROM friendships WHERE (user_id = ? AND friend_id = ?) OR (user_id = ? AND friend_id = ?)`
	_, err := m.db.Exec(query, userID, friendID, friendID, userID)
	return err
}

// 获取好友列表
func (m *MySQLStorage) GetFriends(userID string) ([]string, error) {
	query := `SELECT friend_id FROM friendships WHERE user_id = ?`
	rows, err := m.db.Query(query, userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var friends []string
	for rows.Next() {
		var friendID string
		if err := rows.Scan(&friendID); err != nil {
			return nil, err
		}
		friends = append(friends, friendID)
	}
	return friends, nil
}

// 检查是否为好友
func (m *MySQLStorage) IsFriend(userID, friendID string) (bool, error) {
	query := `SELECT COUNT(*) FROM friendships WHERE user_id = ? AND friend_id = ?`
	var count int
	err := m.db.QueryRow(query, userID, friendID).Scan(&count)
	if err != nil {
		return false, err
	}
	return count > 0, nil
}

// ==================== 好友请求相关操作 ====================

// 添加好友请求
func (m *MySQLStorage) AddFriendRequest(fromUserID, toUserID, verifyMsg string) error {
	query := `INSERT INTO friend_requests (from_user_id, to_user_id, verify_msg) VALUES (?, ?, ?)`
	_, err := m.db.Exec(query, fromUserID, toUserID, verifyMsg)
	return err
}

// 获取收到的好友请求
func (m *MySQLStorage) GetFriendRequests(toUserID string) (map[string]string, error) {
	query := `SELECT from_user_id, verify_msg FROM friend_requests WHERE to_user_id = ? AND status = 'pending'`
	rows, err := m.db.Query(query, toUserID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	requests := make(map[string]string)
	for rows.Next() {
		var fromUserID, verifyMsg string
		if err := rows.Scan(&fromUserID, &verifyMsg); err != nil {
			return nil, err
		}
		requests[fromUserID] = verifyMsg
	}
	return requests, nil
}

// 处理好友请求
func (m *MySQLStorage) HandleFriendRequest(fromUserID, toUserID string, accept bool) error {
	status := "rejected"
	if accept {
		status = "accepted"
	}

	// 更新请求状态
	query := `UPDATE friend_requests SET status = ? WHERE from_user_id = ? AND to_user_id = ?`
	_, err := m.db.Exec(query, status, fromUserID, toUserID)
	if err != nil {
		return err
	}

	// 如果接受，添加好友关系
	if accept {
		return m.AddFriendship(fromUserID, toUserID)
	}

	return nil
}

// ==================== 好友备注和免打扰相关操作 ====================

// 设置好友备注
func (m *MySQLStorage) SetFriendRemark(userID, friendID, remark string) error {
	query := `UPDATE friendships SET remark = ? WHERE user_id = ? AND friend_id = ?`
	_, err := m.db.Exec(query, remark, userID, friendID)
	return err
}

// 获取好友备注
func (m *MySQLStorage) GetFriendRemark(userID, friendID string) (string, error) {
	query := `SELECT remark FROM friendships WHERE user_id = ? AND friend_id = ?`
	var remark string
	err := m.db.QueryRow(query, userID, friendID).Scan(&remark)
	if err != nil {
		return "", err
	}
	return remark, nil
}

// 设置免打扰
func (m *MySQLStorage) SetFriendDND(userID, friendID string, dnd bool) error {
	query := `UPDATE friendships SET dnd = ? WHERE user_id = ? AND friend_id = ?`
	_, err := m.db.Exec(query, dnd, userID, friendID)
	return err
}

// 获取免打扰状态
func (m *MySQLStorage) GetFriendDND(userID, friendID string) (bool, error) {
	query := `SELECT dnd FROM friendships WHERE user_id = ? AND friend_id = ?`
	var dnd bool
	err := m.db.QueryRow(query, userID, friendID).Scan(&dnd)
	if err != nil {
		return false, err
	}
	return dnd, nil
}
