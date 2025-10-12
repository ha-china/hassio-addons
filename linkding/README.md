# Home assistant add-on: linkding

##  简介
linkding 是一个你可以自行托管的收藏夹管理器。
它被设计得简约、快速，并易于使用 Docker 设置。

这个名字来源于：
- *link* 通常用作 URL 和收藏夹的通用语言同义词
- *Ding* 是德语中“事物”的意思
- 所以基本上是用来管理你的链接的工具

**功能概览:**
- 清晰的 UI，优化了可读性
- 使用标签组织收藏夹
- 批量编辑、Markdown 笔记、稍后阅读功能
- 与其他用户或访客共享收藏夹
- 自动提供收藏网站标题、描述和图标
- 自动归档网站，作为本地 HTML 文件或存档在 Internet Archive
- 导入和导出 Netscape HTML 格式的收藏夹
- 可作为渐进式 Web 应用 (PWA) 安装
- 扩展支持 [Firefox](https://addons.mozilla.org/firefox/addon/linkding-extension/) 和 [Chrome](https://chrome.google.com/webstore/detail/linkding-extension/beakmhbijpdhipnjhnclmhgjlddhidpe)，以及一个收藏夹小工具
- 通过 OIDC 或认证代理支持单点登录 (SSO)
- REST API 用于开发第三方应用
- 管理面板用于用户自助服务和原始数据访问

_感谢大家给我的仓库星标！要星标它，点击下面的图片，然后它就会在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个 add-on 使用了 [docker 镜像](https://github.com/sissbruecker/linkding)。

有点耗内存。这个使用的是常规的 linkding 镜像，不是 plus 版本。如果你想使用 plus 版本，下载 add-on 源代码，放在 /addons/ 中，编辑 config.json 将版本改为 latest-plus 而不是版本号。

## 安装

这个 add-on 的安装非常简单，与安装任何其他 Hass.io add-on 没有区别。

1. 将我的 Hass.io add-ons 仓库 [repository] 添加到你的 Hass.io 实例。
1. 安装这个 add-on。
1. 点击 `保存` 按钮来存储你的配置。
1. 启动 add-on。
1. 检查 add-on 的日志，看看是否一切正常。
1. WebUI 应该可以通过 <your-ip>:port 访问。
1. 设置将在 /addon_configs/2effc9b9_linkding 中。
1. 停止 add-on，编辑 settings.yaml 文件来更改任何你需要的内容

## 配置
1. 你必须创建一个初始超级用户账户。
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