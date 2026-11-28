# Home assistant 附加组件：bazarr

我在闲暇时间维护这个及其他 Home Assistant 附加组件：跟踪上游变更、HA 变更，以及在真实硬件上测试需要大量时间（以及一些金钱）。我使用我超过 100 个附加组件中的 5-10 个，因此我会安装测试机器（并购买一些我不使用的测试服务，如 VPN），以便解决疑难问题并改进附加组件。

如果该附加组件为您节省了时间或使您的设置更简单，我将不胜感激您提供任何支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon 信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbazarr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbazarr%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbazarr%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我 repo 星标的人！要为此星标它，请点击下面的图片，然后它就会被显示在右上角。多谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/bazarr/stats.png)

## 关于此附加组件

---

[Bazarr](https://www.bazarr.media/) 是 Sonarr 和 Radarr 的配套应用程序，用于根据您的需求管理和下载字幕。此附加组件基于 docker 镜像 https://github.com/linuxserver/docker-bazarr。

## 配置

使用附加组件的 `env_vars` 选项来传递额外的环境变量（大小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

可通过 Web UI 访问，地址为 <http://homeassistant:PORT> 或通过侧边栏使用 Ingress。配置可以通过应用程序 Web UI 进行，但以下选项除外。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `connection_mode` | list | `ingress_noauth` | 连接模式（ingress_noauth/noingress_auth/ingress_auth） |
| `localdisks` | str | | 本地盘挂载（例如，`sda1,sdb1,MYNAS`）。在驱动器后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，位于 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。 |
| `networkdisks` | str | | 挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | SMB 域用于网络共享 |

### 连接模式

- `ingress_noauth` - 默认，禁用认证以实现无缝 Ingress 集成
- `noingress_auth` - 禁用 Ingress 用于外部 URL 并删除外部（无需登录）模式；在应用程序本身设置登录（参见安全）
- `ingress_auth` - 启用 Ingress 并删除外部（无需登录）模式；在应用程序本身设置登录（参见安全）

### 示例配置

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
connection_mode: "ingress_noauth"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/media,//nas.local/subtitles"
cifsusername: "mediauser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 挂载驱动器

此附加组件支持挂载本地驱动器及远程 SMB 共享：

- **本地驱动器**：参见 [附加组件中的本地驱动器挂载](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [附加组件中的远程共享挂载](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 安全

使用默认的 `connection_mode: ingress_noauth` 时，Bazarr 将不带认证运行，其直接端口（6767）已发布。能够在您的网络访问该端口的任何人都可以无登录使用它并更改其设置。在这种情况下，附加组件会在启动时记录警告。要安全使用，请将 `connection_mode` 设置为 `ingress_auth` 并在 Bazarr 中设置登录（设置 > 通用 > 安全），或在附加组件网络设置中禁用端口并使用 Ingress。

## 安装

---

此附加组件的安装非常直接，与其他附加组件的安装并无不同。

1. 将我的附加组件仓库添加到 Home Assistant 实例（在 supervisor 附加组件存储的右上角，或如果您已配置我的 HA，则点击下面的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 单击 `Save` 按钮保存您的配置。
4. 将附加组件选项设置为您偏好设置。
5. 启动附加组件。
6. 检查附加组件日志以查看一切是否正常。
7. 打开 Web UI 并调整软件选项

## 支持

通过在 GitHub 上创建问题来获取支持。

## 插图

---

![illustration](https://www.bazarr.media/assets/img/upgrade.png)

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
