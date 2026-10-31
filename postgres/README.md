# 家庭助理附加组件：Postgres

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢每一个给我项目加星的朋友！要给它加星，请点击下面的图片，然后它会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/postgres/stats.png)

## 介绍

PostgreSQL，通常简称为 "Postgres"，是一种注重可扩展性和符合标准的对象关系数据库管理系统（ORDBMS）。作为数据库服务器，它的主要功能是安全地存储数据并支持最佳实践，并根据其他软件应用的请求来检索这些数据，这些应用可以是在同一计算机上，也可以是在网络（包括互联网）上的另一台计算机上。它能够处理从小型单机应用到具有许多并发用户的大型互联网应用的工作负载。最近的版本还提供数据库本身的复制功能，以增强安全性和可扩展性。

此附加组件基于官方镜像： https://hub.docker.com/_/postgres

## 配置

Postgres 的默认端口为 5432，并暴露给主机网络。

默认用户：`postgres`
密码：`由 POSTGRES_PASSWORD 设置`

您可以配置以下选项：
```yaml
POSTGRES_PASSWORD
POSTGRES_USER
POSTGRES_DB
POSTGRES_INITDB_ARGS
POSTGRES_HOST_AUTH_METHOD
```
有关更多信息，请查看 [基础镜像文档](https://hub.docker.com/_/postgres)。

默认情况下，`postgresql.conf` 存储在可被其他附加组件和家庭助理访问的卷中，因此您可以方便地通过文件编辑器附加组件等进行修改。如果您更喜欢更好的安全性，请将 `CONFIG_LOCATION` 更改为例如 `/data/orig/postgresql.conf`，这样它只能被此附加组件访问，但您需要通过 [Hassio SSH](https://developers.home-assistant.io/docs/operating-system/debugging/) 进行修改。

## 安装

此附加组件的安装相当简单，与安装其他任何附加组件没有区别。

1. 将我的附加组件库添加到您的家庭助理实例（在管理者插件商店的右上角，或者如果您已配置我的 HA，则点击下面的按钮）
   [![打开您的家庭助理实例并显示附加组件库对话框，预填充特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `保存` 按钮以存储您的配置。
4. 设置附加组件选项为您的偏好，至少需要 POSTGRES_PASSWORD。
5. 启动附加组件。
6. 检查附加组件的日志以查看是否一切正常。
7. 使用任何 Postgres 客户端连接，例如连接到 `homeassistant.local:5432`

## 支持

在 GitHub 上创建一个问题

[仓库]: https://github.com/alexbelgium/hassio-addons