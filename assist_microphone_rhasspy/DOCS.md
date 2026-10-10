# 辅助麦克风

使用 [Assist](https://www.home-assistant.io/voice_control/) 语音助手和 USB 麦克风。例如，一个 USB 网络摄像头。

与 [openWakeWord 插件](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_openwakeword) 一起使用。

## 安装插件

选择以下我的按钮：

[![Show add-on](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=47701997_assist_microphone&repository_url=https%3A%2F%2Fgithub.com%2Frhasspy%2Fhassio-addons)

或者按照以下步骤手动安装插件：

1. 在您的 Home Assistant 前端中导航到 **设置** > **插件** > **插件商店**。
2. 添加商店 https://github.com/rhasspy/hassio-addons。
3. 找到 **Assist Microphone** 插件并选择它。
4. 选择 **安装** 按钮。

## 运行插件

在运行插件之前，您必须使用 Home Assistant 的长效访问令牌对其进行配置。

### 创建令牌

1. 转到您的 Home Assistant 个人资料页面。
2. 向下滚动到 **长效访问令牌**。
3. 选择 **创建令牌**。
4. 为令牌提供一个名称，然后选择 **确定**。
5. 使用 **复制按钮** 复制令牌。
6. 将令牌粘贴到此插件的配置页面中。
7. 选择 **保存**。

### 运行插件

1. 将 USB 麦克风连接到您的 Home Assistant 服务器。
2. 重启 Home Assistant。
3. 启动 **Assist Microphone** 插件。

## 配置

### 选项：`token`

与 Home Assistant websocket API 进行通信的长效访问令牌。

这是必要的，因为 Supervisor 当前不代理二进制 websocket 消息。在未来版本的 Home Assistant OS 中，这将不再是必需的。

### 选项：`vad`

要使用的语音活动检测器。webrtcvad 的 CPU 占用较低，但 silero 更好。

### 选项：`noise_suppression`

噪声抑制级别（0 为禁用，4 为最大）。默认使用值为 2。

### 选项：`auto_gain`

麦克风的自动增益（0 为禁用，31 dbfs 为最大）。默认使用值为 15。

### 选项：`volume_multiplier`

将麦克风音量乘以固定值（1.0 = 无变化，2.0 = 声音加倍）。默认值为 1.0。

### 选项：`pipeline`

要运行的管道名称。默认运行推荐的管道。

### 选项：`wake_buffer_seconds`

在检测到唤醒词后，保留的音频秒数。如果您禁用 `awake_sound`，建议将此值设置为 0.2。这样您可以在说出唤醒词后立即说出语音命令。

### 选项：`udp_mic`

如果音频将通过 UDP 在端口 5000 上发送，则为真（原始 16 位 16Khz 单声道 PCM）。

### 选项：`volume`

播放音量范围从 0（静音）到 1（最大）。

### 选项：`awake_sound`

检测到唤醒词时播放的 WAV 文件路径（为空则禁用）。

### 选项：`done_sound`

语音命令完成时播放的 WAV 文件路径（为空则禁用）。

### 选项：`host`

Home Assistant 服务器的名称或 IP 地址（默认：`homeassistant`）

### 选项：`debug_logging`

启用调试日志记录。

### 选项：`debug_recording_dir`

用于调试目的保存音频的目录。应在 /share 中。

## 支持

有问题吗？

您有几种选择可以获得答案：

- [Home Assistant Discord聊天室][discord]。
- Home Assistant [社区论坛][forum]。
- 加入 [/r/homeassistant][reddit] 的 [Reddit 子版块][reddit]。

如果您发现了一个bug，请 [在我们的 GitHub 上打开问题][issue]。

[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[issue]: https://github.com/home-assistant/addons/issues
[reddit]: https://reddit.com/r/homeassistant
[repository]: https://github.com/rhasspy/hassio-addons