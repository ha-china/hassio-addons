# Home assistant 添加组件：Shiori
Shiori 是一个用 Go 语言编写的简单书签管理器。旨在作为 Pocket 的简单克隆版本。你可以将其用作命令行应用程序或 Web 应用程序。

详细信息请访问：https://github.com/go-shiori/shiori/ 

_感谢所有给我的仓库添加星标的人！要添加星标，请点击下面的图片，它将在右上角显示。谢谢！_

[![@jdeath/homeassistant-addons 仓库星标列表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 功能

- 基本书签管理，即添加、编辑、删除和搜索。
- 从和导入 Netscape Bookmark 文件的书签。
- 从 Pocket 导入书签。
- 简单干净的命令行界面。
- 对于不想使用命令行应用程序的人来说，有一个简单漂亮的 Web 界面。
- 可移植，由于它的单一二进制格式。
- 支持 sqlite3、PostgreSQL 和 MySQL 作为其数据库。
- 在可能的情况下，默认情况下 `shiori` 将解析可读内容并创建网页的离线存档。
- Beta：支持 Firefox 和 Chrome。

## 安装


1. [将我的 Hass.io 添加组件仓库][repository] 添加到你的 Hass.io 实例。
1. 安装此添加组件。
1. 点击 `保存` 按钮以保存你的配置。
1. 启动添加组件。
1. 检查添加组件的日志以查看是否一切顺利。
1. 要运行命令行 shiori 命令：
1. ssh 进入 homeassistant
1. 输入 "docker ps" 找到 shiori 的容器 ID
1. 输入 "docker exec -it CONTAINERID 命令"， 
1. 进入你的本地 homeassistant IP:port 管理端口。
1. 默认登录：shiori，密码：gopher
1. 创建一个新用户，默认将被移除
1. 你的数据存储在

## 配置
1. 在 Web 界面中创建新书签或设置浏览器扩展
1. 要导入现有书签，你需要手动 ssh 进入
1. 将你的浏览器中的 bookmarks.html 复制到 homeassistant /addon_configs/2effc9b9_shiori/
1. 按照 ssh 说明进入 docker：
1. ssh 进入 homeassistant
1. 输入 "docker ps" 找到 shiori 的容器 ID
1. 输入 "docker exec -it CONTAINERID shiori import /config/bookmarks.html"， 
```
port : 8000 #你想要运行管理界面的端口。
```

Webui 可以在 `<你的-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons