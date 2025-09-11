# Home Assistant 插件：Fusion

一个轻量级、自托管的友好 RSS 阅读器

## 安装

将这个仓库添加到你的 [Hass.io](https://home-assistant.io/hassio/) 实例中：

`https://github.com/einschmidt/hassio-addons`

如果你遇到问题，可以参考 [官方文档](https://home-assistant.io/hassio/installing_third_party_addons/)。

然后安装“Fusion”插件。

## 配置

**注意**：_请记得在更改配置后重启插件。_

### 选项： `log_level`

`log_level` 选项控制插件的日志输出级别，可以更改为更详细或更简洁，这在处理未知问题时可能会很有用。可能的值有：

- `trace`：显示每个细节，比如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：非错误的异常情况。
- `error`：不需要立即处理的运行时错误。
- `fatal`：某些东西出错了，插件变得无法使用。

请注意，每个级别自动包括来自更严重级别的日志消息，例如，`debug` 也会显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐的设置，除非你在进行故障排除。