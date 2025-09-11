# 家居助手插件：PlanarAlly

# PlanarAlly

当你进入异界时的辅助工具。

PlanarAlly 是一个网络工具，为你的 TTRPG/D&D 工具箱添加了虚拟战场地图和各种附加功能。

一些关键特性是：

**本地托管**：你可以在你喜欢的任何地方运行此软件，而无需依赖外部服务\
**离线支持**：此工具可以在完全离线的设置中使用，当你在一个黑暗的地牢中玩 D&D 时。

**简单图层**：在图层中组织你的场景，以便更容易管理。\
**无限画布**：当有限的工作空间仍然不够时！\
**动态照明**：通过使用光和阴影来增加你的沉浸感。\
**玩家视野**：限制视野到你的标记（标记）能看到的地方。你的同伴在不同的房间，没有光线给你！\
**行动顺序追踪器**：简单的行动顺序追踪器\
**楼层**：站在阳台时，你可以俯瞰较低的楼层！

这个工具免费提供使用，并且是开源的。

_感谢大家给我的仓库星标！要星标它，请点击下面的图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用了 [Docker 镜像](https://github.com/Kruptein/PlanarAlly)。

## 安装

这个插件的安装需要几个额外的步骤。

1. [将我的 Hass.io 插件仓库][repository]添加到你的 Hass.io 实例中。
1. 点击 `保存` 按钮来存储你的配置。
1. 启动插件。
1. 它会失败，这是正常的
1. 设置将在 `/addon_configs/2effc9b9_plannarally`
1. 通过 SSH 登录到 homeassistant，输入 `chmod 2777 addon_configs/2effc9b9_plannarally`
2. 启动插件，它将启动，但然后停止插件。
1. 编辑 `/addon_configs/2effc9b9_plannarally/server_config.cfg`
1. 在 `[General]` 下，使接下来的两行：

```
save_file = /config/planar.sqlite
assets_directory = /config/assets
```
1. 重启插件
1. 打开 WebUI，应该可以通过 <your-ip>:port 工作。

## 配置

```
port : 8080 #你想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons