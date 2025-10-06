# Home Assistant Community Add-on: Network UPS Tools

网络UPS工具（NUT）项目的主要目标是提供对电源设备（如不间断电源、电源分配单元、自动转换开关、电源单元和太阳能控制器）的支持。

NUT提供了许多控制和监控功能[特性][nut-features]，具有统一的控制和接口管理。

超过140个不同的制造商，以及数千个型号都是[兼容的][nut-compatible]。

网络UPS工具（NUT）项目是许多[个人和公司][nut-acknowledgements]共同努力的结果。

## 安装

这个插件的安装非常简单，与安装任何其他Home Assistant插件没有区别。

1. 点击下面的Home Assistant我的按钮，在您的Home Assistant实例上打开插件。

   ![在您的Home Assistant实例中打开此插件][addon-badge]][addon]

1. 点击“安装”按钮来安装插件。
1. 配置`users`和`devices`选项，如下所述。
1. 启动“网络UPS工具”插件。
1. 检查“网络UPS工具”插件的日志，以查看是否一切正常。
1. 注意“网络UPS工具”插件“信息”选项卡中列出的`Hostname`。
1. 使用插件主机名（如上所述）、端口`3493`以及插件中配置的用户名/密码配置[NUT集成][nut-ha-docs]。
1. 要了解如何在Home Assistant中配置NUT集成的更多信息，请参阅[NUT集成文档][nut-ha-docs]。

## 配置

插件可以使用基本配置，其他选项供高级用户使用。

**注意**：_更改配置时，请记得重启插件。_

网络UPS工具插件配置：

```yaml
users:
  - username: nutty
    password: changeme
    instcmds:
      - all
    actions: []
devices:
  - name: myups
    driver: usbhid-ups
    port: auto
    config: []
mode: netserver
shutdown_host: "false"
```

**注意**：_这只是个示例，不要复制粘贴！创建你自己的！_

### 选项：`log_level`

`log_level`选项控制插件生成的日志级别，可以更改为更详细或更简洁，这在处理未知问题时可能很有用。可能的值有：

- `trace`：显示所有细节，如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：非错误的异常情况。
- `error`：不需要立即处理的运行时错误。
- `fatal`：出了严重问题。插件变得无法使用。

请注意，每个级别自动包括更严重级别的日志消息，例如，`debug`也会显示`info`消息。默认情况下，`log_level`设置为`info`，这是推荐的设置，除非你在进行故障排除。

### 选项：`users`

此选项允许您指定一个或多个用户列表。每个用户可以有自己的权限，如下面的子选项定义。

_有关更多信息，请参阅[`upsd.users(5)`][upsd-users]文档。_

#### 子选项：`username`

用户需要使用的用户名来登录到NUT服务器。有效的用户名只包含`a-z`、`A-Z`、`0-9`和下划线字符（`_`）。

#### 子选项：`password`

设置此用户的密码。

#### 子选项：`instcmds`

用户被允许发起的即时命令列表。使用`all`自动授予所有命令。

#### 子选项：`actions`

用户被允许执行的操作列表。有效的操作是：

- `set`：更改UPS中某些变量的值。
- `fsd`：在UPS中设置强制关机标志。这对于监控来说相当于“电池供电+低电量”情况。

预计操作列表在未来会增长。

#### 子选项：`upsmon`

为`upsmon`进程添加必要的操作。这设置为`master`或`slave`。如果为`netclient`设置帐户以连接此插件，则应设置为`slave`。

### 选项：`devices`

此选项允许您指定系统上连接的UPS设备列表。

_有关更多信息，请参阅[`ups.conf(5)`][ups-conf]文档。_

#### 子选项：`name`

UPS的名称。您不能使用任何空格字符或`default`名称。

#### 子选项：`driver`

这指定将监控此UPS的程序。您需要指定与您的硬件兼容的程序。有关驱动程序的更多信息以及特定驱动程序的手册页面，请参阅[`nutupsdrv(8)`][nutupsdrv]。

#### 子选项：`port`

这是UPS连接的串行端口。第一个串行端口通常是`/dev/ttyS0`。使用`auto`自动检测端口。

#### 子选项：`powervalue`

可选地允许您设置此特定UPS是否向运行此插件的设备供电。如果您有多个UPS并希望监控，但不想让其中一些UPS的低电量关闭此主机，则很有用。可接受的值是`1`表示“向此主机供电”或`0`表示“仅监控”。默认值为`1`

