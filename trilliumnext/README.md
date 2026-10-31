# Home assistant 附加组件：Trillium Next Notes
Trillium Next Notes 是一款专注于构建大型个人知识库的分层笔记应用。

_谢谢大家为我仓库点赞！想点赞请点击下方的图片，它将出现在右上角。谢谢！_

[![@jdeath/homeassistant-addons 仓库星级管理员名单](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 功能

*   笔记可以组织成任意深度的树状结构。单张笔记可以放置在树的多个位置（参见 [克隆](https://triliumnext.github.io/Docs/Wiki/cloning-notes)）
*   功能丰富的所见即所得（WYSIWYG）笔记编辑器，支持例如表格、图像以及 [数学](https://triliumnext.github.io/Docs/Wiki/text-notes) 公式，并具备 Markdown [自动格式化](https://triliumnext.github.io/Docs/Wiki/text-notes#autoformat) 功能
*   支持编辑 [包含源代码的笔记](https://triliumnext.github.io/Docs/Wiki/code-notes)，并提供语法高亮
*   快速便捷的 [笔记间导航](https://triliumnext.github.io/Docs/Wiki/note-navigation)，支持全文搜索和 [笔记置顶](https://triliumnext.github.io/Docs/Wiki/note-hoisting)
*   无缝的 [笔记版本管理](https://triliumnext.github.io/Docs/Wiki/note-revisions)
*   笔记 [属性](https://triliumnext.github.io/Docs/Wiki/attributes) 可用于笔记组织、查询和高级 [脚本](https://triliumnext.github.io/Docs/Wiki/scripts)
*   支持 [同步](https://triliumnext.github.io/Docs/Wiki/synchronization) 到自建同步服务器
    *   有一个 [第三方服务用于托管同步服务器](https://trilium.cc/paid-hosting)
*   支持将笔记 [公开分享](https://triliumnext.github.io/Docs/Wiki/sharing) 到公共互联网
*   支持强加密的 [笔记加密](https://triliumnext.github.io/Docs/Wiki/protected-notes)，粒度可至单笔记级别
*   内置 Excalidraw 用于绘制草图图纸（笔记类型 "canvas"）
*   [关系图谱](https://triliumnext.github.io/Docs/Wiki/relation-map) 和 [链接图谱](https://triliumnext.github.io/Docs/Wiki/link-map)，用于可视化笔记及其关联
*   [脚本](https://triliumnext.github.io/Docs/Wiki/scripts) - 参见 [高级演示](https://triliumnext.github.io/Docs/Wiki/advanced-showcases)
*   提供 [REST API](https://triliumnext.github.io/Docs/Wiki/etapi) 用于自动化
*   支持海量笔记（超过 100,000 条），在易用性和性能方面均可良好扩展
*   针对智能手机和平板电脑优化的 [移动端前端](https://triliumnext.github.io/Docs/Wiki/mobile-frontend)
*   [深色模式主题](https://triliumnext.github.io/Docs/Wiki/themes)
*   支持 [Evernote](https://triliumnext.github.io/Docs/Wiki/evernote-import) 导入和 [Markdown 导入/导出](https://triliumnext.github.io/Docs/Wiki/markdown)
*   [网页剪藏器](https://triliumnext.github.io/Docs/Wiki/web-clipper)，方便保存网页内容

## 安装

1.   [将我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例。
2.   安装此附加组件。
3.   点击 `Save` 按钮以保存配置。
4.   启动附加组件。它可能会失败，这没关系。
5.   使用 ssh 连接到您的 Home Assistant 并运行 `chmod 2777 /2effc9b9/trilliumnext`
6.   再次启动附加组件。
7.   检查附加组件的日志，确认一切是否正常运行。
8.   访问您的本地 Home Assistant IP:端口管理端口或 Ingress。
9.   按照指示操作

```
port : 8000 # 您希望管理界面运行在此端口。
```

用户界面（Webui）可在 `<your-ip>:port` 或 Ingress 处访问。

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
