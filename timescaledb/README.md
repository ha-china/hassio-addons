![项目阶段][project-stage-shield]
![维护][maintenance-shield]
[![许可证][license-shield]](https://github.com/expaso/hassos-addon-timescaledb/blob/main/LICENSE)

<a href="https://www.buymeacoffee.com/expaso" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="请我喝杯咖啡" height="41" width="174"></a>

# Home Assistant 插件: [PostgreSQL](https://www.postgresql.org/) [TimescaleDB](https://www.timescale.com/)

## [PostgreSql 17.4](https://www.postgresql.org/) & [Postgis 3.5.1](https://postgis.net/) & [TimescaleDB 2.18.2](https://www.timescale.com/) & [TimescaleDB 工具包 1.19.0](https://github.com/timescale/timescaledb-toolkit) & [pgAgent 4.2.2](https://www.pgadmin.org/docs/pgadmin4/development/pgagent.html)

#### 配置

示例插件配置：

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

#### 选项: `databases`

设置你启动插件后将为您创建的数据库名称列表。 
当然，你也可以使用自己选择的 psql 客户端创建数据库。

#### 选项: `timescale_enabled`

设置数据库名称列表，以便在其上启用 timescale 扩展。 
不在这个列表中的数据库将像普通的 Postgre 数据库一样运作。

#### 选项: `timescaledb.telemetry`

开启或关闭 TimescaleDb 的遥测。 
有效选项为: 'basic' 或 'off'。 
请参见: https://docs.timescale.com/latest/using-timescaledb/telemetry

#### 选项: `timescaledb.maxmemory`

设置 PostgreSQL 将占用的最大内存量。 
留出空间给您机器（或树莓派）上的其他进程是很重要的，因此这一级别不要设置得太高（例如最多占用您总内存的 50%）。

示例: `maxmemory="1024MB"` 
或留空以接受自动调优。

#### 选项: `timescaledb.maxcpu`

设置 PostgreSQL 将使用的最大核心数。 
留出空间给您机器（或树莓派）上的其他进程是很重要的，因此这一级别不要设置得太高（例如最多占用您总核心数的 75%）。

示例: `maxcpu="2"` 
或留空以接受自动调优。

参见: 
https://docs.timescale.com/latest/getting-started/configuring 
以进一步调优。 您的 Postgres.config 文件位于插件的数据目录中。

#### 选项: `max_connections`

设置 PostgreSQL 将接受的最大连接数。 
将此设置得更高可能会导致更多内存使用。

示例: `max_connections=30`

#### 选项: `system_packages`

仅面向高级用户！ 
在插件启动期间要安装的额外阿尔卑斯包列表。 

示例: ['nano']

#### 选项: `init_commands`

仅面向高级用户！ 
在启动期间运行的额外命令列表。

例如，要更改 postgresql.conf 文件中的某些内容：

示例: ['sed -i -e "/max_connections =/ s/= .*/= 50/" /data/postgres/postgresql.conf']

#### 选项: `retry_upgrade`

仅面向高级用户！ 
如果升级从 Postgres 14 到 15 失败，可以重试。 
基本上，这将尝试找到来自 Postgres 12 的旧数据库文件，并在尝试再次升级到 Postgres 14 之前恢复它们。

!! 请不要在不知道您在做什么或在备份之前设置此选项。 !!

### 独立运行容器。

在这种情况下，您需要在您的计算机上有一个正常工作的 Docker 安装。 
从 Docker Hub 下载所需架构的图像之一：

```
docker pull ghcr.io/expaso/timescaledb/amd64:stable
docker pull ghcr.io/expaso/timescaledb/aarch64:stable
docker pull ghcr.io/expaso/timescaledb/armv7:stable
docker pull ghcr.io/expaso/timescaledb/armhf:stable
docker pull ghcr.io/expaso/timescaledb/i386:stable
```

您可以将 *stable* 替换为您想使用的版本号。

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

如果您想将容器作为守护进程启动，只需删除 `--rm` 选项，并添加 `-d` 选项，如下所示：

```
docker run \
  -d \
  --name timescaledb \
  --v ${PWD}/timescaledb_addon_data:/data \
  -p 5432:5432 \
  ghcr.io/expaso/timescaledb/amd64:stable
```

## 使用

您现在可以开始使用启用了 TimescaleDb 扩展的 Postgres 了！

寻找一个不错的基于网页的客户端？ **尝试 pgAdmin4 插件。**

请不要忘记在插件的网络部分也将 TCP/IP 端口映射到所需的端口号。 默认是端口 `5432`

**安全提示！**

默认用户名是 `postgres`，密码是 `homeassistant`。 
在激活插件后，请确保立即更改此密码：

```
ALTER USER postgres WITH PASSWORD 'strongpassword';
```

⚠️ 最好为您创建的每个数据库创建一个单独的用户，并将数据库的所有权转移给该用户。 
在此配置中，`postgres` 用户仅应用于管理任务。

使用以下命令创建一个名为 `homeassistant` 的用户，密码为 `mypassword`，并将数据库 `mydatabase` 的所有权转移给该用户，或者如果您更喜欢图形用户界面，可以使用 _pgAdmin_ 来完成此任务。

```
CREATE USER homeassistant WITH PASSWORD 'mypassword';
ALTER DATABASE mydatabase OWNER TO homeassistant;
```

在数据目录中创建了一个默认的 `pg_hba.conf`，其内容如下，允许本地对等用户和使用密码的网络用户：

```
# TYPE  DATABASE        USER            ADDRESS                 METHOD
host    all             all             0.0.0.0/0               md5"
local   all             all             0.0.0.0/0               md5"
local   all             all             0.0.0.0/0               peer"
```

请通过查阅文档仔细检查此配置：
https://www.postgresql.org/docs/devel/auth-pg-hba-conf.html

### 接下来怎么办..

好吧.. 深入了解吧！

您可以在此处阅读有关如何使用您的数据和 Grafana 的附加文档：

https://github.com/expaso/hassos-addons/issues/1

## 支持

- 有问题吗？
  [在这里开一个问题][issues]

- 对于一般的仓库问题或插件想法？ [在这里开一个问题][repo-issues]

[issues]: https://github.com/expaso/hassos-addon-timescaledb/issues
[repo-issues]: https://github.com/expaso/hassos-addons/issues

[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[release-shield]: https://img.shields.io/badge/version-v5.2.0-blue.svg
[release]: https://github.com/expaso/hassos-addon-timescaledb/tree/v5.2.0
[license-shield]: https://img.shields.io/github/license/expaso/hassos-addon-TimescaleDB.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2025.svg