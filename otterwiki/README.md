# Home assistant add-on: Otter Wiki

# An Otter Wiki

An Otter Wiki is a Python-based software for collaborative content management, called a [wiki](https://en.wikipedia.org/wiki/Wiki). The content is stored in a git repository, which keeps track of all changes. [Markdown](https://daringfireball.net/projects/markdown) is used as the Markup language. An Otter Wiki is written in [python](https://www.python.org/) using the microframework [Flask](http://flask.pocoo.org/). [halfmoon](https://www.gethalfmoon.com) is used as the CSS framework and [CodeMirror](https://codemirror.net/) as the editor. [Font Awesome Free](https://fontawesome.com/license/free) serves the icons.

## Notable Features

- Minimalistic interface (with dark-mode)
- Editor with markdown highlighting and support for including tables
- Customizable Sidebar: Menu and/or Page Index
- Full changelog and page history
- User authentication
- Page Attachments
- Extended Markdown: tables, footnotes, fancy blocks, alerts, and mermaid diagrams
- (experimental) Git http server: clone, pull, and push the content of your wiki
- A very cute Otter as logo (drawn by [Christy Presler](http://christypresler.com/) CC BY 3.0)


_Thanks to everyone who has starred my repo! To star it, click on the image below, then it will be on top right. Thanks!_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## About

This add-on uses the [docker image](https://github.com/redimp/otterwiki).

## Installation

The installation of this add-on is quite straightforward and not different from installing any other Hass.io add-on.

1. [Add my Hass.io add-ons repository][repository] to your Hass.io instance.
1. Install this add-on. 
1. Click the `Save` button to store your configuration.
1. Start the add-on.
1. Check the logs of the add-on to see if everything went well.
1. Open WebUI should work via <your-ip>:port.
1. Settings will be in /addon_configs/2effc9b9_otterwiki
## Configuration

```
port : 8084 #port you want to run on.
```

Webui can be found at `<your-ip>:port`.

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
