# Home Assistant Community Add-on: Network UPS Tools

Network UPS Tools (NUT) 项目的主要目标是提供对电源设备（如不间断电源、电源分配单元、自动转换开关、电源单元和太阳能控制器）的支持。

NUT 提供了许多控制和监控功能 [特性][nut-features]，并具有统一的控制和管理界面。

超过 140 家不同的制造商，数千个型号都是 [兼容][nut-compatible] 的。

Network UPS Tools (NUT) 项目是许多 [个人和公司][nut-acknowledgements] 共同努力的结果。

确保在启动插件后添加 NUT 集成。

**注意**：_主机 `a0d7b954-nut` 可用于允许 Home Assistant 直接与插件通信_

有关如何在 Home Assistant 中配置 NUT 集成的更多信息，请参阅 [NUT 集成文档][nut-ha-docs]。

## 安装

此插件的安装非常简单，与安装任何其他 Home Assistant 插件没有区别。

1. 点击下方 Home Assistant 的 My 按钮以在您的 Home Assistant 实例中打开插件。

   [![在您的 Home Assistant 实例中打开此插件][addon-badge]][ addon ]

1. 点击“安装”按钮以安装插件。
1. 配置 `users` 和 `devices` 选项。
1. 启动“Network UPS Tools”插件。
1. 检查“Network UPS Tools”插件的日志，以查看是否一切顺利。
1. 配置 [NUT 集成][nut-ha-docs]。

## 配置

插件可以使用基本配置，其他选项为更高级的用户提供。

**注意**：_更改配置时，请记得重启插件。_

Network UPS Tools 插件配置：

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

**注意**：_这只是一个示例，不要复制粘贴！创建你自己的！_

### 选项：`log_level`

`log_level` 选项控制插件生成的日志级别，可以更改为更详细或更简洁，这在处理未知问题时可能很有用。可能的值包括：

- `trace`：显示所有详细信息，例如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：非错误的异常情况。
- `error`：不需要立即处理的运行时错误。
- `fatal`：发生了严重错误。插件变得无法使用。

请注意，每个级别都会自动包含更严重级别的日志消息，例如 `debug` 还会显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐的设置，除非你在进行故障排除。

### 选项：`users`

此选项允许你指定一个或多个用户列表。每个用户可以有自己的权限，如下面的子选项定义的那样。

_有关更多信息的参考，请参阅 [`upsd.users(5)`][upsd-users] 文档。_

#### 子选项：`username`

用户需要使用的 NUT 服务器的用户名。有效的用户名只包含 `a-z`、`A-Z`、`0-9` 和下划线字符（`_`）。

#### 子选项：`password`

为该用户设置密码。

#### 子选项：`instcmds`

用户被允许发起的即时命令列表。使用 `all` 自动授予所有命令。

#### 子选项：`actions`

用户被允许执行的操作列表。有效的操作包括：

- `set`：更改 UPS 中某些变量的值。
- `fsd`：在 UPS 中设置强制关机标志。对于监控目的，这相当于“电池供电 + 低电量”情况。

预计未来操作的列表将增长。

#### 子选项：`upsmon`

为 `upsmon` 进程添加必要的操作。这设置为 `master` 或 `slave`。如果为 `netclient` 设置创建帐户以连接此插件，则应设置为 `slave`。

### 选项：`devices`

此选项允许你指定系统上连接的 UPS 设备列表。

_有关更多信息的参考，请参阅 [`ups.conf(5)`][ups-conf] 文档。_

#### 子选项：`name`

UPS 的名称。`default` 名称在内部使用，因此你无法在此文件中使用它。

#### 子选项：`driver`

这指定将监控此 UPS 的程序。你需要指定与你的硬件兼容的程序。有关驱动程序的更多信息以及特定驱动程序的 man 页面的指针，请参阅 [`nutupsdrv(8)`][nutupsdrv]。

#### 子选项：`port`

UPS 连接的串行端口。第一个串行端口通常是 `/dev/ttyS0`。使用 `auto` 自动检测端口。

#### 子选项：`powervalue`

可选地允许你设置此 UPS 是否为运行该插件的设备提供电源。如果你有多个 UPS 希望监控，但不想让其中一些低电量关闭此主机，这很有用。接受的值是 `1`（表示“为该主机提供电源”）或 `0`（表示“仅监控”）。默认值为 `1`

**注意**：_必须至少有一个附加设备，其 powervalue 为 `1`_

#### 子选项：`config`

为该 UPS 配置的附加 [选项][ups-fields] 列表。常见的 [`usbhid-ups`][usbhid-ups] 驱动程序允许你通过使用 `vendor`、`product`、`serial`、`vendorid` 和 `productid` 选项的组合来区分设备：

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

识别的值是 `netserver` 和 `netclient`。

- `netserver`：运行管理本地连接的 UPS 并允许其他客户端连接（作为从属或进行管理）的组件。
- `netclient`：仅运行 `upsmon` 以连接到作为 `netserver` 运行的远程系统。

### 选项：`shutdown_host`

当此选项在 UPS 关机命令上设置为 `true` 时，主机系统将被关机。设置为 `false` 时，仅停止插件。这是为了在不影响系统的情况下进行测试。

### 选项：`list_usb_devices`

当此选项设置为 `true` 时，插件启动时将在插件日志中显示连接的 USB 设备列表。此选项可用于帮助在系统连接多个 UPS 设备时识别不同的 UPS 设备。

