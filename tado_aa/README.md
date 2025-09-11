# Home Assistant Community Add-on: Tado 自动辅助用于地理围栏和开窗检测
![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield] ![支持 armhf 架构][armhf-shield] ![支持 armv7 架构][armv7-shield]
![项目维护][maintenance-shield]

Tado 自动辅助用于 Home Assistant OS 的地理围栏和开窗检测

## 关于

一个 Python 脚本，根据你的存在（到达或离开）自动调整你家中的温度，使用来自 Tado 应用的设置。当 Tado TRV 检测到开窗时，它还会在任何房间关闭供暖（激活开窗模式）。

## 安装

[![FaserF Home Assistant Add-ons](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)

此插件的安装简单快捷，与安装任何其他自定义 Home Assistant 插件类似。
只需点击上面的链接或手动将此仓库添加到你的 Home Assistant 插件库中：
<https://github.com/FaserF/hassio-addons>

## 配置

插件配置示例：

```yaml
username: my@email.com
password: mySecretPassword
minTemp: 5       # 可选 – 最低温度设置
maxTemp: 25      # 可选 – 最高温度设置
```

> **注意**：_这只是一个示例。请使用你自己的凭据和所需的温度设置。_

### 选项: `username`

定义你的 Tado 用户名（通常是你的电子邮件地址）。

### 选项: `password`

定义你的 Tado 密码。

### 选项: `minTemp`

可选。定义在你不在时 Tado 应该设置的最低温度。

### 选项: `maxTemp`

可选。定义在你回到家时 Tado 应该设置的最高温度。

## 支持

有问题或疑问？
如果你遇到任何问题或有建议，可以 [在 GitHub 上打开一个问题][issue]。

⚠️ **请注意：** 此插件仅在 `armv7`（Raspberry Pi 4）上经过测试。

## 鸣谢

此插件基于 [adrianslabu] 的工作，他创建了原始的 Python 脚本：
➡️ <https://github.com/adrianslabu/tado_aa>

Home Assistant 插件封装是由 [FaserF] 创建和维护的。

[maintenance-shield]: https://img.shields.io/maintenance/yes/2025.svg
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[FaserF]: https://github.com/FaserF/
[issue]: https://github.com/FaserF/hassio-addons/issues
[adrianslabu]: https://github.com/adrianslabu