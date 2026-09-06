# Home Assistant 社区插件：日志查看器

轻松在您的网络浏览器中监控您的 Home Assistant 日志。提供自定义过滤，使区分不同类型的日志变得简单。

## 安装

此插件的安装非常简单，与安装其他 Home Assistant 插件没有区别。

1. 点击下面的 Home Assistant 我的按钮以在您的 Home Assistant 实例中打开该插件。

   [![在您的 Home Assistant 实例中打开此插件。][addon-badge]][addon]

1. 点击“安装”按钮以安装该插件。
1. 检查“日志查看器”插件的日志以查看是否一切正常。
1. 打开“日志查看器”插件的 Web UI 开始查看日志。

**提示：** 要查看更多日志，请确保在您的 Home Assistant `configuration.yaml` 中启用 [`logger`][logger] 集成：

```yaml
logger:
  default: info
```

## 配置

**注意**：_更改配置后，请记得重启插件。_

示例插件配置：

```yaml
log_level: info
ssl: false
certfile: fullchain.pem
keyfile: privkey.pem
```

**注意**：_这只是一个示例，请勿直接复制粘贴！请创建您自己的配置！_

### 选项：`log_level`

`log_level` 选项控制插件输出的日志级别，可以更改为更详细或更简洁，当您处理未知问题时，这可能会很有用。可能的值如下：

- `trace`：显示每个细节，例如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：不是错误的异常情况。
- `error`：不需要立即采取行动的运行时错误。
- `fatal`：出现了非常严重的问题。插件变得不可用。

请注意，每个级别自动包含来自更高严重级别的日志消息，例如，`debug` 也显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐的设置，除非您在进行故障排除。

### 选项：`ssl`

启用/禁用日志查看器的 SSL。设置为 `true` 以启用，设置为 `false` 则禁用。

**注意**：_SSL 设置仅适用于直接访问，对 Ingress 服务没有影响。_

### 选项：`certfile`

用于 SSL 的证书文件。

**注意**：_该文件必须存储在 `/ssl/` 中，这是默认位置。_

### 选项：`keyfile`

用于 SSL 的私钥文件。

**注意**：_该文件必须存储在 `/ssl/` 中，这是默认位置。_

### 选项：`leave_front_door_open`

将此选项添加到插件配置允许您通过将其设置为 `true` 并将用户名和密码留空来禁用插件的身份验证。

**注意**：_我们强烈建议不要使用此功能，即使该插件仅暴露于您的内部网络。自行承担风险！_

## 更新日志与版本

此仓库使用 [GitHub 的发布][releases] 功能维护变更日志。

版本基于 [语义版本控制][semver]，采用 `MAJOR.MINOR.PATCH` 格式。简而言之，版本将根据以下内容进行递增：

- `MAJOR`：不兼容或重大更改。
- `MINOR`：向后兼容的新特性和增强。
- `PATCH`：向后兼容的错误修复和包更新。

## 支持

有问题吗？

您有多种方式获取答案：

- [Home Assistant 社区插件 Discord 聊天服务器][discord] 提供插件支持和功能请求。
- [Home Assistant Discord 聊天服务器][discord-ha] 进行一般 Home Assistant 讨论和问答。
- Home Assistant [社区论坛][forum]。
- 加入 [/r/homeassistant][reddit] 的 [Reddit 子版块][reddit]。

您还可以在这里 [打开问题][issue] GitHub。

## 作者与贡献者

此仓库的最初设置由 [Dale Higgs][dale3h] 进行。

要查看所有作者和贡献者的完整列表，请查看 [贡献者页面][contributors]。

## 许可证

MIT 许可证

版权所有 (c) 2018-2024 Dale Higgs <@dale3h>

在此免费授权任何获得本软件及相关文档文件（“软件”）副本的人在不受限制的情况下处理该软件，包括但不限于使用、复制、修改、合并、发布、分发、再授权和/或销售该软件的副本，及允许向其提供该软件的人这样做，前提是符合以下条件：

上述版权声明和本许可声明应包含在该软件的所有副本或重要部分中。

该软件按“原样”提供，不提供任何类型的担保，明示或暗示，包括但不限于对适销性、特定用途适用性和非侵权的担保。在任何情况下，作者或版权持有人对于因使用或其他与该软件或该软件的使用和其他交易有关的责任，无论是在合同、侵权或其他方面，均不承担任何责任。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_logviewer&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[contributors]: https://github.com/hassio-addons/addon-log-viewer/graphs/contributors
[dale3h]: https://github.com/dale3h
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-log-viewer/64377?u=dale3h
[issue]: https://github.com/hassio-addons/addon-log-viewer/issues
[logger]: https://www.home-assistant.io/integrations/logger/
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-log-viewer/releases
[semver]: https://semver.org/spec/v2.0.0