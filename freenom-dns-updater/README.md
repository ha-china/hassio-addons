# Home Assistant Community Add-on: Freenom-DNS-Updater
![Supports aarch64 Architecture][aarch64-shield] ![Supports amd64 Architecture][amd64-shield] ![Supports armhf Architecture][armhf-shield] ![Supports armv7 Architecture][armv7-shield] ![Supports i386 Architecture][i386-shield]
![Project Maintenance][maintenance-shield]

Freenom DNS Updater for Homeassistant OS

## 关于

Freenom 是一个（免费）注册商提供者。这是一个基于 @maxisoft 的工作的 docker 镜像，他的 [Freenom DNS Updater](https://github.com/maxisoft/Freenom-dns-updater)。<br />
完整的功能列表可以在那里找到。

## 安装

[![FaserF Homeassistant Addons](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)
<br />
这个插件的安装非常简单，与安装任何其他自定义 Home Assistant 插件没有区别。<br />
只需点击上面的链接或添加我的仓库到 hassio 插件仓库： <https://github.com/FaserF/hassio-addons>

将您的配置文件放在 /share 中的某个地方

## 配置

**注意**：_当配置更改时，请记住重新启动插件。_

示例插件配置：

```yaml
config_file: /share/freenom.yaml
update_time_in_seconds: 86400
```

**注意**：_这只是一个示例，不要复制粘贴它！创建您自己的！_

### 选项：`config_file`

这个选项是必需的。根据您的 Home Assistant 安装中配置文件的位置进行更改。

**注意**：_它必须在 `/share/` 文件夹中的某个地方！其他文件夹对这个插件不可见。_

### 选项：`update_time_in_seconds`

输入更新应该进行的时间（续订域名、续订 IP 地址等）以秒为单位。

## 支持

有问题或问题？

您可以在 [这里打开问题][issue] GitHub。
请记住，这个软件只在 armv7 上运行在 Raspberry Pi 4 上进行了测试。

## 作者和贡献者

原始程序来自 maxisoft。更多信息请访问此页面： <https://github.com/maxisoft/Freenom-dns-updater>
hassio 插件由 [FaserF] 提供。

## 许可证

MIT 许可证

版权 (c) 2019-2023 FaserF & maxisoft

特此授予任何人免费获得此软件和关联文档文件（“软件”）的副本的许可
在没有限制的情况下处理软件，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件的副本
并允许受软件提供的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，无论是明示的还是暗示的
包括但不限于对适销性、特定用途适用性和非侵权的保证。
在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任负责
无论是在合同、侵权或其他行为中，均由软件或软件的使用或其他交易引起。

[maintenance-shield]: https://img.shields.io/maintenance/no/2023.svg
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg
[FaserF]: https://github.com/FaserF/
[issue]: https://github.com/FaserF/hassio-addons/issues
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
