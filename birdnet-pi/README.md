## ⚠️ Open Issue : [[BirdNET-Pi Docker Standalone] Services wont start (opened 2025-06-24)](https://github.com/alexbelgium/hassio-addons/issues/1927) by [@sirtakahe](https://github.com/sirtakahe)

# Home assistant add-on: birdnet-pi

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/birdnet-pi/stats.png)

## 关于

_注意：如果要在没有 HomeAssistant（经典 Docker 容器）的情况下使用，请查看[这里](https://github.com/alexbelgium/hassio-addons/blob/master/birdnet-pi/README_standalone.md)_

---

[birdnet-pi](https://github.com/Nachtzuster/BirdNET-Pi) 是一个用于持续鸟类监测和识别的 AI 解决方案，最初由 @mcguirepr89 在 github 上开发（https://github.com/mcguirepr89/BirdNET-Pi），其工作由 @Nachtzuster 和其他开发者在活跃的分叉（https://github.com/Nachtzuster/BirdNET-Pi）中继续

此插件的特性：
- 由 [linuxserver](https://github.com/linuxserver/docker-baseimage-debian) 提供的健壮的基础镜像
- 感谢 https://github.com/gdraheim/docker-systemctl-replacement，可以正常工作 docker 系统
- 使用 HA pulseaudio 服务器
- 使用 HA tmpfs 在 ram 中存储临时文件并避免磁盘磨损
- 将所有配置文件暴露到 /config 以允许持久性和轻松访问
- 允许修改存储鸟类歌曲的位置（最好是一个外部硬盘）
- 支持入口，允许安全远程访问而无需暴露端口

## 配置

---

安装后，首次启动插件
Webui 可以通过两种方式找到：
- 通过 HA 的入口（无需密码，但某些功能无法工作）
- 使用 <http://homeassistant:port> 直接访问，端口是 birdnet.conf 中定义的。当请求密码时，用户名是 `birdnet`，密码是可以在 birdnet.con 中定义的（默认为空）。这与插件选项中的密码不同，必须使用该密码访问 Web 终端

Web 终端访问：用户名 `pi`，密码：在插件选项中定义的密码

您需要一个麦克风：可以使用连接到 HA 的麦克风或 rstp 摄像头的音频流

选项可以通过三种方式配置：

- 插件选项

```yaml
BIRDSONGS_FOLDER: 存储鸟类歌曲文件的文件夹 # 如果您想避免分析过程中的磁盘堵塞，它应该是 SSD
MQTT_DISABLED : 如果为 true，将禁用自动 mqtt 发布。只有在本地代理已经可用的情况下才有效
LIVESTREAM_BOOT_ENABLED: 从启动开始直播，或从设置开始
Use_tphakala_model_v2: false # 切换到 BirdNET-Go 分类器文件
PROCESSED_FOLDER_ENABLED : 如果启用，您需要在 birdnet.conf（或 birdnet 的设置）中设置将保存在 tmpfs 中的最后 wav 文件的数量（即 /tmp/Processed，以避免磁盘磨损）。如果您想检索它们，可以调整此数量。此数量可以在插件选项中调整
TZ: Etc/UTC 指定一个时区使用，参见 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
pi_password: 设置访问 Web 终端的用户密码
localdisks: sda1 # 将您的驱动器的硬件名称（用逗号分隔）或其标签放入，例如 sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，列出要挂载的 smb 服务器，用逗号分隔
cifsusername: "username" # 可选，smb 用户名，所有 smb 共享相同
cifspassword: "password" # 可选，smb 密码
cifsdomain: "domain" # 可选，允许为 smb 共享设置域
```

- config.yaml
使用 Filebrowser 插件在 /config/db21ed7f_birdnet-pi/config.yaml 中找到的 config.yaml 文件配置其他变量

- config_env.yaml
在那里可以配置其他环境变量

### 挂载驱动器

此插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（大小写名称）。参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

## 安装

---

此插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例（在 supervisor 插件商店的右上角，或如果您已经配置了我的 HA，请点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示添加插件仓库对话框，预填充特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 设置插件选项以符合您的偏好
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开 WebUI 并调整软件选项

## 与 HA 集成

---
### Apprise

您可以使用 apprise 通过 mqtt 发送通知，然后使用 HomeAssistant 对这些通知进行操作
更多信息：https://wander.ingstar.com/projects/birdnetpi.html

### 自动 mqtt

如果安装了 mqtt，插件将自动更新 birdnet 主题，以每个检测到的物种

## 使用 ssl

---

选项 1：安装 let's encrypt 插件，生成证书。它们默认存储在 /ssl 中为 certfile.pem 和 keyfile.pem。只需从插件选项启用 ssl，它就会工作。

选项 2：启用端口 80，将您的 BirdNET-Pi URL 定义为 https。证书将自动由 caddy 生成

## 改进检测

---

### 卡片的增益

使用 Terminal 选项卡中的 alsamixer，确保音量足够高，但不要太高（不要在红色部分）
https://github.com/mcguirepr89/BirdNET-Pi/wiki/Adjusting-your-sound-card

### Ferrite

在我的情况下，添加 ferrite 珠导致噪声更差

### Aux 到 usb 转换器

根据我的测试，只有使用 KT0210 的转换器（例如 Ugreen 的）可以工作。我无法检测到基于 ALC 的转换器。

### 麦克风比较

推荐麦克风（[完整讨论在这里](https://github.com/mcguirepr89/BirdNET-Pi/discussions/39)):
- Clippy EM272 (https://www.veldshop.nl/en/smart-clippy-em272z1-mono-omni-microphone.html) + ugreen aux 到 usb 连接器：最佳灵敏度，使用领夹技术
- Boya By-LM40：最佳性价比
- Hyperx Quadcast：最佳灵敏度，使用心形技术

结论，使用 Dahua 的麦克风足够好，EM272 是最佳选择，但 Boya by-lm40 是一个非常好的折衷方案，因为 birndet 模型分析 0-15000Hz 范围

![图片](https://github.com/alexbelgium/hassio-addons/assets/44178713/df992b79-7171-4f73-b0c0-55eb4256cd5b)

### Denoise ([完整讨论在这里](https://github.com/mcguirepr89/BirdNET-Pi/discussions/597))

Denoise 受到严肃研究人员的不满。然而，它似乎显著提高了检测质量！在 HA 中如何进行：
- 使用 Portainer 插件，进入 hassio_audio 容器，并修改文件 /etc/pulse/system.pa 以添加行 `load-module module-echo-cancel`
- 进入 Terminal 插件，并输入 `ha audio restart`
- 在插件选项中选择回声消除设备作为输入设备

### 高通滤波

应避免使用，因为模型使用整个 0-15khz 范围

## 常见问题

尚未提供

## 支持

在 github 上创建问题

---

![插图](https://raw.githubusercontent.com/tphakala/birdnet-pi/main/doc/birdnet-pi-dashboard.webp)
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
