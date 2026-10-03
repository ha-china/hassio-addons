# Home assistant 插件：Trillium Next Notes
Trillium Next Notes 是一个分层笔记应用程序，专注于构建大型个人知识库。  

_感谢所有给我仓库点赞的人！要点赞，请点击下方的图片，它将显示在右上角。谢谢你们！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 功能特性

* 笔记可以任意深度地组织成树状结构。单个笔记可以放置在树状结构中的多个位置（详见 [克隆](https://triliumnext.github.io/Docs/Wiki/cloning-notes)）
* 包含丰富的所见即所得（WYSIWYG）笔记编辑功能，支持例如表格、图片和带有 Markdown [自动格式化](https://triliumnext.github.io/Docs/Wiki/text-notes#autoformat) 的数学公式 [编辑](https://triliumnext.github.io/Docs/Wiki/text-notes)
* 支持使用 [源代码编写笔记](https://triliumnext.github.io/Docs/Wiki/code-notes)，包括语法高亮
* 快速且易于 [在笔记之间切换](https://triliumnext.github.io/Docs/Wiki/note-navigation)，支持全文搜索和 [笔记提升](https://triliumnext.github.io/Docs/Wiki/note-hoisting)
* 支持无缝的 [笔记版本管理](https://triliumnext.github.io/Docs/Wiki/note-revisions)
* 笔记 [属性](https://triliumnext.github.io/Docs/Wiki/attributes) 可用于笔记组织、查询和高级 [脚本编写](https://triliumnext.github.io/Docs/Wiki/scripts)
* 支持与自托管同步服务器进行 [同步](https://triliumnext.github.io/Docs/Wiki/synchronization)
  * 有一个 [第三方服务用于托管同步服务器](https://trilium.cc/paid-hosting)
* 支持将 [笔记（公开分享）](https://triliumnext.github.io/Docs/Wiki/sharing) 发布到公共互联网
* 提供强大的 [笔记加密](https://triliumnext.github.io/Docs/Wiki/protected-notes) 功能，支持按单个笔记粒度加密
* 内置 Excalidraw 用于绘制草图，并支持“画布”类型的笔记
* 提供 [关系图](https://triliumnext.github.io/Docs/Wiki/relation-map) 和 [链接图](https://triliumnext.github.io/Docs/Wiki/link-map) 用于可视化笔记及其关系
* 提供 [脚本编写](https://triliumnext.github.io/Docs/Wiki/scripts) 功能 - 详见 [高级展示案例](https://triliumnext.github.io/Docs/Wiki/advanced-showcases)
* 提供 [REST API](https://triliumnext.github.io/Docs/Wiki/etapi) 用于自动化
* 在可用性和性能方面均可扩展到超过 100,000 个笔记
* 专为智能手机和平板电脑优化的 [触控友好移动端前端](https://triliumnext.github.io/Docs/Wiki/mobile-frontend)
* 支持 [夜间主题](https://triliumnext.github.io/Docs/Wiki/themes)
* 支持 [Evernote](https://triliumnext.github.io/Docs/Wiki/evernote-import) 和 [Markdown 导入/导出](https://triliumnext.github.io/Docs/Wiki/markdown)
* 提供 [网页剪藏器](https://triliumnext.github.io/Docs/Wiki/web-clipper) 方便保存网页内容

## 安装

1. 将 [我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
2. 安装此插件。
3. 点击 `保存` 按钮以保存配置。
4. 启动插件。它可能会失败，这没问题。
5. 通过 SSH 登录到您的 Home Assistant 并运行 `chmod 2777 /2effc9b9/trilliumnext`
6. 再次启动插件。
7. 查看插件日志以确认一切是否正常。
8. 访问您的本地 Home Assistant 的 IP:端口管理界面或 Ingress。
9. 按照指示操作

```
port : 8000 # 您希望运行管理界面的端口。
```

Web 界面位于 `<your-ip>:port` 或 Ingress 中。

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
