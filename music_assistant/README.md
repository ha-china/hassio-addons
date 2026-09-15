# Music Assistant App

Home Assistant 的官方音乐助手应用。

## 关于 Music Assistant

Music Assistant 是一个免费的开源音乐库管理器，可连接您的流媒体服务及广泛的连接扬声器。将您的 Home Assistant 实例变成了您自己的个人音乐流媒体中心！

## 功能特性

- 🎵 **多源音乐库**：连接 Spotify、YouTube Music、Qobuz、Tidal 等
- 🔊 **通用播放器支持**：适用于 Sonos、Chromecast、AirPlay、DLNA、Squeezebox 及更多设备
- 🎶 **统一音乐库**：所有来源的音乐在一个地方统一管理
- 🎯 **智能播放**：无缝播放、交叉淡入淡出和音频归一化
- 📱 **精美界面**：现代 Web 界面，可通过 Home Assistant 访问
- 🏠 **Home Assistant 集成**：与 Home Assistant 媒体播放器平台完全集成

## 安装步骤

1. 在 Home Assistant 中进入 **设置** → **应用** → **应用商店**
2. 搜索 "Music Assistant"
3. 点击 **安装**
4. 等待安装完成
5. 点击 **启动**
6. 打开 **Web UI** 配置 Music Assistant

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
- `info`：正常日志记录（推荐）
- `debug`：详细的日志记录以排查问题

**默认**：`info`

**建议**：仅在排查问题时考虑使用 `debug` 级别。
最好将全局设置仅设置为 `info`。

提示：在 Music Assistant 中，每个提供商允许您覆盖日志级别。

#### safe_mode

启用后，Music Assistant 将在不加载任何提供商的情况下启动。这有助于排查启动问题或提供商相关的问题。

**默认**：`false`

## 开始使用

1. 启动应用后，点击 **打开 Web UI**
2. 遵循向导设置您的第一个音乐提供商
3. 连接您的扬声器/播放器
4. 享受您的音乐！

### 可选：Home Assistant 集成

如需高级自动化和控制功能，可酌情安装 Home Assistant 中的 **Music Assistant 集成**。该集成允许您：

- 🤖 **从 Home Assistant 自动化和脚本中自动播放音乐**
- 🎛️ **使用 Home Assistant 服务控制播放**
- 📊 **在仪表板上访问播放器状态和属性**
- 🎵 **在您的 Home Assistant 场景和常规中使用 Music Assistant**

**安装集成：**

一旦您安装了应用（或网络中的任何 Music Assistant 服务器），Home Assistant 应自动检测到 Music Assistant 服务器。在“设备与服务”页面上，您应该会看到一个卡片用于简单的集成设置。

**注意**：该应用提供 Music Assistant 服务器，而集成提供 Home Assistant 实体和自动化功能。如果您只想使用 Web 界面，也可以在不集成集成正常工作的情况下使用应用。

## 文档

有关详细文档，请访问：

- 📖 [官方文档](https://music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [支持与问题跟踪器](https://github.com/music-assistant/support)
- 💭 [Discord 服务器](https://discord.gg/PZQ6RWbfeS)

## 支持

如果您遇到任何问题：

1. 检查应用日志（可在 Home Assistant App 页面中访问）
2. 访问 [文档](https://music-assistant.io)
3. 在 [music-assistant/support](https://github.com/music-assistant/support) 上搜索现有问题
4. 在 [Discord](https://discord.gg/PZQ6RWbfeS) 或 [GitHub 讨论](https://github.com/orgs/music-assistant/discussions) 上寻求帮助

## 更新

此为 **稳定** 频道。经过充分测试后发布更新，适用于日常使用。

### 更新频率

- 主要发行版：每几个月一次（大约每季度一次）
- 错误修复：按需进行
- 安全更新：立即进行

## 版本信息

此应用使用 Music Assistant 的稳定版。如需最新功能，请考虑使用 BETA 或 NIGHTLY 版本（风险自担）。

## 数据存储

所有 Music Assistant 数据均存储在应用的数据目录中：

- 音乐库数据库
- 配置设置

因此，在 Home Assistant 中对 Music Assistant 应用进行备份也将包括您的 Music Assistant 数据。请确保在升级到新版本之前始终进行备份，以便随时轻松恢复到之前的版本！

## 性能提示

- 使用快速的存储介质（推荐 SSD）
- 确保有足够的内存（Home Assistant + 本应用至少 4GB）
- 保持您的 Music Assistant 实例更新

## 贡献

Music Assistant 是开源的！欢迎贡献：

- 🐛 [报告错误](https://github.com/music-assistant/support)
- 💡 [提出功能建议](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 改进文档

请访问 GitHub 上的 [Music Assistant 组织](https://github.com/music-assistant) 做出贡献。

## 许可证

Music Assistant 采用 Apache License 2.0 授权。

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
