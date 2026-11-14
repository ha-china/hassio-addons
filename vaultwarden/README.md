# Home assistant 插件：Vaultwarden

这是用 Rust 编写的 Bitwarden 服务器 API 替代实现，可与上游 Bitwarden 客户端*兼容，非常适合自托管部署，在运行官方资源消耗较大的服务可能不理想时尤为合适。

此版本与官方 homeassistant 插件及 Alex Belgium 的插件的区别在于，数据存储在 `/addons_config` 中，这样如果误卸载或升级出现问题，移动文件会变得更容易。请务必使用 argon 加密密码，这应该是现在的默认设置。此外，内置的 homeassistant 插件经常得不到更新（即使经过多次请求）。本插件仅使用官方 docker 镜像，无任何修改，而其他插件会修改镜像以添加额外内容。

_感谢 everyone 为我的仓库点赞！要点赞，请点击下方的图片，之后它将在右上角显示。谢谢大家！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用 [docker 镜像](https://github.com/dani-garcia/vaultwarden)。

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将 [我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
1. 点击 `Save` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件日志以确认一切顺利。
1. 通过 `<your-ip>:port` 打开 Web 界面应可正常工作。
1. 您的数据将存储在 `/addon-configs/2effc9b9_vaultwarden/`

如果您已有现成的 vaultwarden 安装（默认插件或 alexbelgium 的），
1. 确保我的插件已运行过一次，但之后务必停止它
1. 登录 homeassistant cli
1. `docker ps | grep "vault"`
1. 查找 docker 容器 ID
1. `docker cp CONTAINERID:/data /addon-configs/2effc9b9_vaultwarden/`
1. 然后在 `/addon-configs/2effc9b9_vaultwarden/` 将所有内容从 `data` 文件夹移动到 `/addon-configs/2effc9b9_vaultwarden/`
1. 所有文件现在应都在 `/addon-configs/2effc9b9_vaultwarden/`
1. 停止默认插件，关闭"开机自启"
1. 启动我的插件
1. 查看文档以进行配置：https://github.com/dani-garcia/vaultwarden


## 配置
1. 一旦设置完成，从您的网络之外移除对管理控制面板的访问
1. 您可以通过停止容器并编辑 `/addon-configs/2effc9b9_vaultwarden/config.json` 来手动配置许多参数
1. 确保您的 `admin_token` 是 argon2 加密的：https://github.com/dani-garcia/vaultwarden/wiki/Enabling-admin-page#secure-the-admin_token
1. 如果不是，`docker ps | grep "vault"` ，前面的数字/字母即为容器 ID
2. `docker exec -it containerID /bin/bash`
3. `cd /` `/vaultwarden hash --preset owasp` 输入密码，然后替换 admin token
4. 由于此文件可访问，我猜任何人都可以做到，因此要小心。如果您有权访问您的 homeassistnat 机器，也可以在容器内执行此操作，所以并不会更安全


```
port : 7277 #您想要运行的端口号。
```

Web 界面可在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
