# Home Assistant 插件：Jellyfin

我用业余时间维护此 Home Assistant 插件及其他插件：跟踪上游变更、HA 变更以及在真实硬件上进行测试需要大量时间（和些许资金）。我使用的约 5-10 个插件（我有 110 多个插件）非常频繁，因此我安装测试机器（并购买一些测试服务如 VPN），这些机器我不自己使用，而是用于故障排查和改进插件。

如果此插件能为您节省时间或让您的设置更简单，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_谢谢所有为我仓库点星的人！要给它点星，请点击下方的图片，然后它将会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/jellyfin/stats.png)

## 关于

[jellyfin](https://jellyfin.org/) 用于整理 personally 媒体库中的视频、音乐、直播电视和照片，并将其流转到智能电视、流媒体盒子和移动设备。此容器包装为独立的 Jellyfin 媒体服务器。

此插件基于 [docker 镜像](https://github.com/linuxserver/docker-jellyfin)，该镜像来自 linuxserver.io。

## 配置

Webui 可通过 `<your-ip>:8096` 访问，或通过侧边栏使用 Ingress 访问。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `data_location` | str | `/share/jellyfin` | Jellyfin 数据存储的位置 |
| `localdisks` | str | | 本地磁盘挂载点（例如，`sda1,sdb1,MYNAS`）。在磁盘后添加文件夹仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载功能需要插件版本晚于 2026-09-19 发布。 |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB 网络共享用户名 |
| `cifspassword` | str | | SMB 网络共享密码 |
| `cifsdomain` | str | | SMB 网络共享域 |
| `i915_enable_guc` | int | | 可选的 Intel iGPU `enable_guc` 参数（0-3），在启动时应用以改进硬件编码兼容性。不会重新配置内核；主机必须已暴露 `/sys/module/i915/parameters/enable_guc`。 |
| `DOCKER_MODS` | list | | 用于硬件加速的额外 Docker 适配 |

### 示例配置

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
data_location: "/share/jellyfin"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/media,//nas.local/movies"
cifsusername: "mediauser"
cifspassword: "password123"
cifsdomain: "workgroup"
DOCKER_MODS:
  - "linuxserver/mods:jellyfin-opencl-intel"
  - "linuxserver/mods:jellyfin-amd"
```

### 硬件加速

可用的硬件加速 Docker 适配：
- `linuxserver/mods:jellyfin-opencl-intel` - Intel OpenCL 支持
- `linuxserver/mods:jellyfin-amd` - AMD 硬件加速
- `linuxserver/mods:jellyfin-rffmpeg` - 自定义 FFmpeg 构建

对于需要古 C 提交以获得稳定硬件编码的 Intel 系统（例如，N6005），请将 `i915_enable_guc` 设置为 `2`，以在容器启动时应用内核参数。插件仅写入现有运行时模块参数；不会尝试重建内核或将启动参数更改。如果 `/sys/module/i915/parameters/enable_guc` 路径在主机内核上缺失或只读，插件将记录警告信息并继续修改前的操作。

### 挂载磁盘

此插件支持挂载本地磁盘和远程 SMB 共享：

- **本地磁盘**：参见 [在插件中挂载本地磁盘](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（大小写名称均可）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

### 启用 SSL
#### 首先创建 PFX 证书文件
1. 此部分假设您已使用 Let's Encrypt 插件拥有 PEM 格式的 SSL 证书。
2. 运行此命令 `openssl pkcs12 -export -in fullchain.pem -inkey private_key.pem -passout pass: -out server.pfx`
3. 使用 `chmod 0700 server.pfx` 设置权限。
> 注意：
> 上述命令会创建一个无边密码的 PFX 文件，您可以使用 `-passout pass:"你的密码"` 填写密码，但仍需向 Jellyfin 的配置中提供 `你的密码`

#### 自动化的 PFX 证书

#### Jellyfin 配置
1. 从侧边栏点击 `Administration` -> `Dashboard`
2. 在 `Networking`（网络）下，`Server Address Settings`（服务器地址设置）中，勾选 `Enable HTTPS`
3. 在 `HTTPS Settings` 下，勾选 `Require HTTPS`
4. 对于 `Custom SSL certificate path:`，指向您的 PFX 文件，并在需要时填写 `Certificate password`（证书密码）
5. 滚动到底部并点击 `Save`（保存）

## 安装

此插件的安装非常直观，与其他任何 Hass.io 插件的安装方式没有不同。

1. 将我的插件库添加到 home assistant 实例中（在 supervisor addons store 右上角，或如果您已配置了我的 HA，请点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动此插件。
1. 查看插件日志，确认是否一切正常。
1. 仔细根据您的偏好配置插件，请参考官方文档以获取更多详细信息。

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
