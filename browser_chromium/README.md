# Home Assistant 附加组件：chromium

我利用空闲时间维护此及其他 Home Assistant 附加组件：跟进上游变更、HA 变更，以及在实际硬件上测试需要耗费大量时间（还花了一些钱）。我使用的附加组件约为 110 个中的 5-10 个，所以我经常安装测试机器（并购买一些我自己不使用的测试服务，如 vpn）来排查问题并改进附加组件。

如果此附加组件为您节省了时间或使您的设置更简单，我很感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=徽章等级)
[![GitHub 超级代码检测器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=检测代码库)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/购买我一杯咖啡-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/通过 PayPal 捐赠-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的仓库点亮星标！要点亮它，点击下方图片后，它将被移到右上角。谢谢！_

[![alexbelgium/hassio-addons 的星标仓库名册](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量变化](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/chromium/stats.png)

## 关于

[chromium](https://chromium.com/) 是一款适用于 PC、Mac 和移动设备的快速、安全且私密的网络浏览器。
此附加组件基于 docker 镜像 https://github.com/linuxserver/docker-chromium。

## 配置

使用附加组件的 `env_vars` 选项来传递额外的环境变量（大小写名称均可）。详情参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

WebUI 可通过入口或 <http://homeassistant:PORT> 找到。端口默认禁用到无法启用，但可通过附加组件选项启用。

默认情况下，镜像基于 abc 用户，我们建议使用该用户，因为所有初始化/配置都基于它。默认密码也是 abc。如果您想更改此密码，并在访问界面时需要身份验证，只需在容器内的 GUI 终端中输入 passwd。然后，在访问 Web 界面时使用以下路径：

http://localhost:3000/?login=true

应用程序安装不是持久化的，您必须通过附加组件选项进行操作。不过，它们的配置是持久的。

如果图像无法正常显示，请使用 DRINODE 功能来选择您的显示设备。

查看所有可能的 ENV 变量：https://docs.linuxserver.io/images/docker-chromium#optional-environment-variables

```yaml
TZ: timezone ; 根据 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html 填写国家/城市
additional_apps: engrampa，thunderbird # 允许安装应用程序，因为它们不是持久化的
DRINODE: 指定自定义显示设备，默认为 /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 保持空白以使用路由器 DNS，或设置自定义 DNS 以避免垃圾邮件（如果本地 DNS 包含广告拦截器）
localdisks: sda1 # 将驱动器硬件名称输入以挂载，逗号分隔，或为其标签。例如：sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，要挂载的 smb 服务器列表，逗号分隔
cifsusername: "用户名" # 可选，smb 用户名，所有 smb 共享相同
cifspassword: "密码" # 可选，smb 密码
cifsdomain: "域名" # 可选，允许为 smb 共享设置域名
```

## 安装

此附加组件的安装非常简单，与其他附加组件的安装没有不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例（在 supervisor 附加组件存储右上侧，或如果您已配置 HA，则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 检查附加组件的日志，查看一切是否顺利进行。
1. 打开 WebUI 并调整软件选项

## 支持

在 github 上创建问题

## 插图

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
