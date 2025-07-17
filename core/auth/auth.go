package auth

// 认证接口
type Authenticator interface {
	Authenticate(token string) (userID string, err error)
	Authorize(userID, action string) bool
}
