# 助手麦克风

使用 [Assist](https://www.home-assistant.io/voice_control/) 语音助手与 USB 麦克风。例如，一个 USB 网络摄像头。

## 使用方法

在此插件安装并运行后，它将被 Home Assistant 中的 Wyoming 集成自动发现。要完成设置，请点击以下我的按钮：

[![打开您的 Home Assistant 实例并开始设置新集成。](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=wyoming)

另外，您也可以手动安装 Wyoming 集成，详见 [Wyoming 集成文档](https://www.home-assistant.io/integrations/wyoming/) 获取更多信息。

## 配置

### 选项: `awake_wav`

触发检测到唤醒词时播放的 WAV 文件路径（为空以禁用，默认是 `/usr/src/sounds/awake.wav`）。

### 选项: `done_wav`

语音命令完成时播放的 WAV 文件路径（为空以禁用，默认是 `/usr/src/sounds/done.wav`）。

### 选项: `timer_finished_wav`

定时器完成时播放的 WAV 文件路径（为空以禁用，默认是 `/usr/src/sounds/timer_finished.wav`）。

### 选项: `timer_repeat_count`

重复播放 `timer_finished_wav` 的次数（默认是 3）。

### 选项: `timer_repeat_delay`

重复播放 `timer_finished_wav` 前的延迟，单位为秒（默认是 0.75）。

### 选项: `noise_suppression`

噪声抑制级别（0 为禁用，4 为最高）。默认禁用。

### 选项: `auto_gain`

自动增益麦克风音量（0 为禁用，31 dbfs 为最高）。默认禁用。

### 选项: `mic_volume_multiplier`

将麦克风音量乘以固定值（1.0 = 无变化，2.0 = 两倍音量）。默认是 1.0。

### 选项: `sound_enabled`

启用或禁用输出音频。

### 选项: `sound_volume_multiplier`

将声音输出音量乘以固定值（1.0 = 无变化，2.0 = 两倍音量）。默认是 1.0。

### 选项: `debug_logging`

启用调试日志记录。

## 支持

有问题？

您有几种选择来获得答案：

- [Home Assistant Discord 聊天服务器][discord]。
- Home Assistant [社区论坛][forum]。
- 加入 [/r/homeassistant][reddit] 的 [Reddit 子版块][reddit]。

如果您发现了漏洞，请 [在我们的 GitHub 上打开问题][issue]。

[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[issue]: https://github.com/home-assistant/addons/issues
[reddit]: https://reddit.com/r/homeassistant
[repository]: https://github.com/hassio-addons/repository