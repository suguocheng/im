package storage

import "sync"

type MemStorage struct {
	mu   sync.Mutex
	data map[string][][]byte
}

func NewMemStorage() *MemStorage {
	return &MemStorage{data: make(map[string][][]byte)}
}

func (m *MemStorage) SaveMessage(userID string, msg []byte) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.data[userID] = append(m.data[userID], msg)
	return nil
}

func (m *MemStorage) GetMessages(userID string, limit int) ([][]byte, error) {
	m.mu.Lock()
	defer m.mu.Unlock()
	msgs := m.data[userID]
	if len(msgs) > limit {
		msgs = msgs[len(msgs)-limit:]
	}
	return msgs, nil
}
