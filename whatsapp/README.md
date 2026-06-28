# WhatsApp Home Assistant 应用

![Logo](https://raw.githubusercontent.com/FaserF/hassio-addons/master/whatsapp/logo.png)

[![打开您的 Home Assistant 实例并显示应用仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_whatsapp)
[![Home Assistant 应用](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-1.6.3-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-whatsapp)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Home Assistant WhatsApp 应用 (Baileys/Node.js).

---

## 📖 关于

### 🗝️ 原生控制命令

通过 WhatsApp 控制您的插件！

**公共命令：**

- `ha-app-status`: 检查健康和版本（包含 HA 核心和 OS 信息）。
- `ha-app-ping`: 基本连接检查（"Pong!"）。
- `ha-app-getid`: 返回当前的聊天 ID（用于群组 ID）。
- `ha-app-sponsor`: 显示支持和捐赠链接。

**管理员命令（受保护）：**

- `ha-app-help`: 显示可用命令和示例。
- `ha-app-welcome`: 手动显示基于角色的欢迎消息。
- `ha-app-diagnose`: 运行完整的消息类型诊断（按钮、列表等）。
- `ha-app-logs`: 查看最近的连接事件。
- `ha-app-restart`: 重新启动 WhatsApp 连接。

> [!TIP]
> **首次联系：** 消息机器人会在新用户第一次直接消息时自动发送欢迎消息，识别他们的角色（管理员/标准）。

> [!TIP]
> 从管理员号码发送 `ha-app-help` 获取完整命令列表和使用示例。

## ⚠️ 反封禁和安全指南

由于此插件使用非官方的 WhatsApp API 库（Baileys），WhatsApp 的自动化反垃圾邮件系统可能会标记并暂时/永久封禁表现出垃圾邮件行为的账户。遵循以下规则以保护您的账户安全：

- **预热新号码**：不要使用全新的 SIM 卡或新注册的号码用于机器人。使用一个与真实用户有手动建立的聊天历史的号码。
- **保存联系人**：确保接收消息的账户已经将机器人的电话号码保存在他们的联系人列表中。向未保存的联系人发送消息会显著增加被标记的风险。
- **避免群发**：不要向大量收件人或群组同时发送消息。
- **使用延迟**：当通过 Home Assistant 自动化发送连续消息时，始终在消息之间插入延迟操作（例如 5-10 秒）。
- **模拟打字**：插件会自动在每条消息发送前模拟 1-2.5 秒的打字状态（`composing...`），以模拟人类行为。

---

## ⚙️ 配置

通过 Home Assistant 应用页面中的 **配置** 选项卡配置应用。

### 选项

```yaml
admin_notifications_enabled: true
admin_numbers: ''
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
ui_auth_enabled: false
ui_auth_password: ''
webhook_enabled: false
webhook_token: ''
webhook_url: ''
welcome_message_enabled: false
```

---

## 👨‍💻 致谢与许可证

此项目是开源的，并遵循 MIT 许可证。
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
