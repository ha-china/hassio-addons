[![Signal logo](logo.png)](https://www.signal.org/)

# Signal Messenger

使用此附加组件，借助该附加组件封装的 [Signal CLI REST API](https://github.com/bbernhard/signal-cli-rest-api)，在家辅助系统中发送和接收 Signal 消息。

## 快速开始

1. 将 [生产仓库](https://github.com/haberda/hassio_addons) 添加到家辅助系统应用程序/附加组件商店，并安装 **Signal Messenger**。
2. 选择您的选项并启动附加组件。对于持续接收，我们推荐使用 `json-rpc`；`json-rpc-native` 是原生替代方案。
3. 安装配套 [Signal Messenger REST 集成](https://github.com/haberda/signal-integration)，然后选择正在运行的附加组件并链接或选择您的 Signal 账号。

您也可以在附加组件上选择 **Open Web UI** 以链接账号、管理群组和设备并发送测试消息。管理界面仅通过家辅助系统入口可用，默认采用深色模式，并可选浅色主题。该界面可与集成协同工作，不会消耗接收到的消息。

配套集成提供基于界面的设置、通知实体、传入消息自动化事件、反馈、警报确认和可选的 Assist 对话。有关安装详情和接收权限，请参阅 [设置和配置指南](DOCS.md)。

如果启用了集成在 `normal` 或 `native` 模式下接收消息，请关闭附加组件的 `AUTO_RECEIVE` 选项以避免分竞争收。

## 文档与安全

有关配置、网络、故障排除和安全指导，请参阅 [DOCS.md](DOCS.md)。REST API 没有内置的身份验证：将其放在受信任的网络上，并将其端口暴露到互联网之前，请确保其安全。

对于直接的 API 使用，请参阅 [上游 API 参考](https://bbernhard.github.io/signal-cli-rest-api/)。家辅助系统的 [内置 Signal Messenger 集成](https://www.home-assistant.io/integrations/signal_messenger/) 仍然是发送通知的替代方案。

上游 REST API 由 [bbernhard 及贡献者](https://github.com/bbernhard/signal-cli-rest-api) 开发；此项目将其封装为家辅助系统使用。

## AI 辅助

AI 已用于维护和改进此现有附加组件。管理 Web 界面及其支持实现完全是使用 AI 协助生成的。

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
