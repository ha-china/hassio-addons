# 家居助手插件：PlanarAlly

# PlanarAlly

当你进入异界时，一个辅助工具。

PlanarAlly 是一个网络工具，为你的 TTRPG/D&D 工具箱添加虚拟战斗地图和各种附加功能。

一些关键特性包括：

**自托管**：你可以喜欢在哪里运行这个软件，而不必依赖外部服务\
**离线支持**：这个工具可以在完全离线的设置中使用，当你在一个黑暗的地牢中玩 D&D 时。

**简单图层**：将你的场景组织在图层中，以便更容易管理。\
**无限画布**：当有限的工作空间仍然不够时！\
**动态照明**：通过使用光和阴影来增加你的沉浸感。\
**玩家视野**：限制视野到你的标记（标记）可以看到的地方。你的同伴在不同的房间，没有光为你！\
**先攻记录器**：简单的先攻记录器\
**楼层**：站在阳台上时，可以俯瞰较低的楼层！

这个工具免费提供使用，并且是开源的。

_感谢每个将我的仓库星标的人！要星标它，请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用的是 [docker 镜像](https://github.com/Kruptein/PlanarAlly)。

## 安装

这个插件的安装需要几个额外的步骤。

1. [将我的 Hass.io 插件仓库][repository] 添加到你的 Hass.io 实例中。
1. 点击 `保存` 按钮以保存你的配置。
1. 启动插件。
1. 它会失败，那没关系
1. 设置将在 `/addon_configs/2effc9b9_plannarally`
1. ssh 连接到 homeassistant 并输入 `chmod 2777 addon_configs/2effc9b9_plannarally`
2. 启动插件，它将启动，但然后停止插件。
1. 编辑 `/addon_configs/2effc9b9_plannarally/server_config.cfg`
1. 在 `[General]` 下，使接下来的两行：

```
save_file = /config/planar.sqlite
assets_directory = /config/assets
```
1. 重新启动插件
1. 打开 WebUI，应该可以通过 <your-ip>:port 工作。

## 配置

```
port : 8080 #你想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons
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
