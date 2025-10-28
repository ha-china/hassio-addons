# 音乐助手 (BETA) 插件

音乐助手的官方 BETA 发布渠道。

## ⚠️ 重要通知

这是一个音乐助手的 **BETA** 版本。它包含了在稳定发布之前进行测试的新功能和改进。

**如果你：**

- 想要提前访问新功能
- 愿意帮助测试和报告问题
- 可以容忍偶尔的 Bug 或不稳定
- 想要为使音乐助手变得更好做出贡献

**不要使用这个插件，如果你：**

- 需要一个始终稳定的、生产就绪的系统
- 不Comfortable 解决问题
- 无法忍受音乐设置中的任何停机时间

## 什么是 BETA？

BETA 发布是功能完整的版本，在成为稳定发布之前进行测试。它们通常包括：

- ✨ 稳定版中尚未包含的新功能
- 🔧 性能改进
- 🐛 之前版本的 Bug 修复
- 🧪 需要实际测试的更改

## 与稳定版的差异

| 方面    | 稳定版               | BETA                                  |
| ------- | -------------------- | ------------------------------------- |
| 稳定性  | 非常稳定        | 通常稳定但有可能会出现问题 |
| 功能  | 经过充分测试的功能 | 正在测试的新功能             |
| 更新   | 不太频繁        | 更频繁                         |
| 用途  | 生产           | 测试和早期采用              |

## 报告问题

作为一名 BETA 测试者，你的反馈非常有价值！请报告你遇到的问题：

### 报告之前

1. 检查插件的日志（如果需要，可以全局启用或按提供者级别启用 `debug` 日志）
2. 搜索 [现有问题](https://github.com/music-assistant/support)
3. 如果可能，验证问题在稳定版中不会发生

### 报告时

包括：

- 📋 重复问题的步骤
- 📝 插件的完整日志（或从 MA 的 Web 界面下载完整的日志文件）
- 🔢 音乐助手版本（在 Web UI 中可见）
- 🎵 你正在使用哪些音乐提供者
- 🔊 哪些播放器受影响

**报告位置**：[GitHub 支持仓库](https://github.com/music-assistant/support)

## 更新

BETA 发布比稳定版更新更频繁。通常每周更新一到两次。

## 已知的限制和注意事项

- BETA 版本可能会有破坏性更改
- 某些功能可能只有部分实现
- 版本之间可能会发生数据库迁移
- 性能优化可能仍在进行中
- 你不能从稳定版迁移（反之亦然）

提示：如果你想测试 BETA 版本同时保留稳定版，只需停止稳定插件并运行 BETA 插件。然后回退到稳定版就像再次停止 BETA 插件并启动稳定版一样简单。两个插件不能同时激活。

## 获取帮助

- 📖 [BETA 文档](https://beta.music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [报告 BETA 问题](https://github.com/music-assistant/support)
- � [Discord 服务器](https://discord.gg/PZQ6RWbfeS)

## BETA 中新增内容

查看 [CHANGELOG](CHANGELOG.md) 获取此 BETA 版本中新增内容的详细信息。

## BETA 测试最佳实践

1. **定期备份**：始终维护最近的备份
2. **监控日志**：留意日志以发现问题
3. **报告问题**：通过报告 Bug 帮助我们改进
4. **保持耐心**：某些功能可能无法完美工作
5. **保持更新**：安装更新以获取最新的修复

在 Home Assistant 中备份音乐助手插件也将包括你的音乐助手数据。请确保在更新到新版本之前始终进行备份，以便你可以轻松地回退到以前的版本！

## 回滚策略

### 如果事情出错了

1. **停止插件**
2. **从备份恢复**（你备份了吗？）
3. **报告问题**

## 贡献

作为一名 BETA 测试者，你已经做出了贡献！你还可以：

- 🐛 [报告详细的 Bug](https://github.com/music-assistant/support)
- 💡 [提出改进建议](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 帮助编写文档
- 💬 在 [Discord](https://discord.gg/PZQ6RWbfeS) 上帮助其他人

访问 GitHub 上的 [音乐助手组织](https://github.com/music-assistant) 进行贡献。

## 发布周期

```
开发 → BETA → 稳定
     ↓          ↓        ↓
   夜间构建   (你!)   用户
```

BETA 发布是稳定发布前的最终测试阶段。你的测试有助于确保所有用户的质量！

## 许可证

音乐助手根据 Apache 许可证 2.0 授权。
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
