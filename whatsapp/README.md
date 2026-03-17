# WhatsApp

![WhatsApp Logo](https://raw.githubusercontent.com/FaserF/hassio-addons/master/whatsapp/logo.png)

[![打开您的 Home Assistant 实例并显示附加组件仪表板](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_whatsapp)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![Docker 镜像](https://img.shields.io/badge/docker-1.4.6-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-whatsapp)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Home Assistant WhatsApp App (Baileys/Node.js).

---

## 📖 关于

[GitHub 仓库](https://github.com/FaserF/ha-whatsapp)
[Home Assistant 附加组件页面](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_whatsapp)

## ❤️ 支持此项目

> 我在**业余时间**维护这个集成，同时还有我的正常工作——查找错误、添加新功能和在实际硬件上进行测试。测试设备需要资金，每笔捐赠都有助于我保持独立，并有更多时间投入到开源工作中。
>
> 捐赠完全自愿——但我的支持越多，我就越少依赖其他收入来源，就越能现实地投入到这些 GitHub 项目中。💪

<div align="center">

</div>

## 🐛 报告错误

如果您在此应用中遇到任何问题，请使用以下链接报告。问题表单将自动填写应用信息，以帮助我们更快地解决问题。

**[报告错误](https://github.com/FaserF/hassio-addons/issues/new?template=bug_report.yml&version_integration=0.3.0&log_information=请粘贴App日志输出：%0A%0A)**

## 💡 功能请求

如果您有关于新功能或改进的想法，请使用以下链接提交功能请求。表单将自动填写应用信息。

**[请求功能](https://github.com/FaserF/hassio-addons/issues/new?template=feature_request.yml&App_name=whatsapp)**

> [!NOTE]
> 请使用上面的链接请求功能。这确保了您的功能请求中自动包含应用名称。

## 🛠️ 使用与集成

要发送消息并自动化 WhatsApp，您需要 Home Assistant 的 **WhatsApp 自定义集成**。

- **[官方文档和示例](https://faserf.github.io/ha-whatsapp/)**：如何使用 `notify` 服务、发送按钮、民意调查、图片以及创建机器人自动化的全面指南。

> [!WARNING]
> **交互式消息（按钮和列表）**：这些功能越来越多地受到 Meta 对非官方 API 的限制。它们可能不会出现在所有设备上（特别是 iOS 设备）。如果它们对您不起作用，请考虑使用标准文本消息或 **民意调查**，这些功能更加可靠。

### 🗝️ 原生控制命令

通过 WhatsApp 控制您的附加组件！

**公共命令：**

- `ha-app-status`：检查健康状态和版本（包括 HA 核心和操作系统信息）。
- `ha-app-ping`：基本连通性检查（"Pong!"）。
- `ha-app-getid`：返回当前的聊天 ID（用于群组 ID）。
- `ha-app-sponsor`：显示支持和捐赠链接。

**管理员命令（受保护）：**

- `ha-app-help`：显示可用命令和示例。
- `ha-app-welcome`：手动显示基于角色的欢迎消息。
- `ha-app-diagnose`：运行完整的消息类型诊断（按钮、列表等）。
- `ha-app-logs`：查看最近的连接事件。
- `ha-app-restart`：重新启动 WhatsApp 连接。

> [!TIP]
> **首次联系**：机器人会自动向新用户发送欢迎消息，并在他们的直接消息中识别他们的角色（管理员/标准用户）。

> [!TIP]
> 从管理员号码发送 `ha-app-help` 获取完整命令列表和用法示例。

---

## ⚙️ 配置

通过 Home Assistant 应用页面中的 **配置** 选项卡配置此附加组件。

### 选项

```yaml
admin_notifications_enabled: true
admin_numbers: ''
keep_alive_interval: 30000
log_level: info
mark_online: false
mask_sensitive_data: false
media_folder: ''
reset_session: false
send_message_timeout: 25000
ui_auth_enabled: false
ui_auth_password: ''
webhook_enabled: false
webhook_token: ''
webhook_url: ''
welcome_message_enabled: true
```

---

## 👨‍💻 信用与许可证

此项目是开源的，可在 MIT 许可证下获得。
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
