## &#9888; 公开问题：[[BirdNET-Pi Docker 独立模式] 服务未启动 (创建于 2025-06-24)](https://github.com/alexbelgium/hassio-addons/issues/1927) 由 [@sirtakahe](https://github.com/sirtakahe) 发起

# Home Assistant 附加组件：birdnet-pi

我在空闲时间维护此及其他 Home Assistant 附加组件：跟进上游更改、HA 更改以及在真实硬件上进行测试花了很多时间和精力（以及一些金钱）。我使用了大约 5-10 个我不是自己日常使用的大于 110 个附加组件，因此我会安装测试机器（并购买一些测试服务，如 vpn）来进行故障排除和改进附加组件。

如果这个附加组件能为您节省时间或使您的配置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人收藏了我的仓库！点击上方图片收藏，它将会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/birdnet-pi/stats.png)

## 关于

_注：如果您想在不使用 HomeAssistant（经典 docker 容器）的情况下使用它，请参见 [此处](https://github.com/alexbelgium/hassio-addons/blob/master/birdnet-pi/README_standalone.md)_

---

[birdnet-pi](https://github.com/Nachtzuster/BirdNET-Pi) 是一个用于持续鸟类监测和识别的 AI 解决方案，最初由 @mcguirepr89 在 github 上开发 (https://github.com/mcguirepr89/BirdNET-Pi)，其工作由 @Nachtzuster 和其他开发者在一个活跃的分叉库上继续 (https://github.com/Nachtzuster/BirdNET-Pi)

附加组件的特性：
- 由 [linuxserver](https://github.com/linuxserver/docker-baseimage-debian) 提供的健壮基础镜像
- 感谢 https://github.com/gdraheim/docker-systemctl-replacement 的 docker 系统正常工作
- 使用 HA pulseaudio 服务器
- 使用 HA tmpfs 将临时文件存储在 ram 中以避免磁盘磨损
- 将所有配置文件暴露到 /config 以允许持久化和易于访问
- 允许修改存储鸟类歌曲的位置（最好使用外部 hdd）
- 支持 ingress，允许在不暴露端口的情况下安全远程访问

## 配置

---

安装后，首次启动附加组件
Webui 可以通过两种方式访问：
- 从 HA 通过 Ingress 访问（无需密码，但部分功能不可用）
- 直接访问 <http://homeassistant:port>，端口由 birdnet.conf 中定义。要求密码时，用户名为 `birdnet`，密码是您可以在 birdnet.con 中定义的参数（默认为空）。这与附加组件选项中的密码不同，附加组件选项中的密码必须用于访问 Web 终端。

Web 终端访问：用户名 `pi`，密码：如附加组件选项中定义

您需要一个麦克风：要么使用连接到 HA 的麦克风，要么使用 rstp 摄像头的音频流。

配置选项可以通过三种方式配置：

- 附加组件选项

```yaml
BIRDSONGS_FOLDER: 存储鸟类歌声文件的文件夹 # 如果您想避免分析堵塞，应该使用 ssd
MQTT_DISABLED: 如果为 true，则禁用自动 mqtt 发布。仅在没有本地代理可用的情况下才有效
LIVESTREAM_BOOT_ENABLED: 从引导启动 livestream，或从设置启动
Use_tphakala_model_v2: false # 切换到 BirdNET-Go 分类器文件
PROCESSED_FOLDER_ENABLED : 如果启用，您需要在 birdnet.conf 中设置（或 birdnet 的设置中）在 tmpfs 中的临时文件夹 "/tmp/Processed" 内保存的最后 wav 文件数量（因此不会磨损磁盘）。如果希望检索它们，可以此从附加组件选项中调整此数量
TZ: Etc/UTC 指定要使用的时区，见 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
pi_password: 设置访问 Web 终端的用户密码
localdisks: sda1 # 放置您驱动器的硬件名称以挂载，用逗号分隔，或将其标签。例如 sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，列出要挂载的 smb 服务器，用逗号分隔
cifsusername: "username" # 可选，smb 用户名，适用于所有 smb 共享
cifspassword: "password" # 可选，smb 密码
cifsdomain: "domain" # 可选，允许设置 smb 共享的域
```

- Config.yaml
使用位于 /config/db21ed7f_birdnet-pi/config.yaml 中的 Config.yaml 文件使用 Filebrowser 附加组件配置其他变量

- Config_env.yaml
可以在该文件中配置其他环境变量

### 挂载驱动器

此附加组件支持挂载本地驱动器以及远程 SMB 共享：

- **本地驱动器**：参见 [在附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件支持通过 `addon_config` 映射自定义脚本和环境变量：

- **自定义脚本**：参见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件 `env_vars` 选项传递额外的环境变量（大写或小写字母均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

## 安装

---

此附加组件的安装非常简单，与其他任何附加组件的安装没有区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置了我的 HA，则点击下方的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好设置
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否正常。
1. 打开 WebUI 并调整软件选项

## 与 HA 集成

---
### Apprise

您可以使用 apprise 通过 mqtt 发送通知，然后利用 HomeAssistant 对其进行操作
进一步信息：https://wander.ingstar.com/projects/birdnetpi.html

### 自动 mqtt

如果安装了 mqtt，附加组件会自动更新 birdnet 主题，每次检测到物种时都会更新

## 使用 ssl

---

选项 1：安装 let's encrypt 附加组件，生成证书。它们默认为 /ssl 中的 certfile.pem 和 keyfile.pem。只需启用附加组件中的 ssl 即可，它将正常工作。

选项 2：启用端口 80，将您的 BirdNET-Pi URL 定义为 https。证书将由 caddy 自动生成

## 提高检测率

---

### 卡增益

在 Terminal 标签页中使用 alsamixer，确保音量足够高但不要太高（不要在红色区域）
https://github.com/mcguirepr89/BirdNET-Pi/wiki/Adjusting-your-sound-card

### 铁氧体

添加铁氧体磁珠在我的情况下导致噪音变差

### AUX 转 USB 适配器

根据我的测试，只有使用 KT0210（如 Ugreen 的）的适配器有效。我无法让基于 ALC 的适配器被检测到。

### 麦克风比较

推荐的麦克风 ([完整讨论在这里](https://github.com/mcguirepr89/BirdNET-Pi/discussions/39)):
- Clippy EM272 (https://www.veldshop.nl/en/smart-clippy-em272z1-mono-omni-microphone.html) + ugreen aux to usb 连接器：在领夹技术上灵敏度最佳
- Boya By-LM40：最佳质量/价格比
- Hyperx Quadcast：在心形技术上灵敏度最佳

结论，使用 Dahua 的麦克风就足够了，EM272 是最优选择，但 Boya by-lm40 是一个非常不错的折衷方案，因为 birndet 模型分析 0-15000Hz 的范围

![image](https://github.com/alexbelgium/hassio-addons/assets/44178713/df992b79-7171-4f73-b0c0-55eb4256cd5b)

### 降噪 ([完整讨论在这里](https://github.com/mcguirepr89/BirdNET-Pi/discussions/597))

降噪受到严肃研究员的批评。然而，它似乎确实显著提高检测质量！在 HA 中这是如何做的：
- 使用 Portainer 附加组件，进入 hassio_audio 容器，并修改 /etc/pulse/system.pa 文件以添加一行 `load-module module-echo-cancel`
- 进入 Terminal 附加组件，并输入 `ha audio restart`
- 在附加组件选项中选择回音消除设备作为输入设备

### 高通滤波

应避免使用，因为模型使用整个 0-15khz 范围

## 常见问题

暂不可用

## 支持

在 github 上创建问题

---

![illustration](https://raw.githubusercontent.com/tphakala/birdnet-pi/main/doc/birdnet-pi-dashboard.webp)

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
