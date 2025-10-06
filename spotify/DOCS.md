# Home Assistant Community Add-on: Spotify Connect

Home Assistant Spotify Connect add-on 允许您使用运行 Home Assistant 的设备来播放您的 Spotify 音乐。此 add-on 使用 Spotify Connect 协议，这使得它成为一个可以被所有官方客户端控制的设备。

例如；在 Raspberry Pi 上运行 Home Assistant 并安装此 add-on 将允许您在 Pi 上播放您的 Spotify 音乐。因此，您只需将您的音响系统连接到 Pi 并开始播放！

## 安装

此 add-on 的安装非常简单，与安装任何其他 Home Assistant add-on 没有区别。

1. 点击下面的 Home Assistant My 按钮，以在您的 Home Assistant 实例中打开此 add-on。

   [![在您的 Home Assistant 实例中打开此 add-on][addon-badge]][addon]

1. 点击“安装”按钮以安装 add-on。
1. 选择您的音频输出设备，并在该设备上点击“保存”。
1. 启动“Spotify Connect” add-on。
1. 检查“Spotify Connect”的日志，以查看是否一切正常。
1. 准备就绪！

## 配置

**注意**：_更改配置时，请记住重新启动 add-on。_

示例 add-on 配置：

```yaml
log_level: info
name: HomeAssistant
bitrate: 320
initial_volume: 50
username: frenck@example.com
password: MySpotifyPassword
autoplay: true
```

**注意**：_这只是一个示例，不要复制粘贴！创建您自己的！_

### 选项：`log_level`

`log_level` 选项控制 add-on 的日志输出级别，可以更改为更详细或更简洁，这在您处理未知问题时可能很有用。可能的值有：

- `trace`：显示每个细节，例如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：非错误的异常情况。
- `error`：不需要立即采取行动的运行时错误。
- `fatal`：出了严重问题。Add-on 变得无法使用。

请注意，每个级别自动包含更严重级别的日志消息，例如，`debug` 也显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐的设置，除非您正在排除故障。

将 `log_level` 设置为 `debug` 也会在 Spotify 服务中开启调试模式。

### 选项：`name`

您的设备名称（Spotify Connect 目标），如在官方 Spotify 客户端中显示。

### 选项：`bitrate`

Spotify 应该使用的比特率。越高，音质越好，但是 add-on 会消耗更多数据。

有效值：`96`，`160`（默认）或 `320`。

### 选项：`initial_volume`

初始音量，范围从 0-100%。此设置在 add-on 启动或从崩溃中恢复时生效。

initial_volume: 50 # 可选

### 选项：`username`

**重要**：_这需要 Spotify Premium 账户！_

您用于登录 Spotify Premium 账户的用户名。设置此选项将使 add-on 专门绑定到您的账户。

当您在网络中遇到发现问题时，这会很有帮助，或者以防止网络上的访客使用此 add-on。

### 选项：`password`

您用于登录 Spotify Premium 账户的密码。

### 选项：`autoplay`

Spotify 是否应该在队列为空时自动播放相似的歌曲。

## 已知问题和限制

- 此 add-on 需要 Spotify Premium 账户。

## 更改日志与发布

此存储库使用 [GitHub 的发布][releases] 功能维护更改日志。

发布基于 [语义版本控制][semver]，并使用 `MAJOR.MINOR.PATCH` 格式。简而言之，版本将根据以下内容进行增量：

- `MAJOR`：不兼容或重大更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的补丁和包更新。

## 支持

有问题？

您有几个选项来获得答案：

- [Home Assistant Community Add-ons Discord 服务器][discord] 用于 add-on 支持和功能请求。
- [Home Assistant Discord 服务器][discord-ha] 用于一般 Home Assistant 讨论和问题。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

您也可以在 GitHub 上 [打开一个问题][issue]。

## 作者与贡献者

此存储库的原始设置由 [Franck Nijhof][frenck] 完成。

有关所有作者和贡献者的完整列表，请查看 [贡献者页面][contributors]。

## 许可证

MIT 许可证

版权所有 (c) 2018-2025 Franck Nijhof

特此免费授予任何获得此软件及其相关文档文件（“软件”）副本的人，在不受限制的情况下处理软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或出售软件副本的权利，并允许提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，无论是明示的还是暗示的，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任负责，无论是因合同、侵权或其他行为引起的，也不论是否因软件或软件的使用或其他交易引起的。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_spotify&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[contributors]: https://github.com/hassio-addons/addon-spotify-connect/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-spotify-connect/61210?u=frenck
[frenck]: https://github.com/frenck
[issue]: https://github.com/hassio-addons/addon-spotify-connect/issues
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-spotify-connect/releases
[semver]: http://semver.org/spec/v2.0.0.htm