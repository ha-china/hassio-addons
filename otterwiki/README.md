# 家居助手插件：Otter Wiki

# 一个 Otter Wiki

Otter Wiki 是基于 Python 的协作内容管理软件，称为 [维基](https://en.wikipedia.org/wiki/Wiki)。内容存储在 git 仓库中，该仓库跟踪所有更改。[Markdown](https://daringfireball.net/projects/markdown) 用作标记语言。Otter Wiki 是使用微框架 [Flask](http://flask.pocoo.org/) 以 [python](https://www.python.org/) 编写的。[halfmoon](https://www.gethalfmoon.com) 用作 CSS 框架，[CodeMirror](https://codemirror.net/) 用作编辑器。[Font Awesome Free](https://fontawesome.com/license/free) 提供图标。

## 显著特性

- 极简界面（带暗黑模式）
- 支持表格的 Markdown 高亮编辑器
- 可定制的侧边栏：菜单和/或页面索引
- 完整的变更日志和页面历史记录
- 用户身份验证
- 页面附件
- 扩展 Markdown：表格、脚注、精美块、警报和 mermaid 图表
- （实验性）Git http 服务器：克隆、拉取和推送您的维基内容
- 非常可爱的海獭作为标志（由 [Christy Presler](http://christypresler.com/) 绘制，CC BY 3.0 许可）

_感谢所有给我的仓库点赞的人！点击下面的图片点赞，它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用了 [docker 镜像](https://github.com/redimp/otterwiki)。

## 安装

这个插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的 Hass.io 插件仓库 [repository] 添加到您的 Hass.io 实例。
1. 安装这个插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. WebUI 应该可以通过 <your-ip>:port 访问。
1. 设置将在 /addon_configs/2effc9b9_otterwiki 中。

## 配置

```
port : 8084 #您想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

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
