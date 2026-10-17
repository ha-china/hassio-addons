# Home Assistant 插件：Otter Wiki

# 什么是 Otter Wiki

Otter Wiki 是基于 Python 的开发协作内容管理的软件，简称为 [wiki](https://en.wikipedia.org/wiki/Wiki)。内容存储在 git 仓库中，以便追踪所有更改。使用 [Markdown](https://daringfireball.net/projects/markdown) 作为Markup 语言。Otter Wiki 使用 [Python](https://www.python.org/) 编写，并基于微型框架 [Flask](http://flask.pocoo.org/) 开发。CSS 框架使用的是 [halfmoon](https://www.gethalfmoon.com)，编辑器使用的是 [CodeMirror](https://codemirror.net/)。[Font Awesome Free](https://fontawesome.com/license/free) 提供图标服务。

## 主要特性

- 极简主义界面（支持暗色模式）
- 具备 Markdown 语法高亮和表格支持的编辑器
- 可自定义侧边栏：显示菜单和/或页面索引
- 完整更新日志和页面历史记录
- 用户身份验证
- 页面附件
- 扩展 Markdown：支持表格、脚注、高级区块、提醒框和 mermaid 图表
- （实验中）Git HTTP 服务器：克隆、拉取和推送 Wiki 内容
- 一个非常可爱的 Otter 作为标志（由 [Christy Presler](http://christypresler.com/) 绘制，CC BY 3.0 许可）

_感谢为我 repo 点星的所有人！若要为我点星，请点击下方的图片，之后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 概述

该插件使用 [docker 镜像](https://github.com/redimp/otterwiki)。

## 安装

此插件的安装非常简单，与其他 Hass.io 插件的安装方式基本一致。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此插件。
1. 点击 `Save` 按钮保存您的配置。
1. 启动插件。
1. 查看插件日志，确认一切正常。
1. 通过 <your-ip>:port 访问 Web 界面。
1. 配置文件保存在 `/addon_configs/2effc9b9_otterwiki` 目录下。

## 配置

```
port : 8084 # 您希望运行的端口号。
```

Web 界面可通过 `<your-ip>:port` 访问。

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
