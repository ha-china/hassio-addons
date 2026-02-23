# Home assistant add-on: Minecraft Dedicated Server Bedrock Edition
在 Home Assistant 上快速运行 Minecraft Dedicated Server Bedrock Edition 的方法。

_感谢大家给我的仓库点赞！要点赞请点击下面的图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用了 [itzg/docker-minecraft-bedrock-server](https://github.com/itzg/docker-minecraft-bedrock-server/) 的 docker 镜像。

当重新启动插件时，它将自动获取最新版本的 Minecraft。

你的世界、设置和服务器可执行文件存储在 /share/minecraftbe

你可能想要在半夜创建一个服务来重新启动插件，以便更新 Minecraft 版本（见下文）

如果你想在 Home Assistant 中监控你的 Bedrock 服务器，请安装这个集成，因为内置的只监控 Java：https://github.com/jdeath/Bedrock-Homeassistant

## 安装

这个插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库][repository]添加到你的 Hass.io 实例。
1. 安装这个插件。
2. 如有需要，更改 API 端口（默认为标准的 Minecraft 端口）
3. 点击 `保存` 按钮来保存你的配置。
4. 创建目录 /share/minecraftbe
5. 启动插件。
6. 检查插件的日志以查看是否一切正常。
7. 编辑 /share/minecraftbe/ 中任何你想要的 server/permissions/whitelist 属性，并重新启动插件。注意你不能更改 server.properties 中的端口，因为它会被覆盖。但是，你可以在 Home Assistant 中的插件配置选项卡中更改端口。我只暴露了 IP4 端口。如果需要 IP6，请告诉我。
8. 如果你想外部访问，请确保将你的外部端口转发到你的 Home Assistant IP。

## 重启自动化

```
alias: 重启 Minecraft 服务器
description: ""
trigger:
  - platform: time
    at: "02:00:00"
condition:
  - condition: time
    before: "00:00:00"
    weekday:
      - mon
      - wed
      - fri
    after: "00:00:00"
action:
  - service: hassio.addon_restart
    data:
      addon: 2effc9b9-minecraftbe
mode: single
```
[repository]: https://github.com/jdeath/homeassistant-addons
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
