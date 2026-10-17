# Music Assistant (BETA) 应用

Music Assistant 的官方 BETA 发行渠道。

## ⚠️ 重要通知

这是 Music Assistant 的 **BETA** 版本。它包含在正式发布前进行测试的新功能和改进。

**如果您想要使用此应用：**

- 希望尽早获取新功能
- 愿意参与测试并报告问题
- 能够容忍偶尔出现的错误或不稳定性
- 希望为让 Music Assistant 做得更好做出贡献

**如果您以下列情况使用此应用：**

- 在任何时候都需要一个稳定、可投入生产环境的系统
- 不太舒服自行排查问题
- 无法承受音乐设置中任何停机时间

## 什么是 BETA？

BETA 发布版是在成为稳定版之前进行测试的功能完整的版本。它们通常包括：

- ✨ 尚未在稳定版中的新功能
- 🔧 性能改进
- 🐛 来自先前版本的错误修复
- 🧪 需要实际世界测试的更改

## 与稳定版的区别

| 方面     | 稳定版                   | BETA                                    |
| -------- | ------------------------ | --------------------------------------- |
| 稳定性   | 高度稳定                 | 一般稳定，可能出现一些问题               |
| 功能     | 经过良好测试的功能       | 正在测试的新功能                         |
| 更新     | 较少                   | 较为频繁                               |
| 使用场景 | 生产环境                 | 测试及早期采用                           |

## 报告问题

作为 BETA 测试人员，您的反馈极其宝贵！请报告您遇到的具体问题：

### 在报告之前

1. 检查应用的日志（如果需要，请全局启用地方 `debug` 日志或针对单个提供者级别）
2. 搜索 [现有问题](https://github.com/music-assistant/support)
3. 如果可能，验证该问题是否也在稳定版中出现

### 在报告时

包含以下内容：

- 📋 重现该问题的步骤
- 📝 来自应用的全日志（或从 MA 网络界面下载完整日志文件）
- 🔢 Music Assistant 版本（在 Web 界面中可见）
- 🎵 您正在使用的音乐提供者
- 🔊 受影响的播放器

**报告地点**：[GitHub 支持存储库](https://github.com/music-assistant/support)

## 更新

BETA 发布版的更新频率高于稳定版。总体而言，大约每周一次。

## 已知限制和说明

- BETA 版本可能有破坏性更改
- 某些功能可能仅部分实现
- 版本之间可能会发生数据库迁移
- 性能优化可能仍在进行中
- 无法从稳定版迁移（反之亦然）

提示：如果您想保留稳定版的同时测试 BETA 版本，只需停止稳定版应用并运行 BETA 应用。然后再次停止 BETA 应用并启动稳定版即可恢复至稳定版。两个应用不能同时处于激活状态。

## 寻求帮助

- 📖 [BETA 文档](https://beta.music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [报告 BETA 问题](https://github.com/music-assistant/support)
- 🫗 [Discord 服务器](https://discord.gg/PZQ6RWbfeS)

## BETA 版本中新内容

查看 [CHANGELOG.md](CHANGELOG.md) 获取有关本 BETA 版本中新内容的详细信息。

## BETA 测试最佳实践

1. **定期备份**：始终保留最近的备份
2. **监控日志**：留意日志以发现问题
3. **报告问题**：通过报告错误来帮助我们改进
4. **保持耐心**：某些功能可能无法完美工作
5. **保持更新**：安装更新以获取最新的补丁

将 Music Assistant 应用备份到 Home Assistant 中也包括您的 Music Assistant 数据。请务必在更新到新版本之前始终进行备份，以便您随时可以轻松回退到先前版本！

## 回滚策略

### 如果出现问题

1. **停止应用**
2. **从备份恢复**（您确有一个备份，对吧？）
3. **报告问题**

## 贡献

作为 BETA 测试人员，您已经开始贡献了！您还可以：

- 🐛 [报告详细错误](https://github.com/music-assistant/support)
- 💡 [提出改进建议](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 协助文档编写
- 💬 在 [Discord](https://discord.gg/PZQ6RWbfeS) 上帮助他人

访问 GitHub 上的 [Music Assistant 组织](https://github.com/music-assistant) 进行贡献。

## 发布周期

```
Development → BETA → Stable
     ↓          ↓        ↓
   Nightly   (您!)   用户
```

BETA 发布版是稳定版发布前的最后测试阶段。您的测试有助于确保所有用户的质量！

## 许可证

Music Assistant 采用 Apache License 2.0 许可。

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
