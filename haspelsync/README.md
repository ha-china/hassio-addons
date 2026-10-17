# HaspelSync HA 应用
![版本][版本]
![HaspelSync 更新徽章]

![支持 aarch64 架构][aarch64 徽章]
![支持 amd64 架构][amd64 徽章]

## 关于
此应用基于 Rdiger-36 的 [HaspelSync](https://github.com/Rdiger-36/HaspelSync)，是 **Bambulab AMS Spoolman FilamentStatus** 应用的继任者。

HaspelSync 将您的 **Bambu Lab AMS** 耗材线轴与 **Spoolman** 进行同步。它通过在 MQTT 上监听您的打印机(s)，读取打印的切片 G 代码，并将消耗的耗材登记到 Spoolman 中对应的线轴上。

## 来自 Bambulab AMS Spoolman FilamentStatus？
旧应用已弃用。HaspelSync 是一个独立的应用，需要重新设置：不会携带任何数据，因此请在 Web UI 中设置您的 Spoolman URL 和打印机。

- 首先停止旧应用，因为两个应用都使用端口 `4000`。尽快卸载它，直到 HaspelSync 开始工作。
- 用于启动或停止旧应用的自动化需要新的 slug `reponumber_haspelsync`（请参见 [自动化提示](#automation-tip)）。
- 插槽标签现在从 `A1` 开始，因此每个插槽标签比旧应用中高一位。

## 注意事项

1. **数据目录**
   - `addon_config/<reponumber_slug>/` → 主应用数据和日志。
     - `<slug>` 是 Home Assistant 自动创建的应用文件夹名称，例如 `12a34b56_haspelsync`。
   - 此文件夹内部会自动创建以下子目录：
     - `app/printers/` → 打印机列表 (`printers.json`) 和应用设置 (`settings.json`)
     - `app/logs/` → 日志文件
   - 权限已设置以确保应用程序可以无问题地读写。
   - `/config` 指的是容器内的应用配置文件，在 Home Assistant 侧对应 `addon_config/<slug>/`。

2. **版本号**
   - 使用 **x.x.x-x** 格式。
   - 前三个数字对应 HaspelSync 版本（例如 `1.3.3`）。
   - 破折号后的数字（`-X`）用于表示此 Home Assistant 应用的特定更改（例如 `1.3.3-1`）。

## 安装
1. 在 Home Assistant 中添加 [仓库][仓库]。
2. 安装 **HaspelSync** 应用。
3. 启动应用。
4. 访问 Web UI：`http://<HOME_ASSISTANT_HOST>:4000`。

您需要一个正在运行的 Spoolman 实例，以及每个打印机的序列号、访问代码和 IP 地址。打印机必须在端口 `8883` (MQTT) 和 `990` (FTPS) 处可访问。P2S、H 系列和 X2D 需要在打印机中插入 USB 闪存盘以进行消耗追踪，请参阅 [受支持的硬件](https://github.com/Rdiger-36/HaspelSync#supported-hardware)。

## 配置
- 此应用没有在 Home Assistant 应用配置选项卡中的选项。
- 所有配置均在 HaspelSync Web UI 的 **设置** 下进行：Spoolman 端点、打印机、追踪模式、密码和 API 密钥。
- 更多信息：[HaspelSync 设置文档](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/settings.md)。

## 文档
这些页面由 HaspelSync 本身维护：

- [安装](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/installation.md)
- [受支持的硬件和 USB 闪存盘](https://github.com/Rdiger-36/HaspelSync#supported-hardware)
- [工作原理](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/how-it-works.md)
- [Web UI](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/web-ui.md)
- [设置](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/settings.md)
- [故障排除](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/troubleshooting.md)
- [旧模式](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/legacy-mode.md)
- [常见问题解答](https://github.com/Rdiger-36/HaspelSync/blob/main/docs/faq.md)

## 日志
- 日志存储在 `addon_config/<reponumber_slug>/app/logs/server.log` 中。
- 错误和状态消息在日志文件和应用程序页面日志查看中均可见。
- HaspelSync Web UI 拥有自己的日志查看器。

## 自动化提示
如果您的打印机连接到 Home Assistant OS 的智能电源插座，您可以自动化此应用（以及可选地其他应用，如 Spoolman），以便在打印机通电时自动启动。

这很有用，因为 HaspelSync 会在打印机关闭后每几分钟尝试联系一次打印机。
仅当打印机通电时启动此应用，可以减少不必要的网络流量并保持日志更清洁。

**示例自动化 (YAML)**

下面的示例在您的智能插座 **开启** 时启动此应用：

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
| **打印机未显示或未连接** | 序列号、访问代码或 IP 地址错误 | 检查 Web UI **设置** 中的打印机。打印机必须在端口 `8883` 和 `990` 处可访问。 |
| **Spoolman 中耗材未更新** | Spoolman 不可访问，或将 插槽未关联到 耗材线轴 | 检查 Web UI **设置** 中的 Spoolman 端点，并在 Web UI 中将插槽关联到 Spoolman 耗材线轴。 |
| **日志中显示 "打印机上没有切片文件"** | 没有 USB 闪存盘 的 P2S、H 系列或 X2D | 在打印机中插入 USB 闪存盘。 |
| **重启后打印机列表为空** | `printers.json` 格式错误 | 通过 SFTP/Samba 检查 `addon_config/<reponumber_slug>/app/printers/printers.json`，或在 Web UI 中再次添加打印机。 |

## 支持
- 针对此 Home Assistant 应用的问题，请在 [Bytenoodle/hassioaddon GitHub 仓库](https://github.com/bytenoodle/hassioaddon/issues) 上提出问题。
- 针对 HaspelSync 本身的问题，请使用 [HaspelSync issue tracker](https://github.com/Rdiger-36/HaspelSync/issues)。
- 包含您的应用日志（来自 UI 的 "应用日志" 和 `addon_config/<reponumber_slug>/app/logs/server.log`）以及简要的问题描述。

## 截图

![预览][预览]

<!--
资源
-->

[aarch64 徽章]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64 徽章]: https://img.shields.io/badge/amd64-yes-green.svg
[版本]: https://img.shields.io/badge/version-v1.3.4--0-blue.svg
[仓库]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/bytenoodle/hassioaddon
[HaspelSync 更新徽章]: https://img.shields.io/badge/Updated%20on-2026--10--10-blue.svg
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
