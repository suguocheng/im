module im/internal/services/user-service

go 1.23.0

require (
	im v0.0.0
	github.com/go-sql-driver/mysql v1.8.0
	golang.org/x/crypto v0.40.0
	google.golang.org/protobuf v1.36.6
)

replace im => ../../..

require (
	filippo.io/edwards25519 v1.1.0 // indirect
	github.com/google/go-cmp v0.6.0 // indirect
)
