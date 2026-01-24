# AI Hub TTS - Home Assistant Add-on

基于 Kokoro 多语言模型的离线语音合成服务，支持中英文语音合成，兼容 Wyoming 协议。

## 特性

- 🌐 **多语言支持**：中文（普通话）和英文
- 🔊 **离线运行**：无需网络连接，保护隐私
- 🚀 **高性能**：基于 ONNX 推理，低延迟
- 🎭 **26 种音色**：包含多种男女声和不同风格
- 📡 **Wyoming 协议**：完美兼容 Home Assistant Wyoming 集成

## 安装

1. 在 Home Assistant 中添加此 Add-on 仓库
2. 在 Add-on Store 中搜索 "AI Hub TTS"
3. 点击安装
4. 启动 Add-on

## 配置

### 基本配置

| 选项 | 说明 | 可选值 | 默认值 |
|------|------|--------|--------|
| voice | 默认音色 | 见下方音色列表 | af_heart |
| sample_rate | 采样率 | 24000 | 24000 |

### 音色列表

#### 中文音色推荐

| 音色名称 | 性别 | 风格 | 适用场景 |
|----------|------|------|----------|
| **im_siyu** | 男 | 温和沉稳 | 日常对话、新闻播报 |
| **jf_xiaoxiao** | 女 | 活泼可爱 | 智能助手、儿童内容 |
| **jf_xiaobei** | 女 | 温柔甜美 | 情感朗读、故事讲述 |
| **jf_yunjian** | 女 | 清亮自然 | 一般语音播报 |
| **jf_nezumi** | 女 | 轻柔细腻 | 通知提醒 |
| **jf_takeru** | 男 | 稳重有力 | 正式通知、系统播报 |

#### 英文音色

| 音色名称 | 性别 | 风格 | 适用场景 |
|----------|------|------|----------|
| af_heart | 女 | 温暖亲切 | 日常对话 |
| af_bella | 女 | 优雅知性 | 新闻播报 |
| am_michael | 男 | 成熟稳重 | 正式场合 |
| am_adam | 男 | 自然流畅 | 日常对话 |
| bf_emma | 女 | 活泼开朗 | 儿童内容 |
| bf_george | 男 | 温和友善 | 智能助手 |
| bm_george | 男 | 沉稳有力 | 新闻播报 |
| bm_lewis | 男 | 清晰有力 | 通知提醒 |
| ef_dora | 女 | 轻柔温暖 | 情感朗读 |
| em_alex | 男 | 稳重可靠 | 系统播报 |
| ff_nicole | 女 | 清亮自然 | 一般语音播报 |
| ff_siwu | 女 | 柔和细腻 | 通知提醒 |
| fm_dora | 女 | 温柔甜美 | 故事讲述 |
| fm_sarah | 女 | 活泼可爱 | 智能助手 |
| hf_alpha | 男 | 稳重有力 | 正式通知 |
| hf_beta | 男 | 自然流畅 | 日常对话 |
| hm_omega | 男 | 成熟稳重 | 新闻播报 |
| hm_psi | 男 | 清晰有力 | 系统播报 |
| if_nicole | 女 | 温暖亲切 | 智能助手 |
| jm_kumo | 男 | 沉稳可靠 | 正式场合 |

### 音色命名规则

- **a** = Adult (成人)
- **b** = Big (大龄)
- **e** = Elder (长者)
- **f** = Female (女性)
- **m** = Male (男性)
- **i** = Intermediate (中间年龄)
- **h** = High (高龄)
- **j** = Japanese (日语风格，部分支持中文)

## 使用方法

### 在 Home Assistant 中使用

1. 安装 Wyoming 集成
2. 配置 Wyoming 服务指向此 Add-on（端口 10301）
3. 在自动化或脚本中使用 TTS 服务

### 示例配置

```yaml
automation:
  - alias: "欢迎回家"
    trigger:
      - platform: state
        entity_id: person.you
        to: "home"
    action:
      - service: tts.wyoming_say
        data:
          message: "欢迎回家"
          voice: jf_xiaoxiao
```

## 技术规格

- **模型**：Kokoro Multi-Lang v1.1
- **采样率**：24000 Hz
- **音频格式**：16-bit PCM
- **通道数**：单声道
- **推理引擎**：Sherpa-ONNX
- **支持架构**：amd64, aarch64

## 故障排查

### 没有声音

1. 检查 Add-on 日志，确认模型已成功加载
2. 确认 Wyoming 集成已正确连接
3. 尝试使用不同的音色
4. 检查 Home Assistant 的音量设置

### 音色切换无效

1. 确认在 TTS 服务调用时指定了正确的 `voice` 参数
2. 检查 Add-on 日志中的 voice 映射信息
3. 确认使用的音色名称在支持的列表中

### 中文发音问题

1. 确保使用支持中文的音色（推荐使用 jf_xiaoxiao、jf_xiaobei、im_siyu 等）
2. 检查文本编码是否正确（UTF-8）
3. 查看日志中的语言检测结果

## 开源协议

本项目基于以下开源项目：

- [Kokoro](https://github.com/remsky/Kokoro-FastAPI) - Apache 2.0
- [Sherpa-ONNX](https://github.com/k2-fsa/sherpa-onnx) - Apache 2.0
- [Wyoming Protocol](https://github.com/rhasspy/wyoming) - Apache 2.0

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