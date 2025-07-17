package storage

// 消息存储接口
type Storage interface {
	SaveMessage(userID string, msg []byte) error
	GetMessages(userID string, limit int) ([][]byte, error)
}
