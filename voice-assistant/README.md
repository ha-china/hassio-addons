# 🧪 实验性 Linux 语音助手（适用于 Home Assistant，ESPHome 协议）

这是一个可以把 Home Assistant 主机变成语音助手的加载项。
当前加载项固定集成上游 `OHF-Voice/linux-voice-assistant` 的 `v1.1.14` 官方镜像，并基于 ESPHome 协议与 Home Assistant 进行通信。

## 🖥️ 支持平台

- Linux aarch64 和 x86_64
- 需要有单独的音箱麦克风接到物理机上（虚拟机的话需要配置音频）
- 麦克风建议支持 `16kHz mono`，否则语音识别效果可能明显变差

## ✨ 功能特性

- 📢 支持语音播报（公告）
- 💬 支持开始/继续对话
- ⏲️ 支持定时器

## 🚀 快速开始

1. 在 Home Assistant 中安装并启动本加载项。
2. 启动时会自动**列出所有可用的音频输入/输出设备**（见加载项日志），方便你确认设备名称。
3. 连接音频输入/输出设备；默认会自动探测，也可以在加载项选项中手动填写设备名称。
4. 配置语音助手，通过 ESPHome 协议连接到你的 Home Assistant 实例。

> **提示：** 首次启动时加载项日志会先打印所有检测到的输入/输出设备列表（如 `alsa_output.pci-...`、`alsa_input.pci-...`），随后等待 20 秒再启动应用。你可以根据该列表，把对应的设备名称填写到 `audio-input-device` / `audio-output-device` 选项中，避免自动探测选错设备。

## 🛠️ 能力说明

- 可与 Home Assistant 配合，实现语音控制与自动化。
- 支持基础语音助手功能，如语音播报、对话交互、定时提醒等。
- 上游当前测试通过的 Python 版本为 `3.11` 和 `3.12`。
- 当前 addon 采用对上游官方镜像的薄包装，减少自建环境带来的兼容性问题。

## ⚙️ 当前加载项配置项

| 选项 | 说明 |
|------|------|
| `name` | 语音助手在 Home Assistant 中显示的设备名称；留空时由上游自动生成 |
| `audio-input-device` | 输入设备名称；留空时由上游自动探测 |
| `audio-output-device` | 输出设备名称；留空时由上游自动探测 |
| `mic-volume` | 麦克风音量，范围 `0-100` |
| `audio-input-channels` | 麦克风输入声道数，可选 `1` 或 `2` |
| `continue-conversation-delay` | 继续对话前的监听延迟，单位秒 |
| `timer-max-ring-seconds` | 定时器最长响铃秒数 |
| `mic-auto-gain` | 是否启用麦克风自动增益 |
| `mic-noise-suppression` | 是否启用麦克风噪声抑制 |
| `enable-thinking-sound` | 是否启用思考提示音 |
| `enable-output-only` | 是否启用仅输出模式 |
| `wake-model` | 唤醒词模型 ID，例如 `okay_nabu`、`hey_jarvis` |
| `stop-model` | 停止词模型 ID，默认常见值为 `stop` |
| `network-interface` | 指定用于 ESPHome 服务的网卡名，例如 `eth0` |
| `host` | 指定监听 IP；留空时由上游自动处理 |
| `port` | 指定监听端口，默认 `6053` |
| `debug` | 是否开启调试日志 |

如果需要查看更多上游运行参数，例如唤醒词、噪声抑制、自动增益等，可以后续继续扩展加载项配置。

> **注意：** 本项目为实验性，实际使用中可能需要根据音频硬件、驱动和宿主机环境进行额外配置或调试。


## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
