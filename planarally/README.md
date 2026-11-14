# Home assistant 插件：PlanarAlly

# PlanarAlly

当你前往平界旅行时的伴侣工具。

PlanarAlly 是一个网站工具，它为你们的 TTRPG/D&D 工具箱添加了带有各种附加功能的虚拟战斗地图。

一些主要功能包括：

**本地托管**：您可以在任何地方运行此软件，无需依赖外部服务  
**离线支持**：在黑暗中玩 D&D 时，可以在完全离线的环境中使用该工具  

**简单的图层**：按图层组织您的场景，以便更容易管理  
**无限画布**：即使有限的工作空间也不够用时依然有用！  
**动态光照**：通过处理光影来提升沉浸感  
**玩家视线**：限制视野以仅查看你的标记（令牌）可以看见的内容。你的伴侣在不同的房间，对您来说没有光！  
**先攻追踪器**：简单的先攻追踪器  
**楼层！**：站在阳台上时，向下看低楼层！

本工具免费提供使用，并且是开源的。

_感谢所有给我仓库 starred 的人！要 star 它，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该插件使用了 [docker 镜像](https://github.com/Kruptein/PlanarAlly)。

## 安装

该插件的安装需要多几个步骤。

1. [将我添加的 Home Assistant 插件仓库](https://github.com/jdeath/homeassistant-addons) 添加到您的 Home Assistant 实例中。
1. 点击 `保存` 按钮以保存配置。
1. 启动插件。
1. 它会失败，这没关系
1. 配置位于 `/addon_configs/2effc9b9_plannarally`
1. ssh 进入 homeassistant，输入 `chmod 2777 addon_configs/2effc9b9_plannarally`
1. 启动插件，它会启动，然后停止插件。
1. 编辑 `/addon_configs/2effc9b9_plannarally/server_config.cfg`
1. 在 `[General]` 下将以下两行设置为：

```
save_file = /config/planar.sqlite
assets_directory = /config/assets
```
1. 重启插件
1. 打开 Web UI，应该可以通过 `<your-ip>:port` 访问。

## 配置

```
port : 8080 #您希望运行的端口。
```

Web UI 位于 `<your-ip>:port`。

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