**注意**：_必须有至少一个连接的设备具有`powervalue`为`1`_

#### 子选项：`config`

为此UPS配置的附加[选项][ups-fields]列表。常见的[`usbhid-ups`][usbhid-ups]驱动程序允许您通过使用`vendor`、`product`、`serial`、`vendorid`和`productid`选项的组合来区分设备：

```yaml
devices:
  - name: mge
    driver: usbhid-ups
    port: auto
    config:
      - vendorid = 0463
  - name: apcups
    driver: usbhid-ups
    port: auto
    config:
      - vendorid = 051d*
  - name: foocorp
    driver: usbhid-ups
    port: auto
    config:
      - vendor = "Foo.Corporation.*"
  - name: smartups
    driver: usbhid-ups
    port: auto
    config:
      - product = ".*(Smart|Back)-?UPS.*"
```

### 选项：`mode`

识别的值是`netserver`和`netclient`。

- `netserver`：运行管理本地连接的UPS并允许其他客户端连接（作为从属或进行管理）的组件。
- `netclient`：仅运行`upsmon`以连接到作为`netserver`运行的远程系统。

### 选项：`shutdown_host`

当此选项在UPS关机命令上设置为`true`时，主机系统将被关闭。设置为`false`时，仅停止插件。这是为了在不影响系统的情况下进行测试。

### 选项：`list_usb_devices`

当此选项设置为`true`时，插件启动时会在插件日志中显示连接的USB设备列表。此选项可用于帮助识别连接到系统的多个UPS设备。

### 选项：`remote_ups_name`

在`netclient`模式下运行的远程UPS的名称。

### 选项：`remote_ups_host`

在`netclient`模式下运行的远程UPS的主机。

### 选项：`remote_ups_user`

在`netclient`模式下运行的远程UPS的用户。

### 选项：`remote_ups_password`

在`netclient`模式下运行的远程UPS的密码。

**注意**：_在使用远程选项时，用户和设备选项仍然必须存在，但是它们将没有任何效果_

### 选项：`upsd_maxage`

允许设置`upsd.conf`中的MAXAGE值，以增加特定驱动程序的超时时间，大多数用户不应更改此设置。

### 选项：`upsmon_deadtime`

允许设置`upsmon.conf`中的DEADTIME值，以调整监控进程的过期时间，大多数用户不应更改此设置。

### 选项：`i_like_to_be_pwned`

在插件配置中添加此选项允许您通过设置为`true`来绕过HaveIBeenPwned密码要求。

**注意**：_我们强烈建议选择一个更强的/更安全的密码，而不是使用此选项！自己承担风险！_

### 选项：`leave_front_door_open`

在插件配置中添加此选项允许您通过设置为`true`并留空用户名和密码来禁用NUT服务器的身份验证。

**注意**：_我们强烈建议不要使用此功能，即使此插件仅暴露到您的内部网络。自己承担风险！_

## 事件通知

每当您的UPS状态发生变化时，都会触发名为`nut.ups_event`的事件。它的有效载荷如下所示：

| 键          | 值                                        |
| ----------- | -------------------------------------------- |
| `ups_name`  | 您配置的UPS的名称                         |
| `notify_type` | 通知的类型                                 |
| `notify_msg` | NUT的默认通知消息                         |

`notify_type`表示通知的类型。
有关更多信息以及将在`notify_msg`中显示的消息，请参阅下面的表格。`%s`会自动被NUT替换为您的UPS名称。

| 类型       | 原因                                                                 | 默认消息                                    |
| ---------- | --------------------------------------------------------------------- | -------------------------------------------------- |
| `ONLINE`   | UPS恢复在线                                                    | "UPS %s on line power"                             |
| `ONBATT`   | UPS在电池上                                                     | "UPS %s on battery"                                |
| `LOWBATT`  | UPS电池低（如果也在电池上，则为“关键”）                           | "UPS %s battery is low"                            |
| `FSD`      | UPS正在由主控关闭（FSD = “强制关机”）                             | "UPS %s: forced shutdown in progress"              |
| `COMMOK`   | 与UPS建立了通信                                               | "Communications with UPS %s established"           |
| `COMMBAD`  | 与UPS失去了通信                                               | "Communications with UPS %s lost"                  |
| `SHUTDOWN` | 系统正在关闭                                                    | "Auto logout and shutdown proceeding"              |
| `REPLBATT` | UPS电池已损坏并需要更换                                           | "UPS %s battery needs to be replaced"              |
| `NOCOMM`   | UPS不可用（无法联系进行监控）                                     | "UPS %s is unavailable"                            |
| `NOPARENT` | 关闭系统进程已死亡（关闭不可能）                                 | "upsmon parent process died - shutdown impossible" |

