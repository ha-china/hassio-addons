# Apache2

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/apache2/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_apache2)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-3.4.7-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-apache2)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 带有 PHP 和 MariaDB 的开源 Web 服务器。

---

## 📖 关于

Apache HTTP Server 是一个功能强大、灵活且稳健的开源 Web 服务器。此附加组件提供了一个预配置的 Apache2 环境，具备完整的 PHP 支持和 MariaDB 客户端集成，非常适合直接在 Home Assistant 中托管动态网站和基于 PHP 的应用程序（如 WordPress 或自定义仪表盘）。

### Apache2 变体比较

| 特性 | Apache2 (完整版) | Apache2 精简版 | Apache2 精简版 + MariaDB |
| :--- | :--- | :--- | :--- |
| **PHP 支持** | ✅ 有 (完整) | ❌ 无 | ✅ 有 (基础) |
| **MariaDB 客户端** | ✅ 有 | ❌ 无 | ✅ 有 |
| **占用大小** | 🖥️ 大 | ⚡ 最小 | ⚖️ 中等 |
| **适用于** | WordPress，完整 CMS | 静态网站 | 简单的 PHP 应用 |

---

## 🏠 Home Assistant 集成

此附加组件支持 Home Assistant 的 **Webserver App** 集成。
当附加组件启动时，集成会自动安装/更新。

如需更多信息和配置详情，请参阅 [集成 README](https://github.com/FaserF/ha-webserver)。

---

## ⚙️ 配置

通过 Home Assistant App 页面中的 **Configuration** 选项卡配置应用程序。

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

本项目是开源项目，采用 MIT 许可授权。
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
