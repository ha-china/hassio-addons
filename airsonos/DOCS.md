# Home Assistant Community Add-on: AirSonos

苹果设备使用AirPlay将音频发送到其他设备，但这与Sonos播放器不兼容。此插件试图解决这种兼容性问题。

它检测您网络中的Sonos播放器，并为每个播放器创建虚拟AirPlay设备。它充当AirPlay客户端和真实Sonos设备之间的桥梁。

由于Sonos使用UPnP，因此此插件可能也适用于其他UPnP播放器（例如，较新的三星电视）。

AirCast插件基于优秀的[AirConnect][airconnect]项目。

## 安装

此插件的安装非常简单，与安装任何其他Home Assistant插件没有区别。

1. 点击下面的Home Assistant My按钮以在您的Home Assistant实例中打开该插件。

   [![在您的Home Assistant实例中打开此插件。][addon-badge]][addon]

1. 点击“安装”按钮以安装插件。
1. 启动“AirSonos”插件
1. 检查“AirSonos”插件的日志，看看是否一切顺利。

大约30秒后，您应该在插件日志中看到一些日志消息出现。现在，使用您的iOS/Mac/iTunes/Airfoil/其他客户端，您应该看到新的AirPlay设备，并可以尝试将音频播放到它们。

## 配置

**注意**：_更改配置时请记住重新启动插件。_

示例插件配置：

```yaml
log_level: info
address: 192.168.1.234
port: 49152
latency_rtp: 1000
latency_http: 2000
drift: true
```

**注意**：_这只是一个示例，不要复制粘贴！创建您自己的！_

### 选项：`log_level`

`log_level`选项控制插件的日志输出级别，可以更改为更详细或更简洁，这在处理未知问题时可能很有用。可能的值有：

- `trace`：显示每个细节，例如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：异常情况，但不是错误。
- `error`：运行时错误，不需要立即采取行动。
- `fatal`：出了严重的问题。插件变得无法使用。

请注意，每个级别自动包含更严重级别的日志消息，例如，`debug`也会显示`info`消息。默认情况下，`log_level`设置为`info`，这是推荐设置，除非您正在排除故障。

这些日志级别也会影响AirSonos服务器的日志级别。

### 选项：`address`

此选项允许您指定AirSonos服务器需要绑定到的IP地址。当此选项为空时，它将自动检测要使用的接口。尽管如此，它可能会检测错误（例如，如果您有多个网络接口）。

### 选项：`port`

AirSonos服务器将暴露自身的端口。默认的`49152`在大多数情况下应该足够。只有当您确实需要更改时才更改它。

### 选项：`latency_rtp`

允许您调整缓冲区，这在音频卡顿时（例如，低质量网络）是需要的。此选项指定插件需要缓冲的RTP音频（AirPlay）的毫秒数。不建议将此值设置为低于500ms！

### 选项：`latency_http`

允许您调整缓冲区，这在音频卡顿时（例如，低质量网络）是需要的。此选项指定插件需要缓冲的HTTP音频的毫秒数。

### 选项：`drift`

设置为`true`以允许时间参考漂移（无点击声）。

## Sonos提示和限制

当创建Sonos组时，只有该组的主机将显示为AirPlay播放器，其他设备如果已经被检测到将会被移除。如果组后来被拆分，那么单独的播放器将会重新出现。
每次检测周期大约需要30秒。

音量设置为整个组，但相同的级别适用于所有成员。如果您需要更改单个音量，您需要使用Sonos原生控制器。**注意**：如果后来从AirPlay设备再次更改组音量，这些设置将会被覆盖。

## 延迟选项解释

这些桥梁从AirPlay控制器接收实时“同步”音频，以RTP帧的格式，并将其转发到Sonos播放器，以HTTP“异步”连续音频二进制格式。换句话说，
AirPlay客户端使用RTP“推送”音频，而Sonos播放器使用HTTP GET请求“拉取”音频。

使用HTTP获取音频的播放器期望在GET响应中接收初始的大量音频，这会创建一个足够大的缓冲区来处理大多数进一步的网络拥塞/延迟。
音频传输的其余部分由使用TCP流控制的播放器调节。然而，当源是一个AirPlay RTP设备时，没有预先发送到播放器的如此大量的音频，因为音频实时到达桥梁。
每8毫秒，会收到一个RTP帧，并立即作为HTTP正文的延续转发。如果Sonos播放器立即开始播放第一个收到的音频样本，期望随后有一个初始的突发，
那么任何延迟RTP音频的网络拥塞将会导致播放器饥饿并产生卡顿。

