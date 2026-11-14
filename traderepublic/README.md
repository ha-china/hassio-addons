# Trade Republic 无头浏览器

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/traderepublic/logo.png" width="100" alt="Logo" />

[![在您的 Home Assistant 实例中打开并显示应用仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_traderepublic)
[![Home Assistant 应用](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-1.2.3-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-traderepublic)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Trade Republic 无头浏览器与会话提供者（WAF 解析器与保持连接）。

---

## 📖 简介

# Trade Republic 无头浏览器 (Home Assistant 补充包)

这款 Home Assistant 补充包提供了一项由 Chromium 和 Playwright 驱动的全自动无头浏览器服务。它解决了 AWS WAF 机器人控制挑战，并为 Trade Republic 提供持久且不断自动刷新会话的能力。

## ✨ 特性

- 🛡️ **AWS WAF 解析：** 直接使用基于 Alpine Chromium 的 Chrome DevTools Protocol (CDP) 原生解决 Cloudflare / AWS WAF 机器人挑战。
- 📲 **集成内置设置：** 无需触摸应用程序界面，直接从 Home Assistant 集成设置流中完成完整认证（凭据 + 应用内确认/短信）。
- 📱 **现代化接入仪表板：** 整洁的 Web 界面，包含实时连接健康状态、Home Assistant 查询计数器、诊断错误警报以及一键应用内验证。
- 🔄 **保持连接与自动续期：** 使浏览器会话保持存活，并在后台自动刷新令牌。
- 🔌 **Home Assistant 自动发现与零触碰连接：** 如果已激活，可无缝连接 [Trade Republic Home Assistant 集成](https://github.com/FaserF/ha-traderepublic)，无需重新输入凭据。
- 🌍 **完整国际支持：** 格式化并验证所有国际国家代码（+49, +33, +34, +43, +41 等）和德国国家 01... 号码。
- 📦 **自动安装与更新：** 自动安装并保持 `/config/custom_components` 中的 `ha-traderepublic` 集成处于最新状态。

## 🚀 安装与设置

1. 将此仓库添加到您的 Home Assistant 应用商店：<https://github.com/FaserF/hassio-addons>。
2. 安装 **Trade Republic 无头浏览器** 并启动应用程序。
3. 在 Home Assistant 中打开 **设置 → 设备和服务**：
   - Trade Republic 集成将自动发现该应用程序！
   - 如果已登录，只需点击一次即可连接，无需输入手机码或 PIN 码。
   - 否则，请按照引导提示进行登录，并在智能手机上确认。
4. _可选:_ 通过接入点 (Ingress) 打开应用程序的 **Web UI** 以监控状态、查看查询活动或重新认证。

## ℹ️ 会话持久化与补充包重启

---

## ⚙️ 配置

通过在 Home Assistant 应用程序页面中的 **配置** 标签页配置该应用程序。

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

## 👨‍💻 致谢 & 许可证

本项目是开源项目，采用 MIT 许可证许可。
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
