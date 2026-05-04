# ESPHome Fleet 家庭助理集成

此子目录是 Home Assistant 的 **自定义集成**，与 ESPHome Fleet 扩展插件（位于 `ha-addon/server/` 中的 aiohttp 服务器）配对。它将扩展插件变为一级 HA 成员：

- 通过 Supervisor 或 `_esphome-fleet._tcp` mDNS (`config_flow.py`) 发现扩展插件。
- 通过 `DataUpdateCoordinator` (`coordinator.py`) 每 30 秒轮询 `/ui/api/*`，以及一个实时 WebSocket 事件流 (`ws_client.py`) 用于即时更新。
- 为每个目标 YAML、每个构建工作进程提供一个 HA 设备，并为扩展插件本身提供一个“中心”设备 (`device.py`)。
- 提供传感器、二进制传感器、更新实体、按钮和数字 (`sensor.py`、`binary_sensor.py`、`update.py`、`button.py`、`number.py`)。
- 在 `services.py` 中注册三个 HA 服务 (`esphome_fleet.compile`、`.cancel`、`.validate`)，并由 `services.yaml` 支持。
- 在终端状态转换时触发 `esphome_fleet_compile_complete` HA 事件，以便自动化可以响应完成的构建。

## 如何进入 `/config/custom_components/`

此集成 **不是通过 HACS 或手动安装**。扩展插件的 `integration_installer`（位于 `ha-addon/server/integration_installer.py`）在每次扩展插件启动时将此目录复制到 `/config/custom_components/esphome_fleet/`，并用扩展插件的 `VERSION` 更改 `manifest.json` 的 `version` 字段。真相在此；安装目标是由此派生的。

当此目录更改时，`push-to-hass-4.sh` 通过哈希文件检测到它，并在部署后重新启动 HA Core —— 需要执行 `ha core restart`，因为 HA 在启动时一次性加载集成，不会热重载 Python 模块。

## 为什么叫 `esphome_fleet`，而不是仓库名 `distributed_esphome`？

仓库、Docker 映像名称、扩展插件短标识和内部 Python 模块都保留了原始的 `distributed_esphome` / `esphome-dist-*` 形式 —— 更改这些会迫使每个现有安装进行迁移。**面向用户的**品牌是 "ESPHome Fleet"（参见 `CLAUDE.md` 中的命名约定部分）。集成的 `domain: esphome_fleet` 选择面向用户的名称，因此 HA 用户在他们的 UI 中可以看到干净的 `esphome_fleet.compile` 服务和一个 `esphome_fleet` 集成，而不会出现遗留的 `distributed_` 前缀。

## 单例

`manifest.json` 设置 `"single_config_entry": true`。针对同一个 HA Core 运行多个 Fleet 扩展插件需要重新思考 `services.py` 中的 `_first_coordinator` 服务助手合同；我们保持 UX 简单，并在 HA 配置流程层拒绝第二个设置。

## 品牌化（#58）

此目录中的 `icon.png`（64×64）和 `logo.png`（192×192）是扩展插件顶层 `../../icon.png` / `../../logo.png` 的副本，与集成一起保留，以便任何检查它的人都知道哪个艺术品代表此集成。

**注意：** Home Assistant 的集成 UI **不会**渲染自定义集成的本地品牌。标志来自 `[home-assistant/brands](https://github.com/home-assistant/brands)` 仓库 —— HA 的前端从 `https://brands.home-assistant.io/<domain>/icon.png` 获取它们。要使标志在集成页面实际上可见，需要向该仓库提交一个合并请求，该请求要包含：

- `custom_integrations/esphome_fleet/icon.png` — 256×256 PNG
- `custom_integrations/esphome_fleet/logo.png` — 256×256 PNG
- `custom_integrations/esphome_fleet/icon@2x.png` — 512×512 PNG
- `custom_integrations/esphome_fleet/logo@2x.png` — 512×512 PNG

我们当前的磁盘资产是 64×64 / 192×192，因为这是 Supervisor 扩展插件目录所需的。品牌仓库要求的较大尺寸需要从源艺术中重新生成，然后再打开 PR —— 作为 `WORKITEMS-future.md` 中的后续工作跟踪。
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
