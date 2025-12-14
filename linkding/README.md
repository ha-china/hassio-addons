# Home assistant add-on: linkding

##  Introduction
linkding 是一个你可以自行托管的收藏夹管理器。
它设计得简约、快速，并且使用 Docker 就能轻松设置。

它的名字来源于：
- *link*，在日常生活中通常用作 URL 和收藏夹的同义词
- *Ding*，德语中意为“东西”
- 所以基本上就是为了管理你的链接

**功能概览:**
- 清晰的 UI，优化了可读性
- 使用标签组织收藏夹
- 批量编辑、Markdown 笔记、稍后阅读功能
- 与其他用户或访客分享收藏夹
- 自动提供收藏网站标题、描述和图标
- 自动归档网站，可以是本地 HTML 文件或存档在 Internet Archive
- 以 Netscape HTML 格式导入和导出收藏夹
- 可作为渐进式网络应用 (PWA) 安装
- 扩展支持 [Firefox](https://addons.mozilla.org/firefox/addon/linkding-extension/) 和 [Chrome](https://chrome.google.com/webstore/detail/linkding-extension/beakmhbijpdhipnjhnclmhgjlddhidpe)，以及一个收藏夹小工具
- 通过 OIDC 或认证代理支持单点登录 (SSO)
- REST API 用于开发第三方应用
- 管理面板，用于用户自助服务和原始数据访问

_感谢大家给我的仓库星标！要星标它，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## About

这个 add-on 使用的是 [docker 镜像](https://github.com/sissbruecker/linkding)。

有点耗内存。这个使用的是常规的 linkding 镜像，不是 plus 版本。如果你想要使用 plus 版本，下载 add-on 源代码，放到 /addons/ 目录下，编辑 config.json 文件，将版本号改为 latest-plus 而不是具体的版本号。

## Installation

这个 add-on 的安装非常简单，与其他任何 Hass.io add-on 的安装方式相同。

1. 将我的 Hass.io add-ons 仓库 [repository] 添加到你的 Hass.io 实例。
1. 安装这个 add-on。 
1. 点击 `Save` 按钮保存你的配置。
1. 启动 add-on。
1. 检查 add-on 的日志，看看一切是否正常。
1. 通过 <your-ip>:port 应该可以打开 WebUI。
1. 设置将在 /addon_configs/2effc9b9_linkding 中。
1. 停止 add-on，编辑 settings.yaml 文件来更改你需要的任何设置

## Configuration
1. 你必须创建一个初始的超级用户账户。 
1. 启动 add-on
1. 登录到 homeassistant cli
1. `docker ps | grep "link"`, 复制第一个显示的十六进制字符串
1. docker exec -it 3c32b108bd10 python manage.py createsuperuser --username=joe --email=joe@mail.com
1. 输入密码，然后重启 add-on
```
port : 9090 #你想运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

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
