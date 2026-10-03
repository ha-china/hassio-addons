# Aurral

[Aurral](https://github.com/lklynet/aurral) 是一个用于 Lidarr 的自托管音乐发现、请求管理、流媒体和播放列表导入应用程序，具备基于库的智能推荐功能。
该插件基于 Docker 镜像 <https://github.com/lklynet/aurral>。

## 配置

| 选项 | 默认值 | 描述 |
|---|---|---|
| `download_folder` | `/share/aurral/downloads` | Aurral 保存流媒体下载文件的路径。该路径必须位于 `/share` 之下。 |
| `weekly_flow_folder` | `weekly-flow` | 每周流媒体文件附加到 `download_folder` 的子文件夹名称。完整路径将为 `download_folder/weekly_flow_folder`。 |

## 安装

1. 将我的附加组件存储库添加到您的家庭自动化实例中（在 supervisor 附加组件商店的右上角，或者如果您已配置了我的 HA，则点击下方的按钮）

   [![打开您的家庭自动化实例并显示附加组件存储库对话框，带有一个预填充的特定存储库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)

2. 安装此插件。
3. 点击 `Save` 按钮以保存您的配置。
4. 将 `download_folder` 选项设置为您首选的路径。
5. 可选地设置 `weekly_flow_folder` 以自定义每周流媒体子文件夹名称。
6. 启动插件。
7. 检查插件的日志，查看一切是否正常。
8. 打开 Web 界面并完成上板操作。

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
