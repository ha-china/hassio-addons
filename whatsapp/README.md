# WhatsApp Gateway

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/whatsapp/logo.png" width="100" alt="Logo" />

[![打开您的 Home Assistant 实例并显示应用程序仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_whatsapp)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-2.1.8-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-whatsapp)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Home Assistant WhatsApp 应用 (Baileys/Node.js)。

---

## 📖 关于

## 🛠️ 使用与集成

要实际发送消息并自动化 WhatsApp，您需要 Home Assistant 的 **WhatsApp 自定义集成**。

- **[官方文档与示例](https://faserf.github.io/ha-whatsapp/)**：关于如何使用 `notify` 服务、发送按钮、投票、图片以及创建机器人自动化的综合指南。

### 🗝️ 原生控制命令

通过 WhatsApp 控制您的附加组件！

**公开命令：**

- `ha-app-status`：检查健康和版本（包含 HA 核心/OS 信息）。
- `ha-app-ping`：基本连接性检查（"Pong!"）。
- `ha-app-getid`：返回当前的聊天 ID（用于群聊 ID 很有用）。
- `ha-app-sponsor`：显示支持链接和捐赠链接。

**管理员命令（受保护）：**

- `ha-app-help`：显示可用命令和示例。
- `ha-app-errors`：显示过滤后的系统错误、警告和诊断状态。
- `ha-app-welcome`：手动显示角色感知的欢迎消息。
- `ha-app-diagnose`（或 `ha-app-diag`）：运行完整消息类型诊断（按钮、列表等）。
- `ha-app-logs`：查看最近的连接事件。
- `ha-app-restart`：重启 WhatsApp 连接。

### 🛡️ 群组管理与防御命令

功能完整的群组管理、反骚扰盾和机器人命令引擎（Rose 和 AegisBot 风格）。

- **基于前缀的命令**：为每个群配置前缀（默认为 `!`）。包含 37 个群组命令（`!help`、`!warn`、`!kick`、`!tban`、`!mute`、`!tmute`、`!promote`、`!demote`、`!approve`、`!save`、`!filter`、`!translate` 等）。支持自定义命令模式（自动回复、HA/Webhook 转发、命令别名）。
- **内容锁定**：锁定图片、视频、音频、文档、贴纸、URL、邀请、投票、联系人、位置、转发的消息或 RTL 文本（`!lock`、`!unlock`）。
- **自动化与 AI**：验证码（私聊/群组解决和 Web UI 状态概览），带有离开原因的欢迎/再见问候语，可配置的用户命名优先级，单词黑名单，防 flood（洪水攻击），反骚扰，多 AI 提供商支持（OpenAI & Gemini），AI 常见问题解答回答器，AI 意图与钓鱼检测（反钓鱼/加密货币保护），AI 规则解释器（`!rules <问题>`），AI 情感毒性 Moderation（监管），以及 AI 翻译（`!translate`）。

## ⚠️ 反封禁与安全指南

由于此附加组件使用非官方的 WhatsApp API 库 (Baileys)，WhatsApp 的自动反垃圾系统可能会将表现出类似垃圾邮件行为账户标记为诈骗，并暂时或永久暂停账户。请遵循以下规则以保护您的账户安全：

- **预热新号码**：不要在机器人中使用全新的 SIM 卡或刚注册的号码。使用具有与真实用户建立的人工聊天历史的号码。
- **保存联系人**：确保接收消息的账户已在其联系人列表中保存机器人的电话号码。向未保存的联系人发送消息会大大增加被标记的风险。
- **避免群发**：不要同时向大量收件人或群组发送消息。
- **使用延迟**：当通过 Home Assistant 自动化连续发送消息时，必须在消息之间始终插入延迟动作（例如 5–10 秒）。
- **模拟输入**：附加组件会在发送每条消息之前自动模拟输入状态（`正在输入...`）持续 1–2.5 秒，以模仿人类行为。

## 🐳 独立 Docker 支持（仅限 Docker）

如果您是在容器（没有 Supervisor/HAOS）中运行 Home Assistant，您可以作为独立的 Docker 容器运行 WhatsApp Gateway。

### Docker Compose 示例

```yaml
services:
  whatsapp-gateway:
    image: ghcr.io/faserf/whatsapp-gw:latest
    container_name: whatsapp-gateway
    restart: unless-stopped
    ports:
      - '8066:8066'
    volumes:
      - ./data:/data
      - ./media:/media
    environment:
      - PORT=8066
      - DATA_DIR=/data
      - MEDIA_FOLDER=/media
      - LOG_LEVEL=info
      - WELCOME_MESSAGE_ENABLED=false
```

---

## ⚙️ 配置

通过在 Home Assistant 应用程序页面的 **配置** 选项卡中配置应用程序。

### 选项

```yaml
admin_notifications_enabled: true
admin_numbers: ''
auto_install_integration: true
github_token: ''
group_fetch_cooldown_on_error: 60000
group_fetch_cooldown_on_rate_limit: 900000
group_fetch_interval: 300000
keep_alive_interval: 30000
log_level: info
mark_online: false
mask_sensitive_data: false
media_folder: ''
message_send_interval: 1000
reject_unauthorized: true
reset_session: false
send_message_timeout: 25000
sync_full_history: false
ui_auth_enabled: false
ui_auth_password: ''
webhook_enabled: false
webhook_token: ''
webhook_url: ''
welcome_message_enabled: false
```

---

## 👨‍💻 致谢与许可

本项目是根据 MIT 许可开源的。
由 **FaserF** 维护。

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
