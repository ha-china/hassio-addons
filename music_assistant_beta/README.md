# 音乐助手（BETA）应用程序

音乐助手官方的BETA版本发布渠道。

## ⚠️ 重要通知

这是音乐助手的BETA版本。它包含了一些新功能和改进，这些将在稳定版本发布前进行测试。

**如果您使用此应用程序，请确保：**

- 您想要提前访问新功能
- 您愿意帮助测试和报告问题
- 您能够忍受偶尔的故障或不稳定性
- 您希望为使音乐助手变得更好做出贡献

**请不要使用此应用程序，如果您：**

- 需要始终稳定且可投入生产的系统
- 不愿意处理问题
- 无法承担音乐设置中的任何停机时间

## 什么是BETA版本？

BETA版本是功能完整的版本，在成为稳定版本之前进行测试。通常包括：

- ✨ 稳定版本中尚未包含的新功能
- 🔧 性能改进
- 🐛 以前版本中的错误修复
- 🧪 需要真实世界测试的变更

## 与稳定版本的差异

| 方面    | 稳定版本               | BETA                                  |
| --------- | -------------------- | ------------------------------------- |
| 稳定性  | 非常稳定              | 一般稳定，可能存在问题              |
| 功能    | 经过充分测试的功能     | 正在测试的新功能                     |
| 更新    | 更新频率较低          | 更新频率较高                         |
| 使用场景 | 生产和部署            | 测试和早期采用                     |

## 报告问题

作为BETA测试者，您的反馈至关重要！请报告您遇到的问题：

### 报告前的准备

1. 检查应用程序日志（如需，请全局或按提供者级别启用`debug`日志）
2. 搜索[现有问题](https://github.com/music-assistant/support)
3. 如果可能，验证问题在稳定版本中是否存在

### 报告时包括：

- 📋 复现问题的步骤
- 📝 应用程序的全局日志（或从MA的Web界面下载完整日志文件）
- 🔢 音乐助手的版本（在Web UI中可见）
- 🎵 您使用的音乐提供者
- 🔊 受影响的播放器

**报告位置**：[GitHub支持仓库](https://github.com/music-assistant/support)

## 更新

BETA版本比稳定版本更新得更频繁。一般来说，每周更新一到两次。

## 已知限制和说明

- BETA版本可能会有破坏性变更
- 一些功能可能只部分实现
- 数据库迁移可能会在版本之间发生
- 性能优化可能仍在进行中
- 您无法从稳定版本迁移（反之亦然）

提示：如果您想测试BETA版本同时保留稳定版本，只需停止稳定应用程序并运行BETA应用程序。然后，恢复到稳定版本就像再次停止BETA应用程序并启动稳定版本一样简单。两个应用程序不能同时激活。

## 获取帮助

- 📖 [BETA文档](https://beta.music-assistant.io)
- 💬 [社区讨论](https://github.com/orgs/music-assistant/discussions)
- 🐛 [报告BETA问题](https://github.com/music-assistant/support)
- � [Discord服务器](https://discord.gg/PZQ6RWbfeS)

## BETA版本中的新功能

检查[变更日志](CHANGELOG.md)以获取此BETA版本中新增内容的详细信息。

## BETA测试最佳实践

1. **定期备份**：始终维护最近的备份
2. **监控日志**：注意日志中的问题
3. **报告问题**：通过报告错误帮助我们改进
4. **耐心**：一些功能可能不会完美工作
5. **保持更新**：安装更新以获取最新的修复

在Home Assistant中备份音乐助手应用程序也将包括您的音乐助手数据。请确保在更新到新版本之前始终进行备份，以便您可以轻松地恢复到以前的版本！

## 回滚策略

### 如果出现问题

1. **停止应用程序**
2. **从备份恢复**（您已经备份了，对吧？）
3. **报告问题**

## 贡献

作为BETA测试者，您已经做出了贡献！您还可以：

- 🐛 [报告详细的错误](https://github.com/music-assistant/support)
- 💡 [提出改进建议](https://github.com/orgs/music-assistant/discussions)
- 🔧 提交拉取请求
- 📝 帮助编写文档
- 💬 在[Discord](https://discord.gg/PZQ6RWbfeS)上帮助他人

访问[音乐助手组织](https://github.com/music-assistant)在GitHub上的页面以进行贡献。

## 发布周期

```
开发 → BETA → 稳定
     ↓          ↓        ↓
   夜间版   (您!)   用户
```

BETA版本是稳定版本发布前的最后测试阶段。您的测试有助于确保所有用户的质量！

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
