# Music Assistant (BETA) 应用

这是 Music Assistant 的官方 BETA 发布通道。

## ⚠️ 重要通知

这是 Music Assistant 的 **BETA** 版本。它包含新功能和改进，这些功能和改进正在正式发行前进行测试。

**如果您想要：**

- 提前访问新功能
- 愿意参与测试并报告问题
- 能够容忍偶尔出现的错误或不稳定性
- 希望为让 Music Assistant 变得更好做出贡献

请使用此应用。

**如果您不希望：**

- 始终需要一个稳定且已投入生产的系统
- 不太满足于自己排查问题
- 无法承担音乐系统中任何停机时间

请勿使用此应用。

## BETA 是什么？

BETA 发布是针对正式发布前进行功能完整性测试的版本。通常包括：

- ✨ 稳定版中尚未出现的新功能
- 🔧 性能提升
- 🐛 从以前版本修复的错误
- 🧪 需要真实世界测试的变更

## 与稳定版的差异

| 方面       | 稳定版                | BETA                                         |
| ---------- | --------------------- | ------------------------------------------- |
| 稳定性     | 高度稳定              | 一般稳定，但可能出现一些问题                 |
| 功能       | 经过充分测试的功能    | 正在测试中的新功能                           |
| 更新频率   | 较少                  | 较少                                           |
| 更新频率   | 较少                  | 较少                                           |
| 使用场景   | 生产环境               | 测试与早期采用                                 |

## 报告问题

作为一款 BETA 测试人员，您的反馈非常宝贵！请报告您遇到的任何问题：

### 在报告之前

1. 检查应用日志（必要时全局或在单个功能级别启用 `debug` 日志）
2. 搜索 [现有问题](https://github.com/music-assistant/support)
3. 如果可能的话，验证该问题是否在未受版中不存在

### 在报告时

包括以下内容：

- 📋 重现问题的步骤
- 📝 来自应用的完整日志（或从 MA 的 Web 界面下载完整的日志文件）
- 🔢 Music Assistant 版本（在 Web UI 中可见）
- 🎵 您正在使用的音乐提供商
- 🔊 受影响的播放器

**在哪里报告**：[GitHub 支持仓库](https://github.com/music-assistant/support)

## 更新

BETA 发布比稳定版更频繁地更新。通常一周一次。

## 已知限制和说明

- BETA 版本可能会有破坏性变更
- 一些功能可能尚未完全实现
- 版本之间可能会发生数据库迁移
- 性能优化可能仍在进行中
- 您无法从稳定版迁移（反之亦然）

提示：如果您想在保留稳定版的同时测试 BETA 版本，只需停止稳定版并运行 BETA 版。然后只需再次停止 BETA 版并启动稳定版即可恢复稳定版。此应用和稳定版不能同时激活。

## 获取帮助

- 📖 [BETA 文档](https://beta.music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [报告 BETA 问题](https://github.com/music-assistant/support)
- 🐦 [Discord 服务器](https://discord.gg/PZQ6RWbfeS)

## BETA 版本有哪些新内容

检查 [CHANGELOG](CHANGELOG.md) 以获取关于此 BETA 版本新内容的详细信息。

## BETA 最佳实践（测试）

1. **定期备份**：始终保持最近的备份
2. **监控日志**：留意日志以发现问题
3. **报告问题**：通过报告错误帮助我们改进
4. **耐心**：一些功能可能无法完美工作
5. **保持更新**：安装更新以获取最新修复

在 Home Assistant 中备份 Music Assistant 应用也会包含您的 Music Assistant 数据。请确保在更新到新版本之前始终进行备份，以便您可以随时轻松恢复到以前的版本！

## 回滚策略

### 如果出了问题

1. **停止应用程序**
2. **从备份恢复**（您已经建立了备份，对吧？）
3. **报告问题**

## 贡献

作为一名 BETA 测试人员，您已经在做贡献了！您也可以：

- 🐛 [报告详细错误](https://github.com/music-assistant/support)
- 💡 [建议改进](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 帮助文档
- 💬 在 [Discord](https://discord.gg/PZQ6RWbfeS) 上帮助他人

访问 GitHub 上的 [Music Assistant 组织](https://github.com/music-assistant) 进行贡献。

## 发行周期

```
Development → BETA → Stable
     ↓          ↓        ↓
   Nightly   (You!)   Users
```

BETA 发布是稳定发布前的最后测试阶段。您的测试有助于为所有用户确保质量！

## 许可

Music Assistant 采用 Apache 2.0 许可证许可。

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
