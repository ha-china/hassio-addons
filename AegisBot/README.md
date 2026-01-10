# AegisBot

![Logo](logo.png)

[![打开你的 Home Assistant 实例并显示附加组件仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_AegisBot)
[![Home Assistant 附加组件](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![Docker 镜像](https://img.shields.io/badge/docker-0.3.4-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-aegisbot)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 生产就绪的 Telegram 调制机器人，具有 AI 驱动的 FAQ 和安全功能

---

> [!CAUTION]
> **实验性 / Beta 状态**
>
> 此附加组件仍在开发中，且主要为个人使用而开发。
> 它尚未经过广泛测试，但预计基本功能可以正常工作。

---

## 📖 关于

如果您在使用此附加组件时遇到任何问题，请使用下面的链接报告它们。问题表单将预填入附加组件信息，以帮助我们更快地解决问题。

如果您有新功能或改进的想法，请使用下面的链接提交功能请求。表单将预填入附加组件信息。

## 🐛 报告错误

如果您在使用此附加组件时遇到任何问题，请使用下面的链接报告它们。问题表单将预填入附加组件信息，以帮助我们更快地解决问题。

**[报告错误](https://github.com/FaserF/hassio-addons/issues/new?template=bug_report.yml&version_integration=0.3.2&log_information=请在此处粘贴附加组件日志输出%3A%0A%0A)**

> [!NOTE]
> 请使用上面的链接报告问题。这确保了所有必要信息（附加组件名称、版本等）将自动包含在您的错误报告中。

## 💡 功能请求

如果您有新功能或改进的想法，请使用下面的链接提交功能请求。表单将预填入附加组件信息。

**[请求功能](https://github.com/FaserF/hassio-addons/issues/new?template=feature_request.yml&addon_name=AegisBot)**

> [!NOTE]
> 请使用上面的链接请求功能。这确保了附加组件名称将自动包含在您的功能请求中。

此项目是开源的，并在 MIT 许可证下提供。
由 **FaserF** 维护。

---

## ⚙️ 配置

通过 Home Assistant 附加组件页面中的 **配置** 标签配置附加组件。

### 选项

```yaml
database:
  type: sqlite
debug: false
demo_mode: false
demo_mode_type: ephemeral
developer_mode: false
github_repo: FaserF/AegisBot
github_token: ''
log_level: info
project_name: AegisBot
reset_database: false
secret_key: ''
version: latest
```

---

## 👨‍💻 致谢 & 许可证

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
