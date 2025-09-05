package main

import (
	"fmt"
	"net/http"
	"os"

	"im/internal/services/friend-service/handler"
	"im/internal/services/friend-service/service"
	"im/internal/services/friend-service/storage"
	"im/internal/shared/config"
	"im/internal/shared/logger"
)

func main() {
	// 加载配置
	cfg := config.LoadServiceConfig("friend-service")

	// 初始化日志
	logger := logger.NewLogger(cfg.Log.Level)

	// 初始化存储
	storage, err := storage.NewFriendStorage(cfg.Database)
	if err != nil {
		logger.Fatalf("初始化存储失败: %v", err)
	}

	// 初始化服务
	friendService := service.NewFriendService(storage, logger)

	// 初始化处理器
	friendHandler := handler.NewFriendHandler(friendService, logger)

	// 设置路由
	mux := http.NewServeMux()
	friendHandler.RegisterRoutes(mux)

	// 启动服务
	logger.Infof("好友服务启动在端口 %d", cfg.Server.Port)
	server := &http.Server{
		Addr:    fmt.Sprintf(":%d", cfg.Server.Port),
		Handler: mux,
	}

	if err := server.ListenAndServe(); err != nil {
		logger.Fatalf("启动好友服务失败: %v", err)
		os.Exit(1)
	}
}
