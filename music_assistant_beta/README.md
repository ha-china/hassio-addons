# Music Assistant (BETA) 应用

Music Assistant 的官方 BETA 发布渠道。

## ⚠️ 重要通知

这是 Music Assistant 的 **BETA** 版本。它包含尚未在稳定版中测试的新功能和改进。

**如果您想使用此应用：**

- 希望提前获得新功能
- 愿意帮助测试并报告问题
- 能够容忍偶发错误或系统不稳定
- 希望为让 Music Assistant 变得更优秀做出贡献

**如果您不要使用此应用：**

- 需要随时稳定、就绪可生产的系统
- 不习惯自行排查问题
- 不能承担音乐系统中出现的任何停机时间

## 什么是 BETA？

BETA 版是包含已基本完成功能、在成为稳定版之前进行测试的版本。它们通常包括：

- ✨ 尚未出现在稳定版中的新功能
- 🔧 性能改进
- 🐛 来自先前版本的错误修复
- 🧪 需要真实世界测试的改动

## 与稳定版的区别

| 方面       | 稳定版                  | BETA                      |
| ---------- | ----------------------- | ------------------------- |
| 稳定性     | 高度稳定                | 通常稳定，可能出现一些错误 |
| 功能       | 经过充分测试的功能       | 正在测试的新功能          |
| 更新频率   | 较少                    | 较多                      |
| 使用场景   | 生产环境                | 测试与早期采用            |

## 报告问题

作为 BETA 测试者，您的反馈至关重要！请报告您在测试中遇到的问题：

### 报告前

1. 检查应用日志（如需，请全局或在特定供应商级别启用 `debug` 日志）
2. 搜索 [现有问题](https://github.com/music-assistant/support)
3. 如果可能，验证该问题在稳定版中是否不存在

### 报告时

包含以下内容：

- 📋 复现问题的步骤
- 📝 来自应用的完整日志（或从 Music Assistant 的 Web 界面下载完整的日志文件）
- 🔢 Music Assistant 版本号（在 Web UI 中可见）
- 🎵 使用的音乐供应商
- 🔊 受影响的播放器

**报告地点**：[GitHub 支持仓库](https://github.com/music-assistant/support)

## 更新

BETA 版的更新频率高于稳定版。通常，每周更新一两次。

## 已知限制和说明

- BETA 版本可能包含破坏性变动
- 某些功能可能尚未完全实现
- 版本之间可能会发生数据库迁移
- 性能优化可能仍在进行中
- 您无法从稳定版迁移，反之亦然

提示：如果您希望在保留稳定版的同时测试 BETA 版本，只需停止稳定应用并运行 BETA 应用。要回退到稳定版，只需再次停止 BETA 应用并启动稳定版即可。两个应用不能同时运行。

## 寻求帮助

- 📖 [BETA 文档](https://beta.music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [报告 BETA 问题](https://github.com/music-assistant/support)
- 📢 [Discord 服务器](https://discord.gg/PZQ6RWbfeS)

## BETA 版本的新功能

关于此 BETA 版本的新功能，请查看 [CHANGELOG](CHANGELOG.md)。

## BETA 测试最佳实践

1. **定期备份**：始终保持最近的备份
2. **监控日志**：留意日志以发现任何错误
3. **报告问题**：通过报告错误帮助我们改进
4. **保持耐心**：某些功能可能无法完美工作
5. **保持更新**：安装更新以获得最新的修复

在 Home Assistant 中备份 Music Assistant 应用时，也会包含您的 Music Assistant 数据。请在升级到新版本之前始终执行备份，以便您可以轻松回退到上一个版本！

## 回退策略

### 如果系统出现异常

1. **停止应用**
2. **从备份恢复**（您已经做了备份，对吧？）
3. **报告问题**

## 贡献

作为 BETA 测试者，您已经做出了贡献！此外，您还可以：

- 🐛 [报告详细错误](https://github.com/music-assistant/support)
- 💡 [提出改进建议](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交代码合并请求
- 📝 协助文档编写
- 💬 在 [Discord](https://discord.gg/PZQ6RWbfeS) 上帮助他人

请访问 GitHub 上的 [Music Assistant 组织](https://github.com/music-assistant) 进行贡献。

## 发布周期

```
Development → BETA → Stable
     ↓          ↓        ↓
   Nightly   (您!)   Users
```

BETA 版是稳定版发布前的最终测试阶段。您的测试有助于确保所有用户的质量！

## 许可

Music Assistant 采用 Apache License 2.0 协议授权。

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
