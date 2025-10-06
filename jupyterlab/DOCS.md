# Home Assistant Community Add-on: JupyterLab

JupyterLab 是一个开源的 Web 应用程序，它允许您创建和共享包含实时代码、方程式、可视化和叙述性文本的文档。用途包括：数据清理和转换、数值模拟、统计建模、数据可视化、机器学习等。

此插件运行 JupyterLab，它是 Jupyter 项目的新一代用户界面。它是一个基于 Jupyter Notebook 和架构的可扩展环境，用于交互式和可重复的计算。

## 安装

此插件的安装非常简单，与安装任何其他 Home Assistant 插件没有区别。

1. 点击下方的 Home Assistant 我的按钮，在您的 Home Assistant 实例中打开此插件。

   ![在您的 Home Assistant 实例中打开此插件][addon-badge]][addon]

1. 点击“安装”按钮以安装插件。
1. 启动“JupyterLab”插件
1. 检查“JupyterLab”插件的日志，看看是否一切顺利。

## 配置

**注意**：_更改配置时，请记住重新启动插件。_

示例插件配置：

```yaml
log_level: info
github_access_token: abcdef1234567890abcdef0123456789abcdef01
system_packages:
  - ffmpeg
init_commands:
  - pip install virtualenv
  - pip install yamllint
```

**注意**：_这只是一个示例，不要复制粘贴它！创建您自己的！_

### 选项：`log_level`

`log_level` 选项控制插件的日志输出级别，可以更改为更详细或更简洁，这在您处理未知问题时可能很有用。可能的值有：

- `trace`：显示每个细节，例如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：非错误的异常情况。
- `error`：不需要立即处理的运行时错误。
- `fatal`：出了严重问题。插件变得无法使用。

请注意，每个级别自动包含更严重级别的日志消息，例如，`debug` 也显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐设置，除非您正在解决问题。

### 选项：`github_access_token`

设置一个 GitHub 访问令牌。当对 GitHub 进行未经身份验证的请求（我们必须这样做以获取存储库数据）时，GitHub 对我们能够发出的请求数量有相当严格的速率限制。因此，您可能会在几分钟内达到该限制。

本文档中有一个章节，介绍了如何获取此类令牌。

**注意**：_此选项支持密钥，例如 `!secret github_token`。_

### 选项：`system_packages`

允许您指定要安装到您的 JupyterLab 设置中的其他 [Debian 软件包][debian-packages]（例如 `g++`、`make`、`ffmpeg`）。

**注意**：_添加许多软件包将导致插件启动时间更长。_

#### 选项：`init_commands`

使用 `init_commands` 选项进一步自定义您的环境。将一个或多个 Shell 命令添加到列表中，它们将在每次此插件启动时执行。

## 获取 GitHub 访问令牌

您可以通过以下步骤获取访问令牌：

1. [在 GitHub 上验证][github-verify]您的电子邮件地址。
1. 转到 GitHub 上的您的账户设置，并从左侧面板选择“开发者设置”。
1. 在左侧，选择“个人访问令牌”。
1. 点击“生成新令牌”按钮，并输入您的密码。
1. 为令牌添加描述，并勾选“**repo**”范围框。
1. 点击“生成令牌”。
1. 您应该会得到一个字符串，它将是您的访问令牌。

请记住，此令牌实际上是您的 GitHub 账户的密码。_不要_ 在线分享它或将其检查到版本控制中，因为人们可以使用它来访问您 GitHub 上的所有数据。

## 更改日志与发布

此存储库使用 GitHub 的发布功能维护更改日志。

发布基于 [语义版本控制][semver]，并使用 `MAJOR.MINOR.PATCH` 格式。简而言之，版本将根据以下情况增加：

- `MAJOR`：不兼容或主要更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的错误修复和软件包更新。

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

版权所有 (c) 2018-2025 Franck Nijhof

特此免费授予任何获得此软件及其相关文档文件（“软件”）副本的人，在不受限制的情况下处理软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许获得软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，无论是明示的还是暗示的，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任承担责任，无论是由合同、侵权或其他行为引起的，也不论是与软件有关还是与软件的使用或其他交易有关。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_jupyterlablite&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[debian-packages]: https://www.debian.org/distrib/packages
[contributors]: https://github.com/hassio-addons/addon-jupyterlab/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-jupyterlab/87337?u=frenck
[frenck]: https://github.com/frenck
[github-verify]: https://help.github.com/articles/verifying-your-email-address
[issue]: https://github.com/hassio-addons/addon-jupyterlab/issues
[python-packages]: https://pypi.org/
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-jupyterlab/releases
[semver]: https://semver.org/spec/v2.0.0.html