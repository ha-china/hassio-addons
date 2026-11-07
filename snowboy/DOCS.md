# Home Assistant 插件：snowboy

## 安装

按照以下步骤在您的系统上安装插件：

1. 在您的 Home Assistant 前端导航到 **设置** -> **插件** -> **插件商店**。
2. 添加商店 https://github.com/rhasspy/hassio-addons
3. 找到 "snowboy" 插件并点击它。
4. 点击 "安装" 按钮。

## 如何使用

在此插件安装并运行后，它将被 Home Assistant 中的 Wyoming 集成自动发现。要完成设置，请点击以下我的按钮：

[![打开您的 Home Assistant 实例并开始设置新的集成。](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=wyoming)

或者，您可以手动安装 Wyoming 集成，查看更多信息请参见 [Wyoming 集成文档](https://www.home-assistant.io/integrations/wyoming/).

## 配置

### 选项: `sensitivity`

激活阈值（0-1），值越高表示激活次数越少。

### 选项: `debug_logging`

启用调试日志记录。这在查看卫星连接和每次唤醒词检测的日志时很有用。

## 自定义唤醒词

此插件将在启动时根据放置在 `/share/snowboy/train/<language>/<wake_word>` 的 WAV 音频样本训练自定义唤醒词。

要开始，首先记录您唤醒词的3个样本：

```sh
arecord -r 16000 -c 1 -f S16_LE -t wav -d 3 sample1.wav
arecord -r 16000 -c 1 -f S16_LE -t wav -d 3 sample2.wav
arecord -r 16000 -c 1 -f S16_LE -t wav -d 3 sample3.wav
```

理想情况下，这应在您计划使用唤醒词识别的同一设备上录制（同一麦克风等）。

在录制完3个样本后，您需要将它们复制到您的 Home Assistant 服务器。您可以使用 [Samba 插件](https://www.home-assistant.io/common-tasks/supervised/#installing-and-using-the-samba-add-on) 来完成此操作。

将 WAV 文件复制到 `/share/snowboy/train/<language>/<wake_word>`，其中 `<language>` 是 `en`（英语）或 `zh`（中文）（不支持其他语言）。`<wake_word>` 应该是您的唤醒词的名称，例如 `hey_computer`（不推荐使用空格）。

在复制样本后，您的目录结构应如下所示：

- `/share/snowboy/train/`
    - `en/`
        - `hey_computer/`
            - `sample1.wav`
            - `sample2.wav`
            - `sample3.wav`

重启插件并检查日志以确认您的唤醒词已被训练。为获取更多信息，请在插件配置中启用调试日志记录。

训练后，您的唤醒词模型（` .pmdl `）将与样本并排放置：

- `/share/snowboy/train/`
    - `en/`
        - `hey_computer/`
            - `hey_computer.pmdl`
            - `sample1.wav`
            - `sample2.wav`
            - `sample3.wav`
            
将您的唤醒词模型（例如，`hey_computer.pmdl`）复制到 `/share/snowboy` 以立即开始使用。

如果您想重新训练，请删除与样本相邻的 `.pmdl` 文件并重启插件。您需要在训练后再次将新模型复制到 `/share/snowboy`。

## 支持

有问题吗？

您有几种方法可以得到答案：

- [Home Assistant Discord 聊天服务器][discord]。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 论坛][reddit] 在 [/r/homeassistant][reddit]

如果您发现了一个错误，请 [在我们的 GitHub 上打开一个问题][issue]。

[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[issue]: https://github.com/home-assistant/addons/issues
[reddit]: https://reddit.com/r/homeassistant
[repository]: https://github.com/rhasspy/hassio-addons