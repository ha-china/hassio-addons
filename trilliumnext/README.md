# Home Assistant 插件：Trillium Next Notes
Trillium Next Notes 是一款专注于构建大型个人知识库的分层笔记应用程序。

_感谢所有对仓库 starred 的朋友们！点击下图中的图片即可 star 它，它将被显示在右上角。感谢大家！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 功能特性

*   笔记可以排列成任意深度的树状结构。单个笔记可以放置在树的多个位置（参见 [克隆](https://triliumnext.github.io/Docs/Wiki/cloning-notes)）
*   功能丰富的所见即所得（WYSIWYG）笔记编辑功能，支持例如表格、图片和带 markdown [自动格式化](https://triliumnext.github.io/Docs/Wiki/text-notes#autoformat) 的数学公式
*   支持编辑 [代码笔记](https://triliumnext.github.io/Docs/Wiki/code-notes)，包括代码高亮显示
*   快速便捷的 [笔记间导航](https://triliumnext.github.io/Docs/Wiki/note-navigation)、全文搜索和 [笔记提升](https://triliumnext.github.io/Docs/Wiki/note-hoisting)
*   无缝的 [笔记版本管理](https://triliumnext.github.io/Docs/Wiki/note-revisions)
*   笔记 [属性](https://triliumnext.github.io/Docs/Wiki/attributes) 可用于笔记组织、查询和高级 [脚本](https://triliumnext.github.io/Docs/Wiki/scripts)
*   与自建同步服务器的 [同步](https://triliumnext.github.io/Docs/Wiki/synchronization) 功能
    *   有一个 [第三方服务提供同步服务器托管](https://trilium.cc/paid-hosting)
*   [共享](https://triliumnext.github.io/Docs/Wiki/sharing)（发布）笔记到公共互联网
*   强大的 [笔记加密](https://triliumnext.github.io/Docs/Wiki/protected-notes) 功能，具有细粒度的单个笔记级保护
*   使用内置的 Excalidraw 绘制草图（笔记类型 "canvas"）
*   [关系图](https://triliumnext.github.io/Docs/Wiki/relation-map) 和 [链接图](https://triliumnext.github.io/Docs/Wiki/link-map) 用于可视化笔记及其关系
*   [脚本](https://triliumnext.github.io/Docs/Wiki/scripts) - 参见 [高级演示](https://triliumnext.github.io/Docs/Wiki/advanced-showcases)
*   [REST API](https://triliumnext.github.io/Docs/Wiki/etapi) 用于自动化
*   可扩展性极佳，用户友好性和性能方面均能支持多达 10 万条笔记
*   针对智能手机和平板电脑优化的 [移动端前端](https://triliumnext.github.io/Docs/Wiki/mobile-frontend)
*   [暗夜主题](https://triliumnext.github.io/Docs/Wiki/themes)
*   [Evernote](https://triliumnext.github.io/Docs/Wiki/evernote-import) 和 [Markdown 导入与导出](https://triliumnext.github.io/Docs/Wiki/markdown)
*   [网页剪藏器](https://triliumnext.github.io/Docs/Wiki/web-clipper) 方便保存网页内容

## 安装

1.  将我的 Hass.io 插件仓库 `[repository]` 添加到您的 Hass.io 实例中。
1.  安装此插件。
1.  点击 `Save` 按钮以保存配置。
1.  启动插件。它将失败，这没关系。
1.  连接到您的 home assistant 并通过 SSH 运行 `chmod 2777 /2effc9b9/trilliumnext`。
1.  启动插件。
1.  检查插件日志，查看一切是否顺利。
1.  访问您的本地 home assistant IP:port 管理端口或 ingress。
1.  跟随下方指示

```
port : 8000 #您希望运行管理界面的端口。
```

Webui 位于 `<your-ip>:port` 或 ingress 处。

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
