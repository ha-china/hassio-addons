## &#9888; 打开问题: [🐛 [Seafile] 下载链接似乎不正确 (打开于2025-02-04)](https://github.com/alexbelgium/hassio-addons/issues/1753) 由 [@igorsantos07](https://github.com/igorsantos07)
# Home Assistant 插件: Seafile

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fseafile%2Fconfig.json)
![入口](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fseafile%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fseafile%2Fconfig.json)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库加星的朋友们！点击下面的图像为它加星，然后它会在右上角显示。谢谢！_

[![@alexbelgium/hassio-addons 的 Stargazers 仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/seafile/stats.png)

## 关于

---

高性能文件同步和分享，同时还具备 Markdown WYSIWYG 编辑、Wiki、文件标签及其他知识管理功能。

此插件基于 Docker 镜像 [https://hub.docker.com/r/franchetti/seafile-arm](https://hub.docker.com/r/franchetti/seafile-arm)

## 安装

---

此插件的安装相对简单，与安装其他任何插件相比没有不同。

1. 将我的插件仓库添加到你的 Home Assistant 实例中（在监督者插件商店的右上角，或者如果你已经配置了我的 HA，请点击下面的按钮）
   [![打开你的 Home Assistant 实例并显示添加插件仓库对话框，预填特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击 `保存` 按钮以存储你的配置。
4. 根据你的偏好设置插件选项。
5. 启动插件。
6. 查看插件日志以确认一切是否正常。
7. 打开 webUI 并调整软件选项。

## 配置

---

Webui 可以在 <http://homeassistant:PORT> 找到。
默认用户名/密码 : 在启动日志中描述。
可以通过应用程序 webUI 进行配置，以下选项除外：

默认名称 : me@example.com
默认密码 : a_very_secret_password

如果你将数据库存储在挂载驱动器上，请确保也在那里托管你的 sqlite 数据库：否则如果挂载出现问题，你将失去整个数据库（感谢 @cokeman0）

```yaml
PGID: user
GPID: user
TZ: timezone
PASSWORD: 可选设置 GUI 密码
CLI_ARGS: 可选传递 cli 启动参数给 seafile
localdisks: sda1 #以逗号分隔放置要挂载的硬件名称，或其标签。例：sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" #可选，列出要挂载的 smb 服务器，以逗号分隔
cifsusername: "username" #可选，smb 用户名，所有 smb 共享相同
cifspassword: "password" #可选，smb 密码
force_scheme_https: 如果在使用 https 访问入口时遇到问题，请勾选此框以强制使用 https
force_external_port: 如果在使用 https 访问入口时遇到问题，请在此记录用于访问 HA 的外部端口
```

## 支持

在 GitHub 上创建一个问题。

## 插图

---

![插图](https://seafile.com/img/slider/artistdetails.png)

[repository]: https://github.com/alexbelgium/hassio-addons