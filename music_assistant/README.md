# Music Assistant App

为 Home Assistant 官方的音乐助手应用。

## 关于 Music Assistant

Music Assistant 是一个免费的、开源的音乐库管理程序，它可连接您的流媒体服务以及广泛的连接音箱设备。将您的 Home Assistant 实例转变为您自己的个人音乐流媒体中心！

## 功能特性

- 🎵 **多源音乐库**: 可连接 Spotify、YouTube Music、Qobuz、Tidal 等
- 🔊 **通用播放器支持**: 支持 Sonos、Chromecast、AirPlay、DLNA、Squeezebox 及更多设备
- 🎶 **统一库**: 将来自不同来源的音乐放在同一位置
- 🎯 **智能播放**: 无缝播放、过渡淡入淡出以及音频标准化
- 📱 **美观的界面**: 通过 Home Assistant 可访问的现代 Web 界面
- 🏠 **Home Assistant 集成**: 与 Home Assistant 的媒体播放器平台完全集成

## 安装步骤

1. 在 Home Assistant 中导航至 **设置** → **应用** → **应用商店**
2. 搜索 "Music Assistant"
3. 点击 **安装**
4. 等待安装完成
5. 点击 **启动**
6. 打开 **Web 界面** 以设置 Music Assistant

## 配置

### 可用选项

```yaml
log_level: info
safe_mode: false
```

#### log_level

设置（全局）日志级别：

- `error`: 仅显示错误
- `warning`: 显示警告和错误
- `info`: 标准日志记录（推荐）
- `debug`: 详细的日志记录用于故障排除

**默认值**: `info`

**建议**: 仅在故障排除问题时考虑使用 `debug` 级别。
最好将全局设置仅设置为 `info`。

提示：在 Music Assistant 中，每个提供商都允许您覆盖日志级别。

#### safe_mode

启用时，Music Assistant 将在不加载任何提供商的情况下启动。这有助于排查启动问题或提供商相关的问题。

**默认值**: `false`

## 开始使用

1. 启动应用后，点击 **打开 Web 界面**
2. 跟随初始化向导设置您的第一个音乐提供商
3. 连接您的音箱/播放器
4. 开始享受音乐！

### 可选：Home Assistant 集成

为了实现高级自动化和控制功能，您可以选择在 Home Assistant 中安装 **Music Assistant 集成**。该集成允许您：

- 🤖 从 Home Assistant 自动化和脚本中 **自动化音乐播放**
- 🎛️ 使用 Home Assistant 服务 **控制播放**
- 📊 **访问播放器状态**和在仪表板上的属性
- 🎵 在您的 Home Assistant 场景和例行任务中 **使用 Music Assistant**

**要安装集成：**

一旦您安装了应用（或网络中的任何 Music Assistant 服务器），Home Assistant 会自动检测 Music Assistant 服务器。在“设备与服务”页面，您会看到一个已探测到服务器对应的卡片，只需进行设置即可配置集成。

**注意**: 应用提供 Music Assistant 服务器，而集成提供 Home Assistant 实体和自动化功能。如果您仅想使用 Web 界面，则无需集成应用也能正常工作。

## 文档

如需详细文档，请访问：

- 📖 [官方文档](https://music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [支持与问题跟踪器](https://github.com/music-assistant/support)
- 💭 [Discord 服务器](https://discord.gg/PZQ6RWbfeS)

## 支持

如果您遇到问题：

1. 检查应用日志（可在 Home Assistant 应用页面中查看）
2. 访问 [文档](https://music-assistant.io)
3. 在 [music-assistant/support](https://github.com/music-assistant/support) 上搜索现有问题
4. 在 [Discord](https://discord.gg/PZQ6RWbfeS) 或 [GitHub 讨论](https://github.com/orgs/music-assistant/discussions) 上寻求帮助

## 更新

这是 **稳定** 通道。更新经过彻底测试后发布，适用于日常使用。

### 更新频率

- 主要版本：每几个月发布一次（大致每季度一次）
- 错误修复：按需发布
- 安全更新：立即发布

## 版本信息

此应用使用稳定的 Music Assistant 版本发布。若要获取最新功能，请考虑浏览 BETA 或 NIGHTLY 版本（使用时请自行承担风险）。

## 数据存储

所有 Music Assistant 数据显示保存在应用的数据目录中：

- 音乐库数据库
- 配置设置

因此，在 Home Assistant 中备份 Music Assistant 应用将包含您的 Music Assistant 数据。建议在更新到新版本之前始终进行备份，以便您可以随时轻松恢复到之前的版本！

## 性能提示

- 使用快速存储介质（推荐使用 SSD）
- 确保足够的内存运行（Home Assistant + 此应用至少 4GB）
- 保持您的 Music Assistant 实例更新

## 贡献

Music Assistant 是开源的！欢迎贡献：

- 🐛 [报告错误](https://github.com/music-assistant/support)
- 💡 [建议功能](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 改善文档

访问 GitHub 上的 [Music Assistant 组织](https://github.com/music-assistant) 进行贡献。

## 许可证

Music Assistant 采用 Apache License 2.0 许可证发布。

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
