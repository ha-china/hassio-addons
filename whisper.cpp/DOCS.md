# Home Assistant 插件：whisper.cpp

## 安装

按照以下步骤在您的系统上安装插件：

1. 在您的 Home Assistant 前端导航到 **设置** -> **插件** -> **插件商店**。
2. 添加商店 https://github.com/rhasspy/hassio-addons
3. 找到 "whisper.cpp" 插件并点击它。
4. 点击 "安装" 按钮。

## 如何使用

安装并运行该插件后，它将被 Home Assistant 中的 Wyoming 集成自动发现。要完成设置，请点击以下我的按钮：

[![打开您的 Home Assistant 实例并开始设置新的集成。](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=wyoming)

或者，您可以手动安装 Wyoming 集成，请参阅 [Wyoming 集成文档](https://www.home-assistant.io/integrations/wyoming/) 获取更多信息。

## 模型

模型会自动从 [HuggingFace](https://huggingface.co/ggerganov/whisper.cpp) 下载并放入 `/data` 中。

名称中包含 `.en` 的模型为仅限英语，而没有此后缀的模型适用于任何 [支持的语言](https://github.com/rhasspy/wyoming-whisper-cpp/blob/476b0e631392034a94196eb578b3d0a60164af53/whisper.cpp/whisper.cpp#L251)。

如果模型名称包含类似 `-q5_1` 的内容，则为原始模型的量化（压缩）版本。这些模型更小并且运行更快，但可能会损失一些质量。先尝试量化模型，仅在发生转录错误时才使用非量化模型。

## 配置

### 选项：`model`

要使用的模型名称。有关更多详细信息，请参见 [模型](#models) 部分。

### 选项：`language`

要使用的默认语言，来自 [支持的语言列表](https://github.com/rhasspy/wyoming-whisper-cpp/blob/476b0e631392034a94196eb578b3d0a60164af53/whisper.cpp/whisper.cpp#L251)。

### 选项：`beam_size`

要考虑的候选句子数量。增加此数字将使模型更准确，但速度较慢。

### 选项：`audio_context_base`

一个从 0 到 1500 的数字，决定在处理时考虑多少音频历史。增加此数字将使模型更准确，但速度较慢。如果数字太小，您可能会遇到重复的文本或模型响应 **非常** 慢。

### 选项：`debug_logging`

启用调试日志。

## 支持

有问题吗？

您有几种选择可以获得答案：

- [Home Assistant Discord 聊天服务器][discord]。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 论坛][reddit] 在 [/r/homeassistant][reddit]

如果您发现了一个bug，请 [在我们的 GitHub 上提交问题][issue]。

[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[issue]: https://github.com/rhasspy/hassio-addons/issues
[reddit]: https://reddit.com/r/homeassistant
[repository]: https://github.com/rhasspy/hassio-addons