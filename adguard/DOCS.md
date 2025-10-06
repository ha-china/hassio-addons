# Home Assistant Community Add-on: AdGuard Home

[AdGuard Home][adguard] 是一个全网范围内的广告和跟踪器拦截 DNS 服务器，具备家长控制（成人内容拦截）功能。其目的是让您控制整个网络和所有设备，并且不需要使用客户端程序。

AdGuard Home 提供了一个美观、易于使用且功能丰富的 Web 界面，方便您轻松管理过滤过程及其设置。

## 安装

此插件的安装过程非常简单，与安装任何其他 Home Assistant 插件没有区别。

1. **确保您的 Home Assistant 设备具有静态 IP 和静态外部 DNS 服务器！** 这是重要的！如果您跳过此步骤，**您将**遇到问题。
   - 在网络设置中更改此设置：
     [![打开您的 Home Assistant 实例并管理您的系统网络配置。](https://my.home-assistant.io/badges/network.svg)](https://my.home-assistant.io/redirect/network/)
     （设置 → 系统 → 网络 → 配置网络接口 → 您的接口 → IPv4 → 静态）
   - 请注意，在路由器中设置固定 IP **不是**静态的。
1. 点击下方的 Home Assistant My 按钮以在您的 Home Assistant 实例中打开插件。

   [![在您的 Home Assistant 实例中打开此插件。][addon-badge]][addon]
1. 点击“安装”按钮以安装插件。
1. 启动“AdGuard Home”插件。
1. 检查“AdGuard Home”的日志，查看是否一切正常。
1. 点击“打开 Web UI”按钮，并使用您的 Home Assistant 账户登录。
1. 准备就绪！

## 配置

**注意**：_更改配置时，请记住重新启动插件。_

示例插件配置：

```yaml
log_level: info
ssl: true
certfile: fullchain.pem
keyfile: privkey.pem
```

**注意**：_这只是个示例，不要复制粘贴！创建您自己的！_

### 选项：`log_level`

`log_level` 选项控制插件生成的日志级别，可以更改为更详细或不详细，这在您处理未知问题时可能很有用。可能的值有：

- `trace`：显示所有细节，例如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：非异常的异常情况。
- `error`：不需要立即处理的运行时错误。
- `fatal`：发生严重错误。插件变得无法使用。

请注意，每个级别自动包含更严重级别的日志消息，例如，`debug` 也显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐设置，除非您正在排除故障。

### 选项：`ssl`

启用/禁用插件上的 SSL（HTTPS）。设置为 `true` 以启用，`false` 否则。

**注意**：_SSL 设置仅适用于直接访问，对 Ingress 服务无影响。_

### 选项：`certfile`

用于 SSL 的证书文件。

**注意**：_文件必须存储在 `/ssl/`，这是默认设置。_

### 选项：`keyfile`

用于 SSL 的私钥文件。

**注意**：_文件必须存储在 `/ssl/`，这是默认设置。_

### 选项：`leave_front_door_open`

在插件配置中添加此选项允许您通过将其设置为 `true` 来禁用 AdGuard Home 的身份验证。

**注意**：_我们强烈建议不要使用此功能，即使此插件仅暴露在您的内部网络上。使用风险自负！_

## 加密设置（高级用法）

Adguard 允许在本地配置运行 DNS-over-HTTPS 和 DNS-over-TLS。如果您配置了这些选项，请确保在配置后重新启动插件。此外，为了正确使用 DNS-over-HTTPS，请确保在插件本身和 Adguard 中配置 SSL。同时请注意，插件和 Adguard 不能使用相同的端口进行 SSL。

## 更改日志与发布

此存储库使用 [GitHub 的发布][releases] 功能来维护更改日志。

发布基于 [语义版本控制][semver]，并使用 `MAJOR.MINOR.PATCH` 的格式。简而言之，版本将根据以下内容进行递增：

- `MAJOR`：不兼容或主要更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的补丁和包更新。

## 支持

有问题吗？

您有几个选项来获得答案：

- [Home Assistant Community Add-ons Discord 服务器][discord] 用于插件支持和功能请求。
- [Home Assistant Discord 服务器][discord-ha] 用于一般 Home Assistant 讨论和问题。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

您也可以在 GitHub 上 [打开一个问题][issue]。

## 作者与贡献者

此存储库的原始设置由 [Franck Nijhof][frenck] 完成。

有关所有作者和贡献者的完整列表，请查看 [贡献者页面][contributors]。

## 许可证

MIT 许可证

版权所有（c）2019-2025 Franck Nijhof

特此免费授予任何获得此软件及其相关文档文件（“软件”）副本的人，在不限制的情况下自由处理软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许获得软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何明示或暗示的保证，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任负责，无论是由合同、侵权或其他行为引起的，均与软件的使用或其他交易有关。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_adguard&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[adguard]: https://adguard.com/adguard-home/overview.html
[contributors]: https://github.com/hassio-addons/addon-adguard-home/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-adguard-home/90684?u=frenck
[frenck]: https://github.com/frenck
[issue]: https://github.com/hassio-addons/addon-adguard-home/issues
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-adguard-home/releases
[semver]: https://semver.org/spec/v2.0.0.html