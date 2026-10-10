# Trade Republic 无头浏览器

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/traderepublic/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_traderepublic)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-1.1.2-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-traderepublic)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Trade Republic 无头浏览器与会话提供者（Web 应用防火墙解析器与会话保持）。

---

## 📖 关于

# Trade Republic 无头浏览器 (Home Assistant 附加组件)

这款 Home Assistant 附加组件提供了一项由 Chromium 和 Playwright 驱动的自动化无头浏览器服务。它可解决 AWS WAF Bot 控制挑战，并用于维持持久、自动刷新会话的 Trade Republic 账号。

## ✨ 功能特性

- 🛡️ **AWS WAF 解析：** 原生使用 Alpine Chromium 和 Chrome DevTools Protocol (CDP) 解决 Cloudflare/AWS WAF 机器人控制挑战。
- 📲 **集成设置：** 无需接触应用程序界面，即可直接从 Home Assistant 集成设置流程完成完整认证（凭据 + 在应用内批准/短信）。
- 📱 **现代入口仪表板：** 提供整洁的 Web 界面，展示实时连接健康状态、Home Assistant 查询计数器、诊断错误警报以及一键应用内验证。
- 🔄 **保持活跃与自动续期：** 保持浏览器会话活跃，并在后台自动刷新令牌。
- 🔌 **Home Assistant 自动发现与零接触连接：** 与 [Trade Republic Home Assistant 集成](https://github.com/FaserF/ha-traderepublic) 无缝连接；若已登录，则无需重新输入凭据即可一键连接。
- 🌍 **完整国际支持：** 格式化和验证所有国际国家代码（+49、+33、+34、+43、+41 等）以及德国国家 01... 号码。
- 📦 **自动安装与更新：** 自动安装并持续更新 `/config/custom_components` 中的 `ha-traderepublic` 集成。

## 🚀 安装与设置

1. 将此仓库添加到您的 Home Assistant 应用商店：<https://github.com/FaserF/hassio-addons>。
2. 安装 **Trade Republic 无头浏览器** 并启动应用。
3. 在 Home Assistant 中打开 **设置 → 设备与服务**：
   - Trade Republic 集成会自动发现该应用！
   - 若已登录，将无需手机或 PIN 码，一键即可连接。
   - 否则，请遵循引导提示进行登录，并在智能手机上确认。
4. _可选：_ 通过入口访问应用的 **Web UI**，以监控状态、查看查询活动或重新认证。

## ℹ️ 会话持久化与附加组件重启

---

## ⚙️ 配置

通过 Home Assistant 应用页面中的 **配置** 标签页配置该应用。

### 选项

```yaml
auto_install_integration: true
cache_retention_hours: 12
github_token: ''
keep_alive_interval: 60
log_level: info
```

---

## 👨‍💻 致谢与许可证

该项目是开源软件，采用 MIT 协议许可发布。
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
