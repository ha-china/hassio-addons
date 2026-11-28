# Home Assistant 扩展程序：Matter 服务器

![支持 armv7 架构](https://img.shields.io/badge/armv7-yes-green.svg)

此存储库提供为 **armv7 定制的 Matter 服务器扩展程序和容器镜像**，这些扩展程序和镜像未由官方 Matter 服务器发行版支持。

## 前提条件

- Home Assistant OS 版本必须为 15.2.1 或更高版本。

## 安装
1. 前往扩展程序商店 → 点击右上角的 **更多** 按钮 (⋮) → 选择 **存储库**  
2. 粘贴以下 URL：  
   [https://github.com/iHost-Open-Source-Project/hassio-ihost-addon](https://github.com/iHost-Open-Source-Project/hassio-ihost-addon)  
3. 或者，直接点击下方按钮自动添加：

[![添加存储库](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FiHost-Open-Source-Project%2Fhassio-ihost-addon)


## 关于

适用于 Home Assistant Core 的 Matter Python WebSocket 服务器。Matter（曾被称为 Connected Home over IP 或 CHIP）是一个基于 IPv6 的智能家居标准。此扩展程序提供了一个 Matter 控制器，允许您配置和控制 Matter 设备。与之匹配的 Home Assistant Core 集成通过 WebSocket 与此服务器通信。