# Home assistant 插件：Noisedash

自托管的生成环境声音的网页工具

![Noisedash](https://raw.githubusercontent.com/kaythomas0/noisedash/dev/.github/noisedash-screenshot-1.jpg)

_感谢所有为我仓库点赞的人！要点赞，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![@jdeath/homeassistant-addons 的星标者名单](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件基于 [docker 镜像](https://github.com/kaythomas0/noisedash)。

* 生成和自定义环境声音和用户可上传的样本（利用 [Tone.js](https://github.com/Tonejs/Tone.js/)）
* 保存“噪音配置文件”，以便您可以轻松地在创建的声音景观之间切换。导入和导出它们以方便共享，记录下来以便在其他地方使用
* 使用音频处理工具（如过滤器、LFO 和效果）微调您的噪音
* 上传和编辑音频样本（例如雨声、风声、雷声）以与生成的噪音结合。为它们添加效果并设置播放模式
* 使用管理工具来管理多个用户
* 移动端友好

## 安装

1. 将我的 Hass.io 插件仓库[仓库](https://github.com/jdeath/homeassistant-addons)添加到您的 Hass.io 实例中。
1. 安装此插件。
1. 点击“保存”按钮以存储您的配置。
1. 启动插件。
1. 停止插件并重新启动（第一次需要启动两次！）
1. 检查插件的日志以查看是否一切顺利。
1. 通过 ingress 或 <your-ip>:port 打开 WebUI。

注意：Ingress 支持需要许多补丁。如果上游 dockerfile 发生变化，这可能会中断。

## 配置

```
port : 1432 #您想要运行在的端口。
```

WebUI 可以在 `<your-ip>:port` 或 ingress 上找到

[仓库](https://github.com/jdeath/homeassistant-addons)
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
