# Home Assistant 插件：Codex

我在业余时间维护这个和其他 Home Assistant 插件：跟踪上游更改、Home Assistant 更改以及在真实硬件上进行测试都需要花费大量时间（以及一些金钱）。我经常使用大约 5-10 个我超过 110 个插件中的几个，所以我安装了测试机器（并购买了一些我自身不使用的测试服务，如 vpn），以便进行故障排除和改进插件。

如果这个插件为您节省了时间或使您的设置变得更简单，我将非常感激您的支持！

[![请给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcodex%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcodex%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcodex%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库加星的人！要加星，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/codex/stats.png)

## 关于

---

[Codex](https://github.com/ajslater/codex) 是一个基于网页的漫画存档浏览器和阅读器
此插件基于官方的 docker 镜像：https://hub.docker.com/r/ajslater/codex

## 安装

---

此插件的安装相当简单，与安装任何其他插件没有太大区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在监督器插件商店的右上角，或点击下面的按钮如果您已配置我的 HA）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击“保存”按钮以存储您的配置。
1. 将插件选项设置为您的偏好设置
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 打开 WebUI 并调整软件选项

## 配置

WebUI 可在 <http://homeassistant:PORT> 找到。
默认用户名/密码：在启动日志中描述。
可以通过应用 WebUI 进行配置，除了以下选项

## 添加主题/骨架

您可以将主题/骨架的用户文件夹放置在 /share/codex/www/user 中，

## 选项

| 选项 | 描述 | 默认 | 示例 |
|--------|-------------|---------|---------|
| `PGID` | 文件权限的组 ID | `0` | `1000` |
| `PUID` | 文件权限的用户 ID | `0` | `1000` |
| `TZ` | 长格式时区 | - | `America/Los_Angeles` |
| `CODEX_RESET_ADMIN` | 将管理员用户名和密码重置为默认值 | - | `1` |
| `CODEX_SKIP_INTEGRITY_CHECK` | 在启动时跳过数据库完整性修复 | - | `1` |
| `csrf_allowed` | 允许访问应用的地址列表（以逗号分隔） | `http://homeassistant.local:8123,https://homeassistant.local:8123` | `http://localhost:8123` |
| `localdisks` | 要挂载的驱动器的硬件名称（以逗号分隔） | - | `sda1,sdb1,MYNAS` |
| `networkdisks` | 要挂载的 SMB 服务器（以逗号分隔） | - | `//SERVER/SHARE` |
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

此插件支持通过 `addon_config` 映射自定义脚本和环境变量：

- **自定义脚本**：请参阅[在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（名称为大写或小写）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

### 挂载驱动器

此插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅[在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅[在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 图像

![image](https://github.com/alexbelgium/hassio-addons/assets/44178713/f1cf3cad-5bda-46df-a0f5-864b127d7b6b)

## 支持

在 github 上创建一个问题

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
