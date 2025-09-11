# Home Assistant 插件：OpenThread 边界路由器插件

OpenThread 边界路由器插件。该插件使用上游 OpenThread 边界路由器实现，并将其封装为 Home Assistant 的一个插件。

**注意：** 这需要支持 802.15.4 的无线电设备，并且需要有 OpenThread RCP 固件。如果您使用的是 [Home Assistant Yellow](https://www.home-assistant.io/yellow/) 或 [Home Assistant Connect ZBT-1](https://www.home-assistant.io/connectzbt1/)（之前称为 SkyConnect），那么正确的固件会自动安装。

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]

## 关于

此插件允许您形成或加入一个 Thread 网络，并使 Home Assistant 成为一个 Thread 边界路由器。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg