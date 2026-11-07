# Home Assistant 插件：Minecraft 专用服务器 Bedrock 版
在 Home Assistant 上快速运行 Minecraft 专用服务器 Bedrock 版的简便方法。

_感谢所有为我的仓库点星的朋友们！要查看它，请点击下方的图片，它将出现在右上角。感谢大家！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 简介

该插件使用 [itzg/docker-minecraft-bedrock-server](https://github.com/itzg/docker-minecraft-bedrock-server/) Docker 镜像。

重启插件时，它将自动获取 Minecraft 的最新版本。

您的我的世界地图、配置 (`settings`) 以及服务器可执行文件存储在 `/share/minecraftbe` 目录下。您可能希望在半夜创建一个服务来重启此插件，以便更新 Minecraft 版本（详见下文）。

如果您想在 Home Assistant 中监控您的 Bedrock 服务器，请安装此集成，因为内置集成仅监控 Java 版本：https://github.com/jdeath/Bedrock-Homeassistant

## 安装

此插件的安装非常简单，与其他 Hass.io 插件的安装方式没有不同。

1.  [添加我的 Hass.io 插件仓库][repository] 到您的 Hass.io 实例中。
2.  安装此插件。
3.  如需更改，可修改 API 端口（默认为标准 Minecraft 端口）。
4.  点击 `保存` 按钮以存储您的配置。
5.  创建 `/share/minecraftbe` 目录。
6.  启动插件。
7.  检查插件日志，确认是否一切顺利。
8.  编辑 `/share/minecraftbe/` 目录下您想要修改的任何服务器/权限/白名单属性，然后重启插件。请注意，由于某些原因，您在 `server.properties` 中无法更改端口（它将被覆盖）。然而，您可以在 Home Assistant 的插件配置选项卡中更改端口。目前我只暴露 IP4 端口。如果需要 IP6 端口，请告知我。
9.  如果您需要外部访问，请确保将外部端口转发到您的 Home Assistant IP 地址。

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
