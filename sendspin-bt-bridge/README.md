# Sendspin 蓝牙桥接器

![Supports aarch64 Architecture][aarch64-shield]
![Supports amd64 Architecture][amd64-shield]
![Supports armv7 Architecture][armv7-shield]

将 Music Assistant 的 Sendspin 协议桥接到蓝牙扬声器。
将音频流从 Music Assistant 传输到任何连接到你 Home Assistant 主机的蓝牙 A2DP 扬声器。

## 关于本插件

本插件允许你将蓝牙扬声器用作 Music Assistant 的音频输出设备。它通过 Sendspin 协议连接到 Music Assistant，并通过 PulseAudio/PipeWire 将音频流路由到配对的蓝牙设备。

主要功能：
- 多扬声器支持——每个扬声器在 Music Assistant 中显示为独立的播放器
- 自动蓝牙重新连接
- 通过 Web UI 进行状态监控和配置（通过 HA Ingress）
- mDNS 自动发现 Music Assistant 服务器
- 可通过 Music Assistant 或直接的 PulseAudio 控制音量
- 在 "**配置 → Music Assistant**" 中进行 Music Assistant 重新配置
- Web UI 提供引导式上机、恢复操作、发布/回滚控制以及基于诊断的错误报告信息填充

## 文档

关于完整文档，请参阅 [DOCS.md](DOCS.md) 或访问
[文档网站](https://trudenboy.github.io/sendspin-bt-bridge)。

## 更新渠道

- 本仓库中提交的插件清单是 **稳定版** Home Assistant 插件变体。
- 已安装的插件轨道由你从 Home Assistant 商店安装的插件变体决定。
- 桥接 UI 仅指示当前轨道和更新指导；它不会切换已安装的插件轨道。
- 当发布 RC 或 Beta 插件变体时，切换轨道意味着从 Home Assistant 商店安装匹配的插件变体。
- 稳定版 / RC 版 / Beta 版插件变体使用不同的默认 HA Ingress 端口和不同的默认播放器监听端口范围，因此可以在同一个 HAOS 主机上同时运行。
- 稳定版在主机启动后自动启动；RC 和 Beta 版默认手动启动，以便预发布版可选启用。
- HA Ingress 始终使用固定的特定版本端口（稳定版 `8080`、RC 版 `8081`、Beta 版 `8082`）。自定义 `WEB_PORT` 仅添加额外的直接监听器，不会替换 Ingress。
- 在插件模式下，认证始终由 Home Assistant / Ingress 强制执行；独立的密码切换不适用于此场景。
- 针对 Music Assistant 的静默 Home Assistant 令牌引导仅通过插件/Ingress 流程有效，因此相关的 UI 助手被特意限制在插件范围内。
- 请勿在同一时间将同一蓝牙扬声器配置在多个插件变体中。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg

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
