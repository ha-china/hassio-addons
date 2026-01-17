# 音乐助手插件

Home Assistant 的官方音乐助手插件。

## 关于音乐助手

音乐助手是一个免费、开源的音乐库管理器，它可以连接到您的流媒体服务以及广泛的连接扬声器。将您的 Home Assistant 实例变成您个人的音乐流媒体中心！

## 功能

- 🎵 **多源音乐库**：连接 Spotify、YouTube Music、Qobuz、Tidal 等
- 🔊 **通用播放器支持**：与 Sonos、Chromecast、AirPlay、DLNA、Squeezebox 等许多设备兼容
- 🎶 **统一库**：将来自不同来源的所有音乐放在一个地方
- 🎯 **智能播放**：无缝播放、交叉淡入淡出和音频标准化
- 📱 **美观界面**：通过 Home Assistant 可访问的现代化网页界面
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
- `info`：常规日志（推荐）
- `debug`：用于故障排除的详细日志

**默认值**：`info`

**建议**：仅在需要解决任何问题时考虑使用 `debug` 级别。最好将全局设置保持在仅 `info`。

提示：在音乐助手中，每个提供者允许您覆盖日志级别。

#### safe_mode

启用时，音乐助手将不会加载任何提供者。这对于解决启动问题或提供者相关问题非常有用。

**默认值**：`false`

## 入门指南

1. 启动插件后，点击 **打开 Web UI**
2. 按照入门向导设置您的第一个音乐提供者
3. 连接您的扬声器和播放器
4. 开始享受您的音乐！

### 可选：Home Assistant 集成

为了高级自动化和控制，您可以可选地安装 Home Assistant 中的 **音乐助手集成**。此集成允许您：

- 🤖 **从 Home Assistant 自动化和脚本中自动化音乐播放**
- 🎛️ **使用 Home Assistant 服务控制播放**
- 📊 **在您的仪表板中访问播放器状态和属性**
- 🎵 **在 Home Assistant 场景和例程中使用音乐助手**

**安装集成的方法**：

安装插件后（或网络中的任何音乐助手服务器），音乐助手服务器应自动被 Home Assistant 检测到。在设备和服务页面，您应该会看到一个发现服务器的卡片，只需设置集成即可。

**注意**：插件提供音乐助手服务器，而集成提供 Home Assistant 实体和自动化功能。如果您只想使用网页界面，不安装集成也可以完美使用。

## 文档

有关详细文档，请访问：

- 📖 [官方文档](https://music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [支持和问题跟踪器](https://github.com/music-assistant/support)
- 💭 [Discord 服务器](https://discord.gg/PZQ6RWbfeS)

## 支持

如果您遇到任何问题：

1. 检查插件日志（可在 Home Assistant 插件页面找到）
2. 访问 [文档](https://music-assistant.io)
3. 在 [music-assistant/support](https://github.com/music-assistant/support) 中搜索现有问题
4. 在 [Discord](https://discord.gg/PZQ6RWbfeS) 或 [GitHub 讨论](https://github.com/orgs/music-assistant/discussions) 中寻求帮助

## 更新

这是 **稳定** 渠道。更新在经过彻底测试后发布，并推荐日常使用。

### 更新频率

- 主要版本：每隔几个月（大约每季度一次）
- 修复错误：按需发布
- 安全更新：立即发布

## 版本信息

此插件使用音乐助手的稳定版本。如需最新功能，请考虑 BETA 或 NIGHTLY 版本（使用风险自负）。

## 数据存储

所有音乐助手数据都存储在插件的 数据目录 中：

- 音乐库数据库
- 配置设置

因此，在 Home Assistant 中备份音乐助手插件也将包含您的音乐助手数据。请确保在更新到新版本之前始终进行备份，以便您可以轻松地恢复到之前的版本！

## 性能提示

- 使用快速存储介质（推荐使用 SSD）
- 确保有足够的 RAM（Home Assistant 加上此插件至少需要 4GB）
- 保持您的音乐助手实例更新

## 贡献

音乐助手是开源的！欢迎贡献：

- 🐛 [报告错误](https://github.com/music-assistant/support)
- 💡 [建议功能](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 改进文档

访问 GitHub 上的 [音乐助手组织](https://github.com/music-assistant) 以进行贡献。

## 许可证

音乐助手在 Apache License 2.0 下授权。
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
