# Home Assistant Community Add-on: chrony

一个对所有本地网络上的主机都可访问的NTP服务器，适用于设置互联网访问受限设备（如摄像头）的时间。
该插件还可以用来设置系统时钟。

## 安装

此插件的安装非常简单，与其他Home Assistant插件的安装方式相同。

1. 点击下面的Home Assistant My按钮，在你的Home Assistant实例上打开该插件。

   [![在你的Home Assistant实例中打开此插件。][ addon-badge]][ addon]

1. 点击“安装”按钮来安装插件。
1. 启动“chrony”插件
1. 检查“chrony”插件的日志，看看是否一切顺利。

## 配置

**注意**：_在更改配置时，请记得重启插件。_

示例插件配置：

```yaml
set_system_clock: true
mode: pool
ntp_pool: pool.ntp.org
ntp_server:
  - 54.39.13.155
  - briareus.schulte.org
```

**注意**：_这只是个示例，不要复制粘贴！自己创建！_

### 选项：`log_level`

`log_level`选项控制插件的日志输出级别，可以更改为更详细或不详细，这在处理未知问题时可能很有用。可能的值有：

- `trace`：显示所有细节，如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：非错误的异常情况。
- `error`：不需要立即处理的运行时错误。
- `fatal`：出现了严重错误。插件变得不可用。

请注意，每个级别自动包含更严重级别的日志消息，例如，`debug`也会显示`info`消息。默认情况下，`log_level`设置为`info`，这是推荐设置，除非你正在解决问题。

### 选项：`set_system_clock`

`set_system_clock`选项配置chrony来设置本地系统时钟。对于某些系统，使用不同的机制来设置系统时间可能更可取。

### 选项：`mode`

`mode`选项配置chrony使用`pool`或`server`模式。这些选项是：

- `pool`：引用一个服务器池，如pool.ntp.org（推荐）。
- `server`：引用一个具体的名称或地址列表。

根据模式，将使用`ntp_pool`或`ntp_server`选项。

### 选项：`ntp_pool`

由池模式使用，配置要使用的池名称，应是一个具有多个条目的DNS记录。应用程序将选择引用哪一个。

### 选项：`ntp_server`

由服务器模式使用，一个服务器名称或IP地址数组，用作时间源。应用程序将选择引用哪一个。

## 更改日志与发布

此存储库使用GitHub的发布功能[发布]来维护更改日志。

发布基于[语义版本控制][semver]，格式为`MAJOR.MINOR.PATCH`。简而言之，版本将根据以下情况增加：

- `MAJOR`：不兼容或主要更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的错误修复和包更新。

## 支持

有问题？

你有几个选项来获得答案：

- [Home Assistant Community Add-ons Discord聊天服务器][discord]用于插件支持和功能请求。
- [Home Assistant Discord聊天服务器][discord-ha]用于一般Home Assistant讨论和问题。
- Home Assistant [社区论坛][forum]。
- 加入[Reddit子版块][reddit]在[/r/homeassistant][reddit]

你也可以在GitHub上[打开一个问题][issue]。

## 作者与贡献者

此存储库的原始设置由[Paul Sinclair][sinclairpaul]完成。

有关所有作者和贡献者的完整列表，请查看[贡献者页面][contributors]。

## 许可证

MIT许可证

版权所有（c）2019-2025 Paul Sinclair

特此免费授予任何获得本软件及其相关文档文件（“软件”）副本的人，在不限制的情况下处理软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，无论是明示的还是暗示的，包括但不限于适销性、特定用途适用性和非侵权保证。在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任负责，无论是由合同、侵权或其他行为引起的，均由软件或使用软件或其他交易引起。

[ addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[ addon]: https://my.home-assistant.io/redirect/supervisor_addon/? addon=a0d7b954_chrony&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[ contributors]: https://github.com/hassio-addons/addon-chrony/graphs/contributors
[ discord-ha]: https://discord.gg/c5DvZ4e
[ discord]: https://discord.me/hassioaddons
[ forum]: https://community.home-assistant.io/t/community-hass-io-xxxxx/xxxxx
[ issue]: https://github.com/hassio-addons/addon-chrony/issues
[ reddit]: https://reddit.com/r/homeassistant
[ releases]: https://github.com/hassio-addons/addon-chrony/releases
[ semver]: http://semver.org/spec/v2.0.0.htm
[ sinclairpaul]: https://github.com/sinclairpaul
