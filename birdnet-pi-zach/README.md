## &#9888; 悬而未决的问题：[[BirdNET-Pi Docker 独立版] 服务无法启动 (创建于 2025-06-24)](https://github.com/alexbelgium/hassio-addons/issues/1927) 由 [@sirtakahe](https://github.com/sirtakahe) 提出

# Home Assistant 插件：BirdNET-Pi (zach7036)

我利用业余时间维护此及其他 Home Assistant 插件：跟踪上游变更、HA 变更以及在实际硬件上的测试需要花费大量时间（和一些金钱）。我大约使用 5-10 个我的 110 多个插件，因此我经常安装测试机器（并购买一些我自己不使用的测试服务，如 vpn）来排查问题和改进插件

如果此插件为您节省时间或使设置更简单，我将不胜感激您的支持！

[![为我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi-zach%2Fconfig.yaml)
![入口] (https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi-zach%2Fconfig.yaml)
![架构] (https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi-zach%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的仓库星标！要星标它，请点击下图，然后它将显示在右上角。感谢！_

[![@alexbelgium/hassio-addons 的 Star 者仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/birdnet-pi-zach/stats.png)

## 关于

_注：关于在无 HomeAssistant（经典 Docker 容器）环境下的使用，请见 [此处](https://github.com/alexbelgium/hassio-addons/blob/master/birdnet-pi-zach/README_standalone.md)_

---

[BirdNET-Pi](https://github.com/zach7036/BirdNET-Pi-Enhanced-Version) 是一项用于持续监测和识别鸟类的人工智能解决方案，最初由 @mcguirepr89 在 github 上开发 (https://github.com/mcguirepr89/BirdNET-Pi)。此插件基于 [@zach7036](https://github.com/zach7036) 的 [BirdNET-Pi-Enhanced-Version 分支](https://github.com/zach7036/BirdNET-Pi-Enhanced-Version)，添加了新功能和更新的 UI。对于基于 @Nachtzuster 分支的插件，请使用单独的 `birdnet-pi` 插件。

插件特性：
- 由 [linuxserver](https://github.com/linuxserver/docker-baseimage-debian) 提供的稳健基础镜像
- 借助 https://github.com/gdraheim/docker-systemctl-replacement 工作的 Docker 系统
- 使用 HA Pulseaudio 服务器
- 使用 HA tmpfs 将临时文件存储到内存中，避免磁盘磨损
- 将所有配置文件暴露到 /config，以便持久化存储和轻松访问
- 允许修改存储的鸟叫声的位置（最好外置到 hdd）
- 支持 ingress，以便在不暴露端口的前提下允许安全远程访问

## 配置

---

安装后首次启动插件
可以通过两种方式访问 Webui：
- 通过 HA 的 Ingress（无需密码，但部分功能不可用）
- 直接访问 <http://homeassistant:port>，端口由 birdnet.conf 中定义。当要求输入密码时，用户名为 `birdnet`，密码即为您在 birdnet.con 中配置的密码（默认留空）。这与插件选项中的密码不同，后者必须是用于访问 Web 终端的密码

Web 终端访问：用户名 `pi`，密码：由插件选项定义

您需要麦克风：要么使用连接至 HA 的麦克风，要么使用 RSTP 摄像头的音频流。

可以通过三种方式配置选项：

- 插件选项

```yaml
BIRDSONGS_FOLDER: 存储鸟叫声文件的文件夹 # 如果您希望避免分析阻塞，它应该是 ssd
MQTT_DISABLED: 如果为 true，则禁用自动 mqtt 发布。仅在已有本地 broker 时才有效
LIVESTREAM_BOOT_ENABLED: 从启动时或设置中启动直播流
Use_tphakala_model_v2: false # 切换到 BirdNET-Go 分类器文件
PROCESSED_FOLDER_ENABLED : 如果启用，您需要在 birdnet.conf 中（或 birdnet 的设置中）设置将保存于临时文件夹 "/tmp/Processed" 内的最后多少个 wav 文件（避免磁盘磨损）的数量，以便您检索它们。此数量可从插件选项中调整
TZ: Etc/UTC 指定要使用的时区，见 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
pi_password: 设置访问 Web 终端的用户密码
localdisks: sda1 # 输入您的驱动器硬件名称，以逗号分隔，或为其标签。例如：sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选， SMB 服务器列表，以逗号分隔
cifsusername: "username" # 可选，SMB 用户名，适用于所有 SMB 共享
cifspassword: "password" # 可选，SMB 密码
cifsdomain: "domain" # 可选，允许为 SMB 共享设置域
```

- Config.yaml
可以使用位于 /config/db21ed7f_birdnet-pi-zach/config.yaml 中的 Filebrowser 插件通过 config.yaml 文件配置更多变量

- Config_env.yaml
可在 Config_env.yaml 中配置更多环境变量

### 挂载设备

此插件支持挂载本地设备和远程 SMB 共享：

- **本地设备**：见 [在插件中挂载本地设备](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：见 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件支持通过 `addon_config` 映射使用自定义脚本和环境变量：

- **自定义脚本**：见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外环境变量（大写或小写字母名）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

## 安装

---

此插件的安装非常简单，与其他插件的安装没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例（在 supervisor 插件存储顶部右侧，或如果您已配置我的 HA，则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带特定仓库 URL 预填充的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮保存您的配置。
1. 将插件选项设置为您的偏好设置
1. 启动插件。
1. 查看插件日志以确认一切顺利。
1. 打开 WebUI 并调整软件选项

## 与 HA 集成

---
### Apprise

您可以使用 apprise 通过 mqtt 发送通知，然后使用 HomeAssistant 处理这些通知
更多信息：https://wander.ingstar.com/projects/birdnetpi.html

### 自动 mqtt

如果已安装 mqtt，插件会自动将检测到的物种主题更新（每种检测到的物种）

## 使用 ssl

---

选项 1：安装 let's encrypt 插件，生成证书。它们默认存储在 /ssl 目录中的 certfile.pem 和 keyfile.pem。只需启用插件选项中的 ssl 功能即可正常工作。

选项 2：启用 80 端口，将您的 BirdNET-Pi URL 定义为 https。证书将由 caddy 自动生成

## 提高检测精度

---

### 增益调节

在 Terminal 标签中使用 alsamixer，确保音量足够高但不过高（不要处于红色部分）
https://github.com/mcguirepr89/BirdNET-Pi/wiki/Adjusting-your-sound-card

### 磁环

添加磁环会导致噪音恶化（在我的情况下）

### Aux 转 USB 适配器

根据我的测试，仅使用 KT0210 的适配器（如 Ugreen）有效。我没能检测到基于 ALC 的适配器。

### 麦克风对比

推荐的麦克风（[完整讨论此处](https://github.com/mcguirepr89/BirdNET-Pi/discussions/39)）：
- Clippy EM272 (https://www.veldshop.nl/en/smart-clippy-em272z1-mono-omni-microphone.html) + ugreen aux 到 usb 连接器：最佳灵敏度（用于领夹式技术）
- Boya By-LM40：最佳性价比
- Hyperx Quadcast：最佳灵敏度（用于心形指向技术）

结论：使用 Dahua 的麦克风足够好，EM272 最理想，但 Boya by-lm40 是很好的折中方案，因为 birndet 模型分析 0-15000Hz 范围

![图片](https://github.com/alexbelgium/hassio-addons/assets/44178713/df992b79-7171-4f73-b0c0-55eb4256cd5b)

### 降噪 ([完整讨论此处](https://github.com/mcguirepr89/BirdNET-Pi/discussions/597))

降噪受到严肃研究人员的反对。然而，它确实似乎显著提高了检测质量！以下是如何在 HA 中操作：
- 使用 Portainer 插件，进入 hassio_audio 容器，并修改文件 /etc/pulse/system.pa，添加一行 `load-module module-echo-cancel`
- 进入 Terminal 插件，输入 `ha audio restart`
- 在插件选项中选择回声消除设备作为输入设备

### 高通滤波

应避免使用，因为模型使用了整个 0-15khz 范围

## 常见问题

尚未提供

## 支持

在 github 上创建问题

---

![插图](https://raw.githubusercontent.com/tphakala/birdnet-pi/main/doc/birdnet-pi-dashboard.webp)

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
