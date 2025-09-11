# Home Assistant 插件：openWakeWord

## 安装

按照以下步骤在您的系统上安装插件：

1. 在您的 Home Assistant 前端中导航至 **设置** -> **插件** -> **插件商店**。
2. 找到 "openWakeWord" 插件并点击它。
3. 点击 "安装" 按钮。

## 如何使用

安装并运行此插件后，它将被 Home Assistant 中的 Wyoming 集成自动发现。要完成设置，请点击以下我的按钮：

[![打开您的 Home Assistant 实例并开始设置新的集成。](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=wyoming)

另外，您也可以手动安装 Wyoming 集成，请参见 [Wyoming 集成文档](https://www.home-assistant.io/integrations/wyoming/) 获取更多信息。

## 配置

### 选项：`threshold`

激活阈值（0-1），越高表示激活次数越少。请查看触发级别以了解激活与唤醒词检测之间的关系。

### 选项：`trigger_level`

在注册检测之前的激活次数。更高的触发级别意味着更少的检测。

### 选项：`debug_logging`

启用调试日志记录。对于查看卫星连接和每次唤醒词检测的日志非常有用。

## 自定义唤醒词模型

插件将自动从 `/share/openwakeword` 目录加载自定义唤醒词模型。[安装 Samba 插件](https://www.home-assistant.io/common-tasks/supervised/#installing-and-using-the-samba-add-on) 以将唤醒词模型文件（`*.tflite`）复制到此目录。

在将新模型添加到 `/share/openwakeword` 后，请确保重新加载任何用于 openWakeWord 的 Wyoming 集成。重新加载后，新的唤醒词将可以在语音助手设置页面中选择。

## 支持

有问题吗？

您有几种选择可以得到答案：

- [Home Assistant Discord 聊天服务器][discord]。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子论坛][reddit] 在 [/r/homeassistant][reddit]。

如果您发现了一个错误，请 [在我们的 GitHub 上开一个问题][issue]。

[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[issue]: https://github.com/home-assistant/addons/issues
[reddit]: https://reddit.com/r/homeassistant
[repository]: https://github.com/hassio-addons/repository