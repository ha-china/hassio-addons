# eWeLink 智能家居

![支持 armv7 架构](https://img.shields.io/badge/armv7-yes-green.svg) ![支持 aarch64 架构](https://img.shields.io/badge/aarch64-yes-green.svg) ![支持 amd64 架构](https://img.shields.io/badge/amd64-yes-green.svg)

## 简介

**eWeLink 智能家居** 旨在取代旧的 [eWeLink 智能家居](https://github.com/CoolKit-Technologies/ha-addon)。它允许您通过 **MQTT** 将您 eWeLink 账户下的设备集成到 **Home Assistant** 中，从而在 Home Assistant 内直接进行设备控制和自动化操作。只需使用您的 eWeLink 账户登录即可将设备同步到 Home Assistant。

旧的 [eWeLink 智能家居](https://github.com/CoolKit-Technologies/ha-addon) 应用程序将**不再维护和更新**。其中一些实体实现依赖于已被弃用的方法，而新项目提供了更强大且面向未来的设备支持。
如果您当前使用的是旧版应用程序，请不用担心——新应用程序包含**数据迁移功能**。迁移后，您在家智家中的现有设备和自动化将继续正常工作。有关迁移过程，请参阅 **第 5 步**。

---

## 新与旧 eWeLink 智能家居应用程序之间的主要区别

1. 新应用程序为同步到 Home Assistant 的设备提供了**更多的实体**，其实现更符合 Home Assistant 的标准。它将 continuing 支持更多设备和功能的支持，包括快速支持新的 SONOFF 产品。
2. 新应用程序**不提供用于设备控制的用户界面**。所有控制和自动化操作均在 Home Assistant 内直接执行。
3. 新应用程序**不再支持将 Home Assistant 设备同步回 eWeLink 云**，这是旧版应用程序的一项功能。

---

## 前置条件

1. 在 Home Assistant 中安装并启用了 **MQTT 集成** 和 **MQTT Broker 应用程序**。
2. 您已经注册了 **eWeLink 账户**，并通过 eWeLink 移动应用程序添加了设备。
3. **如果您正在使用旧的 eWeLink 智能家居应用程序并希望迁移其数据**，请先将其升级为 **1.4.6 版本**，然后停止旧版应用程序。在迁移过程中，如果旧版应用程序仍在运行，系统会自动停止它。有关详细信息，请参阅 **第 5 步**。

## 安装

1. 进入应用商店 → 点击右上角的 **更多** 按钮（⋮）→ 选择 **仓库**
2. 粘贴以下 URL：
   [https://github.com/iHost-Open-Source-Project/hassio-ihost-addon](https://github.com/iHost-Open-Source-Project/hassio-ihost-addon)
3. 或者，直接点击下方的按钮自动添加：

[![添加仓库](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FiHost-Open-Source-Project%2Fhassio-ihost-addon)

## 使用方法

有关如何使用 eWeLink 智能家居应用程序的详细信息，请参阅“文档”。

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
