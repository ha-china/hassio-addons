# Home Assistant Community Add-on: Example

这是一个 Home Assistant 的示例插件。启动后，它每 5 秒显示一条随机名言。

它展示了多个功能和结构，例如：

- 完整的 GitHub 存储库。
- 通用 Dockerfile 结构和设置。
- 使用 `config.yaml` 和 `build.yaml` 文件。
- 通用 shell 脚本结构（`run.sh`）。
- 使用 CodeClimate 进行质量保证。
- 使用 GitLab 进行持续集成和部署。
- 使用社区 Home Assistant 插件构建环境。
- 在基础镜像中少量使用 Bash 函数库。
- 使用 Docker 标签方案。

## 安装

这个插件的安装非常简单，与安装任何其他 Home Assistant 插件没有什么不同。

1. 点击下方的 Home Assistant My 按钮在您的 Home Assistant 实例中打开插件。

   [![在您的 Home Assistant 实例中打开此插件][addon-badge]][ addon ]

1. 点击“安装”按钮来安装插件。
1. 启动“示例”插件。
1. 检查“示例”插件的日志以查看其运行情况。

## 配置

尽管这个插件只是一个示例插件，但它确实提供了一些配置选项供您尝试。

**注意**：_更改配置时请记得重启插件。_

示例插件配置：

```yaml
log_level: info
seconds_between_quotes: 5
```

### 选项：`log_level`

`log_level` 选项控制插件的日志输出级别，可以更改为更详细或更简洁，这在处理未知问题时可能很有用。可能的值有：

- `trace`：显示所有细节，例如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：常规（通常）有趣的事件。
- `warning`：非错误性的异常情况。
- `error`：不需要立即处理的运行时错误。
- `fatal`：发生了严重错误。插件变得无法使用。

请注意，每个级别自动包含更严重级别的日志消息，例如，`debug` 也显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐的设置，除非您正在解决问题。

### 选项：`seconds_between_quotes`

设置每条名言输出之间的秒数。该值必须在 `1` 到 `120` 秒之间。默认值设置为 `5` 秒。

## 更改日志与发布

这个存储库使用 [GitHub 的发布][releases] 功能来维护更改日志。

发布基于 [语义版本控制][semver]，格式为 `MAJOR.MINOR.PATCH`。简而言之，版本将根据以下内容进行递增：

- `MAJOR`：不兼容或重大更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的补丁和包更新。

## 支持

有问题？

您有几个选项来获得答案：

- 用于插件支持和功能请求的 [Home Assistant Community Add-ons Discord 服务器][discord]。
- 用于一般 Home Assistant 讨论和问题的 [Home Assistant Discord 服务器][discord-ha]。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

您也可以在 GitHub 上 [打开一个问题][issue]。

## 作者与贡献者

这个存储库的原始设置由 [Franck Nijhof][frenck] 完成。

要查看所有作者和贡献者的完整列表，
请查看 [贡献者页面][contributors]。

## 许可证

MIT 许可证

版权所有（c）2017-2025 Franck Nijhof

特此免费授予任何获得此软件及其相关文档文件（“软件”）副本的人，在不受限制的情况下处理软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或出售软件副本的权利，并允许提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，包括但不限于对适销性、特定用途适用性和非侵权的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任负责，无论这些责任是由合同、侵权或其他行为引起的，均与软件或使用软件或其他交易有关。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_example&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[contributors]: https://github.com/hassio-addons/addon-example/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/t/repository-community-hass-io-add-ons/24705?u=frenck
[frenck]: https://github.com/frenck
[issue]: https://github.com/hassio-addons/addon-example/issues
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-example/releases
[semver]: http://semver.org/spec/v2.0.0.html
