# Home Assistant Community Add-on: Prowlarr

一个基于流行的arr堆栈构建的索引器管理器/代理，用于与您的各种PVR应用程序集成。

## 安装

此插件的安装非常简单，与安装任何其他Home Assistant插件没有区别。

1. 点击下面的Home Assistant我的按钮，在您的Home Assistant实例上打开插件。

   [![在您的Home Assistant实例中打开此插件][插件徽章]][插件]

1. 点击“安装”按钮来安装插件。
1. 启动“Prowlarr”插件
1. 检查“Prowlarr”插件的日志，看看一切是否正常。
1. 点击“打开Web UI”来打开Prowlarr界面。
1. 完成屏幕上显示的向导。

## 配置

_此插件运行不需要任何配置。_

## 已知问题和限制

- 此插件不支持Home Assistant的Ingress功能（即，将插件放入Home Assistant侧边栏的开关）。
  考虑到太多需要考虑的因素，要使其正常工作非常困难，如果我们这样做，很容易破坏它。您可以考虑使用iframe面板。

## 更改日志与发布

此存储库使用GitHub的发布功能[发布]来维护更改日志。

发布基于[语义版本控制][semver]，并使用`MAJOR.MINOR.PATCH`的格式。简而言之，版本将根据以下方式增加：

- `MAJOR`：不兼容或主要更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的错误修复和软件包更新。

## 支持

有问题？

您有几个选项来得到答案：

- [Home Assistant Community Add-ons Discord聊天服务器][discord]用于插件支持和功能请求。
- [Home Assistant Discord聊天服务器][discord-ha]用于一般的Home Assistant讨论和问题。
- Home Assistant的[社区论坛][forum]。
- 加入[Reddit子版块][reddit]在[/r/homeassistant][reddit]

您也可以在GitHub上[打开一个问题][issue]。

## 作者和贡献者

此存储库的原始设置由[Franck Nijhof][frenck]完成。

有关所有作者和贡献者的完整列表，请查看[贡献者页面][contributors]。

## 许可证

MIT许可证

版权所有（c）2024 Franck Nijhof

特此授予任何人免费获得此软件及其相关文档文件（“软件”）副本的许可，在不限制的情况下，在软件中自由处理，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本，并允许提供软件的人员这样做，但须遵守以下条件：

上述版权声明和此许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任负责，无论是因合同、侵权或其他行为引起的，均与软件或软件的使用或其他交易有关。

[插件徽章]: https://my.home-assistant.io/badges/supervisor_addon.svg
[插件]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_prowlarr&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[贡献者]: https://github.com/hassio-addons/addon-prowlarr/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[论坛]: https://community.home-assistant.io/t/?u=frenck
[frenck]: https://github.com/frenck
[问题]: https://github.com/hassio-addons/addon-prowlarr/issues
[reddit]: https://reddit.com/r/homeassistant
[发布]: https://github.com/hassio-addons/addon-prowlarr/releases
[semver]: http://semver.org/spec/v2.0.0.html