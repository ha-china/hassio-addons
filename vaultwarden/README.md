# Home Assistant 扩展：Vaultwarden

使用 Rust 编写的 Bitwarden 服务器 API 的替代实现，与上游 Bitwarden 客户端兼容*，非常适合自托管部署，在运行官方资源密集型服务可能不是最佳选择的情况下。

与官方 Home Assistant 扩展和 Alex Belgium 的扩展相比，这个版本的差异在于它将数据存储在 `/addons_config` 中，这使得在意外卸载或升级失败时移动数据更加容易。你必须确保使用 argon 加密的密码，这应该是默认设置。此外，内置的 Home Assistant 扩展通常不会更新（即使经过多次请求）。此扩展也仅使用官方的 Docker 镜像，没有进行任何更改，而其他扩展会编辑镜像添加额外内容。

_感谢所有为我的仓库点星的人！要为它点星，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此扩展使用 [docker 镜像](https://github.com/dani-garcia/vaultwarden)。

## 安装

此扩展的安装非常简单，与安装任何其他 Hass.io 扩展没有区别。

1. 将我的 Hass.io 扩展仓库 [repository] 添加到您的 Hass.io 实例中。
1. 点击“保存”按钮以存储您的配置。
1. 启动扩展。
1. 检查扩展的日志以查看是否一切顺利。
1. 打开 WebUI 应该可以通过 <your-ip>:port 访问。
1. 您的数据将存储在 /addon-configs/2effc9b9_vaultwarden/。

如果您已有现有的 vaultwarden 安装（默认扩展或 alexbelgium 的），
1. 确保我的扩展已运行一次，但之后请确保停止它
1. 登录 homeassistant cli
1. `docker ps | grep "vault"`
1. 找到 docker 容器ID
1. `docker cp CONTAINERID:/data /addon-configs/2effc9b9_vaultwarden/`
1. 然后在 `/addon-configs/2effc9b9_vaultwarden/` 中，将 `data` 文件夹中的所有内容移动到 `/addon-configs/2effc9b9_vaultwarden/`
1. 所有文件现在都应该在 `/addon-configs/2effc9b9_vaultwarden/`
1. 停止默认扩展，关闭“开机启动”
1. 启动我的扩展
1. 查阅文档进行配置：https://github.com/dani-garcia/vaultwarden


## 配置
1. 一旦设置好，请从您的网络外部移除对管理控制面板的访问
1. 您可以通过停止容器并编辑 `/addon-configs/2effc9b9_vaultwarden/config.json` 来手动配置许多参数
1. 确保您的 `admin_token` 已使用 argon2 加密：https://github.com/dani-garcia/vaultwarden/wiki/Enabling-admin-page#secure-the-admin_token
1. 如果没有，`docker ps | grep "vault"`，前面的数字/字母是容器ID
2. `docker exec -it containerID /bin/bash`
3. `cd /` `/vaultwarden hash --preset owasp` 输入一个密码，然后替换 admin token
4. 由于此文件是可访问的，我认为任何人都可以这样做，所以请小心。如果您可以访问您的 homeassistant 机器，这也可以在容器内部完成，所以实际上并没有更不安全 


```
端口 : 7277 #您希望运行的端口。
```

WebUI 可以在 `<your-ip>:port` 找到。

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
