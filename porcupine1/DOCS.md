# Home Assistant 插件：porcupine1

## 安装

按照以下步骤在您的系统上安装插件：

1. 在您的 Home Assistant 前端中导航到 **设置** -> **插件** -> **插件商店**。
2. 添加商店 https://github.com/rhasspy/hassio-addons
3. 找到 "porcupine1" 插件并点击它。
4. 点击 "安装" 按钮。

## 如何使用

安装并运行此插件后，它将被 Home Assistant 中的 Wyoming 集成自动发现。要完成设置，
请点击以下按钮：

[![打开您的 Home Assistant 实例并开始设置新的集成。](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=wyoming)

另外，您可以手动安装 Wyoming 集成，详情请参见
[Wyoming 集成文档](https://www.home-assistant.io/integrations/wyoming/)。

## 配置

### 选项： `sensitivity`

激活阈值（0-1），值越低表示激活次数越少。

### 选项： `debug_logging`

启用调试日志记录。用于查看卫星连接和每次唤醒词检测的日志。

## 支持

有问题吗？

您有几种选择来获得答案：

- [Home Assistant Discord 聊天服务器][discord]。
- Home Assistant [社区论坛][forum]。
- 加入 [/r/homeassistant][reddit] 的 [Reddit 子版块][reddit]。

如果您发现了一个错误，请 [在我们的 GitHub 上提交问题][issue]。

[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[issue]: https://github.com/home-assistant/addons/issues
[reddit]: https://reddit.com/r/homeassistant
[repository]: https://github.com/hassio-addons/repository