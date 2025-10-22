# 一个本地化的语音转文本（STT）服务，专为中文用户设计，这是二进制版。

该服务基于k2fsa-stt构建，文件挺大，需要耐心等待，第一次运行还需要下载离线库。

## 使用方式

### 方式一：Wyoming 协议（推荐）⭐

本插件现已支持 Wyoming 协议，可在 Home Assistant 中使用：

#### 手动添加（推荐）✅

**最稳定的方式，建议使用：**

1. 启动本插件，等待 30 秒确保服务完全启动
2. 在 Home Assistant 中进入"设置" -> "设备与服务"
3. 点击右下角的"**+ 添加集成**"按钮
4. 搜索并选择"**Wyoming Protocol**"
5. 输入连接信息：
   - **主机**：`127.0.0.1`
   - **端口**：`10300`
6. 点击"提交"完成配置
7. 在"设置" -> "语音助手"中选择"Local-STT"作为 STT 引擎

#### 自动发现 （后续计划）

插件启动后会通过 mDNS 广播服务，Home Assistant 可能会自动发现。如果看到"K2FSA Sherpa-ONNX"出现在"已发现"列表中，点击配置即可。

**注意**：自动发现可能需要几分钟，如果长时间未发现，请使用上面的手动添加方式。

**Wyoming 协议端口：** `10300`


## 故障排除
。

常见问题：
- 自动发现不工作 → 使用手动添加
- 识别结果为空 → 检查音频格式和模型加载
- 端口冲突 → 检查 6006 和 10300 端口

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！