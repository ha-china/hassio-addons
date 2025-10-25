# Home Assistant Community Add-on: AirCast

苹果设备使用AirPlay将音频发送到其他设备，但这与谷歌的Chromecast不兼容。此插件试图解决这种兼容性问题。

它检测您网络中的Chromecast播放器，并为每个播放器创建虚拟的AirPlay设备。它充当AirPlay客户端和真实Chromecast播放器之间的桥梁。

AirCast插件基于优秀的[AirConnect][airconnect]项目。

## 安装

此插件的安装非常直接，与安装任何其他Home Assistant插件没有什么不同。

1. 点击下面的Home Assistant My按钮，在您的Home Assistant实例上打开插件。

   ![在您的Home Assistant实例中打开此插件][addon-badge]][addon]

1. 点击“安装”按钮来安装插件。
1. 启动“AirCast”插件
1. 检查“AirCast”插件的日志，看看是否一切顺利。

大约30秒后，您应该会在插件日志中看到一些日志消息出现。现在，使用您的iOS/Mac/iTunes/Airfoil/其他客户端，您应该会看到新的AirPlay设备，并可以尝试将音频播放到它们。

## 配置

**注意**: _当配置更改时，请记住重新启动插件。_

示例插件配置：

```yaml
log_level: info
address: 192.168.1.234
latency_rtp: 5000
latency_http: 0
drift: true
```

**注意**: _这只是一个示例，不要复制粘贴它！创建你自己的！_

### 选项: `log_level`

`log_level`选项控制插件的日志输出级别，可以更改为更详细或不那么详细，这在您处理未知问题时可能很有用。可能的值有：

- `trace`: 显示每个细节，例如所有调用的内部函数。
- `debug`: 显示详细的调试信息。
- `info`: 通常（通常）有趣的正常事件。
- `warning`: 非常规的异常情况，但不是错误。
- `error`: 运行时错误，不需要立即采取行动。
- `fatal`: 发生了严重错误，插件变得无法使用。

请注意，每个级别会自动包含更严重级别的日志消息，例如，`debug`也会显示`info`消息。默认情况下，`log_level`设置为`info`，这是推荐设置，除非您正在排错。

这些日志级别也会影响AirCast服务器的日志级别。

### 选项: `address`

此选项允许您指定AirCast服务器需要绑定到的IP地址。当此选项为空时，它会自动检测要使用的接口。然而，它可能会检测错误（例如，如果您有多个网络接口）。

### 选项: `latency_rtp`

允许您调整缓冲区，这在音频卡顿时（例如，低质量网络）是需要的。此选项指定插件需要缓冲的RTP音频（AirPlay）的毫秒数。不建议将此值设置为低于500ms！将值设置为`0`会导致插件从AirPlay获取值。

### 选项: `latency_http`

允许您调整缓冲区，这在音频卡顿时（例如，低质量网络）是需要的。此选项指定插件需要缓冲的HTTP音频的毫秒数。

**注意**: 此选项通常不是必需的，在大多数情况下可以保留为`0`。

### 选项: `drift`

设置为`true`以允许时间参考漂移（无点击）。

## 延迟选项说明

这些桥梁接收来自AirPlay控制器的实时“同步”音频，以RTP帧的格式，并将其转发给Chromecast播放器，以HTTP“异步”连续音频二进制格式。换句话说，AirPlay客户端使用RTP“推”音频，而Chromecast播放器使用HTTP GET请求“拉”音频。

使用HTTP获取音频的播放器期望在GET的响应中接收初始的大量音频，这会创建一个足够大的缓冲区来处理大多数进一步的网络拥塞/延迟。其余的音频传输由使用TCP流控制的播放器调节。然而，当源是一个AirPlay RTP设备时，没有这样的大量音频可以提前发送给播放器，因为音频实时到达桥梁。每8毫秒，会接收到一个RTP帧，并立即作为HTTP主体的延续转发。如果Chromecast播放器立即开始播放第一个接收到的音频样本，期望随后有一个初始的突发，那么任何延迟RTP音频的网络拥塞都会导致播放器饿死并产生卡顿。

