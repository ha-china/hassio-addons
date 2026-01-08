# Home assistant add-on: Zoneminder


我利用业余时间维护这个以及其他 Home Assistant add-ons：跟上上游变化、HA 变化，并在真实硬件上测试需要大量时间（和一些金钱）。我大约使用我 >110 个 add-ons 中的 5-10 个，因此我安装了一些我本人不使用的测试机器（并购买了一些测试服务，如 vpn），以调试和改进这些 add-ons。

如果这个 add-on 为您节省了时间或简化了您的设置，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoneminder%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoneminder%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoneminder%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库点赞的人！点击下面的图片即可点赞，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/zoneminder/stats.png)

## About

["Zoneminder"](https://zoneminder.com/) 是一个功能齐全、开源的、最先进的视频监控软件系统。

这个 add-on 基于以下 Docker 镜像：https://github.com/ZoneMinder/zmdockerfiles/blob/master/utils/entrypoint.sh

## Configuration

使用 add-on 的 `env_vars` 选项传递额外的环境变量（大小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 可以在 <http://homeassistant:3778/zm> 找到。

### Setup Steps

1. 启动 add-on 后访问 Web 界面
2. 通过 Web 界面配置相机
3. 设置运动检测区域和警报
4. 配置录制存储位置
5. 需要 MariaDB add-on 进行数据库存储

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `Images_location` | str | `/config/addons_config/zoneminder/images` | 存储相机图像的路径 |

### Example Configuration

```yaml
Images_location: "/share/zoneminder/images"
```

### Database Requirements

ZoneMinder 需要一个 MySQL/MariaDB 数据库。安装 MariaDB add-on 并配置 Zoneminder 使用它。

### Storage Paths

- Images: 通过 `Images_location` 选项配置
- Events: `/var/cache/zoneminder/events2`
- Sounds: `/var/cache/zoneminder/sounds2`
- Config: `/config/addons_config/zoneminder`

### Additional Resources

有关详细配置：https://github.com/ZoneMinder/zmdockerfiles/blob/master/utils/entrypoint.sh

## Installation

这个 add-on 的安装过程非常简单，与其他 add-on 的安装方式没有区别。

1. 将我的 add-ons 仓库添加到您的 Home Assistant 实例中（在 supervisor add-ons 存储库的右上角，或者如果您已经配置了我的 HA，请点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加 add-on 仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个 add-on。
1. 点击 `Save` 按钮保存您的配置。
1. 根据您的偏好设置 add-on 选项。
1. 启动 add-on。
1. 检查 add-on 的日志，查看是否一切正常。
1. 打开 WebUI 并调整软件选项

## Integration in home assistant

https://www.home-assistant.io/integrations/zoneminder/

## Support

在 github 上创建问题

## Illustration

![viewmonitor-stream](https://user-images.githubusercontent.com/44178713/157933856-33ed3d44-6b91-4ce2-8a9b-daf9b618176c.png)

[repository]: https://github.com/alexbelgium/hassio-addons
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
