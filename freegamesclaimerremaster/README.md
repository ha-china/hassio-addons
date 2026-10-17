# Home assistant 附加组件：Free Games Claimer Remaster

这不是一个分支——而是受 vogler/free-games-claimer 启发的完全重新构建的 Python 版本。

此版本使用官方的 Free Games Claimer Remaster Docker 镜像，而不是像 alexbelgium 那样重新构建。该附加组件还将追踪 beta 版本。

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件使用了 [docker 镜像](https://github.com/P-Adamiec/Free-Games-Claimer-Remaster)。

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装方式没有区别。

1. [将我的 Hass.io 附加组件存储库][repository] 添加到您的 Hass.io 实例中。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动附加组件。
1. 它将会失败
1. 下载官方的配置文件 [.env](https://raw.githubusercontent.com/P-Adamiec/Free-Games-Claimer-Remaster/refs/heads/main/.env.example) 并将其复制到 `/addon_configs/2effc9b9_freegamesremaster/config.env`
1. 根据需要编辑密码。将 VNCIP 设置为您的 Home Assistant 内部 IP
1. 重启附加组件
1. 访问 IP:端口以查看登录过程，并根据需要手动登录。


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
