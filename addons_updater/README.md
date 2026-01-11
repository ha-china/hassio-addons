# Home assistant add-on: addons updater

我利用业余时间维护这个和其他的Home Assistant add-on：跟上上游的更改、HA的更改，并在真实硬件上测试需要大量时间（和一些钱）。我大约使用我超过110个add-on中的5-10个，所以我会安装一些我不自己使用的测试机器（和购买一些测试服务，比如VPN）来调试和改进这些add-on。

如果这个add-on能帮你节省时间或者让你的设置更简单，我将非常感谢你的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/json?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Faddons_updater%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Faddons_updater%2Fconfig.json)
![Arch](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Faddons_updater%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！点击下面的图片来点赞，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/addons_updater/stats.png)

## About

这个脚本允许根据上游的新发布自动更新add-on。这只是一个开发者的辅助工具。最终用户不需要这个来更新他们的add-on - 当有更新可用时，HA会自动提醒他们。

## Installation

这个add-on的安装非常简单，与安装任何其他Hass.io add-on没有区别。

1. [将我的Hass.io add-ons仓库][repository]添加到你的Hass.io实例。
1. 安装这个add-on。
1. 根据你的偏好配置这个add-on，见下文。
1. 点击`保存`按钮来存储你的配置。
1. 启动这个add-on。
1. 检查add-on的日志，看看是否一切正常。

## Configuration

没有webUI。配置是通过两种方式设置的。

### Updater.json

在你的仓库的add-on文件夹中（你config.json的位置），创建一个"updater.json"文件。
这个文件将被add-on用来获取add-on的上游信息。
只有带有updater.json文件的add-on会被更新。
这里是一个[示例](https://github.com/alexbelgium/hassio-addons/blob/master/arpspoof/updater.json)。

你可以在文件中添加以下标签：

- github_fulltag: true的例子是"v3.0.1-ls67"，false是"3.0.1"
- github_beta: true/false；是否只查找发布版本或预发布版本
- github_havingasset : true如果有一个要求发布必须有二进制文件而不仅仅是源代码
- github_tagfilter: 过滤发布名称中的文本
- github_exclude: 排除发布名称中的文本
- last_update: 自动填充，上次上游更新的日期
- repository: 'name/repo'来自github
- paused: true # 暂停更新
- slug: 你的add-on的slug名称
- source: dockerhub/github,gitlab,bitbucket,pip,hg,sf,website-feed,local,helm_chart,wiki,system,wp,codeberg (Codeberg通过其Gitea API支持，该API会自动配置)
- upstream_repo: name/repo，例子是'linuxserver/docker-emby'
- upstream_version: 自动填充，对应add-on中引用的当前上游版本
- dockerhub_by_date: 在dockerhub中，使用last_update日期而不是版本
- dockerhub_list_size: 在dockerhub中，考虑多少容器来获取最新版本

### Addon configuration

在这里，你定义允许add-on连接到你的仓库的值。

```yaml
repository: 'name/repo'来自github
gituser: 你的github用户名
gitapi: 你的github api令牌(classic) https://github.com/settings/tokens
gitmail: 你的github邮箱
date_iso8601: true # 使用ISO8601日期（YYYY-MM-DD）而不是DD-MM-YYYY
verbose: 'false'
```

示例：

```yaml
repository: alexbelgium/hassio-addons
gituser: 你的github用户名
gitapi: 你的github api令牌
gitmail: 你的github邮箱
date_iso8601: true
verbose: "false"
```

### Custom Scripts and Environment Variables

这个add-on支持通过`addon_config`映射自定义脚本和环境变量：

- **Custom scripts**: 参考[在Addons中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **Environment variables**: 使用add-on的`env_vars`选项，并参考[为你的Addon添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)获取详细信息。

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
