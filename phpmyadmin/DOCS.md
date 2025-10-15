# Home Assistant Community Add-on: phpMyAdmin

phpMyAdmin 是一个用于 MySQL 和 MariaDB 的数据库管理工具。常用的操作（如管理数据库、表、列、关系、索引、用户、权限等）可以通过用户界面进行，同时您仍然可以直接执行任何 SQL 语句。

这个插件专门设计用来管理官方的 Home Assistant MariaDB 插件。

## 安装

这个插件的安装过程非常直接，与安装其他 Home Assistant 插件没有区别。

1. 点击下面的 Home Assistant 我的按钮，在您的 Home Assistant 实例中打开插件。

   ![在您的 Home Assistant 实例中打开这个插件][addon-badge]][addon]

1. 点击“安装”按钮来安装插件。
1. 启动“phpMyAdmin”插件。
1. 享受插件带来的便利！

## 配置

**注意**：_当配置更改时，请记住重启插件。_

示例插件配置：

```yaml
log_level: info
```

**注意**：_这只是个示例，不要复制粘贴！创建您自己的！_

### 选项：`upload_limit`

默认情况下，上传的大小限制（用于导入等操作）设置为 64MB。这个选项可以增加这个限制，例如，`100` 将是 100MB。

### 选项：`log_level`

`log_level` 选项控制插件的日志输出级别，可以更改为更详细或更简洁，这在处理未知问题时可能很有用。可能的值有：

- `trace`：显示每个细节，例如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：非正常的异常事件。
- `error`：运行时错误，不需要立即处理。
- `fatal`：出现了严重错误。插件变得无法使用。

请注意，每个级别都会自动包含更严重级别的日志消息，例如，`debug` 也会显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐设置，除非您正在解决问题。

## 已知问题和限制

- 这个插件需要核心 MariaDB 插件版本 2.0 或更高版本。
- 这个插件创建用来管理官方 Home assistant MariaDB 插件。它不能连接到其他 MySQL 或 MariaDB 服务器。

## 更改日志与发布

这个仓库使用 [GitHub 的发布][releases] 功能来维护更改日志。

发布基于 [语义版本控制][semver]，并使用 `MAJOR.MINOR.PATCH` 格式。简而言之，版本将根据以下内容进行增加：

- `MAJOR`：不兼容或主要变更。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的 Bug 修复和包更新。

## 支持

有问题吗？

您有几个选项来获得答案：

- [Home Assistant Community Add-ons Discord 服务器][discord] 用于插件支持和功能请求。
- [Home Assistant Discord 服务器][discord-ha] 用于一般 Home Assistant 讨论和问题。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

您也可以在 [GitHub 上打开一个问题][issue]。

## 作者与贡献者

这个仓库的原始设置由 [Franck Nijhof][frenck] 完成。

要查看所有作者和贡献者的完整列表，请查看 [贡献者页面][contributors]。

## 许可证

MIT 许可证

版权所有 (c) 2021-2025 Franck Nijhof

特此免费授予任何获得此软件及其相关文档文件（“软件”）副本的人，在软件上进行处理的权限，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权限，并允许提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，无论是明示的还是暗示的，包括但不限于对适销性、特定用途适用性和非侵权的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任负责，无论是合同行为、侵权行为或其他行为，均由软件或使用软件或其他交易引起、产生或与之有关。