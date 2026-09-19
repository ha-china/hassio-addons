# Home assistant 附加组件：linkding

## 简介

linkding 是一个您可以自行托管的书签管理器。

它的设计目标是简洁、快速，并易于使用 Docker 进行设置。

名称来源于：
- *link*：在通用语言中，这个词经常与网址和书签作为同义词使用
- *Ding*：德语中的“事物”
- ...所以基本上是一个用于管理链接的工具

**功能概览：**
- 针对可读性优化的简洁 UI
- 使用标签组织书签
- 批量编辑、Markdown 注释、稍后读功能
- 与其他用户或客人共享书签
- 自动提供书签网站的书名、简介和图标
- 自动归档网站，作为本地 HTML 文件或互联网档案馆文件存储
- 以 Netscape HTML 格式导入和导出书签
- 可作为渐进式 Web 应用 (PWA) 安装
- 适用于 [Firefox](https://addons.mozilla.org/firefox/addon/linkding-extension/) 和 [Chrome](https://chrome.google.com/webstore/detail/linkding-extension/beakmhbijpdhipnjhnclmhgjlddhidpe) 的插件，以及书签工具
- 通过 OIDC 或认证代理支持单点登录 (SSO)
- 提供 REST API 用于开发第三方应用
- 管理员面板用于用户自助服务和原始数据访问

_感谢大家星标我的仓库！要星标它，请点击下方的图片，然后它将显示在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件使用了 [docker 镜像](https://github.com/sissbruecker/linkding)。

这是一个内存占用较大的应用。此应用使用的是常规版本的 linkding 镜像，而不是 plus 版本。如果您想使用 plus 版本，请下载附加组件源码，将其放置在 /addons/ 目录中，编辑 config.json 文件将版本从版本号更改为 latest-plus。

## 安装

这个附加组件的安装过程非常直接，与安装任何其他 Hass.io 附加组件没有区别。

1. [添加我的 Hass.io 附加组件仓库][repository] 到您的 Hass.io 实例。
2. 安装此附加组件。
3. 点击 `保存` 按钮以保存您的配置。
4. 启动附加组件。
5. 检查附加组件的日志，确认一切顺利。
6. WebUI 将通过 <your-ip>:port 地址可用。
7. 设置文件位于 /addon_configs/2effc9b9_linkding
8. 停止附加组件，编辑 settings.yaml 文件以更改任何所需内容

## 配置

1. 必须创建一个初始超级用户帐户。
2. 启动附加组件
3. 登录 homeassistant cli
4. `docker ps | grep "link"`，复制显示的第一个十六进制字符串
5. docker exec -it 3c32b108bd10 python manage.py createsuperuser --username=joe --email=joe@mail.com
6. 输入密码，然后重启附加组件

```
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
