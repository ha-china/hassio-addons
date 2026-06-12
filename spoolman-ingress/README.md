# Spoolman Ingress 高可用性插件
![版本][version]
![Spoolman 更新盾牌]

![支持 amd64 架构][amd64-shield]
![支持 aarch64 架构][aarch64-shield]
![支持 armv7 架构][Spoolman-armv7-shield]

## 关于
此插件基于 [Spoolman](https://github.com/Donkie/Spoolman) 开发。

此插件支持 Ingress，允许 Spoolman 出现在 Home Assistant 的侧边栏中。

对于非 Ingress 版本（直接 IP 访问），请参阅 [Spoolman 插件](https://github.com/bytenoodle/hassioaddon/tree/main/spoolman)。

Ingress 支持归功于 [@dmuth23](https://github.com/dmuth23)


## 注意事项
1. **Ingress**
   - Spoolman 可通过 Home Assistant 的侧边栏访问。
   - 此版本不支持直接端口访问。如果您需要直接 IP 访问（例如，用于 Bambu Lab 打印机集成），请使用 [非 Ingress 版本](https://github.com/bytenoodle/hassioaddon/tree/main/spoolman)。

2. **时区**
   - 插件自动使用 Home Assistant 系统时区。
   - 无需手动配置时区。
   - 默认回退：`Europe/Stockholm`。

3. **数据目录**
   - `addon_config/<slug>/` → 主要插件数据、日志和备份。
     - `<slug>` 是 Home Assistant 自动创建的插件文件夹名称，例如，`20c49e40_spoolman_ingress`。
   - 插件会自动在此文件夹内创建以下子目录：
     - `backups/` → 备份存储
     - `logs/` → 日志文件
     - `cache/` → 临时缓存文件
   - 所有目录都具有 Spoolman 进程正确的权限。
   - **注意**：`/config` 指的是容器内 Home Assistant 主要配置路径，但所有插件文件都位于 `addon_config/<slug>/` 下。

4. **版本编号**
   - 使用 **x.x.x-x-ingress** 格式。
   - 前三个数字与官方 Spoolman 版本匹配（例如，`0.23.1`）。
   - 第一个破折号后的数字（例如，`-X`）是针对此 Home Assistant 插件特定的更改（例如，`0.23.1-0-ingress`）。

5. **外部数据库同步与备份**
   - 插件会自动从外部 SpoolmanDB 同步丝材和材料。
   - 自动数据库备份计划在午夜进行。
   - 无需配置；所有操作都在后台运行。

## 已知问题
- 目前没有。

## 安装
1. [将存储库添加到您的 Home Assistant 插件](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon)。
2. 安装 **Spoolman Ingress** 插件。
3. 启动插件。
4. 通过 Home Assistant 的侧边栏访问 Spoolman。
   - 如果 Spoolman 未出现在侧边栏中，请转到 **设置 → 插件 → Spoolman Ingress** 并启用 **显示在侧边栏**。

## 故障排除

| 问题 | 可能原因 | 解决方案 |
|---------|----------------|----------|
| **插件无法启动** | nginx 启动失败 | 检查插件日志中的 nginx 错误并重新启动插件。 |
| **侧边栏无法加载** | 无法确定 Ingress URL | 检查插件日志中的 `[WARN] Could not determine ingress URL` 并重新启动插件。 |
| **日志中的时间不正确** | 主机时区配置错误 | 确保在 **设置 → 系统 → 日期和时间** 中 Home Assistant 系统时区正确。 |
| **数据库未更新** | SQLite 数据库损坏 | 备份并删除 `/config/spoolman.db`，然后重新启动插件以重新创建数据库。 |

## 支持
- 如果您遇到任何问题，请在 [Bytenoodle/hassioaddon GitHub 仓库](https://github.com/bytenoodle/hassioaddon/issues) 上提交问题。
- 请包含您的插件日志和简短的问题描述。
- 这有助于更快地诊断和解决问题。

## 截图

![预览][preview]

<!-- 资产
-->

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[Spoolman-armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[version]: https://img.shields.io/badge/version-v0.23.1--0--ingress-blue.svg
[Spoolman-update-shield]: https://img.shields.io/badge/Updated%20on-2026--06--11-blue.svg
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
