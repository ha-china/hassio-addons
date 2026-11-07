# Spoolman HA 应用
![Version][version]
![Spoolman-update-shield]

![支持 amd64 架构][amd64-shield]
![支持 aarch64 架构][aarch64-shield]

## 关于
此插件基于 [Spoolman](https://github.com/Donkie/Spoolman)。

对于 HAOS 入口版本，请参阅 [Spoolman-Ingress 插件](https://github.com/bytenoodle/hassioaddon/tree/main/spoolman-ingress)。

## 注意事项
1. **时区**
   - 插件会自动使用 Home Assistant 的系统时区。
   - 无需手动配置时区。
   - 默认回退值：`Europe/Stockholm`。

2. **端口**
   - 固定为 `7912`。修改插件配置中的端口将无效。
   - 确保没有其他插件占用此主机端口。

3. **配置选项**
   - **调试模式** — 启用 Spoolman 调试日志。仅在故障排除时启用此选项，因为它会显著增加日志输出量。
   - **旧版客户端** — 切换回旧的 Spoolman 界面（React）。仅在遇到 v0.26.0 引入的新界面问题时使用此选项。启用后，请在浏览器中执行硬刷新（Ctrl+F5）以清除缓存。
   - **CORS 源** — 如果您通过外部 URL 使用 SSL 或反向代理访问 Spoolman，则必填。输入您的完整外部 URL，例如 `https://spoolman.example.com`。如果您直接通过本地 IP 访问 Spoolman，则留空。

4. **数据目录**
   - `addon_config/<slug>/` → 插件主数据、日志和备份。
     - `<slug>` 是 Home Assistant 自动创建的插件文件夹名称，例如 `20c49e40_spoolman`。
   - 插件会在该文件夹下自动创建以下子目录：
     - `backups/` → 备份存储
     - `logs/` → 日志文件
     - `cache/` → 临时缓存文件
   - 所有目录对 Spoolman 进程具有正确的权限。
   - **注意**：`/config` 指的是容器内的 Home Assistant 主配置路径，但所有插件文件均存在于 `addon_config/<slug>/` 之下。

5. **版本号**
   - 使用 `x.x.x-x` 格式。
   - 前三个数字与官方 Spoolman 版本匹配（例如，`0.22.1`）。
   - 破折号后的数字 (`-X`) 用于表示此 Home Assistant 插件特定的更改（例如，`0.22.1-0`）。

6. **外部数据库同步与备份**
   - 插件会自动从外部 SpoolmanDB 同步丝材和耗材。
   - 数据库自动备份安排在每晚午夜进行。
   - 无需配置；所有操作均在后台运行。

## 已知问题
- 目前暂时无已知问题。

## 安装
1. 将 [仓库][repository] 添加到 Home Assistant 插件。
2. 安装 **Spoolman** 插件。
3. 启动插件。
4. 访问 WebUI：`http://<HOME_ASSISTANT_HOST>:7912`。

## 故障排查

| 问题 | 可能原因 | 解决方案 |
|---------|----------------|----------|
| **插件无法启动** | 端口 7912 已被占用 | 确保没有其他插件占用端口 7912，或更改存在冲突的插件端口。 |
| **日志中时间不正确** | 主机时区配置错误 | 确保 Home Assistant 系统时区在 **设置 → 系统 → 时间和日期** 中正确设置。 |
| **数据库未更新** | SQLite 数据库损坏 | 备份并删除 `/config/spoolman.db`，然后重新启动插件以重建数据库。 |

## 支持
- 如果您遇到任何问题，请在此 [Bytenoodle/hassioaddon GitHub 仓库][repository] 中提交问题。
- 包括您的插件日志 (`addon_config/<slug>/addon_log/spoolman.log` 和“来自插件页面的日志”) 以及对问题的简要描述。
- 这将有助于更快地诊断和解决问题。

## 截图

![预览][preview]

<!--
资源
-->

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[version]: https://img.shields.io/badge/version-v0.27.1--0-blue.svg
[Spoolman-update-shield]: https://img.shields.io/badge/Updated%20on-2026--11--03-blue.svg
[repository]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[preview]: https://raw.githubusercontent.com/bytenoodle/hassioaddon/refs/heads/main/spoolman/preview.png

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
