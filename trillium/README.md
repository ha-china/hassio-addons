# Home assistant add-on: Trillium
Trilium Notes is a hierarchical note-taking application with a focus on building large personal knowledge bases. 

_Thanks to everyone who has starred my repo! To star it, click on the image below, and it will appear on the top right. Thanks!_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## Features

* Notes can be arranged into arbitrarily deep trees. A single note can be placed in multiple locations in the tree (see [cloning](https://github.com/zadam/trilium/wiki/Cloning-notes))
* Rich WYSIWYG note editing, including elements such as tables, images, and [math](https://github.com/zadam/trilium/wiki/Text-notes#math-support) with markdown [autoformat](https://github.com/zadam/trilium/wiki/Text-notes#autoformat)
* Support for editing [notes with source code](https://github.com/zadam/trilium/wiki/Code-notes), including syntax highlighting
* Fast and easy [navigation between notes](https://github.com/zadam/trilium/wiki/Note-navigation), full text search, and [note hoisting](https://github.com/zadam/trilium/wiki/Note-hoisting)
* Seamless [note versioning](https://github.com/zadam/trilium/wiki/Note-revisions)
* Note [attributes](https://github.com/zadam/trilium/wiki/Attributes) can be used for note organization, querying, and advanced [scripting](https://github.com/zadam/trilium/wiki/Scripts)
* [Synchronization](https://github.com/zadam/trilium/wiki/Synchronization) with a self-hosted sync server
  * There is a [third-party service for hosting a synchronization server](https://trilium.cc/paid-hosting)
* [Sharing](https://github.com/zadam/trilium/wiki/Sharing) (publishing) notes to the public internet
* Strong [note encryption](https://github.com/zadam/trilium/wiki/Protected-notes) with per-note granularity
* Sketching diagrams with built-in Excalidraw (note type "canvas")
* [Relation maps](https://github.com/zadam/trilium/wiki/Relation-map) and [link maps](https://github.com/zadam/trilium/wiki/Link-map) for visualizing notes and their relationships
* [Scripting](https://github.com/zadam/trilium/wiki/Scripts) - see [Advanced showcases](https://github.com/zadam/trilium/wiki/Advanced-showcases)
* [REST API](https://github.com/zadam/trilium/wiki/ETAPI) for automation
* Scales well in both usability and performance for upwards of 100,000 notes
* Touch-optimized [mobile frontend](https://github.com/zadam/trilium/wiki/Mobile-frontend) for smartphones and tablets
* [Night theme](https://github.com/zadam/trilium/wiki/Themes)
* [Evernote](https://github.com/zadam/trilium/wiki/Evernote-import) and [Markdown import & export](https://github.com/zadam/trilium/wiki/Markdown)
* [Web Clipper](https://github.com/zadam/trilium/wiki/Web-clipper) for easy saving of web content

## Installation

1. [Add my Hass.io add-ons repository][repository] to your Hass.io instance.
2. Install this add-on.
3. Click the `Save` button to store your configuration.
4. Create the directory `/share/trillium/` on your homeassistant.
5. ssh into your home assistant and run `chmod 2777 /share/trillium`.
6. Start the add-on.
7. Check the logs of the add-on to see if everything went well.
8. Go to your local homeassistant IP:port admin port or ingress.
9. Follow the instructions.

```
port : 8000 #port you want to run admin interface on.
```

Web UI can be found at `<your-ip>:port` or ingress.

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
