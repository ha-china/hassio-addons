# Home Assistant Community Add-on: Bazarr

下载和管理 Sonarr 和 Radarr 的字幕。

## 安装

此插件的安装非常简单，与安装任何其他 Home Assistant 插件没有区别。

1. 点击下方的 Home Assistant 我的按钮，在您的 Home Assistant 实例上打开此插件。

   [![在您的 Home Assistant 实例中打开此插件。][插件徽章]][插件]

1. 点击“安装”按钮来安装插件。
1. 启动“Bazarr”插件
1. 检查“Bazarr”插件的日志，看看是否一切顺利。
1. 点击“打开 Web UI”来打开 Bazarr 界面。
1. 完成屏幕上显示的向导。

- 将下载文件夹设置为，例如，
  `/media/bazarr/Donwloads/complete` 和
  `/media/bazarr/Donwloads/incomplete`

## 配置

_此插件运行不需要任何配置。_

## 更改日志与发布

此存储库使用 [GitHub 的发布][发布] 功能维护更改日志。

发布基于 [语义版本控制][semver]，并使用 `MAJOR.MINOR.PATCH` 的格式。简而言之，版本将根据以下内容进行递增：

- `MAJOR`：不兼容或主要更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的 Bug 修复和软件包更新。

## 支持

有问题？

您有几个选项来获得答案：

- [Home Assistant 社区插件 Discord 聊天服务器][discord] 用于插件支持和功能请求。
- [Home Assistant Discord 聊天服务器][discord-ha] 用于一般 Home Assistant 讨论和问题。
- Home Assistant [社区论坛][论坛]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

您也可以在 [GitHub 上打开问题][issue]。

## 作者与贡献者

此存储库的原始设置由 [Franck Nijhof][frenck] 完成。

有关所有作者和贡献者的完整列表，
请查看 [贡献者页面][贡献者]。

## 许可证

MIT 许可证

版权所有 (c) 2024-2025 Franck Nijhof

特此授予任何获得此软件及其相关文档文件（“软件”）副本的人，在不受限制的情况下处理软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或出售软件副本的权利，并允许获得软件的人这样做，但需遵守以下条件：

上述版权声明和此许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何类型的保证，无论是明示的还是暗示的，包括但不限于对适销性、特定用途适用性和非侵权的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任承担责任，无论这些责任是由合同、侵权或其他行为引起的，还是由软件或软件的使用或其他交易引起的。

[插件徽章]: https://my.home-assistant.io/badges/supervisor_addon.svg
[插件]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_bazarr&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[贡献者]: https://github.com/hassio-addons/addon-bazarr/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[论坛]: https://community.home-assistant.io/t/?u=frenck
[frenck]: https://github.com/frenck
[问题]: https://github.com/hassio-addons/addon-bazarr/issues
[reddit]: https://reddit.com/r/homeassistant
[发布]: https://github.com/hassio-addons/addon-bazarr/releases
[semver]: http://semver.org/spec/v2.0.0.html