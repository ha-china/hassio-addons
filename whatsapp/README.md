# WhatsApp Gateway

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/whatsapp/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_whatsapp)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-2.1.7-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-whatsapp)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Home Assistant WhatsApp App (Baileys/Node.js).

---

## 📖 About

## 🛠️ Usage & Integration

To actually send messages and automate WhatsApp, you need the **WhatsApp Custom Integration** for Home Assistant.

- **[Official Documentation & Examples](https://faserf.github.io/ha-whatsapp/)**: Comprehensive guide on how to use the `notify` service, send buttons, polls, images, and creating bot automations.

### 🗝️ Native Control Commands

Control your addon via WhatsApp!

**Public Commands:**

- `ha-app-status`: Check health and versions (HA Core/OS info included).
- `ha-app-ping`: Basic connectivity check ("Pong!").
- `ha-app-getid`: Returns the current Chat ID (useful for Group IDs).
- `ha-app-sponsor`: Show support and donation links.

**Admin Commands (Protected):**

- `ha-app-help`: Show available commands and examples.
- `ha-app-errors`: Show filtered system errors, warnings, and diagnostic status.
- `ha-app-welcome`: Manually show the role-aware welcome message.
- `ha-app-diagnose` (or `ha-app-diag`): Run full message type diagnostic (Buttons, Lists, etc.).
- `ha-app-logs`: See recent connection events.
- `ha-app-restart`: Restart the WhatsApp connection.

### 🛡️ Group Moderation & Defender Commands

Full-featured group moderation, anti-raid shield, and bot command engine (Rose & AegisBot style).

- **Prefix-based Commands**: Configure prefix per group (default `!`). Includes 37 group commands (`!help`, `!warn`, `!kick`, `!tban`, `!mute`, `!tmute`, `!promote`, `!demote`, `!approve`, `!save`, `!filter`, `!translate`, etc.). Supports custom command modes (Auto Reply, HA/Webhook forwarding, Command Aliases).
- **Content Locks**: Lock images, videos, voice, docs, stickers, URLs, invites, polls, contacts, locations, forwarded messages, or RTL text (`!lock`, `!unlock`).
- **Automation & AI**: Captchas (Private DM / Group resolution & Web UI status overview), welcome/goodbye greetings with departure reasons, configurable user name addressing priorities, word blacklists, anti-flood, anti-raid, Multi-AI provider support (OpenAI & Gemini), AI FAQ responder, AI Intent & Scam Detection (phishing/crypto protection), AI rules interpreter (`!rules <question>`), AI sentiment toxicity moderation, and AI translation (`!translate`).

## ⚠️ Anti-Ban & Safety Guidelines

Since this addon uses an unofficial WhatsApp API library (Baileys), WhatsApp's automated anti-spam systems may flag and temporarily/permanently suspend accounts that show spam-like behavior. Follow these rules to keep your account safe:

- **Warm Up New Numbers**: Do not use brand new SIM cards or freshly registered numbers for the bot. Use a number that has an existing manually-established chat history with real users.
- **Save Contacts**: Ensure the accounts receiving messages have the bot's phone number saved in their contact lists. Sending messages to unsaved contacts significantly increases the risk of being flagged.
- **Avoid Bulk Messaging**: Do not send messages to a large number of recipients or groups simultaneously.
- **Use Delays**: When sending consecutive messages via Home Assistant automations, always insert delay actions (e.g. 5–10 seconds) between messages.
- **Simulate Typing**: The addon automatically simulates typing presence (`composing...`) for 1–2.5s before every message to emulate human behavior.

## 🐳 Standalone Docker Support (Docker Only)

If you are running Home Assistant in a container (without Supervisor/HAOS), you can run the WhatsApp Gateway as a standalone Docker container.

### Docker Compose Example

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

## ⚙️ Configuration

Configure the app via the **Configuration** tab in the Home Assistant App page.

### Options

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

## 👨‍💻 Credits & License

This project is open-source and available under the MIT License.
Maintained by **FaserF**.

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
