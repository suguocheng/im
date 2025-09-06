#!/bin/bash

# 启动所有微服务脚本

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# 服务配置（微服务名:端口）
SERVICES=(
    "user-service:8081"
    "friend-service:8082"
    "group-service:8083"
    "message-service:8084"
    "file-service:8085"
    "notification-service:8086"
)

# 创建必要目录
mkdir -p scripts/pids scripts/logs

echo -e "${BLUE}🚀 启动IM系统微服务...${NC}"

# 检查 etcd 和启动 Traefik
echo -e "${YELLOW}🔧 检查 etcd 和启动 Traefik...${NC}"

# 检查 etcd 是否运行
if ! pgrep -x "etcd" > /dev/null; then
    echo -e "${RED}❌ etcd 未运行，请先启动 etcd 系统服务${NC}"
    echo -e "${YELLOW}💡 提示: sudo systemctl start etcd 或手动启动 etcd${NC}"
    exit 1
else
    echo -e "${GREEN}✅ etcd 系统服务运行正常${NC}"
fi

# 启动 Traefik
if ! pgrep -x "traefik" > /dev/null; then
    echo -e "${GREEN}启动 Traefik...${NC}"
    nohup traefik --configfile=configs/gateway/traefik.yml > scripts/logs/traefik.log 2>&1 &
    echo $! > scripts/pids/traefik.pid
    sleep 3
    echo -e "${GREEN}✅ Traefik 启动成功${NC}"
else
    echo -e "${YELLOW}⚠️  Traefik 已在运行${NC}"
fi

# 构建所有服务
echo -e "${YELLOW}📦 构建所有微服务...${NC}"
scripts/build.sh

# 启动各个服务
for service in "${SERVICES[@]}"; do
    IFS=':' read -r name port <<< "$service"
    
    echo -e "${GREEN}启动 $name 服务 (端口: $port)...${NC}"
    
    # 检查服务是否已经在运行
    if [ -f "scripts/pids/$name.pid" ]; then
        PID=$(cat "scripts/pids/$name.pid")
        if ps -p $PID > /dev/null 2>&1; then
            echo -e "${YELLOW}⚠️  $name 服务已在运行 (PID: $PID)${NC}"
            continue
        else
            rm -f "scripts/pids/$name.pid"
        fi
    fi
    
    # 启动服务
    nohup ./bin/$name > scripts/logs/$name.log 2>&1 &
    PID=$!
    echo $PID > "scripts/pids/$name.pid"
    
    # 等待服务启动
    sleep 2
    
    # 检查服务是否启动成功
    if ps -p $PID > /dev/null 2>&1; then
        echo -e "${GREEN}✅ $name 服务启动成功 (PID: $PID)${NC}"
    else
        echo -e "${RED}❌ $name 服务启动失败${NC}"
        rm -f "scripts/pids/$name.pid"
    fi
done

echo -e "${GREEN}🎉 所有微服务启动完成！${NC}"
echo -e "${BLUE}📋 服务状态:${NC}"
echo -e "  前端界面: http://localhost:8088"
echo -e "  API网关:  http://localhost:8087 (Traefik)"
echo -e "  etcd:     http://localhost:2379"
echo -e "  用户服务: http://localhost:8081"
echo -e "  好友服务: http://localhost:8082"
echo -e "  群组服务: http://localhost:8083"
echo -e "  消息服务: http://localhost:8084"
echo -e "  文件服务: http://localhost:8085"
echo -e "  通知服务: http://localhost:8086"
echo ""
echo -e "${YELLOW}💡 管理命令:${NC}"
echo -e "  构建服务: ./scripts/build.sh 或 make build"
echo -e "  启动服务: ./scripts/start.sh 或 make start"
echo -e "  停止服务: ./scripts/stop.sh 或 make stop"