# Aurral

[Aurral](https://github.com/lklynet/aurral) 是一款专为 Lidarr 提供的自托管音乐发现、请求管理、流（flows）以及播放列表导入应用程序，并具备基于已知库的推荐功能。本插件基于 Docker 镜像 <https://github.com/lklynet/aurral>。

## 配置

| 选项 | 默认值 | 描述 |
|---|---|---|
| `download_folder` | `/share/aurral/downloads` | Aurral 保存流下载的路径。必须位于 `/share` 目录之下。 |
| `weekly_flow_folder` | `weekly-flow` | 用于每周流文件附加到 `download_folder` 的子文件夹名称。完整路径将为 `download_folder/weekly_flow_folder`。 |

## 安装

1. 向您的 Home Assistant 实例添加我的附加组件仓库（在 supervisor 附加组件存储右上角，或点击下方按钮，如果您已配置了我的 HA）。

   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加附加组件对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)

2. 安装此附加组件。
3. 点击 `Save` 按钮以保存您的配置。
4. 将 `download_folder` 选项设置为您首选的路径。
5. （可选）将 `weekly_flow_folder` 设置为自定义每周流子文件夹名称。
6. 启动附加组件。
7. 检查附加组件的日志，确认一切是否顺利。
8. 打开 Web UI 并完成入门引导。

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
