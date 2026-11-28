# Home Assistant 插件：Tdarr

我利用业余时间维护此及其他 Home Assistant 插件：跟进上游变更、HA 变更以及在真实硬件上进行测试，这需要大量时间（和资金）。我使用了约 5-10 个我拥有的 >110 个插件中非常常用的那些，甚至安装了一些我不自己使用的测试机器（并购买一些测试服务，如 vpn），以便调试和改进这些插件。

如果这个插件为您提供便利或使您的设置更容易，我将不胜感激，期待您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftdarr%2Fconfig.yaml)
![入口 (Ingress)](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftdarr%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftdarr%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=徽章等级)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库 Linter)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![建造者 (Builder)](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我的仓库点赞！要点赞它，请点击下方的图片，它就会显示在右上角。谢谢！_

[![alexbelgium/hassio-addons 的 星标组织者名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/tdarr/stats.png)

## 关于

[Tdarr](https://tdarr.io) 是一个基于 FFmpeg/HandBrake 的分布式转码系统，用于自动化媒体库的转码/重封装管理。它确保您的文件在编码、流和容器方面完全符合您的需求。Tdarr 支持分布式处理，允许您利用闲置硬件，其中包含针对 Windows、Linux（包括 ARM）和 macOS 的 Tdarr 节点。

主要特性：
- 跨多个节点的分布式转码
- 自动化的媒体库管理
- 支持 FFmpeg 和 HandBrake
- 硬件加速支持
- 基于 Web 的管理界面
- 基于插件的工作流系统

该插件基于 hurlenko 提供的 [docker 镜像](https://hub.docker.com/r/hurlenko/Tdarr)。

## 安装

此插件的安装非常简单，与其他任何 Hass.io 插件的安装相比并无不同。

1. 将我提供的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件存储区右上角，或如果您已配置了我的 HA，请点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的“添加插件仓库”对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动该插件。
1. 检查插件日志，查看一切是否顺利。
1. 小心地根据您的偏好配置该插件，请参阅官方文档获取更多详细信息。

## 配置

Web 用户界面可以在 `<your-ip>:8265` 或通过侧边栏使用 Ingress 访问。服务器端口为 `8266`，用于连接外部的 Tdarr 节点。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|---------|------|
| `CONFIG_LOCATION` | str | `/config/addons_config/tdarr` | Tdarr 配置文件存储的路径 |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载功能需要在 2026 年 09 月 19 日之后发布的插件版本中支持。 |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 网络共享的用户名 |
| `cifspassword` | str | | SMB 网络共享的密码 |
| `cifsdomain` | str | | SMB 网络共享的域名 |

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
   - 在 `<your-ip>:8265` 访问 Web 用户界面
   - 设置媒体库和转码设置
   - 根据需要配置插件和工作流

2. **添加外部节点**：
   - 在额外机器上安装 Tdarr 节点
   - 让它们指向您的 Home Assistant IP，端口 `8266`
   - 节点将自动注册并显示在 Web 用户界面中

3. **硬件加速**：
   - 该插件包含硬件加速支持
   - 在 Tdarr Web 用户界面设置中配置 GPU 转码
   - 支持的加速：Intel QuickSync、NVIDIA NVENC、AMD VCE

### 挂载驱动器

该插件支持挂载本地驱动器以及远程 SMB 共享：

- **本地驱动器**：请参阅 [如何在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [如何在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

该插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [如何在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件 `env_vars` 选项传递额外的环境变量（的名称可以是大写或小写）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

### 硬件加速提示

该插件包含用于硬件加速的设备访问：
- Intel QuickSync：映射了 `/dev/dri` 设备
- NVIDIA：设置了用于 GPU 检测的环境变量
- AMD：通过可用设备支持硬件加速

请在 Tdarr Web 用户界面的“设置”> "FFmpeg/HandBrake 设置”下配置硬件加速。

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

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
