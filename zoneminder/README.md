# Home assistant add-on: Zoneminder

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoneminder%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoneminder%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoneminder%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/zoneminder/stats.png)

## 关于

["Zoneminder"](https://zoneminder.com/) 是一个功能齐全、开源的、最先进的视频监控系统软件。

这个插件基于 Docker 镜像 https://github.com/ZoneMinder/zmdockerfiles/blob/master/utils/entrypoint.sh

## 配置

Webui 可以在 <http://homeassistant:3778/zm> 找到。

### 设置步骤

1. 启动插件后访问网页界面
2. 通过网页界面配置摄像头
3. 设置运动检测区域和警报
4. 配置录制存储位置
5. 需要 MariaDB 插件用于数据库存储

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `Images_location` | 字符串 | `/config/addons_config/zoneminder/images` | 存储摄像头图像的路径 |

### 示例配置

```yaml
Images_location: "/share/zoneminder/images"
```

### 数据库需求

ZoneMinder 需要一个 MySQL/MariaDB 数据库。安装 MariaDB 插件并配置 Zoneminder 使用它。

### 存储路径

- 图像：通过 `Images_location` 选项配置
- 事件：`/var/cache/zoneminder/events2`
- 声音：`/var/cache/zoneminder/sounds2`
- 配置：`/config/addons_config/zoneminder`

### 额外资源

详细配置：https://github.com/ZoneMinder/zmdockerfiles/blob/master/utils/entrypoint.sh

## 安装

这个插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的 home assistant 实例中（在 supervisor 插件商店的右上角，或点击下面的按钮如果您已经配置了我的 HA）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击 `保存` 按钮保存您的配置。
1. 设置插件选项以符合您的偏好。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开 WebUI 并调整软件选项

## 在 home assistant 中的集成

https://www.home-assistant.io/integrations/zoneminder/

## 支持

在 github 上创建问题

## 插图

![viewmonitor-stream](https://user-images.githubusercontent.com/44178713/157933856-33ed3d44-6b91-4ce2-8a9b-daf9b618176c.png)

[repository]: https://github.com/alexbelgium/hassio-addons