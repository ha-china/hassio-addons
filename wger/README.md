# Hass.io 插件：Wger

我在闲暇时间维护此及其他 Home Assistant 插件：跟踪上游更改、适应 HA 的变更以及在实际硬件上测试需要花费大量时间（有些还需要花钱）。我通常在 110 多个插件中定期使用其中的 5-10 个，为此我经常安装测试机（并购买一些我本人不使用的测试服务，如 vpn）来调试和改进这些插件。

如果您使用此插件节省时间或让设置更简单，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwger%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwger%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwger%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家为我仓库 Star！要 Star 它，请点击下方图片，它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/wger/stats.png)

## 简介

[wger](https://github.com/wger-project/wger) Workout Manager 是一个免费的开源 Web 应用程序，帮助您管理个人健身计划、体重和饮食计划，也可用作简单的健身房管理工具。它还提供了 REST API，便于与其他项目和工具进行集成。

## 配置

使用插件的 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解更多。

- 启动插件。等待一会儿，并检查日志中是否有错误。初次启动可能需要长达 15 分钟！
- 访问 yourdomain.com:9927（插件端口 `80/tcp` 的默认主机映射，由 `webui` 提示指示）。
- 默认
  - 用户名：`admin`
  - 密码：`adminadmin`

选项有两种配置方式：

- 插件选项
  ```yaml
  "CONFIG_LOCATION": config.yaml 文件的路径 #设置config.yaml 的位置(见下文)
  ```
- config.yaml (高级用法)

可以通过在插件选项定义的配置位置按此指南在 config.yaml 中添加它们来将额外变量设置为环境变量：https://github.com/alexbelgium/hassio-addons/wiki/Addons-feature:-add-env-variables

完整的变量清单可在以下位置查看：不可用

## 手机应用离线同步 (PowerSync)

官方 wger 手机应用（2.0.3 及更新版本）通过 [PowerSync](https://powersync.com/) 服务进行离线同步，该服务位于 `<SITE_URL>/ps/`。插件自带该服务，默认不启用。通过 `POWERSYNC_ENABLED` 选项启用它。

### 切换至 PostgreSQL 及切换回来

PowerSync 无法从 SQLite 进行复制，而此插件默认使用 SQLite，且 wger 与该服务的集成基于 PostgreSQL。因此，启用 PowerSync 意味着将 wger 指向 PostgreSQL 数据库——插件会帮您转移数据。

首次启用 PowerSync 启动时，插件会将 SQLite 数据库的内容复制到 PostgreSQL 数据库中。关于此操作有两点保证：

- **SQLite 数据库从未被写入**。首先进行复制，然后从副本中读取所有内容，因此原始数据库保持与原样完全一致（字节级）。再次移除 `PS_DATABASE_URI` 会将 wger 直接移回 SQLite 数据库——无论是在 `env_vars` 选项中的设置还是 `CONFIG_LOCATION` 文件中，只要移除任何一处设置即可，因为任一设置都会优先于 SQLite 默认设置。
- **导入操作只会发生在没有任何用户账户的 PostgreSQL 数据库中**。这是因为 wger 自己的测试表明该数据库从未被设置过。其引导过程会在最后一步创建管理员用户。因此，一旦数据已存入 PostgreSQL，以后再次关闭并开启 PowerSync，导入内容将不会发生，也不会修改任何数据。测试仅为此项：一个包含数据行但没有任何用户的 PostgreSQL 数据库——比如一个未完成构建的数据库——仍被视为从未设置过，并会被导入。

导入操作不会让两个数据库保持同步。切换后，PostgreSQL 成为活跃数据库，SQLite 文件则是切换时刻的静态副本。如果您切回 SQLite，期间在 PostgreSQL 中做的任何更改都将保留在 PostgreSQL 中，反之亦然。您也将被注销一次，因为会话故意不会带入新环境。

如果导入无法完成——数据库不可达，或复制或加载失败——**插件将拒绝启动 wger**，原因将在日志中说明。这是刻意为之：如果它继续运行，wger 将把空的 PostgreSQL 数据库设为全新的实例，并包含其自己的管理员用户，此后插件将看到一个已包含数据的数据库，永远不再导入您的 SQLite 行。相反地停止则保留了可导入性。

因此，如果插件无法启动且日志表明导入未完成，请修复原因——通常是数据库连接或上述权限问题，然后重新启动。若要完全放弃切换，请移除 `PS_DATABASE_URI`，插件将像什么都没发生过一样回到 SQLite 数据库。

### 需求

1. 插件可访问的 PostgreSQL 服务器——本仓库中的 **Postgres 17** 插件可行。PowerSync 读取逻辑预写式日志，因此服务器需要 `wal_level = logical`，这不是默认设置。与 Postgres 插件配合时，请在其 `CONFIG_LOCATION` 选项指向的文件中添加

   ```conf
   wal_level = logical
   ```

   然后重启它。插件会在启动时检查此设置，并在日志中告知其是否仍为 `replica`。
2. 一个用于 wger 的数据库和一个角色。PowerSync 的桶存储位于该数据库内部的专用角色和架构中，插件会在每次启动时通过上游的幂等 `manage.py setup-powersync-storage` 创建它们。因此，wger 角色需要 `CREATEROLE`，以及对数据库的 `CREATE` 权限，**只要 PowerSync 启用期间都有效**——不仅仅是首次启动：

   ```sql
   ALTER ROLE wger CREATEROLE;
   GRANT CREATE ON DATABASE wger TO wger;
   ```

   同一个角色（`PS_DATABASE_URI` 中定义的角色，而非 `powersync_storage`）也需要 `REPLICATION` 权限，这是 PowerSync 读取逻辑 WAL 的方式：

   ```sql
   ALTER ROLE wger REPLICATION;
   ```

   在 PostgreSQL 16 及更高版本（包括本仓库的 Postgres 17 插件）上，这仍不够。创建架构会运行 `CREATE SCHEMA ... AUTHORIZATION powersync_storage`，且 [文档](https://www.postgresql.org/docs/17/sql-createschema.html) 要求您必须能够将该角色设为当前角色。具有 `CREATEROLE` 权限的用户仅在其创建的角色上获得 `ADMIN OPTION`，而无 `SET` 权限，因为 [`createrole_self_grant`](https://www.postgresql.org/docs/17/runtime-config-client.html#GUC-CREATEROLE-SELF-GRANT) 默认为空。请为即将创建角色的 wger 授予此权限：

   ```sql
   ALTER ROLE wger SET createrole_self_grant = 'set, inherit';
   ```

   如果存储角色已从之前尝试中已存在，直接授予它即可——此操作需由允许分发该成员身份的角色执行，通常是超级用户：

   ```sql
   GRANT powersync_storage TO wger WITH ADMIN OPTION, SET TRUE;
   ```

   PostgreSQL 超级用户已具备所有这些权限，因此直接指向它可行，这也是最快速的工作方式，但仅为上述权限的角色是更好的选择。
3. 手机用于访问 wger 的 URL，在 `SITE_URL` 中设置。应用接收 `<SITE_URL>/ps/` 作为同步端点，因此局域网地址将无法在外部网络使用。

### 插件配置

将 `POWERSYNC_ENABLED` 设置为 `true`，并通过插件的 `env_vars` 选项添加以下内容（上述 `CONFIG_LOCATION` config.yaml 文件对这些也适用）：

```yaml
env_vars:
  - name: PS_DATABASE_URI
    value: postgres://wger:yourpassword@db21ed7f-postgres-latest:5432/wger
  - name: PS_STORAGE_PG_URI
    value: postgres://powersync_storage:anotherpassword@db21ed7f-postgres-latest:5432/wger
  - name: SITE_URL
    value: https://wger.yourdomain.com
```

- `PS_DATABASE_URI` 是 wger 自己的数据库。设置它优先于 `DJANGO_DB_*` 变量，因此此单个值既将 wger 移至 PostgreSQL 又告知 PowerSync 应复制的内容：在发货配置中，它们读取相同的 URI，因此不会意外指向不同的数据库。
- `PS_STORAGE_PG_URI` 是 PowerSync 的桶存储。请将它指向**相同**的数据库，但使用不同的角色名称和自行选择的密码；那就是插件创建的角色。必须设置此值，因为它没有有用的默认值。
- `SITE_URL` 必须是带有路径的绝对 `http://` 或 `https://` URL。

`db21ed7f-postgres-latest` 是本仓库 Postgres 17 插件的内部主机名，因此无需暴露 5432 端口即可工作。当 PostgreSQL 在外部服务器运行时，LAN IP 也可工作。

仅使用字母、数字和 `-._~` 制作密码。字符如 `@`、`:`、`/`、`?`、`#` 或 `%` 会破坏 URI，而用百分号编码也无济于事：wger 会将 `%40` 解码为 `@`，但 PowerSync 会将其原样传递给 PostgreSQL，导致连接无法验证身份。

如果密码包含 `$` 或反引号，请通过 `env_vars` 选项而非 `CONFIG_LOCATION` 文件设置这些值。两种方案均有效，但 config.yaml 方案会将值无引号地写入插件环境变量文件中，此时 shell 会扩展这些字符并静默截断密码——wger 也会得到损坏的值，而不仅仅是 PowerSync。

> **这两个 URI 包含密码，插件在启动时会打印加载的每个变量到其日志中。** 公共启动代码会屏蔽看起来像秘密的变量名，这两个名字不属于此类，因此两个 PostgreSQL 密码都会完整出现在插件日志中——即使值来自 `!secret`。请将插件日志视为敏感信息，并偏好使用具有您愿意在此处查看的密码的专用 wger 角色，而不是复用其他地方的凭证。

插件首次启动时生成应用程序和 PowerSync 所需的 RS256 JWT 密钥对并保存在 `/data/powersync/jwt.env`，因此应用程序会话可随重启存活。如果您更倾向于自行管理，请使用 `python3 manage.py generate-jwt-keys` 生成一个，并将 `JWT_PUBLIC_KEY` 和 `JWT_PRIVATE_KEY` 作为环境变量传递——可以是两个密钥分开的任意部分，也可以都是或都不是。

您的 PostgreSQL 服务器也必须是 PowerSync 支持的版本，且插件分发的同步规则来自上游 wger 项目。如果因 `wal_level` 以外的原因复制失败，插件日志将携带 PowerSync 自身的错误信息。

### 检查是否正常工作

一切就绪后，插件日志将报告 PowerSync URL，且 `/ps/probes/liveness` 将返回而非记录 `Not Found: /ps/probes/liveness`。如果缺少或无效变量，日志会确切指出是哪个变量，且 `/ps/` 保持未路由。wger 本身仍会启动，除非 `PS_DATABASE_URI` 指向 PostgreSQL 而异步数据仍等待导入：此时它将拒绝启动，因此空的 PostgreSQL 数据库不会被设为新实例。修复变量，或移除 `PS_DATABASE_URI` 以返回 SQLite。

`wal_level` 检查和 PowerSync 存储设置仅在 wger 启动且 `/ps/` already routed 后执行。如果任一失败，日志会说明，PowerSync 不会启动，且 `/ps/` 返回 `502 Bad Gateway`，直到您修复原因并重新启动插件。

如果在该插件前放置了您自己的反向代理，无需额外步骤：`/ps/` 路由原始转发传入的 `X-Forwarded-Proto`，仅在缺少时才回退到其自身方案，因此 PowerSync 可见其代理终止的外部方案。

### Licence

捆绑的 PowerSync 服务由 Journey Mobile, Inc. 发布，采用 [Functional Source License 1.1 with an Apache 2.0 future grant](https://www.powersync.com/legal/fsl) (FSL-1.1-ALv2)。其许可文本位于 `/opt/powersync/LICENSE` 图像文件中。服务固定在上游特定版本，而非跟踪 `latest`。

## 安装

此插件的安装非常直接，与其他任何 Hass.io 插件的安装没有不同。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 Supervisor 插件商店中的右上角，或点击下方按钮，如果您已配置过 HA）
   [![打开您的 Home Assistant 实例并显示带有预填特定仓库 URL 的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击 `Save` 按钮以保存您的配置。
4. 启动插件。
5. 检查插件日志以查看一切是否正常。
6. 仔细按偏好配置插件，请参阅官方文档以获取该信息。

## 支持

如果您在安装过程中遇到问题，请确保检查 GitHub。

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
