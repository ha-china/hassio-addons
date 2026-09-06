# 家庭自动化附加组件：Codex

我利用空闲时间维护此及其他家庭自动化附加组件：跟进上游更改、适应性更新以及测试硬件需要大量时间（以及一些金钱）。我使用了大约 5-10 个我的 110 多个附加组件，因此我会安装测试机器（并购买一些我不自己使用的测试服务，如 VPN）来排查问题并改进附加组件。

如果这个附加组件为您节省了时间或让设置更简单，我非常感谢您提供支援！

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

*感谢所有为我仓库星标 (Star) 的朋友们！点击下方图片即可星标，这样它就会位于右上角。谢啦！*

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/codex/stats.png)

## 关于

---

[Codex](https://github.com/ajslater/codex) 是一个基于网络的漫画档案浏览器和阅读器。
此附加组件基于官方 Docker 镜像：https://hub.docker.com/r/ajslater/codex

## 安装

---

此附加组件的安装很简单，与其他附加组件没有区别。

1. 将我的附加组件仓库添加到您的家庭自动化实例中（在 supervisor 附加组件商店的右上角，或者如果您已配置了我的 HA，请点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 查看附加组件日志以确认一切正常。
1. 打开 Web 界面并调整软件选项。

## 配置

Web 界面位于 <http://homeassistant:PORT>。
默认用户名/密码：请查看启动日志。
除了以下选项外，配置可以在应用 Web 界面中完成。

## 添加主题/骨架文件

您可以将主题/骨架文件夹中的用户文件夹放置到 /share/codex/www/user，

## 选项

| 选项 | 描述 | 默认值 | 示例 |
|--------|-------------|---------|---------|
| `PGID` | 文件权限组 ID | `0` | `1000` |
| `PUID` | 文件权限用户 ID | `0` | `1000` |
| `TZ` | 长时间格式计时区 | - | `America/Los_Angeles` |
| `CODEX_RESET_ADMIN` | 将管理用户和密码重置为默认值 | - | `1` |
| `CODEX_SKIP_INTEGRITY_CHECK` | 启动时跳过数据库完整性修复 | - | `1` |
| `csrf_allowed` | 允许访问应用的地址逗号分隔列表 | `http://homeassistant.local:8123,https://homeassistant.local:8123` | `http://localhost:8123` |
| `localdisks` | 挂载的驱动器硬件名称（逗号分隔） | - | `sda1,sdb1,MYNAS` |
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

此附加组件支持通过 `addon_config` 映射自定义脚本和环境变量：

- **自定义脚本**：详见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项来传递额外环境变量（大小写名称皆可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

### 挂载驱动器

此附加组件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：详见 [在附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：详见 [在附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

## 插图

![image](https://github.com/alexbelgium/hassio-addons/assets/44178713/f1cf3cad-5bda-46df-a0f5-864b127d7b6b)

## 支持

在 github 上创建问题

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
