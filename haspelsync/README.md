# HaspelSync HA App
![Version][version]
![HaspelSync-update-shield]

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]

## 概述
本应用基于 Rdiger-36 的 [HaspelSync](https://github.com/Rdiger-36/HaspelSync)，是 **Bambulab AMS Spoolman FilamentStatus** 应用的继任者。

HaspelSync 同步您的 **Bambu Lab AMS** 线料卷管与 **Spoolman**。它通过 MQTT 监听您的打印机 (s)，读取打印任务的切片 G 代码，并将消耗的材料记录到 Spoolman 中的相应卷管。

## 来自 Bambulab AMS Spoolman FilamentStatus?
旧版应用已弃用。HaspelSync 是一个独立的应用，您需要重新开始：没有任何历史数据继承，因此请在 Web UI 中设置您的 Spoolman URL 和打印机。

- 首先在旧版应用停止运行，两种应用都使用端口 `4000`。一旦 HaspelSync 工作正常，请立即卸载旧版应用。
- 启动或停止旧版应用的自动化规则需要新的标识符 `reponumber_haspelsync`（参见 [自动化提示](#自动化提示)）。
- 槽位标签现在从 `A1` 开始，因此每个槽位标签都比旧版应用中的要高一位。

## 说明

1. **数据目录**
   - `addon_config/<reponumber_slug>/` → 主应用数据和日志。
     - `<slug>` 是 Home Assistant 自动创建的应用文件夹名称，例如，`12a34b56_haspelsync`。
   - 此文件夹内会自动创建以下子目录：
     - `app/printers/` → 打印机列表 (`printers.json`) 和应用设置 (`settings.json`)
     - `app/logs/` → 日志文件
   - 权限已设置允许应用正常读写。
   - `/config` 指的是容器内的应用专属配置文件夹，在 Home Assistant 侧对应为 `addon_config/<slug>/`。

2. **版本号**
   - 使用 **x.x.x-x** 格式。
   - 前三个数字与 HaspelSync 版本匹配（例如，`1.3.3`）。
   - 连字符后的数字 (`-X`) 是用于此 Home Assistant 应用特定更改的版本（例如，`1.3.3-1`）。

## 安装
1. 将 [仓库][repository] 添加到您的 Home Assistant。
2. 安装 **HaspelSync** 应用。
3. 启动应用。
4. 访问 Web UI 地址：`http://<HOME_ASSISTANT_HOST>:4000`。

您需要运行的 Spoolman 实例，以及每台打印机的序列号、访问代码和 IP 地址。打印机必须能够访问端口 `8883` (MQTT) 和 `990` (FTPS)。P2S、H 系列和 X2D 需要在打印机中插入 U 盘以进行消耗追踪，参见 [支持的硬件](https://github.com/Rdiger-36/HaspelSync#supported-hardware)。

## 配置
- 此应用在 Home Assistant 应用配置标签中没有选项。
- 所有配置都在 HaspelSync Web UI 的 **设置** 下进行：Spoolman 端点、打印机、追踪模式、密码和 API 密钥。
- 更多信息：[HaspelSync 设置文档](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/settings.md)。

## 文档
这些页面由 HaspelSync 自身维护：

- [安装](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/installation.md)
- [支持的硬件和 U 盘](https://github.com/Rdiger-36/HaspelSync#supported-hardware)
- [工作原理](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/how-it-works.md)
- [Web UI](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/web-ui.md)
- [设置](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/settings.md)
- [故障排除](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/troubleshooting.md)
- [遗留模式](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/legacy-mode.md)
- [常见问题解答](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/faq.md)

## 日志
- 日志存储在 `addon_config/<reponumber_slug>/app/logs/server.log`。
- 错误和状态消息在日志文件和应用页面日志视图均可查看。
- HaspelSync Web UI 拥有自己的日志查看器。

## 自动化提示
如果您的打印机连接到 Home Assistant OS 的智能电源插座，您可以自动化此应用（以及可选的其他应用如 Spoolman），以便在打印机通电时自动启动。

这很有用，因为 HaspelSync 即使在打印机断电时，也会每隔几分钟尝试连接打印机。
仅在打印机通电时启动应用，可以减少不必要的网络流量并保持日志更清晰。

**示例自动化 (YAML)**

下面示例在您的智能插座 **开启** 时启动此应用：

```yaml
description: "HaspelSync - Auto Start"
mode: single
triggers:
  - trigger: state
    entity_id: switch.powerplug_printer
    to: "on"
conditions: []
actions:
  - action: hassio.addon_start
    data:
      addon: reponumber_haspelsync
```

## 故障排除

| 问题 | 可能原因 | 解决方案 |
|---------|----------------|----------|
| **未显示打印机或未连接** | 序列号、访问代码或 IP 地址错误 | 在 Web UI 的 **设置** 中检查打印机。打印机必须能够访问端口 `8883` 和 `990`。 |
| **Spoolman 中未更新线料状态** | Spoolman 不可达，或者槽位未与卷管 linking | 在 **设置** 下检查 Spoolman 端点，并在 Web UI 中将槽位链接到 Spoolman 卷管。 |
| **日志中显示“打印机上无切片文件”** | 缺少 U 盘的 P2S、H 系列或 X2D | 在打印机中插入 U 盘。 |
| **重启后打印机列表为空** | `printers.json` 格式错误 | 通过 SFTP/Samba 检查 `addon_config/<reponumber_slug>/app/printers/printers.json`，或在 Web UI 中添加打印机。 |

## 支持
- 如果此 Home Assistant 应用存在问题，请在 [Bytenoodle/hassioaddon GitHub 仓库](https://github.com/bytenoodle/hassioaddon/issues) 上打开问题报告。
- 如果 HaspelSync 自身存在问题，请使用 [HaspelSync issue tracker](https://github.com/Rdiger-36/HaspelSync/issues)。
- 包含您的应用日志（“来自 UI 的应用日志”和 `addon_config/<reponumber_slug>/app/logs/server.log`）以及简短的问题描述。

## 截图

![Preview][preview]

<!--
Assets
-->

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[version]: https://img.shields.io/badge/version-v1.3.5--0-blue.svg
[repository]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[HaspelSync-update-shield]: https://img.shields.io/badge/Updated%20on-2026--10--22-blue.svg
[preview]: https://raw.githubusercontent.com/bytenoodle/hassioaddon/refs/heads/main/haspelsync/preview.png

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
