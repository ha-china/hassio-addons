# 家庭助理附加组件：battybirdnet-pi

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbattybirdnet-pi%2Fconfig.json)
![入口](https://img.shields.io/badge/dynamic/json?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbattybirdnet-pi%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbattybirdnet-pi%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码%20检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/请%20给我%20喝杯%20咖啡%20(没有%20Paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/请%20给我%20喝杯%20咖啡%20使用%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点星的人！要点亮它，请点击下方的图片，然后它会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/BirdNET-Pi/stats.png)

## 关于

---

[battybirdnet-pi](https://github.com/rdz-oss/BattyBirdNET-Pi) 是一个运行在 Raspberry Pi 4/5 上的实时声学蝙蝠和鸟类分类系统，基于 BattyBirdNET-Analyzer 构建。

附加组件的特点：
- 由 [linuxserver](https://github.com/linuxserver/docker-baseimage-debian) 提供的强大基础镜像
- 得益于 https://github.com/gdraheim/docker-systemctl-replacement 的工作 Docker 系统
- 使用 HA pulseaudio 服务器
- 使用 HA tmpfs 在内存中存储临时文件，避免磁盘磨损
- 将所有配置文件暴露到 /config，以便于保存和便捷访问
- 允许修改存储鸟类歌曲的位置（最好是外部硬盘）
- 支持 ingress，以便在不暴露端口的情况下安全远程访问

## 配置

---

安装后，首次启动附加组件
Webui 可以通过两种方式找到：
- 从 HA 进入（无需密码，但某些功能无法使用）
- 直接访问 <http://homeassistant:port>，端口为在 birdnet.conf 中定义的端口。当被要求输入密码时，用户名为 `birdnet`，密码为你在 birdnet.con 中可以定义的密码（默认为空）。这个密码与附加组件选项中的密码不同，后者是用于访问 Web 终端的密码。

Web 终端访问：用户名 `pi`，密码：在附加组件选项中定义的密码

你需要一个麦克风：可以使用连接到 HA 的麦克风或 rstp 摄像头的音频流。

选项可以通过三种方式进行配置：

- 附加组件选项

```yaml
BIRDSONGS_FOLDER: 存储鸟鸣文件的文件夹 # 如果要避免分析阻塞，应该是一个 SSD
MQTT_DISABLED : 如果为 true，则禁用自动 mqtt 发布。只有在本地代理可用时有效
LIVESTREAM_BOOT_ENABLED: 从启动开始直播，或从设置开始
PROCESSED_FOLDER_ENABLED : 如果启用，你需要在 birdnet.conf（或 birdnet 的设置）中设置临时文件夹 "/tmp/Processed" 中将要保存的最后几个 wav 文件的数量（因此没有磁盘磨损），以便在需要时检索。这一数量可以从附加组件选项中调整
TZ: Etc/UTC 指定要使用的时区，请参见 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
pi_password: 设置访问 Web 终端的用户密码
localdisks: sda1 #将要挂载的驱动器的硬件名称，用逗号分隔，或其标签。例如 sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，要挂载的 smb 服务器列表，用逗号分隔
cifsusername: "用户名" # 可选，smb 用户名，适用于所有 smb 共享
cifspassword: "密码" # 可选，smb 密码
cifsdomain: "域" # 可选，允许为 smb 共享设置域
```

- Config.yaml
可以使用位于 /config/db21ed7f_battybirdnet-pi/config.yaml 中的 config.yaml 文件配置其他变量，通过 Filebrowser 附加组件访问

- Config_env.yaml
在此处配置其他环境变量

## 安装

---

此附加组件的安装非常简单，与安装其他任何附加组件没有不同。

1. 将我的附加组件仓库添加到你的家庭助理实例（在副本商店右上方点击，或如果你已配置我的 HA，请点击下面的按钮）
   [![打开你的家庭助理实例并显示添加附加组件库对话框，特定仓库 URL 预填充。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `保存` 按钮以保存你的配置。
4. 按照你的偏好设置附加组件选项。
5. 启动附加组件。
6. 检查附加组件的日志以查看是否一切正常。
7. 打开 WebUI 并调整软件选项。

## 与 HA 的集成

---
### Apprise

你可以使用 apprise 通过 mqtt 发送通知，然后通过 HomeAssistant 对其进行处理
更多信息： https://wander.ingstar.com/projects/birdnetpi.html

### 自动 mqtt

如果 mqtt 已安装，附加组件会自动用每个检测到的物种更新 birdnet 主题。

## 使用 ssl

---

选项1：安装 let's encrypt 附加组件，生成证书。它们默认是存储在 /ssl 中的 certfile.pem 和 keyfile.pem。只需从附加组件选项中启用 ssl，它将正常工作。

选项2：启用端口 80，将你的 battybirdnet-pi URL 定义为 https。证书将由 caddy 自动生成。

## 改善检测

---

### 增益调整

使用 Terminal 选项卡中的 alsamixer，确保音量足够高但又不能太高（不要在红色部分）
https://github.com/mcguirepr89/BirdNET-Pi/wiki/Adjusting-your-sound-card

### 铁氧体

在我的情况下，添加铁氧体珠会导致更大的噪音。

### 辅助到 USB 适配器

根据我的测试，只有使用 KT0210 的适配器（例如 Ugreen 的）才能正常工作。我无法让基于 ALC 的适配器被识别。

### 麦克风比较

推荐的麦克风（[完整讨论在这里](https://github.com/mcguirepr89/BirdNET-Pi/discussions/39)）：
- Clippy EM272 (https://www.veldshop.nl/en/smart-clippy-em272z1-mono-omni-microphone.html) + ugreen aux 到 usb 连接器：最佳灵敏度，采用领夹技术
- Boya By-LM40：最佳性价比
- Hyperx Quadcast：最佳灵敏度，采用心形指向技术

结论，使用 Dahua 的麦克风就足够好，EM272 是最佳选择，但 Boya By-LM40 是一个非常好的折中方案，因为 birndet 模型分析 0-15000Hz 范围。

![image](https://github.com/alexbelgium/hassio-addons/assets/44178713/df992b79-7171-4f73-b0c0-55eb4256cd5b)

### 降噪 ([完整讨论在这里](https://github.com/mcguirepr89/BirdNET-Pi/discussions/597))

降噪技术在严肃研究者中并不受欢迎。然而，它确实似乎显著提高了检测质量！以下是在 HA 中实现的方法：
- 使用 Portainer 附加组件，进入 hassio_audio 容器，并修改文件 /etc/pulse/system.pa，添加行 `load-module module-echo-cancel`
- 进入 Terminal 附加组件，输入 `ha audio restart`
- 在附加组件选项中选择消回声的设备作为输入设备。

### 高通滤波器

应避免使用，因为模型使用整个 0-15khz 范围。

## 常见问题

尚不可用。

## 支持

在 GitHub 上创建一个问题。