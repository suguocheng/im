package main

import (
	"fmt"
	"net/http"
	"os"

	"im/internal/services/user-service/handler"
	"im/internal/services/user-service/service"
	"im/internal/services/user-service/storage"
	"im/internal/shared/config"
	"im/internal/shared/logger"
)

func main() {
	// 加载配置
	cfg := config.LoadServiceConfig("user-service")

	// 初始化日志
	logger := logger.NewLogger(cfg.Log.Level)

	// 初始化存储
	storage, err := storage.NewUserStorage(cfg.Database)
	if err != nil {
		logger.Fatalf("初始化存储失败: %v", err)
	}

	// 初始化服务
	userService := service.NewUserService(storage, logger)

	// 初始化处理器
	userHandler := handler.NewUserHandler(userService, logger)

	// 设置路由
	mux := http.NewServeMux()
	userHandler.RegisterRoutes(mux)

	// 启动服务
	logger.Infof("用户服务启动在端口 %d", cfg.Server.Port)
	server := &http.Server{
		Addr:    fmt.Sprintf(":%d", cfg.Server.Port),
		Handler: mux,
	}

	if err := server.ListenAndServe(); err != nil {
		logger.Fatalf("启动用户服务失败: %v", err)
		os.Exit(1)
	}
}
