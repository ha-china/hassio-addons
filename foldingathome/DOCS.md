# Home Assistant 社区插件: Folding@home

Folding@home (FAH 或 F@h) 是一个分布式计算项目，用于进行蛋白质动态的分子动力学模拟。其初始重点是蛋白质折叠，但已转向更多生物医学问题，如阿尔茨海默病、癌症、埃博拉病毒和冠状病毒。

该项目利用已安装软件的志愿者个人计算机的空闲处理资源。

现在，您可以将 Home Assistant 实例的空闲时间捐赠给 Folding@home 项目，帮助抗击这些疾病。

加入 Home Assistant Folding@home 团队！(id: 247478)

团队统计: <https://stats.foldingathome.org/team/247478>

## 安装

此插件的安装非常简单，与安装任何其他 Home Assistant 插件没有什么不同。

1. 点击下面的 Home Assistant 我的按钮，在您的 Home Assistant 实例中打开插件。

   [![在您的 Home Assistant 实例中打开此插件。][addon-badge]][addon]

1. 点击“安装”按钮以安装插件。
1. 启动“Folding@home”插件。
1. 检查“Folding@home”的日志，查看是否一切正常。
1. 打开 Web 界面。

**注意**: 默认情况下，该插件加入 Home Assistant 团队 (id: 247478)。

团队统计: <https://stats.foldingathome.org/team/247478>

## 配置

**注意**: _更改配置后，请记得重启插件。_

示例插件配置:

```yaml
log_level: info
```

### 选项: `log_level`

`log_level` 选项控制插件的日志输出级别，可以更改为更详细或更简洁，这在处理未知问题时可能很有用。可能的值有：

- `trace`: 显示每个细节，如所有调用的内部函数。
- `debug`: 显示详细的调试信息。
- `info`: 正常（通常）有趣的事件。
- `warning`: 异常情况，但不是错误。
- `error`: 运行时错误，不需要立即采取行动。
- `fatal`: 发生了严重错误。插件变得不可用。

请注意，每个级别自动包含来自更严重级别的日志消息，例如，`debug` 还会显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐的设置，除非您正在进行故障排除。

## 嵌入到 Home Assistant

可以直接将 Folding@home 界面嵌入到 Home Assistant 中，使您能够通过 Home Assistant 前端访问它。

Home Assistant 提供了 `panel_iframe` 集成，供此用途使用。

示例配置:

```yaml
panel_iframe:
  foldingathome:
    title: Folding@home
    icon: mdi:bacteria-outline
    url: http://addres.to.your.hass.io:7396
```

## 已知问题和限制

- 此插件仅在 64 位的基于英特尔的计算机上运行。Folding@home 不支持 ARM 设备（例如，树莓派）。

## 更新日志与发行版本

该仓库使用 [GitHub 的发行版][releases] 功能保持变更日志。

发行版基于 [语义版本控制][semver]，格式为 `MAJOR.MINOR.PATCH`。简而言之，版本将根据以下情况进行递增：

- `MAJOR`: 不兼容或重大更改。
- `MINOR`: 向后兼容的新功能和增强功能。
- `PATCH`: 向后兼容的错误修复和包更新。

## 支持

有问题吗？

您有几种选择可以得到解答：

- [Home Assistant 社区插件 Discord 聊天服务器][discord] 用于插件支持和功能请求。
- [Home Assistant Discord 聊天服务器][discord-ha] 用于一般 Home Assistant 讨论和问题。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

您也可以 [在这里提交问题][issue] 到 GitHub。

## 作者与贡献者

该仓库的原始设置由 [Franck Nijhof][frenck] 完成。

有关所有作者和贡献者的完整列表，请查看 [贡献者页面][contributors]。

## 许可证

MIT 许可证

Copyright (c) 2020-2024 Franck Nijhof

特此授予任何获得本软件及相关文档文件（“软件”）副本的人免费使用本软件的权利，处理不受限制，包括但不限于使用、复制、修改、合并、出版、分发、再授权和/或销售该软件副本的权利，以及允许向其提供软件的人这样做，受以下条件的限制：

上述版权声明和本许可声明应包含在所有副本或实质性部分的软件中。

软件是“按原样”提供的，没有任何类型的保证，无论是明示的还是暗示的，包括但不限于对适销性、特定用途适用性和非侵权的保证。在任何情况下，作者或版权持有人都不对由于软件或软件的使用或其他交易引起的任何索赔、损害或其他责任负责，无论是合同、侵权或其他方式。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_foldingathome&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[contributors]: https://github.com/hassio-addons/addon-foldingathome/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-folding-home/180496?u=frenck
[frenck]: https://github.com/frenck
[issue]: https://github.com/hassio-addons/addon-foldingathome/issues
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-foldingathome/releases
[semver]: http://semver.org/spec/v2.0.0.htm