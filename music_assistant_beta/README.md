# 音乐助手（BETA）插件

音乐助手的官方BETA发布渠道。

## ⚠️ 重要通知

这是一个音乐助手的**BETA**版本。它包含了在稳定发布之前进行测试的新功能和改进。

**如果你：**

- 希望提前获取新功能
- 愿意帮助测试和报告问题
- 可以忍受偶尔的bug或不稳定性
- 希望为使音乐助手变得更好做出贡献

**请不要使用此插件如果你：**

- 任何时候都需要一个稳定、生产就绪的系统
- 不愿意解决问题
- 无法承受音乐设置中的任何停机时间

## 什么是BETA？

BETA发布是功能完整的版本，在成为稳定发布之前进行测试。它们通常包括：

- ✨ 稳定版本中尚未包含的新功能
- 🔧 性能改进
- 🐛 之前版本的bug修复
- 🧪 需要实际测试的更改

## 与稳定版本的差异

| 方面    | 稳定版本              | BETA                                  |
| ------- | --------------------- | ------------------------------------- |
| 稳定性  | 非常稳定              | 通常稳定但有可能会出现问题          |
| 功能    | 经过充分测试的功能    | 正在测试的新功能                     |
| 更新    | 不太频繁              | 更频繁                               |
| 用途    | 生产环境              | 测试和早期采用                       |

## 报告问题

作为一名BETA测试者，你的反馈至关重要！请报告你遇到的问题：

### 报告问题前

1. 检查插件日志（如果需要，可以全局启用或按提供者级别启用`debug`日志记录）
2. 搜索[现有问题](https://github.com/music-assistant/support)
3. 如果可能，验证问题在稳定版本中是否发生

### 报告时

包括：

- 📋 重现问题的步骤
- 📝 插件的完整日志（或从MA的Web界面下载完整日志文件）
- 🔢 音乐助手版本（在Web UI中可见）
- 🎵 你正在使用的音乐提供者
- 🔊 受影响的播放器

**报告位置**：[GitHub支持仓库](https://github.com/music-assistant/support)

## 更新

BETA发布比稳定版本更新更频繁。通常每周更新一到两次。

## 已知的限制和注意事项

- BETA版本可能会有破坏性更改
- 某些功能可能只部分实现
- 版本之间可能会进行数据库迁移
- 性能优化可能仍在进行中
- 你不能从稳定版本迁移到BETA版本（反之亦然）

提示：如果你想测试BETA版本同时保留稳定版本，只需停止稳定插件并运行BETA插件。要回到稳定版本，只需再次停止BETA插件并启动稳定版本。两个插件不能同时激活。

## 获取帮助

- 📖 [BETA文档](https://beta.music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [报告BETA问题](https://github.com/music-assistant/support)
- � [Discord服务器](https://discord.gg/PZQ6RWbfeS)

## BETA中的新功能

查看[CHANGELOG](CHANGELOG.md)以获取有关此BETA版本中新增内容的详细信息。

## BETA测试最佳实践

1. **定期备份**：始终保留最近的备份
2. **监控日志**：注意日志中的问题
3. **报告问题**：通过报告错误帮助我们改进
4. **保持耐心**：某些功能可能无法完美工作
5. **保持更新**：安装更新以获取最新修复

在Home Assistant中备份音乐助手插件也将包括你的音乐助手数据。请确保在更新到新版本之前始终进行备份，以便你可以轻松地恢复到以前的版本！

## 回滚策略

### 如果事情出错了

1. **停止插件**
2. **从备份恢复**（你备份了吗？）
3. **报告问题**

## 贡献

作为一名BETA测试者，你已经做出了贡献！你还可以：

- 🐛 [报告详细的bug](https://github.com/music-assistant/support)
- 💡 [提出改进建议](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 帮助编写文档
- 💬 在[Discord](https://discord.gg/PZQ6RWbfeS)上帮助他人

访问GitHub上的[音乐助手组织](https://github.com/music-assistant)以做出贡献。

## 发布周期

```
开发 → BETA → 稳定
     ↓          ↓        ↓
   夜间构建   (你!)   用户
```

BETA发布是稳定发布前的最终测试阶段。你的测试有助于确保所有用户的品质！

## 许可证

音乐助手根据Apache License 2.0许可证授权。
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
