# Solumati

![Logo](logo.png)

[![打开你的 Home Assistant 实例并显示插件仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_solumati)
[![Home Assistant 插件](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![GitHub 发布](https://img.shields.io/github/v/release/FaserF/hassio-addons?include_prereleases&style=flat-square)](https://github.com/FaserF/hassio-addons/releases)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 反滑动革命 - 自托管约会平台，专注于有意义的匹配。

---

## 📖 关于

<!-- markdownlint-disable MD033 MD013 -->
<div align="center">
  <img src="https://raw.githubusercontent.com/FaserF/Solumati/master/frontend/public/logo/logo-text.png" alt="Solumati Logo" width="300">
  <br>
  <strong>反滑动革命</strong>
  <br>
</div>
<!-- markdownlint-enable MD033 -->

**Solumati** 是一个自托管的约会平台，旨在将意义带回匹配。你帮助许多人在主仓库中使用这个插件。在你的 Home Assistant 服务器上直接拥有 Solumati 平台的私有实例，确保完整的数据隐私和控制。

## ✨ 功能

- **🔒 安全与私密**：你的数据保留在你的服务器上。
- **🏠 Home Assistant 入口**：通过 HA 侧边栏无缝集成，无需端口转发。
- **🔌 自动配置**：零配置设置；数据库连接由系统自动管理。
- **🧪 测试模式**：包含内置模式，用于生成虚拟用户进行安全测试。
- **📧 OAuth & SMTP**：完全支持外部认证和电子邮件通知（通过管理员面板配置）。

## 🚀 安装

1. 将此仓库添加到你的 **Home Assistant 插件商店**。
1. 安装 **Solumati** 插件。
1. 查看 **配置** 选项下方的内容。
1. 启动插件。
1. 点击 **"打开 Web 界面"** 来启动界面。

---

## ⚙️ 配置

通过 Home Assistant 插件页面中的 **配置** 选项卡配置插件。

### 选项

```yaml
app_base_url: ''
dev_use_main_branch: false
factory_reset: false
github_token: ''
log_level: info
marketing_page_enabled: false
test_mode: false
```

---

## 👨‍💻 致谢与许可

此项目是开源的，并在 MIT 许可下提供。
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
