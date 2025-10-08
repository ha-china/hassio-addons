# Home Assistant Add-on: Hikvision Doorbell

## 配置
**注意**: _当配置更改时，请记得重启该插件。_

**注意**: _当插件首次连接到门铃时，可能会发生门站卡住的情况，因为它正在下载完整的事件回放。您还会看到很多错误事件，只需稍等片刻，有时可能需要几小时... 可能需要重启。_

在 Home Assistant 界面中，您可以通过此插件的 **配置** 选项卡设置以下配置选项：

### 门铃
配置与门铃的连接。如果未定义值，则使用默认设置。

对于您的每个门铃，请重复以下配置：

| 选项        | 默认       | 描述                           |
| --------    | ----       | ----                           |
| name        |           | 此门铃的自定义名称（在 HA UI 和传感器名称中可见） |
| ip          |           | 门铃的 IP 地址                 |
| port        | 8000       | （可选）门铃的端口             |
| username    | admin      | 访问门铃的用户名               |
| password    |           | 访问门铃的密码                 |
| output_relays | 2         | （可选）如果您看不到正确数量的门开关，或者您在室内附加了一个安全门控制模块，请设置此选项 |
| scenes      | false      | （可选）室内面板的额外场景按钮 |

#### 示例配置
以下配置设置了两个门铃，分别命名为 `Front door`（前门）和 `Rear door`（后门）以及一个 `Indoor` 面板：
```yaml
- name: "Front door"
  ip: 192.168.0.1
  username: admin
  password: password  

- name: "Rear door"
  ip: 192.168.0.2
  username: admin
  password: password

- name: "Indoor"
  ip: 192.168.0.3
  username: admin
  password: password

- name: "Indoor Extension"
  ip: 192.168.0.4
  username: admin
  password: password
```

### 系统
以下系统设置可用：

| 名称              | 默认               | 描述                           |
| --------          | ----               | ----                           |
| log_level         | WARNING           | 插件日志的详细程度。可用选项：_ERROR_ _WARNING_ _INFO_ _DEBUG_ |
| sdk_log_level     | NONE              | Hikvision SDK 日志的详细程度。可用选项：_NONE_ _ERROR_ _INFO_ _DEBUG_ |

#### 示例配置
```yaml
log_level: WARNING
sdk_log_level: NONE
```

## 设置

### 要求

一个运行的 MQTT 中继。

