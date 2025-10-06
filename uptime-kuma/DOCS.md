# Home Assistant Community Add-on: Uptime Kuma

Uptime Kuma是一个开源的监控工具，可以最好地与商业服务如“Uptime Robot”的自托管版本进行比较。

它能够让你监控HTTP/S、TCP、DNS和其他协议下的服务，并且可以发送你服务中断的通知或触发Home Assistant的自动化webhook。

## 安装

这个add-on的安装过程非常直接，与安装任何其他Home Assistant add-on没有区别。

1. 点击下面的Home Assistant My按钮，在你的Home Assistant实例上打开add-on。

   [![在你的Home Assistant实例上打开这个add-on。][addon-badge]][addon]

1. 点击“安装”按钮来安装add-on。
1. 启动“Uptime Kuma”add-on。
1. 检查“Uptime Kuma”的日志，看看是否一切顺利。
1. 点击“OPEN WEB UI”按钮进入Uptime Kuma。

请阅读本文档的其余部分以获取进一步说明。

## 配置

这个add-on没有配置选项，所有内容都可以通过Uptime Kuma界面进行管理和配置。

## 更改日志与发布

这个仓库使用GitHub的发布[GitHub's releases][releases]功能来维护更改日志。日志的格式基于[Keep a Changelog][keepchangelog]。

发布基于[语义版本控制][semver]，并使用`MAJOR.MINOR.PATCH`的格式。简而言之，版本将根据以下情况进行递增：

- `MAJOR`：不兼容或主要更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的bug修复和包更新。

## 支持

有问题吗？

你有几个选项来得到解答：

- 用于add-on支持和功能请求的[Home Assistant Community Add-ons Discord聊天服务器][discord]。
- 用于一般Home Assistant讨论和问题的[Home Assistant Discord聊天服务器][discord-ha]。
- Home Assistant的[社区论坛][forum]。
- 加入Reddit的[/r/homeassistant][reddit]社区。

你也可以在GitHub上[打开一个问题][issue]。

## 作者与贡献者

这个仓库的原始设置由[Franck Nijhof][frenck]完成。

要查看所有作者和贡献者的完整列表，请查看[贡献者页面][contributors]。

## 许可证

MIT许可证

版权所有（c）2022-2025 Franck Nijhof

特此授予任何获得此软件及其相关文档文件（“软件”）副本的人，在没有任何限制的情况下处理软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何明示或暗示的保证，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任负责，无论这些责任是由合同、侵权或其他行为引起的，还是由软件的使用或其他交易引起的。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_uptime-kuma&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[contributors]: https://github.com/hassio-addons/addon-uptime-kuma/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/?u=frenck
[frenck]: https://github.com/frenck
[issue]: https://github.com/hassio-addons/addon-uptime-kuma/issues
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-uptime-kuma/releases
[semver]: https://semver.org/spec/v2.0.0.html
