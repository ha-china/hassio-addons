# Tiny Tiny RSS

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/tt-rss/logo.png" width="100" />

[![Open your Home Assistant instance and show the add-on dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_tt-rss)
[![Home Assistant Add-on](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![Docker Image](https://img.shields.io/badge/docker-1.2.0-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-tt-rss)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> A web-based news feed (RSS/Atom) reader and aggregator

---

## 📖 About

Tiny Tiny RSS is a free and open-source web-based news feed (RSS/Atom) reader and aggregator.

This add-on provides a self-hosted instance of Tiny Tiny RSS (TT-RSS). It is designed to be lightweight and fast, using Alpine Linux, Nginx, and PHP 8.3.

**Note:** This add-on requires a database. You should configure it to connect to a MariaDB or PostgreSQL instance (either another add-on or external).

## Installation

1. Search for "Tiny Tiny RSS" in the Home Assistant Add-on Store.
2. Install the add-on.
3. Configure the database connection settings (see Configuration below).
4. Start the add-on.

---

## ⚙️ Configuration

Configure the add-on via the **Configuration** tab in the Home Assistant add-on page.

### Options

```yaml
certfile: fullchain.pem
keyfile: privkey.pem
log_level: info
self_url: ''
ssl: false
```

---

## 👨‍💻 Credits & License

This project is open-source and available under the MIT License.
Maintained by **FaserF**.

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
