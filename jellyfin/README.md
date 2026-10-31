# Home assistant add-on：jellyfin

我在业余时间维护这个以及其他 Home Assistant add-on：跟进上游更改、处理 HA 更改以及在真实硬件上测试非常耗时（甚至需要花费一些金钱）。我日常使用的 add-on 仅有 110 个中的 5-10 个，因此我安装了一些我自己不用的测试机器（并购买一些测试服务如 vpn），以便调试和改进这些 add-on

如果这个 add-on 为您节省了时间或让您的 setup 更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon 信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标了我 repo 的人！点击下方的图片来星标它，它就会被显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/jellyfin/stats.png)

## 关于

[jellyfin](https://jellyfin.org/) 从个人媒体库中组织视频、音乐、直播电视和照片，并将它们流式传输到智能电视、机顶盒和移动设备。该容器打包为独立的 jellyfin 媒体服务器组件。

此 addon 基于来自 linuxserver.io 的 [docker 镜像](https://github.com/linuxserver/docker-jellyfin)。

## 配置

Webui 可通过 `<your-ip>:8096` 或直接通过 sidebar 中的 Ingress 访问。

### 选项

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的 Group ID |
| `PUID` | int | `0` | 文件权限的 User ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `data_location` | str | `/share/jellyfin` | Jellyfin 数据存储的路径 |
| `localdisks` | str | | 本地要挂载的驱动器（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加一个文件夹来仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，挂载点为 `/mnt/MYNAS/public`。文件夹挂载需要 addon 发布于 2026-09-19 之后的版本。 |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |
| `i915_enable_guc` | int | | 可选的 Intel iGPU `enable_guc` 参数（0-3）在启动时应用以改進硬件编码兼容性。不会重新配置内核；主机必须已经暴露 `/sys/module/i915/parameters/enable_guc` 路径。 |
| `DOCKER_MODS` | list | | 硬件加速的附加 Docker 镜像模块 |

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

可用的 Docker 模块用于硬件加速：
- `linuxserver/mods:jellyfin-opencl-intel` - Intel OpenCL 支持
- `linuxserver/mods:jellyfin-amd` - AMD 硬件加速
- `linuxserver/mods:jellyfin-rffmpeg` - 自定义 FFmpeg 构建

对于需要 GuC 提交以获得稳定硬件编码的 Intel 系统（例如 N6005），请将 `i915_enable_guc` 设置为 `2`，以便在容器启动时应用内核参数。Addon 仅向现有运行时模块参数写入数据；不会尝试重新构建内核或更改启动参数。如果主机内核缺少或 `/sys/module/i915/parameters/enable_guc` 路径为只读，addon 将记录警告并继续而不进行修改。

### 挂载驱动器

此 addon 支持挂载本地驱动器以及远程 SMB 共享：

- **本地驱动器**：请参阅 [Addon 中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [Addon 中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此 addon 通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用 addon 的 `env_vars` 选项来传递额外的环境变量（名称可以是大写或小写）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

### Enable ssl

#### 首先创建 PFX 证书文件
1. 此部分假设您已经使用 Let's Encrypt addon 获取了 PEM 格式的 SSL 证书。
2. 运行此命令 `openssl pkcs12 -export -in fullchain.pem -inkey private_key.pem -passout pass: -out server.pfx`
3. 使用 `chmod 0700 server.pfx` 设置权限
> 注意：
> 上述命令会创建一个不带密码的 PFX 文件，您可以通过在 `-passout` 后添加 `pass:"你的密码"` 来设置密码，
> 但在 Jellyfin 配置中也会需要输入该密码来验证。

#### 自动化 PFX 证书

#### Jellyfin 配置
1. 点击 sidebar 中的 `Administration` -> `Dashboard`
2. 在 `Networking` 下，`Server Address Settings` 中勾选 `Enable HTTPS`
3. 在 `HTTPS Settings` 下，勾选 `Require HTTPS`
4. 对于 `Custom SSL certificate path:`，指向您的 PFX 文件，如果要求请填充 `Certificate password`
5. 滚动到下方并点击 `Save`

## 安装

此 addon 的安装非常简单，与其他安装 Hass.io addon 的过程没有差别。

1. 将我的 add-ons 仓库添加到您的 home assistant 实例中（在 supervisor 的 addons store 右上角，或者如果您已配置我的 HA，请点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此 addon。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动 addon。
1. 检查 addon 的日志，看看是否一切顺利。
1. 仔细按照您的偏好配置 addon，详见官方文档。

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
