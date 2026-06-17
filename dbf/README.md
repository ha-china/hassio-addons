# DBF (DB-Infoscreen)

![DBF 标志](https://raw.githubusercontent.com/FaserF/hassio-addons/master/dbf/logo.png) 

[![打开您的 Home Assistant 实例并显示应用仪表板](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_dbf)
[![Home Assistant 应用](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-1.1.0-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-dbf)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 铁路到站显示（之前称为 db-fakescreen）作为 Home Assistant 应用。

---

## 📖 关于

**DBF (DB-Infoscreen)** 是一个网络应用程序，用于显示公共交通车站的铁路到站信息。它提供包括延误原因、服务限制、车厢顺序和预期列车类型在内的详细信息。

此插件将强大的 `db-infoscreen` 软件引入 Home Assistant，允许您在智能家居中获得一个专业的到站板。

## 🚀 功能

- 🚉 **实时到站信息**：来自各种后端（IRIS，HAFAS）的准确信息。
- 🕒 **延误跟踪**：查看实际延误和原因。
- 🚋 **车厢顺序**：查看 IC/ICE 列车的组成。
- 🎨 **可定制**：包括专用“信息屏”模式在内的多种显示模式。
- 🔒 **隐私优先**：自托管和注重隐私。
- 🧩 **自动集成**：自动安装和更新 [DB Infoscreen 集成](https://github.com/FaserF/ha-db_infoscreen)。

## 🧩 Home Assistant 集成

此插件旨在与 **DB Infoscreen 集成** 无缝配合。

- **自动安装**：当您启动此插件时，它将自动检查您的 `custom_components` 文件夹中是否安装了集成。如果缺失或过时，它将直接从 GitHub 动态获取并安装最新版本。
- **手动控制**：您也可以在 [github.com/FaserF/ha-db_infoscreen](https://github.com/FaserF/ha-db_infoscreen) 找到集成源代码并报告问题。

## 📦 安装

1. 将此存储库添加到您的 Home Assistant Supervisor。
2. 在应用商店中搜索“DBF”。
3. 安装插件。
4. 启动插件并通过入口打开 Web UI。

---

## ⚙️ 配置

通过 Home Assistant 应用页面中的 **配置** 选项卡配置应用程序。

### 选项

```yaml
imprint_address: ''
imprint_name: ''
log_level: info
privacy_policy_url: ''
workers: 2
```

---

## 👨‍💻 信用 & 许可证

此项目是开源的，并受 MIT 许可证的约束。
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
