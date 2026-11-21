# DBF (DB-Infoscreen)

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/dbf/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_dbf)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-1.1.11-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-dbf)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 作为 Home Assistant 应用的铁路发车显示屏（原 db-fakescreen）。

---

## 📖 关于

**DBF (DB-Infoscreen)** 是一款网页应用程序，用于显示公共交通车站的列车出发信息。它提供详细信息，包括延误原因、服务限制、机车订单和预计列车类型。

这款附加组件将功能强大的`db-infoscreen` 软件引入 Home Assistant，让您可以在智能家居中拥有一个专业的发车显示屏。

## 🚀 功能特性

- 🚉 **实时出发信息**：来自各种后端（IRIS、HAFAS）的准确信息。
- 🕒 **延误追踪**：查看实际延误及其原因。
- 🚋 **机车订单**：查看 IC/ICE 列车的编组情况。
- 🎨 **可自定义**：提供多种显示模式，包括专门的"Infoscreen"模式。
- 🔒 **隐私优先**：自托管且注重隐私。
- 🧩 **自动集成**：自动安装和更新 [DB Infoscreen 集成](https://github.com/FaserF/ha-db_infoscreen)。

## 🧩 Home Assistant 集成

该附加组件设计用于与 **DB Infoscreen 集成** 无缝协作。

- **自动安装**：启动此附加组件时，它将检查集成是否已安装到您的 `custom_components` 文件夹中。如果缺失或版本过时，它将直接从 GitHub 动态获取并安装最新版本。
- **手动控制**：您还可以在 [github.com/FaserF/ha-db_infoscreen](https://github.com/FaserF/ha-db_infoscreen) 处找到集成源代码并报告问题。

## 📦 安装

1. 将此仓库添加到您的 Home Assistant Supervisor 中。
2. 在附加组件商店中搜索"DBF"。
3. 安装附加组件。
4. 启动附加组件，并通过 Ingress 打开 Web UI。

---

## ⚙️ 配置

请在 Home Assistant 应用页面的 **配置**（Configuration）标签页中配置此应用。

### 选项

```yaml
auto_install_integration: true
imprint_address: ''
imprint_name: ''
log_level: info
privacy_policy_url: ''
workers: 0
```

---

## 👨‍💻 致谢与许可证

本项目为开源项目，采用 MIT 许可证分发。
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
