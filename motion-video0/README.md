# ✨ - `motion` Classic _插件_

此 [Home Assistant](http://home-assistant.io) 插件利用 [motion 项目](https://motion-project.github.io/)、[YOLO](https://pjreddie.com/darknet/yolo/) 以及其他 AI 技术，用于检测和分类图像中的实体。_motion 项目_ 软件提供了广泛的视频捕获功能，可以从各种来源捕获视频流，包括 `RSTP`、`HTTP` 和 `MJPEG` 网络摄像头。也支持本地连接的视频源（例如 `/dev/video0`）。

## 相关

此插件与其他组件和服务交互：

1. [`motion-ai`](http://github.com/dcmartin/motion-ai/tree/master/README.md) - 用于与 `motion` _插件_ 一起使用的自动化 Home Assistant 配置器（见下文）。
1. `MQTT` 消息服务；使用 [`mosquitto`](https://github.com/home-assistant/hassio-addons/tree/master/mosquitto) 或 [HiveMQ](https://github.com/hassio-addons/addon-mqtt) 插件
1. `FTP` (_可选_) FTP 守护进程，用于接收网络摄像头视频；使用 [` addon-ftp`](https://github.com/hassio-addons/addon-ftp) 插件

此外，在 [`motion-ai`](http://github.com/dcmartin/motion-ai) 仓库中指定了三个 [Open Horizon](http://github.com/dcmartin/open-horizon) AI 服务；它们可用于识别实体、人脸和车牌。

1. [`yolo4motion`](https://github.com/dcmartin/open-horizon/blob/master/services/yolo4motion/README.md) - 使用脚本 [`sh/yolo4motion.sh`](http://github.com/dcmartin/motion-ai/tree/master/sh/yolo4motion.sh) 
1. [`face4motion`](https://github.com/dcmartin/open-horizon/blob/master/services/face4motion/README.md) - 使用脚本 [`sh/face4motion.sh`](http://github.com/dcmartin/motion-ai/tree/master/sh/face4motion.sh)
1. [`alpr4motion`](https://github.com/dcmartin/open-horizon/blob/master/services/alpr4motion/README.md) - 使用脚本 [`sh/alpr4motion.sh`](http://github.com/dcmartin/motion-ai/tree/master/sh/alpr4motion.sh)

## 容器

此 _插件_ 适用于以下架构，并在 Docker Hub 中提供，例如 [`amd64`](https://hub.docker.com/repository/docker/dcmartin/amd64-addon-motion-video0) 版本。

![](https://img.shields.io/badge/amd64-yes-green.svg)[![](https://images.microbadger.com/badges/image/dcmartin/amd64-addon-motion-video0.svg)](https://microbadger.com/images/dcmartin/amd64-addon-motion-video0)[![](https://images.microbadger.com/badges/version/dcmartin/amd64-addon-motion-video0.svg)](https://microbadger.com/images/dcmartin/amd64-addon-motion-video0)[![](https://img.shields.io/docker/pulls/dcmartin/amd64-addon-motion-video0.svg)](https://hub.docker.com/r/dcmartin/amd64-addon-motion-video0)

![](https://img.shields.io/badge/aarch64-yes-green.svg)[![](https://images.microbadger.com/badges/image/dcmartin/aarch64-addon-motion-video0.svg)](https://microbadger.com/images/dcmartin/aarch64-addon-motion-video0)[![](https://images.microbadger.com/badges/version/dcmartin/aarch64-addon-motion-video0.svg)](https://microbadger.com/images/dcmartin/aarch64-addon-motion-video0)[![](https://img.shields.io/docker/pulls/dcmartin/aarch64-addon-motion-video0.svg)](https://hub.docker.com/r/dcmartin/aarch64-addon-motion-video0)

![](https://img.shields.io/badge/armv7-yes-green.svg)[![](https://images.microbadger.com/badges/image/dcmartin/armv7-addon-motion-video0.svg)](https://microbadger.com/images/dcmartin/armv7-addon-motion-video0)[![](https://images.microbadger.com/badges/version/dcmartin/armv7-addon-motion-video0.svg)](https://microbadger.com/images/dcmartin/armv7-addon-motion-video0)[![](https://img.shields.io/docker/pulls/dcmartin/armv7-addon-motion-video0.svg)](https://hub.docker.com/r/dcmartin/armv7-addon-motion-video0)

# 配置

配置 [说明](https://github.com/dcmartin/hassio-addons/blob/master/motion-video0/DOCS.md) 提供了所有选项的信息；然而，为了简洁起见，有三个组件需要定义以成功运行：

+ `mqtt` - MQTT 中继的 IP 地址（FQDN）、用户名、密码和端口
+ `group` - 相机子集的标识符；_默认_：`motion`
+ `device` - 组中每个设备的唯一标识符；**不得**使用保留的 MQTT 字符（例如 `-,+,#,/`）
+ `client` - 用于侦听的 `device` 标识符；可以是 `+` 以指示所有设备；_默认_：`+`
+ `cameras` - 单个相机规范的数组（见下文）

## `cameras`

将相机集成到 **HA** 需要三个属性：

+ `name` - 插件定义的相机标识符（注意 MQTT 主题**保留**字符）
+ `type` - 相机源类型；可以是 `local`、`netcam`、`ftpd`、`mqtt`
+ `netcam_url` - 源的实时流地址，例如 `rtsp://192.168.1.223/live`
+ `netcam_userpass` - 源的认证凭据，例如 `username:password`

此外，还有两个附加属性是可选的：

+ `icon` - 从 [Material Design Icons](http://materialdesignicons.com/) 选择
+ `w3w` - 由 [What3Words](http://what3words.com) 识别的相机位置

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

所有发送的 `MQTT` 消息都使用以指定的 `group` 开头的主题，例如：

+ `<group>/{name}/{camera}` -- 检测到的运动的 JSON 负载
+ `<group>/{name}/{camera}/lost` -- 检测到的运动的 JSON 负载
+ `<group>/{name}/{camera}/event/start` -- 检测到的运动的 JSON 负载
+ `<group>/{name}/{camera}/event/end` -- 检测到的运动的 JSON 负载
+ `<group>/{name}/{camera}/image` -- JPEG 负载的图像（**参见** `post_pictures`)
+ `<group>/{name}/{camera}/image-average` -- 平均事件的 JPEG 负载
+ `<group>/{name}/{camera}/image-blend` -- 混合事件的 JPEG 负载（50%）
+ `<group>/{name}/{camera}/image-composite` -- 复合事件的 JPEG 负载
+ `<group>/{name}/{camera}/image-animated` -- 事件的 GIF 负载
+ `<group>/{name}/{camera}/image-animated-mask` -- 事件的 GIF 负载（作为 B/W 掩码）

## 示例输出

[![motion 示例](https://github.com/dcmartin/addon-motion/blob/master/docs/samples/motion-sample.png?raw=true)](http://github.com/dcmartin/addon-motion/docs/samples/motion-sample.png)

# `MQTT`
需要 `MQTT` 中继；默认的 Mosquitto _插件_ 足够，但必须配置适当的认证，例如：

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

# 其他信息
Motion 软件包提供了广泛的 [文档](motiondoc) 关于可用参数。几乎所有参数都是可用的。
JSON 配置选项使用与 Motion 文档中相同的名称。

## 更新日志 & 发布
发布基于语义版本控制，并使用 `MAJOR.MINOR.PATCH` 格式。简而言之，版本将根据以下情况增加：

- `MAJOR`：不兼容或主要更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的 bug 修复和软件包更新。

## 作者 & 贡献者
David C Martin (github@dcmartin.com)

[提交](https://github.com/dcmartin/hassio-addons/motion/commits/master)
[贡献者](https://github.com/dcmartin/hassio-addons/motion/graphs/contributors)
[dcmartin](https://github.com/dcmartin)
[问题](https://github.com/dcmartin/hassio-addons/motion/issues)
[keepchangelog](http://keepachangelog.com/en/1.0.0/)
[发布](https://github.com/dcmartin/hassio-addons/motion/releases)
[仓库](https://github.com/dcmartin/hassio-addons)
[motionpkg](https://motion-project.github.io]
[motiondoc](https://motion-project.github.io/motion_config.html)
[watsonvr](https://www.ibm.com/watson/services/visual-recognition)
[digitsgit](https://github.com/nvidia/digits)
[digits](https://developer.nvidia.com/digits)

<img width="1" src="//clustrmaps.com/map_v2.png?cl=ffffff&w=a&t=n&d=WFrWvzsRgpv7HiSkfWewUMTwpnMKbRdrAm2unNYv3gE" />