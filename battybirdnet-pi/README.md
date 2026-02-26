# Home Assistant 插件：battybirdnet-pi

我在业余时间维护这个和其他 Home Assistant 插件：跟踪上游更改、Home Assistant 更改以及在真实硬件上测试需要花费大量时间（以及一些金钱）。我经常使用大约 5-10 个我的 >110 个插件，所以我安装了测试机器（并购买了一些我不用自己的测试服务，如 vpn），以进行故障排除和改进插件。

如果这个插件为您节省了时间或使您的设置更简单，我将非常感激您的支持！

[![给我买杯咖啡][捐赠徽章]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-徽章]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbattybirdnet-pi%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbattybirdnet-pi%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbattybirdnet-pi%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[捐赠徽章]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-徽章]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点星的人！要点星，请点击下面的图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/battybirdnet-pi/stats.png)

## 关于

---

[battybirdnet-pi](https://github.com/rdz-oss/BattyBirdNET-Pi) 是一个基于 BattyBirdNET-Analyzer 的实时蝙蝠和鸟类分类系统，适用于 Raspberry Pi 4/5。

该插件的特性：
- 由 [linuxserver](https://github.com/linuxserver/docker-baseimage-debian) 提供的强大基础镜像
- 通过 https://github.com/gdraheim/docker-systemctl-replacement 提供的工作 Docker 系统
- 使用 HA pulseaudio 服务器
- 使用 HA tmpfs 在内存中存储临时文件，以避免磁盘磨损
- 将所有配置文件暴露在 /config 中，以便持久性和易于访问
- 允许修改存储鸟类歌曲的位置（最好使用外部硬盘）
- 支持入口，允许安全远程访问而不暴露端口

## 配置

---

安装后，首次启动插件
Webui 可以通过两种方式找到：
- 通过 HA 的入口（无密码，但一些功能无法使用）
- 直接访问 <http://homeassistant:port>，端口号是 birdnet.conf 中定义的端口号。当要求密码时，用户名是 `birdnet`，密码是您可以在 birdnet.con 中定义的密码（默认为空）。这与插件选项中的密码不同，插件选项中的密码是用于访问 Web 终端的密码

Web 终端访问：用户名 `pi`，密码：如插件选项中定义

您需要一个麦克风：可以使用连接到 HA 的麦克风，或者使用 rstp 相机的音频流。

选项可以通过以下三种方式进行配置：

- 插件选项

```yaml
BIRDSONGS_FOLDER: 存储鸟类歌曲文件的文件夹 # 如果您想避免分析卡顿，应该使用 SSD
MQTT_DISABLED : 如果为 true，则禁用自动 mqtt 发布。仅在已提供本地代理的情况下有效
LIVESTREAM_BOOT_ENABLED: 从启动时开始直播，或从设置中启动
PROCESSED_FOLDER_ENABLED : 如果启用，您需要在 birdnet.conf 中设置（或 birdnet 的设置）要保存到 tmpfs 中的临时文件夹 "/tmp/Processed" 内部的最后 wav 文件数量（这样就不会有磁盘磨损），以便在需要时检索它们。此数量可以从插件选项中进行调整
TZ: Etc/UTC 指定要使用的时区，请参阅 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
pi_password: 设置访问 Web 终端的用户密码
localdisks: sda1 # 放置您的驱动器硬件名称，用逗号分隔，或其标签。例如，sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，smb 服务器列表以挂载，用逗号分隔
cifsusername: "username" # 可选，smb 用户名，对所有 smb 共享相同
cifspassword: "password" # 可选，smb 密码
cifsdomain: "domain" # 可选，允许设置 smb 共享的域
```

- Config.yaml
可以在 `/config/db21ed7f_battybirdnet-pi/config.yaml` 中使用文件浏览器插件配置其他变量。

### 挂载驱动器

此插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（名称为大写或小写）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

## 安装

---

此插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件存储的右上角，或点击下面的按钮如果您已配置我的 HA）
   [![打开您的 Home Assistant 实例并显示具有特定仓库 URL 预填充的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 将插件选项设置为您的偏好。
1. 启动插件。
1. 检查插件的日志以查看是否一切顺利。
1. 打开 WebUI 并调整软件选项

## 与 HA 集成

---
### Apprise

您可以使用 Apprise 通过 mqtt 发送通知，然后使用 HomeAssistant 对这些通知采取行动
更多信息：https://wander.ingstar.com/projects/birdnetpi.html

### 自动 mqtt

如果已安装 mqtt，则插件会自动更新 birdnet 主题，每次检测到新物种时

## 使用 ssl

---

选项 1：安装 let's encrypt 插件，生成证书。它们默认存储在 /ssl 中的 certfile.pem 和 keyfile.pem。只需启用插件选项中的 ssl 即可，它就会工作。

选项 2：启用端口 80，将您的 battybirdnet-pi URL 定义为 https。证书将由 caddy 自动生成

## 改善检测

---

### 卡片增益

使用终端标签中的 alsamixer，确保声音水平足够高，但不要太高（不在红色部分）

https://github.com/mcguirepr89/BirdNET-Pi/wiki/Adjusting-your-sound-card

### 铁氧体

在我的情况下，添加铁氧体磁珠导致了最差的噪声

### 耳机到 USB 转换器

根据我的测试，只有使用 KT0210（例如 Ugreen 的）的转换器才有效。我无法使基于 ALC 的转换器被检测到。

### 麦克风比较

推荐麦克风（[完整讨论在此](https://github.com/mcguirepr89/BirdNET-Pi/discussions/39)）：
- Clippy EM272（https://www.veldshop.nl/en/smart-clippy-em272z1-mono-omni-microphone.html）+ ugreen 耳机到 USB 连接器：最佳灵敏度与领夹技术
- Boya By-LM40：最佳质量/价格比
- Hyperx Quadcast：最佳灵敏度与心形技术

结论，使用 Dahua 的麦克风就足够好了，EM272 是最佳选择，但 Boya by-lm40 是一个非常好的折衷方案，因为 birndet 模型分析 0-15000Hz 的范围

![image](https://github.com/alexbelgium/hassio-addons/assets/44178713/df992b79-7171-4f73-b0c0-55eb4256cd5b)

### 噪声抑制（[完整讨论在此](https://github.com/mcguirepr89/BirdNET-Pi/discussions/597)）

噪声抑制受到严肃研究人员的反对。然而，它似乎显著提高了检测质量！以下是在 HA 中执行噪声抑制的方法：
- 使用 Portainer 插件，进入 hassio_audio 容器，并修改文件 /etc/pulse/system.pa，添加行 `load-module module-echo-cancel`
- 进入终端插件，并输入 `ha audio restart`
- 在插件选项中选择已取消回声的设备作为输入设备

### 高通滤波器

应避免使用，因为模型使用整个 0-15khz 范围

## 常见问题

### Unifi 相机 RTSP

Unifi 相机默认的 RTSPS 链接有问题。必须将其更新为标准 RTSP 格式。`rstp://<CAMERA_IP>:7447/<TOKEN>`。

### UDP 更新

如果新添加的相机报告不健康，请将 `config.yaml` 中的传输配置设置为 `udp`，然后重新启动插件。

## 支持

在 github 上创建一个问题

---
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
