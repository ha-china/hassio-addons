# Home Assistant 附加组件：Birdnet-Go

利用业余时间，我维护此附其他 Home Assistant 附加组件：跟踪上游更改、适配 Home Assistant 的变化，并在真实硬件上进行测试需要花费大量时间（以及一些金钱）。我使用了约 5-10 个我的 >110 个附加组件，所以我有时安装测试机器（并购买一些我自己不使用的测试服务，如 vpn）来排查和测试附加组件

如果这个附加组件为您节省了时间或让您的配置变得更容易，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家星标了我的仓库！要星标它，请单击下面的图片，它将显示在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标者仓库名单](https://reporoster.com/stars/alexbelgium/hassio-addons)](https://github.com/alexbelgium/hassio-addons/stargazers)


![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/birdnet-go/stats.png)

## 关于

[BirdNET-Go](https://github.com/tphakala/birdnet-go/tree/main) 是由 @tphakala 开发的一个用于持续鸟类监测和识别的 AI 解决方案。

此附加组件基于他们的 docker 镜像。

## 配置

安装后，首次启动附加组件。WebUI 位于 <http://homeassistant:8080>。
您需要一个麦克风：要么使用连接至 HA 的麦克风，要么使用 rstp 摄像头的音频流。

通过附加组件选项挂载外部或 SMB 驱动器来存储音频剪片文件夹，然后指定路径而不是"clips/"。例如，"/mnt/NAS/Birdnet/"。使用`localdisks`，驱动器名称后可给出文件夹来仅挂载该文件夹：`NAS/Birdnet` 仅挂载它，路径为相同的 `/mnt/NAS/Birdnet/`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。

配置选项可通过三种方式配置：

- 附加组件选项

```yaml
BIRDSONGS_FOLDER: /config/clips # 存储音频剪片的位置 (可位于挂载的驱动器上)
LOG_MAX_SIZE_MB: 50 # 日志文件旋转前的最大日志文件大小
LOG_MAX_AGE_DAYS: 7 # 最大日志保留天数
homeassistant_microphone: false # 当为 true 时，强制音频源为"default"(HA 麦克风)
env_vars: [] # 传递给容器的额外环境变量
TZ: Etc/UTC # 时区，见 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
mqtt_auto_config: false # 设置为 true 以自动将 Home Assistant MQTT 附加组件配置到 config.yaml
mariadb_auto_config: false # 设置为 true 以自动将 Home Assistant MariaDB 附加组件配置到 config.yaml（同时禁用 SQLite）
```

- Config.yaml
可以使用位于 /config/db21ed7f_birdnet-go/config.yaml 的 Config.yaml 文件，通过 Filebrowser 附加组件配置额外变量

- Config_env.yaml
额外的环境变量可以在那里配置

### MQTT 和 MariaDB 自动配置（可选）

如果 Home Assistant **MQTT** 附加组件已安装并正在运行，并且您在附加组件选项中设置了 `mqtt_auto_config: true`，附加组件将在每次启动时将 HA Mosquitto 凭据直接写入 BirdNET-Go 的 `config.yaml`：`realtime.mqtt.enabled`, `broker`, `username` 和`password` 将被填充，主题默认为`birdnet`。此外，它还启用了 BirdNET-Go 的 **原生 Home Assistant MQTT 自动发现** (`realtime.mqtt.homeassistant.enabled`)，因此检测传感器会自动出现在 Home Assistant 中——**不需要手动 MQTT 传感器 YAML**（如果您更喜欢自己构建，[HAINTEGRATION.md](./HAINTEGRATION.md) 中手写的手写传感器仍然可用）。消息也会被保留（`realtime.mqtt.retain: true`），这样传感器状态就能在 Home Assistant 重启后幸存。当选项为`false`(默认) 时，附加组件仍然会记录 brokers 详细信息，并在检测到 Mosquitto 时提醒您关于该选项——什么也没写。

如果 Home Assistant **MariaDB** 附加组件已安装并正在运行，并且您在附加组件选项中设置了 `mariadb_auto_config: true`，附加组件会将 HA 凭据写入 `output.mysql.*`，并将 `output.sqlite.enabled` 设置为`false` (数据库名称`birdnet`,首次连接时创建)。当选项为`false`(默认) 时，附加组件仅记录凭据以便您手动配置。

附加组件还仅在 `config.yaml` 中缺失这些键时“播种”（初始化）`output.sqlite.path` 和`logging.file_output.*` 默认值，因此现在通过 BirdNET-Go 界面更改的值可以覆盖容器重启。

### 挂载驱动器

此附加组件支持挂载本地驱动器、以及远程 SMB 共享：

- **本地驱动器**: 见 [附加组件中的挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**: 见 [附加组件中的挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件通过`app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**: 见 [附加组件中的运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- `env_vars` 选项：使用附加组件`env_vars` 选项传递额外环境变量（大写或小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 以获取详情。

## 安装

此附加组件的安装非常简单，与其他附加组件的安装并无不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或者如果您已配置了 HA，则点击下面的按钮）

   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `Save` 按钮以存储您的配置。
4. 将附加组件选项设置为您的偏好设置。
5. 启动附加组件。
6. 查看附加组件的日志以确认一切正常。
7. 打开 WebUI 并调整软件选项。

## 与 HA 集成的说明

Home Assistant 集成说明见此页 [Birdnet-Go 附加组件：Home Assistant 集成](./HAINTEGRATION.md)

## 使用 VLC 设置 RTSP 源

VLC 打开一个 TCP 端口，但流是 udp。因此需要配置 Birdnet-Go 使用 udp。调整 config.yaml 文件为 udp 或使用 birdnet-go 命令行选项：

`--rtsptransport udp --rtsp rtsp://192.168.1.21:8080/stream.sdp`

### Linux 说明

运行 vlc 而不使用接口，使用以下命令之一：

```bash
# 这对大多数设备应该有效
/usr/bin/vlc -I dummy -vvv alsa://hw:0,0 --no-sout-all --sout-keep --sout '#transcode{acodec=mpga}:rtp{sdp=rtsp://:8080/stream.sdp}'

# 如果第一条命令不起作用，尝试这个
/usr/bin/vlc -I dummy -vvv alsa://hw:4,0 --no-sout-all --sout-keep --sout '#rtp{sdp=rtsp://:8080/stream.sdp}'
```

运行 `arecord -l` 获取麦克风硬件信息

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

Systemd 服务文件示例。根据您的需要调整 user:group。如果您想以 root 身份运行，您可能需要运行 vlc-wrapper 而不是 vlc。

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

暂不可用

## 支持

在 github 上创建问题

---

![插图](https://raw.githubusercontent.com/tphakala/birdnet-go/main/doc/BirdNET-Go-dashboard.webp)

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
