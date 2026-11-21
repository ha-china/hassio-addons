# Music Assistant (BETA) App

Music Assistant 的官方 BETA 发布渠道。

## ⚠️ 重要通知

这是 Music Assistant 的 **BETA** 版本。它包含在稳定版发布前进行测试的新功能和改进。

**如果您使用此 App：**

- 想要早期访问新功能
- 愿意协助测试并报告问题
- 能容忍偶尔出现的 bug 或不稳定性
- 想要为提升 Music Assistant 贡献力量

**请勿使用此 App 如果您：**
- 需要任何时间都稳定、可用于生产的系统
- 不愿意自行排查问题
- 无法容忍您的音乐系统出现任何停机时间

## 什么是 BETA？

BETA 发布是功能完整但尚未稳定发布的测试版本。它们通常包括：

- ✨ 仍未进入稳定版的新功能
- 🔧 性能改进
- 🐛 来自先前版本的 bug 修复
- 🧪 需要真实世界测试的更改

## 与稳定版的区别

| 方面        | 稳定版                  | BETA                                  |
| ----------- | ---------------------- | ------------------------------------- |
| 稳定性      | 高度稳定                | 总体稳定，但可能出现小问题             |
| 功能        | 经过充分测试的功能      | 正在测试的新功能                       |
| 更新        | 较不频繁                | 较频繁                                 |
| 用途        | 生产环境                | 测试和早期采用                         |

## 报告问题

作为 BETA 测试者，您的反馈非常宝贵！请报告您遇到的问题：

### 报告前

1. 检查 App 日志（如需，请在全局或针对特定提供者级别启用 `debug` 日志）
2. 搜索 [现有问题](https://github.com/music-assistant/support)
3. 如可能，验证该问题未在稳定版中出现

### 报告时

包含以下内容：

- 📋 复现步骤
- 📝 完整 App 日志（或在 MA 的 Web 界面中下载完整日志文件）
- 🔢 Music Assistant 版本号（在 Web 界面中可见）
- 🎵 使用的音乐提供者
- 🔊 受影响的播放器

**报告位置**：[GitHub 支持仓库](https://github.com/music-assistant/support)

## 更新

BETA 发布的更新频率高于稳定版。总体而言，每周更新一次或两次。

## 已知限制和说明

- BETA 版本可能会有破坏性更改
- 某些功能可能未完全实现
- 版本之间可能发生数据库迁移
- 性能优化可能仍在进行中
- 无法从稳定版迁移（反之亦然）

💡 提示：如果您想在保留稳定版的同时测试 BETA 版本，只需停止稳定版 App 并运行 BETA App。要返回稳定版，只需再次停止 BETA App 并启动稳定版即可。两个 App 不能同时运行。

## 寻求帮助

- 📖 [BETA 文档](https://beta.music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [报告 BETA 问题](https://github.com/music-assistant/support)
- 📢 [Discord 服务器](https://discord.gg/PZQ6RWbfeS)

## BETA 版本新增了啥

查看 [版本更新日志](CHANGELOG.md) 以获取有关本 BETA 版本新增内容的详细信息。

## Beta 测试最佳实践

1. **定期备份**：始终维护最近的备份
2. **监控日志**：留意日志中的问题
3. **报告问题**：通过报告 bug 帮助我们改进
4. **保持耐心**：某些功能可能无法完美运行
5. **及时更新**：安装更新以获取最新修复

在 Home Assistant 内备份 Music Assistant App 将包含您的 Music Assistant 数据。请在升级到新版本前始终先备份，以便能够轻松恢复到以往版本！

## 回滚策略

### 如果遇到问题

1. **停止 App**
2. **从备份恢复**（您已经备份了，对吧？）
3. **报告问题**

## 贡献

作为 BETA 测试者，您已经在贡献了！您也可以：

- 🐛 [报告详细 bug](https://github.com/music-assistant/support)
- 💡 [提出改进建议](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交 pull 请求
- 📝 协助撰写文档
- 💬 在 [Discord](https://discord.gg/PZQ6RWbfeS) 中帮助他人

访问 GitHub 上的 [Music Assistant 组织](https://github.com/music-assistant) 进行贡献。

## 发布周期

```
Development → BETA → Stable
     ↓          ↓        ↓
   Nightly   (您!)   Users
```

BETA 发布是稳定版发布前的最终测试阶段。您的测试有助于为所有用户确保质量！

## 许可证

Music Assistant 采用 Apache License 2.0 授权。

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
