# Home Assistant Community Add-on: The Lounge

一个自托管的网页IRC客户端，使用现代且简洁的界面，支持主题定制、推送通知、链接预览、文件上传等功能。完全跨平台且对移动设备友好。

## 安装

此插件的安装过程相当简单，与安装其他Home Assistant插件的过程相同。

1. 点击下方的Home Assistant我的按钮，在您的Home Assistant实例中打开此插件。

   [![在您的Home Assistant实例中打开此插件][addon-badge]][addon]

1. 点击“安装”按钮以安装插件。
1. 配置“Lounge”插件。（见下文）
1. 启动“Lounge”插件。
1. 查看Lounge插件的日志以查看其运行情况。
1. 点击“打开Web UI”。

## 配置

**注意**：_当配置更改时，请记得重启插件。_

示例插件配置：

```yaml
log_level: info
ssl: true
certfile: fullchain.pem
keyfile: privkey.pem
default_theme: default
themes:
  - thelounge-theme-material
users:
  - hassio
```

### 选项：`log_level`

`log_level`选项控制插件的日志输出级别，可以更改为更详细或更简洁，这在处理未知问题时可能很有用。可能的值有：

- `trace`：显示所有细节，例如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：非异常的异常情况。
- `error`：不需要立即处理的运行时错误。
- `fatal`：发生了严重错误。插件变得无法使用。

请注意，每个级别自动包含更严重级别的日志消息，例如，`debug`也会显示`info`消息。默认情况下，`log_level`设置为`info`，这是推荐设置，除非您正在解决问题。

### 选项：`ssl`

启用/禁用应用的SSL（HTTPS）。设置为`true`以启用，`false`否则。

### 选项：`certfile`

用于SSL的证书文件。

**注意**：_文件必须存储在`/ssl/`中，这是默认的。_

### 选项：`keyfile`

用于SSL的私钥文件。

**注意**：_文件必须存储在`/ssl/`中，这是默认的。_

### 选项：`default_theme`

每个用户的默认主题。预安装的主题是`default`和`morning`。您可以使用下一个选项添加更多主题。

**注意**：_主题仍然可以在应用的设置中更改。_

### 选项：`themes`

要在[npm registry][themes]中安装的主题列表。使用包的名称。（参考上面的示例）

### 选项：`users`

要设置的用户的列表。最初，这些用户将使用默认密码`hassio`。**确保您在登录后立即更改密码！**

## 更改日志与发布

此存储库使用GitHub的[发布][releases]功能维护更改日志。

发布基于[语义版本控制][semver]，并使用`MAJOR.MINOR.PATCH`的格式。简而言之，版本将根据以下情况增加：

- `MAJOR`：不兼容或重大更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的补丁和包更新。

## 支持

有问题吗？

您有几个选项来获得答案：

- 用于插件支持和功能请求的[Home Assistant Community Add-ons Discord聊天服务器][discord]。
- 用于一般Home Assistant讨论和问题的[Home Assistant Discord聊天服务器][discord-ha]。
- Home Assistant的[社区论坛][forum]。
- 加入Reddit的[homeassistant子版块][reddit]在[/r/homeassistant][reddit]。

您也可以在GitHub上[打开一个问题][issue]。

## 作者与贡献者

此存储库的原始设置由[Timmo][timmo]完成。

要查看所有作者和贡献者的完整列表，
请查看[贡献者页面][contributors]。

## 许可证

MIT许可证

版权（c）2019-2025 Timmo

特此授予任何获得此软件及其相关文档文件（“软件”）副本的人，在不限制的情况下自由处理软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许提供软件的人这样做，但需遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分的软件中。

软件按“原样”提供，不提供任何形式的保证，无论是明示的还是暗示的，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任承担责任，无论是由合同、侵权或其他行为引起的，均由软件或软件的使用或其他交易引起的。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/? addon=a0d7b954_thelounge&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[contributors]: https://github.com/hassio-addons/addon-thelounge/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/?u=timmo001
[issue]: https://github.com/hassio-addons/addon-thelounge/issues
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-thelounge/releases
[semver]: https://semver.org/spec/v2.0.0.html
[themes]: https://www.npmjs.com/search?q=keywords%3Athelounge-theme
[timmo]: https://github.com/timmo001