# Home Assistant 附加组件：iCloud 下载器

1. 安装附加组件
2. 运行附加组件，它将失败，但会创建接下来步骤所需的目录
3. 将此仓库中的 `iclouddownloader.sh` 复制到 `/addon_configs/2effc9b9_iclouddownloader`
4. 使用您的用户名、密码和想要下载文件的存储位置编辑命令
5. 您应该能够通过复制账本块来添加多个账户，但请先让一个账户正常运行！除最后一个账户外，所有账本行的末尾都应带有 `&`，否则附加组件会在运行一小时后退出
6. 在此处查看所有可能的命令，并根据自己的喜好进行设置：https://pypi.org/project/icloudpd/1.12.0/
7. 您可以在 Home Assistant 设置 -> 系统 -> 存储中挂载一个 SMB/NFS 共享到媒体目录，并指向该位置。位置将是 `/media/ShareName/`，其中包含任何您希望下的目录结构，ShareName 是在 Home Assistant 中命名共享的名称
8. 运行/重启附加组件，它将再次失败。（不要在附加组件上点击停止）
9. 选项 1：前往您的 homeassistantIP:8080（或您配置的其他端口）并输入 2FA 代码。Ingress 不起作用
10. 选项 1：现在应该能下载您的照片
11. 选项 2：在接下来的一个小时里，通过 SSH 登录 Home Assistant（您必须在 SSH 附加组件上将保护模式设置为 false）
12. 选项 2：运行 `docker exec -it addon_2effc9b9_iclouddownloader /config/iclouddownloader.sh authorize`
13. 选项 2：输入您 iPhone 上显示的 2fa 代码（您将需要每两个月重复此重新身份验证步骤）
14. 选项 2：按 Control-C 或退出终端
15. 选项 2：最后重启一次附加组件，它应该开始下载照片。

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
