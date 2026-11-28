# DBF (DB-Infoscreen)

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/dbf/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_dbf)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-1.1.13-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-dbf)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 铁路 departure 显示屏（原名 db-fakescreen）作为 Home Assistant 应用程序。

---

## 📖 关于

**DBF (DB-Infoscreen)** 是一个 Web 应用程序，用于显示公共交通站点的铁路发车信息。它提供详细信息，包括延误原因、服务限制、车厢订单和预计列车类型。

该附加组件将强大的 `db-infoscreen` 软件引入 Home Assistant，让您可以智能家居专业发车屏。

## 🚀 功能特性

- 🚉 **实时发车信息**：从多个后端（IRIS、HAFAS）获取准确信息。
- 🕒 **延误跟踪**：查看实际延误及原因。
- 🚋 **车厢订单**：查看 IC/ICE 列车的编组情况。
- 🎨 **可自定义**：多种显示模式，包括专门的"Infoscreen"模式。
- 🔒 **隐私优先**：自建托管并注重隐私。
- 🧩 **自动集成**：自动安装和更新 [DB Infoscreen 集成](https://github.com/FaserF/ha-db_infoscreen)。

## 🧩 Home Assistant 集成

该附加组件旨在与 **DB Infoscreen 集成** 无缝配合使用。

- **自动安装**：启动此附加组件时，它会检查该集成是否已安装在您的 `custom_components` 文件夹中。如果缺失或版本陈旧，它将直接从 GitHub 动态获取并安装最新版本。
- **手动控制**：您也可以在此找到源代码并为集成报告问题：[github.com/FaserF/ha-db_infoscreen](https://github.com/FaserF/ha-db_infoscreen)。

## 📦 安装

1. 将此仓库添加到 Home Assistant Supervisor。
2. 在附加组件商店中搜索"DBF"。
3. 安装附加组件。
4. 启动附加组件，并通过 Ingress 打开 Web 界面。

---

## ⚙️ 配置

通过 Home Assistant 应用程序页面的 **配置** 选项卡配置该应用程序。

### 选项

```yaml
auto_install_integration: true
imprint_address: ''
imprint_name: ''
log_level: info
lookahead: 180
privacy_policy_url: ''
workers: 0
```

---

## 👨‍💻 致谢与许可证

本项目是开源的，并在 MIT 许可证下提供。
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
