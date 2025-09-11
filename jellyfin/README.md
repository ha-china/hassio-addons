## &#9888; 开放问题 : [🐛 [Jellyfin] 最近更改后无法找到元数据 (打开于 2025-02-24)](https://github.com/alexbelgium/hassio-addons/issues/1787) 由 [@ve6rah](https://github.com/ve6rah)
# Home Assistant 插件: jellyfin

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.json)
![入口](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我的仓库点星的人！要点星，请点击下面的图片，之后会在右上角看到。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/jellyfin/stats.png)

## 关于

[jellyfin](https://jellyfin.org/) 组织视频、音乐、直播电视和个人媒体库中的照片，并将它们流式传输到智能电视、流媒体盒和移动设备。这个容器被打包为一个独立的 jellyfin 媒体服务器。

此插件基于来自 linuxserver.io 的 [docker 镜像](https://github.com/linuxserver/docker-jellyfin)。

## 配置

### 插件配置

WebUI 位于 `<your-ip>:8096`。

```yaml
PGID: 用户
GPID: 用户
TZ: 时区
localdisks: sda1 # 将您的驱动器的硬件名称以逗号分隔的方式放入，或其标签。例如 sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，需要挂载的 smb 服务器列表，以逗号分隔
cifsusername: "用户名" # 可选，smb 用户名，对所有 smb 共享相同
cifspassword: "密码" # 可选，smb 密码
cifsdomain: "域" # 可选，允许为 smb 共享设置域
DOCKER_MODS: linuxserver/mods:jellyfin-opencl-intel|linuxserver/mods:jellyfin-amd|linuxserver/mods:jellyfin-rffmpeg # 安装图形驱动程序
```

### 启用 SSL
#### 首先创建 PFX 证书文件
1. 这一部分假设您已经使用 Let's Encrypt 添加了 SSL 证书，格式为 PEM
2. 运行此命令 `openssl pkcs12 -export -in fullchain.pem -inkey private_key.pem -passout pass: -out server.pfx`
3. 使用 `chmod 0700 server.pfx` 设置权限
> 注意：
> 上面的命令创建了一个没有密码的 PFX 文件，您可以用 `-passout pass:"your-password"` 填写密码
> 但也必须向 Jellyfin 的配置提供 `your-password`

#### 自动化 PFX 证书

#### Jellyfin 配置
1. 从侧边栏点击 `Administration` -> `Dashboard`
2. 在 `Networking` 下，`Server Address Settings` 中勾选 `Enable HTTPS`
3. 在 `HTTPS Settings` 下，勾选 `Require HTTPS`
4. 对于 `Custom SSL certificate path:`，指向您的 PFX 文件，并在需要时填写 `Certificate password`
5. 滚动到底部并点击 `Save`

## 安装

安装此插件非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件库][repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 仔细根据您的偏好配置插件，请参阅官方文档以获取详细信息。

[repository]: https://github.com/alexbelgium/hassio-addons