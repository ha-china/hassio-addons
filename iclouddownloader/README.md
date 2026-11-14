# Home Assistant 添加组件：iCloud 下载器

1. 安装添加组件
2. 运行添加组件，它将失败，但会为我们需要创建目录
3. 将此仓库中的 iclouddownloader.sh 复制到 /addon_configs/2effc9b9_iclouddownloader
4. 编辑命令以输入您的用户名、密码以及您想要下载文件的位置
5. 您可以通过复制账户块来添加多个账户，但首先要让 1 个账户工作！除了最后一个账户外，所有其他账户的该行应以 & 结尾，否则组件将在 1 小时后停止运行
6. 在此查看所有可能的命令并为所欲为：https://pypi.org/project/icloudpd/1.12.0/
7. 您可以在 Home Assistant 设置->存储中挂载一个 smb/nfs 共享到媒体目录，并指向该位置。位置将是 /media/ShareName/，及其下任何您希望的目录结构，其中 sharename 是您在 homeassistant 中命名共享的名称
8. 运行/重启添加组件，它将再次失败。（不要在组件上点击停止）
9. 选项 1：前往您的 homeassistantIP:8080（或其他您配置的端口）并输入 2FA 码。入口不支持
10. 选项 1：它应该现在下载您的照片
11. 选项 2：在接下来的 1 小时内，通过 SSH 登录到 Home Assistant（您必须在 ssh 插件中设置保护模式为 false）
12. 选项 2：运行 'docker exec -it addon_2effc9b9_iclouddownloader /config/iclouddownloader.sh authorize'
13. 选项 2：输入显示在您的 iPhone 上的 2fa 码（您每 2 个月将需要重复此重新认证步骤）
14. 选项 2：按 Control-C 或退出终端
15. 选项 2：最后一次重启组件，它应该开始下载照片。

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
