# Sendspin Bluetooth Bridge

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]
![支持 armv7 架构][armv7-shield]

将 Music Assistant 的 Sendspin 协议桥接至蓝牙音箱。
将音频流从 Music Assistant 传输到连接至您 Home Assistant 主机的任意蓝牙 A2DP 音箱。

## 关于

此插件允许您在 Music Assistant 中使用蓝牙音箱作为音频输出播放设备。它通过 Sendspin 协议连接到 Music Assistant，并经由 PulseAudio/PipeWire 将音频流路由到配对的蓝牙设备。

主要特性包括：
- 支持多音箱 —— 每个音箱在 Music Assistant 中表现为独立的播放器
- 自动蓝牙重连
- 用于状态监控和配置的网络界面（通过 HA Ingress）
- mDNS Music Assistant 服务器自动发现功能
- 可通过 Music Assistant 或直接 PulseAudio 控制音量
- **配置 → Music Assistant** 中的 Music Assistant 重新配置流
- 网络界面中包含引导式上手、恢复操作、发布/回收控制功能以及由诊断反馈支持的错误报告自动填充

## 文档

有关完整文档，请参阅 [DOCS.md](DOCS.md) 或访问 [文档网站](https://trudenboy.github.io/sendspin-bt-bridge)。

## 更新通道

- 本仓库中提交的插件清单是 **稳定版** Home Assistant 插件变体。
- 已安装插件的跟踪版本取决于您从 Home Assistant 商店安装的插件变体。
- 桥接界面仅显示当前跟踪版本及更新指引；它不会切换已安装插件的跟踪版本。
- 当发布 RC 或 Beta 插件变体时，切换跟踪意味着从 Home Assistant 商店安装相应的插件变体。
- 稳定版 / RC / Beta 插件变体使用不同的默认 HA 入口端口和不同的默认播放器监听端口范围，因此可以在同一个 HAOS 主机上并发运行。
- 稳定版在主机启动后自动运行；RC 和 Beta 默认手动运行，以确保预发布版本保持可选注册状态。
- HA Ingress 始终使用固定的特定跟踪端口（稳定版 `8080`，RC `8081`，Beta `8082`）。自定义 `WEB_PORT` 仅增加一个额外的直接监听器；它不会替换 Ingress。
- 在插件模式下，认证始终由 Home Assistant / Ingress 强制执行；此处独立的密码开关不适用。
- 仅通过插件/Ingress 流才能实现对 Music Assistant 的静默 Home Assistant 代币引导，因此相关的 UI 协助功能有意限定在插件范围内。
- 请勿在同一时间将同一个蓝牙音箱配置到多个插件变体中。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg

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
