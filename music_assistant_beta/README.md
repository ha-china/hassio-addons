# Music Assistant (BETA) 应用

Music Assistant 的官方 BETA 发布频道。

## ⚠️ 重要通知

这是 Music Assistant 的 **BETA** 版本。它包含在稳定版发布前进行测试的新特性和改进。

**如果你需要使用此应用：**

- 希望尽早获取新特性
- 愿意参与测试并报告问题
- 能够容忍偶尔的 Bug 或不稳定性
- 希望为改进 Music Assistant 做出贡献

**如果你在此情况下应不使用此应用：**

- 需要随时拥有稳定且可生产环境运行的系统
- 不习惯自行解决技术问题的障碍
- 无法承受任何音乐设置中的停机时间

## 什么是 BETA？

BETA 发行版是在变得稳定之前进行测试的版本，功能已完成。它们通常包括：

- ✨ 尚不在稳定版中的新功能
- 🔧 性能改进
- 🐛 来自先前版本的 Bug 修复
- 🧪 需要现实世界测试的更改

## 与稳定版的差异

| 方面      | 稳定版                       | BETA                                  |
| --------- | ---------------------------- | ------------------------------------- |
| 稳定性    | 高度稳定                     | 通常稳定，但可能出现了一些问题        |
| 功能      | 经过良好测试的功能           | 正在测试的新功能                      |
| 更新      | 较少频繁                     | 更频繁                               |
| 使用场景  | 生产环境                     | 测试与早期采用                       |

## 报告问题

作为 BETA 测试人员，你的反馈非常宝贵！请遇到问题时进行报告：

### 报告之前

1. 检查 App 日志（如需要请启用全局或按提供者级别的 `debug` 日志）
2. 搜索 [现有问题](https://github.com/music-assistant/support)
3. 如果可能，验证该问题是否不在稳定版中出现

### 报告时

包含以下内容：

- 📋 复现问题的步骤
- 📝 App 的完整日志（或从 MA 的 Web 界面下载完整日志文件）
- 🔢 Music Assistant 版本号（在 Web UI 中可见）
- 🎵 你正在使用的音乐提供者
- 🔊 受影响的播放器

**在哪里报告**：[GitHub 支持仓库](https://github.com/music-assistant/support)

## 更新

BETA 发行版比稳定版更新更加频繁。通常一周更新一次或更多或更少。

## 已知限制和注意事项

- BETA 版本可能会有破坏性更改
- 某些功能可能尚未完全实现
- 版本之间可能会发生数据库迁移
- 性能优化可能仍在进行中
- 你不能从稳定版迁移（反之亦然）

提示：如果你想在使用稳定版的同时测试 BETA 版本，只需停止稳定版应用并运行 BETA 应用即可。然后，再次停止 BETA 应用并启动稳定版，这些操作非常简单。这两个应用不能同时处于激活状态。

## 获取帮助

- 📖 [BETA 文档](https://beta.music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [报告 BETA 问题](https://github.com/music-assistant/support)
- � [Discord 服务器](https://discord.gg/PZQ6RWbfeS)

## BETA 中的新内容

[rANGE CHANGELOG](CHANGELOG.md) 获取有关本 BETA 版本新内容的详细信息。

## BETA 测试最佳实践

1. **定期备份**：始终维护最近的备份
2. **监控日志**：关注日志以查看问题
3. **报告问题**：通过报告 Bug 帮助我们改进
4. **保持耐心**：某些功能可能不能完美运行
5. **保持更新**：安装更新以获取最新修复

在 Home Assistant 内备份 Music Assistant 应用将也会包含你的 Music Assistant 数据。请务必总是在更新至新版本之前进行备份，这样你以后可以很容易地回滚到之前的版本！

## 回滚策略

### 如果出现问题

1. **停止应用**
2. **从备份恢复**（你已经有这个备份，对吗？）
3. **报告问题**

## 贡献

作为 BETA 测试人员，你已经在进行贡献了！你还可以：

- 🐛 [报告详细错误](https://github.com/music-assistant/support)
- 💡 [提出改进建议](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交 Pull Requests
- 📝 协助文档编写
- 💬 在 [Discord] [https://discord.gg/PZQ6RWbfeS] 上帮助他人

请访问 GitHub 上的 [Music Assistant 组织](https://github.com/music-assistant) 参与贡献。

## 发行周期

```
Development → BETA → Stable
     ↓          ↓        ↓
   Nightly   (You!)   Users
```

BETA 发行版是稳定版发布前的最终测试阶段。你的测试有助于确保所有用户的质量！

## 许可证

Music Assistant 采用 Apache License 2.0 许可。

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
