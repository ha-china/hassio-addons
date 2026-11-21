# Home Assistant 附加组件：Minecraft 专用 Bedrock 版服务器
在 Home Assistant 上运行 Minecraft 专用 Bedrock 版服务器的快速方法。

_感谢所有为我仓库点赞的人！要点赞，请点击下方的图片，它将显示在右上角。感谢！_

[![@jdeath/homeassistant-addons 仓库星标者名单](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

本附加组件使用 [itzg/docker-minecraft-bedrock-server](https://github.com/itzg/docker-minecraft-bedrock-server/) 的 docker 镜像。

当重新启动附加组件时，它将自动获取最新的 Minecraft 版本。

你的世界、设置和服务器可执行文件存储在 `/share/minecraftbe` 目录中。

你可能希望创建一个服务，以便在夜间中途重启附加组件，从而更新 Minecraft 版本（见下文）。

如果你想要在家自动化中监控你的 Bedrock 服务器，请安装此集成器。内置集成器仅监控 Java 版：https://github.com/jdeath/Bedrock-Homeassistant

## 安装

本附加组件的安装过程非常简单，与其他 Hass.io 附加组件的安装没有区别。

1. [将我 Hass.io 附加组件仓库][repository] 添加到你的 Hass.io 实例中。
2. 安装此附加组件。
3. （可选）更改 API 端口（默认为标准 Minecraft 端口）。
4. 点击 `保存` 按钮以保存配置。
5. 创建 `/share/minecraftbe` 目录。
6. 启动附加组件。
7. 检查附加组件日志以确认一切正常。
8. 编辑 `/share/minecraftbe/` 中你需要的服务器/权限/黑名单属性，并重启附加组件。注意：由于某些原因，无法在 `server.properties` 中更改端口，因为它会被覆盖。但你可以在 Home Assistant 的附加组件配置标签中更改端口。我只暴露 IP4 端口。如果需要 IPv6，请告知我。
9. 如果你需要外部访问，请确保将外部端口前转到你的 Home Assistant IP。

## 重启自动化

```yaml
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

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
