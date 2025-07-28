package storage

import (
	"database/sql"
	"fmt"
	"sync"
	"time"

	"im/config"
	pb "im/core/protocol/pb"
)

// 存储管理器
type StorageManager struct {
	mysqlStorage  *MySQLStorage
	userStorage   *MySQLUserStorage
	friendStorage *MySQLFriendStorage
	groupStorage  *MySQLGroupStorage
	mongoStorage  *MongoDBMessageStorage
	useMySQL      bool
	useMongoDB    bool
	mu            sync.RWMutex
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

	dbConfig := config.GetMysqlConfig()
	mysqlStorage, err := NewMySQLStorage(dbConfig.GetDSN())
	if err != nil {
		return err
	}

	// 初始化用户存储
	userStorage := NewMySQLUserStorage(mysqlStorage.GetDB())
	if err := userStorage.InitTables(); err != nil {
		return fmt.Errorf("初始化用户表失败: %v", err)
	}

	// 初始化好友存储
	friendStorage := NewMySQLFriendStorage(mysqlStorage.GetDB())
	if err := friendStorage.InitTables(); err != nil {
		return fmt.Errorf("初始化好友表失败: %v", err)
	}

	// 初始化群组存储
	groupStorage := NewMySQLGroupStorage(mysqlStorage.GetDB())
	if err := groupStorage.InitTables(); err != nil {
		return fmt.Errorf("初始化群组表失败: %v", err)
	}

	sm.mysqlStorage = mysqlStorage
	sm.userStorage = userStorage
	sm.friendStorage = friendStorage
	sm.groupStorage = groupStorage
	sm.useMySQL = true

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
func (sm *StorageManager) CreateUser(username, password, email string) (string, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.userStorage == nil {
		return "", fmt.Errorf("MySQL存储未初始化")
	}
	return sm.userStorage.CreateUser(username, password, email)
}

// 根据UID获取用户
func (sm *StorageManager) GetUserByUID(uid string) (*User, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.userStorage == nil {
		return nil, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.userStorage.GetUserByUID(uid)
}

// 根据邮箱获取用户
func (sm *StorageManager) GetUserByEmail(email string) (*User, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.userStorage == nil {
		return nil, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.userStorage.GetUserByEmail(email)
}

// 更新用户昵称
func (sm *StorageManager) UpdateUsername(uid, newUsername string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.userStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.userStorage.UpdateUsername(uid, newUsername)
}

// 更新用户密码
func (sm *StorageManager) UpdatePassword(uid, newPassword string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.userStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.userStorage.UpdatePassword(uid, newPassword)
}

// 删除用户
func (sm *StorageManager) DeleteUser(uid string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.userStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.userStorage.DeleteUser(uid)
}

// 校验用户密码
func (sm *StorageManager) CheckPassword(uid, password string) (bool, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()
	if !sm.useMySQL || sm.userStorage == nil {
		return false, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.userStorage.CheckPassword(uid, password)
}

// ==================== 好友关系相关操作 ====================

// 添加好友关系
func (sm *StorageManager) AddFriendship(userID, friendID string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.friendStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.friendStorage.AddFriendship(userID, friendID)
}

// 删除好友关系
func (sm *StorageManager) DeleteFriendship(userID, friendID string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.friendStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.friendStorage.DeleteFriendship(userID, friendID)
}

// 获取好友列表
func (sm *StorageManager) GetFriends(userID string) ([]string, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.friendStorage == nil {
		return nil, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.friendStorage.GetFriends(userID)
}

// 检查是否为好友
func (sm *StorageManager) IsFriend(userID, friendID string) (bool, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.friendStorage == nil {
		return false, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.friendStorage.IsFriend(userID, friendID)
}

// ==================== 好友请求相关操作 ====================

// 添加好友请求
func (sm *StorageManager) AddFriendRequest(fromUserID, toUserID, verifyMsg string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.friendStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.friendStorage.AddFriendRequest(fromUserID, toUserID, verifyMsg)
}

// 获取收到的好友请求
func (sm *StorageManager) GetFriendRequests(toUserID string) (map[string]string, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.friendStorage == nil {
		return nil, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.friendStorage.GetFriendRequests(toUserID)
}

// 处理好友请求
func (sm *StorageManager) HandleFriendRequest(fromUserID, toUserID string, accept bool) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.friendStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.friendStorage.HandleFriendRequest(fromUserID, toUserID, accept)
}

// ==================== 好友备注和免打扰相关操作 ====================

// 设置好友备注
func (sm *StorageManager) SetFriendRemark(userID, friendID, remark string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.friendStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.friendStorage.SetFriendRemark(userID, friendID, remark)
}

// 获取好友备注
func (sm *StorageManager) GetFriendRemark(userID, friendID string) (string, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.friendStorage == nil {
		return "", fmt.Errorf("MySQL存储未初始化")
	}
	return sm.friendStorage.GetFriendRemark(userID, friendID)
}

// 设置免打扰
func (sm *StorageManager) SetFriendDND(userID, friendID string, dnd bool) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.friendStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.friendStorage.SetFriendDND(userID, friendID, dnd)
}

// 获取免打扰状态
func (sm *StorageManager) GetFriendDND(userID, friendID string) (bool, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.friendStorage == nil {
		return false, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.friendStorage.GetFriendDND(userID, friendID)
}

// ==================== 群组相关操作 ====================

// 创建群组
func (sm *StorageManager) CreateGroup(name, ownerUID string) (string, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.groupStorage == nil {
		return "", fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.CreateGroup(name, ownerUID)
}

// 获取群组信息
func (sm *StorageManager) GetGroup(groupID string) (*pb.Group, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.groupStorage == nil {
		return nil, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.GetGroup(groupID)
}

// 获取群组成员
func (sm *StorageManager) GetGroupMembers(groupID string) ([]string, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.groupStorage == nil {
		return nil, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.GetGroupMembers(groupID)
}

// 获取群组成员详细信息
func (sm *StorageManager) GetGroupMemberDetails(groupID string) ([]*pb.GroupMember, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.groupStorage == nil {
		return nil, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.GetGroupMemberDetails(groupID)
}

// 获取用户的群组列表
func (sm *StorageManager) GetUserGroups(uid string) ([]*pb.Group, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.groupStorage == nil {
		return nil, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.GetUserGroups(uid)
}

// 加入群组
func (sm *StorageManager) JoinGroup(groupID, uid string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.groupStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.JoinGroup(groupID, uid)
}

// 退出群组
func (sm *StorageManager) LeaveGroup(groupID, uid string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.groupStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.LeaveGroup(groupID, uid)
}

// 生成群组ID
func (sm *StorageManager) GenerateGroupID() string {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.groupStorage == nil {
		return ""
	}
	return sm.groupStorage.GenerateGroupID()
}

// 生成消息ID
func (sm *StorageManager) GenerateMessageID() string {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.groupStorage == nil {
		return ""
	}
	return sm.groupStorage.GenerateMessageID()
}

// 获取用户在群组中的角色
func (sm *StorageManager) GetUserRoleInGroup(groupID, uid string) (string, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.groupStorage == nil {
		return "", fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.GetUserRoleInGroup(groupID, uid)
}

// 获取用户的群组列表（按角色分类）
func (sm *StorageManager) GetUserGroupsByRole(uid string) (map[string][]*pb.Group, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMySQL || sm.groupStorage == nil {
		return nil, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.GetUserGroupsByRole(uid)
}

// 发起群组邀请请求
func (sm *StorageManager) InsertInviteRequest(groupID, inviterUID, inviteeUID string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()
	if !sm.useMySQL || sm.groupStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.InsertInviteRequest(groupID, inviterUID, inviteeUID)
}

// 查询待审批的邀请请求
func (sm *StorageManager) GetPendingInviteRequests(groupID string) ([]*GroupInviteRequestInfo, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()
	if !sm.useMySQL || sm.groupStorage == nil {
		return nil, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.GetPendingInviteRequests(groupID)
}

// 审批邀请请求（通过）
func (sm *StorageManager) ApproveInviteRequest(id string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()
	if !sm.useMySQL || sm.groupStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.ApproveInviteRequest(id)
}

// 审批邀请请求（拒绝）
func (sm *StorageManager) RejectInviteRequest(id string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()
	if !sm.useMySQL || sm.groupStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.RejectInviteRequest(id)
}

// 检查用户是否有未处理的邀请
func (sm *StorageManager) HasPendingInvite(groupID, inviteeUID string) (bool, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()
	if !sm.useMySQL || sm.groupStorage == nil {
		return false, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.HasPendingInvite(groupID, inviteeUID)
}

// 新增：获取群组的管理员和群主
func (sm *StorageManager) GetGroupAdminsAndOwner(groupID string) ([]string, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()
	if !sm.useMySQL || sm.groupStorage == nil {
		return nil, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.GetGroupAdminsAndOwner(groupID)
}

// 解散群组
func (sm *StorageManager) DisbandGroup(groupID string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()
	if !sm.useMySQL || sm.groupStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.DisbandGroup(groupID)
}

// 获取底层数据库连接
func (sm *StorageManager) GetDB() *sql.DB {
	sm.mu.RLock()
	defer sm.mu.RUnlock()
	if sm.mysqlStorage == nil {
		return nil
	}
	return sm.mysqlStorage.GetDB()
}

// ==================== 新增群组管理功能 ====================

// 设置群昵称
func (sm *StorageManager) SetGroupNickname(groupID, userID, nickname string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()
	if !sm.useMySQL || sm.groupStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.SetGroupNickname(groupID, userID, nickname)
}

// 修改群名
func (sm *StorageManager) UpdateGroupName(groupID, newName string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()
	if !sm.useMySQL || sm.groupStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.UpdateGroupName(groupID, newName)
}

// 设置群备注
func (sm *StorageManager) SetGroupRemark(groupID, userID, remark string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()
	if !sm.useMySQL || sm.groupStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.SetGroupRemark(groupID, userID, remark)
}

// 设置群免打扰
func (sm *StorageManager) SetGroupDND(groupID, userID string, dnd bool) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()
	if !sm.useMySQL || sm.groupStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.SetGroupDND(groupID, userID, dnd)
}

// 设置/取消禁言
func (sm *StorageManager) SetGroupMute(groupID, userID string, mute bool) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()
	if !sm.useMySQL || sm.groupStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.SetGroupMute(groupID, userID, mute)
}

// 获取群免打扰状态
func (sm *StorageManager) GetGroupDND(groupID, userID string) (bool, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()
	if !sm.useMySQL || sm.groupStorage == nil {
		return false, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.GetGroupDND(groupID, userID)
}

// 获取群成员禁言状态
func (sm *StorageManager) GetGroupMuteStatus(groupID, userID string) (bool, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()
	if !sm.useMySQL || sm.groupStorage == nil {
		return false, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.GetGroupMuteStatus(groupID, userID)
}

// 获取单个群成员详细信息
func (sm *StorageManager) GetGroupMemberInfo(groupID, uid string) (*pb.GroupMember, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()
	if !sm.useMySQL || sm.groupStorage == nil {
		return nil, fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.GetGroupMemberInfo(groupID, uid)
}

// 设置群成员角色（如设置/取消管理员）
func (sm *StorageManager) SetGroupMemberRole(groupID, uid, role string) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()
	if !sm.useMySQL || sm.groupStorage == nil {
		return fmt.Errorf("MySQL存储未初始化")
	}
	return sm.groupStorage.SetGroupMemberRole(groupID, uid, role)
}

// Redis消息存储
var redisMsgStore *RedisMessageStorage

// 初始化Redis（可在InitMySQL后调用）
func (sm *StorageManager) InitRedis(addr, password string, db int) {
	redisMsgStore = NewRedisMessageStorage(addr, password, db)
}

// 初始化MongoDB（可在InitMySQL后调用）
func (sm *StorageManager) InitMongoDB(uri, databaseName string) error {
	sm.mu.Lock()
	defer sm.mu.Unlock()

	mongoStorage, err := NewMongoDBMessageStorage(uri, databaseName)
	if err != nil {
		return err
	}

	sm.mongoStorage = mongoStorage
	sm.useMongoDB = true
	return nil
}

// 缓存消息
func (sm *StorageManager) CacheMessage(sessionKey, msg string, expire time.Duration) error {
	if redisMsgStore == nil {
		return fmt.Errorf("Redis未初始化")
	}
	return redisMsgStore.CacheMessage(sessionKey, msg, expire)
}

// 获取最近N条消息
func (sm *StorageManager) GetRecentMessages(sessionKey string, count int64) ([]string, error) {
	if redisMsgStore == nil {
		return nil, fmt.Errorf("Redis未初始化")
	}
	return redisMsgStore.GetRecentMessages(sessionKey, count)
}

// 发布实时消息
func (sm *StorageManager) Publish(channel, msg string) error {
	if redisMsgStore == nil {
		return fmt.Errorf("Redis未初始化")
	}
	return redisMsgStore.Publish(channel, msg)
}

// 订阅实时消息
func (sm *StorageManager) Subscribe(channel string) *RedisMessageStorage {
	return redisMsgStore
}

// 存储离线消息
func (sm *StorageManager) StoreOfflineMessage(userID, msg string) error {
	if redisMsgStore == nil {
		return fmt.Errorf("Redis未初始化")
	}
	return redisMsgStore.StoreOfflineMessage(userID, msg)
}

// 获取并删除用户的所有离线消息
func (sm *StorageManager) GetAndClearOfflineMessages(userID string) ([]string, error) {
	if redisMsgStore == nil {
		return nil, fmt.Errorf("Redis未初始化")
	}
	return redisMsgStore.GetAndClearOfflineMessages(userID)
}

// 获取用户离线消息数量
func (sm *StorageManager) GetOfflineMessageCount(userID string) (int64, error) {
	if redisMsgStore == nil {
		return 0, fmt.Errorf("Redis未初始化")
	}
	return redisMsgStore.GetOfflineMessageCount(userID)
}

// ==================== MongoDB消息存储 ====================

// StoreMessageToMongoDB 存储消息到MongoDB
func (sm *StorageManager) StoreMessageToMongoDB(msg *pb.IMMessage) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMongoDB || sm.mongoStorage == nil {
		return fmt.Errorf("MongoDB存储未初始化")
	}
	return sm.mongoStorage.StoreMessage(msg)
}

// GetPrivateMessagesFromMongoDB 从MongoDB获取私聊消息
func (sm *StorageManager) GetPrivateMessagesFromMongoDB(uid1, uid2 string, limit int64) ([]*pb.IMMessage, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMongoDB || sm.mongoStorage == nil {
		return nil, fmt.Errorf("MongoDB存储未初始化")
	}
	return sm.mongoStorage.GetPrivateMessages(uid1, uid2, limit)
}

// GetGroupMessagesFromMongoDB 从MongoDB获取群聊消息
func (sm *StorageManager) GetGroupMessagesFromMongoDB(groupID string, limit int64) ([]*pb.IMMessage, error) {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMongoDB || sm.mongoStorage == nil {
		return nil, fmt.Errorf("MongoDB存储未初始化")
	}
	return sm.mongoStorage.GetGroupMessages(groupID, limit)
}

// DeleteOldMessagesFromMongoDB 删除MongoDB中的旧消息
func (sm *StorageManager) DeleteOldMessagesFromMongoDB(beforeTime int64) error {
	sm.mu.RLock()
	defer sm.mu.RUnlock()

	if !sm.useMongoDB || sm.mongoStorage == nil {
		return fmt.Errorf("MongoDB存储未初始化")
	}
	return sm.mongoStorage.DeleteMessages(beforeTime)
}
