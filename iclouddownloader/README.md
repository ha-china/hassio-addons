# Home Assistant 附加组件：iCloud 下载器

1. 安装附加组件
2. 运行附加组件，虽然会失败，但会创建下一步所需的目录
3. 将此仓库中的 `iclouddownloader.sh` 复制到 `/addon_configs/2effc9b9_iclouddownloader`
4. 编辑命令，填入您的用户名、密码以及想要下载文件的位置
5. 您应该能够通过复制账户块来添加多个账户，但请先让一个账户正常工作！除最后一个账户外，所有账户的末尾都应有 `&` 以结束该行，否则附加组件会在运行一小时后退出
6. 在此处查看所有可能的命令并根据喜好进行设置：https://pypi.org/project/icloudpd/1.12.0/
7. 您可以在 Home Assistant 设置->系统->存储中挂载一个 SMB/NFS 共享到媒体目录，并指向该位置。位置将是 `/media/ShareName/` 及其下的任意目录结构，其中 `sharename` 是您在家助手中标记该共享时所起的名称
8. 运行/重启附加组件，它再次会失败。（不要点击附加组件的停止按钮）
9. 方案 1：访问您的 homeassistantIP:8080（或其他您配置的端口）并输入 2FA 代码。入口功能无效
10. 方案 1：此时应该会下载您的照片
11. 方案 2：在下一个小时期间，通过 SSH 登录 Home Assistant（您必须将 SSH 附加组件的保护模式设置为 false）
12. 方案 2：运行 `docker exec -it addon_2effc9b9_iclouddownloader /config/iclouddownloader.sh authorize`
13. 方案 2：输入您的 iPhone 上显示的 2FA 代码（每两个月您将需要重复此重新认证步骤）
14. 方案 2：按 Control-C 或退出终端
15. 方案 2：最后重启附加组件，它应该开始下载照片

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
