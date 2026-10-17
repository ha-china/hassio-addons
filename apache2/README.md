# Apache2

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/apache2/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_apache2)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-3.4.9-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-apache2)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 基于 PHP 和 MariaDB 的开源 Web 服务器。

---

## 📖 简介

Apache HTTP Server 是一个强大、灵活且健壮的开源 Web 服务器。此附加组件提供了一个预配置的 Apache2 环境，拥有完整的 PHP 支持及 MariaDB 客户端集成，非常适合直接在 Home Assistant 中托管动态网站和基于 PHP 的应用程序（如 WordPress 或自定义仪表板）。

### Apache2 变体比较

| 特性 | Apache2 (完整版本) | Apache2 精简版 | Apache2 精简版 + MariaDB |
| :--- | :--- | :--- | :--- |
| **PHP 支持** | ✅ 是 (完整) | ❌ 否 | ✅ 是 (基础) |
| **MariaDB 客户端** | ✅ 是 | ❌ 否 | ✅ 是 |
| **资源占用** | 🖥️ 较大 | ⚡ 最小 | ⚖️ 适中 |
| **适用场景** | WordPress、完整 CMS 系统 | 静态网站 | 简单 PHP 应用 |

---

## 🏠 Home Assistant 集成

此附加组件支持 Home Assistant 的 **Webserver App** 集成。
集成会在附加组件启动时自动安装或更新。

如需了解更多配置详情，请参阅 [集成说明文档](https://github.com/FaserF/ha-webserver)。

---

## ⚙️ 配置

请在 Home Assistant App 页面的 **配置** 选项卡中配置应用程序。

### 选项

```yaml
certfile: fullchain.pem
default_conf: default
default_ssl_conf: default
document_root: /share/htdocs
init_commands: []
keyfile: privkey.pem
log_level: info
php_ini: default
ssl: true
website_name: web.local
```

---

## 👨‍💻 致谢与许可证

本项目是开源的，并采用 MIT 许可证。
由 **FaserF** 维护。

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
