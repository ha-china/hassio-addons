# Home Assistant 社区插件: Freenom-DNS-Updater
![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield] ![支持 armhf 架构][armhf-shield] ![支持 armv7 架构][armv7-shield] ![支持 i386 架构][i386-shield]
![项目维护][maintenance-shield]

Homeassistant OS 的 Freenom DNS 更新器

## 关于

Freenom 是一个（免费的）注册商提供商。这是基于 @maxisoft 的 [Freenom DNS Updater](https://github.com/maxisoft/Freenom-dns-updater) 的工作制作的 Docker 镜像。<br />
完整的功能列表可以在那找到。

## 安装

[![FaserF Homeassistant Addons](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)
<br />
本插件的安装非常简单，与安装任何其他自定义 Home Assistant 插件没有区别。<br />
只需点击上面的链接或将我的仓库添加到 hassio 插件库： <https://github.com/FaserF/hassio-addons>

将你的配置文件放在 /share 的某个地方<br />

## 配置

**注意**: _当配置更改时，请记得重新启动插件。_

示例插件配置：

```yaml
config_file: /share/freenom.yaml
update_time_in_seconds: 86400
```

**注意**: _这只是一个示例，不要复制粘贴！创建你自己的！_

### 选项: `config_file`

这个选项是必需的。根据你在 homeassistant 安装中的配置文件的位置进行更改。

**注意**: _必须在 `/share/` 文件夹中的某个地方！其他文件夹对本插件不可见。_

### 选项: `update_time_in_seconds`

输入更新应完成的时间（续订域名、续订 IP 地址等），单位为秒。

## 支持

有问题或疑问？

你可以在这里 [提出问题][issue] GitHub。
请记住，这个软件仅在运行在 Raspberry Pi 4 上的 armv7 上进行测试。

## 作者与贡献者

原始程序来自 maxisoft。有关更多信息，请访问此页面： <https://github.com/maxisoft/Freenom-dns-updater>
hassio 插件由 [FaserF] 提供。

## 许可证

MIT 许可证

版权所有 (c) 2019-2023 FaserF & maxisoft

特此免费授予任何获得此软件及相关文档文件（“软件”）副本的人，使用该软件的权利，无限制，包括但不限于使用、复制、修改、合并、发布、分发、再授权和/或销售该软件副本的权利，以及允许提供软件的人这样做，遵循以下条件：

上述版权声明和此许可声明应包含在软件的所有副本或实质部分中。

该软件按原样提供，没有任何种类的担保，无论是明示或暗示，包括但不限于适销性、特定用途的适用性和不侵权的担保。在任何情况下，作者或版权持有人对因使用该软件或其他交易而引起的任何索赔、损害或其他责任，均不承担责任，无论是在合同、侵权或其他方面。

[maintenance-shield]: https://img.shields.io/maintenance/yes/2023.svg
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg
[FaserF]: https://github.com/FaserF/
[issue]: https://github.com/FaserF/hassio-addons/issues