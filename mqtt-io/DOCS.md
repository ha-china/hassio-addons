# Home Assistant Community Add-on: MQTT IO

将通用输入和输出（GPIO）、硬件传感器和串行设备暴露给 MQTT 服务器。非常适合单板计算机，如 Raspberry Pi。

## 安装

此附加组件的安装非常简单，与安装任何其他 Home Assistant 附加组件没有区别。

1. 点击下面的 Home Assistant 我的按钮以在您的 Home Assistant 实例中打开附加组件。

   [![在您的 Home Assistant 实例中打开此附加组件。][addon-badge]][addon]

1. 点击“安装”按钮以安装附加组件。
1. 在附加组件选项中设置 MQTT IO 配置文件的位置。
   默认情况下，这将在 `/config/mqtt-io/config.yml`。
1. 创建 MQTT IO 配置文件。有关格式和配置选项的信息，请查阅 MQTT IO 文档：
   <https://mqtt-io.app/2.2.6/#/config/scenarios>
1. 当配置创建时，启动“Mqtt IO”附加组件。
1. 检查“Mqtt IO”附加组件的日志，查看一切是否正常。

## 配置

**注意**：_请记住在更改配置时重新启动附加组件。_

示例附加组件配置：

```yaml
configuration_file: /config/mqtt-io.yml
log_level: info
```

**注意**：_这只是一个示例，不要复制和粘贴！创建你自己的！_

### 选项： `configuration_file`

`configuration_file` 选项允许您配置 MQTT IO 将用来运行的配置文件。默认是 `/config/mqtt-io/config.yml`，但如果需要，您可以更改为其他文件。

有关 MQTT IO 配置文件格式的更多信息，请参见：

<https://mqtt-io.app/2.2.7/#/config/scenarios> 和 <https://mqtt-io.app/2.2.7/#/config/ha_discovery>

请注意，此配置文件不会自动创建。

### 选项： `log_level`

`log_level` 选项控制附加组件的日志输出级别，可以更改为更详细或更简洁，这在处理未知问题时可能很有用。可能的值有：

- `trace`: 显示每一个细节，例如所有调用的内部函数。
- `debug`: 显示详细的调试信息。
- `info`: 正常（通常）有趣的事件。
- `warning`: 非错误的特殊情况。
- `error`: 不需要立即处理的运行时错误。
- `fatal`: 出现了严重错误。附加组件变得不可用。

请注意，每个级别自动包含来自更严重级别的日志消息，例如，`debug` 还会显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐的设置，除非您在进行故障排除。

## 更新日志 & 发布

该存储库使用 [GitHub 的发布][releases] 功能保留更改日志。

发布基于 [语义版本控制][semver]，并使用格式为 `MAJOR.MINOR.PATCH`。简而言之，版本将根据以下内容进行增量更新：

- `MAJOR`: 不兼容或重大变化。
- `MINOR`: 向后兼容的新特性和增强功能。
- `PATCH`: 向后兼容的错误修复和软件包更新。

## 支持

有问题吗？

您有几种选项可以获得答案：

- [Home Assistant Community Add-ons Discord 聊天服务器][discord] 以获得附加组件支持和功能请求。
- [Home Assistant Discord 聊天服务器][discord-ha] 以进行一般 Home Assistant 讨论和问题。
- Home Assistant [社区论坛][forum]。
- 加入 [/r/homeassistant][reddit] 的 [Reddit 子版块][reddit]。

您还可以在这里 [提交问题][issue] 到 GitHub。

## 作者 & 贡献者

该存储库的最初设置由 [Franck Nijhof][frenck] 完成。

有关所有作者和贡献者的完整列表，请查看 [贡献者页面][contributors]。

## 许可证

MIT 许可证

版权所有 (c) 2023-2024 Franck Nijhof

特此免费授予任何获得本软件及相关文档文件（“软件”）副本的人，使用该软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再授权和/或销售软件副本的权利，并允许向其提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在所有软件的副本或重要部分中。

软件按“原样”提供，不提供任何种类的保证，无论是明示或暗示，包括但不限于对适销性、特定用途的适用性和不侵权的保证。在任何情况下，作者或版权持有人都不对因使用软件或与软件的使用或其他交易相关的任何索赔、损害或其他责任承担责任，无论是在合同、侵权或其他方面。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_mqtt_io&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[alpine-packages]: https://pkgs.alpinelinux.org/packages
[contributors]: https://github.com/hassio-addons/addon-mqtt-io/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/?u=frenck
[frenck]: https://github.com/frenck
[issue]: https://github.com/hassio-addons/addon-mqtt-io/issues
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-mqtt-io/releases
[semver]: https://semver.org/spec/v2.0.0.html