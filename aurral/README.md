# Aurral

[Aurral](https://github.com/lklynet/aurral) 可在您的自建服务器上发现新音乐、获取音乐并播放音乐。它具备基于库的推荐、请求、流式传输以及播放列表导入功能。  
此插件基于 Docker 镜像 <https://github.com/lklynet/aurral>

## 配置

| 选项 | 默认值 | 描述 |
|---|---|---|
| `download_folder` | `/share/aurral/downloads` | Aurral 写入下载文件的路径，包括流式传输文件（位于子目录下）。路径可以是 `/share` 或 `/media` 下的任意位置。 |

Aurral 的数据保存在 `/addon_configs/xxxxxxxx_aurral/data` 目录下；对于在 3.0.1 首次安装的版本，数据目录为 `/addon_configs/xxxxxxxx_aurral`。请将音乐库文件夹、只读文件夹以及其他路径设置为 `/media` 或 `/share` 下。

## 升级到 3.0

阅读 [Aurral 3.0 发布说明](https://github.com/lklynet/aurral/releases/tag/v3.0.0)。简要内容如下：

- 您的数据保持不变。
- 首次启动时，Aurral 会将数据库备份为 `aurral.pre-job-queue.db`，以及如果使用了 Lidarr 作为音乐库，则备份为 `aurral.pre-lidarr-conversion.db`。这些文件仅在需要回滚到 2.x 版本时使用。当 3.0 版本正常运行后，请删除它们，以减小备份体积。
- 不再支持 Lidarr 模式和 Last.fm。首次启动时，Aurral 接管 Lidarr 音乐库。如需再次通过 Lidarr 下载音乐，请在 **设置 > 插件** 中配置 Lidarr 插件。该插件仅允许下载您请求的整张专辑。单首曲目、播放列表曲目及流式传输曲目需要其他下载源，例如内置的 yt-dlp 或 slskd。请参阅 [Lidarr](https://docs.aurral.org/integrations/lidarr/)。

## 安装

1. 将我的插件仓库添加到 Home Assistant 实例中（在 supervisorn 附加组件商店右上角，或如果您已配置我的 Home Assistant，可直接点击下方按钮）。

   [![打开您的 Home Assistant 实例并显示附加组件仓库对话框，预先填写特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)

2. 安装此插件。
3. 点击 `保存` 按钮以存储配置。
4. 将 `download_folder` 选项设置为首选路径。
5. 启动插件。
6. 检查插件日志以确认运行是否顺利。
7. 打开 Web 界面并完成初始设置。

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
