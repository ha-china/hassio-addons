## 警告：打开问题 : [[BirdNET-Pi Docker 独立版] 服务无法启动（于 2025-06-24 打开）](https://github.com/alexbelgium/hassio-addons/issues/1927) by [@sirtakahe](https://github.com/sirtakahe)

# Home assistant 插件：birdnet-pi

[![捐赠](https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white)](https://www.buymeacoffee.com/alexbelgium)
[![捐赠](https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white)](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.json)
![入口](https://img.shields.io/badge/dynamic/json?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.json)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库点赞的人！要点赞请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/birdnet-pi/stats.png)

## 关于

_注意：如需在没有 HomeAssistant（经典 Docker 容器）的情况下使用，请参阅[此处](https://github.com/alexbelgium/hassio-addons/blob/master/birdnet-pi/README_standalone.md)_

---

[birdnet-pi](https://github.com/Nachtzuster/BirdNET-Pi) 是一种用于持续鸟类监测和识别的人工智能解决方案，最初由 @mcguirepr89 在 GitHub 上开发（https://github.com/mcguirepr89/BirdNET-Pi），其工作由 @Nachtzuster 和其他开发者在活跃的分叉（https://github.com/Nachtzuster/BirdNET-Pi）中继续进行。

插件功能：
- 由 [linuxserver](https://github.com/linuxserver/docker-baseimage-debian) 提供的健壮基础镜像
- 感谢 https://github.com/gdraheim/docker-systemctl-replacement，实现了正常工作的 Docker 系统
- 使用 Home Assistant 的 pulseaudio 服务器
- 使用 Home Assistant 的 tmpfs 在 RAM 中存储临时文件，避免磁盘磨损
- 将所有配置文件暴露到 /config，以允许持久化和轻松访问
- 允许修改存储鸟类歌曲的位置（最好是一个外部硬盘）
- 支持入口，以允许安全的远程访问而不暴露端口

## 配置

---

安装后，首次启动插件
Web UI 可以通过两种方式找到：
- Home Assistant 的入口（无需密码，但某些功能无法工作）
- 使用 <http://homeassistant:port> 直接访问，端口为 birdnet.conf 中定义的端口。当要求输入密码时，用户名是 `birdnet`，密码是您可以在 birdnet.con 中定义的密码（默认为空白）。这与插件选项中的密码不同，后者是访问 Web 终端的密码

Web 终端访问：用户名 `pi`，密码为在插件选项中定义的密码

您需要一个麦克风：可以使用连接到 Home Assistant 的麦克风，或使用 RTP 摄像机的音频流。

选项可以通过三种方式配置：

- 插件选项

```yaml
BIRDSONGS_FOLDER: 存储鸟类歌曲文件的文件夹 # 如果您希望避免分析拥塞，应将其设置为 SSD
MQTT_DISABLED : 如果为 true，将禁用自动 MQTT 发布。仅在已经有一个本地代理可用时才有效
LIVESTREAM_BOOT_ENABLED: 从启动时开始直播，或从设置中开始
Use_tphakala_model_v2: false # 切换到 BirdNET-Go 分类器文件
PROCESSED_FOLDER_ENABLED : 如果启用，您需要在 birdnet.conf（或 birdnet 设置）中设置最后保存到 tmpfs 中的 WAV 文件数量（在 /tmp/Processed 中，以避免磁盘磨损），如果您希望检索它们。此数量可以从插件选项中调整
TZ: Etc/UTC 指定一个时区使用，请参阅 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
pi_password: 设置访问 Web 终端的用户密码
localdisks: sda1 # 将您的驱动器的硬件名称（用逗号分隔）或其标签放在这里。例如。sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，列出要挂载的 SMB 服务器，用逗号分隔
cifsusername: "username" # 可选，SMB 用户名，所有 SMB 共享相同
cifspassword: "password" # 可选，SMB 密码
cifsdomain: "domain" # 可选，允许设置 SMB 共享的域
```

- config.yaml
使用 Filebrowser 插件在 /config/db21ed7f_birdnet-pi/config.yaml 中找到的 config.yaml 文件可以配置附加变量

- config_env.yaml
可以在那里配置附加环境变量

### 挂载驱动器

此插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：参见 [向您的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

## 安装

---

此插件的安装非常简单，与其他插件的安装没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件商店的右上角，或点击下面按钮如果您已配置我的 HA）
   [![打开您的 Home Assistant 实例并显示预填充特定仓库 URL 的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 设置插件选项以符合您的偏好
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开 Web UI 并调整软件选项

## 与 Home Assistant 集成

---
### Apprise

您可以使用 apprise 通过 MQTT 发送通知，然后使用 HomeAssistant 进行操作
更多信息：https://wander.ingstar.com/projects/birdnetpi.html

### 自动 MQTT

如果安装了 MQTT，插件将自动更新 birdnet 主题，每次检测到物种时

## 使用 SSL

---

选项 1：安装 let's encrypt 插件，生成证书。它们默认存储在 /ssl 中的 certfile.pem 和 keyfile.pem。只需在插件选项中启用 SSL，它就会正常工作。

选项 2：启用端口 80，将您的 BirdNET-Pi URL 定义为 https。证书将由 caddy 自动生成

## 提高检测精度

---

### 卡片的增益

使用终端选项卡中的 alsamixer，确保音量足够高，但不要太高（不要在红色部分）
https://github.com/mcguirepr89/BirdNET-Pi/wiki/Adjusting-your-sound-card

### Ferrite

在我的情况下，添加 ferrite 珠导致噪声更差

### 辅助到 USB 转换器

根据我的测试，只有使用 KT0210 的转换器（例如 Ugreen 的）才能正常工作。我无法检测到基于 ALC 的转换器

### 麦克风比较

推荐麦克风（[完整讨论在这里](https://github.com/mcguirepr89/BirdNET-Pi/discussions/39)）：
- Clippy EM272 (https://www.veldshop.nl/en/smart-clippy-em272z1-mono-omni-microphone.html) + ugreen 辅助到 USB 连接器：最佳灵敏度，使用领夹技术
- Boya By-LM40：最佳性价比
- Hyperx Quadcast：最佳灵敏度，使用心形技术

结论，使用 Dahua 的麦克风已经足够好，EM272 是最佳选择，但 Boya by-lm40 是一个非常好的折中方案，因为 birndet 模型分析 0-15000Hz 范围

![图片](https://github.com/alexbelgium/hassio-addons/assets/44178713/df992b79-7171-4f73-b0c0-55eb4256cd5b)

### Denoise（[完整讨论在这里](https://github.com/mcguirepr89/BirdNET-Pi/discussions/597)）

Denoise 受到严肃研究人员的不欢迎。但它确实显著提高了检测质量！在 HomeAssistant 中如何进行：
- 使用 Portainer 插件，进入 hassio_audio 容器，并修改文件 /etc/pulse/system.pa 以添加行 `load-module module-echo-cancel`
- 进入终端插件，并输入 `ha audio restart`
- 在插件选项中选择回声消除设备作为输入设备

### 高通滤波器

应避免使用，因为模型使用了整个 0-15khz 范围

## 常见问题

尚未提供

## 支持

在 GitHub 上创建问题

---

![插图](https://raw.githubusercontent.com/tphakala/birdnet-pi/main/doc/birdnet-pi-dashboard.webp)