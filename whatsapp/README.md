# WhatsApp

![Logo](logo.png)

[![打开你的 Home Assistant 实例并显示附加组件仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_whatsapp)
[![Home Assistant 附加组件](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![GitHub 发布](https://img.shields.io/github/v/release/FaserF/hassio-addons?include_prereleases&style=flat-square)](https://github.com/FaserF/hassio-addons/releases)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Home Assistant WhatsApp 后端 (Baileys/Node.js)

---

> [!CAUTION]
> **实验性 / Beta 状态**
>
> 此附加组件仍在开发中，并且主要用于个人使用。
> 它尚未经过广泛测试，但预计基本功能可以正常工作。

---

## 📖 关于

> **Home Assistant WhatsApp 集成的一个轻量级、强大的后端。**
> 由 [Baileys](https://github.com/WhiskeySockets/Baileys) 和 Node.js 驱动。 🚀

此附加组件充当 Home Assistant 和 WhatsApp Web 协议之间的桥梁。它运行一个高性能的 Node.js 应用程序，模拟一个真实的 WhatsApp 客户端（如浏览器），允许您直接从智能家居发送消息、图片和通知。

### ✨ 主要功能

- **🚀 超快**: 基于 Node.js 22 和轻量级的 Baileys 库（无需沉重的 Chrome/Puppeteer！）。
- **🔒 安全与隐私**: 在您的设备本地运行。无云桥接，无外部 API 成本。
- **💾 持久会话**: 即使在重启后也能保持登录状态。
- **🐳 Docker 优化**: 白金质量镜像（S6 Overlay，Alpine 基础）。

## 🛠️ 安装

1. **添加仓库**: 将此仓库添加到您的 Home Assistant 附加组件商店。
1. **安装**: 搜索 **"WhatsApp"** 并点击 **安装**。
1. **启动**: 点击 **启动**。等待几秒钟，直到日志显示 "API 监听"。
1. **看门狗**: 启用 "看门狗" 以确保高可用性。

---

## ⚙️ 配置

通过 Home Assistant 附加组件页面中的 **配置** 选项卡配置附加组件。

### 选项

```yaml
log_level: info
```

---

## 👨‍💻 致谢与许可

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
