# Home Assistant 插件：Metabase

[![打开您的 Home Assistant 实例并显示添加插件仓库对话框，其中已预先填写特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fsanderdw%2Fhassio-addons)
[![社区论坛][论坛徽章]][论坛]

这是一个简单、开源的方法，让每个人都能提问并从数据中学习。更多信息请访问 https://www.metabase.com。

[![GitHub 构建状态](https://github.com/sanderdw/hassio-addons/workflows/Metabase/badge.svg?logo=github)](https://github.com/sanderdw/hassio-addons/actions) ![metabase-徽章] ![插件-徽章] ![aarch64-徽章] ![amd64-徽章]

![Metabase](https://raw.githubusercontent.com/sanderdw/hassio-addons/main/images/metabase.png)

## 配置仓库

请在此处查看配置说明：https://github.com/sanderdw/hassio-addons

## 配置应用

1. 数据库类型选项：
   1. **H2**，跳过 TimescaleDB 应用程序的安装，直接进入步骤 5
   2. **Postgres**，继续步骤 2
2. 通过 Expaso 安装 PostgresDB (TimescaleDB)：https://community.home-assistant.io/t/home-assistant-add-on-postgresql-timescaledb/198176.
3. 在“配置”选项卡中将“metabase”数据库添加为额外的数据库条目。无需在 timescale_enabled 下设置它。
4. 启动 TimescaleDB 插件以初始化。
5. 安装此插件。
6. 如果您更改了默认设置，请在“配置”选项卡中配置设置。
   1. 对于 H2，在配置选项卡中使用 `MB_DB_TYPE=h2`
   2. 对于 Postgres/TimescaleDB，在配置选项卡中使用 `MB_DB_TYPE=postgres`
7. 启动 Metabase 插件。
8. 访问 http://yourhomeassistant:7778（等待插件初始化）- 注意：不支持 Ingress。
9. 完成 Metabase 设置流程。
10. _可选：_ 添加 Home Assistant PostgreSQL 数据库（您需要已配置 recorder：https://www.home-assistant.io/integrations/recorder/）
11. _可选：_ 添加 DSMR Reader PostgreSQL 数据库
12. 添加 Metabase 支持的任何其他 [数据源](https://www.metabase.com/data_sources/)
13. 探索！

[aarch64-徽章]: https://img.shields.io/badge/aarch64-yes-green.svg?style=flat-square
[amd64-徽章]: https://img.shields.io/badge/amd64-yes-green.svg?style=flat-square
[metabase-徽章]: https://img.shields.io/badge/Metabase%20Version-%200.60.3-purple.svg?style=flat-square
[插件-徽章]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fsanderdw%2Fhassio-addons%2Fraw%2Frefs%2Fheads%2Fmain%2Fmetabase%2Fconfig.json&query=version&style=flat-square&label=Addon%20Version
[论坛徽章]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge
[论坛]: https://community.home-assistant.io/t/metabase-add-on-for-home-assistant/286413
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
