# Home assistant add-on: Postgres

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库星标的人！要星标它，请点击下面的图片，然后它将在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/postgres/stats.png)

## 关于

PostgreSQL，通常简称为"Postgres"，是一个对象关系型数据库管理系统（ORDBMS），强调可扩展性和标准合规性。作为数据库服务器，其主要功能是安全地存储数据，并按照其他软件应用程序（无论是同一台计算机上的应用程序还是跨网络运行在另一台计算机上的应用程序，包括互联网）的请求检索数据。它可以处理从单机小应用程序到具有许多并发用户的大型互联网应用程序的工作负载。最新版本还提供数据库本身的复制，以提高安全性和可扩展性。

此插件基于官方镜像：https://hub.docker.com/_/postgres

## 配置

Postgres端口默认为5432，并暴露给主机网络。

默认用户：`postgres`
密码：`由POSTGRES_PASSWORD设置`

您可以配置以下选项：

```yaml
POSTGRES_PASSWORD
POSTGRES_USER
POSTGRES_DB
POSTGRES_INITDB_ARGS
POSTGRES_HOST_AUTH_METHOD
```

有关更多信息，请查看[基础镜像文档](https://hub.docker.com/_/postgres)。

默认情况下，`postgresql.conf`存储在一个卷中，其他插件和Home Assistant都可以访问，因此您可以通过例如文件编辑插件方便地修改它。如果您更喜欢更高的安全性，请将`CONFIG_LOCATION`更改为例如`/data/orig/postgresql.conf`，这样它将只能被此插件访问，但您将不得不通过[Hassio SSH](https://developers.home-assistant.io/docs/operating-system/debugging/)来修改它。

### 自定义脚本和环境变量

此插件通过`addon_config`映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅[在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：请参阅[向您的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

## 安装

此插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的Home Assistant实例（在supervisor插件商店的右上角，或者如果您已配置我的HA，请点击下面的按钮）
   [![打开您的Home Assistant实例并显示带有特定仓库URL预填充的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击`保存`按钮以保存您的配置。
4. 根据您的偏好设置插件选项，至少需要设置`POSTGRES_PASSWORD`。
5. 启动插件。
6. 检查插件的日志，以查看是否一切正常。
7. 使用任何Postgres客户端连接，例如`homeassistant.local:5432`。

从postgres 15迁移：

- 停止postgres 15插件
- 使用Filebrowser插件将数据库文件夹从`/addon_configs/xxx-postgres`复制到`/addon_configs/xxx-postgres_latest`
- 启动postgres 17插件。数据库升级应该会继续。如果升级失败，您的数据仍然安全在postgres 15插件中

## 安全性

默认情况下，Postgres将可在您的主机系统的本地网络上访问。为了提高安全性，您可以使Postgres仅在Home Assistant内的其他插件中可用。

1. 配置所有使用Postgres的插件通过内部DNS名称连接：`db21ed7f-postgres-latest:5432`。
2. 转到**设置 → 插件 → Postgres 17 → 配置**，在**网络**下，通过清除文本字段删除端口`5432`。
3. 点击**保存**并重新启动插件。
4. Postgres现在只能从其他插件访问，而不再从您的本地网络（例如，笔记本电脑、物联网设备等）访问。

## 支持

在github上创建问题

[repository]: https://github.com/alexbelgium/hassio-addons