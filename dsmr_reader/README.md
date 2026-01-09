# Home Assistant Add-on: DSMR Reader
[![在您的Home Assistant实例中打开并显示带有特定仓库URL预填的添加添加仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fsanderdw%2Fhassio-addons)
[![社区论坛][forum-shield]][forum]

提供一个工具，以便轻松提取、存储和可视化通过您的智能电表的DSMR协议传输的数据。

感谢Dennis Siemensma创建DSMR Reader软件（https://dsmr-reader.readthedocs.io）和Bram van Dartel创建底层的容器镜像（https://github.com/xirixiz/dsmr-reader-docker）。

[![GitHub构建状态](https://github.com/sanderdw/hassio-addons/workflows/DSMR%20Reader/badge.svg?logo=github)](https://github.com/sanderdw/hassio-addons/actions) ![dsmr-shield] ![addon-shield] ![aarch64-shield] ![amd64-shield] ![armv7-shield] ![armhf-shield]

![DSMR Reader](https://github.com/sanderdw/hassio-addons/raw/master/images/dsmr_reader.png)

## 配置仓库

配置说明请参考：https://github.com/sanderdw/hassio-addons

## 配置插件

1. 安装HA插件 [PostgresDB (TimescaleDB) by Expaso.](https://community.home-assistant.io/t/home-assistant-add-on-postgresql-timescaledb/198176)
2. 在配置选项卡（TimescaleDB插件）中添加```dsmrreader```数据库作为额外数据库条目。无需在timescale_enabled下设置。
3. 启动TimescaleDB插件以初始化。
4. 安装此插件。
5. 在```配置```选项卡中配置HA插件设置。注意：如果您将插件用作远程接收器/使用标准Web服务器或自定义服务器（如反向代理），则需要通过选择```显示禁用端口```并将所需端口号填入其中来打开端口。
6. 启动DSMR Reader插件。
7. 在DSMR Reader UI中进入```配置```页面（等待插件初始化）
8. 使用admin/admin登录。
9. 转到```数据记录器 -> 数据记录器配置```并指定正确的串行USB端口或配置远程网络套接字输入方法（使用ser2net）。
10. 转到```备份 -> 高级```并使用以下选项之一：
    1. 本地备份：```/backup/dsmrreader```作为备份文件夹（注意第一个正斜杠）。这将确保备份在HA“备份”文件夹中创建，就像HA备份功能一样。
    2. 远程备份：
       1. 首先配置Home Assistant [网络存储](https://www.home-assistant.io/common-tasks/os/#network-storage)（使用类型必须为：```共享```），记住文件夹名称。
       2. ```/share/yourfoldername```作为备份文件夹（注意第一个正斜杠）。
11. 选择```保存```，您应该能看到电报进来。
12. _可选:_ 安装[Home Assistant集成](https://www.home-assistant.io/integrations/dsmr_reader)以在HA中获取数据并使用它在新的[能源仪表板.](https://community.home-assistant.io/t/dsmr-reader-add-on-for-home-assistant/279087/131?u=sanderdw)

注意：遇到问题或疑问？请先查看社区论坛 https://community.home-assistant.io/t/dsmr-reader-add-on-for-home-assistant/279087，然后再在Github中创建问题。

注意：需要在命令行执行命令？在输入容器bash（"```docker exec -it addon_0826754b_dsmr_reader bash```"）后，您需要执行命令"```. /cli-helper.sh```"以从插件配置选项卡中正确应用设置。

[dsmr-shield]: https://img.shields.io/badge/DSMR%20Reader%20Version-%205.12-purple.svg?style=flat-square
[addon-shield]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fsanderdw%2Fhassio-addons%2Fraw%2Frefs%2Fheads%2Fmaster%2Fdsmr_reader%2Fconfig.json&query=version&style=flat-square&label=Addon%20Version

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg?style=flat-square
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg?style=flat-square
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg?style=flat-square
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg?style=flat-square
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge
[forum]: https://community.home-assistant.io/t/dsmr-reader-add-on-for-home-assistant/279087
---
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**
**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**
---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
