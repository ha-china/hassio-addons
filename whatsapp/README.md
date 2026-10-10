# WhatsApp Gateway

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/whatsapp/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_whatsapp)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-2.1.4-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-whatsapp)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Home Assistant WhatsApp 应用（Baileys / Node.js）。

---

## 📖 简介

## 🛠️ 使用与集成

若要实际发送消息并自动化 WhatsApp，Home Assistant 需要 **WhatsApp 自定义集成**。

- **[官方文档与示例](https://faserf.github.io/ha-whatsapp/)**: 详细介绍如何使用 `notify` 服务、发送按钮、投票、图片以及创建机器人自动化。

### 🗝️ 原生控制指令

通过 WhatsApp 控制您的附加组件！

**公共指令：**

- `ha-app-status`: 检查健康状态和版本（包含 HA Core / OS 信息）。
- `ha-app-ping`: 基本连通性检查（返回"Pong!"）。
- `ha-app-getid`: 返回当前 Chat ID（群组 ID 很有用）。
- `ha-app-sponsor`: 显示支持和捐赠链接。

**管理员指令（受保护）：**

- `ha-app-help`: 显示可用指令和示例。
- `ha-app-errors`: 显示过滤后的系统错误、警告和诊断状态。
- `ha-app-welcome`: 手动显示角色感知的欢迎消息。
- `ha-app-diagnose` (或 `ha-app-diag`): 运行完整的消息类型诊断（按钮、列表等）。
- `ha-app-logs`: 查看最近的连接事件。
- `ha-app-restart`: 重启 WhatsApp 连接。

### 🛡️ 群组管理与防御指令

功能齐全的群组管理、防封群盾牌和机器人指令引擎（类似 Rose & AegisBot 风格）。

- **基于前缀的指令**: 为每个群组配置前缀（默认 `!`）。包含 37 个群组指令（`!help`, `!warn`, `!kick`, `!tban`, `!mute`, `!tmute`, `!promote`, `!demote`, `!approve`, `!save`, `!filter`, `!translate` 等）。支持自定义命令模式（自动回复、HA/Webhook 转发、命令别名）。
- **内容锁定**: 锁定图片、视频、语音、文档、贴纸、URL、邀请、投票、联系人、位置、转发消息或 RTL 文本（`!lock`, `!unlock`）。
- **自动化与 AI**: CAPTCHA（私聊/群组验证及 Web UI 状态总览）、带有退出原因的欢迎/告别问候语、可配置的用户名提及优先级、词黑名单、防 flood、防封群、多 AI 提供商支持（OpenAI 和 Gemini）、AI FAQ 应答、AI 意图与诈骗检测（防钓鱼/加密保护）、AI 规则解释器（`!rules <问题>`）、AI 情感毒性调节和 AI 翻译（`!translate`）。

## ⚠️ 反封号与安全指南

由于该附加组件使用非官方的 WhatsApp API 库 (Baileys)，WhatsApp 的自动反垃圾系统可能会标记并暂时或永久暂停显示垃圾短信特征的账户。请遵循以下规则以保护您的账户：

- **激活新号码**: 不要为新 Bot 使用全新的 SIM 卡或刚注册的号码。使用一个已有与真实用户手动建立聊天历史的号码。
- **保存联系人**: 确保接收消息的账户已将 Bot 手机号保存在其联系人列表中。向未保存联系人发送消息会显著增加被标记的风险。
- **避免群发**: 不要同时向大量收件人或群组发送消息。
- **使用延时**: 通过 Home Assistant 自动化连续发送消息时，请在消息之间插入延时操作（例如 5–10 秒）。
- **模拟输入**: 附加组件会在每条消息之前自动模拟输入状态（"正在输入..."）持续 1–2.5 秒，以模拟人类行为。

## 🐳 独立 Docker 支持（仅 Docker）

如果您是在容器中运行 Home Assistant（没有 Supervisor/HAOS），您可以作为独立的 Docker 容器运行 WhatsApp Gateway。

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

在 Home Assistant App 页面的 **配置** 选项卡中配置应用程序。

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

## 👨‍💻 致谢与许可证

本项目是开源的，采用 MIT 许可证。
由 **FaserF** 维护。

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
