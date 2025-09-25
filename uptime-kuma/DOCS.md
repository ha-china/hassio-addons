# Home Assistant Community Add-on: Uptime Kuma

Uptime Kuma是一个开源的监控工具，可以最好地与商业服务如“Uptime Robot”的自托管版本进行比较。

它使您能够监控HTTP/S、TCP、DNS和其他协议下的服务，并且它可以向您发送停机通知或触发Home Assistant自动化webhook。

## 安装

此插件的安装非常简单，与安装任何其他Home Assistant插件没有不同。

1. 点击下面的Home Assistant我的按钮，在您的Home Assistant实例上打开插件。

   [![在您的Home Assistant实例中打开此插件][addon-badge]][ addon ]

1. 点击“安装”按钮来安装插件。
1. 启动“Uptime Kuma”插件。
1. 检查“Uptime Kuma”的日志，看看是否一切顺利。
1. 点击“打开Web UI”按钮进入Uptime Kuma。

请继续阅读本文档的其余部分以获取进一步说明。

## 配置

此插件没有配置选项，所有内容都可以通过Uptime Kuma界面进行管理和配置。

## 更改日志和发布

此存储库使用GitHub的发布功能[发布功能]维护更改日志。日志的格式基于[Keep a Changelog][keepchangelog]。

发布基于[语义版本控制][semver]，并使用`MAJOR.MINOR.PATCH`的格式。简而言之，版本将根据以下内容进行递增：

- `MAJOR`：不兼容或主要更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的bug修复和软件包更新。

## 支持

有问题吗？

您有几个选项可以回答这些问题：

- [Home Assistant Community Add-ons Discord聊天服务器][discord]用于插件支持和功能请求。
- [Home Assistant Discord聊天服务器][discord-ha]用于一般的Home Assistant讨论和问题。
- Home Assistant的[社区论坛][forum]。
- 加入Reddit的[/r/homeassistant][reddit]社区。

您也可以在GitHub上[打开一个问题][issue]。

## 作者和贡献者

此存储库的原始设置由[Franck Nijhof][frenck]完成。

有关所有作者和贡献者的完整列表，请查看[贡献者页面][contributors]。

## 许可证

MIT许可证

版权所有（c）2022-2025 Franck Nijhof

特此授予任何人免费获取此软件及其相关文档文件（“软件”）副本的权利，并在不受限制的情况下处理该软件，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

该软件按“原样”提供，不提供任何形式的保证，无论是明示的还是暗示的，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任承担责任，无论是因合同、侵权或其他行为引起的，还是因与软件的使用或其他交易有关。