# Home Assistant App: DSMR Reader
[![打开您的 Home Assistant 实例并显示带有指定仓库 URL 预填充的添加应用存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fsanderdw%2Fhassio-addons)
[![社区论坛][forum-shield]][forum]

提供工具以轻松提取、存储和可视化管理员仪表通过 DSMR 协议传输的数据

感谢 Dennis Siemensma 创建 DSMR Reader 软件（https://dsmr-reader.readthedocs.io）以及 Bram van Dartel 创建底层容器镜像（https://github.com/xirixiz/dsmr-reader-docker）。

[![GitHub 构建状态](https://github.com/sanderdw/hassio-addons/workflows/DSMR%20Reader/badge.svg?logo=github)](https://github.com/sanderdw/hassio-addons/actions) ![dsmr-shield] ![addon-shield] ![aarch64-shield] ![amd64-shield] ![armv7-shield]

![DSMR Reader](https://github.com/sanderdw/hassio-addons/raw/main/images/dsmr_reader.png)

## 配置存储库

请在以下位置查看配置说明：https://github.com/sanderdw/hassio-addons

## 配置应用

1. 安装 HA Addon [PostgresDB (TimescaleDB) by Expaso.](https://community.home-assistant.io/t/home-assistant-app-postgresql-timescaledb/198176)
2. 在配置选项卡（TimescaleDB 插件的）中，将 ```dsmrreader``` db 添加为额外数据库条目。无需将其同时添加到 timescale_enabled 中。
3. 启动 TimescaleDB 插件以初始化。
4. 安装此插件。
5. 在 ```Configuration``` 选项卡中配置 HA 插件设置。注意：如果您将此插件用作远程接收器/使用标准 Web 服务器或自定义 Web 服务器（如反向代理），您需要通过选择 ```Show disabled ports``` 打开端口，并将所需的端口号放在那里。
6. 启动 DSMR Reader 插件。
7. 在 DSMR Reader UI 中转到 ```Configuratie``` 页面（等待应用程序初始化完成）
8. 使用 admin/admin 登录。
9. 转到 ```Datalogger -> Dataloggerconfiguratie``` 并指定正确的串行 USB 端口，或配置远程网络套接字输入方法（使用 ser2net）。
10. 转到 ```Back-up -> Geavanceerd/Advanced``` 并使用以下选项之一：
    1. 本地备份：使用 ```/backup/dsmrreader``` 作为备份文件夹（注意第一个正斜杠）。这将确保备份存储在 HA"backup"文件夹中，就像 HA 备份功能一样。
    2. 远程备份：
       1. 首先配置 Home Assistant [network storage](https://www.home-assistant.io/common-tasks/os/#network-storage)（使用类型必须为：```Share```），记住文件夹名称。
       2. 使用 ```/share/yourfoldername``` 作为备份文件夹（注意第一个正斜杠）。
11. 选择 ```Opslaan/Save``` 您应该就能看到电报进入。
12. _可选:_ 安装 [Home Assistant integration](https://www.home-assistant.io/integrations/dsmr_reader) 以便将数据也存储到 HA 中，并在新的 [Energy dashboard] 中使用它。](https://community.home-assistant.io/t/dsmr-reader-app-for-home-assistant/279087/131?u=sanderdw)

注意：遇到问题或问题？请在在 GitHub 创建问题之前首先检查社区论坛 https://community.home-assistant.io/t/dsmr-reader-app-for-home-assistant/279087。

注意：需要在线路中就命令行执行命令吗？在输入容器 bash（"```docker exec -it addon_0826754b_dsmr_reader bash```"）后，您需要执行此命令"```. /cli-helper.sh```" 以正确地从插件配置选项卡应用设置。

[dsmr-shield]: https://img.shields.io/badge/DSMR%20Reader%20Version-%206.2-purple.svg?style=flat-square
[addon-shield]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fsanderdw%2Fhassio-addons%2Fraw%2Frefs%2Fheads%2Fmain%2Fdsmr_reader%2Fconfig.json&query=version&style=flat-square&label=Addon%20Version

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg?style=flat-square
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg?style=flat-square
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg?style=flat-square
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge
[forum]: https://community.home-assistant.io/t/dsmr-reader-app-for-home-assistant/279087

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
