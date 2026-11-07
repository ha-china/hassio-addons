# Trade Republic 无头浏览器

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/traderepublic/logo.png" width="100" alt="Logo" />

[![打开您的 Home Assistant 实例并显示应用仪表盘。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_traderepublic)
[![Home Assistant 应用](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-1.2.2-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-traderepublic)
![项目维护状态](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Trade Republic 无头浏览器 & 会话提供者（WAF 破解器 & 保持活动）。

---

## 📖 关于

# Trade Republic 无头浏览器 (Home Assistant 附加组件)

该 Home Assistant 附加组件提供了一项由 Chromium 和 Playwright 驱动的自动化无头浏览器服务。它可以解决 AWS WAF 机器人控制挑战，并为 Trade Republic 维持持久且自动刷新刷新会话。

## ✨ 功能特性

- 🛡️ **AWS WAF 破解：** 通过 Alpine Chromium 和 Chrome 开发工具协议 (CDP) 原生解决 Cloudflare / AWS WAF 机器人挑战。
- 📲 **集成设置中：** 无需接触应用程序界面，可以直接从 Home Assistant 集成设置流程中完成完整认证（凭据 + 应用内批准/SMS）。
- 📱 **现代化入口仪表板：** 具有内置连接健康状态、Home Assistant 查询计数、诊断错误警报以及一键应用内验证的清爽 Web 界面。
- 🔄 **保持活动与自动续期：** 保持浏览器会话活跃，并在后台自动刷新令牌。
- 🔌 **Home Assistant 自动发现与零接触连接：** 无需重新输入凭据，即可与 [Trade Republic Home Assistant 集成](https://github.com/FaserF/ha-traderepublic) 无缝连接。
- 🌍 **全面国际化支持：** 格式化和验证所有国际区号（+49, +33, +34, +43, +41 等）以及德国国家 01... 号码。
- 📦 **自动安装与更新：** 自动安装并保持 `/config/custom_components` 目录中的 `ha-traderepublic` 集成最新版本。

## 🚀 安装与设置

1. 将此仓库添加到 Home Assistant 应用商店：<https://github.com/FaserF/hassio-addons>。
2. 安装 **Trade Republic 无头浏览器** 并启动应用。
3. 在 Home Assistant 中打开 **设置 → 设备与服务**：
   - Trade Republic 集成将自动发现此应用！
   - 如果已登录，它将支持一键连接，无需电话或 PIN 码。
   - 否则，请按照引导提示登录并在智能手机上确认。
4. _可选:_ 通过入口打开应用的 **Web UI** 以查看状态、审查查询活动或重新认证。

## ℹ️ 会话持久化与附加组件重启

---

## ⚙️ 配置

通过 Home Assistant 应用页面的 **配置** 标签页配置应用。

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

## 👨‍💻 致谢与许可证

本项目采用开源方式，供 MIT 许可证使用。
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
