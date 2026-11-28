# Home Assistant Add-on: Postgres

我利用业余时间维护此及其他 Home Assistant Add-on：跟进上游变更、Home Assistant 变更以及在真实硬件上进行测试需要大量时间（以及一些金钱）。我常用我 110 多个 Add-on 中的 5-10 个，所以我经常安装测试机器（并购买一些我自己不使用的测试服务，如 vpn）来 troubleshoot 和改进 Add-on。

如果此 Add-on 为您节省了时间或让您的设置更简单，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Add-on 信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpostgres%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflows/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflows/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我 repo 点赞的人！点击下图给它点赞，它将会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/postgres/stats.png)

## 关于

PostgreSQL，通常简称为"Postgres"，是一个侧重于扩展性和标准合规性的对象关系数据库管理系统 (ORDBMS)。作为数据库服务器，其主要功能是安全地存储数据（并支持最佳实践），并在其他软件应用程序请求时检索这些（无论是同一台计算机上的应用程序，还是在通过网络（包括互联网）在其他计算机上运行的应用程序）。它可以处理从小型单机应用程序到具有许多并发用户的大型面向互联网应用程序的各种工作负载。最新版本还提供了数据库本身的复制以用于安全性和可扩展性。

此 Add-on 基于官方镜像：https://hub.docker.com/_/postgres

## 配置

Postgres 端口默认为 5432，已暴露到主机网络。

默认用户：`postgres`
密码：`由 POSTGRES_PASSWORD 设定`

您可以配置以下选项：

```yaml
POSTGRES_PASSWORD
POSTGRES_USER
POSTGRES_DB
POSTGRES_INITDB_ARGS
POSTGRES_HOST_AUTH_METHOD
```

