# Home assistant 附加组件：Otter Wiki

# Otter Wiki 介绍

Otter Wiki 是基于 Python 的合作内容管理软件，称为 [维基](https://en.wikipedia.org/wiki/Wiki)。内容存储在 git 仓库中，以跟踪所有更改。使用 [Markdown](https://daringfireball.net/projects/markdown) 作为标记语言。Otter Wiki 使用 [Python](https://www.python.org/) 编写，并采用微框架 [Flask](http://flask.pocoo.org/)。CSS 框架使用 [halfmoon](https://www.gethalfmoon.com)，编辑器使用 [CodeMirror](https://codemirror.net/)。[Font Awesome Free](https://fontawesome.com/license/free) 提供图标服务。

## 主要特性

- 极简界面（支持暗黑模式）
- 带 Markdown 高亮和表格支持的编辑器
- 可定制侧边栏：菜单和/或页面索引
- 完整更新日志和页面历史记录
- 用户认证
- 页面附件
- 扩展 Markdown：表格、尾注、精美区块、警报和 Mermaid 图表
- （实验性）Git HTTP 服务器：克隆、拉取和推送维基内容
- 一个非常可爱的 Otter 作为徽标（由 [Christy Presler](http://christypresler.com/) 绘制，CC BY 3.0）

_感谢所有星标我仓库的朋友们！要星标它，请点击下方图片，它便会显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件使用 [docker 镜像](https://github.com/redimp/otterwiki)。

## 安装

该附加组件的安装非常简单，与安装其他任何 Hass.io 附加组件没有区别。

1. 将 [我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储配置。
1. 启动附加组件。
1. 检查附加组件日志以确保一切正常。
1. 通过 <your-ip>:port 打开 WebUI 即可工作。
1. 设置位于 /addon_configs/2effc9b9_otterwiki

## 配置

```
port : 8084 # 运行端口号。
```

WebUI 可访问于 `<your-ip>:port`。

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
