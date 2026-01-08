# Home assistant add-on: Trillium
Trilium Notes 是一款分层笔记应用，专注于构建大型个人知识库。 


_感谢大家给我的仓库点赞！要点赞请点击下面的图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 功能

* 笔记可以排列成任意深度的树。单个笔记可以放置在树的多个位置（参见 [克隆](https://github.com/zadam/trilium/wiki/Cloning-notes)）
* 丰富的所见即所得笔记编辑，包括例如表格、图片和 [数学](https://github.com/zadam/trilium/wiki/Text-notes#math-support) 支持的markdown [自动格式化](https://github.com/zadam/trilium/wiki/Text-notes#autoformat)
* 支持 [源代码笔记](https://github.com/zadam/trilium/wiki/Code-notes) 编辑，包括语法高亮
* 快速便捷的 [笔记间导航](https://github.com/zadam/trilium/wiki/Note-navigation)，全文搜索和 [笔记提升](https://github.com/zadam/trilium/wiki/Note-hoisting)
* 无缝的 [笔记版本控制](https://github.com/zadam/trilium/wiki/Note-revisions)
* 笔记 [属性](https://github.com/zadam/trilium/wiki/Attributes) 可用于笔记组织、查询和高级 [脚本](https://github.com/zadam/trilium/wiki/Scripts)
* 与自托管同步服务器的 [同步](https://github.com/zadam/trilium/wiki/Synchronization)
  * 有一个 [第三方服务用于托管同步服务器](https://trilium.cc/paid-hosting)
* [共享](https://github.com/zadam/trilium/wiki/Sharing)（发布）笔记到公共互联网
* 强大的 [笔记加密](https://github.com/zadam/trilium/wiki/Protected-notes) ，每条笔记的粒度
* 使用内置的 Excalidraw 绘制草图图表（笔记类型 "canvas"）
* [关系图](https://github.com/zadam/trilium/wiki/Relation-map) 和 [链接图](https://github.com/zadam/trilium/wiki/Link-map) 用于可视化笔记及其关系
* [脚本](https://github.com/zadam/trilium/wiki/Scripts) - 参见 [高级展示](https://github.com/zadam/trilium/wiki/Advanced-showcases)
* [REST API](https://github.com/zadam/trilium/wiki/ETAPI) 用于自动化
* 在可用性和性能上都能很好地扩展超过 100,000 条笔记
* 针对触摸优化的 [移动前端](https://github.com/zadam/trilium/wiki/Mobile-frontend) 用于智能手机和平板电脑
* [夜间主题](https://github.com/zadam/trilium/wiki/Themes)
* [Evernote](https://github.com/zadam/trilium/wiki/Evernote-import) 和 [Markdown 导入和导出](https://github.com/zadam/trilium/wiki/Markdown)
* [Web Clipper](https://github.com/zadam/trilium/wiki/Web-clipper) 用于轻松保存网页内容


## 安装


1. [将我的 Hass.io add-ons 仓库][repository] 添加到你的 Hass.io 实例。
1. 安装这个 add-on。
1. 点击 `Save` 按钮来保存你的配置。
1. 在你的 homeassistant 上创建目录 `/share/trillium/`
1. 通过 ssh 登录到你的 home assistant 并运行 `chmod 2777 /share/trillium`
1. 启动 add-on。
1. 检查 add-on 的日志，看看是否一切正常。
1. 前往你的本地 homeassistant IP:port 管理端口或 ingress。
1. 按照指示操作

```
port : 8000 #你想在哪个端口上运行管理界面。
```

Webui 可以在 `<your-ip>:port` 或 ingress 找到。

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
