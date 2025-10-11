# Home Assistant Add-on: microWakeWord

## 安装

按照以下步骤在您的系统上安装此插件：

1. 在 Home Assistant 前端导航到 **设置** -> **插件** -> **插件商店**。
2. 添加商店 https://github.com/rhasspy/hassio-addons
2. 查找 "microWakeWord" 插件并点击它。
3. 点击 "安装" 按钮。

## 如何使用

此插件安装并运行后，Wyoming 集成将在 Home Assistant 中自动发现。要完成设置，请点击以下我的按钮：

[![打开您的 Home Assistant 实例并开始设置新的集成。](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=wyoming)

或者，您可以手动安装 Wyoming 集成，有关更多信息，请参阅
[Wyoming 集成文档](https://www.home-assistant.io/integrations/wyoming/)。

## 配置

### 选项：`debug_logging`

启用调试日志。用于在日志中查看卫星连接和每个唤醒词检测。

## 自定义唤醒词模型

插件将自动从 `/share/microwakeword` 目录加载自定义唤醒词模型。[安装 Samba 插件](https://www.home-assistant.io/common-tasks/supervised/#installing-and-using-the-samba-add-on) 以将唤醒词模型文件（包括 `<wake_word>.json` 和 `<wake_word>.tflite`）复制到此目录。

在 `/share/microwakeword` 添加新模型后，确保重新加载任何 microWakeWord 的 Wyoming 集成。重新加载后，新的唤醒词将在语音助手设置页面中选择。

## 支持

有问题？

您有几个选项来获得答案：

- [Home Assistant Discord 聊天服务器][discord]。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

如果您发现了一个错误，请 [在我们的 GitHub 上打开一个问题][issue]。

[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[issue]: https://github.com/home-assistant/addons/issues
[reddit]: https://reddit.com/r/homeassistant
[repository]: https://github.com/hassio-addons/repository