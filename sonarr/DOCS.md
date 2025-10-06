# Home Assistant Community Add-on: Sonarr

智能PVR（点视率）软件，适用于新闻组和BitTorrent用户。

## 安装

这个附加组件的安装过程非常简单，与安装任何其他Home Assistant附加组件的过程相同。

1. 点击下面的Home Assistant“我的”按钮，在您的Home Assistant实例中打开此附加组件。

   [![在您的Home Assistant实例中打开此附加组件。][ addon-badge]][ addon]

1. 点击“安装”按钮来安装附加组件。
1. 启动“Sonarr”附加组件
1. 检查“Sonarr”附加组件的日志，看看是否一切顺利。
1. 点击“打开Web UI”来打开Sonarr界面。
1. 完成屏幕上显示的向导。

## 配置

_此附加组件运行不需要任何配置。_

## 已知问题和限制

- 此附加组件不支持Home Assistant的Ingress功能（即，将附加组件放入Home Assistant侧边栏的切换按钮）。
  考虑到要考虑的变量太多，使其正常工作太难了，如果我们尝试这样做，很容易就会出问题。您可以考虑使用一个iframe面板。

## 更改日志与发布

此存储库使用[GitHub的发布][ releases ]功能维护更改日志。

发布基于[语义版本控制][ semver ]，并使用`MAJOR.MINOR.PATCH`的格式。简而言之，版本将根据以下情况增加：

- `MAJOR`：不兼容或主要更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的错误修复和软件包更新。

## 支持

有问题？

您有几个选项来获得答案：

- [Home Assistant Community Add-ons Discord聊天服务器][ discord ]用于附加组件支持和功能请求。
- [Home Assistant Discord聊天服务器][ discord-ha ]用于一般的Home Assistant讨论和问题。
- Home Assistant [社区论坛][ forum ]。
- 加入[ Reddit 子版块][ reddit ]在[/r/homeassistant][ reddit ]

您也可以在GitHub上[打开一个问题][ issue ]。

## 作者和贡献者

此存储库的原始设置由[ Franck Nijhof ][ frenck ]完成。

要查看所有作者和贡献者的完整列表，
请查看[贡献者页面][ contributors ]。

## 许可证

MIT许可证

版权所有（c）2024-2025 Franck Nijhof

特此授予任何获得此软件及其相关文档文件（“软件”）副本的人，在不受限制的情况下处理软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何类型的保证，无论是明示的还是暗示的，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任承担责任，无论这些责任是由于合同、侵权或其他行为引起的，还是由于软件的使用或其他交易引起的。

[ addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[ addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_sonarr&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[ contributors]: https://github.com/hassio-addons/addon-sonarr/graphs/contributors
[ discord-ha]: https://discord.gg/c5DvZ4e
[ discord]: https://discord.me/hassioaddons
[ forum]: https://community.home-assistant.io/t/?u=frenck
[ frenck]: https://github.com/frenck
[ issue]: https://github.com/hassio-addons/addon-sonarr/issues
[ reddit]: https://reddit.com/r/homeassistant
[ releases]: https://github.com/hassio-addons/addon-sonarr/releases
[ semver]: http://semver.org/spec/v2.0.0.html