# 音乐助手（BETA）应用

音乐助手官方的BETA版本发布渠道。

## ⚠️ 重要通知

这是音乐助手的**BETA**版本。它包含了一些新功能和改进，这些功能在稳定版本发布之前正在进行测试。

**如果您使用此应用：**

- 想要提前访问新功能
- 愿意帮助测试并报告问题
- 可以容忍偶尔的故障或不稳定
- 想要为使音乐助手变得更好做出贡献

**请不要使用此应用：**

- 需要始终稳定的、生产就绪的系统
- 不习惯于解决问题
- 无法承受音乐设置中的任何停机时间

## 什么是BETA？

BETA版本是功能完整的版本，在成为稳定版本之前正在进行测试。它们通常包括：

- ✨ 稳定版本中尚未包含的新功能
- 🔧 性能改进
- 🐛 之前版本的错误修复
- 🧪 需要现实世界测试的更改

## 与稳定版的区别

| 方面    | 稳定版               | BETA                                  |
| ------- | -------------------- | ------------------------------------- |
| 稳定性  | 非常稳定            | 通常稳定，但可能存在问题 |
| 功能    | 经过良好测试的功能 | 正在测试的新功能             |
| 更新    | 更少频率            | 更频繁                             |
| 用例    | 生产环境            | 测试和早期采用              |

## 报告问题

作为BETA测试者，您的反馈非常有价值！请报告您遇到的问题：

### 报告前的准备

1. 检查应用日志（如有需要，在全局或按提供者级别启用`debug`日志）
2. 搜索[现有问题](https://github.com/music-assistant/support)
3. 如果可能，验证问题是否在稳定版本中发生

### 报告时包括：

- 📋 重复问题的步骤
- 📝 应用的完整日志（或从MA的Web界面下载完整的日志文件）
- 🔢 音乐助手版本（在Web UI中可见）
- 🎵 您使用的音乐提供者
- 🔊 受影响的播放器

**报告位置**：[GitHub支持存储库](https://github.com/music-assistant/support)

## 更新

BETA版本比稳定版本更新得更频繁。一般来说，每周更新一次或更多。

## 已知限制和注意事项

- BETA版本可能会有破坏性更改
- 一些功能可能只部分实现
- 之间可能发生数据库迁移
- 性能优化可能仍在进行中
- 您无法从稳定版本迁移（反之亦然）

提示：如果您想同时测试BETA版本并保留稳定版本，只需停止稳定应用并运行BETA应用即可。要回滚到稳定版本，只需再次停止BETA应用并启动稳定应用即可。两个应用不能同时激活。

## 获取帮助

- 📖 [BETA文档](https://beta.music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [报告BETA问题](https://github.com/music-assistant/support)
- � [Discord服务器](https://discord.gg/PZQ6RWbfeS)

## BETA版本中的新功能

检查[变更日志](CHANGELOG.md)以获取有关此BETA版本中新增内容的详细信息。

## BETA测试最佳实践

1. **定期备份**：始终保留最近的备份
2. **监控日志**：注意日志中的问题
3. **报告问题**：通过报告错误帮助我们改进
4. **耐心**：一些功能可能不会完美工作
5. **保持更新**：安装更新以获取最新的修复

在Home Assistant中对音乐助手应用进行备份也会包括您的音乐助手数据。请确保在更新到新版本之前始终进行备份，这样您就可以轻松地回滚到上一个版本！

## 回滚策略

### 如果出现问题

1. **停止应用**
2. **从备份中恢复**（您做了备份，对吧？）
3. **报告问题**

## 贡献

作为BETA测试者，您已经做出了贡献！您还可以：

- 🐛 [报告详细的错误](https://github.com/music-assistant/support)
- 💡 [提出改进建议](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 帮助编写文档
- 💬 在[Discord](https://discord.gg/PZQ6RWbfeS)上帮助他人

访问GitHub上的[音乐助手组织](https://github.com/music-assistant)以进行贡献。

## 发布周期

```
开发 → BETA → 稳定
     ↓          ↓        ↓
   夜间版   (您!)   用户
```

BETA版本是稳定版本发布前的最终测试阶段。您的测试有助于确保所有用户的质量！

## 许可证

音乐助手根据Apache License 2.0许可。
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
