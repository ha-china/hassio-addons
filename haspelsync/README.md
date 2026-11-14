# HaspelSync 主页应用
![版本][版本]
![HaspelSync 更新徽章]

![支持 aarch64 架构][aarch64 徽章]
![支持 amd64 架构][amd64 徽章]

## 关于
本应用基于 Rdiger-36 的 [HaspelSync](https://github.com/Rdiger-36/HaspelSync)，是 **Bambulab AMS Spoolman FilamentStatus** 应用的继任者。

HaspelSync 将你的 **Bambu Lab AMS** 线轴与 **Spoolman** 同步。它通过 MQTT 监听你的打印机，读取打印的切片 G 代码，并将消耗的线轴分配给 Spoolman 中的正确线轴。

## 来自 Bambulab AMS Spoolman FilamentStatus 的用户？
旧版应用已废弃。HaspelSync 是一个独立的应用，你需要重新开始：不会继承任何数据，因此请在 Web UI 中设置你的 Spoolman URL 和打印机。

- 首先停止旧版应用，因为两个应用都使用端口 `4000`。一旦 HaspelSync 正常工作，请立即卸载它。
- 需要启动或停止旧版应用的自动化需要新的 slug `reponumber_haspelsync`（见 [自动化提示](#自动化提示)）。
- 轴槽标签现在从 `A1` 开始，因此每个轴槽标签比旧应用高一个层级。

## 注意事项

1. **数据目录**
   - `addon_config/<reponumber_slug>/` → 主应用数据和日志。
     - `<slug>` 是 Home Assistant 自动创建的应用文件夹名称，例如 `12a34b56_haspelsync`。
   - 应用会自动在该文件夹内创建以下子目录：
     - `app/printers/` → 打印机列表 (`printers.json`) 和应用设置 (`settings.json`)
     - `app/logs/` → 日志文件
   - 权限已设置，允许应用无问题地读写。
   - `/config` 指容器内的应用配置文件夹，在 Home Assistant 侧则为 `addon_config/<slug>/`。

2. **版本号**
   - 使用 **x.x.x-x** 格式。
   - 前三个数字对应 HaspelSync 版本（例如 `1.3.3`）。
   - 横线后的数字（`-X`）是针对此 Home Assistant 应用的特定更改（例如 `1.3.3-1`）。

## 安装
1. 将 [仓库][仓库] 添加到你的 Home Assistant。
2. 安装 **HaspelSync** 应用。
3. 启动应用。
4. 访问 Web UI 地址：`http://<HOME_ASSISTANT_HOST>:4000`。

你需要一个正在运行的 Spoolman 实例，以及每台打印机的序列号、访问代码和 IP 地址。打印机必须在端口 `8883` (MQTT) 和 `990` (FTPS) 上可达。P2S、H 系列和 X2D 需要在打印机中插入 USB 闪存盘用于消耗追踪，请参阅 [支持的硬件](https://github.com/Rdiger-36/HaspelSync#supported-hardware)。

## 配置
- 此应用不在 Home Assistant 应用配置标签中提供选项。
- 所有配置都在 HaspelSync Web UI 的 **设置** 下完成：Spoolman 端点、打印机、追踪模式、密码和 API 密钥。
- 更多信息：[HaspelSync 设置文档](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/settings.md)。

## 文档
这些页面由 HaspelSync 本身维护：

- [安装指南](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/installation.md)
- [支持的硬件和 USB 闪存盘](https://github.com/Rdiger-36/HaspelSync#supported-hardware)
- [工作原理](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/how-it-works.md)
- [Web UI](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/web-ui.md)
- [设置](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/settings.md)
- [故障排除](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/troubleshooting.md)
- [遗留模式](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/legacy-mode.md)
- [常见问题](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/faq.md)

## 日志
- 日志存储于 `addon_config/<reponumber_slug>/app/logs/server.log`。
- 错误和状态消息在网络日志文件和应用程序页面日志视图中均可见。
- HaspelSync Web UI 拥有自己的日志查看器。

## 自动化提示
如果你的打印机连接到 Home Assistant OS 的智能家居插头上，你可以自动化此应用（并可选地其他应用如 Spoolman），以便打印机通电时自动启动。

这很有用，因为即使打印机断电，HaspelSync 也会每隔几分钟尝试连接打印机。
只有当打印机通电时启动应用，可以减少不必要的网络流量并使日志更清晰。

**示例自动化 (YAML)**

下面的示例在智能开关开启时启动此应用：

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
| **未显示或无法连接打印机** | 序列号、访问代码或 IP 地址错误 | 在 Web UI 的 **设置** 下检查打印机。打印机必须在端口 `8883` 和 `990` 上可达。 |
| **Spoolman 中未更新线轴状态** | Spoolman 不可达，或轴槽未绑定到线轴 | 在 **设置** 下检查 Spoolman 端点，并在 Web UI 中将轴槽绑定到 Spoolman 线轴。 |
| **日志中显示打印机上“无切片文件”** | 没有 USB 闪存盘的 P2S、H 系列或 X2D | 将 USB 闪存盘插入打印机。 |
| **重启后打印机列表为空** | `printers.json` 格式错误 | 通过 SFTP/Samba 检查 `addon_config/<reponumber_slug>/app/printers/printers.json`，或在 Web UI 中重新添加打印机。 |

## 支持
- 如果此 Home Assistant 应用存在问题，请在 [Bytenoodle/hassioaddon GitHub 仓库](https://github.com/bytenoodle/hassioaddon/issues) 上打开问题。
- 如果 HaspelSync 本身有问题，请使用 [HaspelSync 问题跟踪器](https://github.com/Rdiger-36/HaspelSync/issues)。
- 包含你的应用日志（“来自 UI 的应用日志”和 `addon_config/<reponumber_slug>/app/logs/server.log`）以及问题的简短描述。

## 截图

![预览][预览]

<!--
资产
-->

[aarch64 徽章]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64 徽章]: https://img.shields.io/badge/amd64-yes-green.svg
[版本]: https://img.shields.io/badge/version-v1.3.7--0-blue.svg
[仓库]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[HaspelSync 更新徽章]: https://img.shields.io/badge/Updated%20on-2026--11--03-blue.svg
[预览]: https://raw.githubusercontent.com/bytenoodle/hassioaddon/refs/heads/main/haspelsync/preview.png

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
