# 音乐助手应用

Home Assistant 的官方音乐助手应用。

## 关于音乐助手

音乐助手是一个免费、开源的音乐库管理器，它连接您的流媒体服务和广泛的互联扬声器。将您的 Home Assistant 实例转变为您的个人音乐流媒体中心！

## 功能

- 🎵 **多源音乐库**：连接 Spotify、YouTube Music、Qobuz、Tidal 等
- 🔊 **通用播放器支持**：兼容 Sonos、Chromecast、AirPlay、DLNA、Squeezebox 等
- 🎶 **统一音乐库**：将来自不同来源的所有音乐放在一个地方
- 🎯 **智能播放**：无缝播放、淡入淡出和音频 normalization
- 📱 **精美界面**：现代 Web 界面，可通过 Home Assistant 访问
- 🏠 **Home Assistant 集成**：完全集成 Home Assistant 的媒体播放器平台

## 安装

1. 在 Home Assistant 中导航到 **设置** → **应用程序** → **应用商店**
2. 搜索 "音乐助手"
3. 点击 **安装**
4. 等待安装完成
5. 点击 **启动**
6. 打开 **Web UI** 设置音乐助手

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
- `debug`：用于故障排查的详细信息日志

**默认值**：`info`

**建议**：仅在需要故障排查问题时考虑使用 `debug` 级别。
最好将全局设置仅保持为 `info`。

提示：在音乐助手内部，每个提供者都允许覆盖日志级别。

#### safe_mode

启用时，音乐助手将在不加载任何提供者的情况下启动。这对于故障排查启动问题或提供者相关问题非常有用。

**默认值**：`false`

## 开始使用

1. 启动应用后，点击 **打开 Web UI**
2. 遵循引导Wizard设置您的第一个音乐提供者
3. 连接您的扬声器/播放器
4. 开始享受音乐！

### 可选：Home Assistant 集成

为了高级自动化和控制，您可以选择安装在 Home Assistant 的 **音乐助手集成**。此集成允许您：

- 🤖 **从 Home Assistant 自动化和脚本自动化音乐播放**
- 🎛️ **使用 Home Assistant 服务控制播放**
- 📊 **在仪表板中访问播放器状态和属性**
- 🎵 **在 Home Assistant 场景和例程中使用音乐助手**

**安装集成的方法：**

安装应用（或网络中的任何音乐助手服务器）后，Home Assistant 将自动检测音乐助手服务器。在“设备与服务”页面上，您应该会遇到一张用于设置集成的已发现服务器的卡片。

**注意**：应用提供音乐助手服务器，而集成提供 Home Assistant 实体和自动化功能。如果您只想使用 Web 界面，没有集成应用也能正常工作。

## 文档

访问以下网站获取详细文档：

- 📖 [官方文档](https://music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [支持与问题追踪器](https://github.com/music-assistant/support)
- 💭 [Discord 服务器](https://discord.gg/PZQ6RWbfeS)

## 支持

如果您遇到任何问题：

1. 检查应用日志（可在 Home Assistant 应用页面中获取）
2. 访问 [文档](https://music-assistant.io)
3. 在 [music-assistant/support](https://github.com/music-assistant/support) 搜索现有问题
4. 在 [Discord](https://discord.gg/PZQ6RWbfeS) 或 [GitHub 讨论](https://github.com/orgs/music-assistant/discussions) 寻求帮助

## 更新

这是 **稳定** 通道。在彻底测试后发布更新，适用于日常使用。

### 更新频率

- 主要版本：每隔几个月发布一次（大致每季度一次）
- 错误修复：视需要而定
- 安全更新：立即发布

## 版本信息

此应用使用稳定的音乐助手版本。要获取最新功能，请考虑使用 BETA 或 NIGHTLY 版本（使用需自行承担风险）。

## 数据存储

所有音乐助手数据存储在与应用相关的数据目录中：

- 音乐库数据库
- 配置设置

因此，在 Home Assistant 中备份音乐助手应用也将包含您的音乐助手数据。请在更新到新版本之前始终进行备份，以便您始终可以轻松回退到上一个版本！

## 性能提示

- 使用快速存储介质（推荐 SSD）
- 确保有充足的 RAM（Home Assistant + 此应用的最低 4GB）
- 保持您的音乐助手实例更新

## 贡献

音乐助手是开源的！欢迎贡献：

- 🐛 [报告 bug](https://github.com/music-assistant/support)
- 💡 [建议功能](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 改进文档

访问 GitHub 上的 [音乐助手组织](https://github.com/music-assistant) 进行贡献。

## 许可证

音乐助手采用 Apache 2.0 许可证授权。

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
