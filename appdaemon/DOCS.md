# Home Assistant Community Add-on: AppDaemon

[AppDaemon][appdaemon] 是一个松散耦合、多线程、沙盒化的 Python 执行环境，用于为 Home Assistant 家庭自动化软件编写自动化应用程序。它还提供了一个可配置的仪表板（HADashboard），适用于墙壁安装的平板电脑。

## 安装

此插件的安装非常简单，与安装任何其他 Home Assistant 插件没有区别。

1. 点击下面的 Home Assistant 我的按钮，在您的 Home Assistant 实例中打开插件。

   ![在您的 Home Assistant 实例中打开此插件][addon-badge]][addon]

1. 点击“安装”按钮以安装插件。
1. 启动“AppDaemon”插件
1. 检查“AppDaemon”插件的日志，以查看是否一切顺利。

:information_source: 请注意，插件已预配置为与 Home Assistant 连接。无需创建访问令牌或在家政助手配置中设置您的 Home Assistant URL。

此自动处理 URL 和令牌的方式与 [AppDaemon 官方文档][appdaemon] 冲突。官方文档将声明 `ha_url` 和 `token` 选项是必需的。然而，对于插件来说，这不是必需的。

## 配置

**注意**: _更改配置时，请记住重启插件。_

示例插件配置：

```yaml
log_level: info
system_packages:
  - ffmpeg
python_packages:
  - PyMySQL
  - Pillow
```

**注意**: _这只是一个示例，不要复制粘贴它！创建你自己的！_

### 选项: `log_level`

`log_level` 选项控制插件的日志输出级别，可以更改为更详细或更简洁，这在处理未知问题时可能很有用。可能的值包括：

- `trace`: 显示所有细节，例如所有调用的内部函数。
- `debug`: 显示详细的调试信息。
- `info`: 普通的（通常）有趣的事件。
- `warning`: 非常规的异常事件，但不是错误。
- `error`: 运行时错误，不需要立即采取行动。
- `fatal`: 发生了严重错误。插件变得无法使用。

请注意，每个级别自动包含更严重级别的日志消息，例如，`debug` 也显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐设置，除非您正在解决问题。

这些日志级别也影响 AppDaemon 的日志级别。

### 选项: `system_packages`

允许您指定要安装到 AppDaemon 设置中的额外 [Alpine 包][alpine-packages]（例如，`g++`、`make`、`ffmpeg`）。

**注意**: _添加许多包将导致插件启动时间更长。_

### 选项: `python_packages`

允许您指定要安装到 AppDaemon 设置中的额外 [Python 包][python-packages]（例如，`PyMySQL`、`Requests`、`Pillow`）。

**注意**: _添加许多包将导致插件启动时间更长。_

#### 选项: `init_commands`

使用 `init_commands` 选项进一步自定义您的环境。将一个或多个 shell 命令添加到列表中，它们将在每次此插件启动时执行。

## AppDaemon 和 HADashboard 配置

此插件不会为您配置 AppDaemon 或 HADashboard。然而，它确实会创建一些示例文件，以便您在首次运行时开始使用。

AppDaemon 的配置可以在此插件的配置文件夹中找到。

有关配置 AppDaemon 的更多信息，请参阅他们提供的广泛文档：

<http://appdaemon.readthedocs.io/en/latest/>

## Home Assistant 访问令牌和 ha_url 设置

默认情况下，此插件不带有 `token`，也不在 `appdaemon.yaml` 配置文件中带有 `ha_url`。**这不是一个错误！**

插件会为您处理这些设置，您无需在 AppDaemon 配置中提供或设置这些。

此自动处理 URL 和令牌的方式与 [AppDaemon 官方文档][appdaemon] 冲突。官方文档将声明 `ha_url` 和 `token` 选项是必需的。对于插件，这些不是必需的。

然而，如果您想覆盖它们，您也可以设置它们。但是，在一般使用中，这可能是不必要的，并且不推荐为此插件设置。

## 更改日志与发布

此存储库使用 [GitHub 的发布][releases] 功能维护更改日志。

发布基于 [语义版本控制][semver]，并使用 `MAJOR.MINOR.PATCH` 格式。简而言之，版本将根据以下内容进行递增：

- `MAJOR`: 不兼容或主要更改。
- `MINOR`: 向后兼容的新功能和增强功能。
- `PATCH`: 向后兼容的补丁和包更新。

## 支持

有问题？

您有几个选项来获得答案：

- [Home Assistant Community Add-ons Discord 服务器][discord] 用于插件支持和功能请求。
- [Home Assistant Discord 服务器][discord-ha] 用于一般 Home Assistant 讨论和问题。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

您也可以在 [GitHub 上打开一个问题][issue]。

## 作者与贡献者

此存储库的原始设置由 [Franck Nijhof][frenck] 提供。

有关所有作者和贡献者的完整列表，请查看 [贡献者页面][contributors]。

## 许可证

MIT 许可证

版权所有 (c) 2021 - 2025 Franck Nijhof

特此授予任何获得此软件及其相关文档文件（“软件”）副本的人，在不限制的情况下自由处理软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许向软件提供方提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何明示或暗示的保证，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任承担责任，无论是由合同、侵权或其他行为引起的，均与软件的使用或其他交易有关。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_appdaemon&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[alpine-packages]: https://pkgs.alpinelinux.org/packages
[appdaemon]: https://appdaemon.readthedocs.io
[contributors]: https://github.com/hassio-addons/addon-appdaemon/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-appdaemon-4/163259?u=frenck
[frenck]: https://github.com/frenck
[issue]: https://github.com/hassio-addons/addon-appdaemon/issues
[python-packages]: https://pypi.org/
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-appdaemon/releases
[semver]: http://semver.org/spec/v2.0.0.htm
