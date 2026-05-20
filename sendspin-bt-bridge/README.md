# Sendspin 蓝牙桥接器

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]
![支持 armv7 架构][armv7-shield]

桥接器音乐助手将 Sendspin 协议传输到蓝牙音箱。
从音乐助手流式传输音频到任何连接到您 Home Assistant 主机的蓝牙 A2DP 音箱。

## 关于

此插件允许您使用蓝牙音箱作为音乐助手的音频输出播放器。它通过 Sendspin 协议连接到音乐助手，并通过 PulseAudio/PipeWire 将音频流路由到已配对的蓝牙设备。

主要功能：
- 多音箱支持 - 每个音箱在音乐助手中作为独立的播放器出现
- 自动蓝牙重新连接
- 通过 HA Ingress 提供的 Web UI 用于状态监控和配置
- mDNS 自动发现音乐助手服务器
- 通过音乐助手或直接 PulseAudio 控制音量
- 在 **配置 → 音乐助手** 中的音乐助手重新配置流程
- Web UI 中的引导设置、恢复操作、释放/回收控制以及基于诊断的 bug 报告预填充

## 文档

完整的文档请参阅 [DOCS.md](DOCS.md) 或访问 [文档网站](https://trudenboy.github.io/sendspin-bt-bridge)。

## 更新频道

- 此存储库中检入的插件清单是 **稳定** 的 Home Assistant 插件版本。
- 安装的插件轨迹取决于您从 Home Assistant 商店安装的插件版本。
- 桥接器 UI 仅指示当前轨迹和更新指导；它不会切换已安装的插件轨迹。
- 当发布 RC 或 Beta 插件版本时，切换轨迹意味着从 Home Assistant 商店安装匹配的插件版本。
- 稳定 / RC / Beta 插件版本使用不同的默认 HA Ingress 端口和不同的默认播放器侦听端口范围，因此它们可以在一个 HAOS 主机上并行运行。
- 稳定版本在主机启动后自动启动；RC 和 Beta 版本默认为手动启动，以便预发布轨迹保持为可选。
- HA Ingress 总是继续使用固定的轨迹特定端口（稳定版 `8080`，RC 版本 `8081`，beta 版本 `8082`）。自定义 `WEB_PORT` 只会增加额外的直接监听器；它不会替换 Ingress。
- 在插件模式下，身份验证始终由 Home Assistant / Ingress 执行；独立的密码切换在这里不适用。
- 只有通过插件/Ingress 流，音乐助手的静默 Home Assistant 令牌引导才能正常工作，因此相关的 UI 辅助工具有意限定为插件范围。
- **不要** 同时在一个插件版本中配置同一个蓝牙音箱。

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
