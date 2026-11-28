# Trade Republic Headless Browser

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/traderepublic/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_traderepublic)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-1.2.5-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-traderepublic)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Trade Republic Headless Browser 和 Session 提供者（WAF 解决与保持存活）。

---

## 📖 关于

# Trade Republic Headless Browser (Home Assistant 附加组件)

此 Home Assistant 附加组件提供了一个由 Chromium 和 Playwright 驱动的自动化无头浏览器服务。它解决 AWS WAF 机器人控制挑战，并为 Trade Republic 维持持久化、自动续期的会话。

## ✨ 功能特性

- 🛡️ **AWS WAF 解决：** 使用 Alpine Chromium 通过 Chrome DevTools Protocol (CDP) 原生解决 Cloudflare / AWS WAF 机器人挑战。
- 📲 **集成内设置：** 直接从 Home Assistant 集成设置流程完成身份验证（凭据 + 应用内批准/短信），无需操作应用界面。
- 📱 **现代化入口仪表盘：** 清洁的 Web UI，具有实时连接健康状态、Home Assistant 查询计数器、诊断错误警报以及一键应用内验证。
- 🔄 **保持存活与自动续期：** 使浏览器会话保持活跃，并在后台自动刷新令牌。
- 🔌 **Home Assistant 自动发现与零触摸连接：** 与 [Trade Republic Home Assistant 集成](https://github.com/FaserF/ha-traderepublic) 无缝连接，如果已激活则无需重新输入凭据。
- 🌍 **完整多语言支持：** 格式化和验证所有国际国家代码 (+49, +33, +34, +43, +41 等) 和德国国内 01... 号码。
- 📦 **自动安装与更新：** 自动安装并保持 `/config/custom_components` 中的 `ha-traderepublic` 集成最新状态。

## 🚀 安装与设置

1. 将此仓库添加到 Home Assistant 应用商店：<https://github.com/FaserF/hassio-addons>。
2. 安装 **Trade Republic Headless Browser** 并启动应用程序。
3. 在 Home Assistant 中打开 **设置 → 设备和服务**：
   - Trade Republic 集成会自动发现此应用！
   - 如果已登录，无需手机或 PIN 码即可通过一次点击连接。
   - 否则，请按照引导提示登录，并确认操作。
4. _可选:_ 通过 Ingress 打开应用的 **Web UI** 以监控状态、查看查询活动或重新进行身份验证。

## ℹ️ 会话持久化与附加组件重启

---

## ⚙️ 配置

通过在 Home Assistant 应用页面的 **配置** 选项卡配置此应用。

### 选项

```yaml
auto_install_integration: true
cache_retention_hours: 12
github_token: ''
keep_alive_interval: 60
log_level: info
webhook_enabled: false
webhook_token: ''
webhook_url: ''
```

---

## 👨‍💻 致谢与许可

本项目开源，采用 MIT 许可。
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
