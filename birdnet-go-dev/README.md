# Home Assistant 附加组件：Birdnet-Go (从源码编译)

> **⚠️ 测试版构建。** 这是 [标准 Birdnet-Go 附加组件](https://github.com/alexbelgium/hassio-addons/tree/master/birdnet-go) 的一个特殊变体。它不拉取预构建的 `ghcr.io/tphakala/birdnet-go` 镜像，而是**从 [`alexbelgium/birdnet-go`](https://github.com/alexbelgium/birdnet-go) 分支编译 BirdNET-Go** (fork)。在构建时，它会同步 fork 的 `main` 分支与 `tphakala/birdnet-go` 上游分支，并**实时合并每一个已开放且非草稿 (in review) 的拉取请求** (参见 [`merge-prs.sh`](./merge-prs.sh))，使得二进制的动态镜像体现出上游 main 分支加上所有当前正在审核中的工作成果。YAML 文件中的所有内容均与标准附加组件相同。

我利用业余时间维护此及其他 Home Assistant 附加组件：跟上上游变化、Home Assistant 变化以及真实的硬件测试需要耗费大量时间（和一部分金钱）。我使用的附加组件数量在 5-10 个之间（我拥有超过 110 个附加组件），因此我有规律地安装测试机（并购买一些我自用但不常用的测试服务如 vpn）来调试和改进附加组件。

如果这个附加组件为您节省时间或简化了您的设置，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)
![进入点](https://img.shields.io/badge/dynamic/yaml?label=进入点&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/买我一杯咖啡-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/通过 PayPal 捐赠-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我的仓库点星！点击下方的图片给其点星，它就会出现在右上角。谢谢！_

[![Alexbelgium/hassio-addons 的 Stars 仓库名单](https://reporoster.com/stars/alexbelgium/hassio-addons)](https://github.com/alexbelgium/hassio-addons/stargazers)


![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/birdnet-go/stats.png)

## 关于

[BirdNET-Go](https://github.com/tphakala/birdnet-go/tree/main) 是由 @tphakala 开发的用于持续鸟类监控和识别的 AI 解决方案。

该附加组件基于他们的 Docker 镜像。

## 配置

安装后，首次启动附加组件。WebUI 可在 <http://homeassistant:8080> 找到。
您需要一个麦克风：要么使用连接到 HA 的麦克风，要么使用 rtmp 摄像头的音频流。

音频剪辑文件夹可以通过附加组件选项挂载到外部或 SMB 驱动器并指定路径来存储，而不是使用"clips/"。例如，"/mnt/NAS/Birdnet/"

有三种方式可以配置选项：

- 附加组件选项

```yaml
BIRDSONGS_FOLDER: /config/clips # 音频剪辑存储位置 (可以是挂载驱动器)
LOG_MAX_SIZE_MB: 50 # 保留旋转之前的最大日志文件大小
LOG_MAX_AGE_DAYS: 7 # 最大日志保留天数
homeassistant_microphone: false # 设为 true 时，强制音频源为"default" (HA 麦克风)
env_vars: [] # 传递给容器的额外环境变量
TZ: Etc/UTC # 时区，见 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
mqtt_auto_config: false # 设为 true 以自动将 Home Assistant MQTT 附加组件配置到 config.yaml
mariadb_auto_config: false # 设为 true 以自动将 Home Assistant MariaDB 附加组件配置到 config.yaml (同时禁用 SQLite)
```

- config.yaml
可以通过位于 /config/db21ed7f_birdnet-go/config.yaml 的 Filebrowser 附加组件使用 config.yaml 文件配置额外的变量。

- Config_env.yaml
可以在这里配置额外的环境变量。

### MQTT 和 MariaDB 自动配置（主动入门）

如果安装了且正在运行 Home Assistant **MQTT** 附加组件，并且在附加组件选项中设置了 `mqtt_auto_config: true`，附加组件将在每次启动时直接将 HA Mosquitto 凭据写入 BirdNET-Go 的 `config.yaml`：`realtime.mqtt.enabled`、`broker`、`username` 和 `password` 将被填充，主题默认为 `birdnet`。此外，它会启用 BirdNET-Go 的 **原生 Home Assistant MQTT 自动发现** (`realtime.mqtt.homeassistant.enabled`)，使得检测传感器自动出现在 Home Assistant 中——**无需手动 MQTT 传感器 YAML** (如果您更喜欢构建自己的传感器，[HAINTEGRATION.md](./HAINTEGRATION.md) 中的手写传感器仍然可用)。消息也会被保留 (`realtime.mqtt.retain: true`)，这样传感器状态就能在 Home Assistant 重启后保留。当该选项为 `false` (默认) 时，附加组件仍然记录 Broker 详细信息并在检测到 Mosquitto 时提醒您该选项——什么都不写。

如果安装了且正在运行 Home Assistant **MariaDB** 附加组件，并且设置了 `mariadb_auto_config: true`，附加组件会将 HA 凭据写入 `output.mysql.*`，并将 `output.sqlite.enabled` 设置为 `false` (数据库名称 `birdnet`，首次连接时创建)。当该选项为 `false` (默认) 时，附加组件仅记录凭据，以便您可以手动配置。

此外，附加组件仅在以下键缺失自 `config.yaml` 时才为 `output.sqlite.path` 和 `logging.file_output.*` 设置默认值，因此您现在可以通过 BirdNET-Go UI 更改的值能幸存容器重启。

### 挂载驱动器

此附加组件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 定制脚本和环境变量

此附加组件通过 `addon_config` 映射支持定制脚本和环境变量：

- **定制脚本**：参见 [运行附加组件中的定制脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（大写或小写字母名称）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此附加组件的安装非常简单，与其他附加组件的安装没有不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例 (在 supervisor 附加组件商店的右上角，或者如果您配置了我的 HA，可以点击下方的按钮)

   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 检查附加组件的日志，看看一切是否顺利进行。
1. 打开 WebUI 并调整软件设置。

## 与 HA 集成

Home Assistant 集成说明见此，[Birdnet-Go 附加组件：Home Assistant 集成](./HAINTEGRATION.md)

## 使用 VLC 设置 RTSP 源

VLC 打开 TCP 端口，但流是 UDP。出于这个原因，您需要配置 Birdnet-Go 使用 UDP。调整 config.yaml 文件为 UDP 或使用 birdnet-go 命令行选项：

`--rtsptransport udp --rtsp rtsp://192.168.1.21:8080/stream.sdp`

### Linux 说明

使用以下命令之一在 VLC 中不打开界面运行：

```bash
# 此命令应该适用于大多数设备
/usr/bin/vlc -I dummy -vvv alsa://hw:0,0 --no-sout-all --sout-keep --sout '#transcode{acodec=mpga}:rtp{sdp=rtsp://:8080/stream.sdp}'

# 如果第一条命令不起作用，请尝试此命令
/usr/bin/vlc -I dummy -vvv alsa://hw:4,0 --no-sout-all --sout-keep --sout '#rtp{sdp=rtsp://:8080/stream.sdp}'
```

运行 `arecord -l` 以获取麦克风硬件信息

```text
**** List of CAPTURE Hardware Devices ****
card 0: PCH [HDA Intel PCH], device 0: ALC3220 Analog [ALC3220 Analog]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: S7 [SteelSeries Arctis 7], device 0: USB Audio [USB Audio]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 3: Nano [Yeti Nano], device 0: USB Audio [USB Audio]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 4: Device [USB PnP Sound Device], device 0: USB Audio [USB Audio]
  Subdevices: 0/1
  Subdevice #0: subdevice #0
```

hw:4,0 = **card 4**: Device [USB PnP Sound Device], **device 0**: USB Audio [USB Audio]

Systemd 服务文件示例。请根据情况调整 user/group。如果您希望以 root 身份运行，您可能需要运行 vlc-wrapper 而不是 vlc。

```text
[Unit]
Description=VLC Birdnet RTSP Server
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
StandardOutput=journal
ExecStart=/usr/bin/vlc -I dummy -vvv alsa://hw:0,0 --sout '#transcode{acodec=mpga}:rtp{sdp=rtsp://:8080/stream.sdp}'
User=someone
Group=somegroup

[Install]
WantedBy=multi-user.target
```

## 常见问题

尚不可用

## 支持

在 GitHub 上创建问题

---

![插图](https://raw.githubusercontent.com/tphakala/birdnet-go/main/doc/BirdNET-Go-dashboard.webp)

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
