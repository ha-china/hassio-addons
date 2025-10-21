# SONOFF Dongle Flasher

![支持 armv7 架构](https://img.shields.io/badge/armv7-yes-green.svg) ![支持 aarch64 架构](https://img.shields.io/badge/aarch64-yes-green.svg) ![支持 amd64 架构](https://img.shields.io/badge/amd64-yes-green.svg)

## 关于

SONOFF Dongle Flasher 支持在线固件刷新 iHost MG21 芯片和 SONOFF Dongle 系列（ZBDongle-P、ZBDongle-E、Dongle-M、Dongle-PMG24）。

## 前置条件

在使用插件之前，请确保串口未被使用（通常被 Zigbee2MQTT 或 ZHA 等服务占用）。
在固件刷新过程中，插件将尝试连接到设备并自动检查串口是否被占用。
如果被占用，插件将尝试为您停止冲突的服务。
[操作指南 >](https://github.com/iHost-Open-Source-Project/ha-operating-system?tab=readme-ov-file#readme)

## 安装
1. 进入插件商店 → 点击右上角的 **更多** 按钮（⋮）→ 选择 **仓库**  
2. 粘贴以下 URL：  
   [https://github.com/iHost-Open-Source-Project/hassio-ihost-addon](https://github.com/iHost-Open-Source-Project/hassio-ihost-addon)  
3. 或者，直接点击下方按钮自动添加：

[![添加仓库](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FiHost-Open-Source-Project%2Fhassio-ihost-addon)

## 如何使用

有关如何使用 SONOFF Dongle Flasher 插件的详细信息，请参阅“文档”。