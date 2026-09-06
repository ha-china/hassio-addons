# 家庭助理插件: MedAssist

MedAssist 是一个简单的 Node.js 应用程序，旨在帮助我的伴侣管理他们的日常药物。它使跟踪药物库存变得容易，并通过发送提醒来确保按时重新订购。如果你不确定是否已服用某剂量，只需检查仪表板，并比较预期库存与实际数量可以帮助确认。对于旅行，MedAssist 可以轻松生成一份所有必要药物的快速清单，以便在你外出时使用。

## 特性
如果你定期服用至少一种药物，这个应用程序可能会对你有帮助。但如果你管理多种药物且有复杂的时间表，你可能会更加享受这个应用。

- 跟踪药物库存，准确知道何时重新订购
- 当供应不足时接收电子邮件提醒
- 生成自定义的旅行药物清单，包括所需的数量和时间段（可选择通过电子邮件发送）
- 简单的仪表板显示药物状态和即将到来的时间表
- 用户友好的网页界面，便于药物管理和配置

_感谢所有给我的仓库加星的人！要加星，请点击下方图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用了 [docker 镜像](https://github.com/njic/medassist/releases)。

## 安装

此插件的安装非常简单，与安装其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库][repository] 添加到你的 Hass.io 实例。
1. 点击 `保存` 按钮以存储你的配置。
1. 启动插件。
1. 检查插件的日志以确保一切正常。
1. 打开 WebUI 应该通过 <your-ip>:port 工作。
1. 设置将在 /addon_configs/2effc9b9_medassist 中。

## 配置

```
port : 3111 #你想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons