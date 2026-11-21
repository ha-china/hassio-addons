# Spoolman Ingress HA App
![Version][version]
![Spoolman-update-shield]

![支持 amd64 架构][amd64-shield]
![支持 aarch64 架构][aarch64-shield]

## 关于
本插件基于 [Spoolman](https://github.com/Donkie/Spoolman) 构建。

本插件具有 Ingress 支持，允许 Spoolman 出现在 Home Assistant 侧边栏中。

对于非 Ingress 版本（直接 IP 访问），请参阅 [Spoolman 插件](https://github.com/bytenoodle/hassioaddon/tree/main/spoolman)。

Ingress 支持归功于 [@dmuth23](https://github.com/dmuth23)

## 说明
1. **Ingress**
   - 通过 Home Assistant 侧边栏访问 Spoolman。
   - 本版本不提供直接端口访问。如需直接 IP 访问（例如用于 Bambu Lab 打印机集成），请使用 [非 Ingress 版本](https://github.com/bytenoodle/hassioaddon/tree/main/spoolman)。

2. **时区**
   - 插件自动使用 Home Assistant 的系统时区。
   - 无需手动配置时区。
   - 默认回退值：`Europe/Stockholm`。

3. **配置选项**
   - **调试模式 (Debug mode)** — 启用 Spoolman 的调试日志。仅在排查问题时启用此选项，因为它会显著增加日志输出。
   - **旧版客户端 (Legacy client)** — 切换回旧的 Spoolman 界面 (React)。仅在遇到 v0.26.0 引入的新界面问题时使用此选项。启用后，请在浏览器中执行强制刷新 (Ctrl+F5) 以清除缓存。
   - **CORS 源 (CORS origin)** — 如果外部工具（例如 Bambu Lab、Moonraker）通过 SSL 或反向代理访问 Spoolman，则必须配置此项。输入您的完整外部 URL，例如 `https://spoolman.example.com`。如不需要请留空。

4. **数据目录**
   - `addon_config/<slug>/` → 主插件数据、日志和备份。
     - `<slug>` 是 Home Assistant 自动创建的插件文件夹名称，例如 `20c49e40_spoolman_ingress`。
   - 插件在此文件夹内自动创建以下子目录：
     - `backups/` → 备份存储
     - `logs/` → 日志文件
     - `cache/` → 临时缓存文件
   - 所有目录均具有 Spoolman 进程所需的正确权限。
   - **注意：** `/config` 是指容器内的 Home Assistant 主配置文件路径，但所有插件文件均位于 `addon_config/<slug>/` 下。

5. **版本号**
   - 使用 `x.x.x-x-ingress` 格式。
   - 前三个数字对应官方 Spoolman 版本（例如，`0.23.1`）。
   - 第一个破折号后的数字 (`-X`) 专门用于此 Home Assistant 插件的变化（例如，`0.23.1-0-ingress`）。

6. **外部 DB 同步与备份**
   - 插件会自动将丝线和材料从外部 SpoolmanDB 同步。
   - 数据库备份计划每天午夜自动执行。
   - 无需配置；所有内容均在后台运行。

## 已知问题
- 目前尚未发现。

## 安装
1. 将 [仓库][repository] 添加到您的 Home Assistant 插件中。
2. 安装 **Spoolman Ingress** 插件。
3. 启动插件。
4. 通过 Home Assistant 侧边栏访问 Spoolman。
   - 如果 Spoolman 未出现在侧边栏，请前往 **设置 → 插件 → Spoolman Ingress** 并启用 **显示在侧边栏**。

## 故障排查

| 问题 | 可能原因 | 解决方案 |
|---------|----------------|         |
| **插件未启动** | nginx 启动失败 | 检查插件日志以查找 nginx 错误，然后重启插件。 |
| **侧边栏未加载** | 无法确定 Ingress URL | 检查插件日志以查找 `[WARN] Could not determine ingress URL`，然后重启插件。 |
| **日志中的时间错误** | 主机时区配置错误 | 确保 **设置 → 系统 → 时间和日期** 中的 Home Assistant 系统时区正确。 |
| **数据库未更新** | SQLite 数据库损坏 | 备份并删除 `/config/spoolman.db`，然后重启插件以重建数据库。 |

## 支持
- 如果遇到问题，请在 [Bytenoodle/hassioaddon GitHub 仓库](https://github.com/bytenoodle/hassioaddon/issues) 上打开问题报告。
- 附上您的插件日志以及问题简要描述。
- 这有助于更快地诊断和解决问题。

## 截图

![预览][preview]

<!--
Assets
-->

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[version]: https://img.shields.io/badge/version-v0.27.1--0--ingress-blue.svg
[Spoolman-update-shield]: https://img.shields.io/badge/Updated%20on-2026--11--03-blue.svg
[repository]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[preview]: https://raw.githubusercontent.com/bytenoodle/hassioaddon/refs/heads/main/spoolman-ingress/preview.png

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
