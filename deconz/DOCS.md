# Home Assistant Add-on: deCONZ

## 安装

按照以下步骤在您的系统上安装此插件：

1. 在 Home Assistant 前端导航到 **设置** -> **插件** -> **插件商店**。
2. 找到 "deCONZ" 插件并点击它。
3. 点击 "安装" 按钮。

## 使用方法

### 使用 RaspBee

如果您使用 RaspBee，您可能需要编辑 SD 卡根目录中的 `config.txt` 文件，以便您的 RaspBee 被识别并分配一个设备名称。

在您的 `config.txt` 中添加以下内容：

```txt
enable_uart=1
dtoverlay=pi3-miniuart-bt
```

### 配置插件

插件需要知道您的 ConBee/RaspBee 的位置，因此，您需要配置插件以指向正确的设备。

如果您使用 Home Assistant，您可以在 **设置** -> **系统** -> **硬件** -> **所有硬件** 页面上找到此的正确值。如果存在，建议使用 "by-id" 路径到设备，因为它不会在系统中添加其他设备时发生变化。

1. 在插件配置中的 `device` 选项中替换 `null`，并指定带引号的设备名称：例如，类似于 <br>
   `"/dev/serial/by-id/usb-dresden_elektronik_ingenieurtechnik_GmbH_ConBee_II_XXXXXXXX-if00"`，
   `"/dev/ttyUSB0"`，`"/dev/ttyAMA0"`，或 `"/dev/ttyACM0"`。
2. 点击 "保存" 以保存插件配置。
3. 切换 "在侧边栏中显示" 以将其添加到您的 Home Assistant 侧边栏。
4. 启动插件。

安装并启动此插件后，您可以在 Web UI 中选择 **deCONZ** 以通过 VNC 访问 deCONZ GUI，或选择 **Phoscon** 以在 Phoscon 应用中配置设置。

## 配置 Home Assistant deCONZ 集成

默认情况下，Home Assistant 启用了 `discovery` 集成，它将自动发现此插件。

启动此插件后，导航到 **设置** -> **设备和服务** -> **集成** 页面以配置 deCONZ 集成。

如果您在 Home Assistant 实例上未启用 `discovery`，请按照以下说明配置 deCONZ 集成：

<https://www.home-assistant.io/integrations/deconz/>

## 迁移到此插件

要将 deCONZ 迁移到 Home Assistant 和此插件，请通过 Phoscon 应用备份数据，并在安装/重新安装后恢复。

**_您必须执行这些步骤，否则您的灯、组名称和其他数据将丢失！_**

但是，您的 Zigbee 设备仍然会与您的 ConBee 或 RaspBee 硬件配对。

## 通过 VNC 访问 deCONZ 应用程序并查看网状网络

插件允许您通过 VNC 访问在远程桌面上运行的底层 deCONZ 应用程序。它允许您查看 Zigbee 网状网络（在调试网络问题时非常有用），但还提供了许多高级功能。

要启用它：

- 在插件的 "网络" 配置部分设置 VNC 端口号，然后点击 "保存"。建议使用端口 5900，但任何其他端口都可以（只要高于 5900）。
- 重新启动插件。

要访问它，您需要一个 [VNC Viewer][vnc-viewer] 应用程序。如果您使用 macOS，您很幸运，因为 VNC 是内置的。打开 Spotlight 搜索并输入 VNC 服务 URL。