您可以使用官方支持的 __Mosquitto 中继__，它在您的 Home Assistant 实例的官方插件部分中可用。
您可以通过点击以下按钮快速设置它：
[![打开您的 Home Assistant 实例并显示 Supervisor 插件的仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_mosquitto)，或者通过在您的 `插件商店` 中手动找到它。

在您启动了 __Mosquitto 中继__ 插件后，您应该能够通过进入 `设置` -> `设备和服务` -> `MQTT` 并点击 `配置` 来自动连接 Home Assistant 到中继。

（可选）如果您有外部 MQTT 中继，您也可以在插件配置中定义它：

#### 示例配置
```yaml
host: 192.168.0.17
port: 1883
ssl: false
username: user
password: pass
```

### 开始使用

在您设置好 MQTT 中继后，您可以开始 __Hikvision Doorbell__。
您定义的每个门铃都应作为设备显示在 `设置` -> `设备和服务` -> `设备` 下。

### 传感器、开关、输入文本和按钮
对于您的每个门铃，以下实体可用：

- 传感器
  - `呼叫状态` (_空闲_, _响铃_, _已取消_)
- 开关
  - `门继电器`（每个可用继电器一个，打开连接到设备输出继电器的门）
- 按钮
  - `接听呼叫`（设备需要连接到 Hikconnect 才能让“接听”工作，如果不可能，您可以使用“拒绝”代替）
  - `挂断呼叫`（设备需要连接到 Hikconnect 才能让“挂断”工作，如果不可能，您可以使用“拒绝”代替）
  - `拒绝呼叫`
  - `重启`
  - ...
- 设备触发器（取决于设备型号）
  - `检测到运动`
  - `篡改警报`
  - `门未关闭`
  - ...

  _设备触发器_ 用于指示由门铃生成的警报和事件（生成的具体事件类型取决于具体型号）。
  这些是特殊实体，它们没有与它们关联的状态（因此不在 HA 实体列表中，但在每个 `设备信息` 页面下可见）。
  
  **注意**: 设备触发器是在设备上至少触发一次相关事件后才被发现的。
  
  **注意**: 由于某种原因，没有“门未关闭”的设备触发器，这里是一个解决方案：

  https://community.home-assistant.io/t/hikvision-doorbell-videointercom-integration/532796/537

  https://community.home-assistant.io/t/hikvision-doorbell-videointercom-integration/532796/2297?
  
  
  您可以在自动化中使用 [设备触发器](https://www.home-assistant.io/docs/automation/trigger/#device-triggers) 通过使用类型为 `设备` 的触发器。
  查看自动化指南 [Automating Home Assistant](https://www.home-assistant.io/getting-started/automation/) 或自动化文档 [Automation](https://www.home-assistant.io/docs/automation/) 以获取完整详细信息。
  
  <p align="center">
    <img src="https://raw.githubusercontent.com/pergolafabio/Hikvision-Addons/dev/hikvision-doorbell/assets/docs_device_triggers_automation.png" width="600px" />
  </p>

 - 输入文本 
   - `Isapi request`（此输入文本用于向室内/室外设备发送 ISAPI 命令。室内设备没有打开端口 80 来发送 ISAPI 命令，但使用此插件可以工作，因为它基于 SDK。小心使用此服务，如果不正确使用，它可能会崩溃插件/容器。下面发布了一个示例服务。GET/PUT 是必需的，以及 ISAPI 命令，JSON/XML 是可选的，取决于使用的命令。确保输入之间只有一个空格。一个有用的 ISAPI 命令列表可以在... [ISAPI](https://github.com/pergolafabio/Hikvision-Addons/blob/main/doorbell/ISAPI.md) 找到。

  ```
  # 获取呼叫状态
  action: text.set_value
  target:
    entity_id: text.ds_kd8003_isapi_request
  data:
    value: GET /ISAPI/VideoIntercom/callStatus?format=json

  # 打开门
  action: text.set_value
  target:
    entity_id: text.ds_kd8003_isapi_request
  data:
    value: PUT /ISAPI/AccessControl/RemoteControl/door/1 <RemoteControlDoor><cmd>open</cmd></RemoteControlDoor>

  ```

## 向门铃发送命令

您可以通过以下两种方式与您的门铃交互： 
- 通过自动创建的 MQTT 实体（开关、按钮）
- 手动调用插件的 `stdin` 服务

### MQTT 实体

此插件自动创建 [开关](https://www.home-assistant.io/integrations/switch/) 和 [按钮](https://www.home-assistant.io/integrations/button/)，您可以在 Home Assistant UI 中切换和响应，或者在自己的自动化中响应。

### STDIN 服务（高级）

有一种高级方法可以通过向插件在其 `标准输入`（STDIN）发送文本消息来与设备交互。
您可以使用 Home Assistant 提供的内置 `hassio.addon_stdin` 服务。

输入字符串必须为以下格式
```
<command> <门铃名称> <可选参数>
```
- `<command>` 是一个：

  | 命令     | 描述                                               |
  | -------- | -------------------------------------------------- |
  | unlock   | 解锁指定的门（`<可选参数>` 必须是 `1` 或 `2`），连接到门铃站输出继电器 |
  | reboot   | 重启指定的门站 |
  | reject   | 拒绝来电并停止室内站点响铃 |
  | request  | 未知 |
  | cancel   | 未知 |
  | answer   | 接听呼叫，与“hangUp”之后一起使用很有用，这样对讲机停止响铃（空闲）并且您可以开始与 Frigate 进行双向音频 |
  | reject   | 未知 |
  | bellTimeout | 未知 |
  | hangUp   | 挂断呼叫，与“answer”之前一起使用很有用，这样对讲机停止响铃（空闲）并且您可以开始与 Frigate 进行双向音频 |
  | deviceOnCall | 未知 |
  | atHome   | 为室内面板发送场景“在家” |
  | goOut    | 为室内面板发送场景“外出” |
  | goToBed  | 为室内面板发送场景“去睡觉” |
  | custom   | 为室内面板发送场景“自定义” |
  | setupAlarm | 在室内面板上打开警报 |
  | closeAlarm | 在室内面板上关闭警报 |
  | muteAudioOutput   | 静音门铃/室内站点的音频输出 |
  | unmuteAudioOutput | 取消静音门铃/室内站点的音频输出  

- `<门铃名称>` 是在配置选项中为门铃给出的自定义名称，全部小写，空格用下划线 `_` 代替。 

  例如：如果门铃命名为 `Front door`，输入字符串必须引用它为 `front_door`。

- `<可选参数>` 可以是附加字符串，例如用于指定命令的附加选项

#### 示例
更多详细信息，请参阅关于 `hassio.addon_stdin` 服务的 [官方文档](https://www.home-assistant.io/integrations/hassio/#service-hassioaddon_stdin)。

#### 解锁门
此服务解锁连接到门站名为 `Front door` 的 _1_ 个输出继电器的门：
````yaml
service: hassio.addon_stdin
data:
  addon: aff2db71_hikvision_doorbell
  input: unlock front_door 1
````

#### 重启设备
要重启名为 `Rear door` 的门铃：
````yaml
service: hassio.addon_stdin
data:
  addon: aff2db71_hikvision_doorbell
  input: reboot rear_door
````

#### 拒绝呼叫
与监控前门状态的传感器一起使用可能会很有用。当有人按下门铃的按钮时，如果手动打开门而不接听电话，以下服务将拒绝呼叫。
所有室内站点包括 Hik-Connect 设备都将停止响铃。

此示例在名为 `Indoor unit` 的 `DS-KD8003` 室外单元上已测试，该类型的命令只能发送到室内站点。

````yaml
service: hassio.addon_stdin
data:
  addon: aff2db71_hikvision_doorbell
  input: reject indoor_unit
````

## 支持
如果您发现错误或需要支持，请在 GitHub 上[打开一个问题](https://github.com/pergolafabio/Hikvision-Addons/issues/new)。
如果可能，请提供您的日志副本在问题表单中，以帮助我们更好地诊断问题！

### 故障排除
查看 Home Assistant UI 中插件的 **日志** 选项卡。

您可以通过更改 `system.log_level` 配置选项来增加详细程度。例如：
```yaml
system:
  log_level: DEBUG
  sdk_log_level: DEBUG
```

*N.B.*: 当插件首次连接到门铃时，可能会发生门站卡住的情况，因为它正在下载完整的事件回放。可能需要重启。