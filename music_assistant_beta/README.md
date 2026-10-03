# Music Assistant (BETA) App

Music Assistant 的官方 BETA 发布通道。

## ⚠️ 重要通知

这是 Music Assistant 的 **BETA** 版本。它包含在稳定版发布前进行测试的新特性和改进功能。

**您可能需要使用此 App 的情况：**

- 想要提前体验新功能
- 愿意协助测试并报告问题
- 可以容忍偶发的 bug 或不稳定性
- 想要参与帮助改进 Music Assistant

**请勿使用此 App 的情况：**

- 在任何时候都需要一个稳定且可投入生产使用的系统
- 不适应排查问题
- 无法承受音乐系统中出现的任何停机时间

## 什么是 BETA 版？

BETA 版是在功能完整后、转为稳定版之前的测试版本。它们通常包含以下内容：

- ✨ 尚未进入稳定版的新功能
- 🔧 性能改进
- 🐛 来自之前版本的 bug 修复
- 🧪 需要真实世界测试的变更

## 与稳定版的区别

| 方面        | 稳定版                    | BETA 版                                      |
| ----------- | ------------------------- | -------------------------------------------- |
| 稳定性      | 高度稳定                  | 总体稳定，但可能出现某些问题                 |
| 功能        | 经过充分测试的功能        | 正在测试中的新功能                         |
| 更新频率    | 更新较少                  | 更新更为频繁                               |
| 使用场景    | 生产环境                  | 测试与早期采用                               |

## 报告问题

作为 BETA 测试者，您的反馈至关重要！请报告您在测试中遇到的问题：

### 报告前处理

1. 检查应用日志（如需要，可全球启用或针对特定提供者启用 `debug` 日志级别）
2. 搜索 [现有问题](https://github.com/music-assistant/support)
3. 如果可能，验证问题未稳定版中出现

### 报告时包含以下信息：

- 📋 复现问题的步骤
- 📝 应用的完整日志（或从 MA 网络界面下载完整的日志文件）
- 🔢 Music Assistant 版本号（可在 Web UI 中查看）
- 🎵 您使用的音乐提供者
- 🔊 受影响的播放设备

**报告方式**：[GitHub 支持仓库](https://github.com/music-assistant/support)

## 更新

BETA 版的更新频率高于稳定版。通常周期为每周一次。

## 已知限制与提示

- BETA 版本可能会有破坏性变更
- 某些功能可能尚未完全实现
- 版本之间可能发生数据库迁移
- 性能优化可能仍在进行中
- 无法从稳定版迁移（反之亦然）

💡 提示：如果您希望同时保持稳定版本并测试 BETA 版本，只需停止稳定版 App 并运行 BETA 版本 App。返回稳定版只需要再次停止 BETA App 并启动稳定版即可。两个 App 不能同时运行。

## 获取帮助

- 📖 [BETA 文档](https://beta.music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [报告 BETA 问题](https://github.com/music-assistant/support)
- 📞 [Discord 服务器](https://discord.gg/PZQ6RWbfeS)

## BETA 版新增内容

查看 [CHANGELOG](CHANGELOG.md) 获取此 BETA 版本新增内容的详细信息。

## BETA 测试最佳实践

1. **定期备份**：始终维护最近的备份
2. **监控日志**：关注日志以发现潜在问题
3. **报告问题**：通过报告 bug 帮助我们改进
4. **保持耐心**：某些功能可能尚未正常工作
5. **保持更新**：安装更新以获取最新修复

通过将 Music Assistant App 备份到 Home Assistant，您还可以包含 Music Assistant 的数据。请在升级到新版本之前始终进行备份，以便可以轻松恢复到之前的版本！

## 回滚策略

### 如果出现问题

1. **停止 App**
2. **从备份恢复**（您之前已经备份了吗？）
3. **报告问题**

## 贡献代码

作为 BETA 测试者，您已经在做出贡献！您还可以：

- 🐛 [报告详细 bug](https://github.com/music-assistant/support)
- 💡 [提出改进建议](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交 pull requests
- 📝 协助文档编写
- 💬 在 [Discord](https://discord.gg/PZQ6RWbfeS) 上帮助他人

请访问 GitHub 上的 [Music Assistant 组织](https://github.com/music-assistant) 了解更多贡献方式。

## 发布周期

```
Development → BETA → Stable
     ↓          ↓        ↓
   Nightly   (您!)   Users
```

BETA 版是稳定版发布前的最终测试阶段。您的测试有助于确保所有用户的高质量体验！

## 授权协议

Music Assistant 采用 Apache License 2.0 授权。

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