`latency_http`选项允许向Sonos播放器发送一定数量的静音帧，在开始时以突发方式发送。然后，在播放这些“人工”静音时，
桥梁可以构建一个RTP帧缓冲区，然后隐藏可能发生在进一步RTP帧传输中的网络延迟。
这会延迟播放的开始`latency_http`毫秒。

然而，RTP帧使用UDP传输，这意味着没有交付保证，因此帧可能会不时丢失（通常发生在WiFi网络上）。为了允许检测丢失的帧，它们按顺序编号（1,2 ... n），因此每次收到的两个帧不连续时，AirPlay接收器可以请求重新发送丢失的帧。

通常，桥梁会立即使用HTTP转发每个RTP帧，再次在HTTP中，帧编号的概念不存在，它只是连续的二进制音频。因此，在使用HTTP时，不可能以非顺序方式发送音频。

例如，如果收到的RTP帧编号为1,2,3,6，此桥梁将立即使用HTTP转发（解码和转换为原始音频）1,2,3，但当收到6时，它将请求重新发送4和5，并暂时保留6，等待（如果6立即传输，Sonos将播放1,2,3,6 ... 不太好）。

`latency_rtp`选项设置在添加两个静音帧以发送4和5之前，应保留帧6多长时间。显然，如果此延迟大于Sonos播放器中的缓冲区，播放将因缺少音频而停止。
请注意，`latency_rtp`不会延迟播放的开始。

> **注意**：`latency_rtp`和`latency_http`本可以合并为一个`latency`参数，该参数将设置最大RTP帧保留时间以及初始额外静音的持续时间（延迟），
> 然而，所有Sonos设备都正确地缓冲HTTP音频（即，它们等待收到一定量的音频后再开始播放），然后添加静音将会在播放中引入不必要的额外延迟。

## 调整AirSonos

AirSonos在插件配置目录中创建一个名为`airsonos.xml`的配置文件。此文件允许您单独调整每个设备。每次它发现一个新设备时，它都会被添加到该文件中。

> **注意**：在手动更改配置文件之前，强烈建议停止插件。

## 已知问题和限制

- 此插件支持基于ARM的设备，但它们至少必须是ARMv7设备。（不支持Raspberry Pi 1和Zero）。

## 更改日志和发布

此存储库使用[GitHub的发布][releases]功能维护更改日志。

发布基于[语义版本控制][semver]，并使用`MAJOR.MINOR.PATCH`的格式。简而言之，版本将根据以下内容进行增量：

- `MAJOR`：不兼容或主要更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的补丁和包更新。

## 支持

有问题吗？

您有几个选项可以回答这些问题：

- [Home Assistant社区插件Discord聊天服务器][discord]用于插件支持和功能请求。
- [Home Assistant Discord聊天服务器][discord-ha]用于一般Home Assistant讨论和问题。
- Home Assistant [社区论坛][forum]。
- 加入[Reddit子版块][reddit]中的[/r/homeassistant][reddit]

您也可以在GitHub上[打开一个问题][issue]。

## 作者和贡献者

此存储库的原始设置由[Franck Nijhof][frenck]完成。

有关所有作者和贡献者的完整列表，请查看[贡献者页面][contributors]。

## 许可证

MIT许可证

版权所有（c）2017-2025 Franck Nijhof

特此授予任何获得此软件及其相关文档文件（“软件”）副本的人，在不受限制的情况下处理该软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许获得软件的人这样做，但须遵守以下条件：

上述版权声明和此许可声明应包含在软件的所有副本或重要部分中。

该软件按“原样”提供，不提供任何明示或暗示的保证，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任负责，无论是由合同、侵权或其他行为引起的，均与软件或软件的使用或其他交易有关。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_airsonos&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[airconnect]: https://github.com/philippe44/AirConnect
[commits]: https://github.com/hassio-addons/addon-airsonos/commits/main
[contributors]: https://github.com/hassio-addons/addon-airsonos/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-airsonos/36796?u=frenck
[frenck]: https://github.com/frenck
[issue]: https://github.com/hassio-addons/addon-airsonos/issues
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-airsonos/releases
[semver]: http://semver.org/spec/v2.0.0.htm