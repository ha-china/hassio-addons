# OpenDisplay Wi-Fi

> **实验性** - 此附加组件仍在开发中。

[![打开您的 Home Assistant 实例并显示一个附加组件的仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=0f1cc410_opendisplay-wifi&repository_url=https%3A%2F%2Fgithub.com%2Fballoob%2Fhome-assistant-addons)

运行一个作为 Home Assistant 附加组件的 [OpenDisplay](https://opendisplay.org) Wi-Fi 服务器。您的网络上的电子纸显示器将自动通过 mDNS 发现服务器并连接以接收图像。

此附加组件使用 py-opendisplay 的 `wifi-server` 分支的源安装。

## 功能

- 在端口 2446 上运行 OpenDisplay Wi-Fi 协议服务器
- 通过 Home Assistant Ingress 访问 Web UI
- 查看连接的屏幕及其尺寸和颜色支持
- 将图像分配给屏幕：
  - **上传本地图像** - 转换并发送到显示器
  - **提供 URL** - 服务器按可配置的间隔定期获取它，当图像更改时更新显示器

## 安装

将此存储库添加到您的 Home Assistant 附加组件商店：

```
https://github.com/balloob/home-assistant-addons
```

然后安装 **OpenDisplay Wi-Fi** 附加组件。

## 使用方法

1. 启动附加组件
2. 从附加组件页面（通过 Ingress）打开 Web UI
3. 打开您的 OpenDisplay 电子纸屏幕 - 一旦连接，它们将出现在 UI 中
4. 上传图像或提供 URL 并将其分配给屏幕

## 本地开发

您也可以在 Home Assistant 外运行服务器：

```bash
cd opendisplay-wifi
mkdir -p dev-data
uv sync
uv run python server.py
```

本地运行时，服务器将其数据和配置存储在 `./dev-data`：

- `dev-data/assignments.json`
- `dev-data/albums.json`
- `dev-data/uploads/`
- `dev-data/thumbnails/`
- 可选的 `dev-data/options-dev.json`

在 Home Assistant 附加组件内部，它继续使用 `/data`。

## 链接

- [OpenDisplay](https://opendisplay.org)
- [py-opendisplay wifi-server 分支](https://github.com/balloob/py-opendisplay/tree/wifi-server)
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
