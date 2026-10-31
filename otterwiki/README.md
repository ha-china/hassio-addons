# Home Assistant 附加组件：Otter Wiki

# Otter Wiki

Otter Wiki 是一款基于 Python 的协作内容管理软件，称为 [wiki](https://en.wikipedia.org/wiki/Wiki)。内容存储在 git 仓库中，该仓库用于跟踪所有更改。使用 [Markdown](https://daringfireball.net/projects/markdown) 作为标记语言。Otter Wiki 使用 [python](https://www.python.org/) 编写，基于微框架 [Flask](http://flask.pocoo.org/)。使用 [halfmoon](https://www.gethalfmoon.com) 作为 CSS 框架，使用 [CodeMirror](https://codemirror.net/) 作为编辑器。[Font Awesome Free](https://fontawesome.com/license/free) 提供图标服务。

## 主要功能

- 极简界面（支持深色模式）
- 带有 Markdown 高亮和包含表格支持的编辑器
- 可自定义侧边栏：菜单和/或页索引
- 完整变更日志和页面历史记录
- 用户认证
- 页面附件
- 扩展 Markdown：表格、脚注、特殊块、提示块和 Mermaid 图表
- （实验性）Git HTTP 服务器：克隆、拉取和推送 Wiki 内容
- 一个非常可爱的 Otter 作为徽标（由 [Christy Presler](http://christypresler.com/) 绘制，CC BY 3.0）

_感谢所有给我仓库点星星的人！要给它点星，点击下方的图片，它就会被显示在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 简介

该附加组件使用 [docker 镜像](https://github.com/redimp/otterwiki)。

## 安装

该附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装方式没有区别。

1. [将我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此附加组件。
1. 点击 `保存` 按钮以保存配置。
1. 启动附加组件。
1. 检查附加组件的日志，查看一切是否正常运行。
1. 通过 `<your-ip>:port` 打开 Web 界面即可使用。
1. 设置信息位于 /addon_configs/2effc9b9_otterwiki

## 配置

```
port : 8084 # 要运行的端口。
```

Web 界面可访问 `<your-ip>:port`。

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
