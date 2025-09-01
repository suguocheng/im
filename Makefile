# IM即时通讯系统 Makefile
# 提供基本的构建、启动、停止、重启、清理功能

# 变量定义
BINARY_NAME=im-server
BUILD_DIR=bin
MAIN_FILE=cmd/main.go

# Go相关变量
GO=go

# 颜色定义
RED=\033[0;31m
GREEN=\033[0;32m
YELLOW=\033[1;33m
BLUE=\033[0;34m
NC=\033[0m

# 默认目标
.DEFAULT_GOAL := help

# 帮助信息
.PHONY: help
help: ## 显示帮助信息
	@echo "$(BLUE)IM即时通讯系统 Makefile$(NC)"
	@echo ""
	@echo "$(GREEN)可用命令:$(NC)"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  $(YELLOW)%-15s$(NC) %s\n", $$1, $$2}' $(MAKEFILE_LIST)
	@echo ""
	@echo "$(GREEN)示例:$(NC)"
	@echo "  make build     # 构建项目"
	@echo "  make start     # 启动服务"
	@echo "  make status    # 查看状态"
	@echo "  make stop      # 停止服务"
	@echo "  make restart   # 重启服务"
	@echo "  make clean     # 清理文件"

# 构建项目
.PHONY: build
build: ## 构建项目二进制文件
	@echo "$(BLUE)构建IM服务器...$(NC)"
	@mkdir -p $(BUILD_DIR)
	$(GO) build -o $(BUILD_DIR)/$(BINARY_NAME) $(MAIN_FILE)
	@echo "$(GREEN)构建完成: $(BUILD_DIR)/$(BINARY_NAME)$(NC)"

# 启动服务
.PHONY: start
start: ## 启动所有服务
	@echo "$(BLUE)启动IM服务...$(NC)"
	@if [ -f scripts/start.sh ]; then \
		./scripts/start.sh; \
	else \
		echo "$(RED)启动脚本不存在: scripts/start.sh$(NC)"; \
		exit 1; \
	fi

# 查看状态
.PHONY: status
status: ## 查看服务状态
	@echo "$(BLUE)查看IM服务状态...$(NC)"
	@if [ -f scripts/status.sh ]; then \
		./scripts/status.sh; \
	else \
		echo "$(RED)状态脚本不存在: scripts/status.sh$(NC)"; \
		exit 1; \
	fi

# 停止服务
.PHONY: stop
stop: ## 停止所有服务
	@echo "$(BLUE)停止IM服务...$(NC)"
	@if [ -f scripts/stop.sh ]; then \
		./scripts/stop.sh; \
	else \
		echo "$(RED)停止脚本不存在: scripts/stop.sh$(NC)"; \
		exit 1; \
	fi

# 重启服务
.PHONY: restart
restart: stop start ## 重启所有服务

# 清理文件
.PHONY: clean
clean: ## 清理构建文件和临时文件
	@echo "$(BLUE)清理构建文件...$(NC)"
	rm -rf $(BUILD_DIR)
	rm -rf scripts/pids scripts/logs
	@echo "$(GREEN)清理完成$(NC)" 