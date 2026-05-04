# ESPHome Fleet HA集成

这个子目录是Home Assistant的**自定义集成**，与ESPHome Fleet附加组件（`ha-addon/server/`中的aiohttp服务器）配对。它将附加组件转变为一个一级HA成员：

- 通过Supervisor或`_esphome-fleet._tcp` mDNS（`config_flow.py`）发现附加组件。
- 每30秒通过`DataUpdateCoordinator`（`coordinator.py`）轮询`/ui/api/*`，并通过实时WebSocket事件流（`ws_client.py`）进行即时更新。
- 每个目标YAML，每个构建工作器提供一个HA设备，并为附加组件本身提供一个“中心”设备（`device.py`）。
- 提供传感器、二进制传感器、更新实体、按钮和数字（`sensor.py`、`binary_sensor.py`、`update.py`、`button.py`、`number.py`）。
- 在`services.py`中注册三个HA服务（`esphome_fleet.compile`、`.cancel`、`.validate`），并由`services.yaml`支持。
- 在终端状态转换时触发`esphome_fleet_compile_complete` HA事件，以便自动化可以响应完成构建。

## 如何进入`/config/custom_components/`

此集成**不是通过HACS或手动安装**。附加组件的`integration_installer`（在`ha-addon/server/integration_installer.py`中）在每次附加组件启动时将此目录复制到`/config/custom_components/esphome_fleet/`，并将`manifest.json`的`version`字段修补为附加组件的`VERSION`。真实来源在此；安装目标是由此派生的。

当此目录更改时，`push-to-hass-4.sh`通过哈希文件检测到它，并在部署后重新启动HA Core — 由于HA在启动时一次性加载集成，并且不进行热重载Python模块，因此需要`ha core restart`。

## 为什么是`esphome_fleet`，当存储库是`distributed_esphome`？

存储库、Docker镜像名称、附加组件短标识和内部Python模块保持其原始的`distributed_esphome` / `esphome-dist-*`形式 — 改变这些将迫使每个现有安装进行迁移。**面向用户**的品牌是“ESPHome Fleet”（见`CLAUDE.md`的命名约定部分）。集成的`domain: esphome_fleet`选择用户界面名称，因此HA用户在他们的UI中看到一个干净的`esphome_fleet.compile`服务和`esphome_fleet`集成，而没有泄露过时的`distributed_`前缀。

## 单例

`manifest.json`设置`"single_config_entry": true`。针对同一HA Core运行多个Fleet附加组件将需要重新思考`services.py`中的`_first_coordinator`服务辅助合约；我们保持UX简单，并在HA配置流层拒绝第二个设置。

## 品牌化（#58）

此目录中的`icon.png`（64×64）和`logo.png`（192×192）是附加组件顶层`../../icon.png` / `../../logo.png`的副本，与集成一起保留，以便任何人检查时都知道集成代表哪些艺术品。

**注意事项**：Home Assistant的集成UI不会为自定义集成渲染本地品牌。标志来自[`home-assistant/brands`](https://github.com/home-assistant/brands)存储库 — HA的前端从`https://brands.home-assistant.io/<domain>/icon.png`获取它们。要使标志在实际的集成页面上可见，需要向该存储库提交一个PR，该PR需要包含以下内容：

- `custom_integrations/esphome_fleet/icon.png` — 256×256 PNG
- `custom_integrations/esphome_fleet/logo.png` — 256×256 PNG
- `custom_integrations/esphome_fleet/icon@2x.png` — 512×512 PNG
- `custom_integrations/esphome_fleet/logo@2x.png` — 512×512 PNG

我们当前的磁盘资产是64×64 / 192×192，因为这是Supervisor附加组件目录所需的大小。brands存储库要求的较大尺寸需要从源艺术作品重新生成，然后再打开PR — 作为`WORKITEMS-future.md`中的后续工作跟踪。
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
