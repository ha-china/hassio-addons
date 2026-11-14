# Home Assistant 补充组件：Fast SD CPU

## 描述
FastSD CPU 是仅在 CPU 上运行的 Stable Diffusion 的更快版本。基于潜在一致性模型、对抗蒸馏和精简步骤模型。

**AI 已增加对 Ingress 的支持**  
_感谢所有人给我的仓库星标！要添加星标，请点击下图，然后将其置于右上角。非常感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 安装

该补充组件的安装非常简单，与安装任何其他 Hass.io 补充组件没有区别。

**注意：** 此操作会在您的 Home Assistant 设备上构建 Docker 镜像。安装所有依赖项需要花费很长时间。请耐心等待安装完成。

1. [将我 Home Assistant 补充组件存储库][repository] 添加到您的 Hass.io 实例中。
2. 安装此补充组件。
3. 点击 `Save`（保存）按钮以保存您的配置。
4. 保持 DEVICE 设置为 CPU（GPU 或 NPU 尚未测试）。
5. 设置 MODE 为 webui 或 API（当前版本 MCP 会崩溃）。
6. 启动补充组件。
7. 模型和结果将存储在 /addon-configs/2effc9b9_fastsdcpu 目录中。

建议选择 LCM-OpenVINO。首次运行时，它将下载模型到 /addon-configs/2effc9b9_fastsdcpu。

[repository]: https://github.com/jdeath/homeassistant-addons

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
