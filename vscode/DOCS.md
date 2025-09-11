# Home Assistant Community Add-on: Studio Code Server

此插件运行 [code-server](https://github.com/coder/code-server)，
让您可以直接通过浏览器获得 Visual Studio Code 的体验。它允许您
直接通过网页浏览器编辑 Home Assistant 配置，
直接在 Home Assistant 前端中进行操作。

该插件预安装并预配置了 Home Assistant、MDI 图标和 YAML 扩展，
开箱即用。这意味着自动补全可以即时工作，无需配置任何内容。

## 安装

此插件的安装相当简单，与安装其他 Home Assistant 插件没有不同。

1. 点击下面的 Home Assistant 我的按钮以打开您 Home
   Assistant 实例中的插件。

   [![在您的 Home Assistant 实例中打开此插件。][addon-badge]][addon]

1. 点击“安装”按钮以安装插件。
1. 启动“Studio Code Server”插件。
1. 检查“Studio Code Server”插件的日志，查看一切是否正常。
1. 点击“打开网页界面”按钮以打开 Studio Code Server。

## 配置

**注意**：_更改配置时，请记得重启插件。_

示例插件配置：

```yaml
log_level: info
config_path: /share/my_path
packages:
  - mariadb-client
init_commands:
  - ls -la
```

**注意**：_这只是一个示例，不要直接复制粘贴！创建您自己的！_

### 选项：`log_level`

`log_level` 选项控制插件的日志输出级别，可以更改为更详细或更简洁，这在处理未知问题时可能会很有用。可能的值包括：

- `trace`：显示每一个细节，如所有被调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：不是错误的异常情况。
- `error`：不需要立即采取行动的运行时错误。
- `fatal`：发生了严重错误。插件变得无法使用。

请注意，每个级别会自动包含来自更高级别的日志消息，例如，`debug` 还会显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐的设置，除非您在进行故障排除。

### 选项：`config_path`

此选项允许您覆盖插件在访问网页界面时将打开的默认路径。例如，使用不同的配置目录，如 `/share/myconfig` 而不是 `/config`。如果设置为 `/root`，则 Home Assistant 的所有常见文件夹（如 `/config`、`/ssl`、`/share` 等）将作为每次访问的子文件夹出现。

当未配置时，插件将自动使用默认值：`/config`

### 选项：`packages`

允许您指定要安装到您的 shell 环境中的附加 [Ubuntu 包][ubuntu-packages]（例如，Python、PHP、Go）。

**注意**：_添加大量包将导致插件启动时间变长。_

### 选项：`init_commands`

使用 `init_commands` 选项进一步自定义您的 VSCode 环境。
将一条或多条 shell 命令添加到列表中，它们将在每次启动此插件时执行。

## 将您的 VSCode 设置重置为插件默认值

插件会更新您的设置以优化与 Home Assistant 的使用。
一旦您更改设置，插件将停止执行此操作，因为这可能是破坏性的。然而，如果您更改了一些内容，但想返回插件提供的默认值，请执行以下操作：

1. 打开 Visual Studio Code 编辑器。
1. 点击顶部菜单栏中的 `终端`，然后点击 `新终端`。
1. 在终端窗口中执行以下命令：`reset-settings`。
1. 完成！

## 已知问题和限制

- 这个插件可以在 Raspberry Pi 上运行吗？是的，但前提是您运行的是 64 位操作系统。此外，请查看下面的说明。
- 目前此插件仅支持 AMD64 和 aarch64/ARM64 机器。
  虽然我们支持 ARM 设备，但请注意，此插件运行起来相当重，并且需要相当多的内存。我们不推荐在少于 4Gb 内存的设备上运行。
- “Visual Studio Code 无法在此大型工作区中监视文件更改”（错误 ENOSPC）

  此问题是由于您的系统没有足够的文件句柄，导致 VSCode 无法监视所有文件。对于 HassOS，当前唯一的选项是在通知出现时点击小齿轮并告知它不要再显示。如果您有通用的 Linux 安装（例如，Ubuntu），请遵循 Microsoft 这份指南：

  <https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc>

## 更新日志与发布

此存储库使用 [GitHub 的 releases][releases] 功能保持变更日志。

版本基于 [语义化版本控制][semver]，使用 `MAJOR.MINOR.PATCH` 格式。简而言之，版本将根据以下内容进行递增：

- `MAJOR`：不兼容或重大变更。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的 bug 修复和软件包更新。

## 支持 

有问题吗？

您有多种方式可以获取答案：

- [Home Assistant Community Add-ons Discord 聊天服务器][discord]以获取插件支持和功能请求。
- [Home Assistant Discord 聊天服务器][discord-ha]以获取一般的 Home Assistant 讨论和问题。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit]，在 [/r/homeassistant][reddit]。

您还可以在这里 [提交问题][issue] 到 GitHub。

## 作者与贡献者

此存储库的最初设置由 [Franck Nijhof][frenck] 完成。

有关所有作者和贡献者的完整列表，请查看 [贡献者页面][contributors]。

## 许可证 

MIT 许可证

版权所有 (c) 2019-2025 Franck Nijhof

特此授予任何获得本软件及其相关文档文件（“软件”）副本的人免费许可，以无限制地处理软件，包括但不限于使用、复制、修改、合并、出版、分发、再许可和/或销售软件的副本，以及允许接收软件的人这样做，条件是：

上述版权声明和此许可声明将在所有副本或软件的实质部分中包含。

软件是按“原样”提供的，不承诺任何种类的保证，明示或暗示，包括但不限于对适销性、适用于特定目的和不侵权的保证。在任何情况下，作者或版权持有者均不对因使用本软件或与本软件或其他交易相关的任何索赔、损害或其他责任承担责任，无论是在合同、侵权或其他方面。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_vscode&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[contributors]: https://github.com/hassio-addons/addon-vscode/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-visual-studio-code/107863?u=frenck
[frenck]: https://github.com/frenck
[issue]: https://github.com/hassio-addons/addon-vscode/issues
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-vscode/releases
[semver]: https://semver.org/spec/v2.0.0
[ubuntu-packages]: https://packages.ubuntu.com