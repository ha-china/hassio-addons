# Home Assistant Community Add-on: Tuya-Convert
![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield] ![支持 armhf 架构][armhf-shield] ![支持 armv7 架构][armv7-shield] ![支持 i386 架构][i386-shield]
![项目维护状态][maintenance-shield]

适用于 Homeassistant OS 的 Tuya-Convert

## 关于

工作已被弃用！
现在不要使用！！！这是一个测试，看起来可以工作，但我不能保证任何事！

一家名为 Tuya 的中国公司为任何人提供免费的品牌智能家庭解决方案。使用他们的服务非常简单，因为所有操作都可以通过 Tuya 网页点击完成，从选择预设计的商品或预编程的 wifi 模块（主要是 ESP8266）到构建自己的应用程序。最终，他们声称有超过 11,000 台设备由超过 10,000 个供应商使用 Tuya 的固件和云服务“制造”。

除此之外，他们声称他们的云解决方案具有“军事级安全”。德国 IT 安全初创公司 VTRUST 的创始人 Michael Steigerwald 能够驳斥这一说法，并在莱比锡 35C3 的“智能家居 - 智能黑客”演讲中展示了他的结果：<https://media.ccc.de/v/35c3-9723-smart_home_-_smart_hack>

在接下来的几天里，VTRUST 和德国科技杂志 c't 决定合作。由于使用 ESP8266/85 重新刷写设备在 DIY 智能家居爱好者中非常普遍，我们希望为每个人提供一种简单的方法，以摆脱云服务，而无需使用烙铁。

请确保访问 VTRUST (<https://www.vtrust.de/>)，因为这次黑客行为是他们的工作。

请优先使用 tuya-convert 的正常安装，而不是这个 homeassistant-os 插件，因为有可能烧录风险更高。<https://github.com/ct-Open-Source/tuya-convert>

## 安装

[![FaserF Homeassistant Addons](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)
<br />
这个插件的安装非常简单，与安装任何其他自定义 Home Assistant 插件没有区别。<br />
只需点击上面的链接或添加我的仓库到 hassio 插件仓库：<https://github.com/FaserF/hassio-addons>

## 配置

**注意**：_更改配置时请重启插件。_

示例插件配置：

```yaml
backup_path: /share/tuya-convert
firmware: tasmota.bin
accept_eula: true
```

**注意**：_这只是个示例，不要复制粘贴！创建你自己的！_

### 选项：`backup_path`

这个选项是必需的。根据你的固件备份位置进行更改。

### 选项：`firmware`

这个选项是必需的。根据你想安装的自定义固件进行更改。你可以选择 "tasmota.bin" 和 "espurna.bin"。

### 选项：`accept_eula`

这个选项是必需的。只有当你将其设置为 true 时，软件才会启动。你可以在 Tuya-Convert 的 EULA 协议中阅读这里：<https://github.com/ct-Open-Source/tuya-convert/blob/master/scripts/setup_checks.sh#L18>

## 支持

有问题？

你可以在 GitHub 上[打开问题][issue]。
请注意，这个软件仅在运行在 Raspberry Pi 4 上的 armv7 上经过测试。

## 作者和贡献者

原始程序来自 @ct-Open-Source。更多信息请访问此页面：<https://github.com/ct-Open-Source/tuya-convert>
hassio 插件由 [FaserF] 提供。

## 许可证

MIT 许可证

版权所有 (c) 2020 FaserF & ct-Open-Source

特此授予任何获得本软件及关联文档文件（“软件”）副本的人，在不限制的情况下，在软件中自由处理的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任负责，无论是因合同、侵权或其他行为引起的，也不论其是否与软件或软件的使用或其他交易有关。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[FaserF]: https://github.com/FaserF/
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg
[issue]: https://github.com/FaserF/hassio-addons/issues
[maintenance-shield]: https://img.shields.io/maintenance/yes/2020.svg
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
