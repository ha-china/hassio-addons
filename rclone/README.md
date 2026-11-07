# 非官方 Home Assistant 附加组件：Rclone

作为 Home Assistant 附加组件打包的 Rclone。

## 关于

Rclone（“云存储的 rsync"）是一个命令行程序，用于将文件和目录同步到不同的云存储提供商。此附加组件仅可用于将您的 Home Assistant 文件（例如快照）同步到远程存储。

[点击此处查看 Rclone 完整文档](https://rclone.org/docs/)

## 已知问题与限制

- 您需要手动创建 rclone 配置文件

### Google Drive 根文件夹 ID

在创建 Google Drive 远程存储时，您必须指定根文件夹的 ID。如果未指定此值，同步将失败。

在您执行 `rclone ls [drive]:[path]` 步骤之后，可以轻松找到根文件夹 ID（请将 `[drive]`和`[path]`分别替换为您的远程名称和远程路径）。该 ID 将填充到您的 `rclone.conf` 文件中。

## 最后说明

该项目与 Rclone、Rclone 维护团队或 Nick Craig-Wood 无关，而是一个社区项目。Rclone 本身采用 [MIT 许可证](https://rclone.org/licence/) 分发。

源自 ![https://github.com/alex3305/home-assistant-addons](https://github.com/alex3305/home-assistant-addons)

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
