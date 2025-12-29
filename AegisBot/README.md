# AegisBot

![Logo](logo.png)

[![打开你的 Home Assistant 实例并显示附加组件仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_AegisBot)
[![Home Assistant 附加组件](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![GitHub 发布](https://img.shields.io/github/v/release/FaserF/hassio-addons?include_prereleases&style=flat-square)](https://github.com/FaserF/hassio-addons/releases)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 生产就绪的 Telegram 调制机器人，具有 AI 驱动的 FAQ 和安全功能

---

> [!警告]
> **实验性 / Beta 状态**
>
> 该附加组件仍在开发中，且主要开发用于个人使用。
> 它尚未经过广泛测试，但预计基本功能可以正常工作。

---

## 📖 关于

![AegisBot Logo](icon.png)

生产就绪的 Telegram 调制机器人，具有 AI 驱动的 FAQ 和安全功能。

## 功能

- 🛡️ **高级调制**：具有 RBAC 的自动警告、踢出和封禁系统
- 🧠 **AI 意图分析**：检测诈骗和恶意意图的启发式引擎
- 🔄 **实时仪表板**：基于 WebSocket 的实时事件流
- 📈 **高级分析**：交互式安全趋势和可视化
- 🌍 **完全国际化**：多语言支持（EN/DE）
- 🚫 **智能过滤**：自动学习黑名单建议

## 安装

请参阅 [文档](DOCS.md) 获取详细的安装说明。

## 快速开始

1. 将此仓库添加到 Home Assistant
2. 安装 AegisBot 附加组件
3. 配置你的 Telegram 机器人令牌
4. 启动附加组件
5. 通过 Ingress 访问

---

## ⚙️ 配置

通过 Home Assistant 附加组件页面中的 **配置** 标签配置附加组件。

### 选项

```yaml
database:
  type: sqlite
debug: false
demo_mode: false
demo_mode_type: ephemeral
developer_mode: false
github_repo: FaserF/AegisBot
github_token: ''
log_level: info
project_name: AegisBot
reset_database: false
secret_key: ''
version: latest
```

---

## 👨‍💻 致谢 & 许可证

本项目是开源的，并在 MIT 许可下提供。
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
