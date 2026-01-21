# SenseVoice STT - 多语言离线语音转文本服务

基于 **SenseVoice** 模型，支持中文、英文、日语、韩语、粤语，集成情感识别和事件检测功能。

## ✨ 特性

- 🌐 **多语言支持**: 中文（普通话）、英文、日语、韩语、粤语
- 🤖 **自动语言识别**: 无需指定语言，SenseVoice 自动识别输入语言
- 🎭 **情感识别**: 自动检测语音中的情感信息
- 🔔 **事件检测**: 识别笑声、掌声等音频事件
- 🚀 **高性能**: 使用 int8 量化模型，快速推理（~1-1.5秒）
- 🏠 **完全离线**: 无需联网，保护隐私
- 🔌 **Wyoming 协议**: 与 Home Assistant 无缝集成，流式音频传输

## 使用方式

### Wyoming 协议（推荐）⭐

本插件支持 Wyoming 协议，可在 Home Assistant 中使用：

#### 自动发现（推荐）✅

插件启动后会通过 mDNS 广播服务，Home Assistant 可能会自动发现。

#### 手动添加

1. 启动本插件，等待 30 秒确保服务完全启动
2. 在 Home Assistant 中进入"设置" -> "设备与服务"
3. 点击右下角的"**+ 添加集成**"按钮
4. 搜索并选择"**Wyoming Protocol**"
5. 输入连接信息：
   - **主机**：`127.0.0.1`
   - **端口**：`10300`
6. 点击"提交"完成配置
7. 在"设置" -> "语音助手"中选择"SenseVoice-STT"作为 STT 引擎



**Wyoming 协议端口：** `10300`

## 技术信息

### 模型信息

- **ASR 模型**: SenseVoice Small (int8 量化)
- **支持语言**: zh (中文) / en (英文) / ja (日语) / ko (韩语) / yue (粤语) - **自动识别**
- **特殊功能**: 情感识别、事件检测、逆文本归一化 (ITN)、自动语言识别
- **模型来源**:
  - SenseVoice: [ModelScope - sherpa-onnx-sense-voice-small](https://modelscope.cn/models/xiaowangge/sherpa-onnx-sense-voice-small)
  - 原始项目: [FunAudioLLM/SenseVoice](https://github.com/FunAudioLLM/SenseVoice)

### 端口配置

- **Wyoming 协议**: `10300` (Home Assistant 连接)

### 架构图

```
┌─────────────┐
│ User Speaking│  用户说话
│ (continuous) │
└──────┬──────┘
       │ Audio Chunks (流式传输)
       ▼
┌──────────────────┐
│  Wyoming Handler │  Wyoming 协议处理
│  + SenseVoice    │  完整音频识别
│  (Python)        │
└──────┬───────────┘
       │ Recognition Result
       ▼
┌──────────────────┐
│  Home Assistant  │  显示识别结果
│  Voice Assistant │
└──────────────────┘
```

## 故障排除

常见问题：

- **自动发现不工作** → 使用手动添加方式
- **识别结果为空** → 检查音频格式（需要 16kHz PCM）
- **首次启动慢** → 正常现象，需要从 ModelScope 下载约 228MB 的模型文件（SenseVoice int8 量化版）
- **每次识别都慢** → 确认使用 v1.1.2+，之前版本存在模型重复加载问题
- **国内下载慢** → 已配置使用 ModelScope 镜像，绕过 GitHub 限制



## 开发信息

### 依赖

- Python 3.11+
- wyoming >= 1.7.2
- websockets >= 13.0
- numpy >= 1.24.0
- zeroconf >= 0.132.0
- **sherpa-onnx >= 1.10.43**

### 性能指标

- **延迟**: ~1.0-1.5s（包括识别和网络传输）
- **首次识别**: ~3.5-5s（包含模型加载时间，仅首次）
- **后续识别**: ~1.0-1.5s（模型已加载，直接识别）
- **准确率**: SenseVoice 原始精度
- **内存占用**: 约 300-400MB（ASR 模型）
- **CPU 使用**: 中等（识别时占用）
- **模型加载**: 懒加载机制，首次请求时才加载（v1.1.2+）

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！

## 参考资源

- [SenseVoice GitHub](https://github.com/FunAudioLLM/SenseVoice)
- [Sherpa-ONNX Documentation](https://k2-fsa.github.io/sherpa/onnx/index.html)
- [Wyoming Protocol](https://github.com/rhasspy/wyoming)
