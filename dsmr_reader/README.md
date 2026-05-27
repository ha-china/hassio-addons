# Home Assistant App: DSMR Reader
[![打开您的 Home Assistant 实例并显示带有预填特定仓库 URL 的添加应用仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fsanderdw%2Fhassio-addons)
[![社区论坛][论坛徽章]][论坛]

提供一个工具，用于轻松提取、存储和可视化智能电表通过 DSMR 协议传输的数据。

感谢 Dennis Siemensma 创建了 DSMR Reader 软件（https://dsmr-reader.readthedocs.io）以及 Bram van Dartel 创建了底层容器镜像（https://github.com/xirixiz/dsmr-reader-docker）。

[![GitHub 构建状态](https://github.com/sanderdw/hassio-addons/workflows/DSMR%20Reader/badge.svg?logo=github)](https://github.com/sanderdw/hassio-addons/actions) ![dsmr-徽章] ![插件-徽章] ![aarch64-徽章] ![amd64-徽章] ![armv7-徽章]

![DSMR Reader](https://github.com/sanderdw/hassio-addons/raw/main/images/dsmr_reader.png)

## 配置仓库

请参阅配置说明：https://github.com/sanderdw/hassio-addons

## 配置应用

1. 安装 HA 插件 [PostgresDB (TimescaleDB) by Expaso.](https://community.home-assistant.io/t/home-assistant-app-postgresql-timescaledb/198176)
2. 在 TimescaleDB 插件的“配置”标签中添加 ```dsmrreader``` 数据库作为额外的数据库条目。无需在 timescale_enabled 下设置它。
3. 启动 TimescaleDB 插件以初始化。
4. 安装此插件。
5. 在“配置”标签中配置 HA 插件设置。注意：如果您将插件用作远程接收器/使用标准 web 服务器或自定义的（如反向代理），您需要通过选择“显示禁用端口”并输入所需的端口号来打开端口。
6. 启动 DSMR Reader 插件。
7. 在 DSMR Reader UI 中转到 ```配置``` 页面（等待应用初始化）
8. 使用 admin/admin 登录。
9. 转到 ```数据记录器 -> 数据记录器配置``` 并指定正确的串行 USB 端口或配置远程网络套接字输入方法（使用 ser2net）。
10. 转到 ```备份 -> 高级/Advanced``` 并选择以下选项之一：
    1. 本地备份：```/backup/dsmrreader``` 作为备份文件夹（注意第一个斜杠）。这将确保备份在 HA 的“备份”文件夹中创建，就像 HA 备份功能一样。
    2. 远程备份：
       1. 首先，配置 Home Assistant [网络存储](https://www.home-assistant.io/common-tasks/os/#network-storage)（使用类型必须为：```Share```），记住文件夹名称。
       2. ```/share/yourfoldername``` 作为备份文件夹（注意第一个斜杠）。
11. 选择 ```保存/Save```，您应该会看到电报正在接收。
12. _可选：_ 安装 [Home Assistant 集成](https://www.home-assistant.io/integrations/dsmr_reader) 以获取数据并在新的 [能源仪表板](https://community.home-assistant.io/t/dsmr-reader-app-for-home-assistant/279087/131?u=sanderdw) 中使用它。

注意：遇到问题或有疑问？请在创建 Github 问题之前首先检查社区论坛 https://community.home-assistant.io/t/dsmr-reader-app-for-home-assistant/279087。

注意：需要在命令行中执行命令？在进入容器 bash ("```docker exec -it addon_0826754b_dsmr_reader bash```") 后，您需要执行此命令 "```. /cli-helper.sh```" 以正确应用从插件配置标签中设置的设置。

[dsmr-徽章]: https://img.shields.io/badge/DSMR%20Reader%20Version-%206.1-purple.svg?style=flat-square
[插件-徽章]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fsanderdw%2Fhassio-addons%2Fraw%2Frefs%2Fheads%2Fmain%2Fdsmr_reader%2Fconfig.json&query=version&style=flat-square&label=Addon%20Version

[aarch64-徽章]: https://img.shields.io/badge/aarch64-yes-green.svg?style=flat-square
[amd64-徽章]: https://img.shields.io/badge/amd64-yes-green.svg?style=flat-square
[armv7-徽章]: https://img.shields.io/badge/armv7-yes-green.svg?style=flat-square
[论坛徽章]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge
[论坛]: https://community.home-assistant.io/t/dsmr-reader-app-for-home-assistant/279087
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
