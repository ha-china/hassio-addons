# WhatsApp Home Assistant App

![Logo](https://raw.githubusercontent.com/FaserF/hassio-addons/master/whatsapp/logo.png)

[![打开您的 Home Assistant 实例并显示应用仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_whatsapp)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-1.5.6-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-whatsapp)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Home Assistant WhatsApp App (Baileys/Node.js).

---

## 📖 关于

### 🗝️ 原生控制命令

通过 WhatsApp 控制您的插件！

**公共命令：**

- `ha-app-status`: 检查健康状态和版本（包括 HA 核心和 OS 信息）。
- `ha-app-ping`: 基本连通性检查（"Pong!"）。
- `ha-app-getid`: 返回当前的聊天 ID（用于群组 ID）。
- `ha-app-sponsor`: 显示支持和捐赠链接。

**管理员命令（受保护）：**

- `ha-app-help`: 显示可用命令和示例。
- `ha-app-welcome`: 手动显示角色感知的欢迎信息。
- `ha-app-diagnose`: 运行完整消息类型诊断（按钮、列表等）。
- `ha-app-logs`: 查看最近的连接事件。
- `ha-app-restart`: 重新启动 WhatsApp 连接。

> [!TIP]
> **首次联系：** 机器人会自动向新用户在他们的第一条直接消息中发送欢迎信息，并识别他们的角色（管理员/标准）。

> [!TIP]
> 从管理员号码发送 `ha-app-help` 获取完整命令列表和用法示例。

---

## ⚙️ 配置

通过 Home Assistant App 页面中的 **配置** 选项卡配置应用。

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

## 👨‍💻 贡献者 & 许可证

此项目是开源的，并可在 MIT 许可证下获得。
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
