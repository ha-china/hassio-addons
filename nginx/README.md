# NGINX

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/nginx/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_nginx)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-0.4.5-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-nginx)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Open Source Webserver with PHP and MariaDB.

---

> [!CAUTION]
> **Experimental / Beta Status**
>
> 此应用程序仍处于开发中，主要用于个人用途。
> 目前尚未进行广泛测试，但预计其基本功能将正常运作。

---

## 📖 简介

NGINX 是一款以其稳定性、丰富的功能集以及低资源消耗而著名的 HTTP 服务器和反向代理。此添加包向 NGINX 提供了 PHP-FPM 和 MariaDB 客户端支持，为托管复杂 Web 应用程序和处理高并发环境提供了 Apache 的现代且极快的替代方案。

---

## 🏠 Home Assistant 集成

此添加包支持 Home Assistant 的 **Webserver App** 集成。
当添加包启动时，该集成会自动安装/更新。

更多信息和配置详情，请参阅 [Integration README](https://github.com/FaserF/ha-webserver)。

---

## ⚙️ 配置

可通过 Home Assistant App 页面中的 **Configuration**（配置）选项卡配置应用程序。

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

该项目基于开源，并通过 MIT License 协议开放。
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
