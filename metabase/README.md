# Home Assistant 插件: Metabase

[![打开您的 Home Assistant 实例，并显示添加插件库对话框，预填充特定的库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fsanderdw%2Fhassio-addons)
[![社区论坛][forum-shield]][forum]

以简单、开源的方式让每个人都能提问和从数据中学习。更多信息请参见 https://www.metabase.com。

[![GitHub 构建状态](https://github.com/sanderdw/hassio-addons/workflows/Metabase/badge.svg?logo=github)](https://github.com/sanderdw/hassio-addons/actions) ![metabase-shield] ![addon-shield] ![aarch64-shield] ![amd64-shield]

![Metabase](https://raw.githubusercontent.com/sanderdw/hassio-addons/master/images/metabase.png)

## 配置插件库

请参阅此处的配置说明: https://github.com/sanderdw/hassio-addons

## 配置插件

1. 数据库类型选项：
   1. **H2**，跳过 TimescaleDB 插件安装，直接进入步骤 5
   2. **Postgres**，继续执行步骤 2
2. 通过 Expaso 安装 PostgresDB (TimescaleDB): https://community.home-assistant.io/t/home-assistant-add-on-postgresql-timescaledb/198176。
3. 在配置标签中将 `"metabase"` 数据库添加为额外的数据库条目。无需在 timescale_enabled 下进行设置。
4. 启动 TimescaleDB 插件以初始化。
5. 安装此插件。
6. 如果您更改了默认设置，请在“配置”标签中配置设置。
   1. 对于 H2 使用 `MB_DB_TYPE=h2` 在配置标签中
   2. 对于 Postgres/TimescaleDB 使用 `MB_DB_TYPE=postgres` 在配置标签中
7. 启动 Metabase 插件。
8. 转到 http://yourhomeassistant:7778 （等待插件初始化）- 注意: Ingress 还未工作。
9. 完成 Metabase 设置向导。
10. _可选:_ 添加 Home Assistant PostgreSQL 数据库（您需要配置记录器: https://www.home-assistant.io/integrations/recorder/）
11. _可选:_ 添加 DSMR 读取器 PostgreSQL 数据库
12. 添加 [任何其他](https://www.metabase.com/data_sources/) Metabase 支持的数据源
13. 探索！

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg?style=flat-square
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg?style=flat-square
[metabase-shield]: https://img.shields.io/badge/Metabase%20Version-%200.53.9-purple.svg?style=flat-square
[addon-shield]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fsanderdw%2Fhassio-addons%2Fraw%2Frefs%2Fheads%2Fmaster%2Fmetabase%2Fconfig.json&query=version&style=flat-square&label=Addon%20Version
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge
[forum]: https://community.home-assistant.io/t/metabase-add-on-for-home-assistant/286413