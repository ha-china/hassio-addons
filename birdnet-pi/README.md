## &#9888; 待办事项 : [[BirdNET-Pi Docker 独立部署] 服务无法启动 (创建于 2025-06-24)](https://github.com/alexbelgium/hassio-addons/issues/1927) 由 [@sirtakahe](https://github.com/sirtakahe)

# Home Assistant 附加组件：birdnet-pi


我利用业余时间维护此及其他 Home Assistant 附加组件：跟踪上游更改、HA 本身的更改，并在真实硬件上进行测试需要大量时间（以及一些金钱）。我非常经常使用我超过 110 个附加组件中的 5-10 个，因此我经常安装测试机器（并购买一些我自己不使用的测试服务，如 vpn）来排查问题和改进附加组件

如果这个附加组件能为您节省时间或使您的设置更加便捷，我会非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbirdnet-pi%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的仓库点赞！要开始点赞，请点击下方的图片，然后它将会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/birdnet-pi/stats.png)

## 关于说明

_注 : 关于 HomeAssistant 之外的使用（经典 Docker 容器），请参见 [此处](https://github.com/alexbelgium/hassio-addons/blob/master/birdnet-pi/README_standalone.md)_

---

[birdnet-pi](https://github.com/Nachtzuster/BirdNET-Pi) 是一项原始的鸟类监控和识别的 AI 解决方案，最初由 @mcguirepr89 在 github (https://github.com/mcguirepr89/BirdNET-Pi) 上开发，其工作由 @Nachtzuster 和其他开发者在活跃的分支上继续 (https://github.com/Nachtzuster/BirdNET-Pi)

附加组件的功能：
- 由 [linuxserver](https://github.com/linuxserver/docker-baseimage-debian) 提供的坚固基础镜像
- 得益于 https://github.com/gdraheim/docker-systemctl-replacement 工作的 Docker 系统正常运行
- 使用 HA pulseaudio 服务器
- 使用 HA tmpfs 将临时文件存储在 ram 中以避免磁盘损耗
- 将所有配置文件暴露到 /config 以允许持久化和方便访问
- 允许修改存储的鸟叫声的位置（最好是在外部硬盘上）
- 支持 ingress，允许无需暴露端口即可实现安全的远程访问

## 配置

---

安装后，首次启动附加组件
Webui 的访问方式有两种：
- 从 HA 通过 Ingress 访问 (不需要密码，但某些功能无法工作)
- 直接访问 <http://homeassistant:端口>，端口为 birdnet.conf 中定义的端口。当请求密码时，用户名必须是 `birdnet`，密码是在 birdnet.con 中可以定义的 (默认为空)。这与附加组件选项中的密码不同，后者必须用于访问 web 终端

Web 终端访问：用户名 `pi`，密码：如在附加组件选项中定义的那样

您需要一个麦克风：要么使用连接在 HA 上的麦克风，要么使用 rstp 摄像头的音频流。

有三种方式可以配置选项：

- 附加组件选项

```yaml
BIRDSONGS_FOLDER: 存储鸟叫声文件的文件夹 # 如果您想避免分析阻塞，不应该是 ssd
MQTT_DISABLED : 如果为 true，则禁用自动 mqtt 发布。仅在有可用的本地 Broker 时才有效
LIVESTREAM_BOOT_ENABLED: 启动 livestream，启动时或从设置中启动
Use_tphakala_model_v2: false # 切换到 BirdNET-Go 分类器文件
PROCESSED_FOLDER_ENABLED : 如果启用，您需要在 birdnet.conf (或 birdnet 的设置) 中设置将保存在临时文件夹 "/tmp/Processed" 中的最后多少个 wav 文件。该文件位于 tmpfs 内（因此不会产生磁盘损耗）。如果希望检索它们，可以此数值适应，数字可以在附加组件选项中调整
TZ: Etc/UTC 指定要使用的时区，参见 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
pi_password: 设置访问 Web 终端的用户密码
localdisks: sda1 # 输入要挂载的硬件驱动器名称，由逗号分隔，或为其标签。例如 sda1, sdb1, MYNAS... 只挂载一个文件夹，例如 MYNAS/public 挂载到 /mnt/MYNAS/public (2026-09-19 之后发布的附加组件版本)
networkdisks: "//SERVER/SHARE" # 可选，要挂载的 smb 服务器列表，由逗号分隔
cifsusername: "用户名" # 可选，smb 用户名，适用于所有 smb 共享
cifspassword: "密码" # 可选，smb 密码
cifsdomain: "域名" # 可选，允许设置 smb 共享的域
```

- Config.yaml
可以找到 /config/db21ed7f_birdnet-pi/config.yaml 的 Config.yaml
文件，并利用 Filebrowser 附加组件配置额外的变量。

- Config_env.yaml
可以在那里配置额外的环境变量。

### 挂载驱动器

此附加组件支持挂载本地驱动器以及远程 SMB 共享：

- **本地驱动器**：参见 [附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件支持通过 `app_config` 映射来使用自定义脚本和环境变量：

- **自定义脚本**：参见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件 `env_vars` 选项传递额外的环境变量（名称大小写字母均可）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

---

安装此附加组件非常直接，与安装任何其他附加组件没有什么不同。

1. 将我的附加组件仓库添加到您的 home assistant 实例中（在 supervisor 附加组件存储右上角，或如果您已配置了我的 HA，则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的附加组件存储添加对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 将附加组件选项设置为您的偏好设置
1. 启动附加组件。
1. 检查附加组件的日志，查看一切是否顺利。
1. 打开 Webui 并根据软件选项进行适应。

## 与 HA 集成


### Apprise

您可以使用 apprise 发送 mqtt 通知，然后使用 HomeAssistant 对此采取行动
更多信息：https://wander.ingstar.com/projects/birdnetpi.html

### 自动 mqtt

如果已安装 mqtt，附加组件会自动更新每次检测到的物种的 birdnet 主题

## 使用 ssl

---

选项 1：安装 letsencrypt 附加组件，生成证书。它们默认为 /ssl 中的 certfile.pem 和 keyfile.pem。只需从附加组件选项中启用 ssl 即可。

选项 2：启用端口 80，将您的 BirdNET-Pi URL 定义为 https。证书将由 caddy 自动生成。

## 提高识别准确性

---

### 卡的增益

使用终端标签中的 alsamixer，确保音量足够高，但不要太高（不要处于红色部分）
https://github.com/mcguirepr89/BirdNET-Pi/wiki/Adjusting-your-sound-card

### 抗磁珠

添加抗磁珠在我的情况下使最坏的情况下了噪声

### Aux 转 USB 适配器

根据我的测试，只有使用 KT0210 的适配器（如 Ugreen 的）有效。我无法检测到基于 ALC 的适配器。

### 麦克风比较

推荐的麦克风 ([在此讨论完整](https://github.com/mcguirepr89/BirdNET-Pi/discussions/39)):
- Clippy EM272 (https://www.veldshop.nl/en/smart-clippy-em272z1-mono-omni-microphone.html) + ugreen aux 转 USB 连接器：具有领夹技术的最佳灵敏度
- Boya By-LM40：最佳质量/价格比
- Hyperx Quadcast：具有心型指向技术的最佳灵敏度

结论，使用 Dahua 的麦克风足够好，EM272 是最佳的，但 Boya by-LM40 是一个非常好的折中方案，因为 BirdNET 模型分析 0-15000Hz 范围

![image](https://github.com/alexbelgium/hassio-addons/assets/44178713/df992b79-7171-4f73-b0c0-55eb4256cd5b)

### 降噪 ([在此讨论完整](https://github.com/mcguirepr89/BirdNET-Pi/discussions/597))

降噪似乎被严肃研究人员所不齿。然而，它确实似乎显著提高了检测质量！这是在 HA 中如何操作：
- 使用 Portainer 附加组件，进入 hassio_audio 容器，并修改文件 /etc/pulse/system.pa 以添加行 `load-module module-echo-cancel`
- 进入终端附加组件，并输入 `ha audio restart`
- 在附加组件选项中选择回波消除设备作为输入设备

### 高通过滤器

应尽量避免，因为模型使用整个 0-15khz 范围。

## 常见问题

目前尚不可用

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

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
