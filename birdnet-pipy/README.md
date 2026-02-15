# Home assistant add-on: BirdNET-PiPy

BirdNET-PiPy is a self-hosted system that uses the BirdNET deep-learning model to identify birds from their sounds, with a modern web dashboard for monitoring detections. This add-on packages the upstream project for Home Assistant with ingress support.

## About

- Upstream project: https://github.com/Suncuss/BirdNET-PiPy
- This add-on runs the BirdNET-PiPy backend services, Icecast audio stream, and Vue.js frontend in a single container.

## Configuration

Install, then start the add-on a first time. Open the Web UI from Home Assistant (Ingress) or directly at `http://<host>:8011` (or the port you configure).
Configure location, audio source, and other settings in the BirdNET-PiPy UI after the container starts.

Options can be configured through three ways:

- Add-on options

```yaml
TZ: Etc/UTC # Timezone, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
ICECAST_PASSWORD: "" # Optional: set a persistent password for the audio stream
STREAM_BITRATE: 320k # Bitrate for the mp3 stream
RECORDING_MODE: rtsp # pulseaudio | http_stream | rtsp
RTSP_URL: "" # Required if RECORDING_MODE is rtsp
data_location: /config/data # Persistent data location for BirdNET-PiPy
```

- Config.yaml
Additional variables can be configured using the config.yaml file found in `/config/birdnet-pipy/config.yaml` using the Filebrowser add-on.

- Config_env.yaml
Additional environment variables can be configured there.

### Mounting Drives

This add-on supports mounting both local drives and remote SMB shares:

- **Local drives**: See [Mounting Local Drives in Addons](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **Remote shares**: See [Mounting Remote Shares in Addons](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### Custom Scripts and Environment Variables

This add-on supports custom scripts and environment variables through the `addon_config` mapping:

- **Custom scripts**: See [Running Custom Scripts in Addons](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars option**: Use the add-on `env_vars` option to pass extra environment variables (uppercase or lowercase names). See https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 for details.

## Notes

- Audio input uses Home Assistant's PulseAudio server by default.
- Ingress is enabled; direct access is available on the configured port.

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
