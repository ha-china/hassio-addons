# Home Assistant Community Add-on: TasmoAdmin

TasmoAdmin（以前称为SonWEB）是一个管理所有您的Sonoff-Tasmota设备集中管理的管理Web界面。
它的一些功能：

- 扫描您的网络并自动添加您的设备
- 快速轻松地查看所有设备的状态
- 从一个地方配置所有您的设备
- 一次性通过空中发送固件更新到一个或多个您的设备
- 可以自动为您下载最新的固件

## 安装

此插件的安装非常直接，与安装任何其他Home Assistant插件没有不同。

1. 点击下面的Home Assistant我的按钮，在您的Home Assistant实例上打开插件。

   [![在您的Home Assistant实例中打开此插件][addon-badge]][addon]

1. 点击“安装”按钮来安装插件。
1. 启动“TasmoAdmin”插件。
1. 检查“TasmoAdmin”插件的日志，看看是否一切顺利。

## 配置

**注意**：_更改配置时请记得重启插件。_

示例插件配置：

```yaml
log_level: info
ssl: false
certfile: fullchain.pem
keyfile: privkey.pem
```

**注意**：_这只是一个示例，不要复制和粘贴它！创建你自己的！_

### 选项：`log_level`

`log_level`选项控制插件的日志输出级别，可以更改为更详细或更简洁，这在您处理未知问题时可能很有用。可能的值有：

- `trace`：显示每个细节，如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：非错误的异常情况。
- `error`：不需要立即采取行动的运行时错误。
- `fatal`：出了严重问题。插件变得不可用。

请注意，每个级别会自动包含更严重级别的日志消息，例如，`debug`也会显示`info`消息。默认情况下，`log_level`设置为`info`，这是推荐的设置，除非您正在解决问题。

### 选项：`ssl`

启用/禁用TasmoAdmin面板的Web界面上的SSL（HTTPS）。
设置为`true`以启用它，`false`否则。

**注意** Tasmota不支持通过SSL进行OTA更新

### 选项：`certfile`

用于SSL的证书文件。

**注意**：_文件必须存储在`/ssl/`，这是默认的_

### 选项：`keyfile`

用于SSL的私钥文件。

**注意**：_文件必须存储在`/ssl/`，这是默认的_

## 更改日志与发布

此存储库使用GitHub的发布功能[发布]功能来维护更改日志。

发布基于[语义版本控制][semver]，并使用`MAJOR.MINOR.PATCH`的格式。简而言之，版本将根据以下内容进行增量：

- `MAJOR`：不兼容或主要更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的补丁和软件包更新。

## 支持

有问题？

您有几个选项来获得答案：

- [Home Assistant Community Add-ons Discord聊天服务器][discord]用于插件支持和功能请求。
- [Home Assistant Discord聊天服务器][discord-ha]用于一般的Home Assistant讨论和问题。
- Home Assistant [社区论坛][forum]。
- 加入[Reddit子版块][reddit]在[/r/homeassistant][reddit]

您也可以在GitHub上[打开一个问题][issue]。

## 作者与贡献者

此存储库的原始设置由[Franck Nijhof][frenck]。

要查看所有作者和贡献者的完整列表，
请查看[贡献者页面][contributors]。

## 许可证

MIT许可证

版权所有（c）2018-2025 Franck Nijhof

特此免费授予任何获得此软件和关联文档文件（“软件”）副本的人
在软件中自由处理的权限，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或出售软件副本的权利，
并允许提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，无论是明示的还是暗示的，包括但不限于对适销性、特定用途适用性和非侵权性的保证。
在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任负责，无论是由合同、侵权或其他行为引起的，均与软件或软件的使用或其他交易无关。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_sonweb&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[contributors]: https://github.com/hassio-addons/addon-tasmoadmin/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-tasmoadmin/54155?u=frenck
[frenck]: https://github.com/frenck
[issue]: https://github.com/hassio-addons/addon-tasmoadmin/issues
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-tasmoadmin/releases
[semver]: http://semver.org/spec/v2.0.0.html
