package storage

import "sync"

// 好友关系和请求的内存存储

type FriendStorage struct {
	mu         sync.RWMutex
	friends    map[string]map[string]struct{} // uid -> set of friend_uid
	friendReqs map[string]map[string]string   // to_uid -> from_uid -> verify_msg
	remarks    map[string]map[string]string   // uid -> friend_uid -> 备注
	dnd        map[string]map[string]bool     // uid -> friend_uid -> 免打扰
}

var FriendStore = &FriendStorage{
	friends:    make(map[string]map[string]struct{}),
	friendReqs: make(map[string]map[string]string),
	remarks:    make(map[string]map[string]string),
	dnd:        make(map[string]map[string]bool),
}

// 添加好友请求
func (fs *FriendStorage) AddFriendRequest(from, to, msg string) {
	fs.mu.Lock()
	defer fs.mu.Unlock()
	if fs.friendReqs[to] == nil {
		fs.friendReqs[to] = make(map[string]string)
	}
	fs.friendReqs[to][from] = msg
}

// 获取收到的好友请求
func (fs *FriendStorage) GetFriendRequests(uid string) map[string]string {
	fs.mu.RLock()
	defer fs.mu.RUnlock()
	reqs := make(map[string]string)
	for from, msg := range fs.friendReqs[uid] {
		reqs[from] = msg
	}
	return reqs
}

// 处理好友请求
func (fs *FriendStorage) HandleFriendRequest(from, to string, accept bool) {
	fs.mu.Lock()
	defer fs.mu.Unlock()
	if accept {
		if fs.friends[from] == nil {
			fs.friends[from] = make(map[string]struct{})
		}
		if fs.friends[to] == nil {
			fs.friends[to] = make(map[string]struct{})
		}
		fs.friends[from][to] = struct{}{}
		fs.friends[to][from] = struct{}{}
	}
	delete(fs.friendReqs[to], from)
}

// 获取好友列表
func (fs *FriendStorage) GetFriends(uid string) []string {
	fs.mu.RLock()
	defer fs.mu.RUnlock()
	var res []string
	for f := range fs.friends[uid] {
		res = append(res, f)
	}
	return res
}

// 删除好友
func (fs *FriendStorage) DeleteFriend(uid, friend string) {
	fs.mu.Lock()
	defer fs.mu.Unlock()
	delete(fs.friends[uid], friend)
	delete(fs.friends[friend], uid)
}

// 设置好友备注
func (fs *FriendStorage) SetRemark(uid, friendUid, remark string) {
	fs.mu.Lock()
	defer fs.mu.Unlock()
	if fs.remarks[uid] == nil {
		fs.remarks[uid] = make(map[string]string)
	}
	fs.remarks[uid][friendUid] = remark
}

// 获取好友备注
func (fs *FriendStorage) GetRemark(uid, friendUid string) string {
	fs.mu.RLock()
	defer fs.mu.RUnlock()
	if fs.remarks[uid] == nil {
		return ""
	}
	return fs.remarks[uid][friendUid]
}

// 获取好友备注列表（与好友UID顺序对应）
func (fs *FriendStorage) GetRemarks(uid string, friends []string) []string {
	fs.mu.RLock()
	defer fs.mu.RUnlock()
	var res []string
	for _, f := range friends {
		if fs.remarks[uid] != nil {
			res = append(res, fs.remarks[uid][f])
		} else {
			res = append(res, "")
		}
	}
	return res
}

// 设置免打扰
func (fs *FriendStorage) SetDND(uid, friendUid string, dnd bool) {
	fs.mu.Lock()
	defer fs.mu.Unlock()
	if fs.dnd[uid] == nil {
		fs.dnd[uid] = make(map[string]bool)
	}
	fs.dnd[uid][friendUid] = dnd
}

// 获取免打扰
func (fs *FriendStorage) GetDND(uid, friendUid string) bool {
	fs.mu.RLock()
	defer fs.mu.RUnlock()
	if fs.dnd[uid] == nil {
		return false
	}
	return fs.dnd[uid][friendUid]
}
