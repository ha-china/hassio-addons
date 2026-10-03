# Home Assistant 附加组件：Minecraft Dedicated Server Bedrock Edition
在 Home Assistant 上快速运行 Minecraft Dedicated Server Bedrock Edition 的方式。

_感谢所有为我仓库点赞的人！要点赞，请点击下图，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该附加组件使用 [itzg/docker-minecraft-bedrock-server](https://github.com/itzg/docker-minecraft-bedrock-server/) Docker 镜像。

重新启动附加组件时，它将自动获取 Minecraft 的最新版本。

您的世界、设置和服务器可执行文件存储在 /share/minecraftbe 目录中。

您可能希望创建一个服务，以便在深夜重新启动附加组件，从而更新 Minecraft 版本（见下文）。

如果您想在 Home Assistant 中监控您的基岩版服务器，请安装此集成，因为内置集成仅监控 Java 版本：https://github.com/jdeath/Bedrock-Homeassistant

## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件不同。

1.  [添加我的 Hass.io 附加组件仓库][repository] 到您的 Hass.io 实例。
1.  安装此附加组件。
2.  根据需要更改 API 端口（默认为标准 Minecraft 端口）。
3.  点击 `保存` 按钮以存储配置。
4.  创建目录 /share/minecraftbe。
5.  启动附加组件。
6.  检查附加组件的日志，查看是否一切顺利。
7.  编辑 /share/minecraftbe/ 中您想要设置的任何服务器/权限/白名单属性，并重新启动附加组件。注意您不能更改服务器.properties 中的端口，因为出于某些原因它会被覆盖。但是，您可以在 Home Assistant 的附加组件配置选项卡中更改端口。我只暴露 IP4 端口。如果需要 IP6，请告诉我。
8.  如果您需要外部访问，请确保将您的外部端口转发到 Home Assistant IP。

## 重启自动化

```
alias: Restart Minecraft Server
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
