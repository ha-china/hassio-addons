# Home Assistant 附加组件：jellyfin

我在业余时间维护此以及其他 Home Assistant 附加组件：跟进上游更新、Home Assistant 更新以及在实际硬件上进行测试需要花费大量时间（和一些金钱）。我大约在 110 个附加组件中使用其中 5-10 个，因为我经常安装测试机（并购买一些我自己的测试服务，如 VPN）来辅助排查和改进附加组件。

如果这个附加组件为您节省了时间或使您的设置更容易，我非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库点亮星标的人！请点击下面的图片点亮星标，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/jellyfin/stats.png)

## 关于

[jellyfin](https://jellyfin.org/) 组织个人媒体库中的视频、音乐、直播电视和照片，并向智能电视、流媒体盒子及移动设备分发流媒体。此容器打包为一个独立的 jellyfin 媒体服务器。

此附加组件基于来自 linuxserver.io 的 [docker 镜像](https://github.com/linuxserver/docker-jellyfin)。

## 配置

Web UI 可在 `<your-ip>:8096` 或通过侧边栏使用 Ingress 访问。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限组 ID |
| `PUID` | int | `0` | 文件权限用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `data_location` | str | `/share/jellyfin` | 存储 Jellyfin 数据的路径 |
| `localdisks` | str | | 本地磁盘挂载路径（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |
| `i915_enable_guc` | int | | 可选的 Intel iGPU `enable_guc` 参数 (0-3)，应用于启动以改进硬件编码兼容性。不会重新配置内核；主机必须已经暴露 `/sys/module/i915/parameters/enable_guc`。 |
| `DOCKER_MODS` | list | | 用于硬件加速的附加 Docker 配置模块 |

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

可用的硬件加速 Docker 配置模块：
- `linuxserver/mods:jellyfin-opencl-intel` - Intel OpenCL 支持
- `linuxserver/mods:jellyfin-amd` - AMD 硬件加速
- `linuxserver/mods:jellyfin-rffmpeg` - 自定义 FFmpeg 构建

对于需要 GuC 提交以实现稳定硬件编码的 Intel 系统（例如 N6005），请将 `i915_enable_guc` 设置为 `2` 以在容器启动时应用内核参数。附加组件仅向现有的运行时模块参数写入；不会尝试重新构建内核或更改启动参数。如果主机内核中缺少 `/sys/module/i915/parameters/enable_guc` 路径或该路径为只读，附加组件将记录警告并继续运行，不做修改。

### 挂载磁盘

此附加组件支持挂载本地磁盘和远程 SMB 共享：

- **本地磁盘**：请参阅 [附加组件中的本地磁盘挂载](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [附加组件中的远程共享挂载](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件支持通过 `app_config` 映射自定义脚本和环境变量：

- **自定义脚本**：请参阅 [附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项来传递额外的环境变量（大小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取更多细节。

### 启用 SSL
#### 首先创建 PFX 证书文件
1. 这部分假设您已经使用 Let's Encrypt 附加组件拥有 PEM 格式的 SSL 证书。
2. 运行此命令：`openssl pkcs12 -export -in fullchain.pem -inkey private_key.pem -passout pass: -out server.pfx`
3. 使用 `chmod 0700 server.pfx` 设置权限。
> 注意：
> 上述命令会创建一个没有密码的 PFX 文件，您可以使用 `-passout pass:"your-password"` 填写密码；但同时也需要在 Jellyfin 的配置中提供 `your-password`。

#### 自动化 PFX 证书

#### Jellyfin 配置
1. 从侧边栏点击 `Administration` -> `Dashboard`。
2. 在 `Networking` 下，`Server Address Settings`，勾选 `Enable HTTPS`。
3. 在 `HTTPS Settings` 下，勾选 `Require HTTPS`。
4. 对于 `Custom SSL certificate path:`，指向您的 PFX 文件，如果需要的话填写 `Certificate password`。
5. 滚动到页面底部并 `Save`。

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装方式没有区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店点击右上角，或者如果您配置了 HA，请点击下方的按钮）。
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，看一切是否正常。
1. 仔细配置附加组件以满足您的需求，请参考官方文档获取更多详细信息。

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
