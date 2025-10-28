# 音乐助手插件

Home Assistant 官方的音乐助手插件。

## 关于音乐助手

音乐助手是一个免费、开源的音乐库管理器，它可以连接到您的流媒体服务和各种连接的扬声器。将您的 Home Assistant 实例变成您自己的个人音乐流媒体中心！

## 功能

- 🎵 **多源音乐库**：连接 Spotify、YouTube Music、Qobuz、Tidal 等
- 🔊 **通用播放器支持**：与 Sonos、Chromecast、AirPlay、DLNA、Squeezebox 等多种设备兼容
- 🎶 **统一音乐库**：所有不同来源的音乐都在一个地方
- 🎯 **智能播放**：无缝播放、交叉渐变和音频标准化
- 📱 **美观界面**：通过 Home Assistant 访问的现代网页界面
- 🏠 **Home Assistant 集成**：与 Home Assistant 的媒体播放器平台完全集成

## 安装

1. 在 Home Assistant 中导航到 **设置** → **插件** → **插件商店**
2. 搜索 "音乐助手"
3. 点击 **安装**
4. 等待安装完成
5. 点击 **启动**
6. 打开 **Web UI** 以设置音乐助手

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
- `info`：标准日志（推荐）
- `debug`：详细的日志用于故障排除

**默认值**：`info`

**推荐**：仅在需要排查问题时使用 `debug` 级别。建议将全局设置保持为 `info`。

提示：在音乐助手中，每个提供者允许您覆盖日志级别。

#### safe_mode

启用时，音乐助手将不会加载任何提供者。这对于排查启动问题或提供者相关问题非常有用。

**默认值**：`false`

## 入门指南

1. 启动插件后，点击 **打开 Web UI**
2. 按照入门向导设置您的第一个音乐提供者
3. 连接您的扬声器/播放器
4. 开始享受您的音乐！

### 可选：Home Assistant 集成

为了高级自动化和控制，您可以可选地安装 Home Assistant 中的 **音乐助手集成**。此集成允许您：

- 🤖 **从 Home Assistant 自动化和脚本中自动化音乐播放**
- 🎛️ **使用 Home Assistant 服务控制播放**
- 📊 **在您的仪表板中访问播放器状态和属性**
- 🎵 **在您的 Home Assistant 场景和例程中使用音乐助手**

**安装集成方法**：

安装插件后（或您网络中的任何音乐助手服务器），Home Assistant 应自动检测音乐助手服务器。在设备和服务页面，您应该会看到一个发现服务器的卡片，只需设置集成即可。

**注意**：插件提供音乐助手服务器，而集成提供 Home Assistant 实体和自动化功能。如果您只想使用网页界面，插件完全可以独立工作，无需集成。

## 文档

有关详细文档，请访问：

- 📖 [官方文档](https://music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [支持与问题跟踪器](https://github.com/music-assistant/support)
- 💭 [Discord 服务器](https://discord.gg/PZQ6RWbfeS)

## 支持

如果您遇到任何问题：

1. 检查插件日志（可在 Home Assistant 插件页面中找到）
2. 访问 [文档](https://music-assistant.io)
3. 在 [music-assistant/support](https://github.com/music-assistant/support) 中搜索现有问题
4. 在 [Discord](https://discord.gg/PZQ6RWbfeS) 或 [GitHub 讨论区](https://github.com/orgs/music-assistant/discussions) 中寻求帮助

## 更新

这是 **稳定** 渠道。更新在经过彻底测试后发布，推荐日常使用。

### 更新频率

- 主要版本：每隔几个月发布（大约每季度一次）
- 修复错误：按需发布
- 安全更新：立即发布

## 版本信息

此插件使用音乐助手的稳定版本。如需最新功能，请考虑使用 BETA 或 NIGHTLY 版本（使用需自行承担风险）。

## 数据存储

所有音乐助手数据都存储在插件的_data_目录中：

- 音乐库数据库
- 配置设置

因此，在 Home Assistant 中备份音乐助手插件也将包括您的音乐助手数据。请确保在更新到新版本之前始终进行备份，以便您可以轻松地恢复到之前的版本！

## 性能提示

- 使用快速存储介质（推荐使用 SSD）
- 确保有足够的 RAM（Home Assistant 加此插件至少需要 4GB）
- 保持您的音乐助手实例更新

## 贡献

音乐助手是开源的！欢迎贡献：

- 🐛 [报告错误](https://github.com/music-assistant/support)
- 💡 [建议功能](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 改进文档

访问 GitHub 上的 [音乐助手组织](https://github.com/music-assistant) 进行贡献。

## 许可证

音乐助手在 Apache License 2.0 下授权。