# Home Assistant Community Add-on: Spotweb

[Spotweb][spotweb] 是一个基于 [Spotnet][spotnet] 协议的去中心化 usenet 社区。请支持此软件的开发者：[Spotweb][spotweb]。

## 安装

此插件的安装非常简单，与安装任何其他 Home Assistant 插件没有区别。

1. 将我的 Hass.io 插件仓库 [repository] 添加到你的 Hass.io 实例。
1. 确保安装了 MariaDB 插件，或者使用远程 MySQL 服务器。
1. 安装 Spotweb 插件。
1. 点击 `保存` 按钮以保存你的配置。
1. 启动插件。
1. 检查插件的日志，看看是否一切顺利。
1. 仔细配置插件以符合你的偏好，请参阅官方文档。

此插件将自动配置和创建数据库。根据官方文档，可以跳过这些步骤。
你需要做的：输入你的 usenet 服务器详细信息和你下载客户端（例如：nzbget）。

## 配置 Spotweb

官方文档提到：
在尝试 Spotweb 的任何其他操作之前，请从你的浏览器中运行 'http://yourdomain.com/install.php'，并确保所有项目都已检查为 'OK'。
因为这些步骤将被此插件自动配置和创建数据库所跳过。

你需要做的：输入你的 usenet 服务器详细信息和你下载客户端（例如：nzbget）。

**注意**：Spots 通过每小时一个的 cron 作业检索。在 Spots 开始出现之前，可能需要长达一个小时的时间。
根据你的系统配置，所有 Spots 的检索可能需要超过 24 小时。

## 插件配置

**注意**：_更改配置时，请重启插件。_

示例插件配置：

```yaml
log_level: info
ssl: false
certfile: fullchain.pem
keyfile: privkey.pem
```

**注意**：_这只是个示例，不要复制粘贴！创建你自己的！_

### 选项：`log_level`

`log_level` 选项控制插件输出的日志级别，可以更详细或更简洁，这在处理未知问题时可能很有用。可能的值有：

- `trace`：显示所有细节，例如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：异常情况，但不是错误。
- `error`：运行时错误，不需要立即采取行动。
- `fatal`：出了严重问题。插件变得无法使用。

请注意，每个级别会自动包含更严重级别的日志消息，例如，`debug` 也会显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐设置，除非你在进行故障排除。

### 选项：`ssl`

启用/禁用 Bookstack 面板 Web 界面的 SSL（HTTPS）。设置为 `true` 以启用，`false` 以禁用。

### 选项：`certfile`

用于 SSL 的证书文件。

**注意**：_文件必须存储在 `/ssl/`，这是默认路径。_

### 选项：`keyfile`

用于 SSL 的私钥文件。

**注意**：_文件必须存储在 `/ssl/`，这是默认路径。_

### 选项：`remote_mysql_host`

如果使用外部数据库，MySQL/MariaDB 数据库的主机名/地址。

### 选项：`remote_mysql_database`

仅当使用远程 MySQL 数据库时适用，数据库名称。

### 选项：`remote_mysql_username`

仅当使用远程 MySQL 数据库时适用，具有权限的用户名。

### 选项：`remote_mysql_password`

仅当使用远程 MySQL 数据库时适用，上述用户的密码。

### 选项：`remote_mysql_port`

仅当使用远程 MySQL 数据库时适用，数据库服务器监听的端口。

## 数据库使用

默认情况下，Spotweb 将自动使用和配置 Home Assistant MariaDB 插件，该插件应在启动前安装。这可以在配置中更改为使用外部 MySql/MariaDB 数据库。请注意，这两个选项之间没有简单的升级路径。

## 已知问题和限制

在配置下载客户端（NZB 处理）时，'addon_62c7908d_nzbget_docker' 会自动填充为 nzbget 的主机名。
你需要查找你 nzbget 插件的正确主机名。它通常是 'local-nzbget'。

## 更改日志与发布

此仓库使用 [GitHub 的发布][releases] 功能维护更改日志。

发布基于 [语义版本控制][semver]，并使用 `MAJOR.MINOR.PATCH` 格式。简而言之，版本将根据以下情况增加：

- `MAJOR`：不兼容或主要更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的补丁和软件包更新。

## 支持

有问题？

你有几个选项可以回答这些问题：

- Home Assistant Community Add-ons Discord 服务器 [discord] 用于插件支持和功能请求。
- Home Assistant Discord 服务器 [discord-ha] 用于一般 Home Assistant 讨论和问题。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

你也可以在 GitHub 上 [打开一个问题][issue]。

## 作者与贡献者

此仓库的原始设置由 [Wouter Coppens][woutercoppens] 完成。

有关所有作者和贡献者的完整列表，请查看 [贡献者页面][contributors]。

## 许可证

MIT 许可证

版权所有 (c) 2021 Wouter Coppens

特此免费授予任何获得此软件及其相关文档文件（“软件”）副本的人，在不受任何限制的情况下处理该软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许获得软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何明示或暗示的保证，包括但不限于适销性、特定用途适用性和非侵权保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任承担责任，无论这些责任是由于合同、侵权或其他行为引起的，还是由于与软件的使用或其他交易有关。