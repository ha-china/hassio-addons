# Home Assistant 插件：Komga

免费开源的漫画/漫画多媒体服务器。

[Komga](https://komga.org) 组织您的漫画、漫画、BD、杂志和电子书，通过网络阅读器提供服务，并向第三方阅读器（如 Tachiyomi/Mihon、Panels、Chunky 等）暴露 OPDS、Kobo 同步和 REST API。

## 关于

- 在任何浏览器中浏览和阅读 CBZ、CBR、PDF 和 EPUB 文件
- 导入元数据、编辑系列/书籍、建立收藏和阅读列表
- 多用户支持，具有每个用户的库限制和年龄评级
- OPDS v1/v2、Kobo 同步以及文档化的 REST API

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Komga** 插件。
3. 启动插件并从侧边栏（入口）打开它，或在端口 `25600` 上访问：
   `http://homeassistant:25600/komga`。
4. 当Web 界面提示时创建初始用户帐户。
5. 添加指向您的漫画的库，例如 `/media/comics` 或 `/share/comics`。

首次启动比平时耗时更长：Komga 是一个 JVM 应用程序，并在首次启动时构建其数据库和搜索索引。

## 配置

| 选项 | 描述 |
|--------|-------------|
| `PUID` / `PGID` | 应用于插件配置目录的权限。默认为 `0`（root）。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `localdisks` | 本地磁盘挂载点，例如 `sda1` 或磁盘标签。 |
| `networkdisks` | 要挂载的 SMB 共享，例如 `//192.168.1.2/comics`。挂载到 `/mnt` 下。 |
| `cifsusername` / `cifspassword` / `cifsdomain` | SMB 共享的凭据。 |
| `smbv1` | 允许旧的 SMBv1 协议。 |
| `env_vars` | 传递给 Komga 的额外环境变量。参见 [wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

大多数 Komga 设置可以通过使用上游命名通过 `env_vars` 传递，参见 [Komga 配置选项](https://komga.org/docs/installation/configuration/)。一个常见的例子是：

- `JAVA_TOOL_OPTIONS` = `-Xmx1g`——在小机器上限制 JVM 堆内存。

`SERVER_SERVLET_CONTEXTPATH` 和 `SERVER_PORT` 被插件保留：入口围绕 `/komga` 路径在 25600 端口构建，覆盖任何内容都会破坏侧边栏面板。

## 入口和 URL

Komga 从 `/komga` 子路径服务，以便它在 Home Assistant 入口后也能工作：

- 从 Home Assistant 侧边栏：入口，无需额外设置
- 直接访问：`http://homeassistant:25600/komga`

外部客户端——OPDS 阅读器、Kobo 同步、Tachiyomi/Mihon、Panels 等——必须使用直接的 `http://homeassistant:25600/komga` URL。入口基于浏览器会话，因此这些客户端无法通过它进行认证。

## 数据

Komga 的数据库、日志和搜索索引位于插件内的 `/config` 目录中，该目录被 Home Assistant 映射到此插件自身的配置目录——`/addon_configs/<repository_id>_komga`，可以通过 Filebrowser 插件浏览。它们在插件更新后依然存在。库保持在与您放置的位置，在 `/media`、`/share` 或挂载磁盘下。

## 支持

- [Komga 上游项目](https://github.com/gotson/komga)
- [插件仓库问题](https://github.com/alexbelgium/hassio-addons/issues)

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
