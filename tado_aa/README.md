# Home Assistant 社区插件：Tado 自动辅助地理围栏和开窗检测
![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield] ![支持 armhf 架构][armhf-shield] ![支持 armv7 架构][armv7-shield]
![项目维护][maintenance-shield]

适用于 Home Assistant OS 的 Tado 自动辅助地理围栏和开窗检测

## 关于

一个 Python 脚本，根据您的存在（到达或离开）自动调整家中的温度，使用 Tado 应用的设置。它还会在 Tado TRV 检测到任何房间有开窗时关闭供暖（激活开窗模式）。

## 安装

[![FaserF Home Assistant 插件](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)

此插件的安装非常简单，类似于安装任何其他自定义 Home Assistant 插件。
只需点击上面的链接或手动将此仓库添加到您的 Home Assistant 插件仓库：
<https://github.com/FaserF/hassio-addons>

## 配置

示例插件配置：

```yaml
username: my@email.com
password: mySecretPassword
minTemp: 5       # 可选 – 设置的最小温度
maxTemp: 25      # 可选 – 设置的最大温度
```

> **注意**：_这只是一个示例。请使用您自己的凭证和所需的温度设置。_

### 选项：`username`

定义您的 Tado 用户名（通常是您的电子邮件地址）。

### 选项：`password`

定义您的 Tado 密码。

### 选项：`minTemp`

可选。定义当您离开时 Tado 应该设置的最小温度。

### 选项：`maxTemp`

可选。定义当您回家时 Tado 应该设置的最大温度。

## 支持

有问题或问题？
如果您遇到任何问题或有建议，可以在 GitHub 上[打开问题][issue]。

⚠️ **请注意**：此插件仅在 `armv7`（Raspberry Pi 4）上进行了测试。

## 致谢

此插件基于 [adrianslabu] 的工作，他创建了原始的 Python 脚本：
➡️ <https://github.com/adrianslabu/tado_aa>

Home Assistant 插件包装器由 [FaserF] 创建和维护。

[maintenance-shield]: https://img.shields.io/maintenance/yes/2025.svg
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[FaserF]: https://github.com/FaserF/
[issue]: https://github.com/FaserF/hassio-addons/issues
[adrianslabu]: https://github.com/adrianslabu
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
