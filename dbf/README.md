# DBF (DB-Infoscreen)

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/dbf/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_dbf)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-1.1.9-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-dbf)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 作为 Home Assistant 应用的高铁发车显示屏（原名为 db-fakescreen）。

---

## 📖 简介

**DBF (DB-Infoscreen)** 是一个用于显示公共交通站点列车时刻表的 web 应用程序。它提供详细信息，包括延误原因、服务限制、车厢调度顺序和预期的列车类型。

该附加组件将强大的 `db-infoscreen` 软件引入 Home Assistant，让您能够在智能家居中拥有专业的时刻表显示屏。

## 🚀 功能特性

- 🚉 **实时时刻表**：来自各种后端（IRIS、HAFAS）的准确信息。
- 🕒 **延误追踪**：查看实际延误情况及原因。
- 🚋 **车厢调度顺序**：查看 IC/ICE 列车的编组情况。
- 🎨 **高度自定义**：多种显示模式，包括专用的“Infoscreen"模式。
- 🔒 **隐私优先**：自托管且注重隐私。
- 🧩 **自动集成**：自动安装和更新 [DB Infoscreen 集成](https://github.com/FaserF/ha-db_infoscreen)。

## 🧩 Home Assistant 集成

该附加组件设计与 **DB Infoscreen 集成** 无缝配合。

- **自动安装**：启动此附加组件时，它将自动检查 `custom_components` 文件夹中是否安装了该集成。如果缺失或过时，将直接从 GitHub 动态获取并安装最新发行版。
- **手动控制**：您还可以在以下位置找到该集成的源代码并报告问题：[github.com/FaserF/ha-db_infoscreen](https://github.com/FaserF/ha-db_infoscreen)。

## 📦 安装

1. 将此仓库添加到 Home Assistant  Supervisor。
2. 在附加组件商店中搜索 "DBF"。
3. 安装附加组件。
4. 启动附加组件，并通过 Ingress 打开 Web UI。

---

## ⚙️ 配置

通过 Home Assistant 应用页面中的 **配置** 选项卡来配置该应用。

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

该项目是开源软件，采用 MIT 许可证发布。
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
