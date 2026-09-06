# Home assistant 插件：Caddy Builder

此插件将为您构建自定义 Caddy 二进制文件。

Caddy 官网（https://caddyserver.com/download）下载自定义 Caddy 二进制文件时若经常不可用或无法工作，此插件将运行 xcaddy 并根据您的需求构建包含任何插件的自定义二进制文件。

请使用 caddy2 Home Assistant 插件运行位于此仓库中的自定义 Caddy 二进制文件：https://github.com/einschmidt/hassio-addons

关于 xcaddy 的使用信息请访问这里：https://github.com/caddyserver/xcaddy

_感谢所有为我仓库点星的朋友！点击下方图像即可点星，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于此插件

此插件基于 caddy-builder [docker 镜像](https://hub.docker.com/_/caddy)。

## 安装

1. [添加我的 Hass.io 插件仓库][repository] 到您的 Hass.io 实例中。
1. 安装此插件。
1. 关闭“开机启动”开关。
1. 点击 `保存` 按钮以存储您的配置。
1. 运行一次插件。它应该可以失败，这没问题。
1. 将此仓库中的 [xcaddyCommand.sh](https://raw.githubusercontent.com/jdeath/homeassistant-addons/main/caddybuilder/xcaddyCommand.sh) 复制到 /addon_configs/XXXXXX_caddybuilder（XXXXX 是某个字符串，如 2effc9b9，并由上一步创建）
1. 编辑 xcaddyCommand.sh，填入您想要运行的 xcaddy 命令。确保所有内容都在一行中。请查阅 xcaddy 文档以添加插件。
1. 运行插件。自定义 Caddy 二进制文件应被构建到 /addon_configs/XXXXXX_caddybuilder/ 中。
1. 可能需要一些时间，请刷新日志以查看是否构建成功。
1. 将 Caddy 二进制文件复制至 /share/caddy/。
1. 重启 [caddy2](https://github.com/einschmidt/hassio-addons) 插件（不是当前插件），它应该会使用您的新自定义 Caddy 二进制文件。

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
