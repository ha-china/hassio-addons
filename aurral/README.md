# Aurral

[Aurral](https://github.com/lklynet/aurral) 是一个自建的音乐发现、请求管理、流式获取和播放列表导入应用，专为 Lidarr 设计，具备基于库的智能推荐功能。
此插件基于 Docker 镜像 <https://github.com/lklynet/aurral>

## 配置

| 选项 | 默认值 | 描述 |
|---|---|---|
| `download_folder` | `/share/aurral/downloads` | Aurral 写入流式下载的路径。必须位于 `/share` 之下。 |
| `weekly_flow_folder` | `weekly-flow` | 添加到 `download_folder` 中以存储周快报文件的子文件夹名称。完整路径将为 `download_folder/weekly_flow_folder`。 |

## 安装

1. 将我的附加软件源添加到您的 Home Assistant 实例中（在 Supervisor 附加软件商店右上角，或如果您已配置了我的 Home Assistant，则点击下方按钮）

   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加附加软件源对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)

2. 安装此附加软件。
3. 点击 `保存` 按钮以保存您的配置。
4. 将 `download_folder` 选项设置为您喜欢的路径。
5. 可选地设置 `weekly_flow_folder` 以自定义周报子文件夹名称。
6. 启动附加软件。
7. 检查附加软件的日志，查看一切是否顺利。
8. 打开 Web 界面并完成上货流程。

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
