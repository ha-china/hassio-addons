# ESPHome HA集成舰队

这个子目录是Home Assistant的**自定义集成**，与ESPHome附加组件（`ha-addon/server/`中的aiohttp服务器）相匹配。它将附加组件转变为一级HA成员：

- 通过Supervisor或`_esphome-fleet._tcp` mDNS（`config_flow.py`）发现附加组件。
- 每30秒通过`DataUpdateCoordinator`（`coordinator.py`）轮询`/ui/api/*`，以及一个实时WebSocket事件流（`ws_client.py`）以实现即时更新。
- 每个目标YAML、每个构建工作器暴露一个HA设备，以及一个代表附加组件本身的“中心”设备（`device.py`）。
- 提供传感器、二进制传感器、更新实体、按钮和数字（`sensor.py`、`binary_sensor.py`、`update.py`、`button.py`、`number.py`）。
- 在`services.py`中注册三个HA服务（`esphome_fleet.compile`、`.cancel`、`.validate`），由`services.yaml`支持。
- 在终端状态转换时触发`esphome_fleet_compile_complete` HA事件，以便自动化可以响应完成的构建。

## 如何进入`/config/custom_components/`

集成**不是通过HACS或手动安装**的。附加组件的`integration_installer`（在`ha-addon/server/integration_installer.py`中）在每次附加组件启动时将此目录复制到`/config/custom_components/esphome_fleet/`，并使用附加组件的`VERSION`修补`manifest.json`的`version`字段。真实来源在这里；安装目标是派生的。

当此目录更改时，`push-to-hass-4.sh`通过哈希文件检测到它，并在部署后重启HA Core——需要`ha core restart`，因为HA在启动时只加载一次集成，不会热重载Python模块。

## 为什么是`esphome_fleet`而不是仓库是`distributed_esphome`？

仓库、Docker镜像名称、附加组件短名和内部Python模块保持其原始的`distributed_esphome` / `esphome-dist-*`形式——更改这些将迫使每个现有安装进行迁移。**面向用户的**品牌是“Fleet for ESPHome”（参见`CLAUDE.md`中的命名约定部分）。集成`domain: esphome_fleet`选择面向用户的名字，因此HA用户在UI中看到的是干净的`esphome_fleet.compile`服务和`esphome_fleet`集成，而没有`distributed_`前缀泄露。

## 单例

`manifest.json`设置`"single_config_entry": true`。针对同一HA Core运行多个Fleet附加组件需要重新思考`services.py`中的`_first_coordinator`服务辅助合约；我们保持UX简单，并在HA配置流程层拒绝第二个设置。

## 品牌化（#58）

此目录中的`icon.png`（64×64）和`logo.png`（192×192）是附加组件顶级`../../icon.png` / `../../logo.png`的副本，与集成一起保留，以便任何检查它的人都知道集成代表哪种艺术作品。

**注意事项**：Home Assistant的集成UI**不会渲染自定义集成的本地品牌**。标志来自[`home-assistant/brands`](https://github.com/home-assistant/brands)仓库——HA的前端从`https://brands.home-assistant.io/<domain>/icon.png`获取它们。要使标志在集成页面上真正可见，需要向该仓库提交一个PR，该PR必须包含以下内容：

- `custom_integrations/esphome_fleet/icon.png` — 256×256 PNG
- `custom_integrations/esphome_fleet/logo.png` — 256×256 PNG
- `custom_integrations/esphome_fleet/icon@2x.png` — 512×512 PNG
- `custom_integrations/esphome_fleet/logo@2x.png` — 512×512 PNG

我们当前的磁盘资产是64×64 / 192×192，因为这是Supervisor附加组件目录所需的大小。brands仓库所需的较大尺寸需要在打开PR之前从源艺术作品中重新生成——在`WORKITEMS-future.md`中跟踪作为后续工作。
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
