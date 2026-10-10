# DBF (DB-Infoscreen)

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/dbf/logo.png" width="100" alt="Logo" />

[![打开您的 Home Assistant 实例并显示应用程序仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_dbf)
[![Home Assistant 应用程序](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-1.1.3-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-dbf)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 作为 Home Assistant 应用程序的铁路发车显示屏（原名 db-fakescreen）。

---

## 📖 关于

**DBF (DB-Infoscreen)** 是一个用于显示公共交通站点铁路发车信息的网页应用程序。它提供详细信息，包括延误原因、服务限制、车厢预订单以及预期列车类型。

此附加组件将强大的 `db-infoscreen` 软件引入 Home Assistant，让您在智能家居中拥有专业的发车显示屏。

## 🚀 特性

- 🚉 **实时发车信息**：从各种后端（IRIS、HAFAS）获取的准确信息。
- 🕒 **延误跟踪**：查看实际延误情况及原因。
- 🚋 **车厢预订单**：查看 IC/ICE 列车的编组情况。
- 🎨 **可定制**：多种显示模式，包括专门的“显示屏”模式。
- 🔒 **隐私优先**：自托管且注重隐私。
- 🧩 **自动集成**：自动安装并更新 [DB 显示屏集成](https://github.com/FaserF/ha-db_infoscreen)。

## 🧩 Home Assistant 集成

此附加组件设计用于与 **DB 显示屏集成** 无缝协作。

- **自动安装**：启动此附加组件时，它将自动检查 `custom_components` 文件夹中是否已安装集成。如果缺失或过时，它将直接从 GitHub 获取并安装最新版本。
- **手动控制**：您还可以在以下位置找到源代码并反馈集成问题：[github.com/FaserF/ha-db_infoscreen](https://github.com/FaserF/ha-db_infoscreen)。

## 📦 安装

1. 将此仓库添加到 Home Assistant Supervisor 中。
2. 在附加组件商店中搜索"DBF"。
3. 安装附加组件。
4. 启动附加组件并通过 Ingress 打开 Web 界面。

---

## ⚙️ 配置

通过 Home Assistant 应用程序页面上的 **配置** 选项卡配置该应用程序。

### 选项

```yaml
auto_install_integration: true
imprint_address: ''
imprint_name: ''
log_level: info
privacy_policy_url: ''
workers: 2
```

---

## 👨‍💻 致谢与许可

该项目是开源的，并在 MIT 协议下许可。
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
