package storage

import (
	"database/sql"
	"fmt"
	"time"
)

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

// 好友相关操作
type MySQLFriendStorage struct {
	db *sql.DB
}

func NewMySQLFriendStorage(db *sql.DB) *MySQLFriendStorage {
	return &MySQLFriendStorage{db: db}
}

// 初始化好友相关表
func (m *MySQLFriendStorage) InitTables() error {
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

	tables := []string{friendshipTable, friendRequestTable}

	for _, table := range tables {
		if _, err := m.db.Exec(table); err != nil {
			return fmt.Errorf("创建好友相关表失败: %v", err)
		}
	}

	return nil
}

// ==================== 好友关系相关操作 ====================

// 添加好友关系
func (m *MySQLFriendStorage) AddFriendship(userID, friendID string) error {
	// 添加双向好友关系
	query := `INSERT INTO friendships (user_id, friend_id) VALUES (?, ?), (?, ?)`
	_, err := m.db.Exec(query, userID, friendID, friendID, userID)
	return err
}

// 删除好友关系
func (m *MySQLFriendStorage) DeleteFriendship(userID, friendID string) error {
	query := `DELETE FROM friendships WHERE (user_id = ? AND friend_id = ?) OR (user_id = ? AND friend_id = ?)`
	_, err := m.db.Exec(query, userID, friendID, friendID, userID)
	return err
}

// 获取好友列表
func (m *MySQLFriendStorage) GetFriends(userID string) ([]string, error) {
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
func (m *MySQLFriendStorage) IsFriend(userID, friendID string) (bool, error) {
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
func (m *MySQLFriendStorage) AddFriendRequest(fromUserID, toUserID, verifyMsg string) error {
	query := `INSERT INTO friend_requests (from_user_id, to_user_id, verify_msg) VALUES (?, ?, ?)`
	_, err := m.db.Exec(query, fromUserID, toUserID, verifyMsg)
	return err
}

// 获取收到的好友请求
func (m *MySQLFriendStorage) GetFriendRequests(toUserID string) (map[string]string, error) {
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
func (m *MySQLFriendStorage) HandleFriendRequest(fromUserID, toUserID string, accept bool) error {
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
func (m *MySQLFriendStorage) SetFriendRemark(userID, friendID, remark string) error {
	query := `UPDATE friendships SET remark = ? WHERE user_id = ? AND friend_id = ?`
	_, err := m.db.Exec(query, remark, userID, friendID)
	return err
}

// 获取好友备注
func (m *MySQLFriendStorage) GetFriendRemark(userID, friendID string) (string, error) {
	query := `SELECT remark FROM friendships WHERE user_id = ? AND friend_id = ?`
	var remark string
	err := m.db.QueryRow(query, userID, friendID).Scan(&remark)
	if err != nil {
		return "", err
	}
	return remark, nil
}

// 设置免打扰
func (m *MySQLFriendStorage) SetFriendDND(userID, friendID string, dnd bool) error {
	query := `UPDATE friendships SET dnd = ? WHERE user_id = ? AND friend_id = ?`
	_, err := m.db.Exec(query, dnd, userID, friendID)
	return err
}

// 获取免打扰状态
func (m *MySQLFriendStorage) GetFriendDND(userID, friendID string) (bool, error) {
	query := `SELECT dnd FROM friendships WHERE user_id = ? AND friend_id = ?`
	var dnd bool
	err := m.db.QueryRow(query, userID, friendID).Scan(&dnd)
	if err != nil {
		return false, err
	}
	return dnd, nil
}
