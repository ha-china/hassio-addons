# WhatsApp

![Logo](logo.png)

[![打开您的 Home Assistant 实例并显示附加组件仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_whatsapp)
[![Home Assistant 附加组件](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![Docker 镜像](https://img.shields.io/badge/docker-1.0.5-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-whatsapp)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Home Assistant WhatsApp 后端 (Baileys/Node.js)。使用主机网络 (端口 8066 无法更改)。

---

## 📖 关于

<a href="https://github.com/FaserF/ha-whatsapp">
</a>

<a href="https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_whatsapp" target="_blank">
</a>

> Home Assistant WhatsApp 后端 (Baileys/Node.js)。使用主机网络 (端口 8066 无法更改)。

如果您在使用此附加组件时遇到任何问题，请使用下面的链接进行报告。问题表单将预填充附加组件信息，以帮助我们更快地解决问题。

如果您有关于新功能或改进的想法，请使用下面的链接提交功能请求。表单将预填充附加组件信息。

## 🐛 报告错误

如果您在使用此附加组件时遇到任何问题，请使用下面的链接进行报告。问题表单将预填充附加组件信息，以帮助我们更快地解决问题。

**[报告错误](https://github.com/FaserF/hassio-addons/issues/new?template=bug_report.yml&version_integration=0.3.0&log_information=Please+paste+the+addon+log+output+here%3A%0A%0A)**

> [!TIP]
> **自动发现：** 此附加组件默认使用 `host_network: true`，通过 mDNS 在 Home Assistant 中启用 **"发现新设备"** 通知。这简化了设置过程，因为 HA 会自动找到该附加组件。

## 💡 功能请求

如果您有关于新功能或改进的想法，请使用下面的链接提交功能请求。表单将预填充附加组件信息。

**[请求功能](https://github.com/FaserF/hassio-addons/issues/new?template=feature_request.yml&addon_name=whatsapp)**

> [!NOTE]
> 请使用上面的链接请求功能。这确保附加组件名称会自动包含在您的功能请求中。

本项目是开源的，可在 MIT 许可证下使用。
由 **FaserF** 维护。

## 🛠️ 使用与集成

要实际发送消息并自动化 WhatsApp，您需要 Home Assistant 的 **WhatsApp 自定义集成**。

- **[官方文档与示例](https://faserf.github.io/ha-whatsapp/)**：关于如何使用 `notify` 服务、发送按钮、投票、图片以及创建机器人自动化的综合指南。

---

## ⚙️ 配置

通过 Home Assistant 附加组件页面上的 **Configuration** (配置) 标签页来配置附加组件。

### 选项

```yaml
keep_alive_interval: 30000
log_level: info
mask_sensitive_data: false
reset_session: false
send_message_timeout: 25000
ui_auth_enabled: false
ui_auth_password: ''
webhook_enabled: false
webhook_token: ''
webhook_url: ''
```

---

## 👨‍💻 致谢与许可

本项目是开源的，可在 MIT 许可证下使用。
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