此事件允许您创建自动化操作，例如向您的手机发送[critical notification][critical-notif]：

```yaml
automations:
  - alias: "UPS changed state"
    trigger:
      - platform: event
        event_type: nut.ups_event
    action:
      - service: notify.mobile_app_<your_device_id_here>
        data_template:
          title: "UPS changed state"
          message: "{{ trigger.event.data.notify_msg }}"
          data:
            push:
              sound:
                name: default
                critical: 1
                volume: 1.0
```

有关更多信息，请参阅NUT文档[此处][nut-notif-doc-1]和[此处][nut-notif-doc-2]。

## 更改日志与发布

此存储库使用GitHub的发布功能[发布]功能来维护更改日志。

发布基于[语义版本控制][semver]，并使用`MAJOR.MINOR.PATCH`格式。简而言之，版本将根据以下情况增加：

- `MAJOR`：不兼容或主要更改。
- `MINOR`：向后兼容的新功能和增强功能。
- `PATCH`：向后兼容的补丁和软件包更新。

## 支持

有问题吗？

您有几个选项可以回答他们：

- Home Assistant Community Add-ons Discord聊天服务器[discord]用于插件支持和功能请求。
- Home Assistant Discord聊天服务器[discord-ha]用于一般Home Assistant讨论和问题。
- Home Assistant[社区论坛][forum]。
- 加入[Reddit子版块][reddit]在[/r/homeassistant][reddit]

您也可以在GitHub上[打开问题][issue]。

## 作者与贡献者

此存储库的原始设置由[Dale Higgs][dale3h]完成。

有关所有作者和贡献者的完整列表，请查看[贡献者页面][contributors]。

## 许可证

MIT许可证

版权（c）2018-2025 Dale Higgs

特此授予任何人免费获得此软件及其相关文档文件（“软件”）的副本，并在软件上进行处理，不受任何限制，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许接受软件的人这样做，但需遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，无论是明示的还是暗示的，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任负责，无论是合同行为、侵权行为或其他行为，均源于、发生于或与软件的使用或其他交易有关。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/? addon=a0d7b954_nut&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[contributors]: https://github.com/hassio-addons/addon-nut/graphs/contributors
[critical-notif]: https://companion.home-assistant.io/docs/notifications/critical-notifications
[dale3h]: https://github.com/dale3h
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[fake-usb]: https://github.com/hassio-addons/addon-nut/issues/24
[forum]: https://community.home-assistant.io/t/community-hass-io-add-on-network-ups-tools/68516
[issue]: https://github.com/hassio-addons/addon-nut/issues
[nut-acknowledgements]: https://networkupstools.org/acknowledgements.html
[nut-compatible]: https://networkupstools.org/stable-hcl.html
[nut-conf]: https://networkupstools.org/docs/man/nut.conf.html
[nut-features]: https://networkupstools.org/features.html
[nut-ha-docs]: https://www.home-assistant.io/integrations/nut/
[nut-notif-doc-1]: https://networkupstools.org/docs/user-manual.chunked/ar01s07.html
[nut-notif-doc-2]: https://networkupstools.org/docs/man/upsmon.conf.html
[nutupsdrv]: https://networkupstools.org/docs/man/nutupsdrv.html
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-nut/releases
[semver]: https://semver.org/spec/v2.0.0
[sleep]: https://linux.die.net/man/1/sleep
[ups-conf]: https://networkupstools.org/docs/man/ups.conf.html
[ups-fields]: https://networkupstools.org/docs/man/ups.conf.html#_ups_fields
[upsd-conf]: https://networkupstools.org/docs/man/upsd.conf.html
[upsd-users]: https://networkupstools.org/docs/man/upsd.users.html
[upsd]: https://networkupstools.org/docs/man/upsd.html
[upsmon]: https://networkupstools.org/docs/man/upsmon.html
[usbhid-ups]: https://networkupstools.org/docs/man/usbhid-ups.html