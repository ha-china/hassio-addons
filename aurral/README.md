# Aurral

[Aurral](https://github.com/lklynet/aurral) 是一个自托管的音乐发现、请求管理、流式传输和播放列表导入应用程序，专为 Lidarr 设计，并具备基于图书馆的智能推荐功能。
该附加组件基于 Docker 镜像 <https://github.com/lklynet/aurral>

## 配置

| 选项 | 默认值 | 描述 |
|---|---|---|
| `download_folder` | `/share/aurral/downloads` | Aurral 保存其下载文件的路径（包括子文件夹中的流式传输）。该路径可以是 `/share` 或 `/media` 下的子目录。 |
| `weekly_flow_folder` | `weekly-flow` | 无作用：Aurral 会将流式传输保存在其自身位于 `download_folder` 的子文件夹中。保留此选项以供兼容。 |

## 安装

1. 将附加组件存储库添加到您的 Home Assistant 实例中（在 Supervisors 附加组件商店中点击右上角按钮，或如果已配置我的 HA 则点击下方按钮）。

   [![打开您的 Home Assistant 实例并显示带有特定存储库 URL 预填充的附加组件存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)

2. 安装此附加组件。
3. 点击 `Save` 按钮以保存配置。
4. 将 `download_folder` 选项设置为您优选的路径。
5. 启动附加组件。
6. 记录附加组件以检查一切是否正常运行。
7. 打开 Web 界面并完成 onboard。

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
