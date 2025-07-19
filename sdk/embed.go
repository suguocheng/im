package sdk

import (
	"im/core/auth"
	"im/core/protocol"
	"im/core/storage"
)

type IMServer struct {
	Proto protocol.Protocol
	Store *storage.StorageManager
	Auth  auth.Authenticator
}

func (s *IMServer) Start(addr string) error {
	return s.Proto.Start(addr)
}
