# &#127916; - `motion` Classic _add-on_

此 [Home Assistant](http://home-assistant.io) _add-on_ 利用 [motion 项目](https://motion-project.github.io/)、[YOLO](https://pjreddie.com/darknet/yolo/) 和其他人工智能技术来检测和分类图像中的实体（entity）。_motion 项目_软件提供了一套广泛的功能，以捕获来自多种源的视频流，包括 `RSTP`、`HTTP` 和 `MJPEG` 网络摄像头。而且还支持本地连接的视频源（例如 `/dev/video0`）。

## 相关 (Related)

此 _add-on_ 与其他组件和服务交互：

1. [`motion-ai`](http://github.com/dcmartin/motion-ai/tree/master/README.md) - 专为 `motion` _addon_ 设计的自动化 Home Assistant 配置器（参见下文）。
1. `MQTT` 消息服务；请使用 [`mosquitto`](https://github.com/home-assistant/hassio-addons/tree/master/mosquitto) 或 [HiveMQ](https://github.com/hassio-addons/addon-mqtt) _add-on_
1. `FTP` (_可选_) FTP 守护进程，用于接收网络摄像头的视频；请使用 [`addon-ftp`](https://github.com/hassio-addons/addon-ftp) _add-on_

此外，[`motion-ai`](http://github.com/dcmartin/motion-ai) 仓库中还指定了三个 [Open Horizon](http://github.com/dcmartin/open-horizon) 人工智能服务；它们可用于识别实体、人脸和车牌。

1. [`yolo4motion`](https://github.com/dcmartin/open-horizon/blob/master/services/yolo4motion/README.md) - 使用脚本 [`sh/yolo4motion.sh`](http://github.com/dcmartin/motion-ai/tree/master/sh/yolo4motion.sh)
1. [`face4motion`](https://github.com/dcmartin/open-horizon/blob/master/services/face4motion/README.md) - 使用脚本 [`sh/face4motion.sh`](http://github.com/dcmartin/motion-ai/tree/master/sh/face4motion.sh)
1. [`alpr4motion`](https://github.com/dcmartin/open-horizon/blob/master/services/alpr4motion/README.md) - 使用脚本 [`sh/alpr4motion.sh`](http://github.com/dcmartin/motion-ai/tree/master/sh/alpr4motion.sh)

## 容器 (Containers)

此 _add-on_ 是为以下架构构建的，并在 Docker Hub 上可用（例如 [`amd64`](https://hub.docker.com/repository/docker/dcmartin/amd64-addon-motion-video0) 版本）。

![](https://img.shields.io/badge/amd64-yes-green.svg)[![](https://images.microbadger.com/badges/image/dcmartin/amd64-addon-motion-video0.svg)](https://microbadger.com/images/dcmartin/amd64-addon-motion-video0)[![](https://images.microbadger.com/badges/version/dcmartin/amd64-addon-motion-video0.svg)](https://microbadger.com/images/dcmartin/amd64-addon-motion-video0)[![](https://img.shields.io/docker/pulls/dcmartin/amd64-addon-motion-video0.svg)](https://hub.docker.com/r/dcmartin/amd64-addon-motion-video0)

![](https://img.shields.io/badge/aarch64-yes-green.svg)[![](https://images.microbadger.com/badges/image/dcmartin/aarch64-addon-motion-video0.svg)](https://microbadger.com/images/dcmartin/aarch64-addon-motion-video0)[![](https://images.microbadger.com/badges/version/dcmartin/aarch64-addon-motion-video0.svg)](https://microbadger.com/images/dcmartin/aarch64-addon-motion-video0)[![](https://img.shields.io/docker/pulls/dcmartin/aarch64-addon-motion-video0.svg)](https://hub.docker.com/r/dcmartin/aarch64-addon-motion-video0)

![](https://img.shields.io/badge/armv7-yes-green.svg)[![](https://images.microbadger.com/badges/image/dcmartin/armv7-addon-motion-video0.svg)](https://microbadger.com/images/dcmartin/armv7-addon-motion-video0)[![](https://images.microbadger.com/badges/version/dcmartin/armv7-addon-motion-video0.svg)](https://microbadger.com/images/dcmartin/armv7-addon-motion-video0)[![](https://img.shields.io/docker/pulls/dcmartin/armv7-addon-motion-video0.svg)](https://hub.docker.com/r/dcmartin/armv7-addon-motion-video0)

# 配置 (Configuration)

配置 [说明](https://github.com/dcmartin/hassio-addons/blob/master/motion-video0/DOCS.md) 提供了所有选项的信息；但为简洁起见，有三个组件需要定义才能成功运行：

+ `mqtt` - `MQTT` 服务器的 IP 地址（FQDN）、用户名、密码和端口
+ `group` - 摄像头子集的标识符；_默认值_：`motion`
+ `device` - _group_ 中每个设备的唯一标识符；**不得**使用保留的 MQTT 字符（例如 `-,+,#,/`）
+ `client` - `device` 用于监听的标识符；可以是 `+` 以表示所有设备；_默认值_：`+`
+ `cameras` - 单个摄像头配置数组（见下文）

## `cameras`

有三种必需属性用于将摄像头集成到 **HA** 中：

+ `name` - _add-on_ 定义的摄像头标识符（注意：MQTT 主题中的 **reserved** 字符）
+ `type` - 摄像头源类型；可以是 `local`、`netcam`、`ftpd`、`mqtt`
+ `netcam_url` - 源的直播流地址，例如 `rtsp://192.168.1.223/live`
+ `netcam_userpass` - 源的认证凭据，例如 `username:password`

此外，还有两个可选的额外属性：

+ `icon` - 从 [Material Design Icons](http://materialdesignicons.com/) 中选择
+ `w3w` - [What3Words](http://what3words.com) 识别的摄像头位置

```
[
  {
    "name": "sheshed",
    "type": "netcam",
    "netcam_url": "rtsp://192.168.1.223/live",
    "netcam_userpass": "!secret netcam-userpass",
    "icon": "cctv",
    "w3w": ["varieties","usage","racks"]
  }
]
```

所有发送的 `MQTT` 消息均使用以指定 `group` 开头的主题，例如：

+ `<group>/{name}/{camera}` -- 检测到的运动 JSON 负载
+ `<group>/{name}/{camera}/lost` -- 检测到的运动 JSON 负载
+ `<group>/{name}/{camera}/event/start` -- 检测到的运动 JSON 负载
+ `<group>/{name}/{camera}/event/end` -- 检测到的运动 JSON 负载
+ `<group>/{name}/{camera}/image` -- 图像 JPEG 负载 (**见** `post_pictures`)
+ `<group>/{name}/{camera}/image-average` -- 平均事件 JPEG 负载
+ `<group>/{name}/{camera}/image-blend` -- 混合事件 (50%) JPEG 负载
+ `<group>/{name}/{camera}/image-composite` -- 组合事件 JPEG 负载
+ `<group>/{name}/{camera}/image-animated` -- 事件 GIF 负载
+ `<group>/{name}/{camera}/image-animated-mask` -- 事件 (作为黑白掩膜) GIF 负载

## 示例输出

[![motion sample](https://github.com/dcmartin/addon-motion/blob/master/docs/samples/motion-sample.png?raw=true)](http://github.com/dcmartin/addon-motion/docs/samples/motion-sample.png)

# `MQTT`

需要 `MQTT` 服务器；默认的 Mosquitto _add-on_ 已足够，但必须配置适当的认证，例如：

```
logins:
  - username: username
    password: password
anonymous: false
customize:
  active: false
  folder: mosquitto
certfile: fullchain.pem
keyfile: privkey.pem
require_certificate: false
```

# 更多信息

Motion 软件包在可用参数方面有广泛的 [文档][motiondoc]。几乎所有参数都可用。JSON 配置选项在 Motion 文档中使用相同的名称提供。

## 变更日志与发布 (Changelog & Releases)

发布基于语义化版本控制 (Semantic Versioning)，并使用 `MAJOR.MINOR.PATCH` 格式。简而言之，版本将根据以下内容递增：

- ``MAJOR``: 不兼容的或主要更改 (Incompatible or major changes)。
- ``MINOR``: 向后兼容的新功能和新功能增强 (Backwards-compatible new features and enhancements)。
- ``PATCH``: 向后兼容的 bug 修复和软件包更新 (Backwards-compatible bugfixes and package updates)。

## 作者与贡献者 (Authors & contributors)

David C Martin (github@dcmartin.com)

[commits]: https://github.com/dcmartin/hassio-addons/motion/commits/master
[contributors]: https://github.com/dcmartin/hassio-addons/motion/graphs/contributors
[dcmartin]: https://github.com/dcmartin
[issue]: https://github.com/dcmartin/hassio-addons/motion/issues
[keepchangelog]: http://keepachangelog.com/en/1.0.0/
[releases]: https://github.com/dcmartin/hassio-addons/motion/releases
[repository]: https://github.com/dcmartin/hassio-addons
[motionpkg]: https://motion-project.github.io]
[motiondoc]: https://motion-project.github.io/motion_config.html
[watsonvr]: https://www.ibm.com/watson/services/visual-recognition
[digitsgit]: https://github.com/nvidia/digits
[digits]: https://developer.nvidia.com/digits

<img width="1" src="//clustrmaps.com/map_v2.png?cl=ffffff&w=a&t=n&d=WFrWvzsRgpv7HiSkfWewUMTwpnMKbRdrAm2unNYv3gE" />

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
