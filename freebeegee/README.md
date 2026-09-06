# 家庭助手插件：FreeBeeGee

# FreeBeeGee

一个可以在自己的服务器上托管的虚拟游戏桌面。

你的游戏。你的数据。

## 主要特征

* 基于浏览器的2D虚拟桌面，适用于桌面和角色扮演游戏。
* 易于使用的拖放界面，适合高级用户的键盘快捷键。
* 通过发送房间的唯一 URL 邀请朋友。房间密码可选。
* 每个房间多个桌子。可用于不同的游戏设置或地下城级别。
* 瓦片/网格基础，支持方形和六边形布局，并具有对齐功能。
* 包含经典游戏板、地下城瓦片和200多个怪物代币。也可以上传你自己的。
* 瓦片、贴纸和代币的单独图层。
* 代币/瓦片的资产浏览器。每个房间/游戏都有单独的库。
* 便利贴和骰子托盘。
* 设置桌子的模板，以及填充库的模板。
* 下载房间的快照/保存游戏，在服务器之间传输或保留离线备份。
* 隐私友好。没有用户跟踪。没有第三方脚本。房间在一段时间后被删除（可配置），通常为48小时。
* 基于文件和文件夹。不需要数据库。易于安装。
* 开源软件（AGPL-3.0）。服务器/API 使用 PHP 编写，客户端使用 JavaScript 编写。

_感谢所有给我的仓库点过星的人！点击下面的图片进行点赞，它会在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用 [docker 镜像](https://github.com/ludus-leonis/FreeBeeGee)。

## 安装

安装此插件非常简单，没有区别于安装其他任何 Hass.io 插件。

1. [将我的 Hass.io 插件仓库][repository] 添加到你的 Hass.io 实例。
1. 点击 `Save` 按钮以保存你的配置。
1. 启动插件。
1. 检查插件的日志，看一切是否顺利。
1. WebUI 应该可以通过 <your-ip>:port 访问。
1. 设置将在 `/addon_configs/2effc9b9_freebeegee` 中。
1. Web 界面应该提示你设置管理员密码。创建密码并将其粘贴到 `/addon_configs/2effc9b9_freebeegee/server.json` 的正确字段中。

## 配置

```
port : 8080 #你想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons