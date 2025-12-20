# AegisBot Home Assistant Add-on

![AegisBot Logo](icon.png)

生产就绪的 Telegram 聊天机器人，具有 AI 驱动的 FAQ 和安全功能。

## 功能

- 🛡️ **高级管理**：具有 RBAC 的自动警告、踢出和封禁系统
- 🧠 **AI 意图分析**：检测诈骗和恶意意图的启发式引擎
- 🔄 **实时仪表板**：WebSocket 驱动的实时事件流
- 📈 **高级分析**：交互式安全趋势和可视化
- 🌍 **完整的 i18n**：多语言支持（EN/DE）
- 🚫 **智能过滤**：自动学习的黑名单建议

## 安装

查看 [文档](DOCS.md) 以获取详细的安装说明。

## 快速入门

1. 将此存储库添加到 Home Assistant
2. 安装 AegisBot 插件
3. 配置您的 Telegram Bot Token
4. 启动插件
5. 通过 Ingress 访问

## 配置

| 选项                  | 必填 | 描述                          |
| ----------------------- | -------- | ------------------------------------ |
| `telegram_bot_token`    | ✅       | 来自 @BotFather 的 Bot API Token        |
| `telegram_bot_username` | ✅       | Bot 用户名（不带 @）             |
| `github_token`          | ❌\*     | 私有仓库访问所需的令牌     |
| `version`               | ❌       | 要安装的版本（默认：最新） |

\*如果存储库是私有的，则必需

## 支持

- [GitHub Issues](https://github.com/FaserF/AegisBot/issues)
- [文档](DOCS.md)
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
