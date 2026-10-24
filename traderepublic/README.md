# Trade Republic 无头浏览器

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/traderepublic/logo.png" width="100" alt="Logo" />

[![打开您的 Home Assistant 实例并显示应用仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_traderepublic)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-1.2.0-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-traderepublic)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Trade Republic 无头浏览器与会话提供商（WAF 解决与保持连接）。

---

## 📖 简介

# Trade Republic 无头浏览器 (Home Assistant 插件)

此 Home Assistant 插件提供由 Chromium 和 Playwright 驱动的自动化无头浏览器服务。它解决了 AWS WAF Bot 挑战，并为 Trade Republic 维持持久且自动刷新的会话。

## ✨ 功能特性

- 🛡️ **AWS WAF 解决：** 原生使用 Alpine Chromium 通过 Chrome DevTools Protocol (CDP) 解决 Cloudflare / AWS WAF Bot 挑战。
- 📲 **集成内设置：** 无需操作应用 UI，即可直接从 Home Assistant 集成设置流程完成完整认证（凭据 + 应用内批准/短信）。
- 📱 **现代网关仪表板：** 拥有清晰 Web UI，提供实时连接健康状态、Home Assistant 查询计数、诊断错误警报以及一键应用内验证。
- 🔄 **保持连接与自动续期：** 保持浏览器会话活跃，并在后台自动刷新令牌。
- 🔌 **Home Assistant 自动发现和零触点连接：** 若凭据已输入且处于活动状态，可无缝连接 Trade Republic Home Assistant 集成，无需重新输入凭据。
- 🌍 **全面国际化支持：** 格式化并验证所有国际国家代码 (+49, +33, +34, +43, +41 等) 及德国本土 01... 号码。
- 📦 **自动安装与更新：** 自动安装并保持 `/config/custom_components` 中的 `ha-traderepublic` 集成为最新版本。

## 🚀 安装与设置

1. 将此仓库添加到 Home Assistant 应用商店：<https://github.com/FaserF/hassio-addons>。
2. 安装 **Trade Republic 无头浏览器** 并启动应用。
3. 在 Home Assistant 中打开 **设置 → 设备与服务**：
   - Trade Republic 集成将自动发现此应用！
   - 若已登录，它将通过点击连接，无需手机短信或 PIN 码验证。
   - 否则，请按照引导提示登录并确认您的手机。
4. _可选:_ 通过网关打开应用的 **Web UI** 以监控状态、审查查询活动或重新认证。

## ℹ️ 会话持久化与插件重启

---

## ⚙️ 配置

通过 Home Assistant 应用页面上的 **配置** 选项卡配置此应用。

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

本项目采用开源方式发布，并采用 MIT 许可证。
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
