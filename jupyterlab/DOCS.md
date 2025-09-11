# Home Assistant Community Add-on: JupyterLab

JupyterLab 是一个开源 web 应用程序，允许您创建和共享包含实时代码、方程式、可视化和叙述文本的文档。用途包括：数据清理和转换、数值模拟、统计建模、数据可视化、机器学习等。

该附加组件运行 JupyterLab，它是 Project Jupyter 的下一代用户界面。这是一个可扩展的交互式和可重现计算环境，基于 Jupyter Notebook 和架构。

## 安装

这个附加组件的安装相当直接，和安装其他 Home Assistant 附加组件没有区别。

1. 点击下面 Home Assistant 我的按钮以在您的 Home
   Assistant 实例中打开该附加组件。

   [![在您的 Home Assistant 实例中打开这个附加组件.][addon-badge]][addon]

2. 点击“安装”按钮以安装该附加组件。
3. 启动“JupyterLab”附加组件
4. 检查“JupyterLab”附加组件的日志以查看一切是否顺利。

## 配置

**注意**：_在更改配置后请记得重新启动附加组件。_

示例附加组件配置：

```yaml
log_level: info
github_access_token: abcdef1234567890abcdef0123456789abcdef01
system_packages:
  - ffmpeg
init_commands:
  - pip install virtualenv
  - pip install yamllint
```

**注意**：_这只是一个示例，请不要复制粘贴！创建您自己的！_

### 选项：`log_level`

`log_level` 选项控制附加组件的日志输出级别，可以根据需要调整为更详细或更简洁，这在处理未知问题时可能非常有用。可能的值有：

- `trace`：显示每一个细节，例如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常是）有趣的事件。
- `warning`：非错误的异常情况。
- `error`：不需要立即采取行动的运行时错误。
- `fatal`：发生了严重错误。附加组件变得无法使用。

请注意，每个级别自动包含更严重级别的日志消息，例如，`debug` 也会显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐的设置，除非您在故障排除。

### 选项：`github_access_token`

设置一个 GitHub 访问令牌。在向 GitHub 发出未验证的请求时（因为我们必须这样做以获取存储库数据），GitHub 对我们可以发出的请求数量施加了相当严格的速率限制。因此，您在几分钟的工作中可能会达到该限制。

文档中有一章介绍如何获取此令牌。

**注意**：_此选项支持机密，例如 `!secret github_token`。_

### 选项：`system_packages`

允许您指定要安装到 JupyterLab 设置中的其他 [Debian 软件包][debian-packages]（例如，`g++`、`make`、`ffmpeg`）。

**注意**：_添加许多软件包将导致附加组件的启动时间延长。_

#### 选项：`init_commands`

使用 `init_commands` 选项进一步自定义您的环境。将一个或多个 shell 命令添加到列表中，它们将在每次启动此附加组件时执行。

## 获取 GitHub 访问令牌

您可以按照以下步骤获取访问令牌：

1. [验证][github-verify]您在 GitHub 上的电子邮件地址。
2. 转到 GitHub 上的帐户设置，从左侧面板选择“开发者设置”。
3. 在左侧选择“个人访问令牌”。
4. 点击“生成新令牌”按钮，并输入您的密码。
5. 给令牌一个描述，然后勾选“**repo**”范围框。
6. 点击“生成令牌”。
7. 您会得到一个字符串，这将是您的访问令牌。

请记住，此令牌实际上是您 GitHub 帐户的密码。_不要_ 在线共享它或将令牌提交到版本控制中，因为其他人可以使用它访问您在 GitHub 上的所有数据。

## 变更日志和版本

此存储库使用 [GitHub 的版本][releases] 功能维护变更日志。

发布基于 [语义版本控制][semver]，使用格式 `MAJOR.MINOR.PATCH`。简而言之，版本将根据以下内容增加：

- `MAJOR`：不兼容或重大更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的错误修复和软件包更新。

## 支持

有问题吗？

您有几种选择可以获得解答：

- [Home Assistant Community Add-ons Discord 聊天服务器][discord]以获得附加组件支持和功能请求。
- [Home Assistant Discord 聊天服务器][discord-ha]以进行 Home Assistant 的一般讨论和问题。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]。

您也可以在这里 [打开一个问题][issue] GitHub。

## 作者和贡献者

本存储库的最初设置由 [Franck Nijhof][frenck] 完成。

有关所有作者和贡献者的完整列表，请查看 [贡献者页面][contributors]。

## 许可证

MIT 许可证

版权所有 (c) 2018-2025 Franck Nijhof

特此免费授予任何获得该软件及其相关文档文件（“软件”）副本的人，不受限制地处理软件，包括但不限于使用、复制、修改、合并、出版、分发、再许可和/或出售软件副本的权利，并允许该软件的提供人这样做，前提是符合以下条件：

上述版权声明和此许可声明应包含在软件的所有副本或实质性部分中。

该软件按“原样”提供，不提供任何形式的担保，明示或暗示，包括但不限于适销性、特定用途适用性和非侵权的担保。在任何情况下，作者或版权持有者对因使用该软件或与软件的使用或其他交易相关的任何索赔、损害或其他责任不承担责任，无论是在合同诉讼、侵权或其他方面。

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