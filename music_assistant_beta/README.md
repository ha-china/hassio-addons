# Music Assistant (BETA) 应用程序

Music Assistant 的官方 BETA 发布渠道。

## ⚠️ 重要通知

这是 Music Assistant 的 **BETA** 版本。它包含在稳定版发布前进行测试的新功能和改进。

**如果您使用此应用程序：**

- 想要提前访问新功能
- 愿意帮助测试和报告问题
- 能够容忍偶尔出现的 bug 或不稳定情况
- 想要为让 Music Assistant 变得更好做出贡献

**如果您不要使用此应用程序：**

- 一直在需要稳定、生产就绪的系统
- 不擅长处理问题的排查
- 无法承受音乐系统中任何的中断时间

## 什么是 BETA？

BETA 发布是经过测试、在成为稳定版之前的已完成功能的版本。它们通常包括：

- ✨ 尚未纳入稳定版的新功能
- 🔧 性能改进
- 🐛 来自先前版本的 bug 修复
- 🧪 需要真实世界测试的更改

## 与稳定版的差异

| 方面      | 稳定版               | BETA                                  |
| --------- | -------------------- | ------------------------------------- |
| 稳定性    | 高度稳定             | 通常稳定，但可能出现问题             |
| 功能      | 经过良好测试的功能   | 正在测试的新功能                     |
| 更新      | 较少频率             | 较多频率                             |
| 使用场景  | 生产环境             | 测试与早期采用                       |

## 报告问题

作为 BETA 测试人员，您的反馈非常有价值！请报告您遇到的任何问题：

### 在报告之前

1. 检查应用程序日志（如果需要，则全局或在每个提供程序级别启用 `debug` 日志）
2. 搜索 [现有问题](https://github.com/music-assistant/support)
3. 如果可能，验证该问题未发生在稳定版中

### 何时报告

包括以下内容：

- 📋 重现问题所需的步骤
- 📝 来自应用程序的完整日志（或在 MA Web 界面上下载完整日志文件）
- 🔢 Music Assistant 版本（在 Web UI 中可见）
- 🎵 您正在使用的音乐提供商
- 🔊 受影响的播放器

**报告位置**：[GitHub 支持仓库](https://github.com/music-assistant/support)

## 更新

BETA 发布比稳定版更新更频繁。总的来说，大约每周一次。

## 已知限制和注意事项

- BETA 版本可能有破坏性变更
- 某些功能可能部分实现
- 版本之间可能发生数据库迁移
- 性能优化可能仍在进行中
- 您无法从稳定版迁移（反之亦然）

提示：如果您想测试 BETA 版本，同时保留稳定版本，只需停止稳定版应用程序并运行 BETA 应用程序。再回到稳定版只需再次停止 BETA 应用程序并启动稳定版。两款应用程序不能同时活动。

## 获取帮助

- 📖 [BETA 文档](https://beta.music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [报告 BETA 问题](https://github.com/music-assistant/support)
- 📢 [Discord 服务器](https://discord.gg/PZQ6RWbfeS)

## BETA 版有哪些新功能？

查看 [CHANGELOG](CHANGELOG.md) 以了解关于此 BETA 版本所有新功能的详细信息。

## BETA 测试最佳实践

1. **定期备份**：始终维护最近的备份
2. **监控日志**：留意日志以发现问题
3. **报告问题**：帮助我们通过报告 bug 改进
4. **保持耐心**：某些功能可能无法完美工作
5. **保持更新**：安装更新以获取最新的修复

在 Home Assistant 内备份 Music Assistant 应用程序将包括您的 Music Assistant 数据。请确保在更新至新版本之前始终进行备份，以便您可以始终轻松地恢复到之前的版本！

## 回滚策略

### 如果出了问题

1. **停止应用程序**
2. **从备份恢复**（您确实做了一个，对吧？）
3. **报告问题**

## 贡献

作为 BETA 测试人员，您已经在贡献了！您还可以：

- 🐛 [报告详细的 bug](https://github.com/music-assistant/support)
- 💡 [提出改进建议](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交 pull requests
- 📝 帮助编写文档
- 💬 在 [Discord](https://discord.gg/PZQ6RWbfeS) 上帮助他人

访问 GitHub 上的 [Music Assistant 组织](https://github.com/music-assistant) 进行贡献。

## 发布周期

```
开发 → BETA → 稳定
     ↓          ↓        ↓
   隔夜构建   (您!)   用户
```

BETA 发布是稳定发布前的最后测试阶段。您的测试有助于确保所有用户的工程质量！

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
