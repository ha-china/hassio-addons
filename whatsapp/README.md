# WhatsApp

![Logo](logo.png)

[![Open your Home Assistant instance and show the add-on dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_whatsapp)
[![Home Assistant Add-on](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![GitHub Release](https://img.shields.io/github/v/release/FaserF/hassio-addons?include_prereleases&style=flat-square)](https://github.com/FaserF/hassio-addons/releases)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Home Assistant WhatsApp Backend (Baileys/Node.js)

---

> [!CAUTION]
> **Experimental / Beta Status**
>
> This add-on is still in development and/or primarily developed for personal use.
> It is not extensively tested yet, but is expected to work fundamentally.

---

## 📖 About

> **A lightweight, robust backend for the WhatsApp Integration in Home Assistant.**
> Powered by [Baileys](https://github.com/WhiskeySockets/Baileys) and Node.js. 🚀

This addon acts as a bridge between Home Assistant and the WhatsApp Web
protocol. It runs a high-performance Node.js application that simulates a real
WhatsApp client (like a browser), allowing you to send messages, images, and
notifications directly from your smart home.

### ✨ Key Features

- **🚀 Ultra Fast**: Built on Node.js 22 and the lightweight Baileys library
  (no heavy Chrome/Puppeteer required!).
- **🔒 Secure & Private**: Runs locally on your device. No cloud bridge, no
  external API costs.
- **💾 Persistent Session**: Stays logged in even after restarts.
- **🐳 Docker Optimized**: Platinum Quality image (S6 Overlay, Alpine Base).

## 🛠️ Installation

1. **Add Repository**: Add this repository to your Home Assistant Add-on Store.
1. **Install**: Search for **"WhatsApp"** and click **Install**.
1. **Start**: Click **Start**. Wait a few seconds for the logs to show "API
   listening".
1. **Watchdog**: Enable "Watchdog" to ensure high availability.

---

## ⚙️ Configuration

Configure the add-on via the **Configuration** tab in the Home Assistant add-on page.

### Options

```yaml
log_level: info
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
