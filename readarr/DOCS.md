# Home Assistant Community Add-on: Readarr

书籍管理和自动化（适用于电子书的Sonarr）。

## 安装

这个附加组件的安装非常简单，与安装任何其他Home Assistant附加组件没有区别。

1. 点击下面的Home Assistant My按钮，在您的Home Assistant实例上打开附加组件。

   [![在您的Home Assistant实例中打开此附加组件][addon-badge]][addon]

1. 点击“安装”按钮来安装附加组件。
1. 启动“Readarr”附加组件
1. 检查“Readarr”附加组件的日志，看看是否一切顺利。
1. 点击“打开Web UI”来打开Readarr界面。
1. 完成屏幕上显示的向导。

## 配置

_这个附加组件运行不需要任何配置。_

## 已知问题和限制

- 这个附加组件不支持Home Assistant的Ingress功能（即，将附加组件放入Home Assistant侧边栏的切换开关）。
  考虑到太多的变量，要使其正常工作有很多需要考虑的因素，如果我们尝试这样做，很容易出错。您可以考虑使用一个iframe面板。

## 更改日志与发布

这个仓库使用[GitHub的发布][releases]功能来维护更改日志。

发布基于[语义版本控制][semver]，并使用`MAJOR.MINOR.PATCH`的格式。简而言之，版本将根据以下内容进行递增：

- `MAJOR`：不兼容或主要变更。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的bug修复和包更新。

## 支持

有问题吗？

您有几个选项来获得答案：

- [Home Assistant Community Add-ons Discord聊天服务器][discord]用于附加组件支持和功能请求。
- [Home Assistant Discord聊天服务器][discord-ha]用于一般的Home Assistant讨论和问题。
- Home Assistant [社区论坛][forum]。
- 加入[Reddit子版块][reddit]在[/r/homeassistant][reddit]

您也可以[在这里GitHub上打开一个问题][issue]。

## 作者和贡献者

这个仓库的原始设置是由[Franck Nijhof][frenck]完成的。

要查看所有作者和贡献者的完整列表，
请查看[贡献者页面][contributors]。

## 许可证

MIT许可证

版权所有 (c) 2024-2025 Franck Nijhof

特此授予任何人免费获得此软件及其相关文档文件（“软件”）的副本的权限，
可以在软件上自由处理，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或出售软件的副本，
并允许获得软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，无论是明示的还是暗示的，
包括但不限于对适销性、特定用途适用性和非侵权性的保证。
在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任承担责任，
无论是因合同、侵权或其他行为引起的，
均与软件或使用软件或其他交易有关。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_readarr&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[contributors]: https://github.com/hassio-addons/addon-readarr/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/t/?u=frenck
[frenck]: https://github.com/frenck
[issue]: https://github.com/hassio-addons/addon-readarr/issues
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-readarr/releases
[semver]: http://semver.org/spec/v2.0.0.html