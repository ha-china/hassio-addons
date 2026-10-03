# Home assistant 附加组件：Codex

我利用业余时间维护本及其他 Home Assistant 附加组件：跟踪上游更新、Home Assistant 变更、以及在真实硬件上的测试消耗了大量时间（以及部分资金）。我使用的附加组件约有 110 多个，其中 5-10 个我因定期使用而安装了测试机器（并购买了一些测试服务，如 vpn），用于自行排查和改进这些附加组件。

如果这个附加组件为您节省了时间或让您的设置更加便捷，将不胜感激，期待您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcodex%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcodex%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcodex%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有在我仓库上星标的支持！要星标它，请点击下方的图片，它将显示在右上角。谢谢大家！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/codex/stats.png)

## 关于

---

[Codex](https://github.com/ajslater/codex) 是一个基于 web 的漫画存档浏览器和阅读器。
此附加组件基于官方 docker 镜像：https://hub.docker.com/r/ajslater/codex

## 安装

---

安装此附加组件非常简单，与其他附加组件的安装方式相比并无二致。

1. 将我的附加组件仓库添加到 Home Assistant 实例中（在 supervisor 的添加附加组件商店顶部右侧，或如果您已配置了我的 Home Assistant，则点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `Save` 按钮以保存您的配置。
4. 将附加组件选项设置为您的偏好设置。
5. 启动附加组件。
6. 检查附加组件的日志，确认一切正常。
7. 打开 WebUI 并调整软件选项。

## 配置

WebUI 地址为 <http://homeassistant:PORT>。
默认用户名/密码：详见启动日志。
配置可通过应用 WebUI 进行，以下选项除外。

## 添加主题/骨架

您可以将主题/骨架的用户文件夹放置在 `/share/codex/www/user` 目录中。

## 选项

| 选项 | 描述 | 默认值 | 示例 |
|--------|-------------|---------|---------|
| `PGID` | 文件权限组 ID | `0` | `1000` |
| `PUID` | 文件权限用户 ID | `0` | `1000` |
| `TZ` | 长时间格式的时间区 | - | `America/Los_Angeles` |
| `CODEX_RESET_ADMIN` | 重置管理员用户和密码为默认值 | - | `1` |
| `CODEX_SKIP_INTEGRITY_CHECK` | 启动时跳过数据库完整性修复 | - | `1` |
| `csrf_allowed` | 允许访问应用程序的地址列表（逗号分隔） | `http://homeassistant.local:8123,https://homeassistant.local:8123` | `http://localhost:8123` |
| `localdisks` | 要挂载的驱动器硬件名称（逗号分隔）。在驱动器名称后添加要挂载的文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载功能需要 2026-09-19 之后发布的附加组件版本。 | - | `sda1,sdb1,MYNAS` |
| `networkdisks` | 要挂载的 SMB 服务器（逗号分隔） | - | `//SERVER/SHARE` |
| `cifsusername` | 所有共享的 SMB 用户名 | - | `username` |
| `cifspassword` | SMB 密码 | - | `password` |
| `cifsdomain` | SMB 域 | - | `WORKGROUP` |

```yaml
PGID: 1000
PUID: 1000
TZ: "America/Los_Angeles"
CODEX_RESET_ADMIN: 1
CODEX_SKIP_INTEGRITY_CHECK: 1
csrf_allowed: "http://homeassistant.local:8123,https://homeassistant.local:8123"
localdisks: "sda1,sdb1"
networkdisks: "//SERVER/SHARE"
cifsusername: "username"
cifspassword: "password"
cifsdomain: "WORKGROUP"
```

### 自定义脚本和环境变量

此附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（不区分大小写的名称）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

### 挂载驱动器

此附加组件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅 [在附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [在附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 插图

![image](https://github.com/alexbelgium/hassio-addons/assets/44178713/f1cf3cad-5bda-46df-a0f5-864b127d7b6b)

## 支持

在 GitHub 上创建问题。

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
