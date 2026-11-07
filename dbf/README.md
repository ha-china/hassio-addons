# DBF (DB-Infoscreen)

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/dbf/logo.png" width="100" alt="Logo" />

[![在你的 Home Assistant 实例中打开并显示应用程序仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_dbf)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-1.1.8-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-dbf)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 作为一个 Home Assistant App 提供的铁路出发站显示系统（此前名为 db-fakescreen）。

---

## 📖 简介

**DBF (DB-Infoscreen)** 是一款用于显示公共交通站台铁路发车信息的 Web 应用程序。它提供详细信息，包括延迟原因、服务限制、列车编组订单和预计列车类型。

该扩展程序将强大的 `db-infoscreen` 软件引入 Home Assistant，让您在智能家居中拥有一个专业的出发站牌。

## 🚀 特性

- 🚉 **实时发车信息**：来自各种后台系统（IRIS、HAFAS）的准确信息。
- 🕒 **延迟追踪**：查看实际延迟情况及原因。
- 🚋 **列车编组订单**：查看 IC/ICE 列车的构成。
- 🎨 **可自定义**：多种显示模式，包括专用的“信息屏”模式。
- 🔒 **隐私优先**：自托管且注重隐私。
- 🧩 **自动集成**：自动安装并更新 [DB 信息屏集成](https://github.com/FaserF/ha-db_infoscreen)。

## 🧩 Home Assistant 集成

该扩展程序旨在与 **DB 信息屏集成** 无缝协作。

- **自动安装**：启动此扩展程序时，它将自动检查 integration 是否在您的 `custom_components` 文件夹中已安装。如果缺失或过时，它将直接从 GitHub 动态获取并安装最新版本。
- **手动控制**：您还可以在以下位置找到源代码并报告集成问题：[github.com/FaserF/ha-db_infoscreen](https://github.com/FaserF/ha-db_infoscreen)。

## 📦 安装

1. 将此仓库添加至您的 Home Assistant Supervisor。
2. 在扩展商店中搜索"DBF"。
3. 安装扩展程序。
4. 启动扩展程序并通过 Ingress 打开 Web UI。

---

## ⚙️ 配置

通过 Home Assistant App 页面中的 **配置** 选项卡配置应用程序。

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

## 👨‍💻 Credits & License

该项目是开源项目，采用 MIT 协议许可。
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
