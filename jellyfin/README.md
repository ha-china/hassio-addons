# Home Assistant 附加组件：Jellyfin

我利用空闲时间维护此和其他 Home Assistant 附加组件：跟进上游更改、HA 更改，并在真实硬件上花费大量时间进行测试（还涉及一些资金）。我常用的附加组件大约有 5-10 个，其中有很大一部分我已经安装好了。我会安装一些我不完全使用的测试机器（例如，购买某些测试服务如 VPN）来解决问题和改进附加组件。

如果您通过这个附加组件节省了时间或使您的设置变得更容易，您的支持对我来说将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库代码检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我的仓库点赞！点击下方的图片来点赞它，然后点击后它就会出现在右上角。谢谢！_

[![@alexbelgium/hassio-addons 仓库的 Stargazers 名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/jellyfin/stats.png)

## 关于

[jellyfin](https://jellyfin.org/) 会组织个人媒体库中的视频、音乐、直播电视和照片，并将它们流式传输到智能电视、流媒体盒和移动设备。此容器被打包为独立的 jellyfin 媒体服务器容器。

此附加组件基于 [linuxserver.io](https://github.com/linuxserver/docker-jellyfin) 托管的 [docker 镜像](https://github.com/linuxserver/docker-jellyfin)。

## 配置

Webui 可以通过 `<your-ip>:8096` 访问，或者通过侧边栏使用 Ingress 进行访问。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|---|---|---|---|
| `PGID` | int | `0` | 文件权限组 ID |
| `PUID` | int | `0` | 文件权限用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `data_location` | str | `/share/jellyfin` | Jellyfin 数据存储路径 |
| `localdisks` | str | | 本地驱动器挂载路径（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |
| `i915_enable_guc` | int | | 可选的 Intel iGPU `enable_guc` 参数（0-3），在启动时应用以改进硬件编解码的兼容性。此设置不会重新配置内核；宿主必须已经暴露 `/sys/module/i915/parameters/enable_guc` 路径。 |
| `DOCKER_MODS` | list | | 用于硬件加速的额外 Docker 模块 |

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

可用于硬件加速的可用 Docker 模块：
- `linuxserver/mods:jellyfin-opencl-intel` - Intel OpenCL 支持
- `linuxserver/mods:jellyfin-amd` - AMD 硬件加速
- `linuxserver/mods:jellyfin-rffmpeg` - 自定义 FFmpeg 构建

对于需要 GuC 提交以获得稳定硬件编解码的 Intel 系统（例如 N6005），请将 `i915_enable_guc` 设置为 `2` 以在容器启动时应用内核参数。该附加组件仅写入现有的运行时模块参数；不会尝试内核重新编译或更改启动参数。如果主机内核上路径 `/sys/module/i915/parameters/enable_guc` 不存在或为只读，该附加组件将记录警告并继续不进行修改。

### 挂载驱动器

此附加组件支持挂载本地驱动器以及远程 SMB 共享：

- **本地驱动器**：参见 [附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项来传递额外的环境变量（大写字母或小写字母名称均可效果相同）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取更多详情。

### 启用 SSL
#### 首先创建 PFX 证书文件
1. 本部分假设您已经拥有使用 Let's Encrypt 附加组件的 PEM 格式 SSL 证书。
2. 运行此命令 `openssl pkcs12 -export -in fullchain.pem -inkey private_key.pem -passout pass: -out server.pfx`。
3. 使用 `chmod 0700 server.pfx` 设置权限。
> 注意：
> 上述命令创建了一个不带密码的 PFX 文件，你可以使用 `-passout pass:"你的密码"` 填写密码，但同时也必须向 Jellyfin 的配置提供 `你的密码`。

#### 自动化 PFX 证书

#### Jellyfin 配置
1. 从侧边栏中，点击 `Administration` -> `Dashboard`。
2. 在 `Networking` 下，`Server Address Settings`，勾选 `Enable HTTPS`。
3. 在 `HTTPS Settings` 下，勾选 `Require HTTPS`。
4. 针对 `Custom SSL certificate path`，指向你的 PFX 文件，如果需要则填写 `Certificate password`。
5. 滚动到底部并点击 `Save`。

## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件没有区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或者如果您配置了我的 HA，则点击下方的按钮）。
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否顺利。
1. 慎重按照您的偏好配置附加组件；请参考官方文档获取更多详情。

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
