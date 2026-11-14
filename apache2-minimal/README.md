# Apache2 Minimal

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/apache2-minimal/logo.png" width="100" alt="Logo" />

[![打开您的 Home Assistant 实例并显示应用仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_apache2-minimal)
[![Home Assistant 应用](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-3.4.12-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-apache2-minimal)
![项目维护状态](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 一款不含 PHP 且仅包含必要扩展模块的开源 Web 服务器。

---

## 📖 关于

这是一个轻量级、注重安全防护的 Apache HTTP 服务器版本。该 Addon 提供一个精简版的 Web 服务器，专为静态内容和性能优化。它排除了 PHP 和额外模块，以最小化占用空间和攻击面，非常适合简单的 HTML 站点、文档或作为静态资源文件服务。

### Apache2 版本对比

| 特性 | Apache2 (完整版) | Apache2 Minimal | Apache2 Minimal + MariaDB |
| :--- | :--- | :--- | :--- |
| **PHP 支持** | ✅ 是 (完整版) | ❌ 否 | ✅ 是 (基础版) |
| **MariaDB 客户端** | ✅ 是 | ❌ 否 | ✅ 是 |
| **占用空间** | 🖥️ 较大 | ⚡ 最小 | ⚖️ 中等 |
| **最佳适用场景** | WordPress, 完整 CMS | 静态网站 | 简单 PHP 应用 |

---

## 🏠 Home Assistant 集成

此 Addon 支持 Home Assistant 的 **Webserver App** 集成。
当 Addon 启动时，集成会自动安装/更新。

如需更多信息和配置详情，请参阅 [集成 README](https://github.com/FaserF/ha-webserver)。

---

## ⚙️ 配置

通过 Home Assistant App 页面的 **Configuration** 选项卡配置该应用。

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

## 👨‍💻 致谢与许可

本项目是开源的，遵循 MIT 许可协议。
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
