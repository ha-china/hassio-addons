# Home assistant 添加组件：jellyfin


我在业余时间维护这个和其他的 Home Assistant 添加组件：跟上上游的变化、HA 的变化以及在真实硬件上测试需要大量时间（和一些钱）。我大约使用我超过 110 个添加组件中的 5-10 个，所以我安装测试机器（和购买一些我不用的一些测试服务，比如 VPN）来排错和改进这些添加组件。

如果这个添加组件节省了你的时间或使你的设置更简单，我将非常感谢你的支持！

[![给我买咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 添加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库星标的人！要星标它，点击下面的图片，它就会在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标者仓库列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/jellyfin/stats.png)

## 关于

[jellyfin](https://jellyfin.org/) 整理个人媒体库的视频、音乐、直播电视和照片，并将它们流式传输到智能电视、流媒体盒子和移动设备。这个容器作为一个独立的 jellyfin 媒体服务器进行打包。

这个添加组件基于 linuxserver.io 的 [docker 镜像](https://github.com/linuxserver/docker-jellyfin)。

## 配置

Webui 可以在 `<你的 IP>:8096` 或通过入口在侧边栏中找到。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `PGID` | 整数 | `0` | 文件权限的组 ID |
| `PUID` | 整数 | `0` | 文件权限的用户 ID |
| `TZ` | 字符串 | | 时区（例如，`Europe/London`） |
| `data_location` | 字符串 | `/share/jellyfin` | Jellyfin 数据存储的路径 |
| `localdisks` | 字符串 | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | 字符串 | | 要挂载的 SMB 分享（例如，`//SERVER/SHARE`） |
| `cifsusername` | 字符串 | | 用于网络分享的 SMB 用户名 |
| `cifspassword` | 字符串 | | 用于网络分享的 SMB 密码 |
| `cifsdomain` | 字符串 | | 用于网络分享的 SMB 域 |
| `i915_enable_guc` | 整数 | | 可选的 Intel iGPU `enable_guc` 参数（0-3）在启动时应用，以改进硬件编码兼容性。不会重新配置内核；主机必须已经暴露 `/sys/module/i915/parameters/enable_guc`。 |
| `DOCKER_MODS` | 列表 | | 用于硬件加速的额外 Docker 修改 |

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

可用于硬件加速的 Docker 修改：
- `linuxserver/mods:jellyfin-opencl-intel` - Intel OpenCL 支持
- `linuxserver/mods:jellyfin-amd` - AMD 硬件加速
- `linuxserver/mods:jellyfin-rffmpeg` - 自定义 FFmpeg 构建

对于需要 GuC 提交以实现稳定硬件编码的 Intel 系统（例如，N6005），将 `i915_enable_guc` 设置为 `2` 以在容器启动时应用内核参数。此添加组件仅写入现有的运行时模块参数；不会尝试内核重建或启动参数更改。如果主机内核中缺少路径 `/sys/module/i915/parameters/enable_guc` 或为只读，则添加组件会记录警告并继续而不进行修改。

### 挂载驱动器

此添加组件支持挂载本地驱动器和远程 SMB 分享：

- **本地驱动器**：请参阅 [在添加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程分享**：请参阅 [在添加组件中挂载远程分享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此添加组件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在添加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用添加组件的 `env_vars` 选项传递额外的环境变量（大写或小写名称）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

### 启用 ssl
#### 首先创建 PFX 证书文件
1. 这部分假设你已经使用 Let's Encrypt 添加组件获得了 PEM 格式的 SSL 证书
2. 运行此命令 `openssl pkcs12 -export -in fullchain.pem -inkey private_key.pem -passout pass: -out server.pfx`
3. 使用 `chmod 0700 server.pfx` 设置权限
> 注意：
> 上述命令创建了一个没有密码的 PFX 文件，你可以使用 `-passout pass:"your-password"` 填写密码，但也必须向 Jellyfin 的配置提供 `your-password`

#### 自动化 PFX 证书

#### Jellyfin 配置
1. 从侧边栏中，点击 `管理` -> `仪表板`
2. 在 `网络` 下，`服务器地址设置` 中，勾选 `启用 HTTPS`
3. 在 `HTTPS 设置` 下，勾选 `要求 HTTPS`
4. 对于 `自定义 SSL 证书路径:`，指向你的 PFX 文件，如果需要，请填写 `证书密码`
5. 滚动到底部并 `保存`

## 安装

这个添加组件的安装非常简单，与安装任何其他 Hass.io 添加组件没有区别。

1. [将我的 Hass.io 添加组件仓库][repository] 添加到你的 Hass.io 实例。
1. 安装这个添加组件。
1. 点击 `保存` 按钮以保存你的配置。
1. 启动添加组件。
1. 检查添加组件的日志，看看一切是否正常。
1. 仔细配置添加组件以符合你的偏好，请参阅官方文档以获取详细信息。

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
