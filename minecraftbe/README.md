# Home Assistant 附加组件：Minecraft Bedrock 版专属服务器

在 Home Assistant 上快速运行 Minecraft Bedrock 版专属服务器。

_感谢所有为我仓库点赞的人！想要点赞请点击下方图片，它将被显示在右上角。感谢！_

[![@jdeath/homeassistant-addons 仓库星标者 roster](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该附加组件使用 [itzg/docker-minecraft-bedrock-server](https://github.com/itzg/docker-minecraft-bedrock-server/) Docker 镜像。

重启附加组件时，它会自动获取 Minecraft 的最新版本。

你的世界、设置和服务器可执行文件存储于 `/share/minecraftbe` 目录。

你可能希望创建一个服务以便在午夜重启附加组件，从而更新 Minecraft 版本（见下文）。

若想在 Home Assistant 中监控你的 Bedrock 服务器，请安装此项集成，因为内置集成仅监控 Java 版：https://github.com/jdeath/Bedrock-Homeassistant

## 安装

此附加组件的安装非常直接，与其他 Hass.io 附加组件的安装方式并无不同。

1. [将此 Hass.io 附加组件仓库][repository] 添加到你的 Hass.io 实例中。
1. 安装此附加组件。
2. 如需更改，可修改 API 端口（默认值为标准 Minecraft 端口）。
3. 点击 `Save` 按钮以保存配置。
4. 创建 `/share/minecraftbe` 目录。
5. 启动附加组件。
6. 检查附加组件日志，确认一切是否正常。
7. 在 `/share/minecraftbe/` 中编辑你想要修改的服务器/权限/白名单属性，并重启附加组件。注意：由于某些原因，不能更改 `server.properties` 中的端口（会被覆盖）。不过，你可以在 Home Assistant 的附加组件配置标签中更改端口。我仅暴露 IP4 端口。如果需要 IP6，请告知我。
8. 如果需要外部访问，请确保将外部端口转发到 Home Assistant 的 IP 地址。

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
