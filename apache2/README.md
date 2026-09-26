# Apache2

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/apache2/logo.png" width="100" alt="Logo" />

[![打开您的 Home Assistant 实例并显示应用程序仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_apache2)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-3.4.7-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-apache2)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 带有 PHP 和 MariaDB 的开源 Web 服务器。

---

## 📖 关于

Apache HTTP 服务器是一款功能强大、灵活且健壮的开源 Web 服务器。该附加组件提供了一个预配置的 Apache2 环境，支持完整的 PHP 功能并集成 MariaDB 客户端，非常适合作为 Home Assistant 内直接托管动态网站和基于 PHP 的应用程序（如 WordPress 或自定义仪表板）的平台。

### Apache2 变体比较

| 功能特性 | Apache2 (完整版) | Apache2 精简版 | Apache2 精简版 + MariaDB |
| :--- | :--- | :--- | :--- |
| **PHP 支持** | ✅ 支持 (完整版) | ❌ 不支持 | ✅ 支持 (基础版) |
| **MariaDB 客户端** | ✅ 支持 | ❌ 不支持 | ✅ 支持 |
| **占用空间** | 🖥️ 较大 | ⚡ 最小 | ⚖️ 中等 |
| **最佳适用场景** | WordPress、完整 CMS | 静态网站 | 简单 PHP 应用 |

---

## 🏠 Home Assistant 集成

该附加组件支持 Home Assistant 的 **Web 服务器 (Webserver)** 应用集成。
当附加组件启动时，集成将自动安装/更新。

如需了解更多信息和配置细节，请参阅 [集成 README](https://github.com/FaserF/ha-webserver)。

---

## ⚙️ 配置

请在 Home Assistant 应用页面的 **配置 (Configuration)** 选项卡中配置该应用。

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

本项目是开源的，按 MIT 许可协议分发。
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
