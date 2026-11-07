# Home Assistant 插件：Letta Code

拥有长期记忆、技能和多代理推理能力的状态型 AI 代理平台和应用程序服务器。

[Letta Code](https://github.com/letta-ai/letta-code) 是由 Letta AI 开发的开源开发代理和应用程序服务器。它具备状态型代理，利用 MemFS 跨会话记住信息，在本地或云端沙箱中执行工具，并提供兼容 OpenAI 的 API 和 WebSocket 服务器。

## 功能

- 具备持久记忆（MemFS）的状态型 AI 开发代理
- 内置的应用程序服务器，用于 WebSocket 和 HTTP 代理编排
- 兼容 OpenAI 的 API（`/v1/models`、`/v1/chat/completions`、`/v1/responses`）
- 本地和云端执行后端
- 在 `/config` 中的持久化工作区和代理存储

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Letta Code** 插件。
3. 在插件的 **配置** 选项卡中配置您的 API 密钥（见下文）。
4. 启动插件。
5. 在插件的 **配置** 选项卡的 **网络** 部分启用端口 `4500`，然后将客户端连接到 `http://homeassistant:4500`（或 `ws://homeassistant:4500/ws`）。

## 配置

| 选项 | 默认值 | 描述 |
| -------- | --------- | ------------- |
| `backend` | `local` | 代理执行后端：`local` 或 `cloud`。 |
| `openai_api` | `true` | 启用兼容 OpenAI 的端点（`/v1/models`、`/v1/chat/completions` 等）。 |
| `token` | *(生成)* | 应用程序服务器能力令牌。如果未指定，则将在 `/config/app-server-token` 中生成安全随机令牌。 |
| `TZ` | *无* | 容器时区（例如 `America/New_York` 或 `UTC`）。 |
| `env_vars` | `[]` | 额外的环境变量，如 `OPENAI_API_KEY`、`ANTHROPIC_API_KEY` 或 `LETTA_API_KEY`。 |

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

Letta Code 在端口 `4500` 上运行其应用程序服务器：

- **认证**：从 `/config/app-server-token` 读取令牌（或使用配置的 `token` 选项），并在 HTTP 请求和 WebSocket 连接中将它们作为 `Authorization: Bearer <token>` 发送。
- **直接访问（端口 4500）**：出于安全考虑，端口 `4500` 默认禁用，以防止能力令牌通过未保护的连接发送。若要启用直接 WebSocket 和 OpenAI API 访问，请在插件的 **配置** 选项卡的 **网络** 部分指定端口 `4500`，或通过反向代理终结 TLS/HTTPS：
  - **健康检查**：`http://homeassistant:4500/healthz`
  - **就绪检查**：`http://homeassistant:4500/readyz`
  - **服务器信息**：`http://homeassistant:4500/app-server-info`
  - **WebSocket 协议**：`ws://homeassistant:4500/ws`
  - **兼容 OpenAI API**：`http://homeassistant:4500/v1/chat/completions`

## 存储与持久化

Letta Code 将在 `/config/.letta` 中存储状态、数据库、凭据和 MemFS 内存，该路径符号链接到 `/root/.letta`。项目工作区文件位于 `/config/workspace`（符号链接到 `/workspace`）。所有状态在插件重启和容器重建后都会保留。

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
