# Home Assistant 插件：Trillium
Trilium Notes 是一款专注于构建大型个人知识库的分层笔记应用程序。  

_感谢您为我的仓库加星！点击下方的图片为您加星，它将被显示在右上角。谢谢！_

[![Trillium 仓库的星数统计](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 功能特点

* 笔记可以被组织成任意深度的树状结构。单个笔记可以放置在树中多个位置（参见 [克隆](https://github.com/zadam/trilium/wiki/Cloning-notes)）
* 提供功能丰富的所见即所得（WYSIWYG）笔记编辑，支持表格、图片以及带有 Markdown [自动格式](https://github.com/zadam/trilium/wiki/Text-notes#autoformat) 的 [数学公式](https://github.com/zadam/trilium/wiki/Text-notes#math-support)
* 支持带有 [源代码注释](https://github.com/zadam/trilium/wiki/Code-notes) 的编辑，包含语法高亮显示
* 快速且便捷的 [笔记导航](https://github.com/zadam/trilium/wiki/Note-navigation)，支持全文搜索和 [笔记上移](https://github.com/zadam/trilium/wiki/Note-hoisting)
* 无缝的 [版本管理](https://github.com/zadam/trilium/wiki/Note-revisions)
* [属性注](https://github.com/zadam/trilium/wiki/Attributes) 可用于笔记的组织、查询和高级 [脚本](https://github.com/zadam/trilium/wiki/Scripts)
* [同步](https://github.com/zadam/trilium/wiki/Synchronization) 至自托管的同步服务器
  * 第三方可提供托管同步服务器的服务：[第三方托管同步服务器](https://trilium.cc/paid-hosting)
* [分享](https://github.com/zadam/trilium/wiki/Sharing)（发布）笔记到公共互联网
* 强大的 [笔记加密](https://github.com/zadam/trilium/wiki/Protected-notes)，支持单个笔记粒度
* 使用内置的 Excalidraw [绘制流程图](https://github.com/zadam/trilium/wiki/Canvas-notes)（笔记类型 "canvas"）
* [关系图](https://github.com/zadam/trilium/wiki/Relation-map) 和 [链接图](https://github.com/zadam/trilium/wiki/Link-map) 用于注释及其关系的可视化
* [脚本](https://github.com/zadam/trilium/wiki/Scripts) - 参见 [高级展示](https://github.com/zadam/trilium/wiki/Advanced-showcases)
* [REST API](https://github.com/zadam/trilium/wiki/ETAPI) 用于自动化
* 性能优异，即使在超过 100,000 条笔记的情况下也能保持良好体验
* 针对智能手机和平板电脑优化的 [移动端前端](https://github.com/zadam/trilium/wiki/Mobile-frontend)
* [深色主题](https://github.com/zadam/trilium/wiki/Themes)
* 支持 [OneNote 导入](https://github.com/zadam/trilium/wiki/Evernote-import) 和 [Markdown 导入与导出](https://github.com/zadam/trilium/wiki/Markdown)
* [网页剪藏器](https://github.com/zadam/trilium/wiki/Web-clipper)，便于保存网页内容

## 安装步骤

1. 将我的 [Hass.io 副插件仓库](https://github.com/jdeath/homeassistant-addons) 添加到您的 Hass.io 实例中。
2. 安装此副插件。
3. 点击 **保存** 按钮以存储配置。
4. 在您的 Home Assistant 中创建目录 `/share/trillium/`。
5. 登录您的 Home Assistant 终端并运行 `chmod 2777 /share/trillium`。
6. 启动副插件。
7. 查看副插件日志以确认一切正常。
8. 访问您的本地 Home Assistant IP:端口管理端口或网关。
9. 按照提示操作

```yaml
port: 8000 # 您希望管理界面运行的端口号。
```

Web 界面可以在 `<your-ip>:port` 或网关处访问。

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
