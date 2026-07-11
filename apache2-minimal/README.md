# Apache2 最小化配置

![Apache2 最小化配置 Logo](https://raw.githubusercontent.com/FaserF/hassio-addons/master/apache2-minimal/logo.png) 

[![打开您的 Home Assistant 实例并显示应用仪表板](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_apache2-minimal)
[![Home Assistant 应用](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-3.4.3-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-apache2-minimal)
![项目维护者](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 一个没有 PHP 和最小额外模块的开源 Web 服务器。

---

## 📖 关于

Apache HTTP Server 的轻量级、安全版本。此插件提供了一个针对静态内容和性能优化的基础 Web 服务器。它排除了 PHP 和额外模块，以最小化占用空间和攻击面，非常适合简单的 HTML 网站、文档或托管资产。

### Apache2 变体比较

| 功能 | Apache2 (完整版) | Apache2 最小化配置 | Apache2 最小化配置 + MariaDB |
| :--- | :--- | :--- | :--- |
| **PHP 支持** | ✅ 是（完整版） | ❌ 否 | ✅ 是（基本） |
| **MariaDB 客户端** | ✅ 是 | ❌ 否 | ✅ 是 |
| **占用空间** | 🖥️ 大 | ⚡ 最小 | ⚖️ 中等 |
| **最佳用途** | WordPress、完整内容管理系统 | 静态网站 | 简单 PHP 应用 |

---

## 🏠 Home Assistant 集成

此插件支持 Home Assistant 的 **Web 服务器应用** 集成。
当插件启动时，集成会自动安装/更新。

有关更多信息和管理细节，请参阅 [集成 README](https://github.com/FaserF/ha-webserver)。

---

## ⚙️ 配置

通过 Home Assistant 应用页面中的 **配置** 选项卡来配置此应用。

### 选项

```yaml
certfile: fullchain.pem
default_conf: default
default_ssl_conf: default
document_root: /share/htdocs
init_commands: []
keyfile: privkey.pem
log_level: info
ssl: true
website_name: web.local
```

---

## 👨‍💻 致谢与许可证

此项目是开源的，并使用 MIT 许可证发布。
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
