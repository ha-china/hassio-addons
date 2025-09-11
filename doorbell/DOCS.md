# Home Assistant 插件: 海康威视门铃

## 配置
**注意**: _记得在更改配置后重启插件。_

**注意**: _当插件第一次连接到门铃时，可能会发生门站卡住的情况，因为它正在下载完整的事件积压。您也会看到很多虚假事件，稍等片刻，有时可能需要几个小时... 可能需要重启。_

以下配置选项可通过 Home Assistant 界面中该插件的 **配置** 选项卡进行设置：

### 门铃
配置与门铃的连接。如果未定义某个值，则使用默认设置。

对于每个门铃，重复以下配置：

| 选项          | 默认值         | 描述                                   |
| --------      | ----          | ----                                  |
| name          |               | 此门铃的自定义名称（在 HA UI 和传感器名称中可见） |
| ip            |               | 门铃的 IP 地址                       |
| port          | 8000          | （可选）门铃的端口                    |
| username      | admin         | 访问门铃的用户名                     |
| password      |               | 访问门铃的密码                       |
| output_relays | 2             | （可选）如果您没有看到正确数量的门开关，或如果您在室内安装了安全门控制模块，请设置此选项 |
| scenes        | false         | （可选）室内面板的额外场景按钮        |

#### 示例配置
以下配置设置了两个门铃，分别命名为 `前门` 和 `后门`，以及一个 `室内` 面板
```yaml
- name: "前门"
  ip: 192.168.0.1
  username: admin
  password: password  

- name: "后门"
  ip: 192.168.0.2
  username: admin
  password: password

- name: "室内"
  ip: 192.168.0.3
  username: admin
  password: password

- name: "室内扩展"
  ip: 192.168.0.4
  username: admin
  password: password
```

### 系统
以下系统设置可用：

| 名称              | 默认值               | 描述                                   |
| --------          | ----                  | ----                                  |
| log_level         | WARNING               | 插件日志的详细程度。可用选项: _ERROR_ _WARNING_ _INFO_ _DEBUG_ |
| sdk_log_level     | NONE               | 海康威视SDK日志的详细程度。可用选项: _NONE_ _ERROR_ _INFO_ _DEBUG_ |

#### 示例配置
```yaml
log_level: WARNING
sdk_log_level: NONE
```

## 设置

### 需求

一个运行中的 MQTT 代理。

