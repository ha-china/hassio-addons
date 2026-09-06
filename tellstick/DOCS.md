# Home Assistant 插件：TellStick

## 安装

按照以下步骤在您的系统上安装插件：

1. 在 Home Assistant 前端导航到 **设置** -> **插件** -> **插件商店**。
2. 找到 "TellStick" 插件并点击它。
3. 点击 "安装" 按钮。

## 如何使用

### 启动插件

安装后，您将看到一个默认的示例配置，要更改此配置，您必须遵循 JSON 格式，并且与
[有效的 Tellstick 配置文件参数（tellstick.conf）][conf] 一致。

1. 调整插件配置以匹配您的设备。有关更多详细信息，请参见下方的插件配置选项。
2. 点击 "保存" 按钮保存插件配置。
3. 启动插件。

### Home Assistant 集成

您需要在 `configuration.yaml` 文件中添加内部通信详情，以启用与插件的集成。

```yaml
# 示例 configuration.yaml 条目
tellstick:
    host: core-tellstick
    port: [50800, 50801]
```

要将灯光、传感器和开关添加到 Home Assistant，您需要分别遵循每种类型的指南，这些指南在 Home Assistant 中进行了描述。

有关更多信息，请查看 Home Assistant 文档：

<https://www.home-assistant.io/components/tellstick/>

## 配置

安装后，您将看到一个默认的示例配置，要更改此配置，您必须遵循 JSON 格式，并且与
[有效的 Tellstick 配置文件参数（tellstick.conf）][conf] 一致。

插件配置示例：

```yaml
devices:
  - id: 1
    name: 示例设备
    protocol: everflourish
    model: 自学习开关
    house: A
    unit: '1'
  - id: 2
    name: 示例设备二
    protocol: everflourish
    model: 自学习开关
    house: A
    unit: '2'
```

请注意：在对配置进行任何更改后，您需要重启插件以使更改生效。

### 选项：`devices`（必填）

为插件配置添加一个或多个设备条目，以添加您希望添加的每个设备。请注意每个设备之间使用逗号分隔（请参阅上面的示例）。

#### 选项：`devices.id`（必填）

一个唯一的数字/标识符，必须对每个设备唯一。

#### 选项：`devices.name`（必填）

设备的名称，以更容易识别它。

#### 选项：`devices.protocol`（必填）

这是设备使用的协议。有关支持的协议的完整列表（因此此配置选项的有效值），请查看
TellStick [协议列表][protocol-list]。

#### 选项：`devices.model`（可选）

模型参数仅由某些协议使用，这些协议中存在使用相同协议的不同类型设备。这可以是调光器与非调光器、代码开关与自学习等。

#### 选项：`devices.house`（可选）

根据协议，此处的值可以有很大差异，以识别或分组每个家或类型。

#### 选项：`devices.unit`（可选）

单位标识符，在大多数情况下为 1 到 16 之间的值，通常与房屋组合使用。

#### 选项：`devices.fade`（可选）

Fade 是 `true` 或 `false`，告诉调光器它是否应该在值之间平滑或瞬间淡化（仅适用于 IKEA 协议）。

#### 选项：`devices.code`（可选）

基于 1 和 0 的数字序列，通常用于基于拨码开关的设备。

## 服务调用

如果您希望在 TellStick 配置中教导自学习设备：

转到 Home Assistant 服务调用的开发者工具并选择：

- 服务： `hassio.addon_stdin`
- 输入服务数据：
  `{"addon":"core_tellstick","input":{"function":"learn","device":"1"}}`

将 `1` 替换为您在 TellStick 配置中相应的设备 ID。

您还可以使用此功能列出设备或传感器，并在插件日志中读取输出：`{"addon":"core_tellstick","input":{"function":"list-sensors"}}`

### 支持的服务命令

- `"function":"list"`
  列出当前配置的设备及其名称和设备 ID，以及所有发现的传感器。

- `"function":"list-sensors"`
  
- `"function":"list-devices"`
  备用设备/传感器列表：使用键=值格式显示设备和/或传感器（用制表符作为分隔符，每行一个设备/传感器，没有标题行）。

- `"function":"on","device":"x"`
  打开设备。 ’x’ 可以是设备 ID 的整数，或设备名称。

- `"function":"off","device":"x"`
  关闭设备。 ’x’ 可以是设备 ID 的整数，或设备名称。

## 支持

有问题吗？

您有多种方式可以获得答案：

- [Home Assistant Discord 聊天服务器][discord]。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子论坛][reddit] 在 [/r/homeassistant][reddit]。

如果您发现了 bug，请 [在我们的 GitHub 上提交问题][issue]。

[conf]: http://developer.telldus.com/wiki/TellStick_conf
[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[issue]: https://github.com/home-assistant/addons/issues
[protocol-list]: http://developer.telldus.com/wiki/TellStick_conf
[reddit]: https://reddit.com/r/homeassistant
[repository]: https://github.com/hassio-addons/repository