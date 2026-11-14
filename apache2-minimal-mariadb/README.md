# Apache2 Minimal with MariaDB Client

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/apache2-minimal-mariadb/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_apache2-minimal-mariadb)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-3.4.12-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-apache2-minimal-mariadb)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 带有 MariaDB 客户端和一些 PHP 模块的开源 Web 服务器。

---

## 📖 关于

这一版 Apache Web 服务器在性能与功能之间取得了平衡。它包含了 MariaDB 客户端以及用于数据库通信所需的 PHP 模块，同时相比完整的 Apache2 插件更加轻量。推荐用于不需要全套 Apache 模块的数据库驱动型应用程序。

### Apache2 变体对比

| 特性 | Apache2 (完整版) | Apache2 Minimal | Apache2 Minimal + MariaDB |
| :--- | :--- | :--- | :--- |
| **PHP 支持** | ✅ 有 (完整版) | ❌ 无 | ✅ 有 (基础版) |
| **MariaDB 客户端** | ✅ 有 | ❌ 无 | ✅ 有 |
| **占用空间** | 🖥️ 较大 | ⚡ 最小 | ⚖️ 中等 |
| **最适合用于** | WordPress，完整 CMS | 静态网站 | 简单 PHP 应用 |

---

## 🏠 Home Assistant 集成

此插件支持 Home Assistant 的 **Webserver App** 集成。
当插件启动时，该集成会自动安装/更新。

有关更多信息和配置详情，请参阅 [集成 README](https://github.com/FaserF/ha-webserver)。

---

## ⚙️ 配置

请在 Home Assistant App 页面的 **Configuration** 标签页中配置应用程序。

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

本项目是开源的，并提供 MIT 许可证。
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
