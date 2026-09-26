# Home Assistant App: VoltViz

一个动态实时音乐可视化工具，将声音转化为令人惊叹的视觉体验。与您的系统音频、麦克风以及 [Music Assistant](https://music-assistant.io/) 支持（通过 [Sendspin](https://www.sendspin-audio.com/)）同步，并眼睁睁看着音乐焕发生机。

![VoltViz](https://raw.githubusercontent.com/sanderdw/voltviz/main/images/home-assistant/music-assistant.png)

## 功能特性

- 30+ 种令人惊叹的视觉效果样式（粒子特效、3D、复古、音乐节等）
- 通过麦克风、系统音频或 Sendspin 流媒体实现实时音频输入
- 使用 Three.js 和 WebGL 实现 GPU 加速渲染
- 通过 Sendspin 实现 Music Assistant 集成
- 支持通过 URL 参数深度链接可视化和设置

## 安装

1. 将仓库添加到 Home Assistant：`https://github.com/sanderdw/hassio-addons`
2. 安装 **VoltViz** 应用程序
3. 启动应用程序
4. 点击 **OPEN WEB UI** 通过 Ingress 访问 VoltViz
5. 连接到 Sendspin（用于 Music Assistant）
6. 按下播放键
7. 选择 VoltViz 播放器（连接后将在 Music Assistant 中自动可见）

Youtube 视频：[https://youtu.be/ONP__FHpd-M](https://youtu.be/ONP__FHpd-M)
<source src="https://uto-mix.sanwil.net/install-voltviz.mp4" type="video/mp4" />

## 配置

| 选项 | 描述 |
|--------|-------------|
| `SENDSPIN_URL` | (可选) 您的 Sendspin 服务器的内部 URL，用于服务器端代理。示例：`http://d5369777-music-assistant:8927` |

## Ingress

该应用程序使用 Home Assistant Ingress 进行无缝集成。在应用程序面板中点击"OPEN WEB UI"，可直接在 Home Assistant 中访问 VoltViz。

## Sendspin / Music Assistant

VoltViz 支持通过 [Sendspin](https://www.sendspin-audio.com/) 集成 [Music Assistant](https://music-assistant.io/)。

### 服务器端代理（推荐）

默认情况下，VoltViz 会从浏览器直接连接到 Sendspin。这仅在内部网络且没有 HTTPS（由于混合内容限制）的情况下有效。为了解决这个问题，应用程序可以通过服务器端代理 Sendspin：

1. 在应用程序 **Configuration** 选项卡中，将 `SENDSPIN_URL` 设置为您的 Music Assistant 内部地址：
   ```
   http://d5369777-music-assistant:8927
   ```
2. 重启应用程序
3. 打开 VoltViz 并点击 Sendspin 按钮
4. 输入 `./sendspin-proxy/` 作为服务器 URL 并点击连接

这将将所有 Sendspin 流量（包括 WebSocket）路由通过 HA Ingress，因此可以在 HTTPS 下工作，而无需直接访问 Music Assistant 服务器。

您也可以通过在 VoltViz URL 后追加 `?sendspin=./sendspin-proxy/` 对其进行书签——连接对话框将自动打开，URL 将预填充。

### 直接连接

 Alternatively，点击 Sendspin 按钮并直接输入服务器 URL（例如 `http://192.168.1.100:8927`）。这需要浏览器对服务器的 HTTP 访问权限。

## 深度链接支持

您可以通过 URL 参数直接链接到具有自定义设置的特定可视化工具：

| 参数   | 描述                         | 默认值 |
|-------|-----------------------------|-------|
| viz   | 可视化样式名称（例如 tunnel, sphere） | sphere |
| sensitivity | 音频反应度乘数 (0.1–3.0)         | 1.0     |
| speed   | 动画速度乘数 (0.1–3.0)            | 1.0     |
| hueShift | 颜色偏移度 (0–360)                | 0       |
| scale   | 元素缩放乘数 (0.5–3.0)            | 1.0     |
| sendspin | Sendspin 服务器 URL              |       |

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
