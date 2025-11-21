## ⚠️ Open Issue : [[BirdNET-Pi Docker Standalone] Services won't start (opened 2025-06-24)](https://github.com/alexbelgium/hassio-addons/issues/1927) by [@sirtakahe](https://github.com/sirtakahe)

# Home assistant add-on: birdnet-pi

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库加星的人！要加星，请点击下面的图片，然后它就会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/birdnet-pi/stats.png)

## 关于

_注意：如需在不使用HomeAssistant（经典docker容器）的情况下使用，请参阅[此处](https://github.com/alexbelgium/hassio-addons/blob/master/birdnet-pi/README_standalone.md)_

---

[birdnet-pi](https://github.com/Nachtzuster/BirdNET-Pi) 是一种用于持续鸟类监测和识别的人工智能解决方案，最初由 @mcguirepr89 在github上开发（https://github.com/mcguirepr89/BirdNET-Pi），其工作由 @Nachtzuster 和其他开发者在活跃的分叉（https://github.com/Nachtzuster/BirdNET-Pi）中继续进行。

该插件的特性：
- 由 [linuxserver](https://github.com/linuxserver/docker-baseimage-debian) 提供的稳健基础镜像
- 感谢 https://github.com/gdraheim/docker-systemctl-replacement，实现了正常工作的docker系统
- 使用HA pulseaudio服务器
- 使用HA tmpfs在ram中存储临时文件，避免磁盘磨损
- 将所有配置文件暴露到/config，以允许持久化和轻松访问
- 允许修改存储鸟类声音的位置（最好连接到外部硬盘）
- 支持ingress，允许安全远程访问而无需暴露端口

## 配置

---

安装后，首次启动插件
Webui可以通过两种方式找到：
- 通过HA的ingress（无需密码，但某些功能无法工作）
- 使用 <http://homeassistant:port> 直接访问，端口为birdnet.conf中定义的端口。当要求输入密码时，用户名为 `birdnet`，密码为可以在birdnet.con中定义的密码（默认为空白）。这与插件选项中的密码不同，后者是访问web终端必须使用的密码

Web终端访问：用户名 `pi`，密码：在插件选项中定义的密码

您需要一个麦克风：可以连接到HA的麦克风，或使用rstp摄像头的音频流。

选项可以通过三种方式配置：

- 插件选项

```yaml
BIRDSONGS_FOLDER: 存储鸟类声音文件的文件夹 # 如果要避免分析时磁盘堵塞，应该是一个ssd
MQTT_DISABLED : 如果为true，将禁用自动mqtt发布。仅当已经有一个本地代理可用时才有效
LIVESTREAM_BOOT_ENABLED: 从启动时启动直播，或从设置中启动
Use_tphakala_model_v2: false # 切换到BirdNET-Go分类器文件
PROCESSED_FOLDER_ENABLED : 如果启用，您需要在birdnet.conf（或birdnet的设置）中设置将保存在临时文件夹 "/tmp/Processed" 中的最后wav文件的数量（在tmpfs中，所以不会磨损磁盘），如果您想要检索它们。此数量可以从插件选项中调整
TZ: Etc/UTC 指定一个时区使用，见 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
pi_password: 设置访问web终端的用户密码
localdisks: sda1 #将您的硬盘的硬件名称用逗号分隔开来挂载，或其标签。例如。sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" #可选，列出要挂载的smb服务器，用逗号分隔
cifsusername: "username" #可选，smb用户名，所有smb共享相同
cifspassword: "password" #可选，smb密码
cifsdomain: "domain" #可选，允许设置smb共享的域
```

- config.yaml
使用Filebrowser插件在 /config/db21ed7f_birdnet-pi/config.yaml 中找到的config.yaml文件配置附加变量

- config_env.yaml
在那里可以配置附加环境变量

### 挂载驱动器

该插件支持挂载本地驱动器和远程SMB共享：

- **本地驱动器**：参见 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

该插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（大小写名称）。参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详细信息。

## 安装

---

该插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的home assistant实例（在supervisor插件商店的右上角，或点击下面的按钮如果您已经配置了我的HA）
   [![打开您的Home Assistant实例并显示带有特定仓库URL预填充的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 设置插件选项以符合您的偏好
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开webUI并调整软件选项

## 与HA集成

---
### Apprise

您可以使用apprise通过mqtt发送通知，然后使用HomeAssistant对这些通知进行操作
更多信息：https://wander.ingstar.com/projects/birdnetpi.html

### 自动mqtt

如果安装了mqtt，该插件将自动更新birdnet主题以每个检测到的物种

## 使用ssl

---

选项1：安装let's encrypt插件，生成证书。它们默认存储在 /ssl 中，默认为certfile.pem 和 keyfile.pem。只需在插件选项中启用ssl，它就会正常工作。

选项2：启用端口80，定义您的BirdNET-Pi URL为https。证书将由caddy自动生成

## 改进检测

---

### 增益卡片

使用Terminal标签中的alsamixer，确保音量足够高但不要太高（不要在红色部分）
https://github.com/mcguirepr89/BirdNET-Pi/wiki/Adjusting-your-sound-card

### Ferrite

在我的情况下，添加ferrite bead导致噪音更差

### Aux到usb适配器

根据我的测试，只有使用KT0210的适配器（如Ugreen的）可以工作。我无法检测到基于ALC的适配器。

### 麦克风比较

推荐麦克风（[完整讨论在此](https://github.com/mcguirepr89/BirdNET-Pi/discussions/39)):
- Clippy EM272 (https://www.veldshop.nl/en/smart-clippy-em272z1-mono-omni-microphone.html) + ugreen aux到usb连接器：最佳灵敏度，使用领夹技术
- Boya By-LM40：最佳性价比
- Hyperx Quadcast：最佳灵敏度，使用心形技术

结论，使用Dahua的麦克风已经足够好，EM272是最优的，但Boya by-lm40是一个非常好的折衷方案，因为birdnet模型分析0-15000Hz范围

![image](https://github.com/alexbelgium/hassio-addons/assets/44178713/df992b79-7171-4f73-b0c0-55eb4256cd5b)

### Denoise ([完整讨论在此](https://github.com/mcguirepr89/BirdNET-Pi/discussions/597))

Denoise受到严肃研究人员的批评。但它似乎显著提高了检测质量！在HA中如何进行：
- 使用Portainer插件，进入hassio_audio容器，并修改文件 /etc/pulse/system.pa 添加行 `load-module module-echo-cancel`
- 进入Terminal插件，并输入 `ha audio restart`
- 在插件选项中选择echo取消设备作为输入设备

### 高通滤波

应避免使用，因为模型使用了整个0-15khz范围

## 常见问题

尚未提供

## 支持

在github上创建问题

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
