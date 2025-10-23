![项目阶段][项目阶段盾牌]
![维护状态][维护状态盾牌]
[![许可证][许可证盾牌]](https://github.com/expaso/hassos-addon-timescaledb/blob/main/LICENSE)

<a href="https://www.buymeacoffee.com/expaso" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

# Home Assistant 添加组件：[PostgreSQL](https://www.postgresql.org/) [TimescaleDB](https://www.timescale.com/)

## [PostgreSql 17.6](https://www.postgresql.org/) & [Postgis 3.6.0](https://postgis.net/) & [TimescaleDB 2.22.1](https://www.timescale.com/) & [TimescaleDB Toolkit 1.21.0](https://github.com/timescale/timescaledb-toolkit) & [pgAgent 4.2.3](https://www.pgadmin.org/docs/pgadmin4/development/pgagent.html)

#### 配置

示例添加组件配置：

```
 {
    "databases": ["homeassistant"],
    "timescale_enabled": ["homeassistant"],
    "timescaledb": {
      "telemetry": "basic",
      "maxmemory": "512MB",
      "maxcpus": "4"
      },
      "max_connections": 20,
      "system_packages": [],
      "init_commands": []
 }
```

#### 选项：`databases`

设置一个数据库名称列表，在启动添加组件时将为您创建这些数据库。
您也可以使用您选择的选择的 psql 客户端自行创建数据库。

#### 选项：`timescale_enabled`

设置一个数据库名称列表，在这些数据库中启用 timescale 扩展。
不在该列表中的数据库将像普通 Postgre 数据库一样运行。

#### 选项：`timescaledb.telemetry`

切换 TimescaleDb 的遥测功能开启或关闭。
有效选项为：'basic' 或 'off'。
参见：https://docs.timescale.com/latest/using-timescaledb/telemetry

#### 选项：`timescaledb.maxmemory`

设置 PostgreSQL 将占用的最大内存量。
重要的是为您的机器（或树莓派）上的其他进程留出空间，因此不要将这些级别设置得太高（例如，总内存的 50% 以下）。

示例：`maxmemory="1024MB"`
或者留空以接受自动调谐。

#### 选项：`timescaledb.maxcpu`

设置 PostgreSQL 将使用的最大核心数。
重要的是为您的机器（或树莓派）上的其他进程留出空间，因此不要将这些级别设置得太高（例如，总核心数的 75% 以下）。

示例：`maxcpu="2"`
或者留空以接受自动调谐。

参见：
https://docs.timescale.com/latest/getting-started/configuring
进行进一步调谐。您的 Postgres.config 文件位于添加组件的数据目录中。

#### 选项：`max_connections`

设置 PostgreSQL 将接受的连接数上限。
提高此设置可能会导致更高的内存使用。

示例：`max_connections=30`

#### 选项：`system_packages`

仅限高级用户！
在启动添加组件时安装的额外 Alpine 软件包列表。

示例：['nano']

#### 选项：`init_commands`

仅限高级用户！
在启动期间运行的额外命令列表。

例如，修改 postgresql.conf 文件中的内容：

示例：['sed -i -e "/max_connections =/ s/= .*/= 50/" /data/postgres/postgresql.conf']

#### 选项：`retry_upgrade`

仅限高级用户！
如果升级过程中失败，可以重试从 Postgres 14 到 15 的升级。
基本上，这会尝试找到 PostgreSQL 12 的旧数据库文件，并在尝试再次升级到 PostgreSQL 14 之前将它们恢复。

!! 如果您不知道自己在做什么，或者在进行备份之前，请不要设置此选项。 !!!

#### 选项：`postgresql_config`

允许您自定义 PostgreSQL 服务器参数。这些设置将应用于 `postgresql.conf` 并可以覆盖默认设置。

示例：
```yaml
postgresql_config:
  log_statement: "all"
  work_mem: "16MB"
  maintenance_work_mem: "256MB"
```

参见 [PostgreSQL 文档](https://www.postgresql.org/docs/current/runtime-config.html) 以获取可用参数。

**注意：** 一些关键参数无法修改（例如，`shared_preload_libraries`、`port`、`data_directory`），因为它们由添加组件管理。

#### 选项：`pg_hba_config`

允许您向 `pg_hba.conf` 添加自定义认证规则。规则将追加到默认规则中。

示例：
```yaml
pg_hba_config:
  - type: "host"
    database: "homeassistant"
    user: "all"
    address: "192.168.1.0/24"
    method: "md5"
```

参见 [PostgreSQL 文档](https://www.postgresql.org/docs/current/auth-pg-hba-conf.html) 以获取认证方法。

**警告：** 不正确的配置可能会使您无法访问数据库。

### 独立运行容器

在这种情况下，您需要在您的机器上有一个工作的 Docker 安装。
从 Docker Hub 拉取所需架构的镜像：

```
docker pull ghcr.io/expaso/timescaledb/amd64:stable
docker pull ghcr.io/expaso/timescaledb/aarch64:stable
docker pull ghcr.io/expaso/timescaledb/armv7:stable
docker pull ghcr.io/expaso/timescaledb/armhf:stable
docker pull ghcr.io/expaso/timescaledb/i386:stable
```

您可以将 *stable* 替换为您想要使用的版本号。

简单地这样启动它：

```
docker run \
  --rm \
  --name timescaledb \
  --v ${PWD}/timescaledb_addon_data:/data \
  -p 5432:5432 \
  ghcr.io/expaso/timescaledb/amd64:stable
```

这将使用 ~/timescaledb_addon_data 作为容器的数据目录，并将端口 5432 映射到主机。

如果您想作为守护进程启动容器，只需移除 `--rm` 选项并添加 `-d` 选项，如下所示：

```
docker run \
  -d \
  --name timescaledb \
  --v ${PWD}/timescaledb_addon_data:/data \
  -p 5432:5432 \
  ghcr.io/expaso/timescaledb/amd64:stable
```

## 使用

现在您已经准备好使用带有 TimescaleDb 扩展的 PostgreSQL 了！

寻找一个不错的基于 Web 的客户端？**尝试 pgAdmin4 添加组件。**

请别忘了在添加组件的网络部分映射 TCP/IP 端口到所需的端口号。
默认端口是 `5432`

**安全警告！**

默认用户名是 `postgres`，密码是 `homeassistant`。
激活添加组件后，请立即更改此设置：

```
ALTER USER postgres WITH PASSWORD 'strongpassword';
```

⚠️ 创建每个数据库的单独用户被认为是最佳实践，并将数据库的所有权转移给该用户。
在此配置中，`postgres` 用户仅用于管理任务。

使用以下命令创建用户 `homeassistant`，密码 `mypassword`，并将数据库 `mydatabase` 的所有权转移给该用户，或者如果您更喜欢 GUI，可以使用 _pgAdmin_ 完成此任务。

```
CREATE USER homeassistant WITH PASSWORD 'mypassword';
ALTER DATABASE mydatabase OWNER TO homeassistant;
```

在数据目录中创建默认的 `pg_hba.conf`，其内容允许本地对等用户和网络用户使用密码。:

```
# TYPE  DATABASE        USER            ADDRESS                 METHOD
host    all             all             0.0.0.0/0               md5"
local   all             all             0.0.0.0/0               md5"
local   all             all             0.0.0.0/0               peer"
```

请仔细审查此配置，参考文档：
https://www.postgresql.org/docs/devel/auth-pg-hba-conf.html

## 备份和恢复

此添加组件实现了一个强大的备份和恢复机制，旨在保护您的数据库免受数据丢失。

### 备份如何工作

当 Home Assistant 的备份系统运行时，它将自动执行以下操作：

1. **备份前**：执行 `pg_dumpall` 创建所有数据库的完整 SQL 快照（`backup_db.sql`）
2. **备份**：备份 SQL 快照文件以及其他添加组件数据（但排除 PostgreSQL 数据目录）
3. **备份后**：删除临时 SQL 快照文件以节省空间

这种方法有几个优点：

- **一致性**：SQL 快照是事务一致的快照
- **安全性**：没有备份损坏或正在过渡的数据库文件的风险
- **可移植性**：SQL 快照可以在不同的 PostgreSQL 版本之间恢复
- **小尺寸**：备份中不包括大型 PostgreSQL 数据目录

### 恢复如何工作

当您恢复 Home Assistant 备份时：

1. 添加组件使用恢复的 `backup_db.sql` 文件启动
2. 如果 PostgreSQL 数据目录丢失或损坏，添加组件：
   - 初始化一个新的 PostgreSQL 数据库
   - 自动从 SQL 快照恢复所有数据
   - 成功恢复后删除 SQL 快照

这种自动恢复过程确保即使：

- 数据库文件损坏
- 您正在恢复到不同的系统
- PostgreSQL 升级失败

您的数据也能安全恢复

### 手动备份

您也可以使用 PostgreSQL 命令行工具创建手动备份：

**创建备份：**

```bash
docker exec addon_timescaledb_timescaledb su - postgres -c "pg_dumpall -U postgres --clean --if-exists -f /data/manual_backup_$(date +%Y%m%d).sql"
```

**从手动备份恢复：**

```bash
docker exec addon_timescaledb_timescaledb su - postgres -c "psql -U postgres -f /data/manual_backup_YYYYMMDD.sql -d postgres"
```

### 重要提示

- SQL 快照仅在备份过程中存在，并且会自动清理
- 如果您需要保留备份 SQL 文件的副本，请在备份完成前复制它
- PostgreSQL 数据目录（`/data/postgres/*`）不包含在备份中，以减少备份大小并提高可靠性
- 恢复是自动的 - 从 Home Assistant 备份恢复时不需要手动干预

### 故障排除

**如果恢复失败：**

1. 检查添加组件日志以获取详细错误消息
2. 备份 SQL 文件将保留在 `/data/backup_db.sql` 以便手动恢复
3. 您可以尝试使用以下命令手动恢复：

   ```bash
   docker exec -it addon_timescaledb_timescaledb su - postgres -c "psql -U postgres -f /data/backup_db.sql -d postgres"
   ```

**如果备份失败：**

- 确保在备份期间 PostgreSQL 正在运行
- 确保有足够的磁盘空间用于 SQL 快照
- 查看添加组件日志以获取特定错误消息

### 现在做什么..

嗯.. 开始探索吧！

您可以在以下位置阅读有关如何处理您的数据和 Grafana 的额外文档：

https://github.com/expaso/hassos-addons/issues/1

## 支持

- 有问题？
  [在此处打开问题][issues]

- 对于一般仓库问题或添加组件建议？ [在此处打开问题][repo-issues]

[issues]: https://github.com/expaso/hassos-addon-timescaledb/issues
[repo-issues]: https://github.com/expaso/hassos-addons/issues



[项目阶段盾牌]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[维护状态盾牌]: https://img.shields.io/maintenance/yes/2025.svg
[许可证盾牌]: https://img.shields.io/github/license/expaso/hassos-addon-TimescaleDB.svg