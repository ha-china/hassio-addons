# Home Assistant Community Add-on: pterodactyl Wings (Daemon)
![Supports aarch64 Architecture][aarch64-shield] ![Supports amd64 Architecture][amd64-shield]
![Project Maintenance][maintenance-shield]

pterodactyl Wings (Daemon) Gameserver for Homeassistant OS

![Ingress Support](../_images/pterodactyl/ingress.png)

## About

Pterodactyl® 是一个免费、开源的游戏服务器管理面板，使用 PHP、React 和 Go 构建。它以安全性为设计重点，所有游戏服务器都在隔离的 Docker 容器中运行，同时向最终用户展示一个美观且直观的 UI。<br />
停止满足于平庸。让游戏服务器成为您平台上的首要公民。

## Installation

[![FaserF Homeassistant Addons](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)
<br />
此插件的安装非常简单，与安装任何其他自定义 Home Assistant 插件没有区别。<br />
只需点击上面的链接或添加我的仓库到 hassio 插件仓库： <https://github.com/FaserF/hassio-addons>

在安装此插件之前，需要安装 MariaDB 集成！

## Configuration

**注意**: _当配置更改时，请记得重启插件。_

示例插件配置：

```yaml
config_file: /share/path/to/config.yml
```
<br />

**注意**: _这只是一个示例，不要复制粘贴它！创建你自己的！_

### 选项: `config_file`

此选项是必需的。指向你的 config.yml 文件的路径。

**注意**: _文件必须存储在 `/share/` 文件夹内的某个位置_

## Ingress

此插件将支持 Homeassistant Ingress。到目前为止，它仍在开发中！

## Support

有问题或遇到困难？

你可以在 [这里打开一个 GitHub 问题][issue]。
请注意，此软件仅在运行在 Raspberry Pi 4 上的 armv7 上经过测试。

## 作者和贡献者

原始程序来自 pterodactyl 项目。更多信息请访问此页面： <https://pterodactyl.io/>
hassio 插件由 [FaserF] 提供。

## 许可证

MIT 许可证

版权所有 (c) 2019-2025 FaserF & pterodactyl 项目

特此授予任何获得此软件副本的人（“软件”）在软件中进行的自由处理权，不受任何限制，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，无论是明示的还是暗示的，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任负责，无论这些责任是由于合同、侵权或其他行为引起的，也不论这些责任是由于软件的使用或其他交易引起的。

[maintenance-shield]: https://img.shields.io/maintenance/yes/2025.svg
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[FaserF]: https://github.com/FaserF/
[issue]: https://github.com/FaserF/hassio-addons/issues
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
