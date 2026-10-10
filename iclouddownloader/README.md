# Home Assistant 扩展程序：iCloud 下载器

1. 安装扩展程序
1. 运行扩展程序，它会失败，但会创建下一步所需的目录
1. 将此仓库中的 iclouddownloader.sh 复制到 /addon_configs/2effc9b9_iclouddownloader
1. 使用您的用户名、密码和想要下载文件的路径编辑命令
1. 您应该可以通过复制账户块来添加多个账户，但首先确保一个账户可以正常工作！除了最后一个账户外，其他账户的行尾应该有 &，否则扩展程序在一小时后将会退出
1. 查看所有可能的命令并按需设置：https://pypi.org/project/icloudpd/1.12.0/
1. 您可以在 Home Assistant 设置->系统->存储中挂载 smb/nfs 共享到媒体目录，并将其指向该位置。位置将会是 /media/ShareName/，其中 sharename 是您在 homeassistant 中为共享命名的名称
1. 运行/重启扩展程序，它将再次失败。（不要停止扩展程序）
1. 选项 1：访问您的 homeassistantIP:8080（或您配置的其他端口）并输入 2FA 码。入口功能不可用
1. 选项 1：现在应该开始下载您的照片
1. 选项 2：在一小时内，通过 SSH 登录 home assistant（您必须在 ssh 扩展程序中将保护模式设置为 false）
1. 选项 2：运行 'docker exec -it addon_2effc9b9_iclouddownloader /config/iclouddownloader.sh authorize'
1. 选项 2：输入显示在您的 iPhone 上的 2FA 码（您将需要每两个月重复此重新认证步骤）
1. 选项 2：按 Control-C 或退出终端
1. 选项 2：最后一次重启扩展程序，它应该开始下载照片。



[仓库链接]: https://github.com/jdeath/homeassistant-addons
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
