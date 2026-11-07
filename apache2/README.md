# Apache2

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/apache2/logo.png" width="100" alt="Logo" />

[![打开你的 Home Assistant 实例并显示应用仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_apache2)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-3.4.11-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-apache2)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 开源 Web 服务器，支持 PHP 和 MariaDB。

---

## 📖 关于

Apache HTTP Server 是一个功能强大、灵活且稳健的开源 Web 服务器。此组件提供了预配置的 Apache2 环境，完整支持 PHP 并与 MariaDB 客户端集成，使其非常适合直接在 Home Assistant 中托管动态网站和基于 PHP 的应用程序（如WordPress或自定义仪表板）。

### Apache2 变体对比

| 功能 | Apache2 (完整版) | Apache2 精简版 | Apache2 精简版 + MariaDB |
| :--- | :--- | :--- | :--- |
| **PHP 支持** | ✅ 是（完整） | ❌ 否 | ✅ 是（基础） |
| **MariaDB 客户端** | ✅ 是 | ❌ 否 | ✅ 是 |
| **占用内存** | 🖥️ 大 | ⚡ 最小 | ⚖️ 中等 |
| **适用场景** | WordPress、完整 CMS | 静态网站 | 简单 PHP 应用 |

---

## 🏠 Home Assistant 集成

此组件支持 Home Assistant 的 **Web 服务器应用** 集成。
当组件启动时，该集成会自动安装或更新。

如需了解更多信息和配置详情，请参阅 [集成 README](https://github.com/FaserF/ha-webserver)。

---

## ⚙️ 配置

请通过 Home Assistant 应用页面的 **配置** 选项卡来配置该应用。

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

该项目是开源项目，依据 MIT 许可证提供。
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
