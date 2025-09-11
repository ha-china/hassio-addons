# 家庭助理插件：Fireflyiii fints 导入器

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_fints_importer%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_fints_importer%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_fints_importer%2Fconfig.json)

[![Codacy 勋章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有关注我仓库的人！要关注，请点击下图，然后就会在右上角。谢谢！_

[![关注者名单 @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/fireflyiii_fints_importer/stats.png)

## 关于

["Firefly III"](https://www.firefly-iii.org) 是一个（自托管）个人财务管理工具。它可以帮助你跟踪支出和收入，让你花费更少、储蓄更多。此工具允许你将支持 FinTS 的银行的交易导入到 Firefly III。它提供了一个网络 GUI，引导你完成整个过程。

此插件基于 Docker 镜像 [https://hub.docker.com/r/benkl/firefly-iii-fints-importer](https://hub.docker.com/r/benkl/firefly-iii-fints-importer)

## 配置

请阅读官方文档以获取设置信息： [https://github.com/bnw/firefly-iii-fints-importer](https://github.com/bnw/firefly-iii-fints-importer)

可以在 `/config/addons_config/fireflyiii_fints_importer/` 文件夹中添加配置，详见： [https://github.com/bnw/firefly-iii-fints-importer#storing-configurations](https://github.com/bnw/firefly-iii-fints-importer#storing-configurations)

### 定时任务

通过选择周期可以激活一个定期运行所有配置的定时任务。请注意，周期 `daily2`、`daily4` 等在早上 2 点、4 点等运行，因此你可以选择更新小时。

## 安装

此插件的安装非常简单，与安装其他插件没有区别。

1. 将我的插件仓库添加到您的家庭助理实例中（在监督员插件商店的右上角，或如果您已配置我的 HA，请点击下面的按钮）
   [![打开你的家庭助理实例并显示添加插件仓库对话框，预填充特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击 `保存` 按钮以保存您的配置。
4. 根据您的偏好设置插件选项。
5. 启动插件。
6. 检查插件的日志以查看一切是否正常。
7. 打开 webUI 并调整软件选项。

## 支持

在 GitHub 上创建问题。

## 插图

[repository]: https://github.com/alexbelgium/hassio-addons