您可以使用官方支持的 __Mosquitto 代理__，可在您 Home Assistant 实例的官方插件部分找到。
您可以通过点击以下按钮快速设置它：
[![打开您的 Home Assistant 实例并显示 Supervisor 插件的仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_mosquitto)，或者通过在 `插件商店` 中手动找到它。

启动 __Mosquitto 代理__ 插件后，您应该能够通过转到 `设置` -> `设备与服务` -> `MQTT` 来自动将 Home Assistant 连接到代理，然后点击 `配置`。

（可选）如果您有外部 MQTT 代理，也可以在插件配置中定义它：

#### 示例配置
```yaml
host: 192.168.0.17
port: 1883
ssl: false
username: user
password: pass
```

### 开始使用

在设置了 MQTT 代理之后，您可以启动 __海康威视门铃__。
您定义的每个门铃应该能在 `设置` -> `设备与服务` -> `设备` 下可见。

### 传感器、开关、输入文本和按钮
对于每个门铃，以下实体可用：

- 传感器
  - `呼叫状态` (_空闲_，_正在拨号_，_已忽略_)
- 开关
  - `门继电器`（每个可用继电器一个，打开连接到设备输出继电器的门）
- 按钮
  - `接听呼叫`（该设备需要连接到 Hikconnect 才能使“接听”功能工作，如果不可能，可以使用“拒绝”）
  - `挂断呼叫`（该设备需要连接到 Hikconnect 才能使“挂断”功能工作，如果不可能，可以使用“拒绝”）
  - `拒绝呼叫`
  - `重启`
  - ...
- 设备触发器（取决于设备型号）
  - `检测到运动`
  - `篡改警报`
  - `门未关闭`
  - ...

  _设备触发器_ 用于发出由门铃生成的警报和事件信号（生成的事件类型取决于特定型号）。
  这些是特殊实体，没有状态与之相关（因此在 HA 实体列表中不可见，但在每个 `设备信息` 页面下可见）。

  **注意**: 设备触发器 *在关联事件至少在设备上触发一次后被发现。*

  **注意**: 由于某种原因，没有“门未关闭”设备触发器，这里有一个解决方法： https://community.home-assistant.io/t/hikvision-doorbell-videointercom-integration/532796/537
  
  
您可以在自动化中使用 [设备触发器](https://www.home-assistant.io/docs/automation/trigger/#device-triggers)，通过使用类型为 `设备` 的触发器。
请参阅 [自动化 Home Assistant](https://www.home-assistant.io/getting-started/automation/) 指南，了解自动化的详细信息或查看 [自动化](https://www.home-assistant.io/docs/automation/) 文档以获取完整细节。
  
  <p align="center">
    <img src="https://raw.githubusercontent.com/pergolafabio/Hikvision-Addons/dev/hikvision-doorbell/assets/docs_device_triggers_automation.png" width="600px" />
  </p>

 - 输入文本 
   - `Isapi 请求`（此输入文本用于向室内/室外设备发送 ISAPI 命令。室内设备没有打开 80 端口以发送 ISAPI 命令，但它可以通过此插件工作，因为它基于 SDK。使用此服务时要小心，如果使用不当，可能会崩溃插件/docker。下面提供了一个示例服务。GET/PUT 是强制的，ISAPI 命令也是强制的，JSON/XML 可选，具体取决于所使用的命令。确保输入之间只有 1 个空格。可以在这里找到一些有用的 ISAPI 命令示例... [ISAPI](https://github.com/pergolafabio/Hikvision-Addons/blob/main/doorbell/ISAPI.md)）

  ```
  # 获取呼叫状态
  action: text.set_value
  target:
    entity_id: text.ds_kd8003_isapi_request
  data:
    value: GET /ISAPI/VideoIntercom/callStatus?format=json

  # 开门
  action: text.set_value
  target:
    entity_id: text.ds_kd8003_isapi_request
  data:
    value: PUT /ISAPI/AccessControl/RemoteControl/door/1 <RemoteControlDoor><cmd>open</cmd></RemoteControlDoor>

  ```


## 发送命令至门铃

您可以通过两种方式与门铃交互：
- 通过自动创建的 MQTT 实体（开关、按钮）
- 手动调用插件的 `stdin` 服务

### MQTT 实体

该插件会自动创建 [开关](https://www.home-assistant.io/integrations/switch/) 和 [按钮](https://www.home-assistant.io/integrations/button/)，您可以在 Home Assistant UI 或您自己的自动化中切换和响应。

### STDIN 服务（高级）

有一种高级方法可以通过向插件的 `标准输入` (STDIN) 发送文本消息来与设备交互。
您可以使用 Home Assistant 提供的内置 `hassio.addon_stdin` 服务。

输入字符串必须符合格式
```
<command> <doorbell_name> <optional_parameter>
```
- `<command>` 是以下命令之一：

  | 命令         | 描述                                                 |
  | --------    | ----                                                  |
  | unlock      | 解锁指定的门（`<optional_parameter>` 必须是 `1` 或 `2`）连接到门铃站输出继电器 |
  | reboot      | 重启指定的门站                                     |
  | reject      | 拒绝来电并停止室内设备响铃                         |
  | request     | 未知                                               |
  | cancel      | 未知                                               |
  | answer      | 接听来电，有助于与“挂断”配合使用，以便对讲机停止响铃（空闲），您可以与 Frigate 开始双向音频 |
  | reject      | 未知                                               |
  | bellTimeout | 未知                                               |
  | hangUp      | 挂断来电，有助于与之前的“接听”配合使用，以便对讲机停止响铃（空闲），您可以与 Frigate 开始双向音频 |
  | deviceOnCall| 未知                                               |
  | atHome      | 向室内面板发送“在家”场景                         |
  | goOut       | 向室内面板发送“外出”场景                         |
  | goToBed     | 向室内面板发送“上床”场景                         |
  | custom      | 向室内面板发送“自定义”场景                       |
  | setupAlarm  | 打开室内面板的警报                                 |
  | closeAlarm  | 关闭室内面板的警报                                 |
  | muteAudioOutput   | 静音门铃/室内站的音频输出                        |
  | unmuteAudioOutput | 取消静音门铃/室内站的音频输出                  

- `<doorbell_name>` 是在配置选项中给予门铃的自定义名称，全部小写，空格用下划线 `_` 替代。

  例如：如果门铃名为 `前门`，那么输入字符串必须引用为 `front_door`。

- `<optional_parameter>` 可以是一个附加字符串，用于指定命令的附加选项

#### 示例
有关更多详情，请参见 [`hassio.addon_stdin`](https://www.home-assistant.io/integrations/hassio/#service-hassioaddon_stdin) 服务的 [官方文档](https://www.home-assistant.io/integrations/hassio/#service-hassioaddon_stdin)。

#### 解锁门
该服务解锁连接到名为 `前门` 的门站第 _1 个_ 输出继电器的门：
````yaml
service: hassio.addon_stdin
data:
  addon: aff2db71_hikvision_doorbell
  input: unlock front_door 1
````

#### 重启设备
要重启名为 `后门` 的门铃：
````yaml
service: hassio.addon_stdin
data:
  addon: aff2db71_hikvision_doorbell
  input: reboot rear_door
````

#### 拒绝来电
这可能与监控前门状态的传感器一起使用。当有人按下门铃的响铃按钮时，如果门在没有接听来电的情况下手动打开，则以下服务将拒绝来电。
所有室内设备，包括 Hik-Connect 设备，停止响铃。

此示例已在名为 `室内设备` 的 `DS-KD8003` 室外单元上测试。
此类命令必须仅发送到室内设备。

````yaml
service: hassio.addon_stdin
data:
  addon: aff2db71_hikvision_doorbell
  input: reject indoor_unit
````

## 支持
如果您发现错误或需要支持 [在这里报告问题](https://github.com/pergolafabio/Hikvision-Addons/issues/new) 在 GitHub 上。
如果可能，请在问题表单中提供您的日志副本，以帮助我们更好地诊断问题！

### 故障排除
查看 Home Assistant UI 中插件的 **日志** 选项卡。

您可以通过更改 `system.log_level` 配置选项来提高详细程度。例如：
```yaml
system:
  log_level: DEBUG
  sdk_log_level: DEBUG
```

*注意*: 当插件第一次连接到门铃时，可能会发生门站卡住的情况，因为它正在下载完整的事件积压。可能需要重启。