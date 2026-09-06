# 非官方 Home Assistant 附加组件: Rclone

Rclone 打包为 Home Assistant 附加组件。

## 关于

Rclone（“云存储的 rsync”）是一个命令行程序，用于在不同云存储提供商之间同步文件和目录。此附加组件仅用于将您的 Home Assistant 文件（如快照）同步到远程位置。

[点击此处查看完整的 Rclone 文档](https://rclone.org/docs/)

## 已知问题和限制

- 您必须手动创建一个 rclone 配置

### Google Drive 根文件夹 ID

创建 Google Drive 远程存储时，您必须指定根文件夹的 ID。如果您未指定此值，同步将失败。

在运行 `rclone config` 步骤后，使用 `rclone ls [drive]:[path]`（当然，将 `[drive]` 和 `[path]` 分别替换为您远程存储的名称和路径）可以很容易找到根文件夹 ID。然后，此 ID 将被填入您的 `rclone.conf` 文件中。

## 最后说明

本项目与 Rclone、Rclone 维护者团队或 Nick Craig-Wood 无关，仅是社区努力的结果。Rclone 本身是根据 [MIT 许可证](https://rclone.org/licence/) 分发的。

分支自 ![https://github.com/alex3305/home-assistant-addons](https://github.com/alex3305/home-assistant-addons)
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
