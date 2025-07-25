package storage

import (
	"database/sql"
	"fmt"
	"time"

	"golang.org/x/crypto/bcrypt"
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

	// 新增：自动修正uid字段为NULL，避免注册时插入报错
	_, err = m.db.Exec("ALTER TABLE users MODIFY COLUMN uid VARCHAR(64) NULL;")
	if err != nil {
		fmt.Println("尝试修正users.uid为NULL失败：", err)
	}

	return nil
}

// 创建用户
func (m *MySQLUserStorage) CreateUser(username, password, email string) (string, error) {
	// 先加密密码
	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", fmt.Errorf("密码加密失败: %v", err)
	}
	// 先插入一条记录，让id自增
	query := `INSERT INTO users (username, password, email) VALUES (?, ?, ?)`
	res, err := m.db.Exec(query, username, string(hash), email)
	if err != nil {
		return "", err
	}
	id, err := res.LastInsertId()
	if err != nil {
		return "", err
	}
	uid := fmt.Sprintf("%d", id)
	// 更新uid字段
	_, err = m.db.Exec(`UPDATE users SET uid = ? WHERE id = ?`, uid, id)
	if err != nil {
		return "", err
	}
	return uid, nil
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
	// 先加密密码
	hash, err := bcrypt.GenerateFromPassword([]byte(newPassword), bcrypt.DefaultCost)
	if err != nil {
		return fmt.Errorf("新密码加密失败: %v", err)
	}
	query := `UPDATE users SET password = ? WHERE uid = ?`
	_, err = m.db.Exec(query, string(hash), uid)
	return err
}

// 删除用户
func (m *MySQLUserStorage) DeleteUser(uid string) error {
	query := `DELETE FROM users WHERE uid = ?`
	_, err := m.db.Exec(query, uid)
	return err
}

// 校验密码（可选）
func (m *MySQLUserStorage) CheckPassword(uid, password string) (bool, error) {
	user, err := m.GetUserByUID(uid)
	if err != nil {
		return false, err
	}
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {
		return false, nil
	}
	return true, nil
}
