# Planka

![Logo](logo.png)

[![Open your Home Assistant instance and show the add-on dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_planka)
[![Home Assistant Add-on](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![Docker Image](https://img.shields.io/badge/docker-1.1.0-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-planka)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Planka 是一个优雅的开源项目跟踪工具

---

## 📖 关于

Planka 是一个优雅的开源项目跟踪工具（看板），它帮助您组织项目和任务。

Planka 提供了一种现代、协作的方式来管理任务，具有以下功能：

- 看板
- 实时更新
- 项目管理
- 用户头像和附件

此插件捆绑了 PostgreSQL，以提供完整的自托管解决方案。

## 安装

1. 在 Home Assistant 插件商店中搜索 "Planka"。
2. 安装插件。
3. 启动插件。

---

## ⚙️ 配置

通过 Home Assistant 插件页面中的 **配置** 标签配置插件。

### 选项

```yaml
base_url: ''
certfile: fullchain.pem
keyfile: privkey.pem
log_level: info
secret_key: ''
ssl: false
```

---

## 👨‍💻 致谢与许可证

本项目是开源的，并在 MIT 许可证下提供。
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
