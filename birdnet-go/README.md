# Home assistant 附加组件：Birdnet-Go

我在空闲时间内维护 Home Assistant 的其他附加组件：跟上上游更改、HA 更改，并在真实硬件上测试需要大量时间（和一些金钱）。我使用的附加组件有 110 个以上，通常有 5-10 个安装得比较频繁，因此我会安装测试机（以及一些我自己不使用的测试服务，如 vpn）来排查和改进附加组件。

如果这个附加组件节省了你时间或简化了你的设置，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)
![入口网络](https://img.shields.io/badge/dynamic/yaml?label=入口网络&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20代码库)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![开发人员](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=开发人员)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_谢谢所有为我仓库星标的人！想要星标请点击下图，然后它会出现在右上角。谢谢！_

[![Star 者仓库名单 - @alexbelgium/hassio-addons](https://reporoster.com/stars/alexbelgium/hassio-addons)](https://github.com/alexbelgium/hassio-addons/stargazers)


![下载量走势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/birdnet-go/stats.png)

## 关于

[BirdNET-Go](https://github.com/tphakala/birdnet-go/tree/main) 是由 @tphakala 开发的人工智能解决方案，用于持续的鸟类监测和识别。

该附加组件基于他们的 docker 镜像。

## 配置

安装后，首次启动附加组件。Webui 可以在 <http://homeassistant:8080> 找到。
你需要一个麦克风：要么是使用连接到 HA 的麦克风，要么是使用 rstp 摄像头的音频流。

音频剪辑文件夹可以存储在外部或 SMB 驱动器上，通过在附加组件选项中进行挂载，然后指定路径而不是"clips/"。例如，"/mnt/NAS/Birdnet/"

选项可以通过三种方式进行配置：

- 附加组件选项

```yaml
BIRDSONGS_FOLDER: /config/clips # 存储音频剪辑的位置（可以在挂载的驱动器上）
LOG_MAX_SIZE_MB: 50 # 日志文件大小在轮转之前的最大值
LOG_MAX_AGE_DAYS: 7 # 日志保留的最大天数
homeassistant_microphone: false # 当为 true 时，强制音频源为"default"(HA 麦克风)
env_vars: [] # 传递给容器的额外环境变量
TZ: Etc/UTC # 时区，见 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
mqtt_auto_config: false # 设置为 true 以自动将 Home Assistant MQTT 附加组件配置到 config.yaml
mariadb_auto_config: false # 设置为 true 以自动将 Home Assistant MariaDB 附加组件配置到 config.yaml（也禁用 SQLite）
```

- Config.yaml
可以使用位于 /config/db21ed7f_birdnet-go/config.yaml 的 Config.yaml 文件进行额外变量的配置，使用 Filebrowser 附加组件

- Config_env.yaml
可以在那里配置额外环境变量

### MQTT 和 MariaDB 自动配置（可选）

如果安装并运行了 Home Assistant **MQTT** 附加组件，并在附加组件选项中设置 `mqtt_auto_config: true`，则附加组件将在每次启动时将 HA Mosquitto 凭据直接写入 BirdNET-Go 的 `config.yaml`：`realtime.mqtt.enabled`、`broker`、`username` 和 `password` 会被填充，主题默认为`birdnet`。此外，它会启用 BirdNET-Go 的**原生 Home Assistant MQTT 自动发现**（`realtime.mqtt.homeassistant.enabled`），因此检测传感器会自动在 Home Assistant 中显示——**无需手动 MQTT 传感器 YAML**（[HAINTEGRATION.md](./HAINTEGRATION.md) 中的手写传感器仍然可用，如果您更喜欢自己构建传感器）。消息还会保留（`realtime.mqtt.retain: true`），因此传感器状态可以在 Home Assistant 重启后幸存。当选项为`false`（默认）时，附加组件仍然会记录服务器详细信息，并提醒您该选项——只有在检测到 Mosquitto 时才会写入无内容。

如果安装并运行了 Home Assistant **MariaDB** 附加组件，并将 `mariadb_auto_config: true`，则附加组件会将 HA 凭据写入`output.mysql.*`，并将`output.sqlite.enabled`设置为`false`（数据库名为`birdnet`，首次连接时创建）。当选项为 `false`（默认）时，附加组件只会记录凭据，以便您可以手动配置它们。

附加组件还仅在 `config.yaml` 中缺少这些键时才会填充`output.sqlite.path` 和`logging.file_output.*` 的默认值，因此您现在可以通过 BirdNET-Go UI 更改的值可以 surviving 容器重启。

### 挂载驱动器

该附加组件支持挂载本地驱动器及远程 SMB 共享：

- **本地驱动器**：参考 [附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参考 [附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

该附加组件通过`addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参考 [附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- `env_vars` 选项：使用附加组件的`env_vars`选项传递额外环境变量（大写或小写名称均可）。请查看 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

## 安装

安装此附加组件非常简单，与其他附加组件的安装相比并无不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店的右上角，或者如果您已配置了我的 HA，请点击下方的按钮）

   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的附加组件存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击`Save `按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 检查附加组件的日志，看看一切是否顺利。
1. 打开 webUI 并调整软件选项。

## 与 HA 集成

Home Assistant 集成说明请查看此处，[Birdnet-Go 附加组件：Home Assistant 集成](./HAINTEGRATION.md)

## 设置使用 VLC 的 RTSP 源

VLC 打开 TCP 端口，但流是 udp。因此，需要配置 Birdnet-Go 使用 udp。调整 Config.yaml 文件为 udp 或使用 birdnet-go 命令行选项：

`--rtsptransport udp --rtsp rtsp://192.168.1.21:8080/stream.sdp`

### Linux 说明

使用以下命令之一运行不使用界面的 vlc：

```bash
# 这应该适用于大多数设备
/usr/bin/vlc -I dummy -vvv alsa://hw:0,0 --no-sout-all --sout-keep --sout '#transcode{acodec=mpga}:rtp{sdp=rtsp://:8080/stream.sdp}'

# 如果第一条命令不起作用，请尝试此命令
/usr/bin/vlc -I dummy -vvv alsa://hw:4,0 --no-sout-all --sout-keep --sout '#rtp{sdp=rtsp://:8080/stream.sdp}'
```

运行`arecord -l`以获取麦克风硬件信息

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

Systemd 服务文件示例。请相应地调整用户组。如果您想以 root 身份运行，您可能需要运行 vlc-wrapper 而不是 vlc。

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

尚未可用

## 支持

在 github 上创建一个 issue

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
