# Home assistant 附加组件：Tdarr

我利用闲暇时间维护此及其他 Home Assistant 附加组件：跟上上游变化、HA 变化以及在实际硬件上测试需要耗费大量时间（以及一些金钱）。我大约使用了 5-10 个我拥有的 >110 个附加组件，因此我定期安装测试机器（并购买一些测试服务，如 vpn）来进行故障排除和改进附加组件，这些机器我自己并不使用。

如果此附加组件能为您节省时间或让您的设置更简单，我将不胜感激任何支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftdarr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftdarr%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftdarr%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人都给我的仓库点了星星！要星星请点击下图，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/tdarr/stats.png)

## 关于

[Tdarr](https://tdarr.io) 是一个用于自动化媒体库转码/remux 管理的分布式转码系统，使用 FFmpeg/HandBrake。它确保您的文件格式在编解码器、流和容器方面完全符合您的需要。Tdarr 支持分布式处理，允许您将闲置硬件用于 Tdarr Windows、Linux（包括 ARM）和 macOS 节点。

主要功能：
- 跨多个节点的分布式转码
- 自动化的媒体库管理
- 支持 FFmpeg 和 HandBrake
- 硬件加速支持
- 基于 Web 的管理界面
- 基于插件的工作流系统

此附加组件基于 [docker 镜像](https://hub.docker.com/r/hurlenko/Tdarr)（源自 hurlenko）。

## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件没有区别。

1. 将我的附加组件存储库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或者如果您已配置了 HA，请点击下方的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志以确认一切是否正常。
1. 仔细根据您的偏好配置附加组件，官方文档请参阅以获取详细信息。

## 配置

Web UI 可在 `<your-ip>:8265` 或通过侧边栏使用 Ingress 访问。
服务器端口为 `8266`，用于连接外部 Tdarr 节点。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `CONFIG_LOCATION` | str | `/config/addons_config/tdarr` | Tdarr 配置文件存储路径 |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 本地驱动器挂载（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 网络共享的用户名 |
| `cifspassword` | str | | SMB 网络共享的密码 |
| `cifsdomain` | str | | SMB 网络共享的域 |

### 示例配置

```yaml
CONFIG_LOCATION: "/config/addons_config/tdarr"
TZ: "Europe/London"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/media,//nas.local/transcoding"
cifsusername: "mediauser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 设置分布式转码

1. **配置服务器**：
   - 在 `<your-ip>:8265` 处访问 Web UI
   - 设置您的媒体库和转码设置
   - 根据需要配置插件和工作流

2. **添加外部节点**：
   - 在额外的机器上安装 Tdarr Node
   - 将其指向您的 Home Assistant IP 地址，端口为 `8266`
   - 节点将自动注册并出现在 Web UI 中

3. **硬件加速**：
   - 该附加组件包含硬件加速支持
   - 在 Tdarr Web UI 设置中配置 GPU 转码
   - 支持的加速：Intel QuickSync、NVIDIA NVENC、AMD VCE

### 挂载Drive

此附加组件支持挂载本地驱动器和本地远程 SMB 共享：

- **本地驱动器**：请参阅 [在附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [在附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件 `env_vars` 选项传递额外的环境变量（大小写名称均可）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

### 硬件加速说明

该附加组件包含用于硬件加速的设备访问：
- Intel QuickSync：映射 `/dev/dri` 设备
- NVIDIA：设置环境变量以检测 GPU
- AMD：通过可用设备支持硬件加速

在 Tdarr Web UI 的 设置 > FFmpeg/HandBrake 设置下配置硬件加速。

## 支持

- 官方 Tdarr 文档：[https://docs.tdarr.io/](https://docs.tdarr.io/)
- 在 [GitHub](https://github.com/alexbelgium/hassio-addons/issues) 上创建问题
- 在 [Home Assistant 社区线程](https://community.home-assistant.io/t/home-assistant-addon-tdarr/282108/3) 上提问

[repository]: https://github.com/alexbelgium/hassio-addons

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
