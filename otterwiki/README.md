# Home Assistant 插件：Otter Wiki

# Otter Wiki 介绍

Otter Wiki 是基于 Python 的可协作内容管理系统，称为 [维基百科](https://en.wikipedia.org/wiki/Wiki)。内容存储在 Git 仓库中，以追踪所有更改。[Markdown](https://daringfireball.net/projects/markdown) 用作标记语言。Otter Wiki 使用 [Python](https://www.python.org/) 编写，并采用微框架 [Flask](http://flask.pocoo.org/)。CSS 框架使用 [halfmoon](https://www.gethalfmoon.com)，编辑器使用 [CodeMirror](https://codemirror.net/)。[Font Awesome Free](https://fontawesome.com/license/free) 提供图标。

## 主要功能

- 极简界面（支持深色模式）
- 带有 Markdown 高亮和对包括表格在内的支持的编辑器
- 可自定义侧边栏：菜单和/或页面索引
- 完整变更日志和页面历史记录
- 用户身份验证
- 页面附件
- 扩展 Markdown：表格、脚注、精美区块、警报和 Mermaid 图表
- （实验性）Git HTTP 服务器：克隆、拉取和推送您的 Wiki 内容
- 一个非常可爱的 Otter 作为标志（由 [Christy Presler](http://christypresler.com/) 绘制，CC BY 3.0）

_感谢所有为我仓库点赞的人！要点赞它，请单击下图，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 概述

该插件使用 [docker 镜像](https://github.com/redimp/otterwiki)。

## 安装

该插件的安装非常简单，与安装任何其他 Hass.io 插件没有不同。

1. [添加我的 Hass.io 插件仓库][repository] 到您的 Hass.io 实例。
2. 安装此插件。
3. 单击 `保存` 按钮以存储您的配置。
4. 启动插件。
5. 检查插件日志以确认一切正常。
6. 通过 <your-ip>:port 打开 Web UI。
7. 设置将位于 /addon_configs/2effc9b9_otterwiki
## 配置

```
port : 8084 # 您希望运行的端口。
```

Web UI 可在 `<your-ip>:port` 处找到。

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
