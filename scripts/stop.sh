#!/bin/bash

# IM系统停止脚本

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 项目根目录
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PID_DIR="$PROJECT_DIR/scripts/pids"

echo -e "${BLUE}=== IM即时通讯系统停止脚本 ===${NC}"
echo -e "项目目录: $PROJECT_DIR"
echo -e "PID目录: $PID_DIR"
echo ""

# 停止Go后端服务
if [ -f "$PID_DIR/im_server.pid" ]; then
    GO_PID=$(cat "$PID_DIR/im_server.pid")
    if kill -0 $GO_PID 2>/dev/null; then
        echo -e "${BLUE}正在停止Go后端服务 (PID: $GO_PID)...${NC}"
        kill $GO_PID
        
        # 等待进程结束
        for i in {1..10}; do
            if ! kill -0 $GO_PID 2>/dev/null; then
                break
            fi
            sleep 1
        done
        
        # 如果进程还在运行，强制杀死
        if kill -0 $GO_PID 2>/dev/null; then
            echo -e "${YELLOW}强制停止Go后端服务...${NC}"
            kill -9 $GO_PID
        fi
        
        rm -f "$PID_DIR/im_server.pid"
        echo -e "${GREEN}Go后端服务已停止${NC}"
    else
        echo -e "${YELLOW}Go后端服务进程不存在，清理PID文件${NC}"
        rm -f "$PID_DIR/im_server.pid"
    fi
else
    echo -e "${YELLOW}未找到Go后端服务PID文件${NC}"
fi

echo ""

# 停止Python静态文件服务器
if [ -f "$PID_DIR/static_server.pid" ]; then
    PYTHON_PID=$(cat "$PID_DIR/static_server.pid")
    if kill -0 $PYTHON_PID 2>/dev/null; then
        echo -e "${BLUE}正在停止Python静态文件服务器 (PID: $PYTHON_PID)...${NC}"
        kill $PYTHON_PID
        
        # 等待进程结束
        for i in {1..5}; do
            if ! kill -0 $PYTHON_PID 2>/dev/null; then
                break
            fi
            sleep 1
        done
        
        # 如果进程还在运行，强制杀死
        if kill -0 $PYTHON_PID 2>/dev/null; then
            echo -e "${YELLOW}强制停止Python静态文件服务器...${NC}"
            kill -9 $PYTHON_PID
        fi
        
        rm -f "$PID_DIR/static_server.pid"
        echo -e "${GREEN}Python静态文件服务器已停止${NC}"
    else
        echo -e "${YELLOW}Python静态文件服务器进程不存在，清理PID文件${NC}"
        rm -f "$PID_DIR/static_server.pid"
    fi
else
    echo -e "${YELLOW}未找到Python静态文件服务器PID文件${NC}"
fi

echo ""

# 清理可能残留的进程
echo -e "${BLUE}清理可能残留的进程...${NC}"

# 查找并停止可能残留的Go进程
GO_PROCESSES=$(pgrep -f "go run cmd/main.go" 2>/dev/null || true)
if [ ! -z "$GO_PROCESSES" ]; then
    echo -e "${YELLOW}发现残留的Go进程: $GO_PROCESSES${NC}"
    echo $GO_PROCESSES | xargs kill -9 2>/dev/null || true
    echo -e "${GREEN}已清理残留的Go进程${NC}"
fi

# 查找并停止可能残留的Python HTTP服务器进程
PYTHON_PROCESSES=$(pgrep -f "python3 -m http.server 8088" 2>/dev/null || true)
if [ ! -z "$PYTHON_PROCESSES" ]; then
    echo -e "${YELLOW}发现残留的Python进程: $PYTHON_PROCESSES${NC}"
    echo $PYTHON_PROCESSES | xargs kill -9 2>/dev/null || true
    echo -e "${GREEN}已清理残留的Python进程${NC}"
fi

echo ""
echo -e "${GREEN}=== 所有服务已停止 ===${NC}"
echo -e "启动服务: ${YELLOW}./scripts/start.sh${NC}"
echo -e "查看状态: ${YELLOW}./scripts/status.sh${NC}" 