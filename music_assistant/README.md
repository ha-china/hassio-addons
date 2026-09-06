# 音乐助手应用程序

这是 Home Assistant 官方的音乐助手应用程序。

## 关于音乐助手

音乐助手是一个免费开源的音乐库管理器，它可以连接你的流媒体服务以及广泛的连接式扬声器。将你的 Home Assistant 实例变成你自己的个人音乐流媒体中心！

## 功能属性

- 🎵 **多源音乐库**：连接 Spotify、YouTube Music、Qobuz、Tidal 等
- 🔊 **通用播放器支持**：支持 Sonos、Chromecast、AirPlay、DLNA、Squeezebox 及更多设备
- 🎶 **统一音乐库**：在一个地方管理来自不同来源的所有音乐
- 🎯 **智能播放**：无缝播放、交叉淡入淡出和音频归一化
- 📱 **精美界面**：可通过 Home Assistant 访问的现代网页界面
- 🏠 **Home Assistant 集成**：完整集成 Home Assistant 的媒体播放器平台

## 安装

1. 在 Home Assistant 中导航至 **设置** → **应用程序** → **应用商店**
2. 搜索 "Music Assistant"
3. 点击 **安装**
4. 等待安装完成
5. 点击 **启动**
6. 打开 **Web UI** 来设置音乐助手

## 配置

### 可用选项

```yaml
log_level: info
safe_mode: false
```

#### log_level

设置（全局）日志级别：

- `error`：仅显示错误
- `warning`：显示警告和错误
- `info`：常规日志记录（推荐）
- `debug`：详细的日志记录，用于故障排除

**默认值**: `info`

**建议**：仅考虑在故障排除任何问题时使用 `debug` 级别。
最好将全局设置仅保留为 `info`。

提示：在音乐助手内部，每个提供者允许你覆盖日志级别。

#### safe_mode

当启用时，音乐助手启动时不会加载任何提供者。这对于故障排除启动问题或提供者相关的问题非常有用。

**默认值**: `false`

## 开始使用

1. 启动应用程序后，点击 **打开 Web UI**
2. 跟随向导设置你的第一个音乐提供者
3. 连接你的扬声器/播放器
4. 开始享受音乐！

### 可选：Home Assistant 集成

对于高级自动化和控制，你可以在 Home Assistant 中可选地安装 **音乐助手集成**。此集成允许你：

- 🤖 **从 Home Assistant 自动化和脚本中自动化音乐播放**
- 🎛️ **使用 Home Assistant 服务控制播放**
- 📊 **访问仪表板中的播放器状态和功能**
- 🎵 **在 Home Assistant 场景和例程中使用音乐助手**

**安装集成：**

一旦你安装了应用程序（或在你的网络中安装了任何音乐助手服务器），Home Assistant 应该会自动检测音乐助手服务器。在设备与服务页面上，你应该会看到一个发现服务器的卡片，只需设置集成即可。

**注意**：应用程序提供音乐助手服务器，而集成提供 Home Assistant 实体和自动化功能。如果你只想使用网页界面，无需该集成应用程序就能完美运行。

## 文档

有关详细信息，请访问：

- 📖 [官方文档](https://music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [支持与问题跟踪器](https://github.com/music-assistant/support)
- 💭 [Discord 服务器](https://discord.gg/PZQ6RWbfeS)

## 支持

如果遇到任何问题：

1. 检查应用程序日志（在 Home Assistant 应用程序页面中可用）
2. 访问 [文档](https://music-assistant.io)
3. 在 [music-assistant/support](https://github.com/music-assistant/support) 上搜索现有问题
4. 在 [Discord](https://discord.gg/PZQ6RWbfeS) 或 [GitHub 讨论](https://github.com/orgs/music-assistant/discussions) 上寻求帮助

## 更新

这是 **稳定版** 频道。更新经过充分测试后再发布，推荐用于日常使用。

### 更新频率

- 主要发布：每隔几个月（大约每季度一次）
- 错误修复：根据需要
- 安全更新：立即更新

## 版本信息

此应用程序使用音乐助手的稳定版发布。如需最新功能，请考虑使用 BETA 或 NIGHTLY 版本（自行使用）。

## 数据存储

所有音乐助手数据均存储在应用程序的数据目录内：

- 音乐库数据库
- 配置设置

因此，在 Home Assistant 中对音乐助手应用程序进行备份也将包括你的音乐助手数据。请确保在更新到新版本之前始终进行备份，以便你可以随时轻松恢复到之前的版本！

## 性能提示

- 使用快速存储介质（推荐 SSD）
- 确保足够的 RAM（Home Assistant + 此应用程序至少 4GB）
- 保持音乐助手实例更新

## 贡献

音乐助手是开源的！欢迎贡献：

- 🐛 [报告错误](https://github.com/music-assistant/support)
- 💡 [建议功能](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 改进文档

访问 GitHub 上的 [音乐助手组织](https://github.com/music-assistant) 进行贡献。

## 许可证

音乐助手采用 Apache License 2.0 授权。

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
