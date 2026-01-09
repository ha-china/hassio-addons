# eWeLink 智能家居

![支持 armv7 架构](https://img.shields.io/badge/armv7-yes-green.svg) ![支持 aarch64 架构](https://img.shields.io/badge/aarch64-yes-green.svg) ![支持 amd64 架构](https://img.shields.io/badge/amd64-yes-green.svg)

## 关于

**eWeLink 智能家居**旨在取代传统的 [eWeLink 智能家居](https://github.com/CoolKit-Technologies/ha-addon)。它允许您通过 **MQTT** 将 eWeLink 账户下的设备集成到 **Home Assistant** 中，从而直接在 Home Assistant 中进行设备控制和自动化。只需使用您的 eWeLink 账户登录，即可将您的设备同步到 Home Assistant。

传统的 [eWeLink 智能家居](https://github.com/CoolKit-Technologies/ha-addon) 插件将 **不再维护或更新**。其中一些实体实现依赖于已弃用的方法，而新项目提供了更健壮和面向未来的设备支持。
如果您目前正在使用旧插件，请不用担心——新插件包括一个 **数据迁移功能**。迁移后，Home Assistant 中的现有设备和自动化将继续按原样工作。请参考 **第 5 步**进行迁移过程。

---

## 新旧 eWeLink 智能家居插件的主要区别

1. 新插件为同步到 Home Assistant 的设备提供了 **更多实体**，其实现方式更符合 Home Assistant 标准。它将继续扩展对更多设备和功能的支持，包括对新 SONOFF 产品的快速支持。
2. 新插件 **不提供设备控制的界面**。所有控制和自动化都在 Home Assistant 中直接进行。
3. 新插件 **不再支持将 Home Assistant 设备同步回 eWeLink 云端**，这一功能在传统插件中存在。

---

## 前提条件

1. 在 Home Assistant 中安装并启用了 **MQTT 集成和 MQTT 代理插件**。
2. 您已注册一个 **eWeLink 账户**并通过 eWeLink 移动应用添加了设备。
3. **如果您正在使用传统的 eWeLink 智能家居插件并希望迁移其数据**，请首先将其升级到 **版本 1.4.6**，然后停止传统插件。在迁移过程中，如果传统插件仍在运行，系统将自动停止。详情请参考 **第 5 步**。

## 安装
1. 前往插件商店 → 点击右上角的 **更多** 按钮 (⋮) → 选择 **仓库**  
2. 粘贴以下 URL：  
   [https://github.com/iHost-Open-Source-Project/hassio-ihost-addon](https://github.com/iHost-Open-Source-Project/hassio-ihost-addon)  
3. 或者，直接点击下方按钮自动添加：

[![添加仓库](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FiHost-Open-Source-Project%2Fhassio-ihost-addon)

## 使用方法

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
