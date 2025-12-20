# 音乐助手（测试版）插件

音乐助手的官方测试版发布渠道。

## ⚠️ 重要通知

这是一个音乐助手的**测试版**。它包含了在稳定版发布前进行测试的新功能和改进。

**如果你：**

- 想要提前访问新功能
- 愿意帮助测试和报告问题
- 可以忍受偶尔的bug或不稳定性
- 想要为使音乐助手变得更好做出贡献

**不要使用这个插件如果你：**

- 总是需要一个稳定、生产就绪的系统
- 不愿意解决问题
- 无法忍受音乐设置中的任何停机时间

## 什么是测试版？

测试版发布是功能完整的版本，在成为稳定版之前进行测试。它们通常包括：

- ✨ 稳定版中尚未包含的新功能
- 🔧 性能改进
- 🐛 从之前版本修复的bug
- 🧪 需要实际测试的更改

## 与稳定版的区别

| 方面    | 稳定版               | 测试版                                  |
| ------- | -------------------- | ------------------------------------- |
| 稳定性  | 非常稳定        | 通常稳定但有可能会出现问题 |
| 功能  | 经过充分测试的功能 | 正在测试的新功能             |
| 更新   | 不太频繁        | 更频繁                         |
| 使用场景  | 生产           | 测试和早期采用              |

## 报告问题

作为测试版测试者，你的反馈非常重要！请报告你遇到的问题：

### 报告前

1. 检查插件日志（如果需要，可以全局启用或针对每个提供者启用调试日志）
2. 搜索[现有问题](https://github.com/music-assistant/support)
3. 如果可能，验证问题在稳定版中是否发生

### 报告时

包括：

- 📋 问题的重现步骤
- 📝 插件的完整日志（或从MA的Web界面下载完整日志文件）
- 🔢 音乐助手版本（在Web UI中可见）
- 🎵 你正在使用的音乐提供者
- 🔊 受影响的播放器

**报告位置**：[GitHub支持仓库](https://github.com/music-assistant/support)

## 更新

测试版发布比稳定版更新更频繁。通常每周更新一到多次。

## 已知的限制和注意事项

- 测试版可能会有破坏性更改
- 某些功能可能只部分实现
- 版本之间可能会发生数据库迁移
- 性能优化可能仍在进行中
- 你不能从稳定版迁移到测试版（反之亦然）

提示：如果你想测试测试版，同时保留稳定版，只需停止稳定版插件并运行测试版插件。然后，要恢复到稳定版，只需再次停止测试版插件并启动稳定版。两个插件不能同时激活。

## 获取帮助

- 📖 [测试版文档](https://beta.music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [报告测试版问题](https://github.com/music-assistant/support)
- � [Discord服务器](https://discord.gg/PZQ6RWbfeS)

## 测试版中的新功能

查看[CHANGELOG](CHANGELOG.md)以获取有关此测试版中新增内容的详细信息。

## 测试版最佳实践

1. **定期备份**：始终保持最近的备份
2. **监控日志**：留意日志中的问题
3. **报告问题**：通过报告bug帮助我们改进
4. **保持耐心**：某些功能可能无法完美运行
5. **保持更新**：安装更新以获取最新修复

在Home Assistant中备份音乐助手插件也将包括你的音乐助手数据。请确保在更新到新版本前始终进行备份，以便你可以轻松地恢复到以前的版本！

## 回滚策略

### 如果事情出错了

1. **停止插件**
2. **从备份恢复**（你做了备份，对吧？）
3. **报告问题**

## 贡献

作为测试版测试者，你已经做出了贡献！你还可以：

- 🐛 [报告详细的bug](https://github.com/music-assistant/support)
- 💡 [提出改进建议](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 帮助编写文档
- 💬 在[Discord](https://discord.gg/PZQ6RWbfeS)上帮助他人

访问GitHub上的[音乐助手组织](https://github.com/music-assistant)以做出贡献。

## 发布周期

```
开发 → 测试版 → 稳定版
     ↓          ↓        ↓
   夜间构建   (你！)   用户
```

测试版发布是稳定版发布前的最后测试阶段。你的测试有助于确保所有用户的品质！

## 许可证

音乐助手根据Apache许可证2.0授权。
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
