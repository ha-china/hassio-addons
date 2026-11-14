# Aurral

[Aurral](https://github.com/lklynet/aurral) 是专为 Lidarr 设计的本地托管音乐发现、请求管理、流（flows）和播放列表导入应用程序，并具备基于图书库的推荐功能。
该附加组件基于 Docker 镜像 <https://github.com/lklynet/aurral>

## 配置

| 选项 | 默认值 | 描述 |
|---|---|---|
| `download_folder` | `/share/aurral/downloads` | Aurral 用于写入下载文件的目录（包括流文件，将存储在其子文件夹中）。该路径可以位于 `/share` 或 `/media` 下。 |
| `weekly_flow_folder` | `weekly-flow` | 无效：Aurral 会在 `download_folder` 自身的子文件夹中保留流文件。保留此选项以保持一致性。 |

## 安装

1. 将我的附加组件仓库添加到您的家庭助手实例（在 supervisor 附加组件商店中选择右上角，或如果您已配置我的 Home Assistant，则点击下方的按钮）：

   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填的附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)

2. 安装此附加组件。
3. 单击 `保存` 按钮以保存您的配置。
4. 将 `download_folder` 选项设置为您偏好的路径。
5. 启动附加组件。
6. 检查附加组件的日志以查看一切是否正常运行。
7. 打开 Web 界面并完成上板（onboarding）步骤。

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
