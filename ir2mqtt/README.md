# IR2MQTT

IR2MQTT 是一个用于红外桥的 Web UI，它具有学习功能和 MQTT 自动发现功能，适用于 Home Assistant。

![IR2MQTT 演示](https://raw.githubusercontent.com/steelcuts/ir2mqtt/main/.github/assets/showcase.gif)

## 功能说明

IR2MQTT 将物理红外设备与您的智能家居桥接起来。您无需编写 YAML，而是使用现代化的 Web UI 来：

- **管理红外桥**，这些桥通过 MQTT 连接（例如基于 ESPHome 的设备）
- **直接从您的遥控器学习红外代码**
- **浏览红外数据库**（Flipper-IRDB、Probono IRDB）以查找代码，无需遥控器
- **创建自动化**，根据 MQTT 消息触发红外命令
- **通过 MQTT 发现自动发现设备**在 Home Assistant 中

## 配置

| 选项 | 描述 | 默认值 |
|------|------|--------|
| `mqtt_broker` | MQTT 代理的主机名或 IP 地址 | `core-mosquitto` |
| `mqtt_port` | MQTT 代理端口 | `1883` |
| `mqtt_user` | MQTT 用户名 | *(空)* |
| `mqtt_pass` | MQTT 密码 | *(空)* |

## 硬件要求

需要运行 IR2MQTT ESPHome 固件的至少一个红外桥。这些桥连接到您的 MQTT 代理，并由 IR2MQTT **自动发现** —无需与主机建立串行/USB 连接。

请参阅 [ir2mqtt_bridge](https://github.com/steelcuts/ir2mqtt_bridge) 存储库以获取固件和布线说明（IR 接收器 + IR LED 连接到 ESP32）。

## 文档

完整的文档可在 [steelcuts.github.io/ir2mqtt](https://steelcuts.github.io/ir2mqtt/) 找到。

## 支持

- [报告问题](https://github.com/steelcuts/ir2mqtt/issues)
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
