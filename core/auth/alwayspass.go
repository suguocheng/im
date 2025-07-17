package auth

type AlwaysPass struct{}

func (a *AlwaysPass) Authenticate(token string) (string, error) {
	return "user", nil
}

func (a *AlwaysPass) Authorize(userID, action string) bool {
	return true
}
