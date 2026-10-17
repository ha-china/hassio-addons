# Home Assistant 插件：Birdnet-Go（源码编译）

> **⚠️ 测试版构建。** 这是 [标准 birdnet-go 插件](https://github.com/alexbelgium/hassio-addons/tree/master/birdnet-go) 的特殊变体。它**不会**拉取预构建的 `ghcr.io/tphakala/birdnet-go` 镜像，而是从 [`alexbelgium/birdnet-go`](https://github.com/alexbelgium/birdnet-go) 分支**编译 BirdNET-Go**。在构建时，它会同步分支的 `main` 分支与 `tphakala/birdnet-go` 上游，并**实时合并每一个开放的、非草稿（即“审查中”）的 pull request**（见 [`merge-prs.sh`](./merge-prs.sh)）。因此，生成的二进制文件反映了上游 `main` 分支以及当前正在审查中的所有工作。下面列出的所有内容除了 [仅针对分支的设置](#仅针对分支的设置) 部分外，均与标准插件相同。

我在空闲时间维护此插件和其他 Home Assistant 插件：跟踪上游变更、HA 变更以及在真实硬件上进行测试需要耗费大量时间（以及一些金钱）。我使用了超过 110 个插件中的大约 5-10 个插件，因此我定期安装测试机器（并购买一些测试服务，如 vpn），以便我自己不直接使用的服务来排查问题和改进插件。

如果此插件为您节省了时间或使配置更简单，我将不胜感激，期待您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢 everyone 为我仓库点赞！点击下方的图片即可点赞，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://reporoster.com/stars/alexbelgium/hassio-addons)](https://github.com/alexbelgium/hassio-addons/stargazers)


![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/birdnet-go/stats.png)

## 关于

[BirdNET-Go](https://github.com/tphakala/birdnet-go/tree/main) 是由 @tphakala 开发的一套用于持续鸟类监测和识别的 AI 解决方案。

此插件基于他们的 docker 镜像。

## 配置

首次安装后启动插件。Web 界面位于 <http://homeassistant:8080>。您需要一个麦克风：要么连接 HA 使用，要么使用 rstp 摄像头的音频流。

音频剪辑文件夹可以通过插件选项挂载到外部或 SMB 驱动器上，然后指定路径而不是"clips/"。例如，"/mnt/NAS/Birdnet/"。使用 `localdisks` 时，可以在驱动器名称后添加文件夹以仅挂载该文件夹：`NAS/Birdnet` 仅挂载它，路径为 `/mnt/NAS/Birdnet/`。文件夹挂载需要 2026-09-19 之后发布的插件版本。

有三种方式配置选项：

- 插件选项

```yaml
BIRDSONGS_FOLDER: /config/clips # 存储音频剪辑的位置（可在挂载驱动器上）
LOG_MAX_SIZE_MB: 50 # 日志轮转前的最大日志文件大小
LOG_MAX_AGE_DAYS: 7 # 日志保留的最大天数
homeassistant_microphone: false # 当为 true 时，强制音频源为"default" (HA 麦克风)
env_vars: [] # 传递给容器的额外环境变量
TZ: Etc/UTC # 时区，见 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
mqtt_auto_config: false # 设置为 true 以自动将 Home Assistant MQTT 插件配置到 config.yaml
mariadb_auto_config: false # 设置为 true 以自动将 Home Assistant MariaDB 插件配置到 config.yaml（也禁用 SQLite）
INGRESS_SKIP_AUTH: false # 设置为 true 以在通过 Home Assistant sidebar 打开时跳过 BirdNET-Go 登录 (ingress)
```

- Config.yaml
可以使用位于 /config/db21ed7f_birdnet-go/config.yaml 的 Filebrowser 插件通过此文件配置额外的变量。

- Config_env.yaml
可以在那里配置额外的环境变量。

### 仅针对分支的设置

这些是 `[alexbelgium/birdnet-go](https://github.com/alexbelgium/birdnet-go)` 分支当前独有的设置，**未包含**在标准插件中。[`merge-prs.sh`](./merge-prs.sh) 在应用开放 PR 之前会同步分支的 `main` 分支与上游。因此，一旦 PR 合并到上游，该设置就会保留在当前构建中——它只是通过这个同步步骤到达，而不是通过 PR 合并步骤，此后就不再是“仅针对分支”了。只有**未合并即关闭**的 PR 会使它的设置在后续构建中消失。

#### 首次每日检测共识

需要一个第二模型来确认每只鸟类物种在每天**首次**被检测到。直到某个物种被接受之前，该物种的每一次尝试都遵循相同的两模型标准；只有当一次检测通过后，当天后续的每一次检测才像今天一样，仅基于单个模型进行判断。

一天中某个物种的首次检测是该流程产生的最弱的证据，也是创建“今天新物种”条目的那个。要求两个模型仅对这一个检测达成一致，可以去除大多数虚假的新物种条目，而不会减慢其他任何操作。

**默认关闭。** 在 Web 界面的 *Settings → Filters → First Daily Detection Consensus* 或 `config.yaml` 中将其开启：

```yaml
realtime:
  firstdailyconsensus:
    enabled: true
```

该设置在每个检测周期中重新读取，因此无需重启插件即可生效。

它在以下情况下**不执行任何操作**，所有这些情况都保留单模型的行为：

- 您只运行一个鸟类模型（默认）——不存在第二意见，因此该规则可能永远不会触发
- 该物种不是鸟类——例如蝙蝠以及 Perch 报告的非鸟类声音类（昆虫、两栖动物、哺乳动物、`power_tool` 等）
- 该物种未被每一个正在分析该音频源的活跃鸟类模型所知——一个只被其中一个模型命名物种永远无法获得两次确认。有数个源运行不同的模型组合组合时，这是按源决定的，而不是整个插件的通用标准
- 动态阈值实际上降低了对该物种的标准，意味着您要求了一个更宽松的闸门
- 无法查询分类学或数据库——它采用开放失败策略并接受检测

在实践中，它只有在单个音频源有两个或多个鸟类模型（例如 BirdNET 加上 Perch）分析它时才会“起作用”，这些模型都能识别出该物种。代价是用少一些虚假的新物种条目作为交换，偶尔会推迟真实的初次 sighting 直到第二个模型达成一致。

需要 [alexbelgium/birdnet-go#63](https://github.com/alexbelgium/birdnet-go/pull/63)。

#### 跳过通过 ingress 的登录

当 `INGRESS_SKIP_AUTH: true` 时，BirdNET-Go 在您从 Home Assistant sidebar 打开时不会显示其自己的登录页面，因为 Home Assistant 已经为您签入了。端口 8080 的访问以及 API 访问依然需要像以前一样进行 BirdNET-Go 登录。

**默认关闭。** 任何能够打开插件面板的 Home Assistant 用户（包括非管理员）均获得对 BirdNET-Go 的完全访问权限，包括设置。更改此选项需要重启插件。

需要 [alexbelgium/birdnet-go#80](https://github.com/alexbelgium/birdnet-go/pull/80)。

### MQTT 和 MariaDB 自动配置（可选）

如果 Home Assistant **MQTT** 插件已安装并运行，并且在插件选项中设置 `mqtt_auto_config: true`，插件将在每次启动时将 HA Mosquitto 凭据直接写入 BirdNET-Go 的 `config.yaml`：填充 `realtime.mqtt.enabled`, `broker`, `username` 和 `password`，默认主题为 `birdnet`。此外，它启用了 BirdNET-Go 的**原生 Home Assistant MQTT 自动发现** (`realtime.mqtt.homeassistant.enabled`)，使得检测传感器可以自动出现在 Home Assistant 中——**无需手动编写 MQTT 传感器 YAML**（如果您倾向于自己构建，[HAINTEGRATION.md](./HAINTEGRATION.md) 中的手写传感器仍然可用）。消息也会被保留 (`realtime.mqtt.retain: true`)，因此传感器状态可以存活 Home Assistant 重启。当选项为 `false`（默认）时，插件仍会在检测到 Mosquitto 时记录 Broker 详细信息并提醒您有关此选项的内容——没有写入任何内容。

如果 Home Assistant **MariaDB** 插件已安装并运行，并且在选项中设置 `mariadb_auto_config: true`，插件会将 HA 凭据写入 `output.mysql.*` 并将 `output.sqlite.enabled` 设置为 `false`（数据库名称为 `birdnet`，在第一连接时创建）。当选项为 `false`（默认）时，插件仅记录凭据，以便您可以手动配置它们。

当 `config.yaml` 中缺少这些键时，插件还会填充 `output.sqlite.path` 和 `logging.file_output.*` 的默认值，因此现在通过 BirdNET-Go UI 更改的值可以存活容器重启。

### 挂载驱动器

此插件支持挂载本地驱动器以及远程 SMB 共享：

- **本地驱动器**：见 [Addons 中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：见 [Addons 中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：见 [Addons 中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件 `env_vars` 选项传递额外的环境变量（字母大小写均可）。细节见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此插件的安装非常简单，与其他插件的安装没有不同。

1. 将我的插件仓库添加到您的 home assistant 实例（在 supervisor 插件商店右上角，或如果您已配置了我的 HA，则点击下方按钮）

   [![打开您的 Home Assistant 实例并显示带有预填充เฉพาะ仓库 URL 的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将插件选项设置为您的偏好设置
1. 启动插件。
1. 检查插件的日志以查看是否一切顺利。
1. 打开 Web UI 并调整软件选项

## 与 HA 集成

Home Assistant 集成说明见此处，[Birdnet-Go 插件：Home Assistant 集成](./HAINTEGRATION.md)

## 使用 VLC 配置 RTSP 源

VLC 打开 TCP 端口，但流是 udp。因此需要配置 Birdnet-Go 使用 udp。调整 config.yaml 文件为 udp 或使用 birdnet-go 命令行选项：

`--rtsptransport udp --rtsp rtsp://192.168.1.21:8080/stream.sdp`

### Linux 说明

使用以下命令之一在没有界面的情况下运行 vlc：

```bash
# 这应该适用于大多数设备
/usr/bin/vlc -I dummy -vvv alsa://hw:0,0 --no-sout-all --sout-keep --sout '#transcode{acodec=mpga}:rtp{sdp=rtsp://:8080/stream.sdp}'

# 如果第一条命令不起作用，试试这个
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

hw:4,0 = **card 4**：设备 [USB PnP Sound Device]，**device 0**：USB Audio [USB Audio]

Systemd 服务文件示例。请根据需要进行相应的 User/Group 调整。如果您想以 root 身份运行，您可能需要使用 vlc-wrapper 而不是 vlc。

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

在 GitHub 上创建问题

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
