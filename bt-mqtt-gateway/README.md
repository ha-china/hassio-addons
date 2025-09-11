# Home Assistant 社区附加组件：Bluetooth-MQTT-Gateway
![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield] ![支持 armhf 架构][armhf-shield] ![支持 armv7 架构][armv7-shield] ![支持 i386 架构][i386-shield]
![项目维护][maintenance-shield]

# 项目已被原作者弃用，因此此附加组件将不会接收新功能
请查看 [这里](https://github.com/zewelor/bt-mqtt-gateway)，建议使用 Bluetooth Proxy。

针对 Homeassistant OS 的 Bluetooth-MQTT-Gateway

## 关于

一个简单的 Python 脚本，提供 Bluetooth 到 MQTT 的网关，通过自定义工作线程轻松扩展。
请参阅 [Wiki](https://github.com/zewelor/bt-mqtt-gateway/wiki) 以获取更多信息（支持的设备、功能等）

这可以用于提高蓝牙温控器的可靠性。请参见 <https://github.com/home-assistant/core/issues/28601> 获得更多信息。

## 安装

此附加组件的安装非常简单，与安装其他自定义 Home Assistant 附加组件没有区别。
只需将我的仓库添加到 hassio 附加组件库：<https://github.com/FaserF/hassio-addons>

将您的配置文件放置在 /share/bt-mqtt-gateway.yaml
请确保已经安装了 MQTT 附加组件。

## 配置

**注意**：_在更改配置后，请记得重启附加组件。_
到目前为止，这些配置选项没有任何作用！它们尚未实现，但已经规划！！！

附加组件配置示例：

```yaml
config_path: /share/bt-mqtt-gateway.yaml
debug: true
```

**注意**：_这只是一个示例，请勿复制粘贴！创建你自己的！_

### 选项： `config_path`

此选项是必需的。根据您的配置文件在 Homeassistant 安装中的位置进行更改。

### 选项： `debug`

将此选项设置为 "true" 将以调试模式启动附加组件。默认值：false
-> 要启用调试模式，请在 /share/bt-mqtt-gateway-debug.txt 处创建一个空文件

## 支持

有问题吗？

您可以 [在这里提交问题][issue] GitHub。
请记住，这款软件仅在 Raspberry Pi 4 上的 armv7 上进行了测试。

## 作者和贡献者

原始程序来自 @zewelor。欲了解更多信息，请访问此页面： <https://github.com/zewelor/bt-mqtt-gateway>
此 hassio 附加组件由 [FaserF] 提供。

## 许可证

MIT 许可证

版权 (c) 2022 FaserF & zewelor

特此免费授权任何获得本软件及相关文档文件（“软件”）副本的人，在不受限制的情况下使用、复制、修改、合并、出版、分发、再许可和/或出售本软件副本，并允许提供软件的人这样做，条件如下：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

本软件按 “原样” 提供，不附带任何类型的担保，包括但不限于对适销性、特定用途适用性和非侵权的担保。在任何情况下，作者或版权持有人均不对因本软件或使用或其他交易所引起的任何索赔、损害或其他责任承担责任，无论是合同诉讼、侵权诉讼或其他原因。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[FaserF]: https://github.com/FaserF/
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg
[issue]: https://github.com/FaserF/hassio-addons/issues
[maintenance-shield]: https://img.shields.io/maintenance/no/2024.svg