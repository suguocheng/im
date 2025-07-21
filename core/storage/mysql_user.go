package storage

import (
	"database/sql"
	"fmt"
	"time"
)

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

// 用户相关操作
type MySQLUserStorage struct {
	db *sql.DB
}

func NewMySQLUserStorage(db *sql.DB) *MySQLUserStorage {
	return &MySQLUserStorage{db: db}
}

// 初始化用户表
func (m *MySQLUserStorage) InitTables() error {
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

	_, err := m.db.Exec(userTable)
	if err != nil {
		return fmt.Errorf("创建用户表失败: %v", err)
	}

	return nil
}

// 创建用户
func (m *MySQLUserStorage) CreateUser(uid, username, password, email string) error {
	query := `INSERT INTO users (uid, username, password, email) VALUES (?, ?, ?, ?)`
	_, err := m.db.Exec(query, uid, username, password, email)
	return err
}

// 根据UID获取用户
func (m *MySQLUserStorage) GetUserByUID(uid string) (*User, error) {
	query := `SELECT id, uid, username, password, email, created_at, updated_at FROM users WHERE uid = ?`
	user := &User{}
	err := m.db.QueryRow(query, uid).Scan(&user.ID, &user.UID, &user.Username, &user.Password, &user.Email, &user.CreatedAt, &user.UpdatedAt)
	if err != nil {
		return nil, err
	}
	return user, nil
}

// 根据邮箱获取用户
func (m *MySQLUserStorage) GetUserByEmail(email string) (*User, error) {
	query := `SELECT id, uid, username, password, email, created_at, updated_at FROM users WHERE email = ?`
	user := &User{}
	err := m.db.QueryRow(query, email).Scan(&user.ID, &user.UID, &user.Username, &user.Password, &user.Email, &user.CreatedAt, &user.UpdatedAt)
	if err != nil {
		return nil, err
	}
	return user, nil
}

// 更新用户昵称
func (m *MySQLUserStorage) UpdateUsername(uid, newUsername string) error {
	query := `UPDATE users SET username = ? WHERE uid = ?`
	_, err := m.db.Exec(query, newUsername, uid)
	return err
}

// 更新用户密码
func (m *MySQLUserStorage) UpdatePassword(uid, newPassword string) error {
	query := `UPDATE users SET password = ? WHERE uid = ?`
	_, err := m.db.Exec(query, newPassword, uid)
	return err
}

// 删除用户
func (m *MySQLUserStorage) DeleteUser(uid string) error {
	query := `DELETE FROM users WHERE uid = ?`
	_, err := m.db.Exec(query, uid)
	return err
}
