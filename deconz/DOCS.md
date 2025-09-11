# Home Assistant 插件：deCONZ

## 安装

按照以下步骤在你的系统上安装插件：

1. 在 Home Assistant 前端导航到 **设置** -> **插件** -> **插件商店**。
2. 找到 "deCONZ" 插件并点击。
3. 点击 "安装" 按钮。

## 如何使用

### 使用 RaspBee

如果你使用的是 RaspBee，你可能需要编辑 SD 卡根目录下的 `config.txt` 文件，以便识别 RaspBee 并分配设备名称。

在 `config.txt` 中添加以下内容：

```txt
enable_uart=1
dtoverlay=pi3-miniuart-bt
```

### 配置插件

插件需要知道你的 ConBee/RaspBee 可以在哪里找到，因此你需要配置插件以指向正确的设备。

如果你使用的是 Home Assistant，可以在 `设置 -> 系统 -> 硬件` 页面上找到该设备的正确值。如果可能，建议使用设备的 "by-id" 路径，因为如果系统中添加了其他设备，该路径不会改变。

1. 在插件配置中将 `device` 选项中的 `null` 替换为设备名称，并用引号括起来：例如像 `"/dev/serial/by-id/usb-dresden_elektronik_ingenieurtechnik_GmbH_ConBee_II_XXXXXXXX-if00"`、`"/dev/ttyUSB0"`、`"/dev/ttyAMA0"` 或 `"/dev/ttyACM0"`。
2. 点击 "保存" 以保存插件配置。
3. 切换 "在侧边栏中显示" 以将其添加到你的 Home Assistant 侧边栏。
4. 启动该插件。

安装并启动此插件后，通过 "WEB UI" 按钮访问 deCONZ WebUI（"Phoscon"）。

## 配置 Home Assistant deCONZ 集成

默认情况下，Home Assistant 启用了 `discovery` 集成，这会自动发现此插件。

在启动此插件后，导航到 **设置** -> **设备与服务** -> **集成** 页面以配置 deCONZ 集成。

如果你的 Home Assistant 实例上没有启用 `discovery`，请按照以下说明配置 deCONZ 集成：

<https://www.home-assistant.io/integrations/deconz/>

## 迁移到此插件

要将 deCONZ 迁移到 Home Assistant 和此插件，请通过 Phoscon WebUI 备份你的 deCONZ 配置，然后在安装/重新安装后恢复该配置。

**_你必须执行这些步骤，否则你的灯、组名称和其他数据将丢失！_**

但是，你的 Zigbee 设备仍会与 ConBee 或 RaspBee 硬件配对。

## 通过 VNC 访问 deCONZ 应用程序并查看网络拓扑

该插件允许你通过 VNC 访问在远程桌面上运行的基础 deCONZ 应用程序。它允许你查看 Zigbee 网络拓扑（在调试网络问题时非常有帮助），还为你提供访问大量高级功能的权限。

要启用它：

- 在插件的 "网络" 配置部分设置 VNC 的端口号，然后点击 "保存"。建议使用端口 5900，但任何高于 5900 的端口也可以使用。
- 重启该插件。

要访问它，你需要一个 [VNC Viewer][vnc-viewer] 应用程序。如果你使用的是 macOS，运气不错，因为 VNC 是内置的。打开聚焦搜索并输入 VNC 服务 URL。

