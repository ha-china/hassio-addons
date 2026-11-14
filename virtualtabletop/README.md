# Home assistant 插件：VirtualTabletop

VTT 是一个开源、免费使用的平台，用于创建和玩游戏。

_感谢每一个给我的代码库星标的人！要星标，请点击下面的图片，然后会显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件基于 https://github.com/ArnoldSmith86/virtualtabletop。

该项目旨在创建一个虚拟桌面，在浏览器中可以 (重新) 创建所有棋盘、骰子和卡片游戏，并在不需要注册的情况下在互联网上进行游戏。

您可以托管自己的实例或访问 [VirtualTabletop.io](https://virtualtabletop.io)。

该项目的灵感来自于 [playingcards.io](https://playingcards.io)。

该项目旨在能够导入 PCIO 文件并使其能够立即游玩。

## 安装

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 启动插件。
1. 它会失败，这没关系。
1. 转到 \\addon_configs\2effc9b9_virtualtabletop
1. 将 config.template.json 重命名为 config.json
1. 编辑 config.json 并输入您本地计算机的 IP 地址或您如何反向代理您的计算机的 IP 地址。
1. 重启插件
1. 转到 IP 地址。