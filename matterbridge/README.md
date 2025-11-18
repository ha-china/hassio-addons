# Home Assistant Community Add-on: Matterbridge
![Supports aarch64 Architecture][aarch64-shield] ![Supports amd64 Architecture][amd64-shield] ![Supports armhf Architecture][armhf-shield] ![Supports armv7 Architecture][armv7-shield]
![Project Maintenance][maintenance-shield]

Matterbridge for Homeassistant OS

## About

一个简单的聊天桥接<br />
让人们在想去的地方相遇。<br />
连接越来越多的协议。

## Installation

[![FaserF Homeassistant Addons](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)
<br />
这个插件的安装非常简单，与安装任何其他自定义 Home Assistant 插件没有什么不同。<br />
只需点击上面的链接或添加我的仓库到 hassio 插件库： <https://github.com/FaserF/hassio-addons>

将您的网站文件放到 /share/htdocs<br />
您的 index.html 应该放在的示例文件： /share/htdocs/index.html <br />

如果您想将您的网站与 mariadb 数据库集成。请确保安装了 MariaDB 插件！

## Configuration

**注意**: _更改配置时请重启插件。_

示例插件配置：

```yaml
config_path: /share/matterbridge.toml
```

**注意**: _这只是个示例，不要复制粘贴！创建自己的！_

### 选项: `config_path`

您的 matterbridge 配置文件的路径。查看示例配置： <https://github.com/42wim/matterbridge/blob/master/matterbridge.toml.sample>

**注意**: _它必须放在 /share 文件夹的某个位置！_

## Support

有问题或问题？

您可以在 [这里打开问题][issue] GitHub。
请注意，这个软件只测试在运行在 Raspberry Pi 4 的 armv7 上。

## 作者和贡献者

原始程序来自 42wim。更多信息请访问此页面： <https://github.com/42wim/matterbridge><br />
hassio 插件由 [FaserF] 提供。

## 许可证

MIT 许可证

版权 (c) 2019-2025 FaserF & 42wim

特此免费授予任何获得此软件及关联文档文件（“软件”）副本的人，在软件中自由处理的权限，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许软件提供者这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，包括但不限于对适销性、特定用途适用性和非侵权的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任负责，无论这些责任是由于合同、侵权或其他行为引起的，还是与软件的使用或其他交易有关。

[maintenance-shield]: https://img.shields.io/maintenance/yes/2025.svg
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
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
