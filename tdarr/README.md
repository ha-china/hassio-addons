# Home Assistant 补充套件：Tdarr

我在空闲时间维护这个及其他 Home Assistant 补充套件：跟踪上游更改、HA 更改以及在实际硬件上进行测试需要大量时间（以及一些金钱）。我使用了超过 110 个补充套件中大约 5-10 个，因此我会定期安装测试机器（并购买一些我自己不使用的测试服务，如 VPN），以便排查问题和改进补充套件。

如果您能因为这个补充套件节省时间或简化您的设置，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 补充套件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftdarr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftdarr%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftdarr%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有订阅我的人！请点击下图中的图片来订阅它，之后它将显示在右上角。谢谢！_

[![@alexbelgium/hassio-addons 仓库之星人员名册](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/tdarr/stats.png)

## 关于

[Tdarr](https://tdarr.io) 是一个分布式的视频转换系统，它利用 FFmpeg/HandBrake 自动化媒体库的视频转换/重封装管理。它确保您的文件在编解码器、流和容器中完全符合您的需求。Tdarr 支持分布式处理，允许您将闲置硬件用于 Tdarr 节点，适用于 Windows、Linux（包括 ARM）和 macOS。

主要功能：
- 多节点分布式视频转换
- 自动化媒体库管理
- 支持 FFmpeg 和 HandBrake
- 硬件加速支持
- 基于 Web 的管理界面
- 基于插件的工作流系统

此补充套件基于 hurlenko 的 [docker 镜像](https://hub.docker.com/r/hurlenko/Tdarr)。

## 安装

此补充套件的安装非常简单，与安装任何其他 Hass.io 补充套件的过程没有不同。

1. 将我的补充套件仓库添加到您的 Home Assistant 实例中（在 supervisor 添加补充套件商店的右上角，或如果您已配置了我的 HA，则点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加补充套件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此补充套件。
3. 点击 `保存` 按钮以存储您的配置。
4. 启动补充套件。
5. 检查补充套件的日志以查看一切是否正常。
6. 谨慎地根据您的偏好配置补充套件，请参阅官方文档。

## 配置

Web UI 可在 `<您的 IP>:8265` 或通过侧边栏使用 Ingress 访问。
服务器端口 `8266` 用于连接外部 Tdarr 节点。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `CONFIG_LOCATION` | str | `/config/addons_config/tdarr` | 存放 Tdarr 配置文件的路径 |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 本地驱动器挂载路径（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加文件夹仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要补充套件版本发布于 2026-09-19 之后。 |
| `networkdisks` | str | | 挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 共享的用户名 |
| `cifspassword` | str | | SMB 共享的密码 |
| `cifsdomain` | str | | SMB 共享的域 |

### 配置示例

```yaml
CONFIG_LOCATION: "/config/addons_config/tdarr"
TZ: "Europe/London"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/media,//nas.local/transcoding"
cifsusername: "mediauser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 设置分布式视频转换

1. **配置服务器**：
   - 在 `<您的 IP>:8265` 访问 Web UI
   - 设置媒体库和视频转换设置
   - 根据需要配置插件和工作流

2. **添加外部节点**：
   - 在额外机器上安装 Tdarr 节点
   - 将其指向您的 Home Assistant IP，端口为 `8266`
   - 节点将自动注册并在 Web UI 中出现

3. **硬件加速**：
   - 该补充套件包含硬件加速支持
   - 在 Tdarr Web UI 设置中配置 GPU 视频转换
   - 支持的加速：Intel QuickSync、NVIDIA NVENC、AMD VCE

### 挂载驱动器

此补充套件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅 [在补充套件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [在补充套件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此补充套件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在补充套件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用补充套件的 `env_vars` 选项传递额外的环境变量（大小写无关）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 以获取详细信息。

### 硬件加速说明

该补充套件包含用于硬件加速的设备访问：
- Intel QuickSync：映射 `/dev/dri` 设备
- NVIDIA：设置环境变量以检测 GPU
- AMD：通过可用设备支持硬件加速

在 Tdarr Web UI 的设置 > FFmpeg/HandBrake 设置中配置硬件加速。

## 支持

- 官方 Tdarr 文档：[https://docs.tdarr.io/](https://docs.tdarr.io/)
- 在 [GitHub](https://github.com/alexbelgium/hassio-addons/issues) 创建问题
- 在 [Home Assistant 社区线程](https://community.home-assistant.io/t/home-assistant-addon-tdarr/282108/3) 提问

[repository]: https://github.com/alexbelgium/hassio-addons

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
