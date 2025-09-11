# Home assistant 插件：Shiori
 Shiori 是一个用 Go 语言编写的简单书签管理器。旨在作为 Pocket 的一个简单克隆。您可以将其用作命令行应用程序或 Web 应用程序。 
 
详细信息请访问：https://github.com/go-shiori/shiori/ 

_感谢每一个给我的仓库星标的人！如果想给我星标，请点击下方的图片，然后它会出现在右上方。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 功能

- 基本书签管理，即添加、编辑、删除和搜索。
- 从 Netscape 书签文件导入和导出书签。
- 从 Pocket 导入书签。
- 简洁清晰的命令行界面。
- 对于不想使用命令行应用程序的用户，提供简单美观的 Web 界面。
- 便携式，得益于其单一的二进制格式。
- 支持 sqlite3、PostgreSQL 和 MySQL 作为其数据库。
- 在可能的情况下，默认情况下 `shiori` 将解析可读内容并创建网页的离线档案。
- Beta：支持 Firefox 和 Chrome。

## 安装

1. [将我的 Hass.io 插件库][repository] 添加到您的 Hass.io 实例中。
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 要运行命令行 shiori 命令：
1. ssh 进入 homeassistant
1. 输入 "docker ps" 来找到 shiori 的容器 ID
1. 输入 "docker exec -it CONTAINERID command"， 
1. 访问您本地 homeassistant IP:port 管理端口。
1. 默认登录：shiori，密码：gopher
1. 创建一个新用户，默认用户将被删除
1. 您的数据存储在一个
## 配置
1. 在 Web 界面中创建新书签或设置浏览器扩展
1. 要导入现有书签，您需要手动进行 ssh 连接
1. 将您的 bookmarks.html 从浏览器复制到 homeassistant /addon_configs/2effc9b9_shiori/
1. 按照 ssh 指令进入 docker：
1. ssh 进入 homeassistant
1. 输入 "docker ps" 来找到 shiori 的容器 ID
1. 输入 "docker exec -it CONTAINERID shiori import /config/bookmarks.html"， 
```
port : 8000 #您想运行管理界面的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons