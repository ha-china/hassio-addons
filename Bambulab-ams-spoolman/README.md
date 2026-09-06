# Bambulab AMS Spoolman 耗材状态 Home Assistant 插件
![版本][版本]
![SBAFS 更新护盾]

![生产就绪][生产就绪]
![支持 aarch64 架构][aarch64 护盾]
![支持 amd64 架构][amd64 护盾]

## 关于
此插件基于 Rdiger-36 [bambulab-ams-spoolman-filamentstatus](https://github.com/Rdiger-36/bambulab-ams-spoolman-filamentstatus)。

此插件将 **Bambulab AMS** 系统与 **Spoolman** 集成，以跟踪和同步耗材卷筒的使用情况。  
它会监听来自您的 Bambulab 打印机的 MQTT 更新，并自动更新 Spoolman。

## 注意事项

1. **数据目录**
   - `addon_config/<仓库编号_简称>/` → 主插件数据、日志和备份。  
     - `<简称>` 是 Home Assistant 自动创建的插件文件夹名，例如 `12a34b56_bambulabspoolmanfs`。  
   - 该插件会在该文件夹下自动创建以下子目录：
     - `app/printers/` → 打印机配置 (`printers.json`)  
     - `app/logs/` → 日志文件
   - 权限已设置为允许插件无问题地读写。  
   - `/config` 指容器内 Home Assistant 的主要配置路径，但所有插件文件均位于 `addon_config/<简称>/` 下。

2. **版本号**
   - 使用 `x.x.x-X` 格式。  
   - 前三个数字与官方的 Bambulab AMS/Spoolman 集成版本相匹配（例如 `1.1.0`）。  
   - dash 后的数字（`-X`）是针对此 Home Assistant 插件的更改（例如 `1.1.0-1`）。

## 打印机配置
- 插件会利用插件 UI 选项自动生成 **`printers.json`** 中的 **Printer 1**。  
- 您可以通过 SFTP 手动在 `addon_config/<仓库编号_简称>/app/printers/printers.json` 中添加额外的打印机。  
- **备份**： manter 在 `printers.json.bak` 处保留一份 `printers.json` 的单一备份。旧备份会被覆盖。  
- Printer 1 总是在启动时从 UI 配置中更新；Printer 2 及以后除非手动编辑，否则保持不变。
- **如何添加更多打印机**：只需通过 SFTP 编辑 `printers.json`，并按照现有 JSON 结构添加新的打印机对象，例如：

```json
{
  "name": "Printer 2",
  "id": "01PYYYYYYYYYYYY",
  "code": "AccessCode",
  "ip": "192.168.1.Y"
}
```
有关打印机配置的更多信息请见：[Rdiger-36/bambulab-ams-spoolman-filamentstatus #安装部分 2](https://github.com/Rdiger-36/bambulab-ams-spoolman-filamentstatus?tab=readme-ov-file#installation)

## 安装
1. [添加仓库][仓库] 到您的 Home Assistant 插件库。  
2. 安装 **Bambulab AMS Spoolman 耗材状态** 插件。  
3. 启动插件。  
4. 访问 WebUI：`http://<HOME_ASSISTANT_HOST>:4000`。  

## 配置
- 用户可以通过插件 **UI 选项** 配置Printer 1：  
  - `PRINTER_ID`  
  - `PRINTER_CODE`  
  - `PRINTER_IP`  
  - `SPOOLMAN_ENDPOINT`  
  - `UPDATE_INTERVAL`
  - `SET_LOCATION`
  - `NEVER_MERGE_IF_TAG`  
  - `DEBUG`  
  - `MODE` (`manual` 或 `automatic`)  
- Printer 1 的更改会自动写入 `printers.json`。  

## 日志
- 日志存储在 `addon_config/<仓库编号_简称>/app/logs/server.log` 中。  
- 错误和状态消息可在日志文件和插件页面日志查看器中查看。

## 自动化提示
如果您的打印机在 Home Assistant OS 中连接到智能电源插座，您可以自动化此插件（以及可选的其他插件，如 Spoolman），以便打印机通电时自动启动。

由于 Bambulab AMS Spoolman 耗材状态将在打印机断电时继续每隔几分钟（默认间隔：`30000 ms`）ping 打印机，因此仅在打印机通电时启动插件可以减少不必要的网络流量并保持日志更整洁。

**示例自动化 (YAML)**

下面的示例在您的智能插座开启时启动此插件：

```yaml
description: "Bambulab AMS Spoolman 耗材状态 - 自动启动"
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
| **未加载打印机配置** | `printers.json` 格式错误 | 恢复 `printers.json.bak` 或通过 SFTP 编辑 `printers.json`。 (见打印机配置)  |
| **Spoolman 中没有更新耗材** | 无法访问 Bambulab 打印机 | 检查网络连接和 `SPOOLMAN_ENDPOINT`。 |

## 支持
- 在 [Bytenoodle/hassioaddon GitHub 仓库](https://github.com/bytenoodle/hassioaddon/issues) 发起问题。  
- 包含您的插件日志（"从 UI 获取的插件日志" 和 `addon_config/<仓库编号_简称>/app/logs/server.log`,`addon_config/<仓库编号_简称>/app/logs/printeridxxxxx.log`）以及问题简要描述。

## 截图

![预览][预览]

<!--
资源
-->

[aarch64 护盾]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64 护盾]: https://img.shields.io/badge/amd64-yes-green.svg
[版本]: https://img.shields.io/badge/version-v1.2.1--1-blue.svg
[生产就绪]: https://img.shields.io/badge/Production%20ready-yes-green.svg
[仓库]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[SBAFS 更新护盾]: https://img.shields.io/badge/Updated%20on-2026--09--02-blue.svg
[预览]: https://raw.githubusercontent.com/bytenoodle/hassioaddon/refs/heads/main/Bambulab-ams-spoolman/preview.png

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
