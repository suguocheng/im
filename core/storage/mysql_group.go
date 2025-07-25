package storage

import (
	"database/sql"
	"fmt"
	"im/core/protocol/pb"
	"strconv"
	"time"
)

type MySQLGroupStorage struct {
	db *sql.DB
}

func NewMySQLGroupStorage(db *sql.DB) *MySQLGroupStorage {
	return &MySQLGroupStorage{db: db}
}

// 初始化群组相关表
func (m *MySQLGroupStorage) InitTables() error {
	// 群组表
	_, err := m.db.Exec("CREATE TABLE IF NOT EXISTS `groups` (" +
		"id BIGINT AUTO_INCREMENT PRIMARY KEY," +
		"group_id VARCHAR(50) UNIQUE NOT NULL," +
		"name VARCHAR(100) NOT NULL," +
		"description TEXT," +
		"owner_uid VARCHAR(50) NOT NULL," +
		"created_at BIGINT NOT NULL," +
		"updated_at BIGINT NOT NULL," +
		"INDEX idx_group_id (group_id)," +
		"INDEX idx_owner (owner_uid)," +
		"INDEX idx_created (created_at)" +
		")")
	if err != nil {
		return fmt.Errorf("创建群组表失败: %v", err)
	}

	// 新增：自动修正group_id字段为NULL，避免建群时插入报错
	_, err = m.db.Exec("ALTER TABLE `groups` MODIFY COLUMN group_id VARCHAR(50) NULL;")
	if err != nil {
		fmt.Println("尝试修正groups.group_id为NULL失败：", err)
	}

	// 群组成员表
	_, err = m.db.Exec("CREATE TABLE IF NOT EXISTS group_members (" +
		"group_id VARCHAR(50) NOT NULL," +
		"uid VARCHAR(50) NOT NULL," +
		"nickname VARCHAR(100)," +
		"role VARCHAR(20) DEFAULT 'member'," +
		"join_time BIGINT NOT NULL," +
		"remark VARCHAR(255) DEFAULT NULL," +
		"dnd TINYINT(1) DEFAULT 0," +
		"mute_until BIGINT DEFAULT 0," +
		"PRIMARY KEY (group_id, uid)," +
		"INDEX idx_group (group_id)," +
		"INDEX idx_uid (uid)," +
		"FOREIGN KEY (group_id) REFERENCES `groups`(group_id) ON DELETE CASCADE" +
		")")
	if err != nil {
		return fmt.Errorf("创建群组成员表失败: %v", err)
	}

	// 群组邀请请求表
	_, err = m.db.Exec("CREATE TABLE IF NOT EXISTS group_invite_requests (" +
		"id BIGINT AUTO_INCREMENT PRIMARY KEY," +
		"group_id VARCHAR(50) NOT NULL," +
		"inviter_uid VARCHAR(50) NOT NULL," +
		"invitee_uid VARCHAR(50) NOT NULL," +
		"status ENUM('pending','approved','rejected') DEFAULT 'pending'," +
		"created_at BIGINT NOT NULL," +
		"updated_at BIGINT NOT NULL," +
		"INDEX idx_group (group_id)," +
		"INDEX idx_invitee (invitee_uid)" +
		")")
	if err != nil {
		return fmt.Errorf("创建群组邀请请求表失败: %v", err)
	}

	return nil
}

// 生成群组ID - 从1开始递增
func (m *MySQLGroupStorage) GenerateGroupID() string {
	// 查询当前最大的群组ID
	var maxID int64
	err := m.db.QueryRow("SELECT COALESCE(MAX(id), 0) FROM `groups`").Scan(&maxID)
	if err != nil {
		// 如果查询失败，返回默认值
		return "1"
	}

	// 返回下一个ID
	nextID := maxID + 1
	return strconv.FormatInt(nextID, 10)
}

// 生成消息ID
func (m *MySQLGroupStorage) GenerateMessageID() string {
	return "gm" + strconv.FormatInt(time.Now().UnixNano(), 10)
}

