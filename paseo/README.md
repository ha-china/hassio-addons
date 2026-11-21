# Paseo

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/paseo/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_paseo)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-0.3.1-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-paseo)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 由 OmniRoute 和 OpenCode 驱动的自主 AI 代码工作室 & Web IDE。

---

> [!CAUTION]
> **实验性 / 测试版状态**
>
> 该应用程序仍处于开发阶段，且主要为个人使用而开发。
> 虽尚未进行广泛测试，但预期能够基本运行。

---

## 📖 关于

Paseo 将完整自主 AI 开发者环境的强大功能直接带入 Home Assistant OS。
与官方 VS Code / Studio Code Server 插件类似，Paseo 利用原生 Ingress 直接打开您的 Home Assistant `/config` 文件夹，且零 VNC 延迟。Paseo 由 OmniRoute 驱动，其代理可以自主分析家庭自动化设置，编写和调试复杂的自动化，修复配置错误，并提交改进。

## ✨ 亮点

- 🚀 **原生 Ingress 体验**：无需 VNC 或桌面窗口管理器开销，直接集成到 Home Assistant 的 UI 中。
- 📁 **开箱即用的自动化与配置**：默认为 `/config` 挂载为主工作区。
- 🤖 **OmniRoute AI 集成**：与 OmniRoute 连接，级联使用大语言模型（`coding-cascade`、`fast-cascade`、`reasoning-latest`）。
- 🌐 **远程控制与多代理**：暴露可选的直接端口（`6767`），以便从您的主 Oracle Cloud VM (`https://code.fabiseitz.de`)、Hermes Telegram 机器人或 Tailscale 进行远程操控。
- 🛡️ **完整本地控制权**：在您的硬件上本地运行，使用第一方凭据并提供透明的代理差异。

---

## ⚙️ 配置

通过 Home Assistant App 页面中的 **配置 (Configuration)** 标签页配置该应用。

### 选项

```yaml
cpu_priority: low
developer_recommendations: false
log_level: info
max_memory_mb: 0
model: omniroute/coding-cascade
omniroute_api_key: ''
omniroute_url: https://omniroute.fabiseitz.de/v1
remote_access: true
small_model: omniroute/fast-cascade
workspace: /homeassistant
```

---

## 👨‍💻 致谢与许可

本项目为开源项目，采用 MIT 许可。
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
