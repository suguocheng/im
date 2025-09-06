# IM即时通讯系统

一个基于Go语言开发的高性能即时通讯系统，支持微服务架构，具备完整的用户管理、好友系统、群组管理、实时消息传输等功能。

## 🏗️ 项目架构

### 微服务架构
```
im/
├── cmd/                    # 微服务主程序入口
│   ├── user-service/       # 用户服务主程序
│   ├── friend-service/     # 好友服务主程序
│   ├── group-service/      # 群组服务主程序
│   ├── message-service/    # 消息服务主程序
│   ├── file-service/       # 文件服务主程序
│   └── notification-service/ # 通知服务主程序
├── internal/               # 内部代码
│   ├── services/           # 微服务实现
│   │   ├── user-service/   # 用户服务 (8081)
│   │   ├── friend-service/ # 好友服务 (8082)
│   │   ├── group-service/  # 群组服务 (8083)
│   │   ├── message-service/# 消息服务 (8084)
│   │   ├── file-service/   # 文件服务 (8085)
│   │   └── notification-service/ # 通知服务 (8086)
│   └── shared/             # 共享代码
│       ├── protocol/       # protobuf协议定义
│       ├── auth/           # 认证模块
│       ├── config/         # 配置管理
│       ├── logger/         # 日志管理
│       ├── discovery/      # 服务发现
│       ├── performance/    # 性能优化组件
│       ├── database/       # 数据库连接池
│       ├── queue/          # 消息队列系统
│       └── rpc/            # 微服务通信
├── web/                    # 前端界面
├── scripts/                # 管理脚本
├── docs/                   # 项目文档
└── configs/                # 配置文件
```

### 核心功能
- 👤 **用户管理**: 注册、登录、信息管理、密码重置
- 👥 **好友系统**: 好友添加、管理、免打扰、备注设置
- 🏢 **群组管理**: 群组创建、成员管理、权限控制、禁言管理
- 💬 **消息系统**: 私聊、群聊、实时通信、离线消息
- 📁 **文件服务**: 文件上传、下载、管理
- 🔔 **通知系统**: 邮箱验证、消息通知
- 🔒 **秘密模式**: 端到端加密消息（不持久化）

## 🚀 快速开始

### 前置要求

**etcd 系统服务**
- etcd 需要作为系统服务运行
- 端口 2379 必须开放
- 使用 `make check-etcd` 检查状态

**安装 etcd (如果未安装)**
```bash
# Ubuntu/Debian
sudo apt-get install etcd

# CentOS/RHEL
sudo yum install etcd

# 启动并设置开机自启
sudo systemctl enable etcd
sudo systemctl start etcd
```

### 环境要求
- Go 1.19+
- MySQL 8.0+
- Redis 6.0+
- MongoDB 4.4+
- etcd 3.5+

### 安装和配置

1. **克隆项目**
```bash
git clone <repository-url>
cd im
```

2. **初始化项目**
```bash
chmod +x scripts/*.sh
./scripts/setup.sh
```

3. **配置环境变量**
```bash
cp config.env.example config.env
# 编辑config.env文件，配置数据库连接信息
```

4. **启动微服务**
```bash
make start
```

5. **访问系统**
- 前端界面: http://localhost:8088
- API网关: http://localhost:8087

## 📖 使用说明

### 微服务管理
```bash
# 构建微服务
make build

# 启动微服务
make start

# 停止微服务
make stop

# 清理文件
make clean

# 查看帮助
make help
```

## 🛠️ 技术栈

### 后端
- **语言**: Go 1.19+
- **框架**: 原生HTTP + WebSocket
- **数据库**: MySQL, MongoDB, Redis
- **协议**: Protocol Buffers
- **服务发现**: etcd
- **API网关**: Traefik

### 前端
- **语言**: JavaScript (ES6+)
- **协议**: Protocol Buffers (JavaScript)
- **加密**: Web Crypto API
- **UI**: 原生HTML/CSS