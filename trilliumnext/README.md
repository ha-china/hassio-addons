# Home assistant add-on: Trillium Next Notes
Trilium Next Notes 是一个层次化的笔记应用程序，专注于构建大型个人知识库。 
 
 
_感谢大家给我的仓库点赞！要点赞，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 功能

* 笔记可以排列成任意深度的树。单个笔记可以放在树中的多个位置（参见 [克隆](https://triliumnext.github.io/Docs/Wiki/cloning-notes)
* 丰富的所见即所得笔记编辑，包括例如表格、图片和 [数学](https://triliumnext.github.io/Docs/Wiki/text-notes) 以及使用 markdown 的 [自动格式化](https://triliumnext.github.io/Docs/Wiki/text-notes#autoformat)
* 支持 [带有源代码的笔记编辑](https://triliumnext.github.io/Docs/Wiki/code-notes)，包括语法高亮
* 快速便捷的 [笔记间导航](https://triliumnext.github.io/Docs/Wiki/note-navigation)，全文搜索和 [笔记提升](https://triliumnext.github.io/Docs/Wiki/note-hoisting)
* 无缝的 [笔记版本控制](https://triliumnext.github.io/Docs/Wiki/note-revisions)
* 笔记 [属性](https://triliumnext.github.io/Docs/Wiki/attributes) 可用于笔记组织、查询和高级 [脚本](https://triliumnext.github.io/Docs/Wiki/scripts)
* 与自托管同步服务 [同步](https://triliumnext.github.io/Docs/Wiki/synchronization)
  * 有一个 [第三方服务用于托管同步服务器](https://trilium.cc/paid-hosting)
* [共享](https://triliumnext.github.io/Docs/Wiki/sharing)（发布）笔记到公共互联网
* 强大的 [笔记加密](https://triliumnext.github.io/Docs/Wiki/protected-notes) ，每条笔记的粒度
* 使用内置的 Excalidraw 绘制草图图表（笔记类型“canvas”）
* [关系图](https://triliumnext.github.io/Docs/Wiki/relation-map) 和 [链接图](https://triliumnext.github.io/Docs/Wiki/link-map) 用于可视化笔记及其关系
* [脚本](https://triliumnext.github.io/Docs/Wiki/scripts) - 参见 [高级展示](https://triliumnext.github.io/Docs/Wiki/advanced-showcases)
* [REST API](https://triliumnext.github.io/Docs/Wiki/etapi) 用于自动化
* 在可用性和性能上均能很好地扩展超过 100,000 条笔记
* 专为触摸优化的 [移动前端](https://triliumnext.github.io/Docs/Wiki/mobile-frontend) 用于智能手机和平板电脑
* [夜间主题](https://triliumnext.github.io/Docs/Wiki/themes)
* [Evernote](https://triliumnext.github.io/Docs/Wiki/evernote-import) 和 [Markdown 导入和导出](https://triliumnext.github.io/Docs/Wiki/markdown)
* [Web Clipper](https://triliumnext.github.io/Docs/Wiki/web-clipper) 用于轻松保存网页内容


## 安装


1. [将我的 Hass.io add-ons 仓库][repository] 添加到您的 Hass.io 实例。
1. 安装此 add-on。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动 add-on。它可能会失败，这是正常的
1. ssh 进入您的 home assistant 并运行 `chmod 2777 /2effc9b9/trilliumnext`
1. 启动 add-on。
1. 检查 add-on 的日志以查看一切是否正常。
1. 转到您的本地 homeassistant IP:port 管理端口或 ingress。
1. 按照说明操作

```
port : 8000 #您想要在管理界面运行的端口。
```

Webui 可以在 `<your-ip>:port` 或 ingress 找到。

[repository]: https://github.com/jdeath/homeassistant-addons