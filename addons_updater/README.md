# Home assistant add-on: addons updater

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/json?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Faddons_updater%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Faddons_updater%2Fconfig.json)
![Arch](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Faddons_updater%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库点赞的人！点击下面的图片点赞，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/addons_updater/stats.png)

## 关于

这个脚本允许根据上游的新发布自动更新插件。这只是一个开发人员的辅助工具。最终用户不需要用它来更新他们的插件 - 当有更新可用时，HA会自动提醒他们。

## 安装

这个插件的安装非常简单，与其他任何Hass.io插件的安装方式相同。

1. [将我的Hass.io插件仓库][repository]添加到您的Hass.io实例中。
1. 安装这个插件。
1. 根据您的偏好配置插件，见下文。
1. 点击`保存`按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志，看看一切是否正常。

## 配置

没有WebUI。配置是通过两种方式设置的。

### Updater.json

在您的仓库的插件文件夹中（您config.json的位置），创建一个"updater.json"文件。
这个文件将用于插件来获取插件上游的信息。
只有带有updater.json文件的插件才会被更新。
这里是一个[示例](https://github.com/alexbelgium/hassio-addons/blob/master/arpspoof/updater.json)。

您可以在文件中添加以下标签：

- github_fulltag: true例如"v3.0.1-ls67"，false是"3.0.1"
- github_beta: true/false；是否只查找发布版本或预发布版本
- github_havingasset : true如果有一个要求发布版本有二进制文件而不仅仅是源代码
- github_tagfilter: 过滤发布名称中的文本
- github_exclude: 排除发布名称中的文本
- last_update: 自动填充，上次上游更新的日期
- repository: 'name/repo'来自github
- paused: true # 暂停更新
- slug: 您的插件的slug名称
- source: dockerhub/github,gitlab,bitbucket,pip,hg,sf,website-feed,local,helm_chart,wiki,system,wp
- upstream_repo: name/repo，例如是'linuxserver/docker-emby'
- upstream_version: 自动填充，对应插件中引用的当前上游版本
- dockerhub_by_date: 在dockerhub，使用last_update日期而不是版本
- dockerhub_list_size: 在dockerhub，考虑多少容器用于最新版本

### 插件配置

在这里，您定义允许插件连接到您的仓库的值。

```yaml
repository: 'name/repo'来自github
gituser: 您的github用户名
gitapi: 您的github api令牌(classic) https://github.com/settings/tokens
gitmail: 您的github邮箱
verbose: 'false'
```

示例：

```yaml
repository: alexbelgium/hassio-addons
gituser: 您的github用户名
gitapi: 您的github api令牌
gitmail: 您的github邮箱
verbose: "false"
```

### 自定义脚本和环境变量

这个插件支持通过`addon_config`映射自定义脚本和环境变量：

- **自定义脚本**：参见[在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：使用插件的`env_vars`选项，并参见[为您的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)以获取详细信息。

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
