## &#9888; 打开问题 : [🐛 [Firefly iii] 更新器拉取预发布版本 (已开启 2025-02-22)](https://github.com/alexbelgium/hassio-addons/issues/1783) 由 [@dreautall](https://github.com/dreautall)
# Home Assistant 插件: 插件更新器

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Faddons_updater%2Fconfig.json)
![入口](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Faddons_updater%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Faddons_updater%2Fconfig.json)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库加星的人！要加星，请点击下面的图片，然后会在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标者列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/addons_updater/stats.png)

## 关于

此脚本允许根据上游新版本自动更新插件。这只是一个开发者的辅助工具。最终用户无需使用该工具来更新其插件——当有可用更新时，HA会自动提醒。

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有什么不同。

1. [将我的 Hass.io 插件仓库][repository] 添加到你的 Hass.io 实例。
1. 安装此插件。
1. 按照你的偏好配置插件，见下文。
1. 点击 `保存` 按钮以存储你的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切顺利。

## 配置

没有 WebUI。配置通过两种方式设置。

### Updater.json

在你仓库的插件文件夹中（config.json 所在的位置），创建一个 "updater.json" 文件。
该文件将被插件用于获取插件的上游信息。
只有带有 updater.json 文件的插件才会被更新。
以下是 [一个示例](https://github.com/alexbelgium/hassio-addons/blob/master/arpspoof/updater.json)。

你可以在文件中添加以下标签：

- fulltag: true 例如 "v3.0.1-ls67"，false 是 "3.0.1"
- github_beta: true/false ; 是否只查找发布版本或预发布版本
- github_havingasset : true 如果需要确保发布有二进制文件而不仅仅是源代码
- github_tagfilter: 过滤发布名称中的文本
- github_exclude: 在发布名称中排除文本
- last_update: 自动填充，最后一次上游更新的日期
- repository: 'name/repo' 来自 GitHub
- paused: true # 暂停更新
- slug: 你的插件的 slug 名称
- source: dockerhub/github,gitlab,bitbucket,pip,hg,sf,website-feed,local,helm_chart,wiki,system,wp
- upstream_repo: name/repo，示例为 'linuxserver/docker-emby'
- upstream_version: 自动填充，对应插件中引用的当前上游版本
- dockerhub_by_date: 在 dockerhub 中，使用 last_update 日期而不是版本
- dockerhub_list_size: 在 dockerhub 中，考虑多少个容器作为最新版本

### 插件配置

在这里，你定义允许插件连接到你的仓库的值。

```yaml
repository: 'name/repo' 来自 GitHub
gituser: 你的 GitHub 用户名
gitapi: 你的 GitHub API 令牌（经典）https://github.com/settings/tokens
gitmail: 你的 GitHub 邮箱
verbose: 'false'
```

示例：

```yaml
repository: alexbelgium/hassio-addons
gituser: 你的 GitHub 用户名
gitapi: 你的 GitHub API 令牌
gitmail: 你的 GitHub 邮箱
verbose: "false"
```

[repository]: https://github.com/alexbelgium/hassio-addons