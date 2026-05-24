# 家居助理插件：WireGuard Easy 版本 15+

您找到了在任意 Linux 主机上安装和管理 WireGuard 的最简单方法！

此插件运行 WG Easy 版本 15+，并支持 Home Assistant 入口。

请记住，您需要在 UI 前面使用反向代理来确保安全。此版本为设置启用非安全访问，但除非在您的本地网络中，否则不应使用它。

_感谢所有给我的仓库点星的人！要点星，请点击下面的图片，然后它将显示在右上角。谢谢！_

[![星标 @jdeath/homeassistant-addons 的 GitHub 仓库](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件基于 [docker 镜像](https://github.com/wg-easy/wg-easy)。

* 一站式：WireGuard + Web UI。
* 通过 HA 侧边栏支持入口。
* 安装简单，使用简便。
* 列出、创建、编辑、删除、启用和禁用客户端。
* 显示客户端的二维码。
* 下载客户端的配置文件。
* 显示连接客户端的统计信息。
* 为每个连接客户端提供 Tx/Rx 图表。
* 支持Gravatar。

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的 Hass.io 插件仓库[repository]添加到您的 Hass.io 实例中。
1. 安装此插件。
1. 设置您的端口（或保留默认设置）
1. 在您的路由器上转发 TCP 和 UDP 端口。转发相同的端口，不要尝试使它们不同。
1. 启动插件。此插件启动需要一些时间。请给它一些时间，然后多次刷新。
1. 要设置插件，您必须首先进入非入口并更改 URL
1. 进入 `http://HomeAssistantIPAddress:Port/`（端口可能是 51821）
1. 它将重新加载 URL 为类似 `http://192.168.1.XXX:51821/login`
1. 删除 `login` 并将其改为 `setup/1`
1. 通过向导完成设置
1. 关闭网页标签
1. 回到 home assistant 应用程序。
1. 打开 WebUI（入口）或直接在端口 51821 上。
1. 输入您的登录信息，应该像平常一样工作。
1. 如果您访问 http://port:ip 而无法登录，请确保 URL 看起来像 `http://192.168.1.XXX:51821/login`
1. 如果您搞砸了某件事。关闭应用程序，清除 `/addon_configs/2effc9b9_wgeasy15plus`，重启，然后执行 `setup/1` 操作
   
## 配置

您的配置将保存在 /addon_configs/2effc9b9_wgeasy15plus 中

> 如果想使用 Adguard Home 插件 https://github.com/hassio-addons/addon-wireguard ，请将 DNS 设置为 172.30.32.1

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