// 创建群组
func (m *MySQLGroupStorage) CreateGroup(name, ownerUID string) (string, error) {
	tx, err := m.db.Begin()
	if err != nil {
		return "", fmt.Errorf("开始事务失败: %v", err)
	}
	defer tx.Rollback()

	now := time.Now().Unix()
	// 先插入一条记录，让id自增
	res, err := tx.Exec("INSERT INTO `groups` (name, description, owner_uid, created_at, updated_at) VALUES (?, '', ?, ?, ?)",
		name, ownerUID, now, now)
	if err != nil {
		return "", fmt.Errorf("创建群组失败: %v", err)
	}
	id, err := res.LastInsertId()
	if err != nil {
		return "", fmt.Errorf("获取群组ID失败: %v", err)
	}
	groupID := fmt.Sprintf("%d", id)
	// 更新group_id字段
	_, err = tx.Exec("UPDATE `groups` SET group_id = ? WHERE id = ?", groupID, id)
	if err != nil {
		return "", fmt.Errorf("更新group_id失败: %v", err)
	}
	// 添加群主为成员
	_, err = tx.Exec(`
		INSERT INTO group_members (group_id, uid, nickname, role, join_time)
		VALUES (?, ?, ?, ?, ?)
	`, groupID, ownerUID, "", "owner", now)
	if err != nil {
		return "", fmt.Errorf("添加群主失败: %v", err)
	}

	if err := tx.Commit(); err != nil {
		return "", fmt.Errorf("提交事务失败: %v", err)
	}

	return groupID, nil
}

// 获取群组信息
func (m *MySQLGroupStorage) GetGroup(groupID string) (*pb.Group, error) {
	row := m.db.QueryRow("SELECT group_id, name, description, owner_uid, created_at, updated_at FROM `groups` WHERE group_id = ?", groupID)

	group := &pb.Group{}
	err := row.Scan(&group.GroupId, &group.Name, &group.Description, &group.OwnerUid, &group.CreatedAt, &group.UpdatedAt)
	if err != nil {
		return nil, fmt.Errorf("获取群组信息失败: %v", err)
	}

	// 获取成员列表
	members, err := m.GetGroupMembers(groupID)
	if err != nil {
		return nil, err
	}
	group.MemberUids = members

	return group, nil
}

// 获取群组成员
func (m *MySQLGroupStorage) GetGroupMembers(groupID string) ([]string, error) {
	rows, err := m.db.Query(`
		SELECT uid FROM group_members WHERE group_id = ?
	`, groupID)
	if err != nil {
		return nil, fmt.Errorf("查询群组成员失败: %v", err)
	}
	defer rows.Close()

	var members []string
	for rows.Next() {
		var uid string
		if err := rows.Scan(&uid); err != nil {
			return nil, err
		}
		members = append(members, uid)
	}

	return members, nil
}

// 获取群组成员详细信息
func (m *MySQLGroupStorage) GetGroupMemberDetails(groupID string) ([]*pb.GroupMember, error) {
	rows, err := m.db.Query(`
		SELECT gm.uid, gm.nickname, gm.role, gm.join_time, u.username
		FROM group_members gm
		LEFT JOIN users u ON gm.uid = u.uid
		WHERE gm.group_id = ?
		ORDER BY gm.join_time
	`, groupID)
	if err != nil {
		return nil, fmt.Errorf("查询群组成员详情失败: %v", err)
	}
	defer rows.Close()

	var members []*pb.GroupMember
	for rows.Next() {
		member := &pb.GroupMember{}
		var username sql.NullString
		err := rows.Scan(&member.Uid, &member.Nickname, &member.Role, &member.JoinTime, &username)
		if err != nil {
			return nil, err
		}
		if username.Valid {
			member.Username = username.String
		} else {
			member.Username = "未知用户"
		}
		members = append(members, member)
	}

	return members, nil
}

// 获取用户在群组中的角色
func (m *MySQLGroupStorage) GetUserRoleInGroup(groupID, uid string) (string, error) {
	var role string
	err := m.db.QueryRow("SELECT role FROM group_members WHERE group_id = ? AND uid = ?", groupID, uid).Scan(&role)
	if err != nil {
		return "", err
	}
	return role, nil
}

// 新增：设置群昵称
func (m *MySQLGroupStorage) SetGroupNickname(groupID, userID, nickname string) error {
	_, err := m.db.Exec("UPDATE group_members SET nickname = ? WHERE group_id = ? AND uid = ?", nickname, groupID, userID)
	return err
}

