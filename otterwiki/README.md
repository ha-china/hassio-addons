# Home Assistant 扩展：Otter Wiki

# Otter Wiki

Otter Wiki 是基于 Python 的协作内容管理系统，被称为 [wiki](https://zh.wikipedia.org/wiki/Wiki)。内容存储在 git 仓库中，记录所有变更。[Markdown](https://daringfireball.net/projects/markdown) 被用作标记语言。Otter Wiki 使用 [python](https://www.python.org/) 编写，采用微框架 [Flask](http://flask.pocoo.org/)。[halfmoon](https://www.gethalfmoon.com) 被用作 CSS 框架，[CodeMirror](https://codemirror.net/) 作为编辑器。[Font Awesome Free](https://fontawesome.com/license/free) 提供图标服务。

## 亮点功能

- 极简界面（带暗黑模式）
- 支持表格等的 Markdown 高亮编辑器
- 可定制侧边栏：菜单和/或页面索引
- 完整的变更日志和页面历史
- 用户认证
- 页面附件
- 扩展 Markdown：表格、脚注、花哨的块、警告和 mermaid 图表
- （实验性）Git http 服务器：克隆、拉取和推送 wiki 内容
- 一个非常可爱的海狸作为标志（由 [Christy Presler](http://christypresler.com/) 绘制，CC BY 3.0）

_感谢所有为我仓库点赞的人！要点赞，请点击下面的图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此扩展使用 [docker 镜像](https://github.com/redimp/otterwiki)。

## 安装

此扩展的安装非常简单，与安装任何其他 Hass.io 扩展没有区别。

1. 将我的 Hass.io 扩展仓库 [repository][repository] 添加到您的 Hass.io 实例中。
1. 安装此扩展。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动扩展。
1. 检查扩展的日志以查看是否一切顺利。
1. 通过 <your-ip>:port 打开 WebUI。
1. 设置将在 /addon_configs/2effc9b9_otterwiki 中。

## 配置

```
port : 8084 #您想要运行的端口号。
```

WebUI 可以在 <your-ip>:port 找到。

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
