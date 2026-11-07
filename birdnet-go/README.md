# Home Assistant 附加组件：Birdnet-Go

我利用业余时间维护此及其它 Home Assistant 附加组件：跟踪上游更改、HA 更改以及在真实硬件上进行测试需要耗费大量时间（以及一些金钱）。我使用自己 110 多个附加组件中的 5-10 个，因此我会在不直接使用的情况下安装测试机器（并购买一些测试服务，如 vpn），用于故障排除和改进这些附加组件

如果此附加组件为您节省时间或使您的设置更简单，您的支持对我来说将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有关注我仓库的人！请点击图片以星标它，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://reporoster.com/stars/alexbelgium/hassio-addons)](https://github.com/alexbelgium/hassio-addons/stargazers)


![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/birdnet-go/stats.png)

## 关于

[BirdNET-Go](https://github.com/tphakala/birdnet-go/tree/main) 是由 @tphakala 开发的一种用于持续鸟类监控和识别的 AI 解决方案。

此附加组件基于他们的 Docker 镜像。

## 配置

安装后，首次启动附加组件。Webui 可在 <http://homeassistant:8080> 处访问。
您需要一个麦克风：要么使用连接到 HA 的麦克风，要么使用从 rstp 摄像头来的音频流。

音频剪辑文件夹可以通过附加组件选项挂载存储到外部或 SMB 驱动器上，然后指定路径而不是"clips/"。例如，"/mnt/NAS/Birdnet/"。使用 `localdisks`，可以在驱动器名称后给出一个文件夹来只挂载该文件夹：`NAS/Birdnet` 只挂载它，在相同的路径 `/mnt/NAS/Birdnet/`。文件夹挂载需要附加组件版本在 2026-09-19 之后发布。

选项可以通过三种方式配置：

- 附加组件选项

```yaml
BIRDSONGS_FOLDER: /config/clips # 存储音频剪辑的位置 (可以在挂载的驱动器上)
LOG_MAX_SIZE_MB: 50 # 轮转前日志文件的最大大小
LOG_MAX_AGE_DAYS: 7 # 日志保留的最大天数
homeassistant_microphone: false # 当为 true 时，强制音频源为"default" (HA 麦克风)
env_vars: [] # 要传递给容器的额外环境变量
TZ: Etc/UTC # 时区，见 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
mqtt_auto_config: false # 设置为 true 以自动将 Home Assistant MQTT 附加组件布线到 config.yaml 中
mariadb_auto_config: false # 设置为 true 以自动将 Home Assistant MariaDB 附加组件布线到 config.yaml 中 (也禁用 SQLite)
```

- Config.yaml
可以使用位于 /config/db21ed7f_birdnet-go/config.yaml 的 Filebrowser 附加组件配置额外的变量

- Config_env.yaml
可以在那里配置额外的环境变量

### MQTT 和 MariaDB 自动配置 (可选启用)

如果已安装并运行 Home Assistant **MQTT** 附加组件，并在附加组件选项中设置 `mqtt_auto_config: true`，该附加组件将在每次启动时将 HA Mosquitto 凭据直接写入 BirdNET-Go 的 `config.yaml` 中：`realtime.mqtt.enabled`, `broker`, `username` 和 `password` 将被填充，默认主题为 `birdnet`。此外，它会启用 BirdNET-Go 的 **原生 Home Assistant MQTT 自动发现** (`realtime.mqtt.homeassistant.enabled`)，因此检测传感器会自动在 Home Assistant 中显示——**无需手动 MQTT 传感器 YAML** (如果更喜欢自行构建，[HAINTEGRATION.md](./HAINTEGRATION.md) 中的手写传感器仍可用)。消息也会保留 (`realtime.mqtt.retain: true`)，以便传感器状态在 Home Assistant 重启后仍能保持。当选项为 `false` (默认) 时，附加组件仍会记录 Broker 详细信息并在检测到 Mosquitto 时提醒该选项——不会写入任何内容。

如果已安装并运行 Home Assistant **MariaDB** 附加组件，并在附加组件选项中设置 `mariadb_auto_config: true`，该附加组件会将 HA 凭据写入 `output.mysql.*` 并将 `output.sqlite.enabled` 设置为 `false` (数据库名称 `birdnet`，首次连接时创建)。当选项为 `false` (默认) 时，附加组件仅记录凭据，以便您可以手动配置它们。

此外，该附加组件仅在 `config.yaml` 中缺少这些键时才会为 `output.sqlite.path` 和 `logging.file_output.*` 提供默认值，因此通过 BirdNET-Go UI 更改的值现在可以 survives 容器重启。

### 挂载驱动器

此附加组件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此附加组件的安装非常直接，与安装任何其他附加组件相比没有不同。

1. 将我的附加组件存储库添加到您的 Home Assistant 实例（在 supervisor 附加组件存储顶部右侧，或者如果您已配置了我的 HA，请点击下面的按钮）

   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好设置
1. 启动附加组件。
1. 检查附加组件的日志以确保一切正常。
1. 打开 WebUI 并调整软件选项

## 与 HA 的集成

Home Assistant 集成说明在此，[Birdnet-Go 附加组件：Home Assistant 集成](./HAINTEGRATION.md)

## 使用 VLC 设置 RTSP 源

VLC 打开 TCP 端口，但流是 udp。因此需要将 Birdnet-Go 配置为使用 udp。调整 config.yaml 文件以使用 udp 或使用 birdnet-go 命令行选项：

`--rtsptransport udp --rtsp rtsp://192.168.1.21:8080/stream.sdp`

### Linux 指令

请使用以下命令之一在不使用界面的情况下运行 vlc：

```bash
# 这应该适用于大多数设备
/usr/bin/vlc -I dummy -vvv alsa://hw:0,0 --no-sout-all --sout-keep --sout '#transcode{acodec=mpga}:rtp{sdp=rtsp://:8080/stream.sdp}'

# 如果第一条命令不起作用，请尝试这个
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

Systemd 服务文件示例。请根据需要调整 user:group。如果您想以 root 身份运行，您可能需要使用 vlc-wrapper 而不是 vlc 运行。

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

暂时不可用

## 支持

在 github 上创建一个 issue

---

![illustration](https://raw.githubusercontent.com/tphakala/birdnet-go/main/doc/BirdNET-Go-dashboard.webp)

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
