# Home Assistant Community Add-on: Tautulli

Tautulli 是一个应用程序，可以与您的 Plex 媒体服务器一起运行，以监视活动和跟踪各种统计信息。最重要的是，这些统计信息包括观看了什么、谁观看了它、何时何地观看的以及以何种方式观看。所有统计信息都以精美且简洁的界面呈现，包含许多表格和图表，使您能够轻松地向其他人炫耀您的服务器。

## 安装

此附加组件的安装非常简单，与安装任何其他 Home Assistant 附加组件没有区别。

1. 点击下面的 Home Assistant 我的按钮以在您的 Home Assistant 实例中打开此附加组件。

   [![在您的 Home Assistant 实例中打开此附加组件。][addon-badge]][addon]

1. 点击“安装”按钮以安装此附加组件。
1. 启动“Tautulli”附加组件
1. 检查“Tautulli”附加组件的日志以查看一切是否顺利。
1. 点击“打开 WEB UI”以打开 Tautulli 网站并按照向导进行操作。

**注意**：启动附加组件可能需要几分钟时间（尤其是首次启动附加组件时）。

## 配置

**注意**：_在更改配置时，请记得重启附加组件。_

示例附加组件配置：

```yaml
log_level: info
```

### 选项：`log_level`

`log_level` 选项控制附加组件的日志输出级别，可以根据需要调整为更详细或更简单，这在处理未知问题时可能会很有用。可能的值有：

- `trace`：显示每一个细节，例如所有被调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：不属于错误的异常情况。
- `error`：不需要立即采取措施的运行时错误。
- `fatal`：发生了严重错误。附加组件变得无法使用。

请注意，每个级别自动包含更严重级别的日志消息，例如，`debug` 也会显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐的设置，除非您在进行故障排除。

## 嵌入到 Home Assistant

可以直接将 Tautulli 嵌入到 Home Assistant，从而允许您通过 Home Assistant 前端访问您的 Tautulli。

Home Assistant 提供了 `panel_iframe` 集成，用于这些目的。

示例配置：

```yaml
panel_iframe:
  tautulli:
    title: Tautulli
    icon: mdi:filmstrip
    url: http://addres.to.your.home.assistant:8181
```

## 更新日志及发行版

本存储库使用 [GitHub 的发行版][releases] 功能保持更改日志。

发行版基于 [语义版本控制][semver]，并使用 `MAJOR.MINOR.PATCH` 的格式。简而言之，版本会根据以下内容进行增量：

- `MAJOR`：不兼容或重大更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的错误修复和软件包更新。

## 支持

有问题？

您有几种方式可以获得解答：

- [Home Assistant Community Add-ons Discord 聊天服务器][discord] 以获取附加组件支持和功能请求。
- [Home Assistant Discord 聊天服务器][discord-ha] 进行一般 Home Assistant 讨论和提问。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

您还可以在这里 [打开一个问题][issue] GitHub。

## 作者及贡献者

本存储库的最初设置由 [Joakim Sørensen][ludeeus] 进行。

有关所有作者和贡献者的完整列表，请查看 [贡献者页面][contributors]。

## 许可证

MIT 许可证

- Copyright (c) 2018-2019 Joakim Sørensen
- Copyright (c) 2019-2025 Franck Nijhof

特此免费授予任何获得本软件及相关文档文件（“软件”）副本的人，以无任何限制地处理该软件，包括但不限于使用、复制、修改、合并、出版、分发、再授权和/或销售该软件的副本，以及允许向其提供软件的人这样做，前提是遵循以下条件：

上述版权声明和本许可证声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，没有任何形式的担保，无论明示或暗示，包括但不限于对适销性、特定目的的适用性和非侵权的担保。在任何情况下，作者或版权持有者对任何索赔、损害或其他责任不承担责任，无论是在合同行为、侵权或其他情况中，因使用或与软件或软件的使用或其他交易相关的事项而引起。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_tautulli&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[contributors]: https://github.com/hassio-addons/addon-tautulli/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-tautulli/68745
[issue]: https://github.com/hassio-addons/addon-tautulli/issues
[ludeeus]: https://github.com/ludeeus
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-tautulli/releases
[semver]: https://semver.org/spec/v2.0.0.html