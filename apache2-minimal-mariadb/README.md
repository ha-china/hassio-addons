# 具有 MariaDB 客户端的 Apache2 最小化版本

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/apache2-minimal-mariadb/logo.png" width="100" alt="Logo" />

[![打开您的 Home Assistant 实例并显示应用仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_apache2-minimal-mariadb)
[![Home Assistant 应用](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-3.4.11-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-apache2-minimal-mariadb)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 具有 MariaDB 客户端和某些 PHP 模块的开源 Web 服务器。

---

## 📖 关于

Apache Web 服务器的此版本在性能和功能之间取得了平衡。它包含了 MariaDB 客户端以及用于数据库通信所必需的 PHP 模块，同时比完整的 Apache2 附加组件更轻量。适用于不需要全套 Apache 模块的数据库驱动应用程序。

### Apache2 变体对比

| 特性 | Apache2 (完整版) | Apache2 最小化版 | Apache2 最小化版 + MariaDB |
| :--- | :--- | :--- | :--- |
| **PHP 支持** | ✅ 是 (完整) | ❌ 否 | ✅ 是 (基础) |
| **MariaDB 客户端** | ✅ 是 | ❌ 否 | ✅ 是 |
| **资源占用** | 🖥️ 大 | ⚡ 最小 | ⚖️ 中等 |
| **最佳用途** | WordPress, 完整 CMS | 静态站点 | 简易 PHP 应用 |

---

## 🏠 Home Assistant 集成

该附加组件支持 Home Assistant 的 **Web 服务器应用** 集成。
附加组件启动时，该集成会自动安装/更新。

更多信息和配置详情，请参阅 [集成 README](https://github.com/FaserF/ha-webserver)。

---

## ⚙️ 配置

通过 Home Assistant 应用页面中的 **配置** 选项卡来配置应用。

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

本项目是开源软件，遵循 MIT 许可证。
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
