# Home Assistant 扩展：jellyfin

我在业余时间维护这个和其他 Home Assistant 扩展：跟进上游更改、HA 更改以及在真实硬件上进行测试都需要花费大量的时间和一些金钱。我经常使用大约 5-10 个我的 >110 个扩展，所以我安装了测试机器（并购买了一些我自身不使用的测试服务，如 vpn），以便进行故障排除和改进扩展。

如果这个扩展节省了您的时间或使您的设置变得更加容易，我将非常感激您的支持！

[![给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 扩展信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库加星的人！要加星，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/jellyfin/stats.png)

## 关于

[jellyfin](https://jellyfin.org/) 从个人媒体库组织视频、音乐、直播电视和照片，并将它们流式传输到智能电视、流媒体盒子和移动设备。此容器打包为独立的 jellyfin 媒体服务器。

此扩展基于 [docker image](https://github.com/linuxserver/docker-jellyfin) 来自 linuxserver.io。

## 配置

Webui 可以在 `<your-ip>:8096` 或通过侧边栏使用入口访问。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `data_location` | str | `/share/jellyfin` | Jellyfin 数据存储的路径 |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |
| `i915_enable_guc` | int | | 可选的 Intel iGPU `enable_guc` 参数（0-3），在启动时应用于改进硬件编码兼容性。不会重新配置内核；主机必须已经暴露 `/sys/module/i915/parameters/enable_guc`。 |
| `DOCKER_MODS` | list | | 用于硬件加速的附加 Docker 修改 |

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

可用的硬件加速 Docker 修改：

- `linuxserver/mods:jellyfin-opencl-intel` - Intel OpenCL 支持
- `linuxserver/mods:jellyfin-amd` - AMD 硬件加速
- `linuxserver/mods:jellyfin-rffmpeg` - 定制的 FFmpeg 构建

对于需要 GuC 提交以进行稳定硬件编码的 Intel 系统（例如，N6005），将 `i915_enable_guc` 设置为 `2` 以在容器启动时应用内核参数。扩展仅写入现有的运行时模块参数；不会尝试重新构建内核或更改引导参数。如果主机内核上缺少 `/sys/module/i915/parameters/enable_guc` 路径或为只读，则扩展记录一条警告并继续不做修改。

### 挂载驱动器

此扩展支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：见 [在扩展中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：见 [在扩展中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此扩展支持通过 `addon_config` 映射自定义脚本和环境变量：

- **自定义脚本**：见 [在扩展中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用扩展 `env_vars` 选项传递额外的环境变量（大写或小写名称）。见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详细信息。

### 启用 ssl
#### 首先创建 PFX 证书文件
1. 此部分假设您已经使用 Let's Encrypt 扩展拥有了 PEM 格式的 SSL 证书
2. 运行此命令 `openssl pkcs12 -export -in fullchain.pem -inkey private_key.pem -passout pass: -out server.pfx`
3. 使用 `chmod 0700 server.pfx` 设置权限
> 注意：
> 上述命令创建了一个不带密码的 PFX 文件，您可以使用 `-passout pass:"your-password"` 添加密码，但也将需要向 Jellyfin 的配置提供 `your-password`
> 但也会要求您提供 `your-password`

#### 自动化 PFX 证书

#### Jellyfin 配置
1. 从侧边栏点击 `管理` -> `仪表板`
2. 在 `网络` 下，`服务器地址设置` 中勾选 `启用 HTTPS`
3. 在 `HTTPS 设置` 中勾选 `要求 HTTPS`
4. 对于 `自定义 SSL 证书路径`，将其指向您的 PFX 文件，如果需要则填写 `证书密码`
5. 滚动到页面底部并 `保存`

## 安装

此扩展的安装相当简单，与安装任何其他 Hass.io 扩展没有区别。

1. 将我的扩展存储库添加到您的 Home Assistant 实例中（在监督器扩展存储库的右上角，或点击下面的按钮如果您已经配置了我的 HA）
   [![打开您的 Home Assistant 实例并显示带有特定存储库 URL 预填充的添加扩展存储库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此扩展。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动扩展。
1. 检查扩展的日志以查看一切是否顺利。
1. 仔细配置扩展以满足您的偏好，有关详细信息请参阅官方文档。
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
