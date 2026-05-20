# 家居助理插件：Trillium Next Notes
Trillium Next Notes 是一个面向构建大型个人知识库的层级式笔记应用。

_感谢所有为我点赞的人！要点赞，请点击下面的图片，然后它将出现在右上角。谢谢！_

![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 功能

* 笔记可以组织成任意深度的树形结构。单个笔记可以放置在树中的多个位置（见[克隆](https://triliumnext.github.io/Docs/Wiki/cloning-notes)）
* 富文本 WYSIWYG 笔记编辑，包括表格、图片和[数学](https://triliumnext.github.io/Docs/Wiki/text-notes)（支持 markdown [自动格式化](https://triliumnext.github.io/Docs/Wiki/text-notes#autoformat)）
* 支持编辑[带源代码的笔记](https://triliumnext.github.io/Docs/Wiki/code-notes)，包括语法高亮
* 快速便捷地在笔记之间[导航](https://triliumnext.github.io/Docs/Wiki/note-navigation)，全文搜索和[笔记提升](https://triliumnext.github.io/Docs/Wiki/note-hoisting)
* 无缝的[笔记版本控制](https://triliumnext.github.io/Docs/Wiki/note-revisions)
* 笔记[属性](https://triliumnext.github.io/Docs/Wiki/attributes)可用于笔记组织、查询和高级[脚本](https://triliumnext.github.io/Docs/Wiki/scripts)
* 与自托管同步服务器[同步](https://triliumnext.github.io/Docs/Wiki/synchronization)
  * 有第三方服务提供同步服务器托管[3rd party service for hosting synchronisation server](https://trilium.cc/paid-hosting)
* [分享](https://triliumnext.github.io/Docs/Wiki/sharing)（发布）笔记到公共互联网
* 强大的[笔记加密](https://triliumnext.github.io/Docs/Wiki/protected-notes)，支持按笔记粒度
* 使用内置的 Excalidraw（笔记类型“画布”）绘制图表
* [关系图](https://triliumnext.github.io/Docs/Wiki/relation-map)和[链接图](https://triliumnext.github.io/Docs/Wiki/link-map)用于可视化笔记及其关系
* [脚本](https://triliumnext.github.io/Docs/Wiki/scripts) - 见[高级展示](https://triliumnext.github.io/Docs/Wiki/advanced-showcases)
* [REST API](https://triliumnext.github.io/Docs/Wiki/etapi)用于自动化
* 在 10 万个笔记以上也能很好地在易用性和性能上进行扩展
* 优化了触控的[移动前端](https://triliumnext.github.io/Docs/Wiki/mobile-frontend)适用于智能手机和平板电脑
* [夜间主题](https://triliumnext.github.io/Docs/Wiki/themes)
* [Evernote](https://triliumnext.github.io/Docs/Wiki/evernote-import)和[Markdown 导入/导出](https://triliumnext.github.io/Docs/Wiki/markdown)
* [网页剪裁器](https://triliumnext.github.io/Docs/Wiki/web-clipper)方便保存网页内容


## 安装


1. 将我的 Hass.io 插件仓库[repository]添加到您的 Hass.io 实例中。
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。它会失败，这是正常的
1. 通过 ssh 连接到您的家庭助理并运行 `chmod 2777 /2effc9b9/trilliumnext`
1. 再次启动插件。
1. 检查插件的日志以查看一切是否正常。
1. 前往您的本地家庭助理 IP:port 管理端口或入口。
1. 按照指示操作

```
端口：8000 #您希望在此处运行管理界面的端口。
```

Webui 可以在 `<your-ip>:port` 或入口处找到。

[仓库地址]: https://github.com/jdeath/homeassistant-addons
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
