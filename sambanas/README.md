# Home Assistant Add-on: Samba NAS share

使用 Windows 文件共享在网络中共享您的磁盘。

![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield] ![支持 armv7 架构][armv7-shield]

<!--
[![Stargazers repo roster for @dianlight/hassio-addons](https://raw.githubusercontent.com/dianlight/hassio-addons/master/.github/stars2.svg)](https://github.com/dianlight/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/dianlight/hassio-addons/master/sambanas/stats.png)
-->

## 关于 SambaNas Add-on 开发的 重要通知

**SambaNas Add-on 现在已进入维护模式**

此通知旨在告知我们的用户，**SambaNas add-on 将现在过渡到维护模式。** 这意味着对于此版本的 add-on 将**不再实现任何新功能**。我们的开发工作将仅专注于提供**关键错误修复**，以确保现有用户的持续稳定性。

**介绍 SambaNas2：Samba 集成的未来**

我们很高兴地宣布 **SambaNas2**，它是原始 SambaNas add-on 的继任者！SambaNas2 代表了**从地面开始完全重写，使用 Go 语言开发，拥有全新的核心。** 这将带来显著的性能、稳定性和未来扩展性的改进。

**当前状态和即将发布的 Beta 版本**

SambaNas2 目前处于**开发 Alpha 阶段**。我们很高兴地宣布，**将在未来几周内发布公共 Beta 版本**，并通过我们的 Beta 渠道提供。

我们鼓励对最新功能和改进感兴趣的用户关注 SambaNas2 Beta 版本的发布。感谢您一直以来的支持。

## 安装

![动态 JSON 徽章](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fanalytics.home-assistant.io%2Faddons.json&query=%24.1a32f091_sambanas.total&label=SambaNas%20安装量&link=https%3A%2F%2Faddonstats.poeschl.xyz%2F%23)
![动态 JSON 徽章](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fanalytics.home-assistant.io%2Faddons.json&query=%24.c9a35110_sambanas.total&label=SambaNas%20β%20安装量&link=https%3A%2F%2Faddonstats.poeschl.xyz%2F%23)

## 帮助我！

[![](https://img.shields.io/github/sponsors/dianlight?label=Sponsor&logo=GitHub)](https://github.com/sponsors/dianlight)

<a href="https://www.buymeacoffee.com/ypKZ2I0"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=ypKZ2I0&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>


## 关于

此 Add-on 允许您在不同的操作系统之间通过网络启用文件共享。
它让您能够使用 Windows 和 macOS 设备访问您的配置文件。
您还可以指定磁盘标签以便在启动时挂载和共享。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg
[issue]: https://github.com/dianlight/hassio-addons/issues
[reddit]: https://reddit.com/r/homeassistant
[repository]: https://github.com/dianlight/hassio-addons
