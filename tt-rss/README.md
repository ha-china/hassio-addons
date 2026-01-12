# Tiny Tiny RSS

![Logo](logo.png)

[![Open your Home Assistant instance and show the add-on dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_tt-rss)
[![Home Assistant Add-on](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![Docker Image](https://img.shields.io/badge/docker-1.1.0-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-tt-rss)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> A web-based news feed (RSS/Atom) reader and aggregator

---

## 📖 About

Tiny Tiny RSS 是一个免费且开源的基于网络的新闻订阅（RSS/Atom）阅读器和聚合器。

此插件提供了一个自托管的 Tiny Tiny RSS (TT-RSS) 实例。它设计得轻量级且快速，使用 Alpine Linux、Nginx 和 PHP 8.3。

**注意：** 此插件需要一个数据库。您应该将其配置为连接到 MariaDB 或 PostgreSQL 实例（可以是另一个插件或外部实例）。

## Installation

1. 在 Home Assistant 插件商店中搜索 "Tiny Tiny RSS"。
2. 安装插件。
3. 配置数据库连接设置（见下方配置）。
4. 启动插件。

---

## ⚙️ Configuration

通过 Home Assistant 插件页面中的 **配置** 选项卡配置插件。

### 选项

```yaml
certfile: fullchain.pem
keyfile: privkey.pem
log_level: info
self_url: ''
ssl: false
```

---

## 👨‍💻 Credits & License

该项目是开源的，并根据 MIT 许可证提供。
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
