# AegisBot

![AegisBot 标志](https://raw.githubusercontent.com/FaserF/hassio-addons/master/AegisBot/logo.png) width="100" alt="Logo" />

[![打开您的 Home Assistant 实例并显示插件仪表板](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_AegisBot)
[![Home Assistant 应用](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-0.5.1-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-aegisbot)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 专业 Telegram 群组守护者 — 高级安全，自动化管理，社区管理。

---

> [!警告]
> **实验性/测试版状态**
>
> 此插件仍在开发中，或主要用于个人使用。
> 它尚未经过广泛测试，但预计基本功能可以正常工作。

---

## 📖 关于

## ❤️ 支持此项目

> 我在**业余时间**维护所有这些插件，同时还有一份正常的工作。测试设备需要花费金钱，每一笔捐赠都帮助我保持独立，并将更多时间投入到开源工作中。
>
> 捐赠完全是自愿的 — 但我收到的支持越多，我就越少依赖其他收入，就能将更多时间投入到这些项目中。

<div align="center">

</div>

> [!警告]
> **实验性/测试版状态**
>
> 此插件仍在开发中，或主要用于个人使用。
> 它尚未经过广泛测试，但预计基本功能可以正常工作。

## 🐛 报告一个错误

如果您在此应用程序中遇到任何问题，请使用以下链接报告。问题表单将预先填写应用程序信息，以帮助我们更快地解决问题。

**[报告一个错误](https://github.com/FaserF/hassio-addons/issues/new?template=bug_report.yml&version_integration=0.3.2&log_information=请+粘贴+应用程序+日志+输出+在这里%3A%0A%0A)**

> [!注意]
> 请使用上面的链接来报告问题。这确保了所有必要的信息（应用程序名称、版本等）自动包含在您的错误报告中。

## 💡 功能请求

如果您有一个新功能或改进的想法，请使用以下链接提交功能请求。表单将预先填写应用程序信息。

**[请求一个功能](https://github.com/FaserF/hassio-addons/issues/new?template=feature_request.yml&App_name=AegisBot)**

> [!注意]
> 请使用上面的链接来请求功能。这确保了应用程序名称自动包含在您的功能请求中。

此项目是开源的，并可在 MIT 许可证下使用。
由 **FaserF** 维护。

---

## ⚙️ 配置

通过 Home Assistant 应用程序页面中的**配置**选项卡配置此插件。

### 选项

```yaml
ai_model: gpt-3.5-turbo
ai_provider: gemini
database:
  type: sqlite
debug: false
default_locale: en
demo_mode: false
demo_mode_type: ephemeral
developer_mode: false
environment: production
gemini_api_key: ''
github_repo: FaserF/AegisBot
github_token: ''
log_level: info
openai_api_key: ''
project_name: AegisBot
release_type: stable
reset_database: false
secret_key: ''
security_scan_api_key: ''
telegram_bot_token: ''
telegram_bot_username: ''
version: latest
```

---

## 👨‍💻 贡献者与许可证

此项目是开源的，并可在 MIT 许可证下使用。
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
