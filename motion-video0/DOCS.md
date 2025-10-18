# 🌟 `motion` 经典配置
`motion` 插件处理视频信息，生成运动检测 JSON 事件、多帧 GIF 动画，以及一个包含检测、分类和注释的代表性帧（注意：需要 Open Horizon `yolo4motion` 服务）。此插件设计用于与多种来源一起工作，包括：

+ `3GP` - 运动检测型 WebCam（例如 Linksys WCV80n）；通过 `FTP` 社区插件接收
+ `MJPEG` - 提供运动 JPEG 实时流的网络摄像头
+ `V4L2` - Linux（v2）视频，用于直接连接摄像头，例如索尼 PlayStation3 Eye 摄像头或 RaspberryPi v2

此插件的配置关键选项；_组_、_设备_和_摄像头_选项标识计算机集合和相关视频来源；`MQTT` 代理是接收此插件消息以及启用 [`motion-ai`](http://github.com/dcmartin/motion-ai) 解决方案的**必需**。

## `group`、`device` 和 `client`
标识符区分集合和个体；摄像头标识符必须在组内唯一。

+ `group` - 设备集合的标识符；默认：`motion`
+ `device` - 计算机的标识符；默认：无
+ `client` - 限制主题订阅到一个或所有（注意：`+`）设备

⭐ **标识符****仅**包含小写字母 (`a-z`)、数字 (`0-9`) 和下划线 (`_`)。

## `mqtt`
+ `mqtt.host` - 如果在局域网中使用单个 MQTT 代理，使用 TCP/IPv4 地址，例如 `192.168.1.40`。
+ `mqtt.port` - TCP/IP 端口号；默认：`1883`
+ `mqtt.username` - 访问代理的凭证；默认：无
+ `mqtt.password` - 访问代理的凭证；默认：无

## `cameras` **必需**
+ `cameras[].name` - 摄像头的标识符；在 _设备_和 _组_中唯一；默认：无
+ `cameras[].type` - `netcam`、`ftp`、`mqtt`；`local` 仅对 [motion-video0](http://github.com/dcmartin/addon-motion-video) 版本有效
+ `cameras[].w3w` - 摄像头的位置，作为三个字符串；来自 what3words.com；无则使用 `[]`

## `cameras` _可选_
+ `cameras[].top` - 图标顶部位置百分比（0-95）
+ `cameras[].left` - 图标左侧位置百分比（0-95）
+ `cameras[].icon` - 来自 materialdesignicons.com 的摄像头图标（注意：不包括 `mdi:` 组件）
+ `cameras[].framerate` - 捕获/尝试的每秒帧数
+ `cameras[].threshold_percent` - 像素变化百分比；用 `threshold` 覆盖计数
+ `cameras[].threshold` - 变化的像素数

### 示例
```
group: motion
device: kelispond
client: kelispond
timezone: America/Los_Angeles
mqtt:
  host: core-mosquitto
  port: '1883'
  username: username
  password: password
cameras:
  - name: kelispond
    type: local
    w3w: []
    framerate: 3
    threshold_percent: 1
```

# 详细信息
以下部分详细介绍了可用于配置插件的属性。

### 摄像头类型：`network`
网络摄像头直接通过插件使用三种传输方式之一访问：`MJPEG`、`RTSP` 或 `HTTP`；不同摄像头需要特定的传输方式和相关属性，例如凭证。示例如下：

#### `MJPEG`
```
  - name: shedcam
    type: netcam
    w3w: []
    width: 640
    height: 480
    netcam_url: 'mjpeg://192.168.1.92:8090/1'
    netcam_userpass: 'username:password'
    threshold_percent: 1
```

#### `RTSP`
```
  - name: testcam
    type: netcam
    w3w: []
    framerate: 3
    netcam_url: 'rtsp://192.168.93.3/live'
    threshold_percent: 1
    netcam_userpass: 'username:password'
    width: 1920
    height: 1080
```

#### `HTTP`
```
  - name: road
    w3w: []
    netcam_url: 'http://192.168.1.36:8081/img/video.mjpeg'
    type: netcam
    netcam_userpass: 'username:password'
    width: 640
    height: 480
```

### 摄像头类型：`ftpd`

```
  - name: backyard
    w3w: []
    type: ftpd
    netcam_url: 'http://192.168.1.183/img/video.mjpeg'
    icon: texture-box
    netcam_userpass: '!secret netcam-userpass'
```

# 示例 (_子集_)

```
...
group: motion
device: raspberrypi
client: raspberrypi
timezone: America/Los_Angeles
cameras:
  - name: local
    type: local
    w3w: []
    top: 50
    left: 50
    icon: webcam
    width: 640
    height: 480
    framerate: 10
    minimum_motion_frames: 30
    event_gap: 60
    threshold: 1000
  - name: network
    type: netcam
    w3w:
      - what
      - three
      - words
    icon: door
    netcam_url: 'rtsp://192.168.1.224/live'
    netcam_userpass: 'username:password'
    width: 640
    height: 360
    framerate: 5
    event_gap: 30
    threshold_percent: 2