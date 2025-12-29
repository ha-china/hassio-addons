# Antigravity-Server

![Logo](logo.png)

[![打开你的 Home Assistant 实例并显示添加项仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_antigravity-server)
[![Home Assistant 添加项](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![GitHub 发布](https://img.shields.io/github/v/release/FaserF/hassio-addons?include_prereleases&style=flat-square)](https://github.com/FaserF/hassio-addons/releases)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 通过 NoVNC 在你的浏览器中流式传输 Antigravity AI IDE（Linux 桌面版，使用 XFCE4）。

---

> [!CAUTION]
> **实验性 / Beta 状态**
>
> 该添加项仍在开发中，或主要为个人使用而开发。
> 它尚未经过广泛测试，但预计可以基本工作。

---

## 📖 关于

- **🖥️ 基于浏览器的桌面**: 通过 NoVNC 访问完整的 XFCE4 桌面
- **🔒 入口支持**: 通过 Home Assistant 侧边栏安全访问
- **🛠️ 预安装工具**:
  - Google Chrome
  - Git & LazyGit
  - Node.js v22.x
  - Python 3.13
  - Docker-in-Docker 支持
- **💾 持久化存储**: 用户设置和文件得以保留

## ⚠️ 要求

> **架构**: 该添加项仅支持 **amd64** 系统。
> ARM 设备（如 Raspberry Pi 等）不受上游项目的支持。

## 🚀 安装

1. 将此仓库添加到你的 **Home Assistant 添加项商店**。
1. 安装 **Antigravity-Server** 添加项。
1. 查看下方的 **配置** 选项。
1. 启动添加项。
1. 点击 **"打开 Web UI"** 以启动桌面界面。

---

## ⚙️ 配置

通过 Home Assistant 添加项页面中的 **配置** 标签配置添加项。

### 选项

```yaml
log_level: info
vnc_password: ''
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
