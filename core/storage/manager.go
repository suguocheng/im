package storage

import (
	"fmt"
	"log"
	"sync"

	"im/config"
)

// 存储管理器
type StorageManager struct {
	mysqlStorage *MySQLStorage
	useMySQL     bool
	mu           sync.RWMutex
}

var (
	globalStorageManager *StorageManager
	once                 sync.Once
)

// 获取全局存储管理器实例
func GetStorageManager() *StorageManager {
	once.Do(func() {
		globalStorageManager = &StorageManager{
			useMySQL: false, // 默认未初始化
		}
	})
	return globalStorageManager
}

// 初始化MySQL存储
func (sm *StorageManager) InitMySQL() error {
	sm.mu.Lock()
	defer sm.mu.Unlock()

	dbConfig := config.GetDatabaseConfig()
	mysqlStorage, err := NewMySQLStorage(dbConfig.GetDSN())
	if err != nil {
		return err
	}

	sm.mysqlStorage = mysqlStorage
	sm.useMySQL = true
	log.Println("MySQL存储初始化成功")
	return nil
}

// 关闭存储
func (sm *StorageManager) Close() error {
	sm.mu.Lock()
	defer sm.mu.Unlock()

	if sm.mysqlStorage != nil {
		return sm.mysqlStorage.Close()
	}
	return nil
}

// ==================== 用户相关操作 ====================

// 创建用户
func (sm *StorageManager) CreateUser(uid, username, password, email string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.mysqlStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.mysqlStorage.CreateUser(uid, username, password, email)
}

// 根据UID获取用户
func (sm *StorageManager) GetUserByUID(uid string) (*User, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.mysqlStorage == nil {
		return nil, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.mysqlStorage.GetUserByUID(uid)
}

// 根据邮箱获取用户
func (sm *StorageManager) GetUserByEmail(email string) (*User, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.mysqlStorage == nil {
		return nil, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.mysqlStorage.GetUserByEmail(email)
}

// 更新用户昵称
func (sm *StorageManager) UpdateUsername(uid, newUsername string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.mysqlStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.mysqlStorage.UpdateUsername(uid, newUsername)
}

// 更新用户密码
func (sm *StorageManager) UpdatePassword(uid, newPassword string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.mysqlStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.mysqlStorage.UpdatePassword(uid, newPassword)
}

// 删除用户
func (sm *StorageManager) DeleteUser(uid string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.mysqlStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.mysqlStorage.DeleteUser(uid)
}

// ==================== 好友关系相关操作 ====================

// 添加好友关系
func (sm *StorageManager) AddFriendship(userID, friendID string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.mysqlStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.mysqlStorage.AddFriendship(userID, friendID)
}

// 删除好友关系
func (sm *StorageManager) DeleteFriendship(userID, friendID string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.mysqlStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.mysqlStorage.DeleteFriendship(userID, friendID)
}

// 获取好友列表
func (sm *StorageManager) GetFriends(userID string) ([]string, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.mysqlStorage == nil {
		return nil, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.mysqlStorage.GetFriends(userID)
}

// 检查是否为好友
func (sm *StorageManager) IsFriend(userID, friendID string) (bool, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.mysqlStorage == nil {
		return false, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.mysqlStorage.IsFriend(userID, friendID)
}

// ==================== 好友请求相关操作 ====================

// 添加好友请求
func (sm *StorageManager) AddFriendRequest(fromUserID, toUserID, verifyMsg string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.mysqlStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.mysqlStorage.AddFriendRequest(fromUserID, toUserID, verifyMsg)
}

// 获取收到的好友请求
func (sm *StorageManager) GetFriendRequests(toUserID string) (map[string]string, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.mysqlStorage == nil {
		return nil, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.mysqlStorage.GetFriendRequests(toUserID)
}

// 处理好友请求
func (sm *StorageManager) HandleFriendRequest(fromUserID, toUserID string, accept bool) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.mysqlStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.mysqlStorage.HandleFriendRequest(fromUserID, toUserID, accept)
}

// ==================== 好友备注和免打扰相关操作 ====================

// 设置好友备注
func (sm *StorageManager) SetFriendRemark(userID, friendID, remark string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.mysqlStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.mysqlStorage.SetFriendRemark(userID, friendID, remark)
}

// 获取好友备注
func (sm *StorageManager) GetFriendRemark(userID, friendID string) (string, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.mysqlStorage == nil {
		return "", fmt.Errorf("MySQL存储未初始化")
	}
	return sm.mysqlStorage.GetFriendRemark(userID, friendID)
}

// 设置免打扰
func (sm *StorageManager) SetFriendDND(userID, friendID string, dnd bool) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.mysqlStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.mysqlStorage.SetFriendDND(userID, friendID, dnd)
}

// 获取免打扰状态
func (sm *StorageManager) GetFriendDND(userID, friendID string) (bool, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.mysqlStorage == nil {
		return false, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.mysqlStorage.GetFriendDND(userID, friendID)
}
