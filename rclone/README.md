# 非官方 Home Assistant Add-ons：Rclone

作为 Home Assistant Add-on 捆绑的 Rclone。

## 关于

Rclone ("适合云存储的 rsync") 是一个同步文件并将文件和文件夹同步到和从不同云服务提供商处的命令行程序。此 add-on 只能用于将您的 Home Assistant 文件（如快照）同步到远程位置。

[点击此处访问完整的 Rclone 文档](https://rclone.org/docs/)

## 已知问题和限制

- 您将必须手动创建 rclone 配置

### Google Drive 根文件夹 ID

创建 Google Drive 远程时，您必须指定根文件夹的 ID。如果您没有指定此值，同步将会失败。

您可以很容易地找到根文件夹的 ID，方法是运行您的 `rclone config` 步骤，并使用 `rclone ls [drive]:[path]`（当然，将 `[drive]` 和 `[path]` 分别替换为您自己的远程名称和远程路径）。该 ID 随后将填入您的 `rclone.conf` 文件。

## 最终备注

本项目与 Rclone、Rclone 维护者团队或 Nick Craig-Wood 无关，只是社区努力的一部分。Rclone 本身在 [MIT 许可证](https://rclone.org/licence/) 下发布。

从 ![https://github.com/alex3305/home-assistant-addons](https://github.com/alex3305/home-assistant-addons) 分叉而来

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
