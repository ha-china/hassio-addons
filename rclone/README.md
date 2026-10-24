# 非官方 Home Assistant 附加组件：Rclone

作为 Home Assistant 附加组件捆绑的 Rclone。

## 关于

Rclone（“云存储的 rsync"）是一个用于从不同云存储提供商同步文件和目录的命令行程序。此附加组件仅可用于将您的 Home Assistant 文件（例如快照）同步到远程位置。

[点击此处查看完整的 Rclone 文档](https://rclone.org/docs/)

## 已知问题和限制

- 您需要手动创建 rclone 配置

### Google Drive 根文件夹 ID

当您创建 Google Drive 远程时，必须指定根文件夹的 ID。如果未指定此值，同步将失败。

在运行 `rclone ls [drive]:[path]` 之后，您可以轻松找到根文件夹 ID（当然，需要用您的远程名称和远程路径分别替换 `[drive]` 和 `[path]`）。然后，此 ID 将填入您的 `rclone.conf` 文件中。

## 最后说明

本项目与 Rclone、Rclone 维护团队或 Nick Craig-Wood 无任何关联，仅是一个社区努力。Rclone 本身采用 [MIT 许可证](https://rclone.org/licence/) 分发。

从此仓库分叉得出 ![https://github.com/alex3305/home-assistant-addons](https://github.com/alex3305/home-assistant-addons)。

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
