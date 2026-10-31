# Bambulab AMS Spoolman FilamentStatus 自动添加组件

> [!WARNING]
> **⚠️ 警告：该应用已弃用且不再维护。请停止并卸载它，转而使用 HaspelSync。它很快将从此仓库中移除。**
>
> 它已被 **[HaspelSync 应用](https://github.com/bytenoodle/hassioaddon/tree/main/haspelsync)** 取代。上游项目已更名为 HaspelSync，而该应用所基于的旧镜像将停止服务，因此该应用将无法运行。
>
> **如何切换：** HaspelSync 是一个独立的应用，您需要从头开始，不支持数据迁移。
> 1. 停止此应用（两个应用都使用端口 `4000`），并切勿再次启动它。
> 2. 安装并启动 HaspelSync 应用，在其 Web UI 中配置您的 Spoolman URL 和打印机。
> 3. 更新配置中启动或停止此应用的自动化内容： slug 从 `reponumber_bambulabspoolmanfs` 更改为 `reponumber_haspelsync`。
> 4. 一旦 HaspelSync 正常运行，请立即卸载此应用。

![Version][version]
![SBAFS-update-shield]

![Production ready][production-ready]
![Supports aarch64 Architecture][aarch64-shield]
![Supports amd64 Architecture][amd64-shield]

## 关于
此自动添加组件基于 Rdiger-36 [bambulab-ams-spoolman-filamentstatus](https://github.com/Rdiger-36/bambulab-ams-spoolman-filamentstatus)。

此自动添加组件集成了 **Bambulab AMS 系统** 与 **Spoolman**，用于跟踪和同步 filament（耗材）卷筒使用情况。
它会监听来自您的 Bambulab 打印机的 MQTT 更新，并自动更新 Spoolman。

## 注意事项

1. **数据目录**
   - `addon_config/<reponumber_slug>/` → 主要自动添加组件数据存储、日志和备份。  
     - `<slug>` 是 Home Assistant 自动生成的自动添加组件文件夹名称，例如 `12a34b56_bambulabspoolmanfs`。  
   - 此自动添加组件会在该文件夹内自动创建以下子目录：
     - `app/printers/` → 打印机配置 (`printers.json`)  
     - `app/logs/` → 日志文件
   - 权限已设置为允许自动添加组件无问题地进行读写操作。  
   - `/config` 指的是容器内的 Home Assistant 主要配置路径，但所有自动添加组件文件均位于 `addon_config/<slug>/` 下。

2. **版本编号**
   - 使用 **x.x.x-x** 格式。  
   - 前三个数字与官方 Bambulab AMS/Spoolman 集成版本相匹配（例如 `1.1.0`）。  
   - 破折号后的数字 (`-X`) 是针对此 Home Assistant 自动添加组件特有的更改（例如 `1.1.0-1`）。

## 打印机配置
- 此自动添加组件会根据自动添加组件 UI 选项创建一个 **`printers.json`** 文件，使用 **打印机 1**。
- 用户可以通过 SFTP 手动在 `addon_config/<reponumber_slug>/app/printers/printers.json` 中添加额外的打印机。
- **备份：** 保留 `printers.json` 的单一备份，文件名位于 `printers.json.bak`。较旧的备份会被覆盖。
- 打印机 1 始终在启动时从 UI 配置更新；打印机 2+ 除非手动编辑，否则保持原状。
- **如何添加更多打印机：** 只需通过 SFTP 编辑 `printers.json`，并按照现有 JSON 结构添加新的打印机对象，例如：

```json
{
  "name": "Printer 2",
  "id": "01PYYYYYYYYYYYY",
  "code": "AccessCode",
  "ip": "192.168.1.Y"
}
```
有关打印机配置的更多信息，请参阅：[Rdiger-36/bambulab-ams-spoolman-filamentstatus #installation part 2](https://github.com/Rdiger-36/bambulab-ams-spoolman-filamentstatus?tab=readme-ov-file#installation)

## 安装
1. [添加仓库][repository] 到您的 Home Assistant 自动添加组件。
2. 安装 **Bambulab AMS Spoolman FilamentStatus** 自动添加组件。
3. 启动自动添加组件。
4. 在以下地址访问 Web UI：`http://<HOME_ASSISTANT_HOST>:4000`。

## 配置
- 用户可以通过自动添加组件 **UI 选项** 配置打印机 1：
  - `PRINTER_ID`
  - `PRINTER_CODE`
  - `PRINTER_IP`
  - `SPOOLMAN_ENDPOINT`
  - `UPDATE_INTERVAL`
  - `SET_LOCATION`
  - `NEVER_MERGE_IF_TAG`
  - `DEBUG`
  - `MODE` (`manual` 或 `automatic`)
- 对打印机 1 的所有更改会自动写入 `printers.json`。

## 日志
- 日志存储在 `addon_config/<reponumber_slug>/app/logs/server.log` 中。
- 错误和状态消息在日志文件和自动添加组件页面日志视图中均可见。

## 自动化提示
如果您的打印机连接到 Home Assistant OS 的智能电源插座，您可以自动化此自动添加组件（以及可选的 Spoolman 等其他自动添加组件），以便在打印机通电时自动启动。

这很有用，因为即使打印机断电，Bambulab AMS Spoolman FilamentStatus 也会每隔几分钟（默认间隔：`30000 ms`）继续探测打印机。
仅当打印机通电时才启动自动添加组件，这可以减少不必要的网络流量，使日志更整洁。

**示例自动化 (YAML)**

以下示例在您的智能插座打开时启动此自动添加组件：

```yaml
description: "Bambulab AMS Spoolman FilamentStatus - Auto Start"
mode: single
triggers:
  - trigger: state
    entity_id: switch.powerplug_printer
    to: "on"
conditions: []
actions:
  - action: hassio.addon_start
    data:
      addon: reponumber_bambulabspoolmanfs
```

## 故障排除

| 问题 | 可能原因 | 解决方案 |
|---------|----------------|----------|
| **打印机配置未加载** | `printers.json` 格式错误 | 恢复 `printers.json.bak` 或通过 SFTP 编辑 `printers.json`。（参见打印机配置） |
| **Spoolman 中耗材未更新** | 无法访问 Bambulab 打印机 | 检查网络连接和 `SPOOLMAN_ENDPOINT`。 |

## 支持
- 在 [Bytenoodle/hassioaddon GitHub 仓库](https://github.com/bytenoodle/hassioaddon/issues) 上打开问题。
- 包含您的自动添加组件日志（"来自 UI 的 Addon 日志" 和 `addon_config/<reponumber_slug>/app/logs/server.log`、`addon_config/<reponumber_slug>/app/logs/printeridxxxxx.log`）以及问题的简短描述。

## 截图

![Preview][preview]

<!--
Assets
-->

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-red.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-red.svg
[version]: https://img.shields.io/badge/version-v1.2.1--2-red.svg
[production-ready]: https://img.shields.io/badge/Production%20ready-no-red.svg
[repository]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[SBAFS-update-shield]: https://img.shields.io/badge/Updated%20on-2026--10--06-red.svg
[preview]: https://raw.githubusercontent.com/bytenoodle/hassioaddon/refs/heads/main/Bambulab-ams-spoolman/preview.png

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
