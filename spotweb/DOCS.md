# Home Assistant Community Add-on: Spotweb

[Spotweb][spotweb] 是一个基于 [Spotnet][spotnet] 协议的去中心化 Usenet 社区。请支持该软件的开发者，在 [spotweb]。

## 安装

安装此附加组件非常简单，与安装任何其他 Home Assistant 附加组件没有区别。

1. [将我的 Hass.io 附加组件库][repository] 添加到您的 Hass.io 实例中。
1. 确保安装了 MariaDB 附加组件或使用远程 MySQL 服务器。
1. 安装 Spotweb 附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动该附加组件。
1. 检查附加组件的日志以查看是否一切正常。
1. 根据您的喜好仔细配置附加组件，详细信息请参阅官方文档。

此附加组件将自动配置并创建数据库。按照官方文档，可以跳过这些步骤。
您只需输入您的 Usenet 服务器详细信息和下载客户端（例如：nzbget）。

## 配置 Spotweb

官方文档中提到：
在进一步尝试使用 Spotweb 之前，请在浏览器中运行 'http://yourdomain.com/install.php' 且确保所有项目都显示为 'OK'。
这些步骤可以跳过，因为此附加组件将自动配置和创建数据库。

您只需输入您的 Usenet 服务器详细信息和下载客户端（例如：nzbget）。

**注意**：通过每小时的 cron 任务检索 Spots。可能需要最多一个小时才能开始显示 Spots。
根据您的系统规格，可能需要超过 24 小时才能检索到所有 Spots。

## 配置附加组件

**注意**：_更改配置时请记得重启附加组件。_

附加组件配置示例：

```yaml
log_level: info
ssl: false
certfile: fullchain.pem
keyfile: privkey.pem
```

**注意**：_这只是一个示例，不要直接复制粘贴！请创建您自己的！_

### 选项： `log_level`

`log_level` 选项控制附加组件的日志输出级别，可以更改为更多或更少的详细信息，这在处理未知问题时可能会很有用。可能的值包括：

- `trace`：显示每个细节，例如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：不属于错误的异常事件。
- `error`：运行时错误，不需要立即处理。
- `fatal`：出现了严重问题。附加组件变得不可用。

请注意，每个级别自动包含来自更严重级别的日志消息，例如，`debug` 也会显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐的设置，除非您在进行故障排除。

### 选项： `ssl`

启用/禁用 Bookstack 面板的 SSL（HTTPS）web 界面。设置为 `true` 启用，`false` 则禁用。

### 选项： `certfile`

用于 SSL 的证书文件。

**注意**：_该文件必须存储在 `/ssl/` 中，这是默认设置_

### 选项： `keyfile`

用于 SSL 的私钥文件。

**注意**：_该文件必须存储在 `/ssl/` 中，这是默认设置_

### 选项： `remote_mysql_host`

如果使用外部数据库，MYSQL/MariaDB 数据库的主机名/地址。

### 选项： `remote_mysql_database`

仅在使用远程 MYSQL 数据库时适用，数据库的名称。

### 选项： `remote_mysql_username`

仅在使用远程 MYSQL 数据库时适用，具有权限的用户名。

### 选项： `remote_mysql_password`

仅在使用远程 MYSQL 数据库时适用，上述用户的密码。

### 选项： `remote_mysql_port`

仅在使用远程 MYSQL 数据库时适用，数据库服务器监听的端口。

## 数据库使用

默认情况下，spotweb 会自动使用和配置 Home Assistant MariaDB 附加组件，该组件应在启动之前安装，这可以在配置中更改以使用外部 MySql/MariaDB 数据库。请注意，在这两种选项之间没有简单的升级路径。

## 已知问题和限制

在配置下载客户端（NZB 处理）时，'addon_62c7908d_nzbget_docker' 会自动填充为 nzbget 的主机名。
您需要查找您 nzbget 附加组件的正确主机名。通常是 'local-nzbget'。

## 更新日志与发布

该库使用 [GitHub 的发布][releases] 功能保持变更日志。

发布基于 [语义版本控制][semver]，使用格式 `MAJOR.MINOR.PATCH`。简而言之，版本将根据以下内容进行递增：

- `MAJOR`：不兼容或重大更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的错误修复和软件包更新。

## 支持

有问题吗？

您有几种选择可以得到答案：

- [Home Assistant Community Add-ons Discord 聊天服务器][discord]，用于附加组件支持和功能请求。
- [Home Assistant Discord 聊天服务器][discord-ha]，用于一般的 Home Assistant 讨论和问题。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

您还可以 [在这里提交问题][issue] GitHub。

## 作者与贡献者

该库的最初设置由 [Wouter Coppens][woutercoppens] 完成。

有关所有作者和贡献者的完整列表，请查看 [贡献者页面][contributors]。

## 许可

MIT 许可

版权 (c) 2021 Wouter Coppens

特此免费授予任何获得该软件及相关文档文件（“软件”）副本的人，处理该软件的权利，包括但不限于使用、复制、修改、合并、出版、分发、再许可和/或出售该软件副本的权利，并允许向其提供软件的人如此行事，须遵守以下条件：

上述版权声明和本许可声明应包含在所有副本或软件的实质性部分中。

该软件是在“按原样”基础上提供的，不提供任何类型的保证，无论是明示还是暗示，包括但不限于对适销性、适合某一特定目的和非侵权的保证。在任何情况下，作者或版权持有人均不对因使用该软件或与该软件或其他交易而产生的任何索赔、损害或其他责任负责，无论是在合同诉讼、侵权或其他方面。

[spotnet]: https://github.com/spotnet/spotnet/wiki  
[spotweb]: https://github.com/spotweb/spotweb  
[repository]: https://github.com/alexbelgium/hassio-addons  
[contributors]: https://github.com/alexbelgium/spotweb/graphs/contributors  
[discord-ha]: https://discord.gg/c5DvZ4e  
[discord]: https://discord.me/hassioaddons  
[forum]: https://community.home-assistant.io/t/community-hass-io-xxxxx/xxxxx  
[woutercoppens]: https://github.com/woutercoppens  
[issue]: https://github.com/alexbelgium/hassio-addons/issues  
[reddit]: https://reddit.com/r/homeassistant  
[releases]: https://github.com/alexbelgium/hassio-addons/releases  
[semver]: http://semver.org/spec/v2.0.0  