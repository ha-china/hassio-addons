# Home assistant add-on: Trillium
Trilium Notes 是一个层次化的笔记应用程序，专注于构建大型个人知识库。 
 
 
_感谢大家给我的仓库点赞！要点赞请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 功能

* 笔记可以排列成任意深度的树。单个笔记可以放置在树的多个位置（见[克隆](https://github.com/zadam/trilium/wiki/Cloning-notes)）
* 丰富的所见即所得笔记编辑，包括例如表格、图片和[数学](https://github.com/zadam/trilium/wiki/Text-notes#math-support)支持，以及markdown的[自动格式化](https://github.com/zadam/trilium/wiki/Text-notes#autoformat)
* 支持[源代码笔记](https://github.com/zadam/trilium/wiki/Code-notes)的编辑，包括语法高亮
* 快速简便的[笔记导航](https://github.com/zadam/trilium/wiki/Note-navigation)，全文搜索和[笔记提升](https://github.com/zadam/trilium/wiki/Note-hoisting)
* 无缝的[笔记版本控制](https://github.com/zadam/trilium/wiki/Note-revisions)
* 笔记[属性](https://github.com/zadam/trilium/wiki/Attributes)可用于笔记组织、查询和高级[脚本](https://github.com/zadam/trilium/wiki/Scripts)
* [同步](https://github.com/zadam/trilium/wiki/Synchronization)到自托管同步服务器
  * 有一个[第三方服务用于托管同步服务器](https://trilium.cc/paid-hosting)
* [共享](https://github.com/zadam/trilium/wiki/Sharing)（发布）笔记到公共互联网
* 强大的[笔记加密](https://github.com/zadam/trilium/wiki/Protected-notes)，每个笔记的粒度
* 使用内置的Excalidraw绘制图表（笔记类型“画布”）
* [关系图](https://github.com/zadam/trilium/wiki/Relation-map)和[链接图](https://github.com/zadam/trilium/wiki/Link-map)用于可视化笔记及其关系
* [脚本](https://github.com/zadam/trilium/wiki/Scripts) - 见[高级展示](https://github.com/zadam/trilium/wiki/Advanced-showcases)
* [REST API](https://github.com/zadam/trilium/wiki/ETAPI)用于自动化
* 在可用性和性能方面，支持超过100,000条笔记的扩展
* 针对触摸优化的[移动前端](https://github.com/zadam/trilium/wiki/Mobile-frontend)用于智能手机和平板电脑
* [夜间主题](https://github.com/zadam/trilium/wiki/Themes)
* [Evernote](https://github.com/zadam/trilium/wiki/Evernote-import)和[Markdown导入导出](https://github.com/zadam/trilium/wiki/Markdown)
* [Web Clipper](https://github.com/zadam/trilium/wiki/Web-clipper)用于轻松保存网页内容


## 安装


1. 将我的Hass.io add-ons仓库[repository]添加到您的Hass.io实例中。
1. 安装此add-on。
1. 点击“保存”按钮以存储您的配置。
1. 在您的homeassistant上创建目录`/share/trillium/`
1. 通过ssh登录到您的home assistant并运行`chmod 2777 /share/trillium`
1. 启动add-on。
1. 检查add-on的日志以查看是否一切顺利。
1. 前往您的本地homeassistant IP:port管理端口或ingress。
1. 按照说明操作

```
port : 8000 #您想要在管理界面运行的端口。
```

Webui可以在`<your-ip>:port`或ingress找到。

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
