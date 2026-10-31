# Home Assistant 插件：Letta Code

具有长期记忆、技能和多智能体推理的状态型人工智能智能体平台和应用服务器。

[Letta Code](https://github.com/letta-ai/letta-code) 是由 Letta AI 开发的一种开源开发智能体和应用服务器。它具备利用 MemFS 在会话间保持记忆的状态型代理，能够在本地或云端沙箱中执行工具，并提供兼容 OpenAI 的 API 和 WebSocket 服务器。

## 功能特性

- 具备持久内存（MemFS）的状态型 AI 开发智能体
- 内置应用服务器，用于 WebSocket 和 HTTP 智能体编排
- 兼容 OpenAI 的 API（`/v1/models`、`/v1/chat/completions`、`/v1/responses`）
- 本地和云端执行后端
- 将持久工作区和智能体数据存储于 `/config`

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Letta Code** 插件。
3. 在插件的 **配置** 标签页中设置您的 API 密钥（见下文）。
4. 启动插件。
5. 在插件的 **配置** 标签页的 **网络** 部分启用端口 `4500`，然后将客户端连接到 `http://homeassistant:4500`（或 `ws://homeassistant:4500/ws`）。

## 配置

| 选项 | 默认值 | 描述 |
| -------- | --------- | ------------- |
| `backend` | `local` | 智能体执行后端：`local` 或 `cloud`。 |
| `openai_api` | `true` | 启用兼容 OpenAI 的端点（`/v1/models`、`/v1/chat/completions` 等）。 |
| `token` | *(自动生成)* | 应用服务器能力令牌。未指定时，将在 `/config/app-server-token` 中生成安全随机令牌。 |
| `TZ` | *无* | 容器时区（例如 `America/New_York` 或 `UTC`）。 |
| `env_vars` | `[]` | 额外环境变量，如 `OPENAI_API_KEY`、`ANTHROPIC_API_KEY` 或 `LETTA_API_KEY`。 |

### 设置 API 密钥

通过 `env_vars` 选项提供您的 LLM API 密钥：

```yaml
env_vars:
  - name: OPENAI_API_KEY
    value: sk-...
  - name: ANTHROPIC_API_KEY
    value: sk-ant-...
```

## 端点与 API 访问

Letta Code 在端口 `4500` 上提供应用服务器：

- **身份验证：** 从 `/config/app-server-token` 读取令牌（或使用配置的 `token` 选项），并将它以 `Authorization: Bearer <token>` 的形式与其他 HTTP 请求和 WebSocket 连接一起发送。
- **直接访问（端口 4500）：** 出于安全考虑，默认禁用端口 `4500`，以防止通过未加密连接发送能力令牌。若要启用直接的 WebSocket 和 OpenAI API 访问，请在插件的 **配置** 标签页的 **网络** 部分指定端口 `4500`（或通过终止 TLS/HTTPS 的反向代理进行路由）：
  - **健康检查：** `http://homeassistant:4500/healthz`
  - **就绪状态：** `http://homeassistant:4500/readyz`
  - **服务器信息：** `http://homeassistant:4500/app-server-info`
  - **WebSocket 协议：** `ws://homeassistant:4500/ws`
  - **兼容 OpenAI API：** `http://homeassistant:4500/v1/chat/completions`

## 存储与持久化

Letta Code 将状态、数据库、凭据和 MemFS 内存存储于 `/config/.letta`，该目录已连接到 `/root/.letta`。项目工作区文件位于 `/config/workspace`（已连接到 `/workspace`）。所有状态都会在任何插件重启或容器重建后得以保持。

## 支持与链接

- [Letta Code 文档](https://github.com/letta-ai/letta-code)
- [Letta AI Discord 社区](https://discord.gg/letta)
- [插件仓库 Issue](https://github.com/alexbelgium/hassio-addons/issues)

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
