# Home Assistant 附加组件：librespeed

我利用业余时间维护此及其他 Home Assistant 附加组件：跟进上游更改、HA 更改以及在真实硬件上测试需要大量时间（并且需要一些金钱）。我从约 110 个附加组件中仅使用 5-10 个，因此我经常安装测试机器（并购买一些我自己不使用的测试服务，如 vpn）来排查问题和改进附加组件。

如果这个附加组件为您节省时间或让您的设置更容易，我将非常感谢您提供的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon 信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Flibrespeed%2Fconfig.yaml)
![端口入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Flibrespeed%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Flibrespeed%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢每一位星标了我仓库的人！请点击上方图片星标它，它将显示在右上角。谢谢！_

[![@alexbelgium/hassio-addons 星标仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量变化趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/librespeed/stats.png)

## 关于

[LibreSpeed](https://github.com/librespeed/speedtest) 是一个基于 Javascript 实现的轻量级速度测试程序，使用 XMLHttpRequest 和 Web Workers。
此附加组件基于 Docker 镜像：https://github.com/linuxserver/docker-librespeed

## 安装

此附加组件的安装很简单，与其他任意附加组件的安装方式没有区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 Supervisor 附加组件商店右上角，或如果您已配置我的 HA，请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有预填特定仓库 URL 的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以保存配置。
1. 将附加组件选项设置为您偏好的设置。
1. 启动附加组件。
1. 检查附加组件日志，以确认一切是否顺利。
1. 打开 WebUI 并调整软件选项。

## 配置

Webui 可在 <http://homeassistant:PORT> 访问。
默认用户名/密码：详见启动日志。
配置可以通过 app WebUI 完成，除了以下选项

```yaml
PGID: 用户
PUID: 用户
TZ: 时区
PASSWORD: "" # 可选
CUSTOM_RESULTS: false # 可选
IPINFO_APIKEY: "" # 可选
localdisks: sda1 # 输入您要挂载的硬盘名称，用逗号分隔，或输入标签。例如：sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，SMB 服务器列表，用逗号分隔
cifsusername: "用户名" # 可选，SMB 用户名，所有 SMB 共享均相同
cifspassword: "密码" # 可选，SMB 密码
```

### 自定义脚本和环境变量

此附加组件支持通过 `addon_config` 映射使用自定义脚本和环境变量：

- **自定义脚本**：请参阅 [运行附加组件中的自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件 `env_vars` 选项传递额外的环境变量（支持大写或小写名称）。详细信息请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

## 支持

在 github 上创建问题。

## 插图

![插图](https://speedtest.fdossena.com/mpot_v6.gif)

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
