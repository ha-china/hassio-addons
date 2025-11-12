# Home assistant add-on: Trillium Next Notes
Trilium Next Notes is a hierarchical note-taking application with a focus on building large personal knowledge bases.

_Thanks to everyone who has starred my repository! To star it, click on the image below, and it will appear on the top right. Thanks!_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## Features

* Notes can be arranged into arbitrarily deep trees. A single note can be placed in multiple places in the tree (see [cloning](https://triliumnext.github.io/Docs/Wiki/cloning-notes)
* Rich WYSIWYG note editing, including e.g., tables, images, and [math](https://triliumnext.github.io/Docs/Wiki/text-notes) with markdown [autoformat](https://triliumnext.github.io/Docs/Wiki/text-notes#autoformat)
* Support for editing [notes with source code](https://triliumnext.github.io/Docs/Wiki/code-notes), including syntax highlighting
* Fast and easy [navigation between notes](https://triliumnext.github.io/Docs/Wiki/note-navigation), full text search, and [note hoisting](https://triliumnext.github.io/Docs/Wiki/note-hoisting)
* Seamless [note versioning](https://triliumnext.github.io/Docs/Wiki/note-revisions)
* Note [attributes](https://triliumnext.github.io/Docs/Wiki/attributes) can be used for note organization, querying, and advanced [scripting](https://triliumnext.github.io/Docs/Wiki/scripts)
* [Synchronization](https://triliumnext.github.io/Docs/Wiki/synchronization) with a self-hosted sync server
  * There is a [third-party service for hosting synchronization servers](https://trilium.cc/paid-hosting)
* [Sharing](https://triliumnext.github.io/Docs/Wiki/sharing) (publishing) notes to the public internet
* Strong [note encryption](https://triliumnext.github.io/Docs/Wiki/protected-notes) with per-note granularity
* Sketching diagrams with built-in Excalidraw (note type "canvas")
* [Relation maps](https://triliumnext.github.io/Docs/Wiki/relation-map) and [link maps](https://triliumnext.github.io/Docs/Wiki/link-map) for visualizing notes and their relationships
* [Scripting](https://triliumnext.github.io/Docs/Wiki/scripts) - see [Advanced showcases](https://triliumnext.github.io/Docs/Wiki/advanced-showcases)
* [REST API](https://triliumnext.github.io/Docs/Wiki/etapi) for automation
* Scales well in both usability and performance for upwards of 100,000 notes
* Touch-optimized [mobile frontend](https://triliumnext.github.io/Docs/Wiki/mobile-frontend) for smartphones and tablets
* [Night theme](https://triliumnext.github.io/Docs/Wiki/themes)
* [Evernote](https://triliumnext.github.io/Docs/Wiki/evernote-import) and [Markdown import & export](https://triliumnext.github.io/Docs/Wiki/markdown)
* [Web Clipper](https://triliumnext.github.io/Docs/Wiki/web-clipper) for easy saving of web content

## Installation

1. [Add my Hass.io add-ons repository][repository] to your Hass.io instance.
2. Install this add-on.
3. Click the `Save` button to store your configuration.
4. Start the add-on. It will fail, and that is okay.
5. SSH into your home assistant and run `chmod 2777 /2effc9b9/trilliumnext`
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
