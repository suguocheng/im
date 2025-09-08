package main

import (
	"fmt"
	"net/http"
	"os"

	"im/internal/services/file-service/handler"
	"im/internal/services/file-service/service"
	"im/internal/shared/config"
	"im/internal/shared/database"
	"im/internal/shared/logger"
)

func main() {
	// 加载配置
	cfg := config.LoadServiceConfig("file-service")

	// 初始化日志
	logger := logger.NewLogger(cfg.Log.Level)

	// 初始化数据库连接池管理器
	dbManager, err := database.NewManager(cfg.Database, cfg.Redis, cfg.Mongo, logger)
	if err != nil {
		logger.Fatalf("初始化数据库连接池失败: %v", err)
	}
	defer dbManager.Close()

	// 初始化服务
	fileService := service.NewFileService(logger)

	// 初始化处理器
	fileHandler := handler.NewFileHandler(fileService, logger, dbManager)

	// 设置路由
	mux := http.NewServeMux()
	fileHandler.RegisterRoutes(mux)

	// 启动服务
	logger.Infof("文件服务启动在端口 %d", cfg.Server.Port)
	server := &http.Server{
		Addr:    fmt.Sprintf(":%d", cfg.Server.Port),
		Handler: mux,
	}

	if err := server.ListenAndServe(); err != nil {
		logger.Fatalf("启动文件服务失败: %v", err)
		os.Exit(1)
	}
}
