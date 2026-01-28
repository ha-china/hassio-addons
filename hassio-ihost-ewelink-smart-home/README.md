# eWeLink 智能家居

![Supports armv7 Architecture](https://img.shields.io/badge/armv7-yes-green.svg) ![Supports aarch64 Architecture](https://img.shields.io/badge/aarch64-yes-green.svg) ![Supports amd64 Architecture](https://img.shields.io/badge/amd64-yes-green.svg)

## 关于

**eWeLink 智能家居** 旨在取代传统的 [eWeLink 智能家居](https://github.com/CoolKit-Technologies/ha-addon)。它允许您通过 **MQTT** 将您 eWeLink 账户下的设备集成到 **Home Assistant** 中，从而直接在 Home Assistant 内部进行设备控制和自动化。只需使用您的 eWeLink 账户登录即可将设备同步到 Home Assistant。

传统的 [eWeLink 智能家居](https://github.com/CoolKit-Technologies/ha-addon) 插件将**不再维护或更新**。其中一些实体实现依赖于已弃用的方法，而新项目提供了更健壮且面向未来的设备支持。
如果您目前正在使用旧插件，请不用担心——新插件包含**数据迁移功能**。迁移后，您在 Home Assistant 中现有的设备和自动化将继续正常工作。请参阅**步骤 5** 了解迁移过程。

---

## 新旧 eWeLink 智能家居插件的主要区别

1. 新插件为同步到 Home Assistant 的设备提供了**更多实体**，其实现方式更符合 Home Assistant 的标准。它将继续扩展对更多设备和功能的支持，包括对 SONOFF 新产品的快速支持。
2. 新插件**不提供设备控制界面 (UI)**。所有的控制和自动化操作均在 Home Assistant 内部直接执行。
3. 新插件**不再支持将 Home Assistant 设备同步回 eWeLink 云端**，这是旧插件中存在的功能。

---

## 前置要求

1. MQTT 集成和 **MQTT Broker 插件** 已在 Home Assistant 中安装并启用。
2. 您已注册了一个 **eWeLink 账户** 并通过 eWeLink 移动应用添加了设备。
3. **如果您正在使用传统的 eWeLink 智能家居插件并希望迁移其数据**，请先将其升级到 **版本 1.4.6**，然后停止旧的插件。在迁移过程中，如果旧插件仍在运行，系统将自动停止它。详情请参阅**步骤 5**。

## 安装
1. 前往插件商店 → 点击右上角的 **更多** 按钮 (⋮) → 选择 **仓库**  
2. 粘贴以下 URL：  
   [https://github.com/iHost-Open-Source-Project/hassio-ihost-addon](https://github.com/iHost-Open-Source-Project/hassio-ihost-addon)  
3. 或者，只需点击下面的按钮即可自动添加：

[![Add Repository](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FiHost-Open-Source-Project%2Fhassio-ihost-addon)

## 如何使用

有关如何使用 eWeLink 智能家居插件的详细信息，请参阅“文档”。
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
