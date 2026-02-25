# WhatsApp

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/whatsapp/logo.png" width="100" />

[![打开您的 Home Assistant 实例并显示附加组件仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_whatsapp)
[![Home Assistant 应用](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![Docker 镜像](https://img.shields.io/badge/docker-1.3.2-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-whatsapp)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Home Assistant WhatsApp 应用 (Baileys/Node.js)。使用主机网络（端口 8066 不能更改）。

---

## 📖 关于

## ❤️ 支持此项目

> 我在业余时间维护这些附加组件，同时还有一份全职工作。测试设备需要费用，每一笔捐款都能帮助我保持独立并投入更多时间到开源工作中。
>
> 捐款完全是自愿的——但我得到的支持越多，我越不依赖其他收入，并有更多时间投入到这些项目中。

<div align="center">

</div>

<a href="https://github.com/FaserF/ha-whatsapp">
</a>

<a href="https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_whatsapp" target="_blank">
</a>

> Home Assistant WhatsApp 应用 (Baileys/Node.js)。使用主机网络（端口 8066 不能更改）。

## 🐛 报告错误

如果您在使用此应用时遇到任何问题，请使用以下链接报告它们。问题表单将预填写应用信息，以帮助我们更快地解决问题。

**[报告错误](https://github.com/FaserF/hassio-addons/issues/new?template=bug_report.yml&version_integration=0.3.0&log_information=请在此处粘贴应用的日志输出：%0A%0A)**

> [!TIP]
> **自动发现：** 此应用默认使用 `host_network: true` 来启用 Home Assistant 中的 **“发现新设备”** 通知，通过 mDNS。这简化了设置过程，因为 HA 将自动找到应用。

## 💡 功能请求

如果您有新功能或改进的想法，请使用以下链接提交功能请求。表单将预填写应用信息。

**[请求功能](https://github.com/FaserF/hassio-addons/issues/new?template=feature_request.yml&App_name=whatsapp)**

> [!NOTE]
> 请使用上述链接请求功能。这确保了应用名称将自动包含在您的功能请求中。

此项目是开源的，并在 MIT 许可证下提供。
由 **FaserF** 维护。

## 🛠️ 使用与集成

要实际发送消息并自动化 WhatsApp，您需要 Home Assistant 的 **WhatsApp 自定义集成**。

- **[官方文档与示例](https://faserf.github.io/ha-whatsapp/)**：关于如何使用 `notify` 服务、发送按钮、投票、图片以及创建机器人自动化的全面指南。

---

## ⚙️ 配置

通过 Home Assistant 应用页面中的 **配置** 标签配置附加组件。

### 选项

```yaml
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
```

---

## 👨‍💻 致谢与许可证

此项目是开源的，并在 MIT 许可证下提供。
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
