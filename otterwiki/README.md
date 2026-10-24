# Home assistant 补充程序：Otter Wiki

# 什么是 Otter Wiki

Otter Wiki 是基于 Python 的协作内容管理软件，称为 [wiki](https://en.wikipedia.org/wiki/Wiki)。内容存储在 git 仓库中，用于跟踪所有更改。[Markdown](https://daringfireball.net/projects/markdown) 被用作标记语言。Otter Wiki 使用 [python](https://www.python.org/) 编写，采用微框架 [Flask](http://flask.pocoo.org/)。[halfmoon](https://www.gethalfmoon.com) 用作 CSS 框架，[CodeMirror](https://codemirror.net/) 用作编辑器。[Font Awesome Free](https://fontawesome.com/license/free) 提供图标。

## 主要功能

- 极简界面（包含暗色模式）
- 编辑器具备 Markdown 代码高亮支持，包括表格
- 可自定义侧边栏：菜单和/或页面索引
- 完整更改日志和页面历史记录
- 用户认证
- 页面附件
- 扩展 Markdown：表格、脚注、精美区块、警报和 mermaid 图表
- （实验性）Git HTTP 服务器：克隆、拉取和推送 Wiki 内容
- 非常可爱的 Otter 作为 Logo（由 [Christy Presler](http://christypresler.com/) 绘制，CC BY 3.0）

_感谢所有为我仓库添加星标的人！要添加星标，请点击下方的图片，之后它将出现在右上角。_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此补充程序使用 [docker 镜像](https://github.com/redimp/otterwiki)。

## 安装

此补充程序的安装非常简单，与安装任何其他的 Hass.io 补充程序没有区别。

1. [将我提供的 Hass.io 补充程序仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此补充程序。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动补充程序。
1. 检查补充程序的日志以查看是否一切正常。
1. 通过 <your-ip>:port 打开 WebUI。
1. 设置将位于 /addon_configs/2effc9b9_otterwiki
## 配置

```
port : 8084 # 您想要运行的端口。
```

Webui 位于 <your-ip>:port。

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
