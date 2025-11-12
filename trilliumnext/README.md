# Home assistant add-on: Trillium Next Notes
Trilium Next Notes 是一个层次化的笔记应用，专注于构建大型个人知识库。 


_感谢大家给我的仓库加星！要加星，请点击下面的图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 功能

* 笔记可以排列成任意深度的树。单个笔记可以放置在树中的多个位置（参见 [克隆](https://triliumnext.github.io/Docs/Wiki/cloning-notes)
* 丰富的所见即所得笔记编辑，包括例如表格、图片和 [数学](https://triliumnext.github.io/Docs/Wiki/text-notes) 使用 markdown [自动格式化](https://triliumnext.github.io/Docs/Wiki/text-notes#autoformat)
* 支持 [源代码笔记](https://triliumnext.github.io/Docs/Wiki/code-notes) 的编辑，包括语法高亮
* 快速便捷的 [笔记间导航](https://triliumnext.github.io/Docs/Wiki/note-navigation)，全文搜索和 [笔记提升](https://triliumnext.github.io/Docs/Wiki/note-hoisting)
* 无缝的 [笔记版本控制](https://triliumnext.github.io/Docs/Wiki/note-revisions)
* 笔记 [属性](https://triliumnext.github.io/Docs/Wiki/attributes) 可用于笔记组织、查询和高级 [脚本](https://triliumnext.github.io/Docs/Wiki/scripts)
* 与自托管同步服务 [同步](https://triliumnext.github.io/Docs/Wiki/synchronization)
  * 有一个 [第三方服务用于托管同步服务器](https://trilium.cc/paid-hosting)
* [共享](https://triliumnext.github.io/Docs/Wiki/sharing)（发布）笔记到公共互联网
* 强大的 [笔记加密](https://triliumnext.github.io/Docs/Wiki/protected-notes) ，每条笔记粒度
* 使用内置 Excalidraw 绘制草图（笔记类型 "canvas"）
* [关系图](https://triliumnext.github.io/Docs/Wiki/relation-map) 和 [链接图](https://triliumnext.github.io/Docs/Wiki/link-map) 用于可视化笔记及其关系
* [脚本](https://triliumnext.github.io/Docs/Wiki/scripts) - 见 [高级展示](https://triliumnext.github.io/Docs/Wiki/advanced-showcases)
* [REST API](https://triliumnext.github.io/Docs/Wiki/etapi) 用于自动化
* 在可用性和性能上，超过 100,000 条笔记都能很好地扩展
* 针对智能手机和平板电脑优化的触摸屏 [移动前端](https://triliumnext.github.io/Docs/Wiki/mobile-frontend)
* [夜间主题](https://triliumnext.github.io/Docs/Wiki/themes)
* [Evernote](https://triliumnext.github.io/Docs/Wiki/evernote-import) 和 [Markdown 导入和导出](https://triliumnext.github.io/Docs/Wiki/markdown)
* [Web Clipper](https://triliumnext.github.io/Docs/Wiki/web-clipper) 用于轻松保存网页内容


## 安装


1. [将我的 Hass.io add-ons 仓库][repository] 添加到你的 Hass.io 实例。
1. 安装这个 add-on。
1. 点击 `保存` 按钮以保存你的配置。
1. 启动 add-on。它将失败，这是可以接受的
1. 通过 ssh 登录到你的 home assistant 并运行 `chmod 2777 /2effc9b9/trilliumnext`
1. 启动 add-on。
1. 检查 add-on 的日志，看看一切是否正常。
1. 进入你的本地 homeassistant IP:port 管理端口或 ingress。
1. 按照说明操作

```
port : 8000 #你想要运行管理界面的端口。
```

Webui 可以在 `<your-ip>:port` 或 ingress 找到。

[repository]: https://github.com/jdeath/homeassistant-addons
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
