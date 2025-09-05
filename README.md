# IM即时通讯系统

一个基于Go语言开发的即时通讯系统，支持微服务架构和单体架构两种部署方式。

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
│   ├── notification-service/ # 通知服务主程序
│   └── gateway/            # API网关主程序
├── internal/               # 内部代码
│   ├── services/           # 微服务实现
│   │   ├── user-service/   # 用户服务 (8081)
│   │   ├── friend-service/ # 好友服务 (8082)
│   │   ├── group-service/  # 群组服务 (8083)
│   │   ├── message-service/# 消息服务 (8084)
│   │   ├── file-service/   # 文件服务 (8085)
│   │   └── notification-service/ # 通知服务 (8086)
│   ├── shared/             # 共享代码
│   │   ├── protocol/       # protobuf协议定义
│   │   ├── models/         # 共享数据模型
│   │   ├── utils/          # 共享工具函数
│   │   ├── config/         # 配置管理
│   │   └── logger/         # 日志管理
│   ├── gateway/            # API网关实现
│   └── storage/            # 存储抽象层
├── web/                    # 前端界面
├── scripts/                # 管理脚本
├── docs/                   # 项目文档
└── configs/                # 配置文件
```

### 核心功能
- 👤 **用户管理**: 注册、登录、信息管理
- 👥 **好友系统**: 好友添加、管理、免打扰
- 🏢 **群组管理**: 群组创建、成员管理、权限控制
- 💬 **消息系统**: 私聊、群聊、实时通信
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
make start-services
```

5. **访问系统**
- 前端界面: http://localhost:3000
- API网关: http://localhost:8080

## 📖 使用说明

### 微服务管理
```bash
# 构建微服务
make build-services

# 启动微服务
make start-services

# 停止微服务
make stop-services

# 查看状态
make status-services

# 查看日志
make logs-services
```

### 其他命令
```bash
# 查看帮助
make help

# 运行测试
make test

# 清理文件
make clean
```

## 🔧 开发指南

### 项目结构说明

#### 微服务架构
- **services/**: 各个微服务的实现
- **shared/**: 微服务间共享的代码和协议
- **gateway/**: API网关配置
- **scripts/**: 微服务管理脚本

#### 旧架构（legacy/）
- **api/**: 原始单体API实现
- **cmd/**: 原始主程序
- **core/**: 原始核心代码
- **client/**: 原始客户端代码

### 添加新功能
1. 在对应的微服务中实现功能
2. 更新protobuf协议定义
3. 更新前端界面
4. 添加测试用例

### 数据库迁移
```bash
# 重新创建数据库表
./microservices/scripts/recreate-tables.sh
```

## 📚 文档

- [架构设计](docs/architecture.md)
- [API文档](docs/api.md)
- [部署指南](docs/deployment.md)
- [迁移说明](docs/migration.md)

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

## 🔒 安全特性

- **端到端加密**: 秘密模式消息使用本地加密
- **JWT认证**: 安全的用户认证机制
- **权限控制**: 细粒度的群组权限管理
- **数据隔离**: 微服务间数据隔离

## 📈 性能特性

- **微服务架构**: 独立扩展和部署
- **缓存优化**: Redis缓存提升性能
- **数据库优化**: 合理的索引和查询优化
- **实时通信**: WebSocket低延迟通信

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

如有问题或建议，请通过以下方式联系：
- 创建 Issue
- 发送邮件
- 项目讨论区

---

**注意**: 当前项目主要开发微服务架构，旧架构代码已归档到 `legacy/` 目录中，仅用于参考和兼容性测试。