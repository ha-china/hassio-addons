# Home Assistant 插件：OpenThread 边界路由器

## 安装

按照以下步骤在系统上安装插件：

1. 在您的 Home Assistant 前端导航到 **设置** -> **插件、备份与监控** -> **插件商店**。
2. 点击右上角菜单和“代码库”
3. 添加 "https://github.com/home-assistant/addons" 以添加“Home Assistant 开发插件仓库”。
4. 找到 "OpenThread 边界路由器" 插件并点击它。
5. 点击 "安装" 按钮。

## 如何使用

您需要一个支持 OpenThread 的 802.15.4 兼容无线电。Home Assistant Yellow 和 Home Assistant SkyConnect/Connect ZBT-1 都能够运行 OpenThread。此插件会自动在这些系统上安装所需的固件。

如果您使用的是 Home Assistant Yellow，请选择 `/dev/ttyAMA1` 作为设备。

### 替代无线电

网站 [openthread.io 维护了一个受支持平台的列表][openthread-platforms] 列出了其他支持 Thread 的无线电。用于开发的文档完善的无线电是 Nordic Semiconductor 的 [nRF52840 Dongle][nordic-nrf52840-dongle]。该 Dongle 需要最新版本的 OpenThread RCP 固件。
[这篇文章][nordic-nrf52840-dongle-install] 概述了安装 nRF52840 Dongle 的 RCP 固件的步骤。

固件加载完成后，请按照以下步骤操作：

1. 在插件配置标签中选择正确的 `device` 并点击 `保存`。
2. 启动插件。

### OpenThread 边界路由器

此插件使您的 Home Assistant 安装成为 OpenThread 边界路由器 (OTBR)。边界路由器可以用于配置通过 Thread 连接的 Matter 设备。Home Assistant Core 会自动检测此插件并创建一个名为 "Open Thread 边界路由器" 的新集成。随着 Home Assistant Core 2023.3 及更新版本，OTBR 将自动配置。Thread 集成允许检查网络配置。

### Web 界面（高级）

OTBR 还提供了一个 web 界面。然而，web 界面有一些缺陷（例如，组建一个网络不会生成一个可路由的离网 IPv6 前缀，这会导致在第一次插件重启时 IPv6 地址变化）。仍然可以启用 web 界面以用于调试目的。确保在主机接口上暴露 Web UI 端口和 REST API 端口（后者需要在端口 8081 上）。为此，请点击 “显示禁用的端口” 并在 OpenThread Web UI 中输入一个端口（例如 8080），在 OpenThread REST API 端口字段中输入 8081）。

## 配置

插件配置：

| 配置                | 描述                                                |
|--------------------|-----------------------------------------------------|
| device (必填)      | OpenThread RCP 无线电连接的串口                       |
| baudrate           | 串口波特率（取决于固件）                           |
| flow_control       | 是否启用硬件流控制（取决于固件）                    |
| autoflash_firmware | 自动安装/更新固件（Home Assistant SkyConnect/Yellow） |
| otbr_log_level     | 设置 OpenThread 边界路由器代理的日志级别           |
| firewall           | 启用 OpenThread 边界路由器防火墙以阻止不必要的流量 |
| nat64              | 启用 NAT64 以允许 Thread 设备访问 IPv4 地址        |
| network_device     | 连接到基于网络的 RCP 的 IP 地址和端口（见下文）    |

> [!警告]
> OTBR 期望连接的 RCP 无线电在可靠的链路上，例如 UART 或 SPI。使用 TCP/IP 来访问远程 RCP 无线电会打破这个假设。如果 TCP/IP 连接失败，OTBR 将无法正常关闭，并在您的网络中留下过期的路由。这将导致 Thread 设备在其他路由器可用的情况下，可能在长达 30 分钟（路由生命周期）内无法访问。
>
> RCP 协议并不旨在通过 IP 网络传输：它是一个对时序敏感的协议。如果您的网络链路存在过多延迟，您可能会遇到 Thread 问题。由于 Thread 具有网络能力，建议在 RCP 无线电插入的系统上运行 Thread 边界路由器。

> [!注意]
> 使用网络设备时，您仍然需要设置一个虚拟串口设备，例如 `/dev/ttyS3`。

## 支持

有问题吗？

您有几种选项可以得到解答：

- Home Assistant Discord 聊天服务器 [discord]。
- Home Assistant 社区论坛 [forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit] 中。

如果您发现了一个错误，请 [在我们的 GitHub 上提交问题][issue]。

[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[reddit]: https://reddit.com/r/homeassistant
[issue]: https://github.com/home-assistant/addons/issues
[openthread-platforms]: https://openthread.io/platforms
[nordic-nrf52840-dongle]: https://www.nordicsemi.com/Products/Development-hardware/nrf52840-dongle
[nordic-nrf52840-dongle-install]: https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/protocols/thread/tools.html#configuring_a_radio_co-processor