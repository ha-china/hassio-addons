# eWeLink 智能家居

![支持 armv7 架构](https://img.shields.io/badge/armv7-yes-green.svg) ![支持 aarch64 架构](https://img.shields.io/badge/aarch64-yes-green.svg) ![支持 amd64 架构](https://img.shields.io/badge/amd64-yes-green.svg)

## 概述

**eWeLink 智能家居** 旨在替换旧版的 [eWeLink 智能家居](https://github.com/CoolKit-Technologies/ha-addon)。它允许你通过 **MQTT** 将 eWeLink 账户下的设备集成到 **Home Assistant** 中，从而使设备控制和自动化可以直接在 Home Assistant 中进行。只需使用你的 eWeLink 账户登录，即可将设备同步到 Home Assistant。

旧版 [eWeLink 智能家居](https://github.com/CoolKit-Technologies/ha-addon) 应用将**不再维护和更新**。其中一些实体实现依赖于过时的方法，而新项目提供了更强大且面向未来的设备支持。如果您目前正在使用旧版应用，请不要担心——新版应用包含**数据迁移功能**。迁移后，您在 Home Assistant 中现有的设备和自动化规则将继续正常工作。有关迁移过程，请参阅**第 5 步**。

---

## 新版与旧版 eWeLink 智能家居应用的关键区别

1. 新版应用为同步到 Home Assistant 的设备提供了**更多实体**，其实现更符合 Home Assistant 的标准。它将继续扩展对更多设备和功能的支持，包括对新 SONOFF 产品的快速支持。
2. 新版应用**不提供设备进行控制的 UI**。所有的控制和自动化都直接在 Home Assistant 中进行。
3. 新版应用**不再支持将 Home Assistant 设备同步回 eWeLink 云平台**，这是旧版应用的一项功能。

---

## 前提条件

1. Home Assistant 中已安装并启用了 **MQTT 集成**和**MQTT Broker 应用**。
2. 您已注册 **eWeLink 账户**，并通过 eWeLink 移动应用添加了设备。
3. **如果您正在使用旧版 eWeLink 智能家居应用并希望迁移其数据**，请首先将其升级至 **1.4.6 版本**，然后停止旧版应用。在迁移过程中，如果旧版应用仍在运行，系统将自动停止它。有关详细信息，请参阅**第 5 步**。

## 安装

1. 访问应用商店 → 点击右上角的 **更多** 按钮（⋮）→ 选择 **仓库**  
2. 粘贴以下 URL：  
   [https://github.com/iHost-Open-Source-Project/hassio-ihost-addon](https://github.com/iHost-Open-Source-Project/hassio-ihost-addon)  
3. 或者，直接点击下方按钮以自动添加：

[![添加仓库](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FiHost-Open-Source-Project%2Fhassio-ihost-addon)

## 如何使用

有关使用 eWeLink 智能家居应用的具体说明，请参阅“文档”。

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