VNC 服务 URL 看起来像 [vnc://homeassistant.local:5900](vnc-service-url)。如果您在 Home Assistant 主机系统设置中更改了端口或主机名，请相应调整端口。

## 升级 RaspBee 和 ConBee 固件

此插件允许您轻松地从 Phoscon 应用程序直接升级固件。

在 Phoscon 应用程序中，导航到 **设置** -> **网关**，然后选择升级按钮。

但是，某些 USB 闪存驱动器（如 Aeotec Z-Wave 闪存驱动器）可能会干扰升级过程，导致固件升级失败。如果您在开始升级后得到与之前相同的固件版本，请考虑拔掉其他闪存驱动器并重试。

如果仍然不起作用，请尝试 [手动升级固件][manual-upgrade]。

## 使用 deCONZ/Phoscon API 与另一个插件

某些插件能够直接消费 deCONZ API。Node-RED 是其中一个可以作为插件提供的应用程序，它可以使用 `node-red-contrib-deconz` 节点消费 deCONZ API。

**警告：** 请不要使用这些设置在 Home Assistant 中设置集成。

要允许这些插件连接到 deCONZ，请使用以下设置：

- **主机**：`core-deconz`
- **(API) 端口**：`40850`
- **WebSocket 端口**：`8081`

_注意：上述设置可能在将来此插件的更新中发生变化。_

## 高级调试输出控制

插件中添加了隐藏控件，以允许控制 deCONZ 的调试输出。以下选项是隐藏的，但可以添加到插件配置中：

- `dbg_info`
- `dbg_aps`
- `dbg_otau`
- `dbg_zcl`
- `dbg_zdp`

这些选项需要一个表示日志级别的数字。

带 `dbg_aps` 在日志级别 1 上启用的插件配置示例：

```yaml
device: /dev/ttyUSB0
dbg_aps: 1

```

## 配置

插件配置：

```yaml
device: /dev/ttyAMA0
```

### 选项：`device`（必需）

您的 ConBee/RaspBee 的设备地址。

如果您使用 Home Assistant，您可以在 **设置** -> **系统** -> **硬件** -> **所有硬件** 页面上找到此的正确值。如果存在，建议使用 "by-id" 路径到设备，因为它不会在系统中添加其他设备时发生变化。

在大多数情况下，它看起来像以下之一：

- `"/dev/serial/by-id/usb-dresden_elektronik_ingenieurtechnik_GmbH_ConBee_II_XXXXXXXX-if00"` <br> 
   （以及类似的 RaspBee 和原始 ConBee，将 `XXXXXXXX` 替换为您在上述硬件页面上看到的价值）
- `"/dev/ttyUSB0"`
- `"/dev/ttyAMA0"`
- `"/dev/ttyACM0"`

## 故障排除

### 我的网关在 Home Assistant 中显示 ID 为 0000000000000000

这是一个在插件中已解决的旧问题。过去，插件在 deCONZ 分配网关 ID 之前发送网关 ID 太快了。

这可能会导致 Home Assistant 中的问题，例如没有设备。它还可能导致插件内部更改时无法向 Home Assistant 传达新设置的问题。

可以通过以下步骤解决：

1. 通过进入 Phoscon 应用程序，从菜单中选择：
  **设置** -> **网关** -> **备份选项**，然后创建
  一个新备份并将其下载到您的计算机上。
2. 卸载插件。
3. 在 Home Assistant 中删除您当前的 deCONZ 集成。
4. 重启 Home Assistant。
5. 再次安装 deCONZ 插件，并根据 [说明](#configure-the-add-on) 进行配置。
6. 在第一步中创建的备份，在 Phoscon 应用程序中与之前相同的位置恢复。
7. 重新启动插件，然后再次重启 Home Assistant。
8. 按照说明在 [设置 deCONZ 集成](#configuring-the-home-assistant-deconz-integration) 中的指示操作。

### 升级到 4.x 后我的集成显示没有设备

_请确保您没有 ID 为 0000000000000000 的问题。_

可能会发生您在过去意外使用了旧发现或手动设置集成的情况。由于此原因，插件无法通知 Home Assistant 4.x 中发生的内部设置更改。

要解决这个问题，请执行以下步骤以一次性解决此问题，以便将来不再遇到此问题。

1. 在 Home Assistant 中删除您当前的 deCONZ 集成。
2. 重启 Home Assistant。
3. 按照说明在 [设置 deCONZ 集成](#configuring-the-home-assistant-deconz-integration) 中的指示操作。

这将确保您有一个正常工作的集成和插件，以便将来使用。

## 已知问题和限制

- 为您的 Raspberry Pi 使用至少 2.5A 电源！
  这可以避免在使用此插件时出现奇怪的行为。
- 插件没有 UPnP 支持。
- 如果由于某种原因 deCONZ 前端没有为您提供初始 ConBee 或 RaspBee 设置，并不断要求密码，那么很可能是
  `delight` 是您可以使用默认密码进入的密码。

## 支持

有问题吗？

您有几个选项可以回答这些问题：

- [Home Assistant Discord 聊天服务器][discord].
- Home Assistant [社区论坛][forum].
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]
- [deCONZ Discord 服务器](https://discord.gg/QFhTxqN).

如果您发现了一个错误，请 [在我们的 GitHub 上打开一个问题][issue].

[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[issue]: https://github.com/home-assistant/addons/issues
[manual-upgrade]: https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/Update-deCONZ-manually
[reddit]: https://reddit.com/r/homeassistant
[vnc-viewer]: https://tigervnc.org
[vnc-service-url]: vnc://homeassistant.local:5900