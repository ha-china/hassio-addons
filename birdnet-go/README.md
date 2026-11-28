# Home Assistant 附加组件：Birdnet-Go

我在业余时间维护此 Home Assistant 附加组件：跟上上游变更、HA 变更，并在真实硬件上测试需要大量时间（以及金钱）。我大约使用了 5-10 个我的 >110 个附加组件，因此我经常安装测试机器（并购买一些测试服务，如 vpn）在不使用的情况下进行故障排除和改进附加组件

如果您使用此附加组件节省了时间或使您的设置更简单，我将不胜感激地支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)
![入站](https://img.shields.io/badge/dynamic/yaml?label=入站&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家为我仓库点赞！要点赞请点击图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://reporoster.com/stars/alexbelgium/hassio-addons)](https://github.com/alexbelgium/hassio-addons/stargazers)


![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/birdnet-go/stats.png)

## 关于

[BirdNET-Go](https://github.com/tphakala/birdnet-go/tree/main) 是由 @tphakala 开发的一种用于持续鸟类监控和识别的 AI 解决方案。

此附加组件基于他们的 Docker 镜像。

## 配置

安装后，首次启动附加组件。Web 界面可在 <http://homeassistant:8080> 找到。
您需要一个麦克风：要么使用连接到 HA 的麦克风，要么使用 rts 摄像头的音频流。

音频剪辑文件夹可以通过附加组件选项挂载到外部或 SMB 驱动器上，然后在路径上指定代替 "clips/"。例如，"/mnt/NAS/Birdnet/"。与 `localdisks` 一起使用，可以在驱动器名称后给出一个文件夹只挂载该文件夹：`NAS/Birdnet` 仅挂载它，路径为相同的 `/mnt/NAS/Birdnet/`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。

选项可以通过三种方式配置：

- 附加组件选项

```yaml
BIRDSONGS_FOLDER: /config/clips # 存储音频剪辑的位置（可以在挂载的驱动器上）
LOG_MAX_SIZE_MB: 50 # 旋转前的最大日志文件大小
LOG_MAX_AGE_DAYS: 7 # 最大日志保留天数
homeassistant_microphone: false # 当为 true 时，强制音频源为 "default" (HA 麦克风)
env_vars: [] # 传递给容器的额外环境变量
TZ: Etc/UTC # 时区，见 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
mqtt_auto_config: false # 设置为 true 以自动将 Home Assistant MQTT 附加组件配置到 config.yaml
mariadb_auto_config: false # 设置为 true 以自动将 Home Assistant MariaDB 附加组件配置到 config.yaml（同时也禁用 SQLite）
INGRESS_SKIP_AUTH: false # 设置为 true 以跳过通过 Home Assistant 边栏（入站）打开时的 BirdNET-Go 登录，使用 设置 > 安全 > 跳过认证
```

- config.yaml
可以使用文件浏览器附加组件找到 `/config/db21ed7f_birdnet-go/config.yaml` 中的 config.yaml 文件使用额外的变量进行配置

- Config_env.yaml
可以在那里配置额外环境变量

### 通过入站跳过登录

使用 `INGRESS_SKIP_AUTH: true`，当您从 Home Assistant 边栏（入站）打开 BirdNET-Go 时，BirdNET-Go 不会显示自己的登录页面，因为 Home Assistant 已经为您进行了登录。它使用 BirdNET-Go 自己的 **设置 > 安全 > 跳过认证**：每次附加组件启动时，附加组件将 `127.0.0.1`（附加组件的入站代理）添加到受信任的反向代理中，将 Home Assistant Supervisor 的地址 `172.30.32.2/32` 添加到允许的 subnet 中，并开启跳过功能。您添加的条目将被保留。将选项设置回 `false` 将删除 `172.30.32.2/32` 并，如果该条目存在，将关闭跳过功能（这也关闭您为其他 subnet 启用的跳过功能）。更改选项需要附加组件重启。

**默认关闭。** 选项开启时：
- 每个能够打开附加组件面板的 Home Assistant 用户，包括非管理员，都可以获得 BirdNET-Go 的完全访问权限；
- 跳过功能也适用于任何已在跳过认证部分下列出的 subnet，以及服务器的本地网络，这在 BirdNET-Go 开启跳过时始终受信任。在此附加组件中，这通常是 Home Assistant 内部网络 `172.30.32.0/24`，但这取决于 BirdNET-Go 如何检测主机地址。您的 LAN 上直接在端口 8080 上打开的用户仍需要登录，除非他们的网络是其中之一。
- 将 **受信任代理** 保留为每个代理自己的地址，永远不要是也包含您自己的计算机的 range：任何位于受信任范围的客户端都可以在端口 8080 上声称自己是 `172.30.32.2` 并跳过登录。BirdNET-Go 在此面板中显示相同的规则。

### MQTT 和 MariaDB 自动配置（需订阅）

如果 Home Assistant **MQTT** 附加组件已安装并运行，并且在附加组件选项中设置 `mqtt_auto_config: true`，每次附加组件启动时，附加组件将 HA Mosquitto 凭据直接写入 BirdNET-Go 的 `config.yaml` 中：`realtime.mqtt.enabled`，`broker`，`username` 和 `password` 已填充，且主题默认为 `birdnet`。此外，它启用 BirdNET-Go 的 **原生 Home Assistant MQTT 自动发现**（`realtime.mqtt.homeassistant.enabled`），因此检测传感器将自动在 Home Assistant 中出现——**不需要手动 MQTT 传感器 YAML**（如果您更喜欢自己构建，[HAINTEGRATION.md](./HAINTEGRATION.md) 中的手写传感器仍然可用）。消息也被保留（`realtime.mqtt.retain: true`），以便传感器状态在 Home Assistant 重启后依然存在。当选项为 `false`（默认）时，附加组件仍然会记录 broker 详细信息并提醒有关该选项——只要检测到 Mosquitto 将不会写入任何内容。

如果 Home Assistant **MariaDB** 附加组件已安装并运行，并且在附加组件选项中设置 `mariadb_auto_config: true`，附加组件将 HA 凭据写入 `output.mysql.*` 并将 `output.sqlite.enabled` 设置为 `false`（数据库名为 `birdnet`，附加组件在启动时创建）。当选项为 `false`（默认）时，附加组件仅记录连接详细信息（host，port，数据库名称；服务密码不会记录）并保留 `config.yaml` 不变，以便您可以手动配置 MariaDB：在 MariaDB 附加组件选项中，在 `databases` 下添加 `birdnet`，在 `logins` 下添加一个用户，以及在 `rights` 入口中给予该用户对 `birdnet` 的访问权限，然后将这些详细信息放入 `output.mysql.*` 并将 `output.mysql.enabled: true` 和 `output.sqlite.enabled: false`。

附加组件也仅在 `config.yaml` 中缺少这些键的情况下播种 `output.sqlite.path` 和 `logging.file_output.*` 默认值，因此您通过 BirdNET-Go UI 更改的值现在可以跨越容器重启。

### 挂载驱动器

此附加组件支持挂载本地驱动器和本地 SMB 驱动器：

- **本地驱动器**：见 [附加组件中的挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程驱动器**：见 [附加组件中挂载远程驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：见 [运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件 `env_vars` 选项传递额外环境变量（大写或小写名称）。详细信息请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

## 安装

此附加组件的安装非常简单，与其他附加组件的安装没有不同。

1. 将附加组件存储库添加到您的 home assistant 实例中（在 supervisor 附加组件存储右上角，或如果您已配置我的 HA 请点击下面的按钮）

   [![打开您的 Home Assistant 实例并显示添加附加组件存储库对话框，其中包含特定存储库 URL 预填充。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `Save` 按钮以存储您的配置。
4. 将附加组件选项设置为您的偏好设置
5. 启动附加组件。
6. 检查附加组件的日志，查看一切是否顺利。
7. 打开 webUI 并调整软件选项

## 与 HA 集成

Home Assistant 集成说明请参阅此处，[Birdnet-Go 附加组件：Home Assistant 集成](./HAINTEGRATION.md)

## 使用 VLC 设置 RTSP 源

VLC 打开 TCP 端口，但流是 udp。由于此原因，需要配置 Birdnet-Go 使用 udp。调整 config.yaml 文件使用 udp 或使用 birdnet-go 命令行选项：

`--rtsptransport udp --rtsp rtsp://192.168.1.21:8080/stream.sdp`

### Linux 说明

使用以下命令之一运行 vlc（不启动界面）：

```bash
# 这应该适用于大多数设备
/usr/bin/vlc -I dummy -vvv alsa://hw:0,0 --no-sout-all --sout-keep --sout '#transcode{acodec=mpga}:rtp{sdp=rtsp://:8080/stream.sdp}'

# 如果第一个命令不起作用，请尝试此命令
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

Systemd 服务文件示例。根据需要调整 user:group。如果您想要以 root 运行，您可能需要运行 vlc-wrapper 而不是 vlc。

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

在 github 创建一个 issue

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
