## ⚠️ 开启问题 : [[BirdNET-Pi Docker 独立版] 服务无法启动 (于 2025-06-24 开启)](https://github.com/alexbelgium/hassio-addons/issues/1927) by [@sirtakahe](https://github.com/sirtakahe)

# Home Assistant 插件：birdnet-pi

## 💖 支持开发

我利用业余时间维护这个和其他 Home Assistant 插件：跟上上游变更、HA 变更，并在真实硬件上测试需要大量时间（和一些金钱）。我大约使用我超过 110 个插件中的 5-10 个非常频繁，我安装测试机器（和购买一些测试服务如 VPN）来排错和改进插件，而我并不自己使用它们。

如果这个插件为您节省了时间或简化了您的设置，我将非常感谢您的支持！

[![给我买咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.版本&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.入口&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.架构&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！点击下面的图片进行点赞，它将出现在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标者仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/birdnet-pi/stats.png)

## 关于

_注意 : 如需在没有 HomeAssistant（经典 Docker 容器）的情况下使用，请参阅 [此处](https://github.com/alexbelgium/hassio-addons/blob/master/birdnet-pi/README_standalone.md)_

---

[birdnet-pi](https://github.com/Nachtzuster/BirdNET-Pi) 是一个用于持续鸟类监测和识别的 AI 解决方案，最初由 @mcguirepr89 在 GitHub 上开发（https://github.com/mcguirepr89/BirdNET-Pi），其工作由 @Nachtzuster 和其他开发者在活跃的分叉（https://github.com/Nachtzuster/BirdNET-Pi）中继续进行。

插件的特性：
- 由 [linuxserver](https://github.com/linuxserver/docker-baseimage-debian) 提供的稳健基础镜像
- 感谢 https://github.com/gdraheim/docker-systemctl-replacement，可以正常工作的 Docker 系统
- 使用 HA pulseaudio 服务器
- 使用 HA tmpfs 在 RAM 中存储临时文件以避免磁盘磨损
- 将所有配置文件暴露到 /config 以允许持久性和轻松访问
- 允许修改存储鸟类歌曲的位置（最好是一个外部硬盘）
- 支持入口，以允许安全的远程访问而不暴露端口

## 配置

---

安装后，首次启动插件
WebUI 可以通过两种方式找到：
- 通过 HA 入口（无密码，但某些功能无法工作）
- 使用 <http://homeassistant:端口> 直接访问，端口为 birdnet.conf 中定义的端口。当要求输入密码时，用户名是 `birdnet`，密码是您可以在 birdnet.con 中定义的密码（默认为空白）。这与插件选项中的密码不同，后者是访问 Web 终端的密码

Web 终端访问：用户名 `pi`，密码为插件选项中定义的密码

您需要一个麦克风：可以使用连接到 HA 的麦克风或 RTP 摄像机的音频流

选项可以通过三种方式配置：

- 插件选项

```yaml
BIRDSONGS_FOLDER: 存储鸟类歌曲文件的文件夹 # 如果您想避免分析过程中的文件堵塞，应该是一个 SSD
MQTT_DISABLED : 如果为 true，将禁用自动 MQTT 发布。只有当本地代理已经可用时才有效
LIVESTREAM_BOOT_ENABLED: 从启动时开始直播，或从设置中开始
Use_tphakala_model_v2: false # 切换到 BirdNET-Go 分类器文件
PROCESSED_FOLDER_ENABLED : 如果启用，您需要在 birdnet.conf（或 birdnet 的设置）中设置将保存在 tmpfs 中的最后多少个 wav 文件在临时文件夹 "/tmp/Processed" 内（因此不会造成磁盘磨损），如果您想检索它们。这个数量可以从插件选项中调整
TZ: Etc/UTC 指定一个时区使用，参见 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
pi_password: 设置访问 Web 终端的用户密码
localdisks: sda1 # 将您的硬盘的硬件名称按逗号分隔挂载，或其标签。例如。sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，列出要挂载的 SMB 服务器，用逗号分隔
cifsusername: "username" # 可选，SMB 用户名，所有 SMB 共享都相同
cifspassword: "password" # 可选，SMB 密码
cifsdomain: "domain" # 可选，允许设置 SMB 共享的域
```

- config.yaml
可以使用 Filebrowser 插件在 /config/db21ed7f_birdnet-pi/config.yaml 中找到的 config.yaml 文件配置附加变量

- config_env.yaml
可以在那里配置附加环境变量

### 挂载驱动器

此插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件通过 ` addon_config ` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 ` env_vars ` 选项传递额外的环境变量（大小写名称）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

## 安装

---

此插件的安装非常简单，与其他插件的安装没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例（在 Supervisor 插件商店右上角，或如果您已经配置了我的 HA，请点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 设置插件选项以符合您的偏好
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开 WebUI 并调整软件选项

## 与 HA 集成

---
### Apprise

您可以使用 apprise 通过 MQTT 发送通知，然后使用 HomeAssistant 对这些通知进行操作
更多信息：https://wander.ingstar.com/projects/birdnetpi.html

### 自动 MQTT

如果安装了 MQTT，插件将自动更新 birdnet 主题以检测到的每个物种

## 使用 SSL

---

选项 1：安装 let's encrypt 插件，生成证书。它们默认存储在 /ssl 中的 certfile.pem 和 keyfile.pem。只需从插件选项中启用 SSL，它就可以工作。

选项 2：启用端口 80，将您的 BirdNET-Pi URL 定义为 https。证书将由 caddy 自动生成

## 提高检测效果

---

### 增加卡片增益

在终端选项卡中使用 alsamixer，确保音量足够高但不要太高（不要在红色部分）
https://github.com/mcguirepr89/BirdNET-Pi/wiki/Adjusting-your-sound-card

### Ferrite

在我的情况下，添加 ferrite 珠导致噪声更差

### 辅助到 USB 转换器

根据我的测试，只有使用 KT0210 的转换器（如 Ugreen 的）可以工作。我无法检测到基于 ALC 的转换器

### 麦克风比较

推荐的麦克风（[完整讨论在此](https://github.com/mcguirepr89/BirdNET-Pi/discussions/39)）：
- Clippy EM272 (https://www.veldshop.nl/en/smart-clippy-em272z1-mono-omni-microphone.html) + ugreen 辅助到 USB 连接器：使用领夹技术具有最佳灵敏度
- Boya By-LM40：最佳性价比
- Hyperx Quadcast：使用心形技术具有最佳灵敏度

结论，使用 Dahua 的麦克风已经足够好，EM272 是最佳的，但 Boya by-lm40 是一个非常好的折衷方案，因为 birndet 模型分析 0-15000Hz 范围

![图片](https://github.com/alexbelgium/hassio-addons/assets/44178713/df992b79-7171-4f73-b0c0-55eb4256cd5b)

### Denoise ([完整讨论在此](https://github.com/mcguirepr89/BirdNET-Pi/discussions/597))

Denoise 受到严肃研究人员的不满。但它确实显著提高了检测质量！在 HA 中如何进行：
- 使用 Portainer 插件，进入 hassio_audio 容器，并修改文件 /etc/pulse/system.pa 以添加行 `load-module module-echo-cancel`
- 进入 Terminal 插件，并输入 `ha audio restart`
- 在插件选项中选择回声消除设备作为输入设备

### 高通滤波

应避免使用，因为模型使用整个 0-15khz 范围

## 常见问题

尚未提供

## 支持

在 GitHub 上创建问题

---

![插图](https://raw.githubusercontent.com/tphakala/birdnet-pi/main/doc/birdnet-pi-dashboard.webp)
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