VNC 服务 URL 看起来像 [vnc://homeassistant.local:5900](vnc-service-url)。如有更改，请调整端口和主机名。

## 升级 RaspBee 和 ConBee 固件

该插件允许你通过 Phoscon Web 界面轻松升级你的固件。

转到 "设置 -> 网关"，然后点击升级按钮。

然而，一些 USB 设备（如 Aeotec Z-Wave 设备）会干扰升级过程，导致固件升级静默失败。如果你最终得到的固件版本与开始升级前一样，请考虑拔掉其他设备并重试。

如果还是不行，请尝试 [手动升级固件][manual-upgrade]。

## 使用 deCONZ/Phoscon API 结合其他插件

一些插件能够直接使用 deCONZ API。Node-RED 是其中一个可以作为插件使用的应用，它可以使用 `node-red-contrib-deconz` 节点消费 deCONZ API。

**警告** 请勿使用以下设置手动从 Home Assistant 内部设置集成！

要允许这些插件连接到 deCONZ，请使用以下设置：

- **主机**: `core-deconz`
- **（API）端口**: `40850`
- **WebSocket 端口**: `8081`

_请注意：上述设置在未来的插件更新中可能会发生变化。_

## 高级调试输出控制

在插件中添加了隐藏控制，用于控制 deCONZ 的调试输出。以下选项是隐藏的，但可以添加到插件配置中：

- `dbg_info`
- `dbg_aps`
- `dbg_otau`
- `dbg_zcl`
- `dbg_zdp`

这些选项需要一个表示日志级别的数字。

以下是启用 `dbg_aps` 的示例插件配置，日志级别为 1：

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

你的 ConBee/RaspBee 的设备地址。

如果你使用的是 Home Assistant，可以在 `Supervisor -> 系统 -> 主机系统 -> 硬件` 页面上找到该设备的正确值。如果可能，建议使用设备的 "by-id" 路径，因为如果系统中添加了其他设备，该路径不会改变。

在大多数情况下，这看起来像以下之一：

- `"/dev/serial/by-id/usb-dresden_elektronik_ingenieurtechnik_GmbH_ConBee_II_XXXXXXXX-if00"` （且类似于 RaspBee 和原始 ConBee，将 `XXXXXXXX` 替换为你在设备页面上看到的值）
- `"/dev/ttyUSB0"`
- `"/dev/ttyAMA0"`
- `"/dev/ttyACM0"`

## 疑难解答

### 我的网关在 Home Assistant 中显示的 ID 为 0000000000000000

这是一个较老的错误，已经在插件中解决。插件在发送网关 ID 时过快，导致 deCONZ 尚未分配 ID。

这可能在 Home Assistant 中导致问题，例如没有设备。也可能在插件内部发生更改后，无法向 Home Assistant 传达新的设置。

可以通过以下步骤来解决：

1. 通过进入 Web UI 备份你的 deCONZ 数据，选择菜单：**设置** -> **网关** -> **备份选项**按钮，接着创建一个新的备份并下载到计算机上。
2. 卸载该插件。
3. 在 Home Assistant 中，删除你为 deCONZ 创建的当前集成。
4. 重启 Home Assistant。
5. 再次安装 deCONZ 插件，并按照 [说明](#配置插件) 重新配置它。
6. 在 Web UI 中的同一位置恢复第一步创建的备份。
7. 重启插件，然后再次重启 Home Assistant。
8. 按照 [设置 deCONZ 集成](#配置-home-assistant-deconz-集成) 的说明进行操作。

### 我的集成在升级到 4.x 后没有显示设备

_请确保你的网关 ID 不是 0000000000000000 的问题存在。_

这可能是因为你之前意外地使用了旧的发现或手动设置了集成。因此，插件无法通知 Home Assistant 已经更改的内部设置，而这些是在 4.x 中发生的。

解决此问题的步骤为：

1. 在 Home Assistant 中，删除你为 deCONZ 创建的当前集成。
2. 重启 Home Assistant。
3. 按照 [设置 deCONZ 集成](#配置-home-assistant-deconz-集成) 的说明进行操作。

这将确保你未来有一个正常工作的集成和插件。

## 已知问题和限制

- 为你的 Raspberry Pi 使用至少 2.5A 的电源！
  这可以避免在使用这个插件时出现奇怪的行为。
- 插件不支持 UPnP。
- 如果由于某种原因，deCONZ 前端没有为你的 ConBee 或 RaspBee 提供初始设置并不断要求密码，那么很可能 `delight` 是你可以使用的默认密码。

## 支持

有问题吗？

你有几个选项可以得到解答：

- [Home Assistant Discord 聊天服务器][discord]。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]。
- [deCONZ discord 服务器](https://discord.gg/QFhTxqN)。

如果你发现了一个错误，请 [在我们的 GitHub 上提交问题][issue]。

[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[issue]: https://github.com/home-assistant/addons/issues
[manual-upgrade]: https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/Update-deCONZ-manually
[reddit]: https://reddit.com/r/homeassistant
[vnc-viewer]: https://bintray.com/tigervnc/stable/tigervnc/
[vnc-service-url]: vnc://homeassistant.local:5900