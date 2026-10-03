# Spoolman HA 扩展插件
![版本][版本]
![Spoolman 更新徽章]

![支持 amd64 架构][amd64-shield]
![支持 aarch64 架构][aarch64-shield]

## 关于
此扩展插件基于 [Spoolman](https://github.com/Donkie/Spoolman)。

关于 HAOS Ingress 版本，请参阅 [Spoolman-Ingress 扩展插件](https://github.com/bytenoodle/hassioaddon/tree/main/spoolman-ingress)。

## 注意事项
1. **时区**
   - 扩展插件会自动使用 Home Assistant 的系统时区。
   - 无需手动配置时区。
   - 默认回退值：`Europe/Stockholm`。

2. **端口**
   - 固定为 `7912`。在扩展插件配置中更改端口无效。
   - 确保没有其他扩展插件占用此主机端口。

3. **配置选项**
   - **调试模式** — 启用 Spoolman 的调试日志。仅在排查问题时启用此功能，因为它会显著增加日志输出量。
   - **经典客户端** — 切换回旧版 Spoolman 界面 (React)。如果您遇到 v0.26.0 引入的新界面问题，仅使用此选项。启用后，请在浏览器中执行硬刷新 (Ctrl+F5) 以清除缓存。
   - **CORS 源** — 如果您通过 SSL 或来自外部 URL 的反向代理访问 Spoolman 时，需要此项。请输入您的完整外部 URL，例如 `https://spoolman.example.com`。如果您通过本地 IP 直接访问 Spoolman，则留空。

4. **数据目录**
   - `addon_config/<slug>/` → 主要扩展插件数据、日志和备份。
     - `<slug>` 是 Home Assistant 自动创建的扩展插件文件夹名称，例如 `20c49e40_spoolman`。
   - 扩展插件会自动在此文件夹内创建以下子目录：
     - `backups/` → 备份存储
     - `logs/` → 日志文件
     - `cache/` → 临时缓存文件
   - 所有目录都有 Spoolman 进程所需的正确权限。
   - **注意：** `/config` 指的是容器内 Home Assistant 的主要配置路径，但所有扩展插件文件都位于 `addon_config/<slug>/` 下。

5. **版本编号**
   - 使用 `x.x.x-x` 格式。
   - 前三个数字与官方 Spoolman 版本匹配（例如，`0.22.1`）。
   - 连字符后的数字（`-X`）是针对此 Home Assistant 扩展插件特定更改的版本（例如，`0.22.1-0`）。

6. **外部 DB 同步与备份**
   - 扩展插件会自动从外部 SpoolmanDB 同步 Filaments 和 Materials。
   - 自动数据库备份安排在午夜执行。
   - 无需配置；所有内容均在后台运行。

## 已知问题
- 目前暂无。

## 安装
1. [添加仓库][仓库] 到您的 Home Assistant 扩展插件。
2. 安装 **Spoolman** 扩展插件。
3. 启动扩展插件。
4. 在以下地址访问 WebUI：`http://<HOME_ASSISTANT_HOST>:7912`。

## 故障排除

| 问题 | 可能原因 | 解决方案 |
|---------|----------------|----------|
| **扩展插件未启动** | 7912 端口已被占用 | 确保没有其他扩展插件使用 7912 端口，或者更改冲突扩展插件的端口。 |
| **日志中时间不正确** | 主机时区配置错误 | 确保 Home Assistant 系统时区在 **设置 → 系统 → 时间 & 日期** 中设置正确。 |
| **数据库未更新** | 损坏的 SQLite 数据库 | 备份并删除 `/config/spoolman.db`，然后重启扩展插件以重新创建数据库。 |

## 支持
- 如果您遇到任何问题，请在 [Bytenoodle/hassioaddon GitHub 仓库](https://github.com/bytenoodle/hassioaddon/issues) 上创建问题。
- 包含您的扩展插件日志 (`addon_config/<slug>/addon_log/spoolman.log` 和“来自扩展插件页面的日志”) 以及问题的简要描述。
- 这将有助于更快地诊断和解决问题。

## 截图

![预览][预览]

<!--
资源
-->

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[版本]: https://img.shields.io/badge/version-v0.27.0--0-blue.svg
[Spoolman 更新徽章]: https://img.shields.io/badge/Updated%20on-2026--09--28-blue.svg
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
