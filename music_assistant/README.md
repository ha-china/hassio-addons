# Music Assistant App

Home Assistant 的官方 Music Assistant 应用。

## 关于 Music Assistant

Music Assistant 是一个免费、开源的音乐库管理程序，可连接您的流媒体服务及各种联网音箱。将您的 Home Assistant 实例转变为您个人的音乐流媒体中心！

## 功能特点

- 🎵 **多源音乐库**：连接 Spotify、YouTube Music、Qobuz、Tidal 等
- 🔊 **全能播放器支持**：兼容 Sonos、Chromecast、AirPlay、DLNA、Squeezebox 及更多设备
- 🎶 **统一音乐库**：将来自不同来源的所有音乐集中一处
- 🎯 **智能播放**：无缝播放、淡入淡出和音频归一化
- 📱 **精美界面**：通过 Home Assistant 访问的现代网页界面
- 🏠 **与 Home Assistant 集成**：完全集成 Home Assistant 的媒体播放器平台

## 安装

1. 在 Home Assistant 中导航到 **设置** → **应用** → **应用商店**
2. 搜索"Music Assistant"
3. 点击 **安装**
4. 等待安装完成
5. 点击 **开始**
6. 打开 **网页界面** 以设置 Music Assistant

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
- `debug`：用于故障排除的详细日志

**默认值**：`info`

**建议**：仅考虑在故障排除任何问题时使用 `debug` 级别。
最好将全局设置保持在 `info`。

提示：在 Music Assistant 中，每个提供商都允许您覆盖日志级别。

#### safe_mode

启用时，Music Assistant 将不加载任何提供商启动。这对于故障排除启动问题或有关提供商的问题非常有用。

**默认值**：`false`

## 开始使用

1. 启动应用后，点击 **打开网页界面**
2. 遵循入门向导设置您的第一个音乐提供商
3. 连接您的音箱/播放器
4. 开始享受您的音乐！

### 可选：与 Home Assistant 集成

为了高级自动化和控制，您可以在 Home Assistant 中可选安装 **Music Assistant 集成**。该集成允许您：

- 🤖 **从 Home Assistant 自动化和脚本中自动化音乐播放**
- 🎛️ **使用 Home Assistant 服务控制播放**
- 📊 **在仪表盘中访问播放器状态和属性**
- 🎵 **在您的 Home Assistant 场景和例行任务中使用 Music Assistant**

**安装集成方法：**

一旦您安装了应用（或您网络中的任何 Music Assistant 服务器），Home Assistant 应该会自动检测到 Music Assistant 服务器。在设备与服务页，您应该会看到一个用于 discovered 服务器的小部件，只需设置即可安装集成。

**注意**：应用提供 Music Assistant 服务器，而集成提供 Home Assistant 实体和自动化功能。如果您只想使用网页界面，应用在没有集成的情况下也能完美运行。

## 文档

有关详细文档，请访问：

- 📖 [官方文档](https://music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [支持与问题跟踪器](https://github.com/music-assistant/support)
- 💭 [Discord 服务器](https://discord.gg/PZQ6RWbfeS)

## 支持

如果您遇到任何问题：

1. 检查应用日志（在 Home Assistant 应用页面中可用）
2. 访问 [文档](https://music-assistant.io)
3. 在 [music-assistant/support](https://github.com/music-assistant/support) 上搜索现有问题
4. 在 [Discord](https://discord.gg/PZQ6RWbfeS) 或 [GitHub 讨论](https://github.com/orgs/music-assistant/discussions) 上寻求帮助

## 更新

这是 **稳定** 通道。在彻底测试后发布更新，推荐用于日常使用。

### 更新频率

- 重大版本：每几个月一次（大致每季度一次）
- 故障修复：按需
- 安全更新：立即

## 版本信息

此应用使用稳定的 Music Assistant 版本。如需最新功能，请考虑使用 BETA 或 NIGHTLY 版本（风险自担）。

## 数据存储

所有 Music Assistant 数据均存储在应用的数据目录中：

- 音乐库数据库
- 配置文件设置

因此，在 Home Assistant 中备份 Music Assistant 应用也将包含您的 Music Assistant 数据。请务必在更新到新版本前始终进行备份，以便您可以随时轻松回退到以前版本！

## 性能提示

- 使用快速存储介质（推荐使用 SSD）
- 确保充足的 RAM（Home Assistant + 此应用至少需要 4GB）
- 保持您的 Music Assistant 实例更新

## 贡献

Music Assistant 是开源项目！欢迎贡献：

- 🐛 [报告错误](https://github.com/music-assistant/support)
- 💡 [建议功能](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 改进文档

访问 GitHub 上的 [Music Assistant 组织](https://github.com/music-assistant) 进行贡献。

## 许可证

Music Assistant 采用 Apache 许可证 2.0 授权。

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
