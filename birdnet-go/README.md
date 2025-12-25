# Home assistant add-on: Birdnet-Go

我利用业余时间维护这个Home Assistant add-on以及其他add-on：跟进上游变化、Home Assistant的变化，并在真实硬件上进行测试，这需要大量时间（和一些金钱）。我大约使用了我超过110个add-on中的5-10个，因此我安装了一些我自己的测试机器（以及购买了一些测试服务，如VPN）来调试和改进这些add-on。

如果这个add-on节省了您的时间或使您的设置更简单，我将非常感谢您的支持！

[![请给我一杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过PayPal捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-go%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它将在右上角。谢谢！_

[![@alexbelgium/hassio-addons的星标者仓库列表](https://reporoster.com/stars/alexbelgium/hassio-addons)](https://github.com/alexbelgium/hassio-addons/stargazers)


![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/birdnet-go/stats.png)

## 关于

[BirdNET-Go](https://github.com/tphakala/birdnet-go/tree/main) 是一个由 @tphakala 开发的用于持续鸟类监测和识别的AI解决方案。

这个add-on基于他们的Docker镜像。

## 配置

安装并首次启动add-on后，WebUI可以在 <http://homeassistant:8080> 找到。
您需要一个麦克风：可以使用连接到HA的麦克风，或者使用RTP摄像头的音频流。

音频剪辑文件夹可以通过在add-on选项中挂载它来存储在外部或SMB驱动器上，然后指定路径而不是 "clips/"。例如，"/mnt/NAS/Birdnet/"

选项可以通过三种方式配置：

- Addon选项

```yaml
ALSA_CARD : 卡的编号（通常是0或1），请参考 https://github.com/tphakala/birdnet-go/blob/main/doc/installation.md#deciding-alsa_card-value
TZ: Etc/UTC 指定一个时区使用，请参考 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
COMMAND : realtime --rtsp url # 允许提供鸟net-go的参数
```

- Config.yaml
可以使用在 /config/db21ed7f_birdnet-go/config.yaml 中找到的 config.yaml 文件使用 Filebrowser add-on 配置附加变量

- Config_env.yaml
可以在那里配置附加环境变量

### 挂载驱动器

这个add-on支持挂载本地驱动器和远程SMB共享：

- **本地驱动器**：请参阅 [在Add-on中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [在Add-on中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

这个add-on支持通过 `addon_config` 映射自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在Add-on中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars选项**：使用add-on的 `env_vars` 选项传递额外的环境变量（大写或小写名称）。请参考 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

## 安装

这个add-on的安装非常简单，与安装任何其他add-on没有区别。

1. 将我的add-ons仓库添加到您的Home Assistant实例（在supervisor add-ons商店的右上角，或者如果您已经配置了我的HA，请点击下面的按钮）

   [![打开您的Home Assistant实例并显示带有预填充特定仓库URL的添加add-on仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个add-on。
1. 点击 `保存` 按钮以保存您的配置。
1. 将add-on选项设置为您的偏好设置
1. 启动add-on。
1. 检查add-on的日志以查看是否一切顺利。
1. 打开WebUI并调整软件选项

## 与HA集成

Home Assistant集成说明可以在[这里找到](./HAINTEGRATION.md)

## 使用VLC设置RTSP源

VLC打开一个TCP端口，但流是UDP。因此需要配置Birdnet-Go使用UDP。调整config.yaml文件为UDP或使用birdnet-go命令行选项：

`--rtsptransport udp --rtsp rtsp://192.168.1.21:8080/stream.sdp`

### Linux说明

使用以下命令之一在不打开界面的情况下运行vlc：

```bash
# 这应该适用于大多数设备
/usr/bin/vlc -I dummy -vvv alsa://hw:0,0 --no-sout-all --sout-keep --sout '#transcode{acodec=mpga}:rtp{sdp=rtsp://:8080/stream.sdp}'

# 如果第一个命令不起作用，请尝试这个
/usr/bin/vlc -I dummy -vvv alsa://hw:4,0 --no-sout-all --sout-keep --sout '#rtp{sdp=rtsp://:8080/stream.sdp}'
```

运行 `arecord -l` 获取麦克风硬件信息

```text
**** CAPTURE硬件设备列表 ****
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

Systemd服务文件示例。根据需要调整用户:组。如果您想以root身份运行，您可能需要运行vlc-wrapper而不是vlc。

```text
[Unit]
Description=VLC Birdnet RTSP服务器
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

尚未提供

## 支持

在github上创建问题

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
