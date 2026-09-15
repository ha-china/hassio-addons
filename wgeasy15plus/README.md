# Home Assistant 附加组件：WireGuard Easy 版 v15+

这是在任何 Linux 主机上安装和管理 WireGuard 的最简单方法！

此版本运行带有 Home Assistant 入口支持（Ingress）的 WG Easy v15+。

**问题：2026 年 6 月 23 日 | 查看此线程以了解在 HAOS 18 上运行方向** https://github.com/jdeath/homeassistant-addons/issues/86#issuecomment-4778605817

**需要使用此修复的 HA Supervised (基于 Raspberry Pi OS Bookworm)** https://github.com/jdeath/homeassistant-addons/issues/88

请记住，要在 UI 前方使用反向代理以保证安全。此版本允许非安全访问以进行设置，但除非在您的本地网络中，否则不应使用它。

_感谢所有为我仓（repo）点过星星的人！要想点星，请点击下方的图片，它将被移至右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于此附加组件

此附加组件基于 [docker 镜像](https://github.com/wg-easy/wg-easy)。

*   一体化：WireGuard + Web UI。
*   通过 HA 侧边栏支持 Ingress。
*   Ingress 适用于基本命令（新增客户端、显示二维码），但无法下载配置文件。
*   易于安装，使用简单。
*   列表、创建、编辑、删除、启用和禁用客户端。
*   显示客户端的二维码。
*   下载客户端的配置文件。
*   显示哪些客户端已连接。
*   每个已连接客户端的 Tx/Rx 图表。
*   支持 Gravatar。

## 安装

此附加组件的安装非常简单，与其他 Hass.io 附加组件的安装没有不同。

1.  将我的 [Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
2.  安装此附加组件。
3.  设置端口（或保留默认值）。
4.  在路由器上转发 TCP 和 UDP 端口。转发相同的端口，不要尝试将它们设置为不同值。
5.  启动附加组件。此附加组件需要一些时间启动。给予它时间，并多次点击重载。
6.  为了设置附加组件，您必须首先前往非 Ingress 模式并更改 URL。
7.  前往 `http://HomeAssistantIPAddress:Port/`（端口可能为 51821）。
8.  它会将 URL 重新加载到类似 `http://192.168.1.XXX:51821/login` 的地址。
9.  移除 `login` 并更改为 `setup/1`。
10. 运行向导并设置一切。
11. 关闭 Web 浏览器标签页。
12. 返回 Home Assistant 应用。
13. 打开 WebUI (ingress) 或直接访问端口 51821。
14. 输入您的登录信息，它将像正常情况一样工作。
15. 如果您访问 http://port:ip 但无法登录，请确保 URL 看起来像 `http://192.168.1.XXX:51821/login`。
16. 如果您搞砸了。关闭应用程序，清除 `/addon_configs/2effc9b9_wgeasy15plus`，重新启动，然后执行 `setup/1` 技巧。

## 配置

您的配置将保存在 /addon_configs/2effc9b9_wgeasy15plus

> 如果使用 Adguard Home 附加组件 https://github.com/hassio-addons/addon-wireguard，请将 DNS 设置为 172.30.32.1

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
