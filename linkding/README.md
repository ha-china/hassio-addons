# Home assistant add-on: linkding

##  Introduction
linkding 是一个你可以自己托管的书签管理器。
它被设计得简洁、快速，并且使用 Docker 设置起来很容易。

它的名字来源于：
- *link*，在日常生活中通常用作 URL 和书签的同义词
- *Ding*，德语中的“东西”
- ...基本上就是用来管理你的链接的东西

**功能概述:**
- 清晰的用户界面，优化了可读性
- 使用标签组织书签
- 批量编辑、Markdown 笔记、稍后阅读功能
- 与其他用户或访客共享书签
- 自动提供书签网站的标题、描述和图标
- 自动归档网站，作为本地 HTML 文件或存档在互联网档案馆
- 导入和导出书签，使用 Netscape HTML 格式
- 可以作为渐进式网络应用 (PWA) 安装
- 扩展程序用于 [Firefox](https://addons.mozilla.org/firefox/addon/linkding-extension/) 和 [Chrome](https://chrome.google.com/webstore/detail/linkding-extension/beakmhbijpdhipnjhnclmhgjlddhidpe)，以及一个书签小工具
- 通过 OIDC 或认证代理支持单点登录 (SSO)
- 用于开发第三方应用的 REST API
- 管理员面板，用于用户自助服务和原始数据访问

_感谢大家给我的仓库星标！要星标它，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## About

这个 add-on 使用了 [docker 镜像](https://github.com/sissbruecker/linkding)。

有点耗内存。这个使用的是普通的 linkding 镜像，不是 plus 版本。如果你想要使用 plus 版本，下载 add-on 源代码，放在 /addons/ 目录下，编辑 config.json 文件，将版本改为 latest-plus 而不是版本号。

## Installation

这个 add-on 的安装过程非常简单，与其他任何 Hass.io add-on 的安装方式相同。

1. [将我的 Hass.io add-ons 仓库][repository] 添加到你的 Hass.io 实例。
1. 安装这个 add-on。
1. 点击 `Save` 按钮来保存你的配置。
1. 启动 add-on。
1. 检查 add-on 的日志，看看是否一切正常。
1. 应该可以通过 <your-ip>:port 打开 WebUI。
1. 设置将在 /addon_configs/2effc9b9_linkding 中。
1. 停止 add-on，编辑 settings.yaml 文件来更改任何你需要的东西

## Configuration
1. 你必须创建一个初始的超级用户账户。
1. 启动 add-on
1. 登录到 homeassistant cli
1. `docker ps | grep "link"`，复制第一个显示的十六进制字符串
1. `docker exec -it 3c32b108bd10 python manage.py createsuperuser --username=joe --email=joe@mail.com`
1. 输入密码，然后重启 add-on
```
port : 9090 #你想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons