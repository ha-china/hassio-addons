# Home assistant插件：Otter Wiki

# 一个Otter Wiki

Otter Wiki是一个基于Python的协作内容管理软件，称为[维基](https://en.wikipedia.org/wiki/Wiki)。内容存储在git仓库中，该仓库跟踪所有更改。[Markdown](https://daringfireball.net/projects/markdown)用作标记语言。Otter Wiki是用[python](https://www.python.org/)编写的，使用微框架[Flask](http://flask.pocoo.org/)。[halfmoon](https://www.gethalfmoon.com)用作CSS框架，[CodeMirror](https://codemirror.net/)用作编辑器。[Font Awesome Free](https://fontawesome.com/license/free)提供图标。

## 突出功能

- 极简界面（支持暗黑模式）
- 支持Markdown高亮和表格的编辑器
- 可定制的侧边栏：菜单和/或页面索引
- 完整的更改日志和页面历史记录
- 用户认证
- 页面附件
- 扩展Markdown：表格、脚注、精美块、警告和mermaid图表
- （实验性）Git HTTP服务器：克隆、拉取和推送你的维基内容
- 一个非常可爱的海獭作为标志（由[Christy Presler](http://christypresler.com/)绘制，CC BY 3.0许可）

_感谢所有给我的仓库加星标的人！要加星标，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![@jdeath/homeassistant-addons的星标仓库罗盘](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用了[docker镜像](https://github.com/redimp/otterwiki)。

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库][repository]添加到你的Hass.io实例。
1. 安装这个插件。
1. 点击`保存`按钮以保存你的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 应该可以通过<your-ip>:port访问WebUI。
1. 设置将在 /addon_configs/2effc9b9_otterwiki 中。

## 配置

```
port : 8084 #你想要运行的端口。
```

WebUI可以在<your-ip>:port找到。

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
