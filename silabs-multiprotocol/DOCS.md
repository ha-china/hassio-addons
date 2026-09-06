# Home Assistant 插件：Silicon Labs Multiprotocol

**注意**：此插件有自动安装适用于 Home Assistant Yellow、SkyConnect 和 Connect ZBT-1 的正确固件的选项。请按照 [该指南](https://github.com/NabuCasa/silabs-firmware/wiki/Flash-Silicon-Labs-radio-firmware-manually) 将固件更改为与其他 Zigbee 软件兼容的版本。

## 安装

按照以下步骤在系统上安装插件：

1. 在您的 Home Assistant 前端中导航至 **设置** -> **插件、备份 & 监控** -> **插件商店**。
2. 找到 "Silicon Labs Multiprotocol" 插件并点击它。
3. 点击 "安装" 按钮。

## 如何使用

插件需要一个通过串口访问的基于 Silicon Labs 的无线模块（例如 Yellow 上的模块或大多数 USB 基于的无线适配器）。

固件加载后，请按照以下步骤操作：

1. 在插件配置选项卡中选择正确的 `device` 并按 `保存`。
   在 Home Assistant Yellow 上使用 `/dev/ttyAMA1`。
2. 启动插件。

**注意**：Web 前端仅在启用 OpenThread 时可访问（详见下文）。

### Zigbee

要使用 Zigbee 与 ZHA 集成，请按照以下步骤配置：

1. 记住/复制插件的主机名（例如 `c8f00288-silabs-multiprotocol`）。
2. 将 Zigbee 家居自动化（ZHA）集成添加到 Home Assistant Core。
3. 当询问串行设备路径时，选择 `手动输入`。
4. 选择 `EZSP` 作为无线类型。
5. 作为串行路径，输入 `socket://<上述主机名>:9999`。
6. 波特率和流控制无关紧要。
7. 按 `提交`。添加 ZHA 应该成功，您应该能够像使用任何其他支持的无线类型一样使用 ZHA。

### OpenThread

此时 OpenThread 支持仍处于实验阶段。此插件使您的 Home Assistant 安装成为 OpenThread 边界路由器（OTBR）。一个名为 `otbr` 的基本集成正在为 Home Assistant Core 开发中。

要使用 OTBR，请在配置选项卡中启用它并重启插件。Home Assistant 应该会自动发现 OpenThread 边界路由器并根据需要进行配置。

### Web 界面（高级）

OTBR 还提供了一个 Web 界面。然而，Web 界面有一些注意事项（例如，形成网络不会生成一个可以离网路由的 IPv6 前缀，这会导致第一次插件重启时 IPv6 地址的变化）。仍然可以为调试目的启用 Web 界面。请确保在主机接口上暴露 Web UI 端口和 REST API 端口（后者需要在 8081 端口）。为此，请点击 "显示禁用的端口"，并在 OpenThread Web UI 中输入一个端口（例如 8080），在 OpenThread REST API 端口字段中输入 8081）。

### 自动固件升级

如果设置了 `autoflash_firmware` 配置，插件将在检测到 Home Assistant Connect ZBT-1/SkyConnect 或 Home Assistant Yellow 时自动安装或更新为 RCP Multi-PAN 固件。

**注意**：当前切换回仅 Zigbee（EmberZNet）固件仍需要手动步骤。您可以在 Nabu Casa Silicon Labs 固件库 Wiki 中找到有关手动闪存 [Silicon Labs 无线固件](https://github.com/NabuCasa/silabs-firmware/wiki/Flash-Silicon-Labs-radio-firmware-manually) 的指南。

## 配置

插件配置：

| 配置项              | 描述                                                      |
|---------------------|-----------------------------------------------------------|
| device（必填）     | 连接 Silicon Labs 无线电的串行服务                       |
| baudrate            | 串行端口的波特率（取决于固件）                           |
| flow_control        | 是否启用硬件流控制（取决于固件）                         |
| autoflash_firmware  | 自动安装/更新固件（Home Assistant Connect ZBT-1/SkyConnect/Yellow） |
| network_device      | CPC 守护进程可以找到 Silicon Labs 无线电的主机和端口（优先于 device） |
| cpcd_trace          | 协处理器通信跟踪（在日志中跟踪）                          |
| otbr_enable         | 启用 OpenThread 边界路由器                               |
| otbr_log_level      | 设置 OpenThread 边界路由器代理的日志级别                 |
| otbr_firewall       | 启用 OpenThread 边界路由器防火墙以阻止不必要的流量       |

## 架构

该插件在内部运行多个服务。此架构图显示了插件当前实现的内容。

![Silicon Labs Multiprotocol 插件架构](https://raw.githubusercontent.com/home-assistant/addons/master/silabs-multiprotocol/images/architecture.png)

## 支持

有问题吗？

您有几个选项可以获得答案：

- [Home Assistant Discord 聊天服务器][discord]。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]。

如果您发现了错误，请 [在我们的 GitHub 上打开问题][issue]。

[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[reddit]: https://reddit.com/r/homeassistant
[issue]: https://github.com/home-assistant/addons/issues