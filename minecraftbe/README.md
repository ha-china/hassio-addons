# Home Assistant 补充包：Minecraft 专属服务器基岩版
在 Home Assistant 上运行 Minecraft 专属服务器基岩版的快捷方式。

_感谢为我的仓库点赞过星的所有人！要通过下方的图片为其点星，它将被置于右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该补充包使用 [itzg/docker-minecraft-bedrock-server](https://github.com/itzg/docker-minecraft-bedrock-server/) Docker 镜像。

重启动补充包时，它将自动获取 minecraft 的最新版本。

您的世界、设置和服务器可执行文件存储在 /share/minecraftbe 目录中。

您可能希望在半夜创建一个服务来重启动补充包，以便更新 minecraft 版本（参见下方）。

如果您想在 Home Assistant 中监控您的基岩服务器，请安装此集成，因为内置集成仅监控 Java 版：https://github.com/jdeath/Bedrock-Homeassistant

## 安装

此补充包的安装非常简单，与其他 Hass.io 补充包的安装方式相比并无不同。

1. [将我的 Hass.io 补充包仓库][repository] 添加到您的 Hass.io 实例中。
2. 安装此补充包。
3. 如果需要，更改 API 端口（默认为标准的 minecraft 端口）。
4. 点击 `保存` 按钮以存储您的配置。
5. 创建目录 /share/minecraftbe。
6. 启动补充包。
7. 检查补充包的日志，确认一切是否顺利。
8. 编辑 /share/minecraftbe/ 中您想要修改的服务器/权限/白名单属性，并重启补充包。注意您无法更改 port.properties 中的端口，因为它会因某些原因被覆盖。您可以在 Home Assistant 的补充包配置选项中更改端口。我只暴露了 IP4 端口。如果需要 IP6，请告诉我。
9. 如果您需要外部访问，请确保将外部端口转发到您的 Home Assistant 的 IP 地址。

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

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
