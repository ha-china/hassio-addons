# eWeLink 智能家居

![支持 armv7 架构](https://img.shields.io/badge/armv7-yes-green.svg) ![支持 aarch64 架构](https://img.shields.io/badge/aarch64-yes-green.svg) ![支持 amd64 架构](https://img.shields.io/badge/amd64-yes-green.svg)

## 简介

**eWeLink 智能家居** 旨在取代旧的 [eWeLink 智能家居](https://github.com/CoolKit-Technologies/ha-addon)。它允许您通过 **MQTT** 将 eWeLink 账户下的设备集成到 **Home Assistant** 中，从而可以直接在 Home Assistant 内控制设备和执行自动化。只需使用您的 eWeLink 账户登录，即可将设备同步至 Home Assistant。

旧的 [eWeLink 智能家居](https://github.com/CoolKit-Technologies/ha-addon) 应用程序将**不再维护或更新**。部分其实体实现依赖于已废弃的方法，而新项目提供了更健壮且面向未来的设备支持。如果您目前使用的是旧版应用，请不要担心——新版本包含**数据迁移功能**。迁移后，Home Assistant 中现有的设备和自动化将继续正常工作。关于迁移过程，请参考 **步骤 5**。

---

## 新版与旧版 eWeLink 智能家居应用的主要区别

1. 新版应用为同步到 Home Assistant 的设备提供了**更多实体**，其实现方式更符合 Home Assistant 的标准。它将继续扩展对更多设备和功能的支持，包括快速支持新的 SONOFF 产品。
2. 新版应用**不提供设备控制的用户界面**。所有控制操作和自动化均直接在 Home Assistant 中执行。
3. 新版应用**不再支持将 Home Assistant 设备同步回 eWeLink 云**，这是旧版应用具备的功能。

---

## 前提条件

1. Home Assistant 中已安装并启用了 **MQTT 集成** 和 **MQTT Broker 应用**。
2. 您已注册一个 **eWeLink 账户**，并通过 eWeLink 移动应用添加了设备。
3. **如果您使用的是旧版 eWeLink 智能家居应用并希望迁移其数据**，请首先将其升级到 **1.4.6 版本**，然后停止该旧版应用。在迁移过程中，如果旧版应用仍在运行，系统会自动停止它。关于操作的详细信息，请参考 **步骤 5**。

## 安装
1. 前往应用市场 → 点击右上角的 **更多**（⋮）按钮 → 选择 **仓库 **(Repositories)
2. 粘贴以下网址：
   [https://github.com/iHost-Open-Source-Project/hassio-ihost-addon](https://github.com/iHost-Open-Source-Project/hassio-ihost-addon)
3. 或者，直接点击下方的按钮自动添加：

[![添加仓库](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FiHost-Open-Source-Project%2Fhassio-ihost-addon)

## 如何使用

有关如何使用 eWeLink 智能家居应用的详细信息，请参阅“文档”。

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
