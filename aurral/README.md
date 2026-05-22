# Aurral

[Aurral](https://github.com/lklynet/aurral) 是一个自托管的音乐发现、请求管理、流和播放列表导入应用，为 Lidarr 提供具有图书馆意识的推荐。

此插件基于以下 docker 镜像：[https://github.com/lklynet/aurral](https://github.com/lklynet/aurral)

## 配置

| 选项 | 默认值 | 描述 |
|---|---|---|
| `download_folder` | `/share/aurral/downloads` | Aurral 写入流下载的路径。必须在 `/share` 下。 |
| `weekly_flow_folder` | `weekly-flow` | 添加到 `download_folder` 的子文件夹名称，用于每周流文件。完整路径为 `download_folder/weekly_flow_folder`。 |

## 安装

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在右上角的监督器插件存储中，或点击下面的按钮如果您已经配置了 HA）

   ![打开您的 Home Assistant 实例并显示添加插件仓库对话框，其中预填充了特定的仓库 URL](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)(https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)

2. 安装此插件。
3. 点击 `保存` 按钮以存储您的配置。
4. 将 `download_folder` 选项设置为您的首选路径。
5. 可选地设置 `weekly_flow_folder` 以自定义每周流子文件夹名称。
6. 启动插件。
7. 检查插件的日志以查看一切是否顺利。
8. 打开 WebUI 并完成设置。
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
