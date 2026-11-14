# Home Assistant 附加组件：Tdarr

我利用业余时间维护和更新其他 Home Assistant 附加组件：跟上上游变更，应对 Home Assistant 自身的更新，并在真实硬件上测试都需要耗费大量时间（以及部分资金）。我使用的附加组件超过 110 个，其中大约 5-10 个比较常用，因此我常常利用测试机器（并购买一些测试服务，如 VPN）来不直接自用的方式来排查问题和改进附加组件。

如果您使用此附加组件节省了我的时间或让您的设置更加简便，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftdarr%2Fconfig.yaml)
![入口 (Ingress)](https://img.shields.io/badge/dynamic/yaml?label=入口 (Ingress)&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftdarr%2Fconfig.yaml)
![架构 (Arch)](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构 (Arch)&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftdarr%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码审查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家为我仓库点 star！点击上方图像的星号，它将会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/tdarr/stats.png)

## 概览

[Tdarr](https://tdarr.io) 是一个分布式转码系统，利用 FFmpeg/HandBrake 自动执行媒体库的转码/重新封装管理。它确保您的文件在编解码器、流和容器方面完全符合您的需求。Tdarr 支持分布式处理，允许您将闲置硬件用于在 Windows、Linux（包括 ARM）和 macOS 上的 Tdarr Node 服务器。

核心功能：
- 跨多个节点进行分布式转码
- 自动化的媒体库管理
- 支持 FFmpeg 和 HandBrake
- 硬件加速支持
- 基于 Web 的管理界面
- 基于插件的工作流程系统

此附加组件基于 [docker 镜像](https://hub.docker.com/r/hurlenko/Tdarr)（由 hurlenko 提供）。

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装相比并无不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店的右上角，或在您已配置我的 HA 的情况下点击下方的按钮）
   [![打开 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击“保存”按钮以存储配置。
1. 启动附加组件。
1. 检查附加组件的日志，查看一切是否顺利。
1. 仔细根据您的需求配置附加组件，具体请参考官方文档。

## 配置

Web 界面可在 `<your-ip>:8265` 访问，或通过左侧栏使用入口 (Ingress) 访问。服务器端口为 `8266`，用于连接外部 Tdarr 节点。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `CONFIG_LOCATION` | str | `/config/addons_config/tdarr` | Tdarr 配置存储的路径 |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 本地驱动器挂载路径（例如，`sda1,sdb1,MYNAS`）。在驱动器名称后添加文件夹以只挂载该文件夹，例如 `MYNAS/public` 只挂载该文件夹，位于 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。 |
| `networkdisks` | str | | SMB 共享挂载路径（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 网络共享用户名 |
| `cifspassword` | str | | SMB 网络共享密码 |
| `cifsdomain` | str | | SMB 网络共享域名 |

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

### 设置分布式转码

1. **配置服务器**：
   - 访问 Web 界面 `<your-ip>:8265`
   - 设置媒体库和转码设置
   - 根据需要配置插件和工作流程

2. **添加外部节点**：
   - 在其他机器上安装 Tdarr Node
   - 将它们指向您的 Home Assistant 地址，端口为 `8266`
   - 节点将自动注册并出现在 Web 界面中

3. **硬件加速**：
   - 附加组件包含硬件加速支持
   - 在 Tdarr Web 界面设置中配置 GPU 转码
   - 已支持的加速：Intel QuickSync, NVIDIA NVENC, AMD VCE

### 挂载驱动器

此附加组件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [在附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项来传递额外的环境变量（大小写名称均可）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

### 硬件加速说明

附加组件包含硬件加速的设备访问：
- Intel QuickSync：映射 `/dev/dri` 设备
- NVIDIA：设置环境变量以检测 GPU
- AMD：通过可用设备支持硬件加速

在 Tdarr Web 界面的 Settings > FFmpeg/HandBrake 设置下配置硬件加速。

## 支持

- 官方 Tdarr 文档：[https://docs.tdarr.io/](https://docs.tdarr.io/)
- 在 [GitHub](https://github.com/alexbelgium/hassio-addons/issues) 创建问题
- 在 [Home Assistant 社区帖子](https://community.home-assistant.io/t/home-assistant-addon-tdarr/282108/3) 提问

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
