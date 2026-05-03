# Sendspin 蓝牙桥接器

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]
![支持 armv7 架构][armv7-shield]

Bridge Music Assistant 的 Sendspin 协议至蓝牙扬声器。
将 Music Assistant 中的音频流传输至连接到您的 Home Assistant 主机的任何蓝牙 A2DP 扬声器。

## 关于

此附加组件允许您在 Music Assistant 中使用蓝牙扬声器作为音频输出播放器。它通过 Sendspin 协议连接到 Music Assistant，并通过 PulseAudio/PipeWire 路由音频流到配对的蓝牙设备。

主要功能：
- 多扬声器支持 — 每个扬声器在 Music Assistant 中都作为一个独立的播放器出现
- 自动蓝牙重新连接
- Web UI 用于状态监控和配置（通过 HA Ingress）
- mDNS 自动发现 Music Assistant 服务器
- 通过 Music Assistant 或直接 PulseAudio 控制音量
- 在 **配置 → Music Assistant** 中的 Music Assistant 重新配置流程
- Web UI 中的引导设置、恢复操作、发布/回收控制以及基于诊断的故障报告预填充

## 文档

完整文档请参阅 [DOCS.md](DOCS.md) 或访问 [文档网站](https://trudenboy.github.io/sendspin-bt-bridge)。

## 更新频道

- 本仓库中检查的附加组件清单是 **稳定** 的 Home Assistant 附加组件变体。
- 安装的附加组件轨迹取决于您从 Home Assistant 商店安装的附加组件变体。
- 桥接器 UI 仅指示当前轨迹和更新指南；它不会切换已安装的附加组件轨迹。
- 当发布 RC 或 Beta 附加组件变体时，切换轨迹意味着需要从 Home Assistant 商店安装匹配的附加组件变体。
- 稳定 / RC / Beta 附加组件变体使用不同的默认 HA Ingress 端口和不同的默认播放器侦听端口范围，因此它们可以在一个 HAOS 主机上并行运行。
- 稳定版本在主机启动后自动启动；RC 和 Beta 默认为手动启动，因此预发布轨迹保持可选。
- HA Ingress 总是继续使用固定的轨迹特定端口（`8080` 稳定，`8081` RC，`8082` beta）。自定义 `WEB_PORT` 仅添加额外的直接监听器；它不会替换 Ingress。
- 在附加组件模式下，身份验证始终由 Home Assistant / Ingress 强制执行；独立的密码切换在这里不适用。
- 仅通过附加组件/Ingress 流才能通过静默 Home Assistant 令牌引导 Music Assistant，因此相关的 UI 辅助程序有意设置为附加组件范围。
- **不要**在同一时间在多个附加组件变体中配置相同的蓝牙扬声器。

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
