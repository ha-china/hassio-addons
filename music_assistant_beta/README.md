# 音乐助手（测试版）插件

音乐助手的官方测试版发布渠道。

## ⚠️ 重要通知

这是音乐助手的**测试版**。它包含在稳定发布之前进行测试的新功能和改进。

**如果您：**

- 希望提前使用新功能
- 愿意帮助测试和报告问题
- 可以忍受偶尔的错误或不稳定性
- 希望为使音乐助手变得更好做出贡献

**请不要使用此插件：**

- 您始终需要一个稳定、生产就绪的系统
- 您不舒适于解决问题
- 您无法承受音乐设置中的任何停机时间

## 什么是测试版？

测试版发布是功能完整的版本，在成为稳定发布之前进行测试。它们通常包括：

- ✨ 稳定版中尚未包含的新功能
- 🔧 性能改进
- 🐛 之前版本的错误修复
- 🧪 需要实际测试的更改

## 与稳定版的差异

| 方面    | 稳定版               | 测试版                                  |
| ------- | -------------------- | ------------------------------------- |
| 稳定性  | 非常稳定        | 通常稳定但有可能会出现问题             |
| 功能  | 经过充分测试的功能 | 正在测试的新功能             |
| 更新   | 更少频繁        | 更频繁                         |
| 用途  | 生产           | 测试和早期采用              |

## 报告问题

作为测试版测试者，您的反馈非常宝贵！请报告您遇到的问题：

### 报告前

1. 检查插件日志（如果需要，可以全局启用或在每个提供者级别启用`debug`日志记录）
2. 搜索[现有问题](https://github.com/music-assistant/support)
3. 如果可能，请验证问题在稳定版中不会发生

### 报告时

包括：

- 📋 重复问题的步骤
- 📝 插件的完整日志（或从MA的Web界面下载完整日志文件）
- 🔢 音乐助手版本（在Web UI中可见）
- 🎵 您正在使用哪些音乐提供者
- 🔊 哪些播放器受到影响

**报告地点**：[GitHub支持存储库](https://github.com/music-assistant/support)

## 更新

测试版发布比稳定版更新更频繁。通常每周更新一次或几次。

## 已知限制和注意事项

- 测试版可能会有破坏性更改
- 某些功能可能只有部分实现
- 版本之间可能会发生数据库迁移
- 性能优化可能仍在进行中
- 您不能从稳定版迁移到测试版（反之亦然）

提示：如果您想在保留稳定版的同时测试测试版，只需停止稳定版插件并运行测试版插件。然后，只需再次停止测试版插件并启动稳定版即可轻松恢复到稳定版。两个插件不能同时激活。

## 获取帮助

- 📖 [测试版文档](https://beta.music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [报告测试版问题](https://github.com/music-assistant/support)
- � [Discord服务器](https://discord.gg/PZQ6RWbfeS)

## 测试版中的新功能

查看[CHANGELOG.md](CHANGELOG.md)以获取此测试版中新增内容的详细信息。

## 测试版最佳实践

1. **定期备份**：始终保持最近的备份
2. **监控日志**：留意日志以发现问题
3. **报告问题**：通过报告错误帮助我们改进
4. **保持耐心**：某些功能可能无法完美运行
5. **保持更新**：安装更新以获取最新修复

在Home Assistant中备份音乐助手插件也将包括您的音乐助手数据。请确保在更新到新版本之前始终进行备份，以便您可以轻松地恢复到以前的版本！

## 回滚策略

### 如果事情出错了

1. **停止插件**
2. **从备份恢复**（您应该已经备份了，对吧？）
3. **报告问题**

## 贡献

作为测试版测试者，您已经在做出贡献！您还可以：

- 🐛 [报告详细错误](https://github.com/music-assistant/support)
- 💡 [提出改进建议](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 帮助编写文档
- 💬 在[Discord](https://discord.gg/PZQ6RWbfeS)上帮助他人

访问GitHub上的[音乐助手组织](https://github.com/music-assistant)以做出贡献。

## 发布周期

```
开发 → 测试版 → 稳定版
     ↓          ↓        ↓
   夜间构建   (您!)   用户
```

测试版发布是稳定版发布前的最后测试阶段。您的测试有助于确保所有用户的质量！

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
