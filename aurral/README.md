# Aurral

[Aurral](https://github.com/lklynet/aurral) 是一个专为 Lidarr 设计的本地部署音乐发现、请求管理、流媒体导入和播放列表导入应用，并具备基于库的智能推荐功能。
该插件基于 Docker 镜像 <https://github.com/lklynet/aurral>。

## 配置

| 选项 | 默认值 | 描述 |
|---|---|---|
| `download_folder` | `/share/aurral/downloads` | Aurral 保存下载文件的路径，包括流媒体（位于子文件夹中）。路径可以位于 `/share` 或 `/media` 下。 |
| `weekly_flow_folder` | `weekly-flow` | 无效：Aurral 会将流媒体保留在 `download_folder` 自己的子文件夹中。保留此选项是为了兼容性。 |

## 安装

1. 将我的附加组件仓库添加到 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置了 HA，则点击下方按钮）。

   [![打开 Home Assistant 实例并显示带有预填充特定仓库 URL 的附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)

2. 安装此附加组件。
3. 点击 `Save` 按钮以保存您的配置。
4. 将 `download_folder` 选项设置为您偏好的路径。
5. 启动附加组件。
6. 检查附加组件的日志以确认一切正常运行。
7. 打开 Web UI 并完成初始化设置。

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
