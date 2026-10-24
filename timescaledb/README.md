![项目阶段][project-stage-shield]
![维护状态][maintenance-shield]
[![许可证][license-shield]](https://github.com/expaso/hassos-addon-timescaledb/blob/main/LICENSE)

<a href="https://www.buymeacoffee.com/expaso" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

# Home Assistant 添加程序：[PostgreSQL](https://www.postgresql.org/) [TimescaleDB](https://www.timescale.com/)

## [PostgreSql 17.6](https://www.postgresql.org/) & [Postgis 3.6.0](https://postgis.net/) & [TimescaleDB 2.22.1](https://www.timescale.com/) & [TimescaleDB 工具包 1.21.0](https://github.com/timescale/timescaledb-toolkit) & [pgAgent 4.2.3](https://www.pgadmin.org/docs/pgadmin4/development/pgagent.html)

#### 配置

示例添加程序配置：

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

设置一系列数据库名称，在启动添加程序时将为您创建这些数据库。
当然，您也可以使用您选择的 psql 客户端自行创建数据库。

#### 选项：`timescale_enabled`

设置一系列数据库名称，在这些数据库中启用 timescale 扩展。
不在该列表中的数据库将像普通 PostgreSQL 数据库一样运行。

#### 选项：`timescaledb.telemetry`

切换 TimescaleDb 的遥测功能开关。
有效选项为：'basic' 或 'off'。
参见：https://docs.timescale.com/latest/using-timescaledb/telemetry

#### 选项：`timescaledb.maxmemory`

设置 PostgreSQL 声明的最大内存量。
重要的是要为您的机器（或树莓派）上的其他进程留出空间，因此请勿将此值设置过高（例如，总内存的 50% 以下）。

示例：`maxmemory="1024MB"`
或留空以接受自动调优。

#### 选项：`timescaledb.maxcpu`

设置 PostgreSQL 将使用的最大核心数。
重要的是要为您的机器（或树莓派）上的其他进程留出空间，因此请勿将此值设置过高（例如，总核心数的 75% 以下）。

示例：`maxcpu="2"`
或留空以接受自动调优。

参见：
https://docs.timescale.com/latest/getting-started/configuring
以进行进一步的调优。您的 Postgres.config 文件位于添加程序的数据目录中。

#### 选项：`max_connections`

设置 PostgreSQL 将接受的连接数上限。
提高此值可能会导致更高的内存使用。

示例：`max_connections=30`

#### 选项：`system_packages`

仅限高级用户！
在添加程序启动期间要安装的额外 Alpine 软件包列表。

示例：['nano']

#### 选项：`init_commands`

仅限高级用户！
在启动期间要运行的额外命令列表。

例如，要修改 postgresql.conf 文件中的内容：

示例：['sed -i -e "/max_connections =/ s/= .*/= 50/" /data/postgres/postgresql.conf']

#### 选项：`retry_upgrade`

仅限高级用户！
如果从 PostgreSQL 14 升级到 15 失败，可以重新尝试升级。
基本上，这将尝试找到 PostgreSQL 12 的旧数据库文件，并在尝试再次升级到 PostgreSQL 14 之前将其恢复。

!! 如果您不知道自己在做什么或在进行备份之前，请不要设置此选项。 !! 

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

**注意：** 某些关键参数无法修改（例如，`shared_preload_libraries`、`port`、`data_directory`），因为它们由添加程序管理。

#### 选项：`pg_hba_config`

允许您向 `pg_hba.conf` 添加自定义身份验证规则。规则将追加到默认规则中。

示例：
```yaml
pg_hba_config:
  - type: "host"
    database: "homeassistant"
    user: "all"
    address: "192.168.1.0/24"
    method: "md5"
```

参见 [PostgreSQL 文档](https://www.postgresql.org/docs/current/auth-pg-hba-conf.html) 以获取身份验证方法。

**警告：** 不正确的配置可能会导致您无法访问数据库。

### 独立运行容器

在这种情况下，您需要在您的机器上安装 Docker。
从 Docker Hub 拉取适合所需架构的镜像：

```
docker pull ghcr.io/expaso/timescaledb/amd64:stable
docker pull ghcr.io/expaso/timescaledb/aarch64:stable
docker pull ghcr.io/expaso/timescaledb/armv7:stable
docker pull ghcr.io/expaso/timescaledb/armhf:stable
docker pull ghcr.io/expaso/timescaledb/i386:stable
```

您可以将 *stable* 替换为您要使用的版本号。

直接这样启动它：

```
docker run \
  --rm \
  --name timescaledb \
  --v ${PWD}/timescaledb_addon_data:/data \
  -p 5432:5432 \
  ghcr.io/expaso/timescaledb/amd64:stable
```

这将使用 ~/timescaledb_addon_data 作为容器的数据目录，并将端口 5432 映射到主机。

如果您想以守护进程方式启动容器，只需删除 `--rm` 选项并添加 `-d` 选项，如下所示：

```
docker run \
  -d \
  --name timescaledb \
  --v ${PWD}/timescaledb_addon_data:/data \
  -p 5432:5432 \
  ghcr.io/expaso/timescaledb/amd64:stable
```

## 使用

现在，您已经准备好开始使用带有 TimescaleDb 扩展的 PostgreSQL 了！

寻找一个不错的基于 Web 的客户端？**尝试 pgAdmin4 添加程序。**

请不要忘记将添加程序的网络部分中的 TCP/IP 端口映射到所需的端口号。
默认端口是 `5432`

**安全提示！**

默认用户是 `postgres`，密码是 `homeassistant`。
激活添加程序后，请立即更改此设置：

```
ALTER USER postgres WITH PASSWORD 'strongpassword';
```

⚠️ 创建每个数据库的单独用户并转移数据库所有权被认为是最佳实践。
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

请仔细审查此配置，并查看文档：
https://www.postgresql.org/docs/devel/auth-pg-hba-conf.html

## 备份和恢复

此添加程序实现了一个强大的备份和恢复机制，旨在保护您的数据库免受数据丢失。

### 备份如何工作

当 Home Assistant 的备份系统运行时，它将自动执行以下操作：

1. **备份前**：执行 `pg_dumpall` 创建所有数据库的完整 SQL 备份（`backup_db.sql`）
2. **备份**：备份 SQL 备份文件以及其他添加程序数据（但排除 PostgreSQL 数据目录）
3. **备份后**：删除临时 SQL 备份文件以节省空间

这种方法有几个优点：

- **一致性**：SQL 备份是事务一致的快照
- **安全性**：没有备份损坏或正在过渡的数据库文件的风险
- **可移植性**：SQL 备份可以在不同的 PostgreSQL 版本之间恢复
- **小尺寸**：备份不包括大型 PostgreSQL 数据目录

### 恢复如何工作

当您恢复 Home Assistant 备份时：

1. 添加程序使用恢复的 `backup_db.sql` 文件启动
2. 如果 PostgreSQL 数据目录丢失或损坏，添加程序将：
   - 初始化一个新的 PostgreSQL 数据库
   - 自动从 SQL 备份恢复所有数据
   - 成功恢复后删除 SQL 备份

这种自动恢复过程确保即使发生以下情况，您的数据也能安全恢复：

- 数据库文件损坏
- 您正在恢复到不同的系统
- PostgreSQL 升级失败

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

- SQL 备份仅在备份过程中存在，并且会自动清理
- 如果您需要保留备份 SQL 文件的副本，请在备份完成前将其复制
- PostgreSQL 数据目录（`/data/postgres/*`）不包括在备份中，以减少备份大小并提高可靠性
- 恢复是自动的 - 从 Home Assistant 备份恢复时无需手动干预

### 故障排除

**如果恢复失败：**

1. 检查添加程序日志以获取详细的错误消息
2. 备份 SQL 文件将保留在 `/data/backup_db.sql` 以供手动恢复
3. 您可以尝试使用以下命令进行手动恢复：

   ```bash
   docker exec -it addon_timescaledb_timescaledb su - postgres -c "psql -U postgres -f /data/backup_db.sql -d postgres"
   ```

**如果备份失败：**

- 确保在备份期间 PostgreSQL 正在运行
- 确保有足够的磁盘空间用于 SQL 备份
- 查看添加程序日志以获取具体的错误消息

### 现在做什么...

嗯...开始探索吧！

您可以在此处阅读有关如何处理您的数据和使用 Grafana 的附加文档：

https://github.com/expaso/hassos-addons/issues/1

## 支持

- 有问题吗？
  [在此处打开问题][issues]

- 对于一般的仓库问题或添加程序建议？[在此处打开问题][repo-issues]

[issues]: https://github.com/expaso/hassos-addon-timescaledb/issues
[repo-issues]: https://github.com/expaso/hassos-addons/issues



[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[release-shield]: https://img.shields.io/badge/version-v5.4.2-blue.svg
[release]: https://github.com/expaso/hassos-addon-timescaledb/tree/v5.4.2
[license-shield]: https://img.shields.io/github/license/expaso/hassos-addon-TimescaleDB.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2025.svg