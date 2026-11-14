# Home Assistant社区附加组件: KNXD

## 安装

按照以下步骤在您的系统上安装附加组件：

1. 在您的Home Assistant前端中导航到 **Supervisor** -> **Add-on Store**。
2. 如果您尚未将此附加组件库添加到您的监视器中，点击右上角的菜单图标，选择 **Repositories**，将 `https://github.com/da-anda/hass-io-addons` 添加为新库，然后关闭对话框。
3. 找到“KNXD”附加组件并点击它。
4. 点击“安装”按钮。

## 配置

附加组件配置：

```yaml
    "address": "0.0.1",
    "client_address": "0.0.2:8",
    "interface": "tpuart",
    "device": "/dev/ttyACM0",
    "usb_filters": "",
    "custom_config": ""
```

### 选项
这些选项的描述部分来源于 `knxd` [文档](https://github.com/knxd/knxd/blob/master/doc/inifile.rst)。您将在那里找到更多示例和详细信息。

#### 选项 `address`

knxd守护进程本身的KNX地址。例如，用于来自组缓存的请求。

#### 选项 `client_address`

分配给客户端连接的地址范围。请注意，length参数表示要分配的地址数量。

示例：1.2.3:5（这将把地址1.2.3到1.2.7分配给knxd的客户端。）

#### 选项 `interface`

`knxd`应该使用的驱动程序作为与KNX总线交谈的接口。此附加组件的典型用例最常见的有：

- `tpuart`（用于基于UART的KNX接口，如Busware.de提供的接口）
- `usb`（用于商业USB KNX接口）

有关所有可能选项的完整列表，请参见`knxd`文档的 [drivers section](https://github.com/knxd/knxd/blob/master/doc/inifile.rst#drivers)。

#### 选项: `device`（某些接口可选）

您在Linux中适配器的物理设备地址。示例：

- **TPUART接口**: `/dev/ttyACM0`
- **USB接口**: 您可以尝试留空以让`knxd`自动检测设备。如果留空不行，请尝试指定一个设备地址，例如 `/dev/ttyAMA0`。

请注意，这些地址是示例，可能与您的设备不同。要找到设备地址，您需要SSH进入您的主机操作系统（**NOT** 监视器！）并检查那里连接了哪些设备。

#### 选项: `usb_filters`（可选）

使用USB接口时，您可以指定要使用的其他过滤器。请参见官方`knxd`文档的 [filters section](https://github.com/knxd/knxd/blob/master/doc/inifile.rst#filters)。

#### 选项: `custom_config`（已弃用）

允许您自己编写自定义的`knxd` ini配置，而不是使用此附加组件提供的模板，该模板利用了上述所有其他配置选项。

您的自定义配置将替代此附加组件提供的默认配置，因此将忽略所有上述其他配置选项。有关所有可能的配置选项，请参见 [knxd文档](https://github.com/knxd/knxd/blob/master/doc/inifile.rst)。

请注意，从此附加组件的0.6.0版本起，此配置选项已被弃用，并将在未来更新中移除。现在，您可以在此附加组件的相应`addon_config`目录中提供自定义的ini配置文件。如果您还安装了相应的附加组件，可以通过网络共享（SMB）访问该目录。

## 支持

如果您有任何问题，欢迎加入HomeAssistant社区并在 [附加组件主题](https://community.home-assistant.io/t/knxd-add-on-covert-your-knx-usb-interface-into-an-ip-interface-that-can-be-used-by-ha/38108/38) 中提出问题。

如果您发现了错误，请随时在 [Github](https://github.com/da-anda/hass-io-addons/issues) 创建一个问题单。