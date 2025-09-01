#!/bin/bash

# IM系统状态查看脚本
# 作者: IM开发团队
# 功能: 查看Go后端服务和Python静态文件服务器的运行状态

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

echo -e "${BLUE}=== IM即时通讯系统状态 ===${NC}"
echo -e "项目目录: $PROJECT_DIR"
echo -e "PID目录: $PID_DIR"
echo -e "日志目录: $LOG_DIR"
echo ""

# 检查Go后端服务状态
echo -e "${BLUE}Go后端服务状态:${NC}"
if [ -f "$PID_DIR/im_server.pid" ]; then
    GO_PID=$(cat "$PID_DIR/im_server.pid")
    if kill -0 $GO_PID 2>/dev/null; then
        echo -e "  状态: ${GREEN}运行中${NC}"
        echo -e "  PID: $GO_PID"
        echo -e "  端口: 8081"
        echo -e "  地址: http://localhost:8081"
        
        # 显示进程信息
        if command -v ps &> /dev/null; then
            echo -e "  进程信息:"
            ps -p $GO_PID -o pid,ppid,cmd,etime --no-headers 2>/dev/null | sed 's/^/    /'
        fi
    else
        echo -e "  状态: ${RED}已停止${NC}"
        echo -e "  PID文件存在但进程不存在"
        rm -f "$PID_DIR/im_server.pid"
    fi
else
    echo -e "  状态: ${YELLOW}未启动${NC}"
fi

echo ""

# 检查Python静态文件服务器状态
echo -e "${BLUE}Python静态文件服务器状态:${NC}"
if [ -f "$PID_DIR/static_server.pid" ]; then
    PYTHON_PID=$(cat "$PID_DIR/static_server.pid")
    if kill -0 $PYTHON_PID 2>/dev/null; then
        echo -e "  状态: ${GREEN}运行中${NC}"
        echo -e "  PID: $PYTHON_PID"
        echo -e "  端口: 8088"
        echo -e "  地址: http://localhost:8088"
        
        # 显示进程信息
        if command -v ps &> /dev/null; then
            echo -e "  进程信息:"
            ps -p $PYTHON_PID -o pid,ppid,cmd,etime --no-headers 2>/dev/null | sed 's/^/    /'
        fi
    else
        echo -e "  状态: ${RED}已停止${NC}"
        echo -e "  PID文件存在但进程不存在"
        rm -f "$PID_DIR/static_server.pid"
    fi
else
    echo -e "  状态: ${YELLOW}未启动${NC}"
fi

echo ""

# 检查端口占用情况
echo -e "${BLUE}端口占用情况:${NC}"
if command -v netstat &> /dev/null; then
    echo -e "  端口8081 (Go后端):"
    if netstat -tlnp 2>/dev/null | grep ":8081" > /dev/null; then
        netstat -tlnp 2>/dev/null | grep ":8081" | sed 's/^/    /'
    else
        echo -e "    ${YELLOW}未监听${NC}"
    fi
    
    echo -e "  端口8088 (Python静态):"
    if netstat -tlnp 2>/dev/null | grep ":8088" > /dev/null; then
        netstat -tlnp 2>/dev/null | grep ":8088" | sed 's/^/    /'
    else
        echo -e "    ${YELLOW}未监听${NC}"
    fi
elif command -v ss &> /dev/null; then
    echo -e "  端口8081 (Go后端):"
    if ss -tlnp 2>/dev/null | grep ":8081" > /dev/null; then
        ss -tlnp 2>/dev/null | grep ":8081" | sed 's/^/    /'
    else
        echo -e "    ${YELLOW}未监听${NC}"
    fi
    
    echo -e "  端口8088 (Python静态):"
    if ss -tlnp 2>/dev/null | grep ":8088" > /dev/null; then
        ss -tlnp 2>/dev/null | grep ":8088" | sed 's/^/    /'
    else
        echo -e "    ${YELLOW}未监听${NC}"
    fi
else
    echo -e "  ${YELLOW}无法检查端口占用情况 (需要netstat或ss命令)${NC}"
fi

echo ""

# 显示日志文件信息
echo -e "${BLUE}日志文件:${NC}"
if [ -f "$LOG_DIR/im_server.log" ]; then
    LOG_SIZE=$(du -h "$LOG_DIR/im_server.log" | cut -f1)
    LOG_LINES=$(wc -l < "$LOG_DIR/im_server.log")
    echo -e "  后端服务日志: $LOG_DIR/im_server.log"
    echo -e "    大小: $LOG_SIZE"
    echo -e "    行数: $LOG_LINES"
else
    echo -e "  后端服务日志: ${YELLOW}不存在${NC}"
fi

if [ -f "$LOG_DIR/static_server.log" ]; then
    LOG_SIZE=$(du -h "$LOG_DIR/static_server.log" | cut -f1)
    LOG_LINES=$(wc -l < "$LOG_DIR/static_server.log")
    echo -e "  静态服务日志: $LOG_DIR/static_server.log"
    echo -e "    大小: $LOG_SIZE"
    echo -e "    行数: $LOG_LINES"
else
    echo -e "  静态服务日志: ${YELLOW}不存在${NC}"
fi

echo ""
echo -e "${BLUE}=== 操作命令 ===${NC}"
echo -e "启动服务: ${YELLOW}./scripts/start.sh${NC}"
echo -e "停止服务: ${YELLOW}./scripts/stop.sh${NC}"
echo -e "重启服务: ${YELLOW}./scripts/stop.sh && ./scripts/start.sh${NC}" 