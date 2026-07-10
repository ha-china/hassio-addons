# eWeLink 智能家居

![支持 armv7 架构](https://img.shields.io/badge/armv7-yes-green.svg) ![支持 aarch64 架构](https://img.shields.io/badge/aarch64-yes-green.svg) ![支持 amd64 架构](https://img.shields.io/badge/amd64-yes-green.svg)

## 关于

**eWeLink 智能家居**旨在替代传统的 [eWeLink 智能家居](https://github.com/CoolKit-Technologies/ha-addon)。它允许您通过 **MQTT** 将您的 eWeLink 账户下的设备集成到 **Home Assistant** 中，从而在 Home Assistant 中直接进行设备控制和自动化。只需使用您的 eWeLink 账户登录即可将您的设备同步到 Home Assistant。

传统的 [eWeLink 智能家居](https://github.com/CoolKit-Technologies/ha-addon) 应用程序将 **不再维护或更新**。其中一些实体实现依赖于已过时的方法，而新项目提供了更稳健且面向未来的设备支持。
如果您目前正在使用旧应用程序，请不要担心——新应用程序包括 **数据迁移功能**。迁移后，您的现有设备和自动化在 Home Assistant 中将继续按之前的方式工作。请参阅 **步骤 5** 了解迁移过程。

---

## 新旧 eWeLink 智能家居应用程序之间的主要区别

1. 新应用程序为同步到 Home Assistant 的设备提供了 **更多实体**，其实现在与 Home Assistant 标准更相符合。它将继续扩展对更多设备和功能的支持，包括对新 SONOFF 产品的快速支持。
2. 新应用程序 **不提供设备控制的 UI**。所有控制和自动化都在 Home Assistant 中直接执行。
3. 新应用程序 **不再支持将 Home Assistant 设备同步回 eWeLink 云**，这是旧应用程序中存在的一个功能。

---

## 先决条件

1. Home Assistant 中已安装并启用了 MQTT 集成和 **MQTT 代理应用程序**。
2. 您已注册 **eWeLink 账户**并通过 eWeLink 移动应用程序添加了设备。
3. **如果您正在使用旧 eWeLink 智能家居应用程序并希望迁移其数据**，请首先将其升级到 **版本 1.4.6**，然后停止旧应用程序。在迁移过程中，系统将自动停止仍在运行的旧应用程序。有关详细信息，请参阅 **步骤 5**。

## 安装

1. 前往应用商店 → 点击右上角的 **更多** 按钮 (⋮) → 选择 **仓库**
2. 粘贴以下 URL：  
   [https://github.com/iHost-Open-Source-Project/hassio-ihost-addon](https://github.com/iHost-Open-Source-Project/hassio-ihost-addon)  
3. 或者，只需点击下面的按钮即可自动添加：

[![添加仓库](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FiHost-Open-Source-Project%2Fhassio-ihost-addon)

## 使用方法

请参阅“文档”了解如何使用 eWeLink 智能家居应用程序的详细信息。
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
