# Music Assistant (BETA) 应用

Music Assistant 的官方 BETA 发布渠道。

## ⚠️ 重要通知

这是 Music Assistant 的 **BETA** 版本。它包含在稳定版发布前进行测试的新特性和改进。

**请您使用此应用，如果：**

- 希望提前获取新功能
- 愿意帮助测试和报告问题
- 可以容忍偶尔出现的错误或不稳定
- 希望为让 Music Assistant 变得更好做出贡献

**请不要使用此应用，如果：**

- 任何时候都需要稳定、经过生产验证的系统
- 不习惯自行排查问题
- 无法承担音乐设置中的任何停机时间

## 什么是 BETA？

BETA 版本是在变成稳定版之前进行测试的功能完整版本。它们通常包括：

- ✨ 尚未进入稳定版的新特性
- 🔧 性能改进
- 🐛 来自之前版本的错误修复
- 🧪 需要进行真实世界测试的更改

## 与稳定版的区别

| 方面     | 稳定版                   | BETA                                  |
| --------- | ------------------------ | ------------------------------------- |
| 稳定性   | 高度稳定                 | 通常稳定，但可能出现一些问题          |
| 功能     | 经过良好测试的特性       | 正在测试的新功能                      |
| 更新     | 较少频繁                 | 更频繁                                |
| 使用场景 | 生产环境                 | 测试与早期采用                        |

## 报告问题

作为 BETA 测试人员，您的反馈至关重要！请报告您遇到的任何错误：

### 报告之前

1. 检查应用日志（如果需要，全球范围或针对特定服务提供者级别启用 `debug` 日志）
2. 搜索 [现有问题](https://github.com/music-assistant/support)
3. 如果可能，验证问题在未稳定版本中是否也会出现

### 报告时

包括以下内容：

- 📋 重现问题的步骤
- 📝 应用的完整日志（或从 MA 的 Web 界面下载完整的日志文件）
- 🔢 Music Assistant 版本（在 Web UI 中可见）
- 🎵 您使用的音乐服务提供商
- 🔊 受影响的播放器

**报告位置**：[GitHub 支持仓库](https://github.com/music-assistant/support)

## 更新

相比稳定版，BETA 版本的更新频率更高。通常每周一次或多一次。

## 已知限制和说明

- BETA 版本可能包含破坏性更改
- 某些功能可能仅部分实现
- 版本之间可能会进行数据库迁移
- 性能优化可能仍在进行中
- 您无法从稳定版迁移（反之亦然）

提示：如果您希望在保留稳定版的情况下测试 BETA 版本，只需停止稳定版应用并运行 BETA 应用即可。随后转回稳定版同样简单——只需停止 BETA 应用并启动稳定版即可。两款应用不能同时运行。

## 获取帮助

- 📖 [BETA 文档](https://beta.music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [报告 BETA 问题](https://github.com/music-assistant/support)
- � [Discord 服务器](https://discord.gg/PZQ6RWbfeS)

## BETA 版本新增内容

详细查看 [CHANGELOG](CHANGELOG.md) 以了解此 BETA 版本新增内容的具体情况。

## Beta 测试最佳实践

1. **定期备份**：始终保持最近的备份
2. **监测日志**：留意日志以发现任何错误
3. **报告问题**：通过报告错误帮助我们改进
4. **保持耐心**：某些功能可能无法完美工作
5. **保持更新**：安装更新以获取最新的修复

在 Home Assistant 中备份 Music Assistant 应用时，也会包含您的 Music Assistant 数据。请确保在升级到新版本前始终进行备份，以便您可以轻松恢复到之前的版本！

## 回滚策略

### 如果出现故障

1. **停止应用**
2. **从备份中恢复**（您已经有一个备份，对吧？）
3. **报告问题**

## 贡献

作为 BETA 测试人员，您已经在做出贡献！您也可以：

- 🐛 [报告详细错误](https://github.com/music-assistant/support)
- 💡 [提出改进建议](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 协助文档编写
- 💬 在 [Discord](https://discord.gg/PZQ6RWbfeS) 上帮助他人

访问 GitHub 上的 [Music Assistant 组织](https://github.com/music-assistant) 以做出贡献。

## 发布周期

```
Development → BETA → Stable
     ↓          ↓        ↓
   Nightly   (You!)   Users
```

BETA 版本是稳定版发布前的最后测试阶段。您的测试有助于确保所有用户所依赖的质量！

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