// 新增：修改群名
func (m *MySQLGroupStorage) UpdateGroupName(groupID, newName string) error {
	_, err := m.db.Exec("UPDATE `groups` SET name = ? WHERE group_id = ?", newName, groupID)
	return err
}

// 新增：设置群备注 (假设我们有一个 group_members 表，并且其中有 remark 字段)
func (m *MySQLGroupStorage) SetGroupRemark(groupID, userID, remark string) error {
	_, err := m.db.Exec("UPDATE group_members SET remark = ? WHERE group_id = ? AND uid = ?", remark, groupID, userID)
	return err
}

// 新增：设置群免打扰 (假设我们有一个 group_members 表，并且其中有 dnd 字段)
func (m *MySQLGroupStorage) SetGroupDND(groupID, userID string, dnd bool) error {
	_, err := m.db.Exec("UPDATE group_members SET dnd = ? WHERE group_id = ? AND uid = ?", dnd, groupID, userID)
	return err
}

// 新增：设置/取消禁言 (假设我们有一个 group_members 表，并且其中有 mute_until 字段)
func (m *MySQLGroupStorage) SetGroupMute(groupID, userID string, mute bool) error {
	var muteUntil int64 = 0
	if mute {
		muteUntil = time.Now().Add(24 * time.Hour).Unix() // 示例：禁言24小时
	}
	_, err := m.db.Exec("UPDATE group_members SET mute_until = ? WHERE group_id = ? AND uid = ?", muteUntil, groupID, userID)
	return err
}

// 新增：解散群组（删除群组及其所有成员）
func (m *MySQLGroupStorage) DisbandGroup(groupID string) error {
	tx, err := m.db.Begin()
	if err != nil {
		return err
	}
	defer func() {
		if err != nil {
			tx.Rollback()
		}
	}()

	// 删除 group_members 表中该群的所有成员
	_, err = tx.Exec("DELETE FROM group_members WHERE group_id = ?", groupID)
	if err != nil {
		return err
	}
	// 删除 groups 表中的群组
	_, err = tx.Exec("DELETE FROM `groups` WHERE group_id = ?", groupID)
	if err != nil {
		return err
	}
	return tx.Commit()
}

// 获取用户的群组列表（按角色分类）
func (m *MySQLGroupStorage) GetUserGroupsByRole(uid string) (map[string][]*pb.Group, error) {
	rows, err := m.db.Query("SELECT g.group_id, g.name, g.description, g.owner_uid, g.created_at, g.updated_at, gm.role, gm.remark FROM `groups` g INNER JOIN group_members gm ON g.group_id = gm.group_id WHERE gm.uid = ? ORDER BY g.updated_at DESC", uid)
	if err != nil {
		return nil, fmt.Errorf("查询用户群组失败: %v", err)
	}
	defer rows.Close()

	groupsByRole := make(map[string][]*pb.Group)
	groupsByRole["owner"] = []*pb.Group{}  // 我创建的群组
	groupsByRole["admin"] = []*pb.Group{}  // 我管理的群组
	groupsByRole["member"] = []*pb.Group{} // 我加入的群组

	for rows.Next() {
		group := &pb.Group{}
		var role string
		var remark sql.NullString
		err := rows.Scan(&group.GroupId, &group.Name, &group.Description, &group.OwnerUid, &group.CreatedAt, &group.UpdatedAt, &role, &remark)
		if err != nil {
			return nil, err
		}
		// 获取成员列表
		members, err := m.GetGroupMembers(group.GroupId)
		if err != nil {
			return nil, err
		}
		group.MemberUids = members
		// 只把当前用户的 remark 放到 pb.Group.remark
		if remark.Valid {
			group.Remark = remark.String
		} else {
			group.Remark = ""
		}
		// 根据角色分类
		if role == "owner" {
			groupsByRole["owner"] = append(groupsByRole["owner"], group)
		} else if role == "admin" {
			groupsByRole["admin"] = append(groupsByRole["admin"], group)
		} else {
			groupsByRole["member"] = append(groupsByRole["member"], group)
		}
	}

	return groupsByRole, nil
}

