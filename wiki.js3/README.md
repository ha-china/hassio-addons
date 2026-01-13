# Wiki.JS (版本 3 - Alpha)

![Logo](logo.png)

[![打开你的 Home Assistant 实例并显示插件仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_wiki.js3)
[![Home Assistant 插件](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![Docker 镜像](https://img.shields.io/badge/docker-0.5.0-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-wiki)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 最强大和可扩展的开源 Wiki 软件（版本 3 - Alpha）

---

> [!警告]
> **实验性 / Beta 状态**
>
> 此插件仍在开发中，主要用于个人使用。
> 目前尚未进行广泛测试，但预计可以基本运行。

---

## 📖 关于

如果您在使用此插件时遇到任何问题，请使用下面的链接进行报告。问题表单将预填入插件信息，以帮助我们更快地解决问题。

如果您有新功能或改进的想法，请使用下面的链接提交功能请求。表单将预填入插件信息。

## 🐛 报告错误

如果您在使用此插件时遇到任何问题，请使用下面的链接进行报告。问题表单将预填入插件信息，以帮助我们更快地解决问题。

**[报告错误](https://github.com/FaserF/hassio-addons/issues/new?template=bug_report.yml&version_integration=0.2.0&log_information=请在此处粘贴插件的日志输出：%0A%0A)**

> [!注意]
> 请使用上面的链接报告问题。这确保了所有必要信息（插件名称、版本等）会自动包含在您的错误报告中。

## 💡 功能请求

如果您有新功能或改进的想法，请使用下面的链接提交功能请求。表单将预填入插件信息。

**[请求功能](https://github.com/FaserF/hassio-addons/issues/new?template=feature_request.yml&addon_name=wiki.js3)**

> [!注意]
> 请使用上面的链接请求功能。这确保了插件名称会自动包含在您的功能请求中。

本项目是开源的，并在 MIT 许可证下提供。
由 **FaserF** 维护。

## 🏁 首次启动

首次启动时，系统将提示您进行管理设置向导。向导将指导您完成 Wiki 连接的初始配置以及管理员账户的创建。

在此过程中，请创建您自己的 **管理员账户**（邮箱 / 密码）。

### 默认数据库凭证

插件预配置了一个本地 PostgreSQL 数据库。`wiki` 数据库用户的默认密码是：

- **密码**: `wikijs`（这是数据库密码，不是您的管理员登录密码）

---

## ⚙️ 配置

通过 Home Assistant 插件页面中的 **配置** 选项卡配置插件。

### 选项

```yaml
certfile: fullchain.pem
db_password: wikijs
keyfile: privkey.pem
log_level: info
reset_database: false
reset_database_confirm: false
ssl: true
```

---

## 👨‍💻 致谢 & 许可证

本项目是开源的，并在 MIT 许可证下提供。
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