更多信息请查看 [基础镜像文档](https://hub.docker.com/_/postgres)。

要更改 PostgreSQL 设置，请在 Add-on 配置文件夹（`/addon_configs/xxx-postgres_latest/`，位于 `database` 文件夹旁边）中创建一个名为 `postgresql.override.conf` 的文件，每行包含一个 `setting = value`，然后重启 Add-on。它最后读取，因此会覆盖 Add-on 的默认值，并且会保持不变直到更新和升级。如果 PostgreSQL 不接受某个设置，则无法启动：请在更改后查看日志。

### 自定义脚本和环境变量

此 Add-on 支持通过 `app_config` 映射使用自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在 Add-on 中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用 Add-on 的 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 自动更新和升级

此 Add-on 会自行跟踪上游镜像 (`ghcr.io/immich-app/postgres`)：新的 PostgreSQL 次要版本和新的 VectorChord / pgvector 版本会作为普通的 Add-on 更新到达。

在每次启动时，在 PostgreSQL 接受连接之前，此 Add-on 会准备数据库：

- **扩展** 会更新到 Add-on 分发的版本，并且当 VectorChord 本身发生变化时，会在同一事务中重建 VectorChord 索引。随后会重启正在运行的 Immich Add-on。
- **来自较早的一个 PostgreSQL主要版本**（15）的数据库会使用 `pg_upgrade` 进行升级。升级会在一个副本上进行；只有当升级副本启动并检查通过后，您的数据库才会被替换。它需要和数据库本身一样多的空闲空间。
  - 成功时，先前的数据库会保存在 `database.pg<version>.bak`（与 add-on 配置文件夹中的 `database` 相邻），并在 Add-on 升级 7 天或更多天后首次启动时删除。您可以提前删除它。
  - 失败时，您的数据库保留在之前的 PostgreSQL 主要版本（仅更新其扩展），相反地启动该 *之前* 主要的 PostgreSQL（Add-on 分发），并在 Home Assistant 中显示通知。当 `pg_upgrade` 本身失败时，其日志会保存在 `database.upgrade_logs` 中，升级会在 Add-on 的下一个版本中尝试，或者如果您删除文件 `database.upgrade_failed` 则在下次启动时尝试。
  - 如果最后一步失败（升级后的数据库无法重命名到位），则什么都不会启动：此时您的先前的数据库位于 `database.pg<version>.bak` 中，升级后的数据库位于 `database.upgrade/new` 中；下次启动时将完成该步骤。
  - 未自动处理：数据库文件夹之外的表空间，以及从 PostgreSQL 15 开始的逻辑复制槽（它们无法在 `pg_upgrade` 中存活；请重新同步消费者，例如 PowerSync）。

在升级期间，应用程序会被断开连接（大致等于复制数据库所需的时间）。 afterwards，角色、密码、访问规则、端口和主机名均保持不变。

**在更新之前对此 Add-on 进行备份**（Home Assistant 提供该功能，在更新对话框中）。扩展更新无法撤销：退回 Add-on 的旧版本需要恢复该备份。

使用此数据库的应用程序要求：

- Immich：版本 2.5.0 或更新版本（VectorChord 1.x）。pgvecto.rs (`vectors`) 不再分发；Imich 自迁移到 VectorChord 后就没有再使用它。

## 安装

此 Add-on 的安装非常直观，与其他任何 Add-on 的安装没有区别。

1. 将我的 Add-on 仓库添加到您的 Home Assistant 实例中（在 supervisor Add-on 商店点击右上角，或者如果您配置了我的 HA，则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示添加 Add-on 仓库对话框，并具有特定仓库 URL 预填充](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此 Add-on。
3. 点击 `Save` 按钮以保存您的配置。
4. 设置 Add-on 选项为先选，至少需要 `POSTGRES_PASSWORD`。
5. 启动 Add-on。
6. 查看 Add-on 的日志，看是否一切顺利。
7. 使用任何 Postgres 客户端进行连接，例如连接至 `homeassistant.local:5432`

从 Postgres 15 Add-on 的迁移：

- 停止 Postgres 15 Add-on
- 使用 Filebrowser Add-on 将 `database` 文件夹从 `/addon_configs/xxx-postgres` 复制到 `/addon_configs/xxx-postgres_latest`
- 启动此 Add-on：如上所述，数据库会被自动升级。您的数据将保留在 Postgres 15 Add-on 中，直到您将其删除
- 将应用程序指向此 Add-on：内部主机名从 `db21ed7f-postgres` 变为 `db21ed7f-postgres-latest`（如果它们使用 `homeassistant.local:5432` 则无需更改）

## 安全性

`POSTGRES_PASSWORD` 选项携带默认值 `homeassistant`。由于端口 `5432` 已发布，网络上知道它的人即可获得超级用户权限，该用户可以读取或更改任何数据库并在容器中运行命令（例如 `COPY ... FROM PROGRAM`）。在新安装中，请在首次启动之前在 Add-on 选项中更改它。对于现有数据库，仅此选项不会更改存储的密码：请先运行 `ALTER USER <superuser> PASSWORD '...';`，其中 `<superuser>` 是创建集群的角色（默认为 `POSTGRES_USER`，`postgres`；`\du` 列出它），然后在选项和连接到 Postgres 的 Add-on 中设置相同的值。如果仍保留默认值，Add-on 会在启动日志中打印警告。

默认情况下，Postgres 将在您的主机系统的本地网络上可访问。为了提高安全性，您可以禁用此行为，使 Postgres 仅在 Home Assistant 内的其他 Add-on 之间可用。

1. 配置所有使用 Postgres 并通过内部 DNS 名称连接的 Add-on：`db21ed7f-postgres-latest:5432`。
2. 进入 **设置 → Add-on → Postgres 17 → 配置**，在 **网络** 下，通过清空文本字段来移除端口 `5432`。
3. 点击 **保存** 并重启 Add-on。
4. Postgres 现在只能从其他 Add-on 访问，不再能从您的本地网络访问（例如，笔记本电脑、IoT 设备等）。

## 支持

在 github 上创建 issue

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
