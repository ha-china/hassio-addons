# Home assistant add-on: linkding

##  Introduction
linkding 是一个可以由你自行托管的收藏夹管理器。
它被设计得简约、快速，并易于使用 Docker 设置。

这个名字来源于：
- *link* 通常在常见语言中用作 URL 和收藏夹的同义词
- *Ding* 是德语中“事物”的意思
- 所以基本上是用来管理你的链接的东西

**功能概览:**
- 清晰的用户界面，优化可读性
- 使用标签组织收藏夹
- 批量编辑、Markdown 笔记、稍后阅读功能
- 与其他用户或访客共享收藏夹
- 自动提供收藏网站标题、描述和图标
- 自动存档网站，作为本地 HTML 文件或存档在互联网档案馆
- 导入和导出 Netscape HTML 格式的收藏夹
- 可作为渐进式网络应用 (PWA) 安装
- [Firefox](https://addons.mozilla.org/firefox/addon/linkding-extension/) 和 [Chrome](https://chrome.google.com/webstore/detail/linkding-extension/beakmhbijpdhipnjhnclmhgjlddhidpe) 的扩展，以及一个收藏夹小工具
- 通过 OIDC 或认证代理支持单点登录 (SSO)
- 用于开发第三方应用的 REST API
- 管理员面板，用于用户自助服务和原始数据访问

_感谢所有给我仓库星标的人！要星标它，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## About

这个 add-on 使用的是 [docker 镜像](https://github.com/sissbruecker/linkding)。

有点耗内存。这个使用的是常规的 linkding 镜像，不是 plus 版本。如果你想要使用 plus 版本，下载 add-on 源代码，放在 /addons/ 目录下，编辑 config.json 文件，将版本号改为 latest-plus 而不是具体版本号。

## Installation

这个 add-on 的安装非常简单，与安装任何其他 Hass.io add-on 没有区别。

1. [将我的 Hass.io add-ons 仓库][repository] 添加到你的 Hass.io 实例。
1. 安装这个 add-on。
1. 点击 `保存` 按钮来保存你的配置。
1. 启动 add-on。
1. 检查 add-on 的日志，看看是否一切正常。
1. 应该可以通过 <your-ip>:port 打开 WebUI。
1. 设置将在 /addon_configs/2effc9b9_linkding。
1. 停止 add-on，编辑 settings.yaml 文件来更改任何你需要的内容

## Configuration
1. 你必须创建一个初始的超级用户账户。
1. 启动 add-on
1. 登录到 homeassistant cli
1. `docker ps | grep "link"`，复制显示的第一个十六进制字符串
1. `docker exec -it 3c32b108bd10 python manage.py createsuperuser --username=joe --email=joe@mail.com`
1. 输入密码，然后重启 add-on
```
port : 9090 #你想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons