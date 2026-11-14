# Home Assistant 附加组件：Trillium Next Notes
Trillium Next Notes 是一款层次化笔记应用程序，专注于构建大型个人知识库。

_感谢所有人给我的仓库点赞！要点赞请点击下图，它将被显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 功能特性

* 笔记可以排列成任意深度的树状结构。单个笔记可以放置在树的多个位置（参见 [克隆](https://triliumnext.github.io/Docs/Wiki/cloning-notes)）
* 功能丰富的所见即所得（WYSIWYG）笔记编辑，支持例如表格、图片以及带有 Markdown [自动格式化](https://triliumnext.github.io/Docs/Wiki/text-notes#autoformat) 的 [公式](https://triliumnext.github.io/Docs/Wiki/text-notes)
* 支持编辑 [包含源代码的笔记](https://triliumnext.github.io/Docs/Wiki/code-notes)，并包含语法高亮
* 快速且易于使用的 [笔记导航](https://triliumnext.github.io/Docs/Wiki/note-navigation)，全文搜索和 [笔记提升](https://triliumnext.github.io/Docs/Wiki/note-hoisting)
* 无缝的 [笔记版本控制](https://triliumnext.github.io/Docs/Wiki/note-revisions)
* 笔记 [属性](https://triliumnext.github.io/Docs/Wiki/attributes) 可用于笔记组织、查询和高级 [脚本](https://triliumnext.github.io/Docs/Wiki/scripts)
* 与自托管同步服务器进行 [同步](https://triliumnext.github.io/Docs/Wiki/synchronization)
  * 有一个 [用于托管同步服务的第三方服务](https://trilium.cc/paid-hosting)
* 可以将笔记 [共享](https://triliumnext.github.io/Docs/Wiki/sharing)（发布）到公共互联网
* 支持按笔记粒度进行强大的 [笔记加密](https://triliumnext.github.io/Docs/Wiki/protected-notes)
* 使用内置的 Excalidraw 绘制草图（笔记类型："画布"）
* [关系图](https://triliumnext.github.io/Docs/Wiki/relation-map) 和 [链路图](https://triliumnext.github.io/Docs/Wiki/link-map) 用于可视化笔记及其关系
* [脚本](https://triliumnext.github.io/Docs/Wiki/scripts) - 参见 [高级展示](https://triliumnext.github.io/Docs/Wiki/advanced-showcases)
* [REST API](https://triliumnext.github.io/Docs/Wiki/etapi) 用于自动化
* 支持和性能可扩展，可轻松承载数量超过 100,000 的笔记
* 针对智能手机和平板电脑优化的 touch 界面 [移动前端](https://triliumnext.github.io/Docs/Wiki/mobile-frontend)
* [深色主题](https://triliumnext.github.io/Docs/Wiki/themes)
* 支持 [Evernote](https://triliumnext.github.io/Docs/Wiki/evernote-import) 和 [Markdown 导入与导出](https://triliumnext.github.io/Docs/Wiki/markdown)
* [网页剪藏器](https://triliumnext.github.io/Docs/Wiki/web-clipper) 用于轻松保存网页内容

## 安装

1. [将我添加的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存配置。
1. 启动附加组件。它将失败，这没关系。
1. `ssh` 到您的 Home Assistant 并运行 `chmod 2777 /2effc9b9/trilliumnext`
1. 启动附加组件。
1. 检查附加组件日志以查看一切是否正常。
1. 访问您本地 homeassistant IP:port 管理端口或入口地址。
1. 遵循指示

```
port : 8000 # 您要运行的管理接口端口。
```

Webui 可在 `<your-ip>:port` 或入口处找到。

[repository]: https://github.com/jdeath/homeassistant-addons

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
