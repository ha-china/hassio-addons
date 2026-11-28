# Paseo

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/paseo/logo.png" width="100" alt="Logo" />

[![打开您的 Home Assistant 实例并显示应用程序仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_paseo)
[![Home Assistant 应用](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-0.3.2-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-paseo)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 由 OmniRoute 和 OpenCode 驱动的自主 AI 代码工作室与 Web IDE。

---

> [!CAUTION]
> **实验 / 测试版状态**
>
> 此应用程序仍处于开发中，或主要用于个人使用。
> 它尚未经过全面测试，但预计将基本工作。

---

## 📖 关于

Paseo 将完整自主 AI 开发者环境的所有功能直接带入 Home Assistant OS。
就像官方的 VS Code / Studio Code Server 附加组件一样，Paseo 使用原生入口（Ingress）直接打开 Home Assistant 的 `/config` 文件夹，无需 VNC 延迟。由 OmniRoute 驱动，Paseo 代理可以自主分析您的家庭自动化设置，编写和调试复杂的自动化，修复配置错误，并提交改进。

## ✨ 亮点

- 🚀 **原生入口体验**：直接集成到 Home Assistant 的 UI 中，无需任何 VNC 或桌面窗口管理器开销。
- 📁 **开箱即用的自动化与配置文件**：默认挂载 `/config` 作为主要工作区。
- 🤖 **OmniRoute AI 集成**：通过级联 LLM 模型（`coding-cascade`、`fast-cascade`、`reasoning-latest`）连接 OmniRoute。
- 🌐 **远程控制与多智能体**：提供一个可选的直接端口 (`6767`)，以便从您的主 Oracle Cloud VM (`https://code.fabiseitz.de`)、Hermes 电报机器人或跨 Tailscale 进行远程操控。
- 🛡️ **完整本地控制**：在您的硬件上本地运行，使用原厂凭据并具有透明的代理差异。

---

## ⚙️ 配置

通过 Home Assistant 应用页面中的 **配置** 选项卡配置此应用程序。

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

## 👨‍💻 荣誉 & 许可

该项目是开源的，并采用 MIT 许可。
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
