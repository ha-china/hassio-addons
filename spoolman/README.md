# Spoolman HA 补充包
![版本][版本]
![Spoolman-更新盾牌]

![支持 amd64 架构][amd64-盾牌]
![支持 aarch64 架构][aarch64-盾牌]

## 关于
此补充包基于 [Spoolman](https://github.com/Donkie/Spoolman)。

有关 Haos 入口版本的说明，请查看 [Spoolman-Ingress 补充包](https://github.com/bytenoodle/hassioaddon/tree/main/spoolman-ingress)。

## 说明
1. **时区**
   - 该补充包自动使用 Home Assistant 系统时区。
   - 不需要手动配置时区。
   - 默认回退设置：`Europe/Stockholm`。

2. **端口**
   - 固定为 `7912`。在补充包配置中更改端口无效。
   - 确保没有其他补充包占用此主机端口。

3. **配置选项**
   - **调试模式** — 启用 Spoolman 的调试日志。仅在故障排除时启用此功能，因为它会显著增加日志输出。
   - **Legacy 客户端** — 切换回旧的 Spoolman 界面（React）。仅在遇到 v0.26.0 引入的新界面问题时使用此功能。启用后，请在浏览器中强制刷新（Ctrl+F5）以清除缓存。
   - **CORS 源** — 如果您通过 SSL 或外部 URL 的反向代理访问 Spoolman，则需要此项。输入完整的外部 URL，例如 `https://spoolman.example.com`。如果您通过本地 IP 直接访问 Spoolman，则留空。

4. **数据目录**
   - `addon_config/<slug>/` →主要的补充包数据、日志和备份。
     - `<slug>` 是 Home Assistant 自动创建的补充包文件夹名称，例如 `20c49e40_spoolman`。
   - 该补充包会自动在此文件夹中创建以下子目录：
     - `backups/` →备份存储
     - `logs/` →日志文件
     - `cache/` →临时缓存文件
   - 所有目录的权限均正确配置为 Spoolman 进程。
   - **注意：** `/config` 指的是容器内的 Home Assistant 主配置路径，但所有补充包文件都位于 `addon_config/<slug>/` 下。

5. **版本编号**
   - 使用 **x.x.x-x** 格式。
   - 前三位数字与官方 Spoolman 版本匹配（例如 `0.22.1`）。
   - 破折号后的数字（`-X`）是针对此 Home Assistant 补充包特有的更改（例如 `0.22.1-0`）。

6. **外部数据库同步与备份**
   - 该补充包会自动同步 Filaments 和材料到专用 SpoolmanDB。
   - 自动数据库备份安排在午夜进行。
   - 无需配置；一切在后台自动运行。

## 已知问题
- 目前尚无已知问题。

## 安装
1. [添加仓库][仓库] 到 Home Assistant 补充包。
2. 安装 **Spoolman** 补充包。
3. 启动补充包。
4. 在以下地址访问 WebUI：`http://<HOME_ASSISTANT_HOST>:7912`。


## 故障排除

| 问题 | 可能原因 | 解决方案 |
|---------|----------------|----------|
| **补充包无法启动** | 端口 7912 已被占用 | 确保没有其他补充包使用端口 7912，或将冲突的补充包端口更改为其他值。 |
| **日志中时间不正确** | 主机时区配置错误 | 确保 **设置 → 系统 → 时间和日期** 中 Home Assistant 系统时区正确。 |
| **数据库未更新** | SQLite 数据库损坏 | 备份并删除 `/config/spoolman.db`，然后重新启动补充包以重建数据库。 |

## 支持
- 如果您遇到任何问题，请在 [Bytenoodle/hassioaddon GitHub 仓库](https://github.com/bytenoodle/hassioaddon/issues) 上打开问题。
- 请包含您的补充包日志（`addon_config/<slug>/addon_log/spoolman.log` 和“来自补充包页面”的日志）以及问题的简要描述。
- 这将有助于更快地诊断和解决问题。

## 截图

![预览][预览]

<!--
资产
-->

[aarch64-盾牌]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-盾牌]: https://img.shields.io/badge/amd64-yes-green.svg
[版本]: https://img.shields.io/badge/version-v0.26.1--2-blue.svg
[Spoolman-更新盾牌]: https://img.shields.io/badge/Updated%20on-2026--08--22-blue.svg
[仓库]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[预览]: https://raw.githubusercontent.com/bytenoodle/hassioaddon/refs/heads/main/spoolman/preview.png

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
