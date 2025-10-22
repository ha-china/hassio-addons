# Home assistant add-on: Postgres

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/postgres/stats.png)

## 关于

PostgreSQL，通常简称为 "Postgres"，是一个面向对象的数据库管理系统（ORDBMS），强调可扩展性和标准合规性。作为数据库服务器，其主要功能是安全地存储数据，并支持最佳实践，然后在其他软件应用程序（无论是在同一台计算机上还是在跨网络的另一台计算机上运行）的请求下检索数据（包括互联网）。它可以处理从单机小型应用程序到具有许多并发用户的大型互联网应用程序的工作负载。最新版本还提供了数据库本身的复制，以提高安全性和可扩展性。

此插件基于官方镜像：https://hub.docker.com/_/postgres

## 配置

Postgres 端口默认为 5432，并暴露到主机网络。
默认用户：`postgres`，密码：由 `POSTGRES_PASSWORD` 设置

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `POSTGRES_PASSWORD` | 密码 | `homeassistant` | Postgres 用户的密码 |
| `POSTGRES_USER` | 字符串 | | 可选的自定义用户名 |
| `POSTGRES_DB` | 字符串 | | 可选的默认数据库名 |
| `POSTGRES_INITDB_ARGS` | 字符串 | | initdb 的附加参数 |
| `POSTGRES_HOST_AUTH_METHOD` | 字符串 | | 主机认证方法 |

### 示例配置

```yaml
POSTGRES_PASSWORD: "your-secure-password"
POSTGRES_USER: "myuser"
POSTGRES_DB: "mydatabase"
POSTGRES_INITDB_ARGS: "--encoding=UTF8 --lc-collate=C --lc-ctype=C"
POSTGRES_HOST_AUTH_METHOD: "md5"
```

更多信息，请查看 [官方 PostgreSQL 镜像文档](https://hub.docker.com/_/postgres)。

### 自定义脚本和环境变量

此插件支持通过 `addon_config` 映射自定义脚本和环境变量：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：参见 [为您的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

**配置文件**：默认情况下 `postgresql.conf` 存储在 `/config/postgresql.conf`，其他插件和 Home Assistant 都可以访问。您可以使用文件编辑插件修改它。为了更好的安全性，将 `CONFIG_LOCATION` 更改为 `/data/orig/postgresql.conf`，使其仅对此插件可访问。

## 安装

此插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 Supervisor 插件商店的右上角，或点击下面的按钮如果您已配置我的 HA）
   [![打开您的 Home Assistant 实例并显示添加插件仓库对话框，并预填充特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 设置插件选项以符合您的偏好，至少需要设置 `POSTGRES_PASSWORD`。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 使用任何 Postgres 客户端连接，例如 `homeassistant.local:5432`。

## 安全性

默认情况下，Postgres 将在您主机系统的本地网络上可访问。为了提高安全性，您可以禁用此行为，并使 Postgres 仅对 Home Assistant 内的其他插件可访问。

1. 配置所有使用 Postgres 的插件通过内部 DNS 名称连接：`db21ed7f-postgres:5432`。
2. 转到 **设置 → 插件 → Postgres 15 → 配置**，在 **网络** 下，通过清除文本字段删除端口 `5432`。
3. 点击 **保存** 并重启插件。
4. Postgres 现在仅可从其他插件访问，且不再从您的本地网络（例如，笔记本电脑、物联网设备等）可访问。

## 支持

在 github 上创建问题

[repository]: https://github.com/alexbelgium/hassio-addons