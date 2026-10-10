# NGINX

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/nginx/logo.png" width="100" alt="Logo" />

[![在 Home Assistant 实例中打开并显示应用程序仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_nginx)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-0.4.5-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-nginx)
![项目管理](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 一款基于开源的 Web 服务器，支持 PHP 和 MariaDB。

---

> [!CAUTION]
> **实验性 / 测试版状态**
>
> 此应用程序仍处于开发中/主要供个人使用。
> 尚未进行广泛测试，但预期基本功能正常。

---

## 📖 简介

NGINX 是一款以稳定性、丰富的功能集和低资源消耗闻名的高性能 HTTP 服务器和反向代理服务器。该附加组件为 NGINX 提供了 PHP-FPM 和 MariaDB 客户端支持，为运行复杂 Web 应用程序和高并发环境提供了一种现代且极其快速的替代方案，优于 Apache。

---

## 🏠 Home Assistant 集成

该附加组件支持 Home Assistant 的 **Web 服务器应用程序** 集成。
集成会在附加组件启动时自动安装/更新。

有关更多信息和配置详情，请参阅 [集成 README](https://github.com/FaserF/ha-webserver)。

---

## ⚙️ 配置

请在 Home Assistant 应用程序页面的 **配置** 选项卡中配置该应用程序。

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
ssl: false
website_name: web.local
```

---

## 👨‍💻 致谢与许可

该项目是一个开源项目，采用 MIT 许可。
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
