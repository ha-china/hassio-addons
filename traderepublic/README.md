# Trade Republic 无头浏览器

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/traderepublic/logo.png" width="100" alt="Logo" />

[![打开您的 Home Assistant 实例并显示应用程序仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_traderepublic)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-1.1.2-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-traderepublic)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Trade Republic 无头浏览器与会话提供者（WAF 解决与保持活跃）。

---

## 📖 关于

﻿# Trade Republic 无头浏览器 (Home Assistant 附加组件)

此 Home Assistant 附加组件提供了一个由 Chromium 和 Playwright 驱动的自动化无头浏览器服务。它解决 AWS WAF 机器人控制挑战，并为 Trade Republic 维护持久、自动刷新的会话。

## ✨ 功能特性

- 🛡️ **AWS WAF 解决：** 使用 Alpine Chromium 通过 Chrome DevTools Protocol (CDP) 原生解决 Cloudflare/AWS WAF 机器人挑战。
- 📲 **集成内设置：** 完整的身份验证（凭据 + 应用中批准/短信）可直接从 Home Assistant 集成设置流程中完成，无需触碰 App UI。
- 📱 **现代化入口仪表板：** 简洁的 Web UI，包含实时连接健康状态、Home Assistant 查询计数器、诊断错误警报和一键应用中验证。
- 🔄 **保持活跃与自动续期：** 保持浏览器会话活跃，并在后台自动刷新 Token。
- 🔌 **Home Assistant 自动发现与零触控连接：** 无缝连接 [Trade Republic Home Assistant 集成](https://github.com/FaserF/ha-traderepublic)，如果已激活则无需重新输入凭据即可一键连接。
- 🌍 **全面国际支持：** 格式化和验证所有国际国家代码 (+49, +33, +34, +43, +41 等) 以及德国本地 01... 号码。
- 📦 **自动安装与更新：** 自动安装并将在 `/config/custom_components` 中保持 `ha-traderepublic` 集成为最新状态。

## 🚀 安装与设置

1. 将此存储库添加到 Home Assistant 应用商店：<https://github.com/FaserF/hassio-addons>。
2. 安装 **Trade Republic 无头浏览器** 并启动应用程序。
3. 在 Home Assistant 中打开 **设置 → 设备与服务**：
   - Trade Republic 集成将自动发现应用程序！
   - 如果已登录，则无需电话或 PIN 码，点击一次即可连接。
   - 否则，请按照引导提示登录并在智能手机上确认。
4. _可选：_ 通过入口 (Ingress) 打开应用程序的 **Web UI** 以监控状态、查看查询活动或重新进行身份验证。

## ℹ️ 会话持久性与附加组件重启

---

## ⚙️ 配置

通过 Home Assistant 应用页面的 **配置** 选项卡配置应用程序。

### 选项

```yaml
auto_install_integration: true
cache_retention_hours: 12
github_token: ''
keep_alive_interval: 60
log_level: info
```

---

## 👨‍💻 Credits 与许可

此项目是开源的，并根据 MIT 许可证提供。
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
