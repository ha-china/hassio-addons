# Home Assistant 应用程序：文件编辑器

基于浏览器的 Home Assistant 配置文件编辑器。

![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield]

![Home Assistant 前端中的配置工具][screenshot]

## 关于

文件编辑器（前身为配置工具）是一个小型 Web 应用程序（通过 Web 浏览器访问），它提供了文件系统浏览器和文本编辑器，用于修改运行文件编辑器的机器上的文件系统。

它基于 Ace 编辑器构建，支持多种代码/标记语言的语法高亮。YAML 文件（Home Assistant 配置文件默认使用的语言）在编辑过程中会自动检查语法错误。

## 功能

- 提供具备语法高亮和 YAML Linting 功能的 Web 编辑器进行修改文件。
- 上传和下载文件。
- 在 Git 存储库中执行暂存、暂扣和提交更改，创建并切换分支，推送到远程仓库，查看差异。
- 显示可用实体、触发器、事件、条件和服务的列表。
- 点击按钮即可直接重启 Home Assistant。同样可以重启组、自动化等。需要设置 API 密码。
- 提供链接到 Home Assistant 文档和图标的直接入口。
- 在应用程序容器中执行 Shell 命令。
- 编辑器设置保存在您的浏览器中。
- 以及更多功能……

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[screenshot]: https://github.com/home-assistant/hassio-addons/raw/master/configurator/images/screenshot.png

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
