# Home assistant 附加组件：Trillium
Trilium Notes 是一款专注于构建大型个人知识体系的分层笔记应用。

_感谢所有给我仓库点赞的人！想要一起点赞的 please 点击下方图片，它将被置顶。谢谢大家！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 特性

* 笔记可以排列成任意深度的树状结构。单一笔记可以放置在树中的多个位置（参见 [克隆](https://github.com/zadam/trilium/wiki/Cloning-notes)）
* 功能丰富的所见即所得（WYSIWYG）笔记编辑，包括例如表格、图片和 [数学公式](https://github.com/zadam/trilium/wiki/Text-notes#math-support) 的支持，以及 markdown [自动格式化](https://github.com/zadam/trilium/wiki/Text-notes#autoformat)
* 支持编辑 [包含源代码的笔记](https://github.com/zadam/trilium/wiki/Code-notes)，包括语法高亮
* 快速便捷的 [笔记导航](https://github.com/zadam/trilium/wiki/Note-navigation)，全文搜索和 [笔记置顶](https://github.com/zadam/trilium/wiki/Note-hoisting)
* 无缝的 [笔记版本控制](https://github.com/zadam/trilium/wiki/Note-revisions)
* 笔记 [属性](https://github.com/zadam/trilium/wiki/Attributes) 可用于笔记组织、查询和高级 [脚本](https://github.com/zadam/trilium/wiki/Scripts)
* [同步](https://github.com/zadam/trilium/wiki/Synchronization) 到自建同步服务器
  * 有一个 [第三方服务用于托管同步服务器](https://trilium.cc/paid-hosting)
* [共享](https://github.com/zadam/trilium/wiki/Sharing) (发布) 笔记到公开互联网
* 强大的 [笔记加密](https://github.com/zadam/trilium/wiki/Protected-notes) 功能，支持细粒度加密
* 内置 Excalidraw 进行草图绘制（笔记类型 "canvas"）
* [关系图](https://github.com/zadam/trilium/wiki/Relation-map) 和 [链接图](https://github.com/zadam/trilium/wiki/Link-map) 用于可视化笔记及其关系
* [脚本](https://github.com/zadam/trilium/wiki/Scripts) - 参见 [高级示例](https://github.com/zadam/trilium/wiki/Advanced-showcases)
* [REST API](https://github.com/zadam/trilium/wiki/ETAPI) 用于自动化
* 可扩展性强，易用性和性能均可支持超过 100,000 条笔记
* 针对智能手机和平板电脑优化的 [移动端前端](https://github.com/zadam/trilium/wiki/Mobile-frontend)
* [夜间模式主题](https://github.com/zadam/trilium/wiki/Themes)
* [Evernote](https://github.com/zadam/trilium/wiki/Evernote-import) 和 [Markdown 导入与导出](https://github.com/zadam/trilium/wiki/Markdown)
* [网页剪藏工具](https://github.com/zadam/trilium/wiki/Web-clipper) 便于保存网页内容

## 安装

1. [添加我的 Hass.io 附加组件仓库][repository] 到您的 Hass.io 实例。
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 将目录 `/share/trillium/` 创建到您的 homeassistant 中。
1. ssh 进入您的 home assistant 并运行 `chmod 2777 /share/trillium`
1. 启动附加组件。
1. 检查附加组件的日志以确认一切是否正常。
1. 打开您的本地 homeassistant IP:端口行政端口或 ingress。
1. 按照指示操作

```
port : 8000 # 您希望运行行政接口所在的端口。
```

Webui 可在 `<your-ip>:port` 或 ingress 上找到。

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
