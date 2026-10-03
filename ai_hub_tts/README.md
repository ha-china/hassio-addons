# AI Hub TTS - Home Assistant Add-on

基于 MeloTTS-ONNX（纯 ONNX 运行时）的离线语音合成服务，兼容 Wyoming 协议，并保留流式音频返回。

## 特性

- 中文离线 TTS，支持中英混读
- 首次启动自动下载 `seasonstudio/melotts_zh_mix_en_onnx` 的必要文件
- 兼容 Home Assistant Wyoming 集成
- 保留流式分段返回，减少首包等待时间

## 配置

| 选项 | 说明 | 默认值 |
|------|------|--------|
| voice | 默认音色 | ZH_MIX_EN |
| sample_rate | 采样率 | 44100 |
| speed | 语速 | 1.0 |
| no_bert | 轻量模式（不下载 bert_lml_model.onnx） | true |

## 使用

1. 在 Home Assistant 中安装并启动 Add-on。
2. 默认开启轻量模式（`no_bert=true`），首次运行仅下载 `configuration.json`、`tokenizer.json`、`tts_model.onnx`。
3. 如需完整效果，可在 Add-on 配置页关闭 `no_bert`，重启后会自动补下载 `bert_lml_model.onnx`。
4. 后续运行不再需要外网（除非你手动清空模型目录）。
5. 在 Wyoming 集成中添加该服务后即可调用。

## 技术规格

- 模型：`seasonstudio/melotts_zh_mix_en_onnx`
- 下载文件：`configuration.json`、`tokenizer.json`、`tts_model.onnx`、`bert_lml_model.onnx`
- 采样率：44100 Hz
- 音频格式：16-bit PCM
- 通道数：单声道
- 协议：Wyoming

## 故障排查

1. 首次启动较慢通常是模型下载或 ONNX 运行时初始化。
2. 如果没有声音，先查看 Add-on 日志是否完成模型下载和加载。
3. 如果 Home Assistant 没发现服务，检查 10301 端口和 mDNS 广播。

## 开源项目

- [MeloTTS-ONNX](https://github.com/season-studio/MeloTTS-ONNX)
- [ModelScope melotts_zh_mix_en_onnx](https://www.modelscope.cn/models/seasonstudio/melotts_zh_mix_en_onnx)
- [Wyoming Protocol](https://github.com/rhasspy/wyoming)

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！