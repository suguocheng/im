package auth

import (
	"errors"

	"golang.org/x/crypto/bcrypt"
)

type User struct {
	UID      string // 唯一账号
	Username string // 昵称
	Password string // 哈希
	Email    string // 邮箱
}

type UserStore interface {
	Register(uid, username, password, email string) (*User, error)
	Login(uid, password string) (*User, error)
	GetByUID(uid string) (*User, error)
	GetByEmail(email string) (*User, error)
	UpdateUsername(uid, newUsername string) error
	UpdatePassword(uid, oldPwd, newPwd string) error
	ResetPasswordByEmail(email, newPwd string) error
	DeleteAccount(uid string) error
}

var users = map[string]*User{}       // uid -> user
var emailIndex = map[string]string{} // email -> uid

// 内存用户存储
type MemUserStore struct{}

func (m *MemUserStore) Register(uid, username, password, email string) (*User, error) {
	if _, ok := users[uid]; ok {
		return nil, errors.New("账号已存在")
	}
	for _, u := range users {
		if u.Email == email {
			return nil, errors.New("邮箱已被注册")
		}
	}
	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return nil, errors.New("密码加密失败")
	}
	user := &User{UID: uid, Username: username, Password: string(hash), Email: email}
	users[uid] = user
	emailIndex[email] = uid
	return user, nil
}

func (m *MemUserStore) Login(uid, password string) (*User, error) {
	user, ok := users[uid]
	if !ok {
		return nil, errors.New("账号或密码错误")
	}
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {
		return nil, errors.New("账号或密码错误")
	}
	return user, nil
}

func (m *MemUserStore) GetByUID(uid string) (*User, error) {
	user, ok := users[uid]
	if !ok {
		return nil, errors.New("用户不存在")
	}
	return user, nil
}

func (m *MemUserStore) GetByEmail(email string) (*User, error) {
	uid, ok := emailIndex[email]
	if !ok {
		return nil, errors.New("邮箱未注册")
	}
	return m.GetByUID(uid)
}

func (m *MemUserStore) UpdateUsername(uid, newUsername string) error {
	user, ok := users[uid]
	if !ok {
		return errors.New("用户不存在")
	}
	user.Username = newUsername
	return nil
}

func (m *MemUserStore) UpdatePassword(uid, oldPwd, newPwd string) error {
	user, ok := users[uid]
	if !ok {
		return errors.New("用户不存在")
	}
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(oldPwd)); err != nil {
		return errors.New("原密码错误")
	}
	hash, err := bcrypt.GenerateFromPassword([]byte(newPwd), bcrypt.DefaultCost)
	if err != nil {
		return errors.New("新密码加密失败")
	}
	user.Password = string(hash)
	return nil
}

func (m *MemUserStore) ResetPasswordByEmail(email, newPwd string) error {
	user, err := m.GetByEmail(email)
	if err != nil {
		return err
	}
	hash, err := bcrypt.GenerateFromPassword([]byte(newPwd), bcrypt.DefaultCost)
	if err != nil {
		return errors.New("新密码加密失败")
	}
	user.Password = string(hash)
	return nil
}

func (m *MemUserStore) DeleteAccount(uid string) error {
	user, ok := users[uid]
	if !ok {
		return errors.New("用户不存在")
	}
	delete(users, uid)
	delete(emailIndex, user.Email)
	return nil
}
