# MediaPipe 手势识别 Home Assistant 插件

🤚 快速安装、即开即用的手势识别插件，使用预编译 Docker 镜像，安装时间 < 1 分钟。

**v2.1.3**：支持 8 种手势识别（7 种 Google 内置 95%+ 准确率 + 1 种自定义 ~85% 准确率）

---

## ⚡ 快速安装（< 1 分钟）

### 步骤 1：添加插件仓库

```
Home Assistant → 设置 → 加载项 → 插件商店 → ⋮ → 仓库
```

添加仓库地址：
```
https://github.com/yanfeng17/shoushi-ha-addon
```

### 步骤 2：安装插件

1. 在插件商店搜索 **"MediaPipe 手势识别"**
2. 点击 **安装**
3. 等待约 **1 分钟**（使用预编译镜像，无需编译）✨

### 步骤 3：配置

```yaml
rtsp_url: "rtsp://用户名:密码@摄像头IP:554/stream1"
mqtt_broker: "core-mosquitto"
mqtt_port: 1883
```

**说明**：
- 替换 `用户名`、`密码`、`摄像头IP` 为你的实际配置
- `core-mosquitto` 是 Home Assistant 内置的 MQTT broker

### 步骤 4：启动

1. 点击 **"启动"** 按钮
2. 查看 **"日志"** 确认运行正常
3. 应该看到：`Gesture Engine initialized successfully`

---

## 🖐️ 支持的手势（8 种）

| 手势 | Emoji | 说明 | 用途示例 |
|------|-------|------|---------|
| **张开手掌** | 🖐️ | 五指全部伸直 | 开灯、播放音乐 |
| **握拳** | ✊ | 五指全部收起 | 关灯、暂停播放 |
| **食指向上** | ☝️ | 只有食指伸直 | 音量增加、下一首 |
| **点赞** | 👍 | 拇指向上 | 确认、同意 |
| **点踩** | 👎 | 拇指向下 | 拒绝、减少 |
| **剪刀手** | ✌️ | 食指和中指伸出 | 切换场景 |
| **我爱你** | 🤟 | 拇指+食指+小指 | 特殊指令 |
| **OK 手势** | 👌 | 拇指食指接触成圈 | 确认完成 |

---

## 📱 支持的设备

- ✅ **PC / Intel NUC**（x86_64 / amd64）
- ✅ **树莓派 4 / 5**（ARM64 / aarch64）
- ✅ **ARM 服务器**（aarch64）

---

## 🏠 Home Assistant 自动化示例

### 示例 1：张手开灯

```yaml
automation:
  - alias: "张手开灯"
    trigger:
      platform: state
      entity_id: sensor.gesture_control
      to: "OPEN_PALM"
    action:
      service: light.turn_on
      target:
        entity_id: light.living_room
```

### 示例 2：握拳关灯

```yaml
automation:
  - alias: "握拳关灯"
    trigger:
      platform: state
      entity_id: sensor.gesture_control
      to: "CLOSED_FIST"
    action:
      service: light.turn_off
      target:
        entity_id: light.living_room
```

### 示例 3：点赞增加音量

```yaml
automation:
  - alias: "点赞增加音量"
    trigger:
      platform: state
      entity_id: sensor.gesture_control
      to: "THUMBS_UP"
    action:
      service: media_player.volume_up
      target:
        entity_id: media_player.living_room
```

### 示例 4：剪刀手切换场景

```yaml
automation:
  - alias: "剪刀手切换场景"
    trigger:
      platform: state
      entity_id: sensor.gesture_control
      to: "PEACE"
    action:
      service: scene.turn_on
      target:
        entity_id: scene.movie_mode
```

---

## ⚙️ 常用配置参数

### 视频处理
- `frame_width`：处理帧宽度（默认 320，越小性能越好）
- `frame_height`：处理帧高度（默认 240）
- `target_fps`：目标帧率（默认 15）

### 手势识别
- `gesture_confidence_threshold`：置信度阈值（默认 0.5，越高误触发越少）
- `gesture_min_detections`：连续检测次数（默认 2，越高越稳定）
- `gesture_cooldown`：冷却时间（默认 1.5 秒，防止重复触发）

### 手势开关
- `enable_open_palm`：启用/禁用张开手掌
- `enable_closed_fist`：启用/禁用握拳
- `enable_pointing_up`：启用/禁用食指向上
- `enable_thumbs_up`：启用/禁用点赞
- `enable_thumbs_down`：启用/禁用点踩
- `enable_peace`：启用/禁用剪刀手
- `enable_i_love_you`：启用/禁用我爱你
- `enable_ok_sign`：启用/禁用 OK 手势

---

## 🔧 故障排查

### RTSP 连接失败

**检查**：
- RTSP URL 格式：`rtsp://用户名:密码@IP:端口/路径`
- 使用 VLC 测试摄像头连接
- 确认网络连通性

**常见摄像头 RTSP 路径**：
- 海康威视：`/Streaming/Channels/101`
- 大华：`/cam/realmonitor?channel=1&subtype=0`
- TP-Link：`/stream1`

### MQTT 无法连接

**检查**：
- Mosquitto broker 插件是否运行
- MQTT broker IP 和端口是否正确
- 查看 Mosquitto 日志

### 手势识别不准确

**优化建议**：
- 确保良好照明
- 手部占画面 20-40%
- 避免背光（逆光）
- 降低置信度阈值：`gesture_confidence_threshold: 0.4`

### 性能问题（FPS 太低）

**优化建议**：
1. 降低分辨率：`frame_width: 256`
2. 降低帧率：`target_fps: 10`
3. 禁用不需要的手势
4. 增加跳帧：`skip_frames: 2`

---

## 📖 更多信息

- [更新日志](CHANGELOG.md)
- [GitHub Issues](https://github.com/yanfeng17/shoushi-ha-addon/issues)
- [原项目（开发版）](https://github.com/yanfeng17/shoushi-HA)

---

## 🆕 版本说明

### v2.1.3（当前版本）
- ✅ 混合识别模式：7 种 Google 内置（95%+）+ 1 种自定义（~85%）
- ✅ 新增 OK 手势识别
- ✅ 使用预编译镜像，安装速度提升 8-10 倍
- ✅ 只支持 amd64 和 aarch64 两种架构

### 为什么使用预编译镜像？
- ⚡ **安装极快**：从 8-10 分钟缩短到 < 1 分钟
- 💪 **稳定可靠**：减少本地编译失败的可能性
- 🎯 **开箱即用**：无需等待，立即使用

---

## 💬 支持与反馈

如有问题或建议：
- 提交 [Issue](https://github.com/yanfeng17/shoushi-ha-addon/issues)
- 查看 [更新日志](CHANGELOG.md)

---

## 📄 许可证

MIT License - 可自由使用和修改

---

## 🙏 致谢

- **MediaPipe**：Google 的机器学习框架，用于手部追踪和手势识别
- **OpenCV**：计算机视觉库
- **Home Assistant**：开源家庭自动化平台
---
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**
**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**
---

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
