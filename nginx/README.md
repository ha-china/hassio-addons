# NGINX

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/nginx/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_nginx)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-0.4.8-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-nginx)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 基于 PHP 和 MariaDB 的开源 Web 服务器。

---

> [!CAUTION]
> **实验性/测试状态**
>
> 此应用程序仍在开发中，主要用于个人使用。
> 目前尚未进行广泛测试，但预期能基本正常工作。

---

## 📖 简介

NGINX 是一款以稳定性、丰富的功能集和低资源消耗而闻名的高性能 HTTP 服务器和反向代理。此附加组件为 NGINX 提供了 PHP-FPM 和 MariaDB 客户端支持，为托管复杂 Web 应用程序和处理高并发环境提供了一个现代且速度极快的替代方案 Apache。

---

## 🏠 Home Assistant 集成

此附加组件支持 Home Assistant 的 **Webserver 应用** 集成。
附加组件启动时会自动安装/更新该集成。

有关更多信息和配置详情，请参阅 [集成说明](https://github.com/FaserF/ha-webserver)。

---

## ⚙️ 配置

请在 Home Assistant 应用页面的 **配置** 选项卡中配置该应用程序。

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

该项目是开源的，并在 MIT 许可下提供。
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
