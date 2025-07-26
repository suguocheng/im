package service

import (
	"fmt"
	"math/rand"
	"strconv"
	"time"

	"gopkg.in/gomail.v2"
)

// EmailService 邮件服务
type EmailService struct {
	host     string
	port     int
	username string
	password string
}

// NewEmailService 创建邮件服务实例
func NewEmailService(host string, port int, username, password string) *EmailService {
	return &EmailService{
		host:     host,
		port:     port,
		username: username,
		password: password,
	}
}

// 验证码存储（暂时存在内存中，后面再转存redis）
var emailCodes = make(map[string]EmailCode)

// EmailCode 邮箱验证码结构
type EmailCode struct {
	Code     string
	ExpireAt time.Time
	Purpose  string // "register" 或 "reset_password"
}

// SendVerificationCode 发送验证码
func (e *EmailService) SendVerificationCode(email, purpose string) error {
	// 生成6位数字验证码
	code := generateCode()

	// 存储验证码（5分钟有效期）
	emailCodes[email] = EmailCode{
		Code:     code,
		ExpireAt: time.Now().Add(5 * time.Minute),
		Purpose:  purpose,
	}

	// 构建邮件内容
	subject := "IM系统验证码"
	var body string
	switch purpose {
	case "register":
		body = fmt.Sprintf(`
			<h2>欢迎注册IM系统</h2>
			<p>您的验证码是：<strong style="font-size: 24px; color: #409eff;">%s</strong></p>
			<p>验证码有效期为5分钟，请尽快完成注册。</p>
			<p>如果这不是您的操作，请忽略此邮件。</p>
		`, code)
	case "reset_password":
		body = fmt.Sprintf(`
			<h2>IM系统密码重置</h2>
			<p>您的验证码是：<strong style="font-size: 24px; color: #409eff;">%s</strong></p>
			<p>验证码有效期为5分钟，请尽快完成密码重置。</p>
			<p>如果这不是您的操作，请忽略此邮件。</p>
		`, code)
	}

	// 发送邮件
	return e.sendEmail(email, subject, body)
}

// VerifyCode 验证验证码
func (e *EmailService) VerifyCode(email, code, purpose string) bool {
	emailCode, exists := emailCodes[email]
	if !exists {
		return false
	}

	// 检查是否过期
	if time.Now().After(emailCode.ExpireAt) {
		delete(emailCodes, email)
		return false
	}

	// 检查验证码和用途是否匹配
	if emailCode.Code != code || emailCode.Purpose != purpose {
		return false
	}

	// 验证成功后删除验证码
	delete(emailCodes, email)
	return true
}

// sendEmail 发送邮件
func (e *EmailService) sendEmail(to, subject, body string) error {
	m := gomail.NewMessage()
	m.SetHeader("From", e.username)
	m.SetHeader("To", to)
	m.SetHeader("Subject", subject)
	m.SetBody("text/html", body)

	d := gomail.NewDialer(e.host, e.port, e.username, e.password)
	return d.DialAndSend(m)
}

// generateCode 生成6位数字验证码
func generateCode() string {
	rand.Seed(time.Now().UnixNano())
	code := rand.Intn(900000) + 100000 // 生成100000-999999之间的数字
	return strconv.Itoa(code)
}