// 获取用户的群组列表（向后兼容）
func (m *MySQLGroupStorage) GetUserGroups(uid string) ([]*pb.Group, error) {
	groupsByRole, err := m.GetUserGroupsByRole(uid)
	if err != nil {
		return nil, err
	}

	var allGroups []*pb.Group
	allGroups = append(allGroups, groupsByRole["owner"]...)
	allGroups = append(allGroups, groupsByRole["admin"]...)
	allGroups = append(allGroups, groupsByRole["member"]...)

	return allGroups, nil
}

// 加入群组
func (m *MySQLGroupStorage) JoinGroup(groupID, uid string) error {
	// 检查是否已经是成员
	var count int
	err := m.db.QueryRow(`
		SELECT COUNT(*) FROM group_members WHERE group_id = ? AND uid = ?
	`, groupID, uid).Scan(&count)
	if err != nil {
		return fmt.Errorf("检查成员状态失败: %v", err)
	}
	if count > 0 {
		return fmt.Errorf("已经是群组成员")
	}

	// 检查群组是否存在
	err = m.db.QueryRow("SELECT COUNT(*) FROM `groups` WHERE group_id = ?", groupID).Scan(&count)
	if err != nil {
		return fmt.Errorf("检查群组存在失败: %v", err)
	}
	if count == 0 {
		return fmt.Errorf("群组不存在")
	}

	// 添加成员
	_, err = m.db.Exec(`
		INSERT INTO group_members (group_id, uid, nickname, role, join_time)
		VALUES (?, ?, ?, ?, ?)
	`, groupID, uid, "", "member", time.Now().Unix())
	if err != nil {
		return fmt.Errorf("加入群组失败: %v", err)
	}

	// 更新群组更新时间
	_, err = m.db.Exec("UPDATE `groups` SET updated_at = ? WHERE group_id = ?", time.Now().Unix(), groupID)
	if err != nil {
		return fmt.Errorf("更新群组时间失败: %v", err)
	}

	return nil
}

// 退出群组
func (m *MySQLGroupStorage) LeaveGroup(groupID, uid string) error {
	// 检查是否是群主
	var role string
	err := m.db.QueryRow(`
		SELECT role FROM group_members WHERE group_id = ? AND uid = ?
	`, groupID, uid).Scan(&role)
	if err != nil {
		return fmt.Errorf("查询成员角色失败: %v", err)
	}

	if role == "owner" {
		return fmt.Errorf("群主不能退出群组，请先转让群主")
	}

	// 删除成员
	_, err = m.db.Exec(`
		DELETE FROM group_members WHERE group_id = ? AND uid = ?
	`, groupID, uid)
	if err != nil {
		return fmt.Errorf("退出群组失败: %v", err)
	}

	// 更新群组更新时间
	_, err = m.db.Exec("UPDATE `groups` SET updated_at = ? WHERE group_id = ?", time.Now().Unix(), groupID)
	if err != nil {
		return fmt.Errorf("更新群组时间失败: %v", err)
	}

	return nil
}

// 新增：获取群组的管理员和群主
func (m *MySQLGroupStorage) GetGroupAdminsAndOwner(groupID string) ([]string, error) {
	rows, err := m.db.Query(`
		SELECT uid FROM group_members 
		WHERE group_id = ? AND (role = 'admin' OR role = 'owner')
	`, groupID)
	if err != nil {
		return nil, fmt.Errorf("查询群组管理员和群主失败: %v", err)
	}
	defer rows.Close()

	var uids []string
	for rows.Next() {
		var uid string
		if err := rows.Scan(&uid); err != nil {
			return nil, err
		}
		uids = append(uids, uid)
	}
	return uids, nil
}

// 获取群免打扰状态
func (m *MySQLGroupStorage) GetGroupDND(groupID, userID string) (bool, error) {
	var dnd int
	err := m.db.QueryRow("SELECT dnd FROM group_members WHERE group_id = ? AND uid = ?", groupID, userID).Scan(&dnd)
	if err != nil {
		if err == sql.ErrNoRows {
			return false, nil // 没有记录视为未开启免打扰
		}
		return false, err
	}
	return dnd == 1, nil
}

