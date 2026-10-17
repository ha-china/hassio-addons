# Spoolman Ingress HA 添加组件
![Version][version]
![Spoolman-update-shield]

![Supports amd64 Architecture][amd64-shield]
![Supports aarch64 Architecture][aarch64-shield]

## 简介
此添加组件基于 [Spoolman](https://github.com/Donkie/Spoolman)。

此添加组件支持 Ingress，将使 Spoolman 出现在 Home Assistant 侧边栏中。

对于非 ingress 版本（直接 IP 访问），请参阅 [Spoolman 添加组件](https://github.com/bytenoodle/hassioaddon/tree/main/spoolman)。

Ingress 支持得益于 [@dmuth23](https://github.com/dmuth23)

## 注意事项
1. **Ingress**
   - Spoolman 可通过 Home Assistant 侧边栏访问。
   - 本版本不提供直接端口访问。如果需要直接 IP 访问（例如用于 Bambu Lab 打印机集成），请使用 [非 Ingress 版本](https://github.com/bytenoodle/hassioaddon/tree/main/spoolman)。

2. **时区**
   - 添加组件会自动使用 Home Assistant 的系统时区。
   - 不需要手动配置时区。  
   - 默认回退设置：`Europe/Stockholm`。
  
3. **配置选项**
   - **调试模式** — 启用 Spoolman 的调试日志。仅在使用问题调试时启用此功能，因为它会显著增加日志输出量。
   - **旧版客户端** — 切换回旧的 Spoolman 界面 (React)。如果您遇到 v0.26.0 引入的新界面问题，仅使用此功能。启用后，在浏览器中执行硬刷新 (Ctrl+F5) 以清除缓存。
   - **CORS 来源** — 如果外部工具（例如 Bambu Lab、Moonraker）通过 SSL 或反向代理访问 Spoolman，则必须配置此项。输入您的完整外部 URL，例如 `https://spoolman.example.com`。如果不需要，则留空。

4. **数据目录**
   - `addon_config/<slug>/` → 主要添加组件数据、日志和备份。  
     - `<slug>` 是由 Home Assistant 自动创建的添加组件文件夹名称，例如 `20c49e40_spoolman_ingress`。  
   - 添加组件会在此文件夹内自动创建以下子目录：
     - `backups/` → 备份存储
     - `logs/` → 日志文件
     - `cache/` → 临时缓存文件
   - 所有目录均已配置正确的权限，供 Spoolman 进程使用。  
   - **注意：** `/config` 指的是容器内的主要 Home Assistant 配置路径，但所有添加组件文件均位于 `addon_config/<slug>/` 下。

5. **版本编号**
   - 使用 **x.x.x-x-ingress** 格式。  
   - 前三个数字与官方 Spoolman 版本相同（例如，`0.23.1`）。  
   - 第一个破折号 (`-`) 之后的数字 (`X`) 是专用于此 Home Assistant 添加组件的更改（例如，`0.23.1-0-ingress`）。

6. **外部 DB 同步与备份**
   - 添加组件会自动从外部 SpoolmanDB 同步线和材料。
   - 自动数据库备份安排在午夜执行。
   - 无需配置；所有操作均在后台运行。

## 已知问题
- 目前尚无问题。

## 安装
1. [添加仓库][repository] 到您的 Home Assistant 添加组件。  
2. 安装 **Spoolman Ingress** 添加组件。  
3. 启动添加组件。  
4. 通过 Home Assistant 侧边栏访问 Spoolman。
   - 如果 Spoolman 未出现在侧边栏中，请前往 **设置 → 添加组件 → Spoolman Ingress** 并启用 **显示在侧边栏**。

## 故障排除

| 问题 | 可能原因 | 解决方案 |
|---------|----------------|----------|
| **添加组件无法启动** | nginx 启动失败 | 检查添加组件日志中的 nginx 错误并重启添加组件。 |
| **侧边栏无法加载** | 无法确定 Ingress URL | 检查添加组件日志中的 `[WARN] Could not determine ingress URL` 并重启添加组件。 |
| **日志中的时间不正确** | 主机时区配置错误 | 确保 Home Assistant 系统时区在 **设置 → 系统 → 时间和日期** 中正确配置。 |
| **数据库未更新** | 损坏的 SQLite 数据库 | 备份并删除 `/config/spoolman.db`，然后重启添加组件以重建数据库。 |

## 支持
- 如果您遇到任何问题，请在 [Bytenoodle/hassioaddon GitHub 存储库](https://github.com/bytenoodle/hassioaddon/issues) 上开启问题。  
- 包含您的添加组件日志和问题的简要描述。  
- 这将有助于更快地诊断和修复问题。

## 截图

![Preview][preview]

<!--
Assets
-->

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[version]: https://img.shields.io/badge/version-v0.27.0--0--ingress-blue.svg
[Spoolman-update-shield]: https://img.shields.io/badge/Updated%20on-2026--09--28-blue.svg
[repository]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[preview]: https://raw.githubusercontent.com/bytenoodle/hassioaddon/refs/heads/main/spoolman-ingress/preview.png

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
