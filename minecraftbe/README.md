# Home Assistant 扩展：Minecraft 专用服务器 Bedrock 版
快速在 Home Assistant 上运行 Minecraft 专用服务器 Bedrock 版。

_感谢所有为我仓库点赞的人！要点赞，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此扩展使用 [itzg/docker-minecraft-bedrock-server](https://github.com/itzg/docker-minecraft-bedrock-server/) 的 docker 镜像。

重启扩展时，它将自动获取 Minecraft 的最新版本。

你的世界、设置和服务器可执行文件存储在 /share/minecraftbe 中。

你可能想要创建一个服务，在深夜重启扩展以更新 Minecraft 版本（见下文）

如果你想在 Home Assistant 中监控你的 Bedrock 服务器，请安装此集成，因为内置的集成只监控 Java：https://github.com/jdeath/Bedrock-Homeassistant

## 安装

此扩展的安装非常简单，与安装任何其他 Hass.io 扩展没有区别。

1. [将我的 Hass.io 扩展仓库][repository] 添加到你的 Hass.io 实例中。
1. 安装此扩展。
2. 如果需要，更改 API 端口（默认为标准的 Minecraft 端口）
3. 点击 `保存` 按钮以存储你的配置。
4. 创建目录 /share/minecraftbe
5. 启动扩展。
6. 检查扩展的日志以查看是否一切顺利。
7. 编辑你想要在 /share/minecraftbe/ 中的服务器/权限/白名单属性，并重启扩展。注意，你无法在 server.properties 中更改端口，因为它会被某些原因覆盖。然而，你可以在 Home Assistant 的扩展配置选项卡中更改端口。我只暴露了 IP4 端口。如果需要 IP6，请告诉我。
8. 如果你想要外部访问，确保将你的外部端口转发到你的 Home Assistant IP。

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
