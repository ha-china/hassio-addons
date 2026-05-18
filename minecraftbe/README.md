# Home Assistant 插件：Minecraft 专用服务器 Bedrock 版
一种快速在 Home Assistant 上运行 Minecraft 专用服务器 Bedrock 版的方法。

_感谢所有为我仓库点星的人！点击下面的图片即可点星，然后它将出现在右上角。谢谢！_

![为 @jdeath/homeassistant-addons 点星](https://reporoster.com/stars/jdeath/homeassistant-addons)

## 关于

此插件使用 [itzg/docker-minecraft-bedrock-server](https://github.com/itzg/docker-minecraft-bedrock-server/) docker 镜像。

当重启插件时，它将自动获取最新的 Minecraft 版本。

你的世界、设置和服务器可执行文件存储在 /share/minecraftbe 中。

你可能想在深夜创建一个服务来重启插件，以便更新 Minecraft 版本（见下文）

如果你想在家 Assistant 中监控你的 Bedrock 服务器，安装此集成，因为内置的集成只监控 Java：https://github.com/jdeath/Bedrock-Homeassistant

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的 Hass.io 插件仓库 [repository] 添加到你的 Hass.io 实例。
1. 安装此插件。
2. 如果需要，更改 API 端口（默认为标准 Minecraft 端口）
3. 点击 `保存` 按钮以存储你的配置。
4. 创建目录 /share/minecraftbe
5. 启动插件。
6. 检查插件的日志以查看是否一切顺利。
7. 编辑你想要在 /share/minecraftbe/ 中的 /server/permissions/whitelist 属性，然后重启插件。注意，你无法在 server.properties 中更改端口，因为它会由于某种原因被覆盖。但是，你可以在 homeassistant 的插件配置标签中更改端口。我只公开了 IP4 端口。如果你需要 IP6，请告诉我。
8. 如果你想外部访问，确保将你的外部端口转发到你的 homeassistant IP。

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
