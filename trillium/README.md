# Home assistant add-on: Trillium
Trilium Notes 是一款侧重于构建大型个人知识库的分层笔记应用程序。

_感谢所有人给我的仓库点赞！点击下图中的图片即可点赞，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 功能特性

* 注子可以任意深度地组织成树状结构。单个注子可以被放置在树中的多个位置（参见 [克隆](https://github.com/zadam/trilium/wiki/Cloning-notes)）
* 功能丰富的所见即所得注子编辑，包括表格、图片或 [公式](https://github.com/zadam/trilium/wiki/Text-notes#math-support) 等，并支持 markdown 的 [自动格式化](https://github.com/zadam/trilium/wiki/Text-notes#autoformat)
* 支持编辑 [包含源代码的注子](https://github.com/zadam/trilium/wiki/Code-notes)，包括语法高亮
* 快速且便捷的 [注子间导航](https://github.com/zadam/trilium/wiki/Note-navigation)、全文搜索以及 [注子置顶](https://github.com/zadam/trilium/wiki/Note-hoisting)
* 丝滑的 [注子版本控制](https://github.com/zadam/trilium/wiki/Note-revisions)
* 注子 [属性](https://github.com/zadam/trilium/wiki/Attributes) 可用于注子组织、查询以及高级 [脚本](https://github.com/zadam/trilium/wiki/Scripts)
* 与自托管的同步服务器执行 [同步](https://github.com/zadam/trilium/wiki/Synchronization)
  * 有一个 [第三方服务用于托管同步服务器](https://trilium.cc/paid-hosting)
* [共享](https://github.com/zadam/trilium/wiki/Sharing)（发布）注子至公开互联网
* 强大的 [注子密码加密](https://github.com/zadam/trilium/wiki/Protected-notes)，粒度精细到单个注子
* 使用内置的 Excalidraw 绘制草图（注子类型 "canvas"）
* [关系图](https://github.com/zadam/trilium/wiki/Relation-map) 和 [链接图](https://github.com/zadam/trilium/wiki/Link-map)，用于可视化注子及其关系
* [脚本](https://github.com/zadam/trilium/wiki/Scripts) - 参见 [高级展示](https://github.com/zadam/trilium/wiki/Advanced-showcases)
* [REST API](https://github.com/zadam/trilium/wiki/ETAPI) 用于自动化
* 在 usability（可用性）和性能上均能扩展至超过 100,000 个注子
* 针对手机和平板优化的触摸友好型 [移动前端](https://github.com/zadam/trilium/wiki/Mobile-frontend)
* [夜间主题](https://github.com/zadam/trilium/wiki/Themes)
* [Evernote 导入](https://github.com/zadam/trilium/wiki/Evernote-import) 和 [Markdown 导入与导出](https://github.com/zadam/trilium/wiki/Markdown)
* [网页剪藏器](https://github.com/zadam/trilium/wiki/Web-clipper)，方便保存网页内容

## 安装

1. [添加我的 Hass.io add-ons 仓库][repository] 到您的 Hass.io 实例。
1. 安装此 add-on。
1. 点击 `Save` 按钮以保存您的配置。
1. 在您的 homeassistant 目录中创建 `/share/trillium/`
1. 使用 ssh 连接到您的 home assistant 并运行 `chmod 2777 /share/trillium`
1. 启动 add-on。
1. 检查 add-on 的日志以确认一切正常。
1. 访问您的本地 homeassistant IP 地址:端口 的管理端口或 ingress。
1. 按照指示操作

```{port}
port : 8000 #要运行管理界面的端口。
```

Webui 可在 `<your-ip>:port` 或 ingress 处找到。

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
