#!/bin/bash

# 停止所有微服务脚本

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# 服务列表（不包括 etcd，因为它是系统服务）
SERVICES=(
    "traefik"
    "user-service"
    "friend-service"
    "group-service"
    "message-service"
    "file-service"
    "notification-service"
)

# 端口映射（兜底清理）
PORT_OF(){
  case "$1" in
    traefik) echo 8087;;
    user-service) echo 8081;;
    friend-service) echo 8082;;
    group-service) echo 8083;;
    message-service) echo 8084;;
    file-service) echo 8085;;
    notification-service) echo 8086;;
    *) echo "";;
  esac
}

kill_by_pid(){
  local pid="$1"
  if [ -z "$pid" ]; then return 1; fi
  if ps -p "$pid" > /dev/null 2>&1; then
    kill "$pid" 2>/dev/null || true
    sleep 1
    if ps -p "$pid" > /dev/null 2>&1; then
      kill -9 "$pid" 2>/dev/null || true
      sleep 1
    fi
  fi
}

kill_by_port(){
  local port="$1"
  [ -z "$port" ] && return 1
  if command -v lsof >/dev/null 2>&1; then
    local pids
    pids=$(lsof -ti tcp:"$port" 2>/dev/null || true)
    if [ -n "$pids" ]; then
      kill $pids 2>/dev/null || true
      sleep 1
      pids=$(lsof -ti tcp:"$port" 2>/dev/null || true)
      if [ -n "$pids" ]; then
        kill -9 $pids 2>/dev/null || true
      fi
    fi
  elif command -v fuser >/dev/null 2>&1; then
    fuser -k ${port}/tcp 2>/dev/null || true
  fi
}

echo -e "${BLUE}🛑 停止IM系统微服务...${NC}"
echo -e "${YELLOW}ℹ️  注意: etcd 是系统服务，不会被此脚本停止${NC}"

# 停止各个服务
for service in "${SERVICES[@]}"; do
    PID_FILE="scripts/pids/$service.pid"
    PORT="$(PORT_OF "$service")"

    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            echo -e "${YELLOW}停止 $service 服务 (PID: $PID)...${NC}"
            kill_by_pid "$PID"
            echo -e "${GREEN}✅ $service 服务已停止${NC}"
        else
            echo -e "${YELLOW}⚠️  $service 服务未运行或PID无效${NC}"
        fi
        rm -f "$PID_FILE"
    else
        echo -e "${YELLOW}⚠️  $service 服务PID文件不存在${NC}"
    fi

    # 兜底：如果端口仍被占用，按端口清理
    if [ -n "$PORT" ]; then
      if (command -v lsof >/dev/null 2>&1 && lsof -ti tcp:"$PORT" >/dev/null 2>&1) || \
         (command -v ss >/dev/null 2>&1 && ss -ltn | grep -q ":$PORT ") || \
         (command -v netstat >/dev/null 2>&1 && netstat -tuln 2>/dev/null | grep -q ":$PORT ")
      then
        echo -e "${YELLOW}端口 $PORT 仍被占用，执行兜底清理...${NC}"
        kill_by_port "$PORT"
      fi
    fi
done

# 清理进程
echo -e "${BLUE}🧹 清理残留进程...${NC}"
pkill -f "etcd" 2>/dev/null || true
pkill -f "traefik" 2>/dev/null || true
pkill -f "user-service" 2>/dev/null || true
pkill -f "friend-service" 2>/dev/null || true
pkill -f "group-service" 2>/dev/null || true
pkill -f "message-service" 2>/dev/null || true
pkill -f "file-service" 2>/dev/null || true
pkill -f "notification-service" 2>/dev/null || true

echo -e "${GREEN}🎉 所有微服务已停止！${NC}"