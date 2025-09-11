## ⚠️ Open Issue : [[BirdNET-Pi Docker Standalone] Services won't start (opened 2025-06-24)](https://github.com/alexbelgium/hassio-addons/issues/1927) by [@sirtakahe](https://github.com/sirtakahe)
## ⚠️ Open Issue : [🐛 [Birdnet-Pi] Birdnet Docker cannot open web terminal login incorrect (opened 2025-08-02)](https://github.com/alexbelgium/hassio-addons/issues/1991) by [@ignmedia](https://github.com/ignmedia)

# Home assistant add-on: birdnet-pi

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.json)
![Arch](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/birdnet-pi/stats.png)

## 关于

_注意：如需在HomeAssistant之外使用（经典docker容器），请查看[这里](https://github.com/alexbelgium/hassio-addons/blob/master/birdnet-pi/README_standalone.md)_

---

[birdnet-pi](https://github.com/Nachtzuster/BirdNET-Pi) 是一个用于连续鸟类监测和识别的AI解决方案，最初由 @mcguirepr89 在github上开发（https://github.com/mcguirepr89/BirdNET-Pi），其工作由 @Nachtzuster 和其他开发者在一个活跃的分叉（https://github.com/Nachtzuster/BirdNET-Pi）中继续进行。

此插件的特性：
- 由 [linuxserver](https://github.com/linuxserver/docker-baseimage-debian) 提供的健壮基础镜像
- 感谢 https://github.com/gdraheim/docker-systemctl-replacement，工作正常的docker系统
- 使用HomeAssistant的pulseaudio服务器
- 使用HomeAssistant的tmpfs在ram中存储临时文件，避免磁盘磨损
- 将所有配置文件暴露到/config中，以允许持久性和轻松访问
- 允许修改存储鸟类歌曲的位置（最好是一个外部硬盘）
- 支持ingress，以允许安全远程访问而无需暴露端口

## 配置

---

安装后，首次启动插件
Webui可以通过两种方式找到：
- HomeAssistant的ingress（无密码，但某些功能无法工作）
- 使用 <http://homeassistant:port> 直接访问，端口是birdnet.conf中定义的。当提示输入密码时，用户名是 `birdnet`，密码是可以在birdnet.con中定义的（默认为空）。这与插件选项中的密码不同，后者是访问web终端时必须使用的密码

Web终端访问：用户名 `pi`，密码：在插件选项中定义的密码

您需要一个麦克风：可以使用连接到HomeAssistant的麦克风或rstp摄像头的音频流。

选项可以通过三种方式配置：

- 插件选项

```yaml
BIRDSONGS_FOLDER: 存储鸟类歌曲文件的文件夹 # 如果你想避免分析过程中的磁盘拥塞，应该是一个ssd
MQTT_DISABLED : 如果为true，将禁用自动mqtt发布。仅当本地已经有mqtt代理可用时才有效
LIVESTREAM_BOOT_ENABLED: 从启动时启动直播，或从设置中启动
PROCESSED_FOLDER_ENABLED : 如果启用，你需要在birdnet.conf（或birdnet的设置）中设置将保存到最后多少个wav文件在tmpfs中的临时文件夹 "/tmp/Processed"内（因此不会磨损磁盘）以防你想检索它们。这个数量可以从插件选项中调整
TZ: Etc/UTC 指定一个时区使用，参见 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
pi_password: 设置访问web终端的用户密码
localdisks: sda1 #将你的硬盘的硬件名称用逗号分隔开来挂载，或者用标签。例如。 sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" #可选，列出要挂载的smb服务器，用逗号分隔
cifsusername: "username" #可选，smb用户名，所有smb共享都相同
cifspassword: "password" #可选，smb密码
cifsdomain: "domain" #可选，允许设置smb共享的域
```

- config.yaml
可以使用在/config/db21ed7f_birdnet-pi/config.yaml中找到的config.yaml文件（使用Filebrowser插件）配置其他变量

- config_env.yaml
可以在那里配置其他环境变量

### 挂载驱动器

此插件支持挂载本地驱动器和远程SMB共享：

- **本地驱动器**：参见 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：参见 [向你的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

## 安装

---

此插件的安装非常简单，与其他插件的安装方式相同。

1. 将我的插件仓库添加到你的HomeAssistant实例（在supervisor插件商店的右上角，或如果你已配置我的HA，点击下面的按钮）
   [![打开你的Home Assistant实例并显示带有特定仓库URL预填充的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以保存你的配置。
1. 设置插件选项以符合你的偏好
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开webUI并调整软件选项

## 与HA的集成

---
### Apprise

你可以使用apprise通过mqtt发送通知，然后使用HomeAssistant对这些通知进行操作
更多信息：https://wander.ingstar.com/projects/birdnetpi.html

### 自动mqtt

如果安装了mqtt，插件将自动更新birdnet主题，以检测到的每种鸟类

## 使用ssl

---

选项1：安装let's encrypt插件，生成证书。它们默认存储在/ssl中的certfile.pem和keyfile.pem。只需在插件选项中启用ssl，它就会工作。

选项2：启用端口80，将你的BirdNET-Pi URL定义为https。证书将由caddy自动生成

## 改进检测

---

### 增益卡片

使用Terminal标签中的alsamixer，确保音量足够高，但不要太高（不要在红色部分）
https://github.com/mcguirepr89/BirdNET-Pi/wiki/Adjusting-your-sound-card

### Ferrite

在我的情况下，添加ferrite bead导致噪音变差

### Aux到usb适配器

根据我的测试，只有使用KT0210（例如Ugreen的）的适配器可以工作。我无法检测到基于ALC的适配器。

### 麦克风比较

推荐麦克风（[完整讨论在这里](https://github.com/mcguirepr89/BirdNET-Pi/discussions/39)）：
- Clippy EM272 (https://www.veldshop.nl/en/smart-clippy-em272z1-mono-omni-microphone.html) + ugreen aux到usb连接器：最佳灵敏度，带领夹技术
- Boya By-LM40：最佳性价比
- Hyperx Quadcast：最佳灵敏度，带心形技术

结论，使用Dahua的麦克风已经足够好，EM272是最优的，但Boya by-lm40是一个非常不错的折中方案，因为birndet模型分析0-15000Hz的范围

![image](https://github.com/alexbelgium/hassio-addons/assets/44178713/df992b79-7171-4f73-b0c0-55eb4256cd5b)

### Denoise（[完整讨论在这里](https://github.com/mcguirepr89/BirdNET-Pi/discussions/597)）

Denoise受到严肃研究人员的批评。但它似乎显著提高了检测质量！在HA中如何进行：
- 使用Portainer插件，进入hassio_audio容器，并修改文件 /etc/pulse/system.pa 以添加行 `load-module module-echo-cancel`
- 进入Terminal插件，并输入 `ha audio restart`
- 在插件选项中选择echo取消设备作为输入设备

### 高通滤波

应避免使用，因为模型使用整个0-15khz范围

## 常见问题

尚未提供

## 支持

在github上创建一个问题

---

![插图](https://raw.githubusercontent.com/tphakala/birdnet-pi/main/doc/birdnet-pi-dashboard.webp)