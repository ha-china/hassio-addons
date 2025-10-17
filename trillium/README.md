# Home assistant add-on: Trillium
Trilium Notes 是一款分层笔记应用，专注于构建大型个人知识库。 


_感谢大家给我的仓库点赞！要点赞请点击下面的图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 功能

* 笔记可以排列成任意深度的树形结构。单个笔记可以放置在树中的多个位置（参见 [克隆](https://github.com/zadam/trilium/wiki/Cloning-notes)）
* 丰富的所见即所得笔记编辑，包括例如表格、图片和 [数学](https://github.com/zadam/trilium/wiki/Text-notes#math-support) 支持以及 markdown [自动格式化](https://github.com/zadam/trilium/wiki/Text-notes#autoformat)
* 支持 [带有源代码的笔记编辑](https://github.com/zadam/trilium/wiki/Code-notes)，包括语法高亮
* 快速简便的 [笔记间导航](https://github.com/zadam/trilium/wiki/Note-navigation)，全文搜索和 [笔记提升](https://github.com/zadam/trilium/wiki/Note-hoisting)
* 无缝的 [笔记版本控制](https://github.com/zadam/trilium/wiki/Note-revisions)
* 笔记 [属性](https://github.com/zadam/trilium/wiki/Attributes) 可用于笔记组织、查询和高级 [脚本编写](https://github.com/zadam/trilium/wiki/Scripts)
* 与自托管同步服务 [同步](https://github.com/zadam/trilium/wiki/Synchronization)
  * 有一个 [第三方服务用于托管同步服务器](https://trilium.cc/paid-hosting)
* [分享](https://github.com/zadam/trilium/wiki/Sharing)（发布）笔记到公共互联网
* 强大的 [笔记加密](https://github.com/zadam/trilium/wiki/Protected-notes) ，支持每个笔记的粒度
* 使用内置的 Excalidraw 绘制草图图表（笔记类型“画布”）
* [关系图](https://github.com/zadam/trilium/wiki/Relation-map) 和 [链接图](https://github.com/zadam/trilium/wiki/Link-map) 用于可视化笔记及其关系
* [脚本编写](https://github.com/zadam/trilium/wiki/Scripts) - 参见 [高级展示](https://github.com/zadam/trilium/wiki/Advanced-showcases)
* [REST API](https://github.com/zadam/trilium/wiki/ETAPI) 用于自动化
* 在可用性和性能上都能很好地扩展超过 100,000 条笔记
* 触摸优化的 [移动前端](https://github.com/zadam/trilium/wiki/Mobile-frontend) 用于智能手机和平板电脑
* [夜间主题](https://github.com/zadam/trilium/wiki/Themes)
* [Evernote](https://github.com/zadam/trilium/wiki/Evernote-import) 和 [Markdown 导入和导出](https://github.com/zadam/trilium/wiki/Markdown)
* [Web Clipper](https://github.com/zadam/trilium/wiki/Web-clipper) 用于轻松保存网页内容


## 安装


1. [将我的 Hass.io 插件仓库][repository] 添加到你的 Hass.io 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以保存你的配置。
1. 在你的 homeassistant 上创建目录 `/share/trillium/`
1. 通过 ssh 登录到你的 home assistant 并运行 `chmod 2777 /share/trillium`
1. 启动插件。
1. 检查插件的日志以查看是否一切顺利。
1. 前往你的本地 homeassistant IP:端口 管理端口或 ingress。
1. 按照说明操作

```
port : 8000 #你想在 admin 界面上运行的端口。
```

Webui 可以在 `<你的 IP>:端口` 或 ingress 找到。

[repository]: https://github.com/jdeath/homeassistant-addons