# Sendspin 蓝牙桥接器

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]
![支持 armv7 架构][armv7-shield]

Sendspin 协议将 Music Assistant 桥接到蓝牙音箱。
将音频流从 Music Assistant 传输到您 Home Assistant 主机上连接的任何蓝牙 A2DP 音箱。

## 关于本插件

此插件允许您使用蓝牙音箱作为 Music Assistant 的音频输出播放器。它通过 Sendspin 协议连接至 Music Assistant，并通过 PulseAudio/PipeWire 将音频流路由到配对的蓝牙设备。

主要特性：
- 多音箱支持 —— 每个音箱在 Music Assistant 中显示为独立的播放设备
- 自动蓝牙重连
- 通过 Home Assistant Ingress 提供的 Web UI 用于状态监控和配置
- mDNS 自动发现 Music Assistant 服务器
- 通过 Music Assistant 或直接通过 PulseAudio 控制音量
- 在 **配置 → Music Assistant** 中进行 Music Assistant 重新配置流程图
- Web UI 中包含引导式启动、恢复操作、发布/收回控制及基于 Bug 报告的前置表单

## 文档

完整文档请访问 [DOCS.md](DOCS.md)，或访问 [文档站点](https://trudenboy.github.io/sendspin-bt-bridge)。

## 更新通道

- 本仓库中的已提交插件清单是 Home Assistant 插件的 **稳定版** 变体。
- 安装插件的轨道由您从 Home Assistant 商店安装的插件变体决定。
- 桥接 UI 仅显示当前轨道和更新指引；它不会切换已安装插件的轨道。
- 当发布 RC 或 Beta 插件变体时，切换轨道意味着从 Home Assistant 商店安装匹配的插件变体。
- 稳定版 / RC / Beta 插件变体使用不同的默认 HA Ingress 端口和不同的默认播放器监听端口范围，因此可以在同一 HAOS 主机上并行运行。
- 稳定版在主机启动后自动运行；RC 和 Beta 默认为手动启动，以确保预发布轨道保持可选启用。
- HA Ingress 始终使用固定的轨道特定端口（稳定版为 `8080`，RC 版为 `8081`，Beta 版为 `8082`）。自定义 `WEB_PORT` 仅添加额外的直接监听器，不会取代 Ingress。
- 在插件模式下，认证始终由 Home Assistant / Ingress 强制执行；此处不适用于独立的密码切换功能。
- 针对 Music Assistant 的静默 Home Assistant 令牌初始化仅通过插件/Ingress 流程有效，因此相关的 UI 辅助功能有意限定在插件范围内。
- 请勿在同一时间将相同的蓝牙音箱配置在多个插件变体中。

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