`latency_http`选项允许向Chromecast播放器发送一定数量的静音帧，在开始时以突发方式发送。然后，在播放这种“人工”静音时，桥梁可以构建一个RTP帧缓冲区，然后隐藏可能发生在进一步RTP帧传输中的网络延迟。这会使播放开始延迟`latency_http`毫秒。

然而，RTP帧使用UDP传输，这意味着没有交付保证，因此帧可能会不时丢失（通常发生在WiFi网络上）。为了允许检测丢失的帧，它们会按顺序编号（1,2 ... n），因此每次接收到的两个帧不连续时，都可以向AirPlay接收器请求重新发送丢失的帧。

通常，桥梁会立即使用HTTP转发每个RTP帧，而在HTTP中，帧编号的概念不存在，它只是连续的二进制音频。因此，在使用HTTP时，无法以非顺序方式发送音频。

例如，如果接收到的RTP帧编号为1,2,3,6，此桥梁将使用HTTP（在解码和转换为原始音频后）立即转发1,2,3，但当它接收到6时，它会请求重新发送4和5，并等待6（如果6立即传输，Chromecast将播放1,2,3,6 ... 不太好）。

`latency_rtp`选项设置在添加两个静音帧用于4和5之前应保持帧6多长时间，然后发送4,5,6。显然，如果此延迟大于Chromecast播放器中的缓冲区，播放将因缺乏音频而停止。请注意，`latency_rtp`不会延迟播放开始。

> **注意**: `latency_rtp`和`latency_http`本可以合并为一个`latency`参数，该参数将设置最大RTP帧保持时间以及初始额外静音的持续时间，但是所有Chromecast设备都会正确地缓冲HTTP音频（即，他们会等待接收一定量的音频后再开始播放），然后添加静音会在播放中引入额外的延迟。

## 调整Aircast

Aircast在插件配置目录中创建一个名为`aircast.xml`的配置文件。此文件允许您单独调整每个设备。每次它发现一个新设备时，它都会被添加到该文件中。

> **注意**: 在手动更改配置文件之前，强烈建议停止插件。

## 已知问题和限制

- 此插件支持基于ARM的设备，但它们至少必须是ARMv7设备。（Raspberry Pi 1和Zero不受支持）。
- AirConnect（由此插件使用）的配置文件不会暴露给用户。我们计划在未来的版本中添加此功能。

## 更改日志和发布

此存储库使用GitHub的[发布][releases]功能维护更改日志。

发布基于[语义版本控制][semver]，并使用`MAJOR.MINOR.PATCH`的格式。简而言之，版本将根据以下内容增加：

- `MAJOR`: 不兼容或主要更改。
- `MINOR`: 向后兼容的新功能和增强。
- `PATCH`: 向后兼容的补丁和软件包更新。

## 支持

有问题？

您有几个选项可以回答它们：

- Home Assistant社区插件[Discord聊天服务器][discord]用于插件支持和功能请求。
- Home Assistant[Discord聊天服务器][discord-ha]用于一般Home Assistant讨论和问题。
- Home Assistant[社区论坛][forum]。
- 加入Reddit的[子版块][reddit]在[/r/homeassistant][reddit]

您也可以在GitHub上[打开一个问题][issue]。

## 作者和贡献者

此存储库的原始设置由[Franck Nijhof][frenck]完成。

有关所有作者和贡献者的完整列表，请查看[贡献者页面][contributors]。

## 许可证

MIT许可证

版权所有（c）2017-2025 Franck Nijhof

特此授予免费许可，允许任何获得此软件及其相关文档文件（“软件”）副本的人，在不受限制的情况下处理该软件，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许获得软件的人这样做，但须遵守以下条件：

上述版权声明和此许可声明应包含在软件的所有副本或重要部分中。

该软件按“原样”提供，不提供任何明示或暗示的保证，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任承担责任，无论是由合同、侵权或其他行为引起的，均与软件或使用软件或其他交易有关。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_airconnect&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[airconnect]: https://github.com/philippe44/AirConnect
[contributors]: https://github.com/hassio-addons/addon-aircast/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[docs]: https://github.com/hassio-addons/addon-aircast/blob/main/aircast/DOCS.md
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-aircast/36742?u=frenck
[frenck]: https://github.com/frenck
[issue]: https://github.com/hassio-addons/addon-aircast/issues
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-aircast/releases
[semver]: http://semver.org/spec/v2.0.0.htm
