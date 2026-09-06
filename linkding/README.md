# Home assistant 附加组件：linkding

## 介绍
linkding 是一个你可以自行托管的书签管理工具。
它被设计为极简、快速，并易于使用 Docker 进行设置。

名称来源于：
- *link*（链接），在常用语言中常作为 URL 和书签的同义词
- *Ding*，德语中的“事物”
- …所以基本上是用来管理链接的工具

**特色概览：**
- 优化了可读性的简洁界面
- 使用标签组织书签
- 支持批量编辑、Markdown 笔记及稍后进行功能
- 共享书签与其他用户或访客
- 自动为书签的网站提供标题、描述和图标
- 自动归档网站，存储为本地 HTML 文件或互联网档案馆
- 支持导入和导出 Netscape HTML 格式的书签
- 可安装为渐进式 Web 应用（PWA）
- 支持 [Firefox](https://addons.mozilla.org/firefox/addon/linkding-extension/) 和 [Chrome](https://chrome.google.com/webstore/detail/linkding-extension/beakmhbijpdhipnjhnclmhgjlddhidpe) 的扩展，以及书签工具
- 通过 OIDC 或认证代理支持单点登录（SSO）
- 提供 REST API 用于开发第三方应用
- 管理面板供用户自助服务并访问原始数据

_感谢所有为我仓库 star 和支持的人！点击下方图片来 star，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件使用 [docker 镜像](https://github.com/sissbruecker/linkding)。

占用较多内存。此附加组件使用的是普通 linkding 镜像，而非 plus 版本。如果您想使用 plus 版本，请下载附加组件源码，放置到 `/addons/` 目录下，编辑 `config.json` 文件，将版本号改为 `latest-plus` 而非具体版本号。

## 安装

此附加组件的安装非常直截了当，与其他安装 Hass.io 附加组件的方式并无二致。

1. [将我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
2. 安装此附加组件。
3. 点击 `Save` 按钮以保存配置。
4. 启动附加组件。
5. 查看附加组件日志，确认是否一切正常。
6. 通过 `<your-ip>:port` 访问 WebUI 应该即可工作。
7. 设置文件位于 `/addon_configs/2effc9b9_linkding`。
8. 停止附加组件，编辑 `settings.yaml` 文件以更改任何您需要的设置。

## 配置

1. 您必须创建一个初始超级用户账户。
2. 启动附加组件
3. 登录 homeassistant CLI
4. `docker ps | grep "link"`，复制显示的第一个 Hex 字符串
5. docker exec -it 242c8b718e0b python manage.py createsuperuser --username=joe --email=joe@mail.com
6. 输入密码，然后重启附加组件
```yaml
port : 9090 # 您希望运行的端口。
```

WebUI 可以在 `<your-ip>:port` 处找到。

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