### 选项：`remote_ups_name`

在 `netclient` 模式下运行的远程 UPS 的名称。

### 选项：`remote_ups_host`

在 `netclient` 模式下运行的远程 UPS 的主机。

### 选项：`remote_ups_user`

在 `netclient` 模式下运行的远程 UPS 的用户。

### 选项：`remote_ups_password`

在 `netclient` 模式下运行的远程 UPS 的密码。

**注意**：_在使用远程选项时，用户和设备选项必须仍然存在，但它们将不会起作用_

### 选项：`upsd_maxage`

允许设置 upsd.conf 中的 MAXAGE 值以增加特定驱动程序的超时时间，大多数用户不应更改此设置。

### 选项：`upsmon_deadtime`

允许设置 upsmon.conf 中的 DEADTIME 值以调整监控进程的过期时间，大多数用户不应更改此设置。

### 选项：`i_like_to_be_pwned`

将此选项添加到插件配置中，允许你通过将其设置为 `true` 来绕过 HaveIBeenPwned 密码要求。

**注意**：_我们强烈建议选择一个更强的/更安全的密码，而不是使用此选项！自行承担风险！_

### 选项：`leave_front_door_open`

将此选项添加到插件配置中，允许你通过将其设置为 `true` 并留空用户名和密码来禁用 NUT 服务器的身份验证。

**注意**：_我们强烈建议不要使用此功能，即使此插件仅暴露到您的内部网络。自行承担风险！_

## 事件通知

每当您的 UPS 状态发生变化时，将触发名为 `nut.ups_event` 的事件。其有效负载如下所示：

| 键           | 值                                        |
| ------------- | -------------------------------------------- |
| `ups_name`    | 您配置的 UPS 的名称                         |
| `notify_type` | 通知类型                                   |
| `notify_msg`  | NUT 默认的通知消息                         |

`notify_type` 表示通知的类型。
有关更多信息和将包含在 `notify_msg` 中的消息，请参阅下表。`%s` 将自动由 NUT 替换为您的 UPS 名称。

| 类型       | 原因                                                                 | 默认消息                                    |
| ---------- | --------------------------------------------------------------------- | -------------------------------------------------- |
| `ONLINE`   | UPS 已恢复在线                                                    | "UPS %s 在线电源"                             |
| `ONBATT`   | UPS 在电池上                                                     | "UPS %s 在电池上"                                |
| `LOWBATT`  | UPS 电量低（如果也在电池上，则为“关键”）                             | "UPS %s 电量低"                            |
| `FSD`      | UPS 正在被主控关闭（FSD = “强制关机”）                             | "UPS %s：正在执行强制关机"              |
| `COMMOK`   | 已与 UPS 建立通信                                               | "与 UPS %s 建立通信"           |
| `COMMBAD`  | 已失去与 UPS 的通信                                            | "与 UPS %s 失去通信"                  |
| `SHUTDOWN` | 系统正在关机                                                    | "自动注销和关机进行中"              |
| `REPLBATT` | UPS 电池已损坏，需要更换                                         | "UPS %s 电池需要更换"              |
| `NOCOMM`   | UPS 不可用（无法联系进行监控）                                     | "UPS %s 不可用"                            |
| `NOPARENT` | 关闭系统进程已死亡（关机不可能）                                | "upsmon 主进程已死 - 关机不可能" |

此事件允许您创建自动化操作，例如向您的手机发送 [关键通知][critical-notif]：

```yaml
automations:
  - alias: "UPS 状态更改"
    trigger:
      - platform: event
        event_type: nut.ups_event
    action:
      - service: notify.mobile_app_<your_device_id_here>
        data_template:
          title: "UPS 状态更改"
          message: "{{ trigger.event.data.notify_msg }}"
          data:
            push:
              sound:
                name: default
                critical: 1
                volume: 1.0
```

有关更多信息，请参阅 NUT 文档 [此处][nut-notif-doc-1] 和 [此处][nut-notif-doc-2]。

## 更新日志与发布

此存储库使用 [GitHub 的发布][releases] 功能来维护更改日志。

发布基于 [语义版本控制][semver]，并使用 `MAJOR.MINOR.PATCH` 格式。简而言之，版本将根据以下内容增加：

- `MAJOR`：不兼容或主要更改。
- `MINOR`：向后兼容的新功能和增强功能。
- `PATCH`：向后兼容的补丁和包更新。

## 支持

有问题？

您有几个选项来回答这些问题：

- [Home Assistant Community Add-ons Discord 聊天服务器][discord] 用于插件支持和功能请求。
- [Home Assistant Discord 聊天服务器][discord-ha] 用于一般 Home Assistant 讨论和问题。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

您也可以 [在此 GitHub 上打开问题][issue]。

## 作者与贡献者

此存储库的原始设置由 [Dale Higgs][dale3h] 完成。

有关所有作者和贡献者的完整列表，请查看 [贡献者页面][contributors]。

## 许可证

MIT 许可证

版权所有（c）2018-2025 Dale Higgs

特此授予任何获得此软件及其相关文档文件（“软件”）副本的人，在不受任何限制的情况下处理该软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许提供软件的人这样做，但需遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

该软件按“原样”提供，不提供任何形式的保证，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任承担责任，无论是合同行为、侵权行为还是其他行为，均源于、来自或与该软件的使用或其他交易有关。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_nut&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
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