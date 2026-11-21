# Home Assistant 插件：Letta Code

拥有长期记忆、技能和多智能体推理能力的状态型 AI 代理平台和应用程序服务器。

[Letta Code](https://github.com/letta-ai/letta-code) 是由 Letta AI 开发的一种开源开发代理和应用程序服务器。它具备使用 MemFS 跨会话记忆的状态型智能体，可在本地或云端沙盒中执行工具，并提供兼容 OpenAI 的 API 和 WebSocket 服务器。

## 功能特性

- 具备持久记忆（MemFS）的状态型 AI 开发智能体
- 内置用于 WebSocket 和 HTTP 智能体编排的应用程序服务器
- 兼容 OpenAI 的 API（`/v1/models`、`/v1/chat/completions`、`/v1/responses`）
- 本地和云端执行后端
- 在 `/config` 目录中持久化工作区和智能体存储

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Letta Code** 插件。
3. 在插件的 **配置 (Configuration)** 选项卡中配置您的 API 密钥（见下文）。
4. 启动插件。
5. 在插件的 **配置** 选项卡的 **网络 (Network)** 部分下启用端口 `4500`，然后连接客户端到 `http://homeassistant:4500`（或 `ws://homeassistant:4500/ws`）。

## 配置

| 选项 | 默认值 | 描述 |
| -------- | --------- | ------------- |
| `backend` | `local` | 智能体执行后端：`local` 或 `cloud`。 |
| `openai_api` | `true` | 启用兼容 OpenAI 的端点（`/v1/models`、`/v1/chat/completions` 等）。 |
| `token` | *(生成)* | 应用程序服务器能力令牌。如果不指定，将在 `/config/app-server-token` 中生成一个安全的随机令牌。 |
| `TZ` | *无* | 容器时区（例如 `America/New_York` 或 `UTC`）。 |
| `env_vars` | `[]` | 额外的环境变量，如 `OPENAI_API_KEY`、`ANTHROPIC_API_KEY` 或 `LETTA_API_KEY`。 |

### 设置 API 密钥

通过 `env_vars` 选项提供 LLM API 密钥：

```yaml
env_vars:
  - name: OPENAI_API_KEY
    value: sk-...
  - name: ANTHROPIC_API_KEY
    value: sk-ant-...
```

## 端点与 API 访问

Letta Code 在端口 `4500` 上提供应用程序服务器服务：

- **认证：** 从 `/config/app-server-token` 读取令牌（或使用配置的 `token` 选项），并通过 HTTP 请求和 WebSocket 连接将其作为 `Authorization: Bearer <token>` 发送。
- **直接访问（端口 4500）：** 出于安全原因，端口 `4500` 默认被禁用，以防止在加密连接之外传输能力令牌。若要启用直接 WebSocket 和 OpenAI API 访问，请在插件的 **配置** 选项卡的 **网络** 部分下指定端口 `4500`，或通过终止 TLS/HTTPS 的反向代理进行路由：
  - **健康检查：** `http://homeassistant:4500/healthz`
  - **就绪状态：** `http://homeassistant:4500/readyz`
  - **服务器信息：** `http://homeassistant:4500/app-server-info`
  - **WebSocket 协议：** `ws://homeassistant:4500/ws`
  - **兼容 OpenAI API：** `http://homeassistant:4500/v1/chat/completions`

## 存储与持久化

Letta Code 将状态、数据库、凭据和 MemFS 内存存储到 `/config/.letta`（链接到 `/root/.letta`）。项目工作区文件位于 `/config/workspace`（链接到 `/workspace`）。所有状态在插件重启和容器重建后都会保留。

## 支持与链接

- [Letta Code 文档](https://github.com/letta-ai/letta-code)
- [Letta AI Discord 社区](https://discord.gg/letta)
- [插件仓库问题](https://github.com/alexbelgium/hassio-addons/issues)

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
