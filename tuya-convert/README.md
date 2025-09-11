# Home Assistant Community Add-on: Tuya-Convert
![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield] ![支持 armhf 架构][armhf-shield] ![支持 armv7 架构][armv7-shield] ![支持 i386 架构][i386-shield]
![项目维护][maintenance-shield]

Tuya-Convert for Homeassistant OS

## 关于

工作已经被弃用！
现在请不要使用！！！这只是一个测试，似乎有效，但我无法保证任何事情！

一家名为 Tuya 的中国公司向任何人提供免费的品牌智能家居解决方案。使用他们的服务非常简单，因为所有操作都可以通过点击 Tuya 网页来完成，从选择预设计的产品或预编程的 Wi-Fi 模块（大多数为 ESP8266）到构建自己的应用程序。最终，他们声称有超过 10,000 家供应商使用 Tuya 的固件和云服务“制造”了超过 11,000 个设备。

除此之外，他们声称他们的云解决方案具有“军用级安全性”。德国 IT 安全初创公司 VTRUST 的创始人 Michael Steigerwald 能够驳斥这一说法，并在 35C3 莱比锡会议上的“智能家居 - 智能黑客”演讲中展示了他的结果：<https://media.ccc.de/v/35c3-9723-smart_home_-_smart_hack>

在接下来的几天里，VTRUST 和德国科技杂志 c't 决定合作。由于使用 ESP8266/85 重新闪存设备在 DIY 智能家居爱好者中非常普遍，我们希望为每个人提供一种简单的方法，使他们的设备能够摆脱云服务，而无需焊接工具。

请务必访问 VTRUST（<https://www.vtrust.de/>），因为该黑客攻击是他们的工作。

请优先使用 tuya-convert 的正常安装，而不是这个 homeassistant-os 插件，因为可能会有更高的砖化风险。<https://github.com/ct-Open-Source/tuya-convert>

## 安装

[![FaserF Homeassistant Addons](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)
<br />
该插件的安装非常简单，与安装其他任何自定义 Home Assistant 插件没有区别。<br />
只需点击上面的链接或将我的库添加到 hassio 插件库： <https://github.com/FaserF/hassio-addons>

## 配置

**注意**：_记得在配置更改时重启插件。_

示例插件配置：

```yaml
backup_path: /share/tuya-convert
firmware: tasmota.bin
accept_eula: true
```

**注意**：_这只是一个示例，不要复制粘贴！自己创建一个！_

### 选项： `backup_path`

此选项是必需的。根据固件备份位置进行更改。

### 选项： `firmware`

此选项是必需的。根据您要安装的自定义固件进行更改。您可以选择“tasmota.bin”或“espurna.bin”。

### 选项： `accept_eula`

此选项是必需的。只有当您将其设置为 true 时，软件才能启动。您可以在这里阅读 tuya-convert 的 EULA 协议： <https://github.com/ct-Open-Source/tuya-convert/blob/master/scripts/setup_checks.sh#L18>

## 支持

有问题吗？

您可以 [在这里打开一个问题][issue] GitHub。
请记住，这个软件仅在 Raspberry Pi 4 上的 armv7 上经过测试。

## 作者与贡献者

原始程序来自 @ct-Open-Source。有关更多信息，请访问此页面： <https://github.com/ct-Open-Source/tuya-convert>
该 hassio 插件由 [FaserF] 带给您。

## 许可证

MIT 许可证

版权所有 (c) 2020 FaserF & ct-Open-Source

特此免费授予任何获得本软件及其相关文档文件（“软件”）副本的人处理软件的权利，包括不限于使用、复制、修改、合并、出版、分发、再授权和/或出售软件的副本，以及允许提供者在遵守以下条件的前提下进行处理：

上述版权声明和本许可声明应包含在所有软件的副本或实质性部分中。

软件是按“原样”提供的，不附有任何类型的保证，明示或暗示，包括但不限于对适销性、特定用途适用性和不侵权的保证。在任何情况下，作者或版权持有者均不对因软件或软件的使用或其他交易引起或与之相关的任何索赔、损害或其他责任承担责任，无论是在合同、侵权或其他方面。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[FaserF]: https://github.com/FaserF/
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg
[issue]: https://github.com/FaserF/hassio-addons/issues
[maintenance-shield]: https://img.shields.io/maintenance/yes/2020.svg