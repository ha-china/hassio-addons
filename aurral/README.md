# Aurral

[Aurral](https://github.com/lklynet/aurral) 是一个自托管的音乐发现、请求管理、流（flows）及播放列表导入应用，专为 Lidarr 设计，并具备基于库（library-aware）的推荐功能。  
此插件基于 Docker 镜像 <https://github.com/lklynet/aurral>

## 配置

| 选项 | 默认值 | 描述 |
|---|---|---|
| `download_folder` | `/share/aurral/downloads` | Aurral 编写下载文件（包括子文件夹中的流）的路径。可位于 `/share` 或 `/media` 下。 |
| `weekly_flow_folder` | `weekly-flow` | 无影响：Aurral 会将流保存在 `download_folder` 的独立子文件夹中。保留此选项以保持兼容性。 |

## 安装

1. 将我的插件仓库添加到您的 Home Assistant 实例（在 supervisor 插件商店顶部右键，或如果您已配置我的 HA，点击下方按钮）。

   [![打开您的 Home Assistant 实例并显示带有预填特定仓库 URL 的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)

2. 安装此插件。
3. 点击 `保存` 按钮以保存您的配置。
4. 将 `download_folder` 选项设置为您偏好的路径。
5. 启动插件。
6. 查看插件日志以确认一切正常。
7. 打开 WebUI 并完成上板流程。

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
