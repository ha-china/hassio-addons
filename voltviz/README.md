# Home Assistant App: VoltViz

一个动态的实时音乐可视化程序，将声音转化为令人惊叹的视觉体验。与系统音频、麦克风和[音乐助手](https://music-assistant.io/)支持（通过[Sendspin](https://www.sendspin-audio.com/））同步，并观看你的音乐栩栩如生。

![VoltViz](https://raw.githubusercontent.com/sanderdw/voltviz/main/images/home-assistant/music-assistant.png)

## 功能

- 30+种令人惊叹的视觉样式（粒子效果、3D、复古、节日等）
- 通过麦克风、系统音频或Sendspin流实时音频输入
- 使用Three.js和WebGL的GPU加速渲染
- 通过Sendspin集成音乐助手
- 通过URL参数支持可视化器和设置的深度链接

## 安装

1. 将仓库添加到Home Assistant：`https://github.com/sanderdw/hassio-addons`
2. 安装**VoltViz**应用
3. 启动应用
4. 点击**打开Web UI**通过Ingress访问VoltViz
5. 连接到Sendspin（用于音乐助手）
6. 播放音乐
7. 要控制VoltViz播放器，您需要取消隐藏VoltViz客户端 -> 设置 -> 播放器 -> VoltViz -> 取消选择隐藏...
8. 在底部保存
9. 选择VoltViz播放器

YouTube视频：[https://youtu.be/ONP__FHpd-M](https://youtu.be/ONP__FHpd-M)
<video src="https://uto-mix.sanwil.net/install-voltviz.mp4" type="video/mp4" />

## 配置

| 选项 | 描述 |
|------|------|
| `SENDSPIN_URL` | （可选）服务器端代理的Sendspin服务器内部URL。例如：`http://d5369777-music-assistant:8927` |

## Ingress

此应用使用Home Assistant Ingress实现无缝集成。在附加组件面板中点击“打开Web UI”以直接在Home Assistant中访问VoltViz。

## Sendspin / 音乐助手

VoltViz通过[Sendspin](https://www.sendspin-audio.com/)支持[音乐助手](https://music-assistant.io/)。

### 服务器端代理（推荐）

默认情况下，VoltViz从浏览器直接连接到Sendspin。这仅在内部网络上且没有HTTPS（由于混合内容限制）的情况下有效。为了解决这个问题，应用可以通过服务器端代理Sendspin：

1. 在附加组件的**配置**选项卡中，将`SENDSPIN_URL`设置为音乐助手的内部地址：
   ```
   http://d5369777-music-assistant:8927
   ```
2. 重启应用
3. 打开VoltViz并点击Sendspin按钮
4. 将服务器URL输入为`./sendspin-proxy/`并点击连接

这将使所有Sendspin流量（包括WebSocket）通过HA Ingress路由，因此它可以在HTTPS下工作，无需直接访问音乐助手服务器。

您也可以通过将`?sendspin=./sendspin-proxy/`附加到VoltViz URL来将其保存为书签——连接对话框将自动打开并预先填充URL。

### 直接连接

或者，点击Sendspin按钮并直接输入服务器URL（例如`http://192.168.1.100:8927`）。这需要浏览器从服务器获取HTTP访问权限。

## 深度链接支持

您可以使用URL参数直接链接到特定的可视化器并使用自定义设置：

| 参数   | 描述                         | 默认 |
|--------|------------------------------|------|
| viz    | 可视化器名称（例如tunnel，sphere）| sphere|
| sensitivity | 音频反应倍数（0.1–3.0）      | 1.0  |
| speed  | 动画速度倍数（0.1–3.0）      | 1.0  |
| hueShift | 颜色偏移度数（0–360）        | 0    |
| scale  | 元素缩放倍数（0.5–3.0）      | 1.0  |
| sendspin | Sendspin服务器URL           |      |

## 更多信息

- [VoltViz网站](https://voltviz.com/)
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
