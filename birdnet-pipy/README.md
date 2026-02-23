# Home assistant add-on: BirdNET-PiPy

BirdNET-PiPy 是一个自托管系统，它使用 BirdNET 深度学习模型来从声音中识别鸟类，并提供一个现代的网页仪表板来监控检测。这个 add-on 打包了 Home Assistant 的上游项目，并支持 ingress。

## 关于

- 上游项目：https://github.com/Suncuss/BirdNET-PiPy
- 这个 add-on 在一个容器中运行 BirdNET-PiPy 后端服务、Icecast 音频流和 Vue.js 前端。

## 配置

安装后，第一次启动 add-on。从 Home Assistant (Ingress) 打开 Web UI 或直接在 `http://<host>:8011`（或你配置的端口）。
在容器启动后，在 BirdNET-PiPy UI 中配置位置、音频源和其他设置。

选项可以通过三种方式配置：

- Add-on 选项

```yaml
TZ: Etc/UTC # 时区，参见 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
ICECAST_PASSWORD: "" # 可选：为音频流设置一个持久的密码
STREAM_BITRATE: 320k # mp3 流的比特率
RECORDING_MODE: rtsp # pulseaudio | http_stream | rtsp
RTSP_URL: "" # 如果 RECORDING_MODE 是 rtsp，则必须设置
data_location: /config/data # BirdNET-PiPy 的持久数据位置
```

- Config.yaml
使用 Filebrowser add-on 在 `/config/birdnet-pipy/config.yaml` 中找到的 config.yaml 文件配置其他变量。

- Config_env.yaml
可以在那里配置其他环境变量。

### 挂载驱动器

这个 add-on 支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [在 Add-on 中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在 Add-on 中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

这个 add-on 通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在 Add-on 中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用 add-on 的 `env_vars` 选项传递额外的环境变量（大小写名称均可）。参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

## 注意事项

- 音频输入默认使用 Home Assistant 的 PulseAudio 服务器。
- Ingress 已启用；直接访问可在配置的端口上使用。
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
