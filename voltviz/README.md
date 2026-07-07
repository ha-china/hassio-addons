# Home Assistant App: VoltViz

一个动态的实时音乐可视化工具，将声音转化为令人惊叹的视觉体验。与系统音频、麦克风以及 [Music Assistant](https://music-assistant.io/) 支持同步（通过 [Sendspin](https://www.sendspin-audio.com/)），并观看您的音乐栩栩如生。

![VoltViz](https://raw.githubusercontent.com/sanderdw/voltviz/main/images/home-assistant/music-assistant.png)

## 功能

- 30+ 种令人惊叹的视觉效果样式（粒子效果、3D、复古、节日等）
- 通过麦克风、系统音频或 Sendspin 流式传输实时音频输入
- 使用 Three.js 和 WebGL 加速渲染
- 通过 Sendspin 集成 Music Assistant
- 支持通过 URL 参数访问可视化器和设置

## 安装

1. 将存储库添加到 Home Assistant：`https://github.com/sanderdw/hassio-addons`
2. 安装 **VoltViz** 应用
3. 启动应用
4. 点击 **打开 Web UI** 通过 Ingress 访问 VoltViz
5. 连接到 Sendspin（用于 Music Assistant）
6. 播放音乐
7. 选择 VoltViz 播放器（在连接到 Music Assistant 后自动显示）

YouTube 视频：[https://youtu.be/ONP__FHpd-M](https://youtu.be/ONP__FHpd-M)
<video src="https://uto-mix.sanwil.net/install-voltviz.mp4" type="video/mp4" controls></video>

## 配置

| 选项 | 描述 |
|------|------|
| `SENDSPIN_URL` | （可选）用于服务器端代理的您的 Sendspin 服务器内部 URL。示例：`http://d5369777-music-assistant:8927` |

## Ingress

此应用使用 Home Assistant Ingress 进行无缝集成。在应用面板中点击“打开 Web UI”直接访问 VoltViz。

## Sendspin / Music Assistant

VoltViz 通过 [Sendspin](https://www.sendspin-audio.com/) 支持 [Music Assistant](https://music-assistant.io/)。

### 服务器端代理（推荐）

默认情况下，VoltViz 直接从浏览器连接到 Sendspin。这仅在内部网络上且没有 HTTPS（由于混合内容限制）的情况下有效。为了解决这个问题，应用可以通过服务器端代理 Sendspin：

1. 在应用的 **配置** 选项卡中，将 `SENDSPIN_URL` 设置为您的 Music Assistant 的内部地址：
   ```
   http://d5369777-music-assistant:8927
   ```
2. 重启应用
3. 打开 VoltViz 并点击 Sendspin 按钮
4. 将服务器 URL 输入为 `./sendspin-proxy/` 并点击连接

这将所有 Sendspin 流量（包括 WebSocket）通过 HA Ingress 路由，因此它可以通过 HTTPS 在不直接访问 Music Assistant 服务器的情况下工作。

您也可以通过将 `?sendspin=./sendspin-proxy/` 添加到 VoltViz URL 来将其添加到书签——连接对话框将自动打开并预先填充 URL。

### 直接连接

或者，点击 Sendspin 按钮，直接输入服务器 URL（例如 `http://192.168.1.100:8927`）。这需要浏览器从服务器获取 HTTP 访问权限。

## 深度链接支持

您可以使用 URL 参数直接链接到具有自定义设置的特定可视化器：

| 参数   | 描述                         | 默认值 |
|--------|------------------------------|--------|
| viz    | 可视化器名称（例如 tunnel, sphere） | sphere |
| sensitivity | 音频反应乘数（0.1–3.0） | 1.0    |
| speed  | 动画速度乘数（0.1–3.0）    | 1.0    |
| hueShift | 颜色偏移度（0–360）        | 0      |
| scale  | 元素缩放乘数（0.5–3.0）    | 1.0    |
| sendspin | Sendspin 服务器 URL         |        |

## 更多信息

- [VoltViz 网站](https://voltviz.com/)
- [VoltViz GitHub](https://github.com/sanderdw/voltviz)
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
