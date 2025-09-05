module im/internal/services/group-service

go 1.23.0

require (
	im v0.0.0
	github.com/go-sql-driver/mysql v1.8.0
	golang.org/x/crypto v0.40.0
	google.golang.org/protobuf v1.36.6
	github.com/gorilla/websocket v1.5.3
	github.com/joho/godotenv v1.5.1
	github.com/golang-jwt/jwt/v5 v5.2.1
	github.com/redis/go-redis/v9 v9.0.0
	go.mongodb.org/mongo-driver v1.0.0
)

replace im => ../../..

require (
	filippo.io/edwards25519 v1.1.0 // indirect
	github.com/google/go-cmp v0.6.0 // indirect
)
