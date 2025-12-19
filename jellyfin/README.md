# Home assistant add-on: jellyfin

我利用业余时间维护这个和其他的Home Assistant add-on：跟上上游的变化、HA的变化以及在真实硬件上测试都需要大量时间（和一些金钱）。我大约使用我超过110个add-on中的5-10个，所以我安装了一些我自身不使用的测试机器（和一些测试服务，例如VPN）来排错和改进这些add-on。

如果这个add-on为您节省了时间或简化了您的设置，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库点赞的人！要点赞，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/jellyfin/stats.png)

## About

[jellyfin](https://jellyfin.org/) 将视频、音乐、直播电视和照片从个人媒体库中组织起来，并将它们流式传输到智能电视、流媒体盒子和移动设备。这个容器作为一个独立的jellyfin媒体服务器进行打包。

这个add-on基于linuxserver.io的[docker image](https://github.com/linuxserver/docker-jellyfin)。

## Configuration

Webui 可以在 `<your-ip>:8096` 或通过 Ingress 在侧边栏中找到。

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组ID |
| `PUID` | int | `0` | 文件权限的用户ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `data_location` | str | `/share/jellyfin` | Jellyfin数据存储的路径 |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 要挂载的SMB共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的SMB用户名 |
| `cifspassword` | str | | 网络共享的SMB密码 |
| `cifsdomain` | str | | 网络共享的SMB域 |
| `i915_enable_guc` | int | | 可选的Intel iGPU `enable_guc` 参数（0-3），在启动时应用以改进硬件编码兼容性。不会重新配置内核；主机必须已经暴露 `/sys/module/i915/parameters/enable_guc`。 |
| `DOCKER_MODS` | list | | 用于硬件加速的额外Docker mods |

### Example Configuration

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

### Hardware Acceleration

可用于硬件加速的Docker mods：
- `linuxserver/mods:jellyfin-opencl-intel` - Intel OpenCL支持
- `linuxserver/mods:jellyfin-amd` - AMD硬件加速
- `linuxserver/mods:jellyfin-rffmpeg` - 自定义FFmpeg构建

对于需要GuC提交以实现稳定硬件编码的Intel系统（例如，N6005），将 `i915_enable_guc` 设置为 `2` 以在容器启动时应用内核参数。这个add-on只写入现有的运行时模块参数；不会尝试重新构建内核或更改启动参数。如果主机内核上缺少 `/sys/module/i915/parameters/enable_guc` 路径或为只读，add-on将记录一条警告信息并继续而不进行修改。

### Mounting Drives

这个add-on支持挂载本地驱动器和远程SMB共享：

- **本地驱动器**：参见 [在add-on中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在add-on中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### Custom Scripts and Environment Variables

这个add-on支持通过 `addon_config` 映射来支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在add-on中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars option**：使用add-on的 `env_vars` 选项来传递额外的环境变量（名称大小写均可）。参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

### Enable ssl
#### Creating the PFX certificate file first
1. 这部分假设您已经使用Let's Encrypt add-on获得了PEM格式的SSL证书
2. 运行命令 `openssl pkcs12 -export -in fullchain.pem -inkey private_key.pem -passout pass: -out server.pfx`
3. 使用 `chmod 0700 server.pfx` 设置权限
> 注意：
> 上述命令创建了一个没有密码的PFX文件，您可以使用 `-passout pass:"your-password"` 填写密码
> 但也将不得不向Jellyfin的配置提供 `your-password`

#### Automating the PFX certificate

#### Jellyfin configuration
1. 从侧边栏中点击 `Administration` -> `Dashboard`
2. 在 `Networking` 下，`Server Address Settings` 中勾选 `Enable HTTPS`
3. 在 `HTTPS Settings` 下，勾选 `Require HTTPS`
4. 对于 `Custom SSL certificate path:`，指向您的PFX文件，并在需要时填写 `Certificate password`
5. 滚动到底部并 `Save`

## Installation

这个add-on的安装非常简单，与安装任何其他Hass.io add-on没有区别。

1. 将我的Hass.io add-ons仓库 [repository] 添加到您的Hass.io实例。
1. 安装这个add-on。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动add-on。
1. 检查add-on的日志以查看是否一切顺利。
1. 小心配置add-on以满足您的偏好，参见官方文档进行配置。

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
