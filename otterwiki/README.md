# Home Assistant 附加组件：Otter Wiki

# Otter Wiki

Otter Wiki 是基于 Python 的协同内容管理系统，称为 [wiki](https://en.wikipedia.org/wiki/Wiki)。内容存储在 git 仓库中，用于追踪所有更改。使用 [Markdown](https://daringfireball.net/projects/markdown) 作为标记语言。Otter Wiki 使用 [python](https://www.python.org/) 编写，并采用 [Flask](http://flask.pocoo.org/) 微框架。  
使用 [halfmoon](https://www.gethalfmoon.com) 作为 CSS 框架，[CodeMirror](https://codemirror.net/) 作为编辑器。  
[Font Awesome Free](https://fontawesome.com/license/free) 提供图标支持。

## 主要功能

- 极简界面（支持深色模式）
- 包含表格支持等 Markdown 高亮编辑器
- 可定制侧边栏：菜单和/或页面索引
- 完整更新日志和页面历史记录
- 用户身份验证
- 页面附件
- 扩展 Markdown 功能：表格、脚注、高级区块、警报器和 mermaid 图表
- （实验性）Git HTTP 服务器：克隆、拉取和推送 Wiki 内容
- 吉祥物是一只非常可爱的 Otter（由 [Christy Presler](http://christypresler.com/) 绘制的 CC BY 3.0）

_感谢所有给我仓库点赞的人！想点赞请点击下方图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于本附加组件

此附加组件使用 [docker 镜像](https://github.com/redimp/otterwiki)。

## 安装

该附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件的过程类似。

1. [将我添加的 Hass.io 附加组件库][repository] 添加到您的 Hass.io 实例。
2. 安装此附加组件。
3. 点击 `保存` 按钮以配置您的设置。
4. 启动附加组件。
5. 检查附加组件日志以确认是否一切正常。
6. 通过 `<your-ip>:port` 打开 Web 界面应能正常工作。
7. 配置文件位于 `/addon_configs/2effc9b9_otterwiki` 下。

## 配置

```
port : 8084 # 此处填写要运行的端口。
```

Web 界面可通过 `<your-ip>:port` 访问。

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
