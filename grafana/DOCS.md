# Home Assistant社区附加组件：Grafana

适用于所有指标的分析平台。

Grafana 允许您查询、可视化、设置警报并理解您的指标，无论它们存储在哪里。创建、探索和分享仪表板。通过迷人且引人注目的图形及其他数据可视化，了解您的家庭自动化系统。

将此附加组件与 InfluxDB 附加组件结合使用，以获得极其强大的家庭洞察。

## 安装

此附加组件的安装非常简单，与安装其他 Home Assistant 附加组件没有什么不同。

1. 点击下面的 Home Assistant 我的按钮，以在您的 Home Assistant 实例中打开该附加组件。

   [![在您的 Home Assistant 实例中打开此附加组件。][addon-badge]][addon]

1. 点击“安装”按钮以安装该附加组件。
1. 启动“Grafana”附加组件。
1. 检查“Grafana”的日志以查看一切是否正常。
1. 打开 Web 界面。

**注意**：由于附加组件现在支持 Ingress 和直接访问，默认的 `admin` 用户的密码为 `hassio`。**由于实现原因，密码无法更改，但是您可以删除并创建一个新用户，如果这样做，请确保更新 `grafana_ingress_user` 选项。**

## 配置

**注意**：_更改配置后，请记得重启附加组件。_

附加组件配置示例：

```yaml
log_level: info
grafana_ingress_user: frenck
plugins:
  - ayoungprogrammer-finance-datasource
  - grafana-clock-panel
env_vars:
  - name: GF_DEFAULT_INSTANCE_NAME
    value: Hassio
```

**注意**：_这只是一个示例，不要复制粘贴！创建您自己的！_

### 选项：`log_level`

`log_level` 选项控制附加组件的日志输出级别，可以更改为更详细或更简约，这在处理未知问题时可能会有用。可能的值有：

- `trace`：显示每个细节，例如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：通常是有趣的正常事件。
- `warning`：没有错误的特殊情况。
- `error`：不需要立即处理的运行时错误。
- `fatal`：出现严重错误。附加组件变得不可用。

请注意，每个级别自动包括来自更严重级别的日志消息，例如，`debug` 也显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐设置，除非您正在进行故障排除。

### 选项：`grafana_ingress_user`

在使用 Ingress 时，Grafana 默认会使用用户名 `admin` 自动登录。如果需要使用其他用户，可以设置此选项。

### 选项：`plugins`

允许您指定要安装到您的 Grafana 设置中的其他 Grafana 插件。有关可用插件的列表，请参见：

<https://grafana.com/plugins>

**注意**：_添加插件将导致附加组件启动时间变长。_

### 选项：`custom_plugins`

允许您从 URL 指定要安装到您的 Grafana 设置中的其他自定义插件。
您必须在插件配置中指定属性 `url`。

如果要安装未签名的插件，您还必须将 `unsigned` 属性设置为 `true`：

```yaml
custom_plugins:
  - name: my-plugin-name
    url: https://github.com/my-repo/my-plugin-name/releases/download/0.1.0/my-plugin-name-0.1.0.zip
    unsigned: true
```

### 选项：`env_vars`

此选项通过使用环境变量设置配置选项，允许您调整 Grafana 的各个方面。请参见本章开头的示例以了解配置的样子。

有关使用这些变量的更多信息，请参见官方 Grafana 文档：

<http://docs.grafana.org/installation/configuration/#using-environment-variables>

**注意**：_仅接受以 `GF_` 开头的环境变量。_

## 与 InfluxDB 社区附加组件一起使用

Grafana 并不默认预配置，但让它与社区 [InfluxDB 附加组件][influxdb-addon] 交互是相当简单的。请遵循该说明，以了解如何 [为 Home Assistant 创建数据库][create-db]。

1. 在 InfluxDB 中为 Grafana 创建一个新用户
   （InfluxDB 管理员 -> 用户和 "+ 创建用户"）
1. 登录到 Grafana
1. 创建一个新的数据源：