// 获取群成员禁言状态
func (m *MySQLGroupStorage) GetGroupMuteStatus(groupID, userID string) (bool, error) {
	var muteUntil int64
	err := m.db.QueryRow("SELECT mute_until FROM group_members WHERE group_id = ? AND uid = ?", groupID, userID).Scan(&muteUntil)
	if err != nil {
		if err == sql.ErrNoRows {
			return false, nil // 没有记录视为未禁言
		}
		return false, err
	}
	return muteUntil > time.Now().Unix(), nil
}

// 新增：用于结构化返回待审批请求
type GroupInviteRequestInfo struct {
	ID         string
	GroupID    string
	InviterUID string
	InviteeUID string
	Status     string
	CreatedAt  string
}

// 查询待审批的邀请请求 (修改返回类型)
func (m *MySQLGroupStorage) GetPendingInviteRequests(groupID string) ([]*GroupInviteRequestInfo, error) {
	rows, err := m.db.Query(`
		SELECT id, group_id, inviter_uid, invitee_uid, status, created_at
		FROM group_invite_requests WHERE group_id = ? AND status = 'pending'
	`, groupID)
	if err != nil {
		return nil, fmt.Errorf("查询待审批请求失败: %v", err)
	}
	defer rows.Close()

	var requests []*GroupInviteRequestInfo
	for rows.Next() {
		var req GroupInviteRequestInfo
		if err := rows.Scan(&req.ID, &req.GroupID, &req.InviterUID, &req.InviteeUID, &req.Status, &req.CreatedAt); err != nil {
			return nil, err
		}
		requests = append(requests, &req)
	}
	return requests, nil
}

// 发起群组邀请请求
func (m *MySQLGroupStorage) InsertInviteRequest(groupID, inviterUID, inviteeUID string) error {
	now := time.Now().Unix()
	_, err := m.db.Exec(`INSERT INTO group_invite_requests (group_id, inviter_uid, invitee_uid, status, created_at, updated_at) VALUES (?, ?, ?, 'pending', ?, ?)`,
		groupID, inviterUID, inviteeUID, now, now)
	return err
}

// 审批邀请请求（通过）
func (m *MySQLGroupStorage) ApproveInviteRequest(id string) error {
	now := time.Now().Unix()
	_, err := m.db.Exec(`UPDATE group_invite_requests SET status = 'approved', updated_at = ? WHERE id = ?`, now, id)
	return err
}

// 审批邀请请求（拒绝）
func (m *MySQLGroupStorage) RejectInviteRequest(id string) error {
	now := time.Now().Unix()
	_, err := m.db.Exec(`UPDATE group_invite_requests SET status = 'rejected', updated_at = ? WHERE id = ?`, now, id)
	return err
}

// 检查用户是否有未处理的邀请
func (m *MySQLGroupStorage) HasPendingInvite(groupID, inviteeUID string) (bool, error) {
	var count int
	err := m.db.QueryRow(`SELECT COUNT(*) FROM group_invite_requests WHERE group_id = ? AND invitee_uid = ? AND status = 'pending'`, groupID, inviteeUID).Scan(&count)
	if err != nil {
		return false, err
	}
	return count > 0, nil
}

// 获取单个群成员详细信息
func (m *MySQLGroupStorage) GetGroupMemberInfo(groupID, uid string) (*pb.GroupMember, error) {
	row := m.db.QueryRow(`SELECT gm.uid, u.username, gm.nickname, gm.role, gm.join_time FROM group_members gm LEFT JOIN users u ON gm.uid = u.uid WHERE gm.group_id = ? AND gm.uid = ?`, groupID, uid)
	var member pb.GroupMember
	var username sql.NullString
	err := row.Scan(&member.Uid, &username, &member.Nickname, &member.Role, &member.JoinTime)
	if err != nil {
		return nil, err
	}
	if username.Valid {
		member.Username = username.String
	} else {
		member.Username = "未知用户"
	}
	return &member, nil
}

// 设置群成员角色（如设置/取消管理员）
func (m *MySQLGroupStorage) SetGroupMemberRole(groupID, uid, role string) error {
	_, err := m.db.Exec("UPDATE group_members SET role = ? WHERE group_id = ? AND uid = ?", role, groupID, uid)
	return err
}
