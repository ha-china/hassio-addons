# Home Assistant 插件：Trillium

Trilium Notes 是一个面向构建大型个人知识库的分层笔记应用。

_感谢所有给我仓库点星的人！要点星，请点击下面的图片，然后它就会显示在右上角。谢谢！_

![@jdeath/homeassistant-addons 星标仓库列表](https://reporoster.com/stars/jdeath/homeassistant-addons)(https://github.com/jdeath/homeassistant-addons/stargazers)

## 功能

* 笔记可以排列成任意深度的树状结构。单个笔记可以放置在树的多个位置（参见[克隆笔记](https://github.com/zadam/trilium/wiki/Cloning-notes))
* 富文本 WYSIWYG 笔记编辑，包括表格、图片和[数学支持](https://github.com/zadam/trilium/wiki/Text-notes#math-support)以及 markdown [自动格式化](https://github.com/zadam/trilium/wiki/Text-notes#autoformat)
* 支持[源代码笔记](https://github.com/zadam/trilium/wiki/Code-notes)的编辑，包括语法高亮
* 快速便捷地在笔记之间[导航](https://github.com/zadam/trilium/wiki/Note-navigation)，全文搜索和[笔记提升](https://github.com/zadam/trilium/wiki/Note-hoisting)
* 无缝的[笔记版本控制](https://github.com/zadam/trilium/wiki/Note-revisions)
* 笔记[属性](https://github.com/zadam/trilium/wiki/Attributes)可用于笔记组织、查询和高级[脚本](https://github.com/zadam/trilium/wiki/Scripts)
* 与自托管同步服务器[同步](https://github.com/zadam/trilium/wiki/Synchronization)
  * 有一个[第三方服务用于托管同步服务器](https://trilium.cc/paid-hosting)
* [分享](https://github.com/zadam/trilium/wiki/Sharing)（发布）笔记到公网
* 强大的[笔记加密](https://github.com/zadam/trilium/wiki/Protected-notes)具有按笔记粒度
* 使用内置的 Excalidraw（笔记类型“画布”）绘制图表
* [关系图](https://github.com/zadam/trilium/wiki/Relation-map)和[链接图](https://github.com/zadam/trilium/wiki/Link-map)用于可视化笔记及其关系
* [脚本](https://github.com/zadam/trilium/wiki/Scripts) - 查看[高级展示](https://github.com/zadam/trilium/wiki/Advanced-showcases)
* [REST API](https://github.com/zadam/trilium/wiki/ETAPI)用于自动化
* 在 10 万个笔记以上具有良好的可用性和性能
* 优化了触摸操作的[移动前端](https://github.com/zadam/trilium/wiki/Mobile-frontend)适用于智能手机和平板电脑
* [夜间主题](https://github.com/zadam/trilium/wiki/Themes)
* [Evernote](https://github.com/zadam/trilium/wiki/Evernote-import)和[Markdown 导入导出](https://github.com/zadam/trilium/wiki/Markdown)
* [网页剪裁器](https://github.com/zadam/trilium/wiki/Web-clipper)方便保存网页内容


## 安装


1. 将我的 Hass.io 插件仓库[repository][repository]添加到您的 Hass.io 实例中。
1. 安装此插件。
1. 点击`保存`按钮以存储您的配置。
1. 在您的 homeassistant 上创建目录 `/share/trillium/`
1. 使用 ssh 登录到您的 home assistant 并运行 `chmod 2777 /share/trillium`
1. 启动插件。
1. 检查插件的日志以查看是否一切顺利。
1. 前往您本地的 homeassistant IP:port 管理端口或入口。
1. 按照说明进行操作

```
端口 : 8000 #您想运行管理界面的端口号。
```

Webui 可以在 `<your-ip>:port` 或入口中找到。

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