- 名称：您想要的任何名称，例如，Home Assistant
- 类型：InfluxDB
- HTTP > URL: `http://a0d7b954-influxdb:8086`
- HTTP > 访问：服务器（默认）
- 认证：（保持全禁用）
- InfluxDB 详情 > 数据库：_您的 Home Assistant InfluxDB 数据库_，
  例如，`homeassistant`
- InfluxDB 详情 > 用户：_在步骤 1 中定义的 Grafana InfluxDB 用户名_
- InfluxDB 详情 > 密码：_在步骤 1 中定义的 Grafana InfluxDB 用户密码_

1. 点击保存并测试

## 匿名访问

在局域网中，可以通过在附加组件配置中暴露端口，并设置以下环境变量来实现匿名访问：

```yaml
env_vars:
  - name: GF_AUTH_ANONYMOUS_ENABLED
    value: "true"
  - name: GF_AUTH_ANONYMOUS_ORG_NAME
    value: "Main Org."
  - name: GF_AUTH_ANONYMOUS_ORG_ROLE
    value: "Viewer"
```

不能使用 Home Assistant Cloud 启用匿名或非管理员访问。这包括在仪表板中通过 iframe 或渲染图像嵌入 Grafana 资源。有关更多详细信息，请参见
[匿名登录无法工作，Grafana 附加组件 3.0.0 #55](https://github.com/hassio-addons/addon-grafana/issues/55)。

## 已知问题和限制

- 此附加组件确实支持基于 ARM 的设备，但它们必须至少是 ARMv7 设备。（树莓派 1 和 Zero 不支持）。
- `要渲染面板图像，您必须安装 Grafana 图像渲染器插件。`
  在 ARM 设备上（如树莓派）显示此消息。Grafana 图像渲染器插件在这些设备上不可用。

## 更新日志与发布

该存储库使用 [GitHub 的发布][releases] 功能来维护变更日志。

发布基于 [语义版本控制][semver]，并使用 `MAJOR.MINOR.PATCH` 的格式。简而言之，版本将根据以下内容递增：

- `MAJOR`：不兼容或重大更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的错误修复和软件包更新。

## 支持

有问题？

您有几种方式可以获得答案：

- 访问 [Home Assistant 社区附加组件 Discord 聊天服务器][discord]以获得附加组件的支持和功能请求。
- 访问 [Home Assistant Discord 聊天服务器][discord-ha]以进行一般 Home Assistant 讨论和问题。
- 访问 Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit]在 [/r/homeassistant][reddit]

您还可以在此处 [打开问题][issue] GitHub。

## 作者与贡献者

该存储库的最初设置由 [Franck Nijhof][frenck] 完成。

有关所有作者和贡献者的完整列表，请查看 [贡献者页面][contributors]。

## 许可证

MIT 许可证

版权 (c) 2018-2025 Franck Nijhof

特此免费授予任何获得本软件及相关文档文件（“软件”）副本的人，以不受限制地处理软件，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或出售软件副本的权利，并允许提供软件的人这样做，须遵守以下条件：

上述版权声明和本许可声明应包含在所有软件的副本或实质性部分中。

本软件按“原样”提供，不提供任何形式的担保，无论是明示或暗示，包括但不限于对适销性、特定用途适用性和非侵权的担保。在任何情况下，作者或版权持有人均不对因使用软件或与软件的使用或其他交易而引起的任何索赔、损害或其他责任承担责任，无论是合同诉讼、侵权诉讼还是其他方式。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_grafana&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[contributors]: https://github.com/hassio-addons/addon-grafana/graphs/contributors
[create-db]: https://github.com/hassio-addons/addon-influxdb/blob/main/influxdb/DOCS.md#integrating-into-home-assistant
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-grafana/54674?u=frenck
[frenck]: https://github.com/frenck
[influxdb-addon]: https://github.com/hassio-addons/addon-influxdb
[issue]: https://github.com/hassio-addons/addon-grafana/issues
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-grafana/releases
[semver]: https://semver.org/spec/v2.0.0.html