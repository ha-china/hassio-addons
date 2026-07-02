# 音乐助手应用

Home Assistant的官方音乐助手应用。

## 关于音乐助手

音乐助手是一款免费、开源的音乐库管理器，可以连接到您的流媒体服务和多种连接的扬声器。将您的Home Assistant实例变成您自己的个人音乐流媒体中心！

## 特性

- 🎵 **多源音乐库**：连接Spotify、YouTube Music、Qobuz、Tidal等
- 🔊 **通用播放器支持**：与Sonos、Chromecast、AirPlay、DLNA、Squeezebox等多种播放器兼容
- 🎶 **统一库**：将来自不同源的所有音乐集中在一个地方
- 🎯 **智能播放**：无缝播放、交叉淡入淡出和音频归一化
- 📱 **美观界面**：现代Web界面，可通过Home Assistant访问
- 🏠 **Home Assistant集成**：与Home Assistant的媒体播放平台完全集成

## 安装

1. 在Home Assistant中，转到**设置** → **应用** → **应用商店**
2. 搜索“音乐助手”
3. 点击**安装**
4. 等待安装完成
5. 点击**启动**
6. 打开**Web UI**以设置音乐助手

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
- `debug`：详细的调试日志，用于故障排除

**默认值**：`info`

**建议**：考虑仅将全局设置设置为`info`以用于故障排除。

提示：在音乐助手内，每个提供者允许你覆盖日志级别。

#### safe_mode

启用时，音乐助手将不加载任何提供者启动。这对于故障排除启动问题或提供者相关的问题很有用。

**默认值**：`false`

## 入门

1. 启动应用后，点击**打开Web UI**
2. 按照入门向导设置您的第一个音乐提供者
3. 连接您的扬声器/播放器
4. 开始享受您的音乐！

### 可选：Home Assistant集成

为了高级自动化和控制，您可以可选地安装Home Assistant中的**音乐助手集成**。此集成允许您：

- 🤖 从Home Assistant自动化和脚本中自动播放音乐
- 🎛️ 使用Home Assistant服务控制播放
- 📊 在您的仪表板中访问播放器状态和属性
- 🎵 在您的Home Assistant场景和常规中使用音乐助手

**安装集成**：

安装应用后，Home Assistant应自动检测到Music Assistant服务器（或您的网络中的任何Music Assistant服务器）。在设备与服务页面，您应该会看到一个用于设置集成的卡片。

**注意**：应用提供了Music Assistant服务器，而集成提供了Home Assistant实体和自动化功能。如果您只想使用Web界面，则无需集成。

## 文档

有关详细文档，请访问：

- 📖 [官方文档](https://music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [支持与问题跟踪](https://github.com/music-assistant/support)
- 💭 [Discord服务器](https://discord.gg/PZQ6RWbfeS)

## 支持

如果您遇到任何问题：

1. 检查应用日志（可在Home Assistant应用页面查看）
2. 访问[文档](https://music-assistant.io)
3. 在[music-assistant/support](https://github.com/music-assistant/support)搜索现有问题
4. 在[Discord](https://discord.gg/PZQ6RWbfeS)或[GitHub Discussions](https://github.com/orgs/music-assistant/discussions)寻求帮助

## 更新

这是**稳定**通道。更新在经过彻底测试后发布，并推荐用于日常使用。

### 更新频率

- 主要版本：每几个月（大约每季度一次）
- 错误修复：按需
- 安全更新：立即

## 版本信息

此应用使用Music Assistant的稳定版本。要获取最新功能，请考虑BETA或NIGHTLY版本（自行承担风险）。

## 数据存储

所有音乐助手数据都存储在应用的数据目录中：

- 音乐库数据库
- 配置设置

因此，在Home Assistant中对音乐助手应用进行备份也将包括您的音乐助手数据。请在更新到新版本之前始终进行备份，以便您可以轻松地回滚到上一个版本！

## 性能提示

- 使用快速存储介质（推荐SSD）
- 确保有足够的RAM（Home Assistant + 此应用至少4GB）
- 保持您的音乐助手实例更新

## 贡献

音乐助手是开源的！欢迎贡献：

- 🐛 [报告错误](https://github.com/music-assistant/support)
- 💡 [建议功能](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 改进文档

访问GitHub上的[音乐助手组织](https://github.com/music-assistant)以进行贡献。

## 许可证

音乐助手遵循Apache License 2.0许可。
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
