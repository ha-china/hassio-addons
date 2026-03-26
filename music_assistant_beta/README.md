# 音乐助手（Beta）插件

音乐助手官方的Beta发布频道。

## ⚠️ 重要通知

这是音乐助手的Beta版本。它包含了在稳定版本发布前正在测试的新功能和改进。

**以下情况下请使用此插件：**

- 想要提前体验新功能
- 愿意帮助测试并报告问题
- 可以容忍偶尔的bug或不稳定性
- 想要为改进音乐助手做出贡献

**请不要使用此插件：**

- 总是需要稳定、生产就绪的系统
- 不擅长处理问题
- 不能承受音乐设置中的任何停机时间

## 什么是Beta版本？

Beta版本是功能完整的版本，在成为稳定版本之前正在测试。通常包括：

- ✨ 稳定版本中尚未包含的新功能
- 🔧 性能改进
- 🐛 从前一个版本修复的bug
- 🧪 需要真实世界测试的变更

## 与稳定版的差异

| 方面    | 稳定版               | Beta                                  |
| --------- | -------------------- | ------------------------------------- |
| 稳定性  | 非常稳定            | 一般稳定，可能有问题                   |
| 功能    | 经过良好测试的功能  | 正在测试的新功能                     |
| 更新    | 更新频率较低        | 更新频率更高                         |
| 使用场景 | 生产环境            | 测试与早期采用                      |

## 报告问题

作为Beta测试者，您的反馈非常有价值！请报告您遇到的问题：

### 报告前的注意事项

1. 检查插件日志（如果需要，可在全局或按提供者级别启用`debug`日志）
2. 搜索[现有问题](https://github.com/music-assistant/support)
3. 如果可能，请验证问题是否在稳定版本中发生

### 报告时的注意事项

包括：

- 📋 复现问题的步骤
- 📝 插件的全日志（或在MA的Web界面中下载完整日志文件）
- 🔢 音乐助手版本（在Web UI中可见）
- 🎵 您使用的音乐提供者
- 🔊 受影响的播放器

**报告地点**：[GitHub支持仓库](https://github.com/music-assistant/support)

## 更新

Beta版本比稳定版本更新更频繁。通常，每周更新一两次。

## 已知限制和注意事项

- Beta版本可能有破坏性变更
- 一些功能可能只部分实现
- 两个版本之间可能发生数据库迁移
- 性能优化可能仍在进行中
- 您不能从稳定版本迁移（反之亦然）

提示：如果您想测试Beta版本同时保留稳定版本，只需停止稳定插件并运行Beta插件。要回滚到稳定版本，然后只需再次停止Beta插件并启动稳定插件即可。两个插件不能同时激活。

## 获取帮助

- 📖 [Beta文档](https://beta.music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [报告Beta问题](https://github.com/music-assistant/support)
- � [Discord服务器](https://discord.gg/PZQ6RWbfeS)

## Beta版本中的新功能

检查[变更日志](CHANGELOG.md)以获取有关此Beta版本中新功能的详细信息。

## Beta测试最佳实践

1. **定期备份**：始终保持最新的备份
2. **监控日志**：注意日志中可能出现的问题
3. **报告问题**：帮助我们改进，报告bug
4. **耐心等待**：某些功能可能不太完美
5. **保持更新**：安装更新以获取最新的修复

在Home Assistant中对音乐助手插件的备份也会包含您的音乐助手数据。请确保在更新到新版本之前始终创建备份，这样您可以轻松地回滚到上一个版本！

## 回滚策略

### 如果出现问题

1. **停止插件**
2. **从备份中恢复**（您做了备份，对吧？）
3. **报告问题**

## 贡献

作为Beta测试者，您已经在贡献！您还可以：

- 🐛 [报告详细的bug](https://github.com/music-assistant/support)
- 💡 [建议改进](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交pull请求
- 📝 帮助编写文档
- 💬 在[Discord](https://discord.gg/PZQ6RWbfeS)上帮助他人

访问GitHub上的[音乐助手组织](https://github.com/music-assistant)以贡献。

## 发布周期

```
开发 → Beta → 稳定
     ↓          ↓        ↓
   夜间版   (您!)   用户
```

Beta版本是稳定版本发布前的最后测试阶段。您的测试有助于确保所有用户的质量！

## 许可证

音乐助手采用Apache License 2.0许可。
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
