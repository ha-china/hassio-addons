# Home Assistant 添加组件：OpenThread 边界路由器

## 安装

按照以下步骤在您的系统上安装此添加组件：

1. 在 Home Assistant 前端导航到 **设置** -> **添加组件、备份与主管** -> **添加组件商店**。
2. 点击右上角菜单并选择 "仓库"。
3. 添加 "https://github.com/home-assistant/addons" 作为 "Home Assistant 开发用添加组件仓库"。
4. 查找 "OpenThread 边界路由器" 添加组件并点击它。
5. 点击 "安装" 按钮。

## 如何使用

您需要一个支持 802.15.4 且由 OpenThread 烧录了 OpenThread RCP 固件的无线电设备。Home Assistant Yellow 以及 Home Assistant SkyConnect/Connect ZBT-1 都可以运行 OpenThread，并且会由 Home Assistant Core 烧录正确的固件。

如果您使用的是 Home Assistant Yellow，请选择 `/dev/ttyAMA1` 作为设备。

### 备选无线电设备

网站 [openthread.io 维护了一个支持的平台列表][openthread-platforms]，列出了其他支持 Thread 的无线电设备。一个文档齐全的开发用无线电设备是 Nordic Semiconductor 的 [nRF52840 转接器][nordic-nrf52840-dongle]。该转接器需要较新版本的 OpenThread RCP 固件。[这篇文章][nordic-nrf52840-dongle-install] 概述了为 nRF52840 转接器安装 RCP 固件的步骤。

固件加载后，请按照以下步骤操作：

1. 在添加组件配置选项卡中选择正确的 `device` 并点击 `保存`。
2. 启动添加组件。

### OpenThread 边界路由器

此添加组件将您的 Home Assistant 安装转换为 OpenThread 边界路由器 (OTBR)。边界路由器可用于通过 Thread 组网 Matter 设备。Home Assistant Core 将自动检测此添加组件并创建一个名为 "Open Thread 边界路由器" 的新集成。在 Home Assistant Core 2023.3 及更高版本中，OTBR 将自动配置。Thread 集成允许您检查网络配置。

### Web 界面（高级）

OTBR 还提供了一个 Web 界面。然而，Web 界面存在一些限制（例如，组网不会生成一个离链可路由的 IPv6 前缀，这会导致在首次重启添加组件时更改 IPv6 地址）。尽管如此，仍然可以启用 Web 界面用于调试目的。请确保在主机接口上暴露 Web UI 端口和 REST API 端口（后者需要在端口 8081）。为此，请点击 "显示禁用端口" 并在 OpenThread Web UI 中输入一个端口（例如 8080），在 OpenThread REST API 端口字段中输入 8081。

## 配置

添加组件配置：

| 配置选项      | 描述                                        |
|---------------|---------------------------------------------|
| device (必需) | OpenThread RCP 无线电设备连接的串口        |
| baudrate      | 串口波特率（取决于固件）                   |
| flow_control  | 如果应启用硬件流控制（取决于固件）          |
| otbr_log_level| 设置 OpenThread 边界路由器代理的日志级别    |
| firewall      | 启用 OpenThread 边界路由器防火墙以阻止不必要的数据流 |
| nat64         | 启用 NAT64 以允许 Thread 设备访问 IPv4 地址  |
| network_device| 连接到基于网络的 RCP 的 IP 地址和端口（见下文） |

> [!WARNING]
> OTBR 期望连接的 RCP 无线电设备处于可靠的链路（如 UART 或 SPI）。使用 TCP/IP 连接到远程 RCP 无线电设备会破坏这一假设。如果 TCP/IP 连接失败，OTBR 将无法干净地关闭，并会在您的网络中留下陈旧的路线。这可能导致 Thread 设备在即使有其他路由器的情况下也最多长达 30 分钟（路由生命周期）无法访问。
>
> RCP 协议不是设计为在 IP 网络上传输的：它是一个对时间敏感的协议。如果您的网络链路具有过高的延迟，您可能会遇到 Thread 问题。由于 Thread 具有网络功能，建议在插入 RCP 无线电设备的系统上运行 Thread 边界路由器。

> [!NOTE]
> 当使用网络设备时，您仍然需要设置一个虚拟串口设备，例如 `/dev/ttyS3`。

## 支持

有问题？

您有几个选项来获得答案：

- [Home Assistant Discord 聊天服务器][discord]。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]。

如果您发现了一个错误，请 [在我们的 GitHub 上打开一个问题][issue]。

[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[reddit]: https://reddit.com/r/homeassistant
[issue]: https://github.com/home-assistant/addons/issues
[openthread-platforms]: https://openthread.io/platforms
[nordic-nrf52840-dongle]: https://www.nordicsemi.com/Products/Development-hardware/nrf52840-dongle
[nordic-nrf52840-dongle-install]: https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/protocols/thread/tools.html#configuring_a_radio_co-processor