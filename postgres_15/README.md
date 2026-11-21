# Home Assistant 附加组件：Postgres

我在空闲时间维护这款以及其他 Home Assistant 附加组件：跟踪上游更改、处理 Home Assistant 的更新，以及在真实硬件上进行测试需要大量时间（和一定的金钱投入）。我使用的附加组件约有 5-10 个，其中一些是定期安装在测试机器上并购买商品测试服务（如 VPN）用于调试和改进附加组件

如果这款附加组件帮您节省了时间或使您的设置更简便，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库 star 的朋友们！要 star 请点击下方图片，它将被放在右上角。非常感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量走势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/postgres/stats.png)

## 简介

PostgreSQL，通常简称为"Postgres"，是一个强调可扩展性和标准兼容性的对象关系型数据库管理系统 (ORDBMS)。作为数据库服务器，其主要功能是安全地存储数据并遵循最佳实践，以及在需要时供其他软件应用程序检索，无论是运行在同一台计算机上的应用程序还是运行在跨越网络（包括互联网）的另一台计算机上的应用程序。它可以处理从单一电脑的小型应用程序到具有许多并发用户的大型面向互联网的应用程序等各种工作负载。最新版本还提供了数据库本身的复制功能，以提高安全性和可扩展性。

此附加组件基于官方镜像：https://hub.docker.com/_/postgres

## 配置

Postgres 端口默认为 5432，并将其暴露到主机网络。
默认用户：`postgres`，密码：由 `POSTGRES_PASSWORD` 设置

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `POSTGRES_PASSWORD` | password | `homeassistant` | postgres 用户的密码 |
| `POSTGRES_USER` | str | | 可选的自定义用户名 |
| `POSTGRES_DB` | str | | 可选的默认数据库名称 |
| `POSTGRES_INITDB_ARGS` | str | | initdb 的额外参数 |
| `POSTGRES_HOST_AUTH_METHOD` | str | | 主机认证方法 |

### 配置示例

```yaml
POSTGRES_PASSWORD: "your-secure-password"
POSTGRES_USER: "myuser"
POSTGRES_DB: "mydatabase"
POSTGRES_INITDB_ARGS: "--encoding=UTF8 --lc-collate=C --lc-ctype=C"
POSTGRES_HOST_AUTH_METHOD: "md5"
```

更多信息，请查看 [官方 PostgreSQL 镜像文档](https://hub.docker.com/_/postgres)。

### 自定义脚本和环境变量

该附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（名称可以不区分大小写）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取更多详情。

**配置文件**：要更改 Postgres 设置，请在附加组件配置文件夹中创建名为 `postgresql.override.conf` 的文件（位于 `/addon_configs/xxx-postgres/` 目录中，与 `database` 文件夹相邻），每行一个 `setting = value`，然后重启附加组件。它被最后读取，因此会覆盖附加组件的默认值，并且在更新和升级过程中会保留其值。Postgres 不接受任何特定设定的配置将阻止其启动：请在更改后检查日志。

## 自动更新和升级

附加组件会自动跟随上游镜像 (`ghcr.io/immich-app/postgres`) 更新：新的 PostgreSQL 次要版本和新的 VectorChord/pgvector 版本将作为普通附加组件更新推送到来。

在每次启动时，Postgres 接受连接之前，附加组件会准备数据库：

- **扩展** 将更新到附加组件提供的版本，如果 VectorChord 自身发生了变化，VectorChord 索引将在同一事务中重建。此后会重启运行的 Immich 附加组件。

**在更新附加组件之前请备份该附加组件**（Home Assistant 提供在更新对话框中）。扩展更新无法回滚：回退到旧版本的附加组件需要恢复该备份。

使用该数据库的应用程序要求：

- Immich：版本 2.5.0 或更新版本（VectorChord 1.x）。pgvecto.rs (`vectors`) 不再提供；Immich 自迁移到 VectorChord 后就不再使用它了。

此附加组件保持在 PostgreSQL 15。如需自动升级到更新的 PostgreSQL 主版本，请使用此仓库中的"Postgres 17"附加组件，它可以接管该数据库的副本。

## 安装

此附加组件的安装非常简单，与其他任何附加组件的安装没有差异。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例（在 supervisor 附加组件商店右上角，或者如果您已配置我的 HA，请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预先填充的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击`Save`按钮存储您的配置。
1. 将附加组件选项设置为您的偏好设置，至少需要 `POSTGRES_PASSWORD`。
1. 启动附加组件。
1. 检查附加组件的日志，查看一切是否顺利。
1. 使用任何 Postgres 客户端进行连接，例如连接到 `homeassistant.local:5432`

## 安全性

`POSTGRES_PASSWORD` 选项包含默认值 `homeassistant`。由于端口 `5432` 已发布，了解它的任何网络用户都将获得超级用户权限，可以读取或更改每个数据库，并在容器中运行命令（例如使用 `COPY ... FROM PROGRAM`）。在新安装中，请在首次启动前在附加组件选项中更改它。对于现有数据库，该选项本身不会改变存储的密码：首先运行 `ALTER USER <superuser> PASSWORD '...';`，其中`<superuser>`是用该角色创建的集群（默认情况下为 `POSTGRES_USER`，`postgres`；`\du` 列出了它），然后在该选项和连接到 Postgres 的附加组件中设置相同的值。当默认值仍在设置时，附加组件会在其启动日志中打印警告。

默认情况下，Postgres 将在您主机系统的本地网络中可访问。为了改进安全性，您可以禁用此行为，使 Postgres 仅对 Home Assistant 内的其他附加组件可用。

1. 配置所有使用 Postgres 的附加组件通过内部 DNS 名称连接：`db21ed7f-postgres:5432`。
2. 前往 **设置 → 附加组件 → Postgres 15 → 配置**，在 **网络** 部分下，通过清文本框来删除端口 `5432`。
3. 点击 **保存** 并重启附加组件。
4. Postgres 现在仅可从其他附加组件访问，不再可从您的本地网络访问（例如笔记本电脑、IoT 设备等）。

## 支持

在 github 上创建问题

[repository]: https://github.com/alexbelgium/hassio-addons

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
