# Home Assistant Community Add-on: EMQX

[EMQX][emqx] 是一个开源的 MQTT 中间件，具有高性能的实时消息处理引擎，为大规模的物联网设备提供事件流服务。作为最可扩展的 MQTT 中间件，EMQX 可以帮助您连接任何设备，无论规模大小（包括您的家庭设备）。

[EMQX MQTT 中间件][emqx] 是 Home Assistant 中通常使用的 Mosquitto MQTT 中间件/插件的先进替代品。它具有一个用于配置、管理和调试您的 MQTT 中间件、客户端和流量的界面。

虽然 EMQX 主要在其网站上作为云托管产品销售，但此插件在完全本地、自托管的环境中运行 EMQX。

## 安装

此插件的安装非常简单，与安装任何其他 Home Assistant 插件没有区别。

1. 点击下方的 Home Assistant "我的"按钮，在您的 Home Assistant 实例中打开此插件。

   ![在您的 Home Assistant 实例中打开此插件][addon-badge]][ addon ]

1. 点击 "安装" 按钮来安装插件。
1. 启动 "EMQX" 插件。
1. 检查 "EMQX" 的日志，看看是否一切正常。
1. 打开 Web UI。
1. 使用默认凭据登录：用户名 `admin` 和密码 `public`。
1. 确保首先为您的 MQTT 客户端设置认证，但在 EMQX Web UI 中的 "访问控制" -> "认证" 下设置认证方法。
1. 再次阅读上述步骤，并**确保**您已设置认证。

_Notes:_

- 在配置 Home Assistant 时，将 Zigbee2MQTT 或 Home Assistant 机器上的任何其他 MQTT 应用程序或客户端配置为连接到 eMQX，使用 `homeassistant` 或 `a0d7b954-emqx` 作为要连接的中间件/主机名。
  在某些情况下，`localhost` 也可以正常工作。
- 在将外部设备连接到您的 EMQX 插件时，使用您的 Home Assistant 实例的 IP 地址或主机名作为要连接的中间件/主机名。

## 配置

您很可能不需要这些配置选项。几乎所有的配置都可以通过此插件中提供的 Web UI 来完成。
一些更高级/复杂的配置选项在 Web UI 中不可用，但可以使用此选项进行配置（例如，在设置多个实例的集群时）。

**注意**：_更改配置时，请记住重新启动插件。_

示例插件配置：

```yaml
env_vars:
  - name: EMQX_NODE__NAME
    value: "something@else.local"
```

**注意**：_这只是一个示例，不要复制粘贴！创建您自己的！_

### 选项：`env_vars`

此选项允许您通过使用环境变量来设置配置选项，从而调整 EMQX 的各个方面。查看本章开头的示例，了解配置的外观。

有关使用这些变量的更多信息，请参阅官方 EMQX 文档：

<https://www.emqx.io/docs/en/v5.0/admin/cfg.html>

**注意**：_仅接受以 `EMQX_` 开头的环境变量。_\.

## 已知问题和限制

- 此插件不能与 Mosquitto 插件同时运行。
- EMQX 默认使用端口 1883、8083、8084 和 8883。您的现有插件中可能有一个与这些端口冲突。在这种情况下，您需要更改其他插件的端口或更改 EMQX 的监听端口。
  要更改 EMQX 的端口，您需要临时停止冲突的插件，因为您需要访问 EMQX Web UI 来更改监听端口。
- AlexxIT 的 WebRTC 集成已知会在端口 8083 上引起端口冲突。临时禁用集成（类似于上述为插件禁用的点）可用于允许访问 EMQX Web UI 来调整监听器。

## 更改日志和发布

此存储库使用 [GitHub 的发布][releases] 功能来维护更改日志。

发布基于 [语义版本控制][semver]，并使用 `MAJOR.MINOR.PATCH` 的格式。简而言之，版本将根据以下内容进行递增：

- `MAJOR`：不兼容或主要更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的补丁和软件包更新。

## 支持

有问题吗？

您有几个选项来获得答案：

- [Home Assistant Community Add-ons Discord 聊天服务器][discord] 用于插件支持和功能请求。
- [Home Assistant Discord 聊天服务器][discord-ha] 用于一般 Home Assistant 讨论和问题。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

您还可以在 GitHub 上 [打开一个问题][issue]。

## 作者和贡献者

此存储库的原始设置由 [Franck Nijhof][frenck] 完成。

有关所有作者和贡献者的完整列表，请查看 [贡献者页面][contributors]。

## 许可证

MIT 许可证

版权所有 (c) 2023-2025 Franck Nijhof

特此免费授予任何获得此软件及其相关文档文件（“软件”）副本的人，在不受限制的情况下处理该软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许获得软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何明示或暗示的保证，包括但不限于对适销性、特定用途适用性和非侵权的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任承担责任，无论这些责任是由合同、侵权或其他行为引起的，还是由软件或其使用或其他交易引起的。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_emqx&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[contributors]: https://github.com/hassio-addons/addon-emqx/graphs/contributors
[create-db]: https://github.com/hassio-addons/addon-influxdb/blob/main/influxdb/DOCS.md#integrating-into-home-assistant
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[emqx]: https://www.emqx.io/
[forum]: https://community.home-assistant.io/?u=frenck
[frenck]: https://github.com/frenck
[influxdb-addon]: https://github.com/hassio-addons/addon-influxdb
[issue]: https://github.com/hassio-addons/addon-emqx/issues
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-emqx/releases
[semver]: https://semver.org/spec/v2.0.0.html