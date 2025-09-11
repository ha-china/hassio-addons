# Home Assistant 插件：DSMR Reader
[![打开您的 Home Assistant 实例，并显示添加插件库对话框，并预先填充特定的库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fsanderdw%2Fhassio-addons)
[![社区论坛][forum-shield]][forum]

提供一个工具，可以轻松提取、存储和可视化由智能电表的 DSMR 协议传输的数据。

特别感谢 Dennis Siemensma 创建了 DSMR Reader 软件 (https://dsmr-reader.readthedocs.io) 和 Bram van Dartel 创建了基础容器镜像 (https://github.com/xirixiz/dsmr-reader-docker)。

[![GitHub 构建状态](https://github.com/sanderdw/hassio-addons/workflows/DSMR%20Reader/badge.svg?logo=github)](https://github.com/sanderdw/hassio-addons/actions) ![dsmr-shield] ![addon-shield] ![aarch64-shield] ![amd64-shield] ![armv7-shield] ![armhf-shield]

![DSMR Reader](https://github.com/sanderdw/hassio-addons/raw/master/images/dsmr_reader.png)

## 配置库

在此查看配置说明：https://github.com/sanderdw/hassio-addons

## 配置插件

1. 安装 HA 插件 [PostgresDB (TimescaleDB) by Expaso.](https://community.home-assistant.io/t/home-assistant-add-on-postgresql-timescaledb/198176)
2. 在配置选项卡中将 ```dsmrreader``` 数据库添加为额外的数据库条目（在 TimescaleDB 插件中）。不需要在 timescale_enabled 下进行设置。
3. 启动 TimescaleDB 插件进行初始化。
4. 安装此插件。
5. 在 ```Configuration``` 选项卡中配置 HA 插件设置。注意：如果您将插件用作远程接收器/使用标准网络服务器或自定义服务器（如反向代理），则需要通过选择 ```Show disabled ports``` 打开端口，并在下面输入所需的端口号。
6. 启动 DSMR Reader 插件。
7. 在 DSMR Reader UI 中进入 ```Configuratie``` 页面（等待插件初始化）。
8. 使用 admin/admin 登录。
9. 转到 ```Datalogger -> Dataloggerconfiguratie```，并指定正确的串口 USB 端口或配置远程网络套接字输入方法（使用 ser2net）。
10. 转到 ```Back-up -> Geavanceerd/Advanced```，并使用以下选项之一：
    1. 本地备份：```/backup/dsmrreader``` 作为备份文件夹（注意第一个正斜杠）。这将确保备份与 HA 的备份功能一样，在 HA "备份" 文件夹中创建。
    2. 远程备份：
       1. 首先配置 Home Assistant [网络存储](https://www.home-assistant.io/common-tasks/os/#network-storage)（使用类型必须为：```Share```），记住文件夹名称。
       2. ```/share/yourfoldername``` 作为备份文件夹（注意第一个正斜杠）。
11. 选择 ```Opslaan/Save```，您应该会看到电报进来。
12. _可选:_ 安装 [Home Assistant 集成](https://www.home-assistant.io/integrations/dsmr_reader) 以在 HA 中获取数据并在新的 [能源仪表板](https://community.home-assistant.io/t/dsmr-reader-add-on-for-home-assistant/279087/131?u=sanderdw) 中使用。

注意：遇到问题或有疑问？请首先检查社区论坛 https://community.home-assistant.io/t/dsmr-reader-add-on-for-home-assistant/279087，再在 GitHub 中创建问题。

注意：需要在命令行中执行命令？输入容器 bash 后（"```docker exec -it addon_0826754b_dsmr_reader bash```"），您需要执行此命令 "```. /cli-helper.sh```" 以正确应用插件配置选项卡中的设置。

[dsmr-shield]: https://img.shields.io/badge/DSMR%20Reader%20Version-%205.11-purple.svg?style=flat-square
[addon-shield]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fsanderdw%2Fhassio-addons%2Fraw%2Frefs%2Fheads%2Fmaster%2Fdsmr_reader%2Fconfig.json&query=version&style=flat-square&label=Addon%20Version

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg?style=flat-square
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg?style=flat-square
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg?style=flat-square
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg?style=flat-square
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge
[forum]: https://community.home-assistant.io/t/dsmr-reader-add-on-for-home-assistant/279087