# Music Assistant 应用

Home Assistant 的官方 Music Assistant 应用。

## 关于 Music Assistant

Music Assistant 是一个免费、开源的音乐库管理器，它连接您的流媒体服务以及各种连接音音箱。将您的 Home Assistant 实例转变为您自己的个人音乐流媒体中心！

## 功能

- 🎵 **多源音乐库**: 连接 Spotify、YouTube Music、Qobuz、Tidal 等更多服务
- 🔊 **通用播放器支持**: 与 Sonos、Chromecast、AirPlay、DLNA、Squeezebox 等以及更多设备兼容
- 🎶 **统一库**: 将来自不同来源的所有音乐放在一个地方
- 🎯 **智能播放**: 无缝播放、混响和音频标准化
- 📱 **精美界面**: 可通过 Home Assistant 访问的现代网页界面
- 🏠 **Home Assistant 集成**: 与 Home Assistant 媒体播放器平台完全集成

## 安装

1. 在 Home Assistant 中导航至 **设置** → **应用** → **应用商店**
2. 搜索 "Music Assistant"
3. 点击 **安装**
4. 等待安装完成
5. 点击 **启动**
6. 打开 **Web UI** 以设置 Music Assistant

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
- `info`: 正常日志（推荐）
- `debug`: 用于故障排查的详细日志

**默认值**: `info`

**建议**: 仅在故障排查问题时考虑使用 `debug` 级别。最好将全局设置仅设为 `info`。

提示: 在 Music Assistant 中，每个提供商允许您覆盖日志级别。

#### safe_mode

启用后，Music Assistant 启动时不会加载任何提供商。这对故障排查启动问题或提供商相关问题非常有用。

**默认值**: `false`

## 开始使用

1. 启动应用后，点击 **打开 Web UI**
2. 跟随入门向导设置您的第一个音乐提供商
3. 连接您的音箱/播放器
4. 开始享受您的音乐！

### 可选：Home Assistant 集成

对于高级自动化和控制，您可以选择在 Home Assistant 中安装 **Music Assistant 集成**。此集成允许您：

- 🤖 **从 Home Assistant 自动化和脚本中自动化音乐播放**
- 🎛️ **使用 Home Assistant 服务控制播放**
- 📊 **在仪表板中访问播放器状态和属性**
- 🎵 **在 Home Assistant 场景和例行任务中Music Assistant**

**安装集成方法**:

当您安装应用（或网络中的任何 Music Assistant 服务器）后，Home Assistant 应自动检测到 Music Assistant 服务器。在“设备与服务”页面，您应该会看到一张为您发现的服务器设置的卡片，以便简单设置集成。

**注意**: 应用提供 Music Assistant 服务器，而集成提供 Home Assistant 实体和自动化功能。如果您只想使用网页界面，在不使用集成的情况下，应用完全可以正常工作。

## 文档

获取详细文档，请访问：

- 📖 [官方文档](https://music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [支持与问题跟踪](https://github.com/music-assistant/support)
- 💭 [Discord 服务器](https://discord.gg/PZQ6RWbfeS)

## 支持

如果您遇到问题：

1. 检查应用日志（可在 Home Assistant 应用页面中查看）
2. 访问 [文档](https://music-assistant.io)
3. 在 [music-assistant/support](https://github.com/music-assistant/support) 搜索现有问题
4. 在 [Discord](https://discord.gg/PZQ6RWbfeS) 或 [GitHub 讨论](https://github.com/orgs/music-assistant/discussions) 寻求帮助

## 更新

这是 **稳定** 渠道。更新经过彻底测试后发布，推荐用于日常使用。

### 更新频率

- 主要版本发布：每隔几个月（大致每季度一次）
- 错误修复：根据需要
- 安全更新：立即

## 版本信息

此应用使用 Music Assistant 的稳定版。如果您需要最新功能，请考虑使用 BETA 或 NIGHTLY 版本（风险自担）。

## 数据存储

所有 Music Assistant 数据存储在该应用的数据目录中：

- 音乐库数据库
- 配置设置

因此，在 Home Assistant 中对 Music Assistant 应用进行备份也将包含您的 Music Assistant 数据。请在升级到新版本之前务必始终进行备份，以便随时可以轻松回退到之前的版本！

## 性能提示

- 使用快速存储介质（推荐 SSD）
- 确保充足的内存（Home Assistant + 此应用至少需要 4GB）
- 保持您的 Music Assistant 实例更新

## 贡献

Music Assistant 是开源的！欢迎参与贡献：

- 🐛 [报告错误](https://github.com/music-assistant/support)
- 💡 [建议功能](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 改进文档

前往 GitHub 上的 [Music Assistant 组织](https://github.com/music-assistant) 进行贡献。

## 许可证

Music Assistant 采用 Apache 2.0 许可证授权。

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
