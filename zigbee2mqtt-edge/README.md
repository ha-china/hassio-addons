# Home Assistant 附加组件：Zigbee2MQTT Edge

[![Docker Pulls](https://img.shields.io/docker/pulls/zigbee2mqtt/zigbee2mqtt-edge-amd64.svg?style=flat-square&logo=docker)](https://cloud.docker.com/u/zigbee2mqtt/repository/docker/dwelch2101/zigbee2mqtt-edge-amd64)

⚠️ 这是 Edge 版本（遵循 Zigbee2MQTT 开发分支） ⚠️

允许您使用 Zigbee 设备 **无需** 供应商的桥接器或网关。

它将事件桥接并允许您通过 MQTT 控制 Zigbee 设备。通过这种方式，您可以将 Zigbee 设备与您使用的任何智能家居基础设施集成。

有关更多详细信息，请查看文档选项卡。

### 更新 Edge 附加组件
要更新附加组件的 `edge` 版本，您需要卸载并重新安装附加组件。

⚠️ 请确保备份您的配置，因为此过程不会为您保存配置。

**步骤**
1. 从以下位置备份配置：**设置 → 附加组件 → Zigbee2MQTT Edge → 配置 → ⋮ → 在 YAML 中编辑**，将 **选项** 复制到一个安全的位置
1. 卸载：**设置 → 附加组件 → Zigbee2MQTT Edge → 卸载**
1. 刷新仓库：**设置 → 附加组件 → 附加组件商店 → ⋮ → 检查更新**
1. 安装：**设置 → 附加组件 → 附加组件商店 → Zigbee2MQTT Edge → 安装**
1. 恢复配置到：**设置 → 附加组件 → Zigbee2MQTT Edge → 配置 → ⋮ → 在 YAML 中编辑**，粘贴您在第 1 步中复制的配置。