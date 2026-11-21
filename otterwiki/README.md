# Home assistant 附加组件：Otter Wiki

# 关于 Otter Wiki

Otter Wiki 是一种基于 Python 的协作内容管理软件，称为 [wiki](https://en.wikipedia.org/wiki/Wiki)。内容存储在 git 仓库中，以跟踪所有更改。[Markdown](https://daringfireball.net/projects/markdown) 用作标记语言。Otter Wiki 使用 [python](https://www.python.org/) 编写，基于微框架 [Flask](http://flask.pocoo.org/)。CSS 框架使用 [halfmoon](https://www.gethalfmoon.com)，编辑器使用 [CodeMirror](https://codemirror.net/)。[Font Awesome Free](https://fontawesome.com/license/free) 提供图标服务。

## 主要功能

- 极简界面（包含深色模式）
- 带有 Markdown 高亮及表格支持的编辑器
- 可自定义侧边栏：菜单和/或页面索引
- 完整更新日志和页面历史记录
- 用户身份验证
- 页面附件
- 扩展 Markdown：表格、脚注、精美代码块、警报以及 Mermaid 图表
- （实验性）Git HTTP 服务器：克隆、拉取并推送 Wiki 内容
- 一个非常可爱的 Otter 作为标志（由 [Christy Presler](http://christypresler.com/) 绘制，CC BY 3.0）

_感谢大家为我的仓库点赞！如需点赞，请点击下方图片，它会被置于右上显示。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 简介

此附加组件使用 [docker 镜像](https://github.com/redimp/otterwiki)。

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件安装方式并无不同。

1. [将我的 Hass.io 附加组件库][repository] 添加到您的 Hass.io 实例。
1. 安装此附加组件。
1. 按 `Save` 按钮保存配置。
1. 启动附加组件。
1. 查看附加组件日志以确认一切正常。
1. 可通过 <your-ip>:port 打开 WebUI。
1. 设置位于 /addon_configs/2effc9b9_otterwiki
## 配置

```
port : 8084 # 您希望运行的端口
```

WebUI 可通过 <your-ip>:port 访问。

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
