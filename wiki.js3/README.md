# Wiki.JS V3 (Beta)

![Logo](logo.png)

[![Open your Home Assistant instance and show the add-on dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_wiki.js3)
[![Home Assistant Add-on](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![Docker Image](https://img.shields.io/badge/docker-0.3.3-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-wiki)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 最强大和可扩展的开源 Wiki 软件（版本 3 - Beta）

---

> [!CAUTION]
> **实验性 / Beta 状态**
>
> 此插件仍在开发中，或主要为个人使用而开发。
> 它尚未经过广泛测试，但预计可以基本运行。

---

## 📖 关于

如果您在使用此插件时遇到任何问题，请使用下面的链接报告。问题表单将预填写插件的详细信息，以帮助我们更快地解决问题。

如果您有新功能或改进的想法，请使用下面的链接提交功能请求。表单将预填写插件的详细信息。

## 🐛 报告错误

如果您在使用此插件时遇到任何问题，请使用下面的链接报告。问题表单将预填写插件的详细信息，以帮助我们更快地解决问题。

**[报告错误](https://github.com/FaserF/hassio-addons/issues/new?template=bug_report.yml&version_integration=0.2.0&log_information=请在此处粘贴插件日志输出：%0A%0A)**

> [!NOTE]
> 请使用上面的链接报告问题。这确保了所有必要的信息（插件名称、版本等）将自动包含在您的错误报告中。

## 💡 功能请求

如果您有新功能或改进的想法，请使用下面的链接提交功能请求。表单将预填写插件的详细信息。

**[请求功能](https://github.com/FaserF/hassio-addons/issues/new?template=feature_request.yml&addon_name=wiki.js3)**

> [!NOTE]
> 请使用上面的链接请求功能。这将确保插件名称将自动包含在您的功能请求中。

此项目是开源的，并在 MIT 许可证下提供。
由 **FaserF** 维护。

## 🏁 首次启动

首次启动时，您将看到一个管理设置向导。向导将指导您完成 Wiki 连接的初始配置以及管理员账户的创建。

在此过程中，请创建您自己的 **管理员账户**（电子邮件 / 密码）。

### 默认数据库凭证

插件预配置了一个本地 PostgreSQL 数据库。`wiki` 数据库用户的默认密码是：

- **密码**：`wikijs`（这是数据库密码，不是您的管理员登录密码）

---

## ⚙️ 配置

通过 Home Assistant 插件页面中的 **配置** 标签配置插件。

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
