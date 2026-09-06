# Home Assistant TellStick 与 Telldus Live

TellStick 和 TellStick Duo 服务，允许将设备导出到 Telldus Live！

![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield]
![支持 armhf 架构][armhf-shield] ![支持 armv7 架构][armv7-shield]
![支持 i386 架构][i386-shield]

## 关于

此附加组件是官方 TellStick 附加组件的修改版。
它增加了将您的设备和传感器发布到 Telldus Live 的功能。
有关设备设置的详细信息，请参见官方附加组件文档。

## 安装

按照以下步骤在您的系统上安装此附加组件：

添加存储库 `https://github.com/erik73/hassio-addons`。
找到 "TellStick 与 Telldus Live" 附加组件并点击它。
点击 "安装" 按钮。

## 如何使用

### 启动附加组件

安装后，您将看到一个示例配置。

调整附加组件配置以匹配您的设备。有关详细信息，请参见官方附加组件
配置选项。
通过点击 "保存" 按钮来保存附加组件配置。
启动附加组件。

### Home Assistant 集成

您可以在仅限 Live 的模式下运行此附加组件。在这种情况下，您需要在设置完成后在 HA 中配置 TelldusLive
集成。
如果您想以本地模式运行（与官方附加组件运行的方式相同），您需要
在 `configuration.yaml` 文件中添加内部通信细节以启用与附加组件的集成：

```yaml
# 示例 configuration.yaml 条目
tellstick:
  host: 32b8266a-tellsticklive
  port: [50800, 50801]
```

## 配置

有关设备配置，请参阅官方附加组件说明。

所有已配置并工作的设备将在您完成下面的配置步骤后显示在您的 Telldus Live 账户中。

示例传感器配置：

```yaml
enablelive: false
sensors:
  - id: 199
    name: 示例传感器
    protocol: fineoffset
    model: temperature
  - id: 215
    name: 示例传感器二
    protocol: fineoffset
    model: temperaturehumidity
```

请注意：对配置进行任何更改后，您需要重新启动附加组件以使更改生效。

### 选项： `sensors`（必需）

为您希望添加到 Telldus Live 的每个传感器在附加组件配置中添加一个或多个传感器条目。

#### 选项： `sensors.id`（必需）

这是传感器的 ID。要找出使用哪个 ID，您需要使用
服务调用 hassio.addon_stdin，数据如下：
`{"addon":"32b8266a_tellsticklive","input":{"function":"list-sensors"}}`
在附加组件日志中查找，您应该能够找到传感器的 ID、协议和型号。

#### 选项： `sensors.name`（必需）

传感器的名称，将在 Telldus Live 中显示。

#### 选项： `sensors.protocol`（必需）

这是传感器使用的协议。有关此信息，请参见上述服务调用。

#### 选项： `sensors.model`（可选）

传感器的型号。有关此信息，请参见上述服务调用。

## 服务调用

请参见官方附加组件说明。

## 如何启用 Telldus Live 连接

当您对设备和传感器配置感到满意时，是时候建立
与 Telldus Live 的连接，并生成将用于连接的 UUID。

设置配置选项：

```yaml
enable_live: true
```

重新启动附加组件并查看附加组件日志。
您将获得一个 URL，以便在浏览器中访问以建立
您的 Live 账户与此附加组件之间的连接。
该 URL 将带您到 Telldus Live，您将被要求登录或创建账户
如果您还没有账户。

还要确保复制 URL 中 uuid= 后的字符串，并创建以下
配置条目：

```yaml
live_uuid: de1333b5-154c-5342-87dc-6b7e0b2096ab
```

上面的内容是一个示例。您的将看起来不同。

最后，如果您想禁用与 HA 的本地连接，并通过 Telldus Live 集成获取所有
设备，则需要将以下配置选项设置为 false。在这种情况下，您可以从 configuration.yaml 中移除所有 tellstick 配置。

```yaml
enable_local: false
```

完成所有这些步骤后，您可以重新启动附加组件，您的设备和
传感器将出现在 Telldus Live 中！

```yaml
live_delay: 10
```

上述配置选项默认设置为 10 秒。它用于控制在建立与 Telldus 连接之前等待多长时间。
在添加新传感器时，将其设置为更高的值非常重要，因为传感器必须在连接之前被您的 Telldus 设备找到。
简而言之，如果新传感器已添加到您的配置中，将其设置为例如 600 秒。一旦传感器被找到，并在 Telldus Live 系统中分配了正确的名称，可以将其再次减少为 10 秒。

## 支持

有问题吗？

您可以在 [这里打开问题][issue] GitHub。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[conf]: http://developer.telldus.com/wiki/TellStick_conf
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg
[issue]: https://github.com/erik73/addon-tellsticklive/issues
[protocol-list]: http://developer.telldus.com/wiki/TellStick_conf
[repository]: https://github.com/erik73/hassio-addons