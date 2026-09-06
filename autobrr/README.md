# Home assistant 附加组件：Autobrrf

我在空闲时间维护此附加组件及其他 Home Assistant 附加组件：跟踪上游变更、HA 的变更更新以及在真实硬件上进行测试需要大量时间（以及一些金钱）。我大约使用我超过 110 款附加组件中的 5-10 款，所以我定期安装测试机器（并购买一些我本人的服务），例如 vpn，以便用于排错和改进附加组件。

如果这个附加组件节省了您的时间或让您的设置更简单，我将不胜感激地想要您的支持！

[![Buy me a coffee][捐赠徽章]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐款][paypal 徽章]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fautobrr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fautobrr%2Fconfig.yaml)
![Architecture](https://img.shields.io/badge/dynamic/yaml?color=success&label=Architecture&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fautobrr%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[捐赠徽章]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal 徽章]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我的仓库点赞！要点赞，请点击下面的图片，然后它会在右上角显示。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/autobrr/stats.png)

## 关于

---

[Autobrr](https://autobrr.com/) autobrr 是一个现代化的下载自动化工具，用于追踪。我们受到 tools like trackarr, autodl-irssi 和 flexget 的启发和想法，构建了一个可以实现所有功能的工具，然后再加上更多功能。

此附加组件基于 docker 镜像 https://github.com/autobrr/autobrr。

## 安装

---

此附加组件的安装非常简单，与其他任何附加组件的安装方式没有不同。

1. 将我的附加组件存储库添加到您的 Home Assistant 实例中（在 supervisor addons 商店的右上角，或如果您已配置我的 HA 则点击下面的按钮）。
   [![打开您的 Home Assistant 实例并显示带有特定存储库 URL 预填充的添加附加组件存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 查看附加组件的日志以确认一切正常。
1. 打开 WebUI 并调整软件选项。

## 配置

WebUI 可以访问 <http://homeassistant:7474> 或通过 Ingress。
默认凭据：`admin` / `password`（首次登录后请更改）。

### 设置步骤

1. 启动附加组件后访问 Web 界面。
2. 更改默认登录凭据。
3. 配置 RSS 索引器和下载客户端。
4. 设置自动化规则和过滤器。
5. 使用示例发布进行测试。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |

### 示例配置

```yaml
PGID: 1000
PUID: 1000
TZ: "Europe/London"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/downloads"
cifsusername: "dluser"
cifspassword: "password123"
cifsdomain: "workgroup"
```

### 挂载驱动器

此附加组件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：请参阅 [附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件支持自定义脚本执行和环境变量注入：

- **自定义脚本**：请参阅 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件 `env_vars` 选项传递额外的环境变量（字母大小写均可）。有关详细信息，请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 支持

在 github 上创建一个 issue。

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
