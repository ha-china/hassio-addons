# Planka

![Logo](logo.png)

[![Open your Home Assistant instance and show the add-on dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_planka)
[![Home Assistant Add-on](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![Docker Image](https://img.shields.io/badge/docker-0.1.1-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-planka)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Planka是一个优雅的开源项目跟踪工具

---

> [!CAUTION]
> **实验性/测试版状态**
>
> 此插件仍在开发中，主要用于个人使用。
> 目前尚未经过广泛测试，但预计可以基本运行。

---

## 📖 关于

Planka是一个优雅的开源项目跟踪工具（看板），帮助你组织项目和任务。

Planka提供了一种现代化的协作方式来管理任务，具有以下功能：

- 看板
- 实时更新
- 项目管理
- 用户头像和附件

此插件捆绑了PostgreSQL，以提供完整的自托管解决方案。

## 安装

1. 在Home Assistant插件商店中搜索“Planka”。
2. 安装插件。
3. 启动插件。

---

## ⚙️ 配置

通过Home Assistant插件页面中的**配置**选项卡配置插件。

### 选项

```yaml
certfile: fullchain.pem
keyfile: privkey.pem
log_level: info
secret_key: ''
ssl: true
```

---

## 👨‍💻 致谢与许可证

本项目是开源的，并遵循MIT许可证。
由**FaserF**维护。
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
