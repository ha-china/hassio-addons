# Home Assistant Add-on: "Unofficial" phpMyAdmin

phpMyAdmin 是一个用于 MySQL 和 MariaDB 的数据库管理工具。常用的操作（如管理数据库、表、列、关系、索引、用户、权限等）可以通过用户界面进行，同时您仍然可以直接执行任何 SQL 语句。

这个 add-on 是专门设计来管理官方 Home Assistant MariaDB add-on 的。

## 安装

按照以下步骤在您的系统上安装 add-on：

添加仓库 `https://github.com/erik73/hassio-addons`。
找到 "phpMyAdmin" add-on 并点击它。
点击 "INSTALL" 按钮。

## 配置

**注意**：_更改配置时请记得重启 add-on。_

示例 add-on 配置：

```yaml
log_level: info
```

**注意**：_这只是个示例，不要复制粘贴！创建您自己的配置！_

### 选项：`upload_limit`

默认情况下，上传的大小限制（用于导入等操作）设置为 64MB。这个选项可以增加这个限制，例如，`100` 将是 100MB。

### 选项：`log_level`

`log_level` 选项控制 add-on 的日志输出级别，可以更改为更详细或不详细，这在处理未知问题时可能很有用。可能的值有：

- `trace`：显示所有细节，例如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：异常情况，但不是错误。
- `error`：运行时错误，不需要立即采取行动。
- `fatal`：出大事了。Add-on 变得无法使用。

请注意，每个级别自动包含更严重级别的日志消息，例如，`debug` 也显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，除非您正在排错，否则这是推荐设置。

## 已知问题和限制

- 这个 add-on 需要 core MariaDB add-on 版本 2.0 或更高版本。
- 这个 add-on 是创建来允许管理官方 Home assistant MariaDB add-on 的。它不能连接到其他 MySQL 或 MariaDB 服务器。

## 更改日志和发布

这个仓库使用 [GitHub 的发布][releases] 功能来维护更改日志。

发布基于 [语义版本控制][semver]，并使用 `MAJOR.MINOR.PATCH` 的格式。简而言之，版本将根据以下情况增加：

- `MAJOR`：不兼容或主要变更。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的 bug 修复和软件包更新。

## 支持

有问题？

您可以 [在这里打开问题][issue] GitHub。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_phpmyadmin&repository_url=https%3A%2F%2Fgithub.com%2Ferik73%2Frepository
[contributors]: https://github.com/erik73/addon-phpmyadmin/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-phpmyadmin/171729?u=frenck
[frenck]: https://github.com/frenck
[issue]: https://github.com/erik73/addon-phpmyadmin/issues
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/erik73/addon-phpmyadmin/releases
[semver]: https://semver.org/spec/v2.0.0.html