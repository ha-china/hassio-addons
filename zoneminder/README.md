# Home assistant 附加功能：Zoneminder

我在业余时间维护此附加功能及其他 Home Assistant 附加功能：跟踪上游更改、HA 更改以及在真实硬件上进行测试花费了大量时间（和一些金钱）。我在使用超过我拥有的 110 个附加功能中的 5-10 个中如此频繁，以至于我会安装我不亲自使用的测试机器（并购买一些测试服务，如 vpn）来调试和改进附加功能。

如果这个附加功能为您节省时间或使您的设置更容易，我会非常感谢您的支持！

[![购买我一杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加功能信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoneminder%2Fconfig.yaml)
![桥接](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoneminder%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoneminder%2Fconfig.yaml)

[![Codacy 徽标](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我星标库的人！要星标它，请点击下面图片，然后它将在右上角。谢谢！_

[![@alexbelgium/hassio-addons 星标库成员名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/zoneminder/stats.png)

## 简介

["Zoneminder"](https://zoneminder.com/) 是一个功能齐全、开源、最先进的视频监控软件系统。

该附加功能使用了 docker 图像 https://github.com/ZoneMinder/zmdockerfiles/blob/master/utils/entrypoint.sh。

## 配置

使用附加功能的 `env_vars` 选项传递额外的环境变量（大写或小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 位于 <http://homeassistant:3778/zm>。

### 设置步骤

1. 启动附加功能后访问 Web 界面
2. 通过 Web 界面配置摄像头
3. 设置运动检测区域和警报
4. 配置录制的存储位置
5. 需要 MariaDB 附加功能用于数据库存储

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `Images_location` | str | `/config/addons_config/zoneminder/images` | 存储摄像头图像的路径 |

### 示例配置

```yaml
Images_location: "/share/zoneminder/images"
```

### 数据库需求

ZoneMinder 需要一个 MySQL/MariaDB 数据库。安装 MariaDB 附加功能并配置 Zoneminder 使用它。

### 存储路径

- 图像：通过 `Images_location` 选项配置
- 事件：`/var/cache/zoneminder/events2`
- 声音：`/var/cache/zoneminder/sounds2`
- 配置：`/config/addons_config/zoneminder`

### 其他资源

详细配置：https://github.com/ZoneMinder/zmdockerfiles/blob/master/utils/entrypoint.sh

## 安装

此附加功能的安装非常简单，与其他附加功能的安装没有区别。

1. 将我附加功能的仓库添加到您的 home assistant 实例中（在 supervisor 附加功能商店顶部右侧，或如果您已配置了我的 HA，则点击以下按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充对话框的添加附加功能仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加功能。
3. 点击 `保存` 按钮存储您的配置。
4. 将附加功能选项设置为您的偏好设置
5. 启动附加功能。
6. 查看附加功能的日志以查看一切是否顺利。
7. 打开 WebUI 并调整软件选项

## 集成到 home assistant

https://www.home-assistant.io/integrations/zoneminder/

## 支持

在 github 上创建问题

## 插图

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
