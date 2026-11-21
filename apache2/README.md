# Apache2

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/apache2/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_apache2)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-3.4.13-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-apache2)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 带有 PHP 和 MariaDB 的开源 Web 服务器。

---

## 📖 简介

Apache HTTP Server 是一个功能强大、灵活且坚固的开源 Web 服务器。此-addon 提供了一个预配置的 Apache2 环境，支持完整的 PHP 支持及 MariaDB 客户端集成，非常适合在 Home Assistant 内部直接托管动态网站和基于 PHP 的应用程序（如 WordPress 或自定义仪表板）。

### Apache2 版本对比

| 功能 | Apache2 (完整版) | Apache2 精简版 | Apache2 精简版 + MariaDB |
| :--- | :--- | :--- | :--- |
| **PHP 支持** | ✅ 有（完整版） | ❌ 无 | ✅ 有（基础版） |
| **MariaDB 客户端** | ✅ 有 | ❌ 无 | ✅ 有 |
| **资源占用** | 🖥️ 较大 | ⚡ 最小 | ⚖️ 中等 |
| **适用场景** | WordPress、完整 CMS | 静态网站 | 简单 PHP 应用 |

---

## 🏠 Home Assistant 集成

此-addon 支持 Home Assistant 中的 **Webserver App** 集成。
当该-addon 启动时，会自动安装/更新该集成。

获取更多信息和配置详情，请查阅 [集成 README](https://github.com/FaserF/ha-webserver)。

---

## ⚙️ 配置

通过 Home Assistant App 页面中的 **Configuration** 标签页配置此应用。

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

## 👨‍💻 致谢与许可

此项目是开源的，并采用 MIT 许可。
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
