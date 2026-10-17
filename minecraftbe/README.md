# Home Assistant 附加组件：Minecraft 专用版 Bedrock 版
在 Home Assistant 上快速运行 Minecraft 专用版 Bedrock 版。

_感谢所有星标我的仓库的朋友们！想星标的请点击下方图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件使用 [itzg/docker-minecraft-bedrock-server](https://github.com/itzg/docker-minecraft-bedrock-server/) Docker 镜像。

重启附加组件时，它将自动获取最新的 Minecraft 版本。

您的世界、设置和服务器可执行文件存储在 /share/minecraftbe。

您可能想创建一个服务，在半夜期间重启此附加组件，以便更新 Minecraft 版本（见下文）。

如果您想在 Home Assistant 中监控您的 Bedrock 服务器，请安装此集成，因为内置集成仅监控 Java：https://github.com/jdeath/Bedrock-Homeassistant

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装方式并无不同。

1. 将我的 Hass.io 附加组件仓库 [repository] 添加到您的 Hass.io 实例中。
2. 安装此附加组件。
3. 如有需要，更改 API 端口（默认使用标准 Minecraft 端口）。
4. 点击 `Save` 按钮以保存您的配置。
5. 创建目录 /share/minecraftbe。
6. 启动附加组件。
7. 查看附加组件的日志以确认一切正常。
8. 在 /share/minecraftbe/ 中编辑您想要更改的服务器/权限/白名单属性，并重启附加组件。请注意，由于某些原因，您无法在 server.properties 中更改端口，它会将被覆盖。不过，您可以在 Home Assistant 中的附加组件配置选项卡中更改端口。我只暴露 IP4 端口。如果需要 IP6，请告知我。
9. 如果您需要外部访问，请务必将外部端口转发到您的 Home Assistant IP。

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
