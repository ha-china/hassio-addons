# Home assistant add-on: jellyfin

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjellyfin%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的仓库点赞！要点赞，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/jellyfin/stats.png)

## 关于

[jellyfin](https://jellyfin.org/) 组织视频、音乐、直播电视和照片，从个人媒体库中流式传输到智能电视、流媒体盒子和移动设备。这个容器作为一个独立的 jellyfin 媒体服务器进行打包。

这个插件基于 [docker 镜像](https://github.com/linuxserver/docker-jellyfin) 来自 linuxserver.io。

## 配置

Webui 可以在 `<你的IP>:8096` 或通过 Ingress 在侧边栏中找到。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `PGID` | 整数 | `0` | 文件权限的组 ID |
| `PUID` | 整数 | `0` | 文件权限的用户 ID |
| `TZ` | 字符串 | | 时区（例如，`Europe/London`） |
| `data_location` | 字符串 | `/share/jellyfin` | Jellyfin 数据存储的路径 |
| `localdisks` | 字符串 | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | 字符串 | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | 字符串 | | SMB 网络共享的用户名 |
| `cifspassword` | 字符串 | | SMB 网络共享的密码 |
| `cifsdomain` | 字符串 | | 网络共享的 SMB 域 |
| `i915_enable_guc` | 整数 | | 可选的 Intel iGPU `enable_guc` 参数（0-3），在启动时应用以提高硬件编码兼容性。不会重新配置内核；主机必须已经暴露 `/sys/module/i915/parameters/enable_guc`。 |
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

可用的 Docker 修改用于硬件加速：
- `linuxserver/mods:jellyfin-opencl-intel` - Intel OpenCL 支持
- `linuxserver/mods:jellyfin-amd` - AMD 硬件加速
- `linuxserver/mods:jellyfin-rffmpeg` - 自定义 FFmpeg 构建

对于需要 GuC 提交以实现稳定硬件编码的 Intel 系统（例如，N6005），将 `i915_enable_guc` 设置为 `2` 以在容器启动时应用内核参数。插件仅写入现有的运行时模块参数；不会尝试重新编译内核或更改启动参数。如果主机内核上缺少路径 `/sys/module/i915/parameters/enable_guc` 或是只读的，插件将记录警告并继续而不进行修改。

### 挂载驱动器

这个插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

这个插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（大写或小写名称）。参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

### 启用 ssl
#### 首先创建 PFX 证书文件
1. 这部分假设您已经使用 Let's Encrypt 插件获得了 PEM 格式的 SSL 证书
2. 运行命令 `openssl pkcs12 -export -in fullchain.pem -inkey private_key.pem -passout pass: -out server.pfx`
3. 使用 `chmod 0700 server.pfx` 设置权限
> 注意：
> 上述命令创建了一个没有密码的 PFX 文件，您可以用 `-passout pass:"your-password"` 填写密码，但也将不得不向 Jellyfin 的配置提供 `your-password`

#### 自动化 PFX 证书

#### Jellyfin 配置
1. 从侧边栏中点击 `管理` -> `仪表板`
2. 在 `网络` 下，`服务器地址设置`，勾选 `启用 HTTPS`
3. 在 `HTTPS 设置` 下，勾选 `要求 HTTPS`
4. 对于 `自定义 SSL 证书路径：`，指向您的 PFX 文件，如果需要，请填写 `证书密码`
5. 滚动到底部并 `保存`

## 安装

这个插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的 Hass.io 插件仓库 [repository] 添加到您的 Hass.io 实例中。
1. 安装这个插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志，看看是否一切顺利。
1. 仔细配置插件以满足您的偏好，请参阅官方文档以获取相关信息。

[repository]: https://github.com/alexbelgium/hassio-addons
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
