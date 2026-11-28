# HaspelSync HA App
![Version][version]
![HaspelSync-update-shield]

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]

## 简介
此应用基于 Rdiger-36 的 [HaspelSync](https://github.com/Rdiger-36/HaspelSync)，是 **Bambu Lab AMS Spoolman FilamentStatus** 应用的继任者。

HaspelSync 将你的 **Bambu Lab AMS** 线盘与 **Spoolman** 同步。它通过 MQTT 侦听你的打印机，读取打印的切片 G 码，并将消耗的耗材记录到 Spoolman 中正确的线盘里。

## 来自 Bambu Lab AMS Spoolman FilamentStatus？
旧应用已弃用。HaspelSync 是一个独立的应用，你需要从头开始：没有遗留数据，因此请在 Web UI（网页用户界面）中设置你的 Spoolman URL 和打印机。

- 在安装 HaspelSync 之前先停止旧应用，两个应用都使用端口 `4000`。一旦 HaspelSync 工作正常，请尽快卸载旧应用。
- 启动或停止旧应用的自动化需要新的 slug `reponumber_haspelsync`（见 [自动化提示](#automation-tip)）。
- 槽位标签现在从 `A1` 开始，因此每个槽位标签都比旧应用高一档。

## 备注

1. **数据目录**
   - `addon_config/<reponumber_slug>/` → 主应用数据和日志。
     - `<slug>` 是 Home Assistant 自动创建的文件夹名称，例如 `12a34b56_haspelsync`。
   - 应用会在该文件夹下自动创建以下子目录：
     - `app/printers/` → 打印机列表 (`printers.json`) 和应用设置 (`settings.json`)
     - `app/logs/` → 日志文件
   - 权限已设置为允许应用无问题地读取/写入。
   - `/config` 指的是容器内的应用自己的配置文件夹，在 Home Assistant 侧为 `addon_config/<slug>/`。

2. **版本号**
   - 使用 **x.x.x-x** 格式。
   - 前三个数字与 HaspelSync 版本匹配（例如 `1.3.3`）。
   - 横杠后的数字 (`-X`) 用于此 Home Assistant 应用的特定更改（例如 `1.3.3-1`）。

## 安装
1. [添加仓库][repository] 到你的 Home Assistant。
2. 安装 **HaspelSync** 应用。
3. 启动应用。
4. 访问 Web UI：`http://<HOME_ASSISTANT_HOST>:4000`。

你需要一个正在运行的 Spoolman 实例，以及每台打印机的序列号、访问代码和 IP 地址。打印机必须能够访问端口 `8883` (MQTT) 和 `990` (FTPS)。P2S、H 系列和 X2D 需要在打印机中插入 USB 闪存盘以追踪耗材，详见 [受支持硬件](https://github.com/Rdiger-36/HaspelSync#supported-hardware)。

## 配置
- 此应用在 Home Assistant 应用的配置选项卡中没有选项。
- 一切配置均在 HaspelSync Web UI 的 **设置** 下进行：Spoolman 端点、打印机、追踪模式、密码和 API 密钥。
- 更多信息：[HaspelSync 设置文档](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/settings.md)。

## 文档
这些页面由 HaspelSync 自行维护：

- [安装](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/installation.md)
- [受支持硬件和 USB 闪存盘](https://github.com/Rdiger-36/HaspelSync#supported-hardware)
- [它是如何工作的](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/how-it-works.md)
- [Web UI](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/web-ui.md)
- [设置](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/settings.md)
- [故障排除](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/troubleshooting.md)
- [Legacy 模式](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/legacy-mode.md)
- [常见问题解答](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/faq.md)

## 日志
- 日志存储在 `addon_config/<reponumber_slug>/app/logs/server.log`。
- 错误和状态消息在日志文件和应用的日志视图页面中均可见。
- HaspelSync Web UI 有自己的日志查看器。

## 自动化提示
如果你的打印机连接到 Home Assistant OS 上的智能电源插座，你可以自动化此应用（以及可选的其他应用如 Spoolman），以便在打印机通电时自动启动。

这很有用，因为 HaspelSync 即使打印机断电也会每隔几分钟尝试连接打印机。
仅当打印机通电时启动应用，可以减少不必要的网络流量并保持日志更干净。

**示例自动化 (YAML)**

以下示例在智能插座**打开**时启动此应用：

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
| **未显示或未连接打印机** | 序列号、访问代码或 IP 地址错误 | 在 Web UI 的 **设置** 中检查打印机。打印机必须能够访问端口 `8883` 和 `990`。 |
| **Spoolman 中耗材未更新** | Spoolman 无法访问，或者该槽位未连接到线盘 | 在 **设置** 中检查 Spoolman 端点，并在 Web UI 中将槽位连接到 Spoolman 线盘。 |
| **日志中有"No sliced file on the printer"（打印机上没有切片文件）** | 没有插 USB 闪存盘的 P2S、H 系列或 X2D | 在打印机中插入 USB 闪存盘。 |
| **重启后打印机列表为空** | `printers.json` 格式错误 | 通过 SFTP/Samba 检查 `addon_config/<reponumber_slug>/app/printers/printers.json`，或在 Web UI 中重新添加打印机。 |

## 支持
- 如果此 Home Assistant 应用存在问题，请在 [Bytenoodle/hassioaddon GitHub 仓库](https://github.com/bytenoodle/hassioaddon/issues) 上打开问题。
- 如果 HaspelSync 本身存在问题，请使用 [HaspelSync issue tracker](https://github.com/Rdiger-36/HaspelSync/issues)。
- 包括你的应用日志（`App log from the UI` 和 `addon_config/<reponumber_slug>/app/logs/server.log`）以及简明的问题描述。

## 截图

![Preview][preview]

<!--
Assets
-->

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[version]: https://img.shields.io/badge/version-v1.4.2--1-blue.svg
[repository]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[HaspelSync-update-shield]: https://img.shields.io/badge/Updated%20on-2026--11--27-blue.svg
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
