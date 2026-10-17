# Music Assistant App

针对 Home Assistant 的官方 Music Assistant App。

## 关于 Music Assistant

Music Assistant 是一个免费、开源的音乐库管理器，可以连接到您的流媒体服务以及各种联网扬声器。将您的 Home Assistant 实例变为您自己的个人音乐流媒体中心！

## 功能特性

- 🎵 **多源音乐库**：连接 Spotify、YouTube Music、Qobuz、Tidal 等
- 🔊 **兼容通用播放器**：支持 Sonos、Chromecast、AirPlay、DLNA、Squeezebox 等许多设备
- 🎶 **统一库**：将所有來自不同源的音乐放在一起
- 🎯 **智能播放**：无缝播放、交叉淡入淡出和音频归一化
- 📱 **美观界面**：可通过 Home Assistant 访问的现代网页界面
- 🏠 **Home Assistant 集成**：完整集成 Home Assistant 的媒体播放器平台

## 安装

1. 在 Home Assistant 中导航至 **设置** → **应用** → **应用商店**
2. 搜索 "Music Assistant"
3. 点击 **安装**
4. 等待安装完成
5. 点击 **启动**
6. 打开 **Web 界面** 设置 Music Assistant

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
- `info`：正常日志（推荐）
- `debug`：详细的日志用于故障排除

**默认值**：`info`

**建议**：仅在解决任何问题时考虑使用 `debug` 级别。
最好保持全局设置仅为 `info`。

TIP：在 Music Assistant 内部，每个提供商都允许您覆盖日志级别。

#### safe_mode

当启用时，Music Assistant 将在不加载任何提供商的情况下启动。这有助于故障排除启动问题或提供商相关问题。

**默认值**：`false`

## 开始使用

1. 启动 App 后，点击 **打开 Web 界面**
2. 按照入门向导设置您的第一个音乐提供商
3. 连接您的扬声器/播放器
4. 开始享受音乐！

### 可选：Home Assistant 集成

为了实现高级自动化和控制，您可以选择在 Home Assistant 中安装 **Music Assistant 集成**。该集成允许您：

- 🤖 **从 Home Assistant 自动化和脚本中自动化音乐播放**
- 🎛️ **使用 Home Assistant 服务控制播放**
- 📊 **在仪表盘中访问播放器状态和属性**
- 🎵 **在您的 Home Assistant 场景和常规操作中 Music Assistant**

**安装该集成的方法：**

安装 App（或在网络中的任何 Music Assistant 服务器）后，Home Assistant 应该能自动检测到 Music Assistant 服务器。在“设备与服务”页面上，您将看到一个用于发现服务器以简单设置集成的卡片。

**注意**：App 提供 Music Assistant 服务器，而集成提供 Home Assistant 实体和自动化功能。如果您只想使用网页界面，即使没有集成，App 也能正常工作。

## 文档

有关详细文档，请访问：

- 📖 [官方文档](https://music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [支持与问题跟踪](https://github.com/music-assistant/support)
- 💭 [Discord 服务器](https://discord.gg/PZQ6RWbfeS)

## 支持

如果您遇到任何问题：

1. 检查 App 日志（可在 Home Assistant App 页面上找到）
2. 访问 [文档](https://music-assistant.io)
3. 在 [music-assistant/support](https://github.com/music-assistant/support) 搜索现有问题
4. 在 [Discord](https://discord.gg/PZQ6RWbfeS) 或 [GitHub 讨论区](https://github.com/orgs/music-assistant/discussions) 寻求帮助

## 更新

这是 **稳定** 渠道。更新会在经过彻底测试后发布，并推荐用于日常使用。

### 更新频率

- 主要发布：每几月一次（大略每季度一次）
- 错误修复：按需
- 安全更新：立即

## 版本信息

该 App 使用 Music Assistant 的稳定版本。如果您想了解最新功能，请考虑 BETA 或 NIGHTLY 版本（风险自担）。

## 数据存储

所有 Music Assistant 数据均存储在 App 的数据目录中：

- 音乐库数据库
- 配置设置

因此，在 Home Assistant 中对 Music Assistant App 进行备份也包括您的 Music Assistant 数据。请务必在更新到新版本之前始终进行备份，以便您可以随时轻松恢复到以前的版本！

## 性能提示

- 使用高速存储介质（推荐使用 SSD）
- 确保有足够的 RAM（Home Assistant + 该 App 至少需要 4GB）
- 保持您的 Music Assistant 实例更新

## 贡献

Music Assistant 是开源的！欢迎贡献：

- 🐛 [报告错误](https://github.com/music-assistant/support)
- 💡 [建议功能](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 改进文档

访问 GitHub 上的 [Music Assistant 组织](https://github.com/music-assistant) 进行贡献。

## 许可证

Music Assistant 采用 Apache License 2.0 许可。

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
