#!/bin/bash

# IM系统启动脚本

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 项目根目录
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PID_DIR="$PROJECT_DIR/scripts/pids"
LOG_DIR="$PROJECT_DIR/scripts/logs"

# 创建必要的目录
mkdir -p "$PID_DIR"
mkdir -p "$LOG_DIR"

# 检查是否已经运行
if [ -f "$PID_DIR/im_server.pid" ]; then
    echo -e "${YELLOW}警告: IM服务可能已经在运行中${NC}"
    echo -e "PID文件存在: $PID_DIR/im_server.pid"
    echo -e "如果确定服务未运行，请先运行 ./scripts/stop.sh"
    exit 1
fi

echo -e "${BLUE}=== IM即时通讯系统启动脚本 ===${NC}"
echo -e "项目目录: $PROJECT_DIR"
echo -e "PID目录: $PID_DIR"
echo -e "日志目录: $LOG_DIR"
echo ""

# 检查Go环境
if ! command -v go &> /dev/null; then
    echo -e "${RED}错误: 未找到Go环境，请先安装Go${NC}"
    exit 1
fi

# 检查Python环境
if ! command -v python3 &> /dev/null; then
    echo -e "${RED}错误: 未找到Python3环境，请先安装Python3${NC}"
    exit 1
fi

# 检查配置文件
if [ ! -f "$PROJECT_DIR/config.env" ]; then
    echo -e "${YELLOW}警告: 未找到config.env配置文件${NC}"
    echo -e "请复制config.env.example为config.env并配置数据库信息"
    exit 1
fi

echo -e "${GREEN}环境检查通过${NC}"
echo ""

# 构建并启动Go后端服务
echo -e "${BLUE}正在构建Go后端服务...${NC}"
cd "$PROJECT_DIR"
if ! go build -o bin/im-server cmd/main.go; then
    echo -e "${RED}错误: Go后端服务构建失败${NC}"
    exit 1
fi
echo -e "${GREEN}Go后端服务构建成功${NC}"

echo -e "${BLUE}正在启动Go后端服务...${NC}"
nohup ./bin/im-server > "$LOG_DIR/im_server.log" 2>&1 &
GO_PID=$!
echo $GO_PID > "$PID_DIR/im_server.pid"

# 等待一下确保服务启动
sleep 3

# 检查Go服务是否启动成功
if ! kill -0 $GO_PID 2>/dev/null; then
    echo -e "${RED}错误: Go后端服务启动失败${NC}"
    echo -e "请查看日志: $LOG_DIR/im_server.log"
    rm -f "$PID_DIR/im_server.pid"
    exit 1
fi

echo -e "${GREEN}Go后端服务启动成功 (PID: $GO_PID)${NC}"
echo -e "服务地址: http://localhost:8081"
echo ""

# 启动Python静态文件服务器
echo -e "${BLUE}正在启动Python静态文件服务器...${NC}"
cd "$PROJECT_DIR/web"
nohup python3 -m http.server 8088 > "$LOG_DIR/static_server.log" 2>&1 &
PYTHON_PID=$!
echo $PYTHON_PID > "$PID_DIR/static_server.pid"

# 等待一下确保服务启动
sleep 2

# 检查Python服务是否启动成功
if ! kill -0 $PYTHON_PID 2>/dev/null; then
    echo -e "${RED}错误: Python静态文件服务器启动失败${NC}"
    echo -e "请查看日志: $LOG_DIR/static_server.log"
    rm -f "$PID_DIR/static_server.pid"
    # 停止Go服务
    kill $GO_PID
    rm -f "$PID_DIR/im_server.pid"
    exit 1
fi

echo -e "${GREEN}Python静态文件服务器启动成功 (PID: $PYTHON_PID)${NC}"
echo -e "静态文件地址: http://localhost:8088"
echo ""

# 显示服务状态
echo -e "${GREEN}=== 服务启动完成 ===${NC}"
echo -e "Go后端服务: ${GREEN}运行中${NC} (PID: $GO_PID)"
echo -e "Python静态服务: ${GREEN}运行中${NC} (PID: $PYTHON_PID)"
echo -e "Web客户端: ${BLUE}http://localhost:8088${NC}"
echo -e "API接口: ${BLUE}http://localhost:8081${NC}"
echo ""
echo -e "日志文件:"
echo -e "  后端服务: $LOG_DIR/im_server.log"
echo -e "  静态服务: $LOG_DIR/static_server.log"
echo ""
echo -e "停止服务: ${YELLOW}./scripts/stop.sh${NC}"
echo -e "查看状态: ${YELLOW}./scripts/status.sh${NC}" 