# Home Assistant 插件：BirdNET-PiPy

BirdNET-PiPy 是一个自托管系统，使用 BirdNET 深度学习模型从鸟类的声音中识别鸟类，并提供现代化的 Web 仪表盘来监测检测结果。该插件将 Home Assistant 的上游项目与 Ingress 支持封装在一起。

## 关于

- 上游项目：https://github.com/Suncuss/BirdNET-PiPy
- 此插件在一个容器内运行 BirdNET-PiPy 后端服务、Icecast 音频流和 Vue.js 前端。

## 安装

1. 将我的仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置了此 HA，请点击下方按钮）。
   [![打开您的 Home Assistant 实例并显示带有预填特定仓库 URL 的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 启动附加组件。
1. 检查附加组件的日志，以确保一切正常。

## 配置

首次安装后，启动附加组件。从 Home Assistant（Ingress）打开 Web 用户界面，或直接访问 `http://<host>:8011`（或您配置的端口）。
容器启动后，在 BirdNET-PiPy UI 中配置位置、音频源和其他设置。

可以通过三种方式配置选项：

- 插件选项

```yaml
ICECAST_PASSWORD: "" # 可选：Icecast 音频流的持久化密码
data_location: /config/data # 持久化数据位置（位于 /config，/share 或 /data 下）
env_vars: # 可选：额外的环境变量
  - name: STREAM_BITRATE
    value: 320k # Icecast mp3 流比特率（默认 320k）
```

- config.yaml
可以使用位于 `/config/birdnet-pipy/config.yaml` 的 config.yaml 文件配置附加变量，该文件可通过 Filebrowser 插件访问。

- Config_env.yaml
可以在那里配置额外的环境变量。

### 挂载驱动器

此插件支持挂载本地驱动器和不远程 SMB 共享：

- **本地驱动器**：请参阅 [附加组件中的挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [附加组件中的挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [附加组件中的运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 注意事项

- 音频输入默认使用 Home Assistant 的 PulseAudio 服务器。
- Ingress 已启用；直接访问可用于配置的端口。

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
