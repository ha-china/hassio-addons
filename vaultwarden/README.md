# Home assistant add-on: Vaultwarden

一个用 Rust 编写的 Bitwarden 服务器 API 的替代实现，与上游 Bitwarden 客户端*兼容，非常适合自托管部署，因为在运行官方资源密集型服务可能并不理想的情况下，可以完美运行。

此版本、官方 homeassistant 插件和 Alex Belgium 的插件之间的区别在于，它将数据存储在 /addons_config 中，这使得在意外卸载或进行不良升级时更容易移动它们。你必须确保使用 argon 加密的密码，这应该已经是默认设置。此外，内置的 homeassistant 插件通常不会更新（即使多次请求也是如此）。此插件也仅使用官方的 docker 镜像，没有进行任何更改，而其他插件会编辑镜像以添加额外的内容。

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它将在右上角显示。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用 [docker 镜像](https://github.com/dani-garcia/vaultwarden)。

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库][repository]添加到你的 Hass.io 实例。
1. 点击 `保存` 按钮以保存你的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. WebUI 应该可以通过 <your-ip>:port 访问。
1. 你的数据将存储在 /addon-configs/2effc9b9_vaultwarden/

如果你已经有现有的 vaultwarden 安装（默认插件或 alexbelgium 的），则：

1. 确保我的插件运行一次，但然后确保停止它
2. 登录 homeassistant cli
3. `docker ps | grep "vault"`
4. 找到 docker 容器ID
5. `docker cp CONTAINERID:/data /addon-configs/2effc9b9_vaultwarden/`
6. 然后在 `/addon-configs/2effc9b9_vaultwarden/` 中将 `data` 文件夹中的所有内容移动到 `/addon-configs/2effc9b9_vaultwarden/`
7. 现在所有文件应该都在 `/addon-configs/2effc9b9_vaultwarden/`
8. 停止默认插件，关闭 "启动时启动"
9. 启动我的插件
10. 查看 文档进行配置：https://github.com/dani-garcia/vaultwarden


## 配置

1. 设置完成后，从外部网络移除对管理控制面板的访问权限
2. 你可以通过停止容器并编辑 `/addon-configs/2effc9b9_vaultwarden/config.json` 手动配置许多参数
3. 确保你的 `admin_token` 是 argon2 加密的：https://github.com/dani-garcia/vaultwarden/wiki/Enabling-admin-page#secure-the-admin_token
4. 如果不是，`docker ps | grep "vault"` 前面的数字/字母是容器ID
5. `docker exec -it containerID /bin/bash`
6. `cd /` `/vaultwarden hash --preset owasp` 输入密码，然后替换管理令牌
7. 由于此文件是可访问的，我想任何人都可以这样做，所以请小心。如果你有访问你的 homeassistant 机器的权限，这也可以在容器内完成，所以实际上并没有更安全

```
port : 7277 #你想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

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
