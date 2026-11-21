# ESPHome HA 集成用的 Fleet

此子树是配合 Fleet for ESPHome 附加组件（即 `ha-addon/server/` 中的 aiohttp 服务器）使用的 Home Assistant **自定义集成**。它将附加组件提升为 Home Assistant 的一等公民：

- 通过 Supervisor 或 `_esphome-fleet._tcp` mDNS（位于 `config_flow.py`）附加组件。
- 通过 `DataUpdateCoordinator`（位于 `coordinator.py`）每 30 秒轮询 `/ui/api/*`，并结合实时 WebSocket 事件流（位于 `ws_client.py`）以实现即时更新。
- 针对每个目标 YAML 文件、每个构建 worker 暴露一个 HA 设备，并为附加组件本身暴露一个“中心”设备（位于 `device.py`）。
- 携带传感器、二值传感器、更新实体、按钮和数字控制点（分别位于 `sensor.py`、`binary_sensor.py`、`update.py`、`button.py`、`number.py`）。
- 在 `services.yaml` 的 backing 支持下，在 `services.py` 中注册三个 HA 服务（`esphome_fleet.compile`、`.cancel`、`.validate`）(`#58`)。
- 在终端状态过渡时触发 `esphome_fleet_compile_complete` HA 事件，以便自动化能够响应已完成的操作。

## 如何进入 `/config/custom_components/`

集成**不是通过 HACS 或手动安装**的。附加组件的 `integration_installer`（位于 `ha-addon/server/integration_installer.py`）会在每次附加组件启动时将此目录复制到 `/config/custom_components/esphome_fleet/`，并用附加组件的 `VERSION` 替换 `manifest.json` 中的 `version` 字段。事实所在的源 lives 在此；安装目标是派生的。

当此目录发生变化时，`push-to-hass-4.sh` 会检测变化（通过 hash 文件），并在部署后重启 HA Core——由于 HA 在启动时仅加载一次集成且不热重载 Python 模块，因此需要执行 `ha core restart`。

## 为什么仓库名为 `distributed_esphome` 但集成名为 `esphome_fleet`？

仓库、Docker 镜像名称、附加组件 slug 和内部 Python 模块仍然保持其原始的 `distributed_esphome` / `esphome-dist-*` 形式——更改它们将在每个现有安装中强制迁移。面向用户的品牌称为"Fleet for ESPHome"（见 `CLAUDE.md` 命名约定部分）。集成的 `domain: esphome_fleet` 选择了面向用户的名称，以便 HA 用户在界面上看到一个清爽的 `esphome_fleet.compile` 服务和一个 `esphome_fleet` 集成，而不会泄露过时的 `distributed_` 前缀。

## 单实例

`manifest.json` 设置 `"single_config_entry": true`。如果对同一 HA Core 运行多个 Fleet 附加组件，需要重新考虑 `services.py` 中的 `_first_coordinator` 服务辅助程序合约；为了保持用户体验简单，我们在 HA config-flow 层级拒绝第二个设置。

## 品牌标识 (#58)

本目录中的 `icon.png` (64×64) 和 `logo.png` (192×192) 是附加组件顶层 `../../icon.png` / `../../logo.png` 的副本，放置在一起以便任何人检查时都知道哪个作品代表哪个集成。

**注意：** Home Assistant 的集成界面**不会**为自定义集成渲染本地品牌标识。图标来自 [`home-assistant/brands`](https://github.com/home-assistant/brands) 仓库——HA 的前端从 `https://brands.home-assistant.io/<domain>/icon.png` 获取它们。要使图标的实际可见集成页面，请向该仓库提交 PR，包含以下内容：

- `custom_integrations/esphome_fleet/icon.png` — 256×256 PNG
- `custom_integrations/esphome_fleet/logo.png` — 256×256 PNG
- `custom_integrations/esphome_fleet/icon@2x.png` — 512×512 PNG
- `custom_integrations/esphome_fleet/logo@2x.png` — 512×512 PNG

我们当前存储在磁盘上的资产尺寸为 64×64 / 192×192，因为这是 Supervisor 附加组件目录所需的大小。brands 仓库需要的大尺寸需从源艺术重新生成后再打开 PR——已作为后续任务跟踪在 `WORKITEMS-future.md` 中。

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
