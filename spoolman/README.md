# Spoolman HA Add-on
![版本][version]
![生产就绪][production-ready]
![支持aarch64架构][aarch64-shield]
![支持amd64架构][amd64-shield]

## 关于
此插件基于 [Spoolman](https://github.com/Donkie/Spoolman)。

## 注意事项
1. **时区**
   - 插件自动使用 Home Assistant 系统时区。
   - 无需手动配置时区。
   - 默认回退：`Europe/Stockholm`。

2. **端口**
   - 固定为 `7912`。在插件配置中更改端口无效。
   - 确保没有其他插件使用此主机端口。

3. **数据目录**
   - `addon_config/<slug>/` → 主插件数据、日志和备份。
     - `<slug>` 是 Home Assistant 自动创建的插件文件夹名称，例如 `20c49e40_spoolman`。
   - 插件在此文件夹内自动创建以下子目录：
     - `backups/` → 备份存储
     - `logs/` → 日志文件
     - `cache/` → 临时缓存文件
   - 所有目录都具有正确的 Spoolman 进程权限。
   - **注意**：`/config` 指的是容器内 Home Assistant 的主配置路径，但所有插件文件都位于 ` addon_config/<slug>/` 下。

4. **版本编号**
   - 使用 **x.x.x-x** 格式。
   - 前三个数字与官方 Spoolman 版本匹配（例如，`0.22.1`）。
   - 破折号后的数字（-X）是针对此 Home Assistant 插件的特定更改（例如，`0.22.1-0`）。

5. **外部数据库同步与备份**
   - 插件自动从外部 SpoolmanDB 同步线材和材料。
   - 自动数据库备份安排在午夜进行。
   - 无需配置；所有操作都在后台运行。

## 已知问题
- 目前没有。

## 安装
1. [将仓库][repository] 添加到您的 Home Assistant 插件。
2. 安装 **Spoolman** 插件。
3. 启动插件。
4. 访问 WebUI：`http://<HOME_ASSISTANT_HOST>:7912`。

## 配置
- 没有用户可配置选项。
- 时区和端口固定以确保稳定运行。

## 访问 Spoolman
- 在浏览器中打开：`http://<HOME_ASSISTANT_HOST>:7912`。
- 可选：创建一个 Lovelace 按钮或浏览器书签以便快速访问。

## 故障排除

| 问题 | 可能原因 | 解决方案 |
|------|----------|----------|
| **插件未启动** | 端口 7912 已被占用 | 确保没有其他插件使用端口 7912，或更改冲突插件的端口。 |
| **日志中时间不正确** | 主机时区配置错误 | 确保 Home Assistant 系统时区在 **设置 → 系统 → 时间与日期** 中正确。 |
| **数据库未更新** | 损坏的 SQLite 数据库 | 备份并删除 `/config/spoolman.db`，然后重启插件以重新创建数据库。 |

## 支持
- 如果您遇到任何问题，请在 [Bytenoodle/hassioaddon GitHub 仓库](https://github.com/bytenoodle/hassioaddon/issues) 上打开问题。
- 包含您的插件日志（` addon_config/<slug>/addon_log/spoolman.log` 和来自插件页面的日志）以及问题的简要描述。
- 这有助于更快地诊断和解决问题。

## 截图

![预览][preview]

<!-- 资产 -->

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[version]: https://img.shields.io/badge/version-v0.22.1--0-blue.svg
[production-ready]: https://img.shields.io/badge/Production%20ready-yes-green.svg
[repository]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[preview]: https://raw.githubusercontent.com/bytenoodle/hassioaddon/refs/heads/main/spoolman/preview.png
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
