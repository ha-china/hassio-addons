# Home Assistant 附加组件：Birdnet-Go（从源码编译）

> **⚠️ 测试构建。** 这是 [标准 birdnet-go 附加组件](https://github.com/alexbelgium/hassio-addons/tree/master/birdnet-go) 的一个特殊变体。与其拉取预构建的 `ghcr.io/tphakala/birdnet-go` 镜像，它**直接从 [`alexbelgium/birdnet-go`](https://github.com/alexbelgium/birdnet-go) 分支编译 BirdNET-Go**。在构建时，它会同步分支的 `main` 与 `tphakala/birdnet-go` 上游，并**实时合并所有开放的非草稿（“复核中”）Pull Request**（参见 [`merge-prs.sh`](./merge-prs.sh)），因此二进制文件会反映上游 `main` 以及所有当前正在审核的工作内容。以下内容除 [仅分支设置](#fork-only-settings) 外，均与标准附加组件相同。

我在业余时间维护其他 Home Assistant 附加组件：跟进上游更改、HA 更改以及在真实硬件上测试需要大量时间（和一些金钱）。我使用大约 5-10 个我拥有的 >110 个附加组件，因此我会定期安装测试机（并购买一些测试服务，如 vpn），即便我自己不使用它们，以便排查问题并改进附加组件。

如果这个附加组件能为您节省时间或让您的设置更容易，我将不胜感激您的支持！

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

_谢谢大家为我仓库点赞！请点击下方的图片来点赞，它将位于右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://reporoster.com/stars/alexbelgium/hassio-addons)](https://github.com/alexbelgium/hassio-addons/stargazers)


![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/birdnet-go/stats.png)

## 关于

[BirdNET-Go](https://github.com/tphakala/birdnet-go/tree/main) 是一个由 @tphakala 开发的用于持续鸟类监控和识别的 AI 解决方案。

该附加组件基于他们的 docker 镜像。

## 配置

安装后，首次启动附加组件。WebUI 可访问 <http://homeassistant:8080>。
您需要一个麦克风：要么使用连接到 HA 的麦克风，要么使用 RSTP 摄像源的音频流。

可以通过附加组件选项挂载外部或 SMB 驱动器来存储音频片段文件夹，然后指定路径而不是 "clips/"。例如，“/mnt/NAS/Birdnet/"。使用 `localdisks` 后，驱动器名称后可以跟一个文件夹来仅挂载该文件夹：`NAS/Birdnet` 仅挂载该文件夹，路径为相同的 `/mnt/NAS/Birdnet/`。文件夹挂载需要附加组件在 2026-09-19 之后发布。

有三种方式可以配置选项：

- 附加组件选项

```yaml
BIRDSONGS_FOLDER: /config/clips # 音频片段存储位置（可以在挂载的驱动器上）
LOG_MAX_SIZE_MB: 50 # 日志文件旋转前的最大大小（MB）
LOG_MAX_AGE_DAYS: 7 # 最大日志保留天数
homeassistant_microphone: false # 当为 true 时，强制音频源为 "default" (HA 麦克风)
env_vars: [] # 传递给容器的额外环境变量
TZ: Etc/UTC # 时区，参见 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
mqtt_auto_config: false # 设置为 true 可自动在 config.yaml 中配置 Home Assistant MQTT 附加组件
mariadb_auto_config: false # 设置为 true 可自动在 config.yaml 中配置 Home Assistant MariaDB 附加组件（同时也禁用 SQLite）
INGRESS_SKIP_AUTH: false # 设置为 true 可跳过通过 Home Assistant 侧边栏（ingress）打开时的 BirdNET-Go 登录
```

- Config.yaml
使用找在 /config/db21ed7f_birdnet-go/config.yaml 中的 config.yaml 文件可以在附加组件选项中配置额外的变量，使用 Filebrowser 附加组件。

- Config_env.yaml
可以在那里配置额外的环境变量。

### 仅分支设置

这些当前是来自 [`alexbelgium/birdnet-go`](https://github.com/alexbelgium/birdnet-go) 分支的仅分支设置，**并不在**标准附加组件中。[`merge-prs.sh`](./merge-prs.sh) 在应用开放 PR 之前会将分支的 `main` 与上游同步，因此一旦 PR 合并到上游，该设置就会保留在此构建中——它通过该同步到达，而不是通过 PR 合并步骤。只有 **未合并即关闭** 的 PR 才会将其设置从后续构建中移除。

#### 首次每日检测共识

需要一个第二个模型来确认每个鸟种每天的**首次**检测。在其中一个被接受之前，对该物种的每次尝试都适用同样的双模型门槛；只有当一次检测通过后，当天该物种的后续检测行为才会完全变为与今天单次模型的行为一致。

该物种在一天内的首次检测是管道产生的最弱的证据，也是创建“今日新物种”条目的一项。要求两个模型仅针对这单一检测达成一致，可以消除大多数虚假的新物种条目，同时不减缓其他任何内容。

**默认为关闭。** 在 Web UI 的 *Settings → Filters → First Daily Detection Consensus* 下，或在 `config.yaml` 中启用：

```yaml
realtime:
  firstdailyconsensus:
    enabled: true
```

该设置在每次检测周期中重新读取，因此无需重启附加组件即可生效。

在这些情况中，它故意 **不采取任何行动**，所有这些情况都保持今天的单次模型行为：

- 您只运行一个鸟类模型（默认）——第二个意见不存在，因此规则无法触发
- 该物种不是鸟——蝙蝠和 Perch 报告的非鸟声音类别（昆虫、两栖动物、哺乳动物、`power_tool` 等）
- 该物种不被 *所有* 正在分析该音频源的活跃鸟类模型所知——其中只有一个模型能认出的物种永远无法达到两个确认。当运行多个不同源的不同模型组合时，这是按源而不是按附加组件整体决定的
- 动态门槛实际上降低了该物种的门槛，意味着您要求了一个更宽松的关口
- 分类法或数据库无法被查阅——它会以开放失败模式接受检测

在实践中，它只有在单个音频源拥有两个或更多鸟类模型（例如 BirdNET 和 Perch）进行分析，且该物种为它们都能识别时才起作用。代价是减少了错误的“新物种”条目，但代价是偶尔需要等待第二次模型达成一致后，真正的首次 sighting 才会被确认。

需要 [`alexbelgium/birdnet-go#63`](https://github.com/alexbelgium/birdnet-go/pull/63)。

#### 跳过通过 ingress 的登录

使用 `INGRESS_SKIP_AUTH: true`，当从 Home Assistant 侧边栏（ingress）打开 BirdNET-Go 时，它不会显示自己的登录页面，因为 Home Assistant 已经为您登录。访问端口 8080 和 API 访问，仍然需要像以前一样进行 BirdNET-Go 登录。

**默认为关闭。** 任何能够打开附加组件面板的 Home Assistant 用户（包括非管理员），包括他们现在都可以完全访问 BirdNET-Go，包括设置。更改此选项需要重启附加组件。

需要 [`alexbelgium/birdnet-go#80`](https://github.com/alexbelgium/birdnet-go/pull/80)。

### MQTT 和 MariaDB 自动配置（按需启用）

如果 Home Assistant **MQTT** 附加组件已安装并运行，且您在附加组件选项中设置 `mqtt_auto_config: true`，则附加组件会在每次启动时将 HA Mosquitto 凭据直接写入 BirdNET-Go 的 `config.yaml`：`realtime.mqtt.enabled`、`broker`、`username` 和 `password` 会被填充，主题默认为 `birdnet`。此外，它启用了 BirdNET-Go 的 **原生 Home Assistant MQTT 自动发现**（`realtime.mqtt.homeassistant.enabled`），因此检测传感器会自动显示在 Home Assistant 中——**无需手动 MQTT 传感器 YAML**（如果需要，[HAINTEGRATION.md](./HAINTEGRATION.md) 中的手写传感器仍然可用）。消息也会被保留（`realtime.mqtt.retain: true`），因此传感器状态可以生存 Home Assistant 重启。

如果 Home Assistant **MariaDB** 附加组件已安装并运行，且您在附加组件选项中设置 `mariadb_auto_config: true`，则附加组件会将 HA 凭据写入 `output.mysql.*`，并将 `output.sqlite.enabled` 设置为 `false`（数据库名称为 `birdnet`，该附加组件在启动时创建它）。当选项为 `false`（默认）时，附加组件仅记录连接详情（主机、端口、数据库名称；服务密码不记录），并保留 `config.yaml` 原样不变，因此您可以手动配置 MariaDB：在 MariaDB 附加组件选项中，在 `databases` 下添加 `birdnet`，在 `logins` 下添加一个用户，并在 `rights` 下添加一个条目，让该用户访问 `birdnet`，然后将这些详细信息放入 `output.mysql.*`，设置 `output.mysql.enabled: true` 和 `output.sqlite.enabled: false`。

附加组件还会在 `config.yaml` 中这些键缺失时，为 `output.sqlite.path` 和 `logging.file_output.*` 提供默认值，因此现在通过 BirdNET-Go UI 更改的值可以存活容器重启。

### 挂载驱动器

此附加组件支持挂载本地驱动器和服务器的 SMB 共享：

- **本地驱动器**：参见 [附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此附加组件的安装非常简单，与其他附加组件的安装相比没有区别。

1. 将我的附加组件仓库添加到您的 home assistant 实例（在 supervisor addons 商店的右上角，或如果您已配置我的 HA 则点击下方按钮）

   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以存储您的配置。
1. 将附加组件选项设置为您的偏好设置
1. 启动附加组件。
1. 检查附加组件的日志，看看是否一切正常。
1. 打开 WebUI 并调整软件选项。

## 与 HA 的集成

Home Assistant 集成说明请见这里，[Birdnet-Go 附加组件：Home Assistant 集成](./HAINTEGRATION.md)

## 使用 VLC 设置 RTSP 源

VLC 打开一个 TCP 端口，但流是 udp 的。由于此原因，需要将 Birdnet-Go 配置为使用 udp。调整 config.yaml 文件为 udp 或使用 birdnet-go 命令行选项：

`--rtsptransport udp --rtsp rtsp://192.168.1.21:8080/stream.sdp`

### Linux 说明

使用以下命令之一运行无需界面的 vlc：

```bash
# 这应该适用于大多数设备
/usr/bin/vlc -I dummy -vvv alsa://hw:0,0 --no-sout-all --sout-keep --sout '#transcode{acodec=mpga}:rtp{sdp=rtsp://:8080/stream.sdp}'

# 如果第一条命令不起作用，尝试此方法
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

Systemd 服务文件示例。相应调整 user/group。如果您想以 root 身份运行，您可能需要使用 vlc-wrapper 而不是 vlc。

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
