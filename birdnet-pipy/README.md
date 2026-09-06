# Home Assistant 附加组件：BirdNET-PiPy

BirdNET-PiPy 是一个自托管系统，它使用 BirdNET 深度学习模型从鸟叫声中识别鸟类，并提供现代 Web 仪表板用于监控检测。该附加组件将 Home Assistant 的上游项目与入口（ingress）支持打包在一起。

## 关于

- 上游项目：https://github.com/Suncuss/BirdNET-PiPy
- 该附加组件在一个容器中运行 BirdNET-PiPy 后端服务、Icecast 音频流和 Vue.js 前端。

## 安装

1. 将我的附加组件存储库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店的右上角，或者如果您配置了此 HA，请点击下面的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 启动附加组件。
4. 查看附加组件的日志以确认一切是否成功。

## 配置

首次安装后启动附加组件。从 Home Assistant（入口）打开 Web UI，或直接访问 `http://<host>:8011`（或您配置的端口）。
容器启动后，在 BirdNET-PiPy UI 中配置位置、音频源及其他设置。

您可以通过三种方式配置选项：

- 附加组件选项

```yaml
ICECAST_PASSWORD: "" # 可选：Icecast 音频流的持久化密码
data_location: /config/data # 持久化数据位置（位于 /config、/share 或 /data 下）
env_vars: # 可选：额外的环境变量
  - name: STREAM_BITRATE
    value: 320k # Icecast mp3 流比特率（默认 320k）
```

- Config.yaml
可以通过位于 `/config/birdnet-pipy/config.yaml` 的 config.yaml 文件使用 Filebrowser 附加组件配置额外的变量。

- Config_env.yaml
可以在那里配置额外的环境变量。

### 挂载驱动器

该附加组件支持挂载本地驱动器和网络 SMB 共享：

- **本地驱动器**：请参阅 [在附加组件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：请参阅 [在附加组件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

该附加组件支持通过 `addon_config` 映射使用自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（名称可以是大写或小写）。详情见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 备注

- 音频输入默认使用 Home Assistant 的 PulseAudio 服务器。
- 已启用入口；可直接访问配置的端口。

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
