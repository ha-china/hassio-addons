# Home Assistant 插件：Zoneminder

我利用课余时间维护此及其他 Home Assistant 插件：跟进上游变更、适配 HA 更新以及在真实硬件上进行测试占用了大量时间（且需要花费一些金钱）。我使用了超过 110 个插件中的约 5-10 个，我甚至利用一些我自己不使用的测试机器（并购买一些测试服务，如 vpn）来调试和改进插件。

如果这个插件能为您节省时间或让设置更简单，您的支持将令我深感感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoneminder%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoneminder%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoneminder%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码规范检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家为我仓库点亮星标！点击下方图片星标即可，它将出现在右上角。谢谢！_

[![Starred Repository Roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/zoneminder/stats.png)

## 简介

["Zoneminder"](https://zoneminder.com/) 是一个功能齐全、开源的、顶尖的视频监控系统软件。

此插件基于以下 Docker 镜像：https://github.com/ZoneMinder/zmdockerfiles/blob/master/utils/entrypoint.sh

## 配置

请使用插件的 `env_vars` 选项传递额外的环境变量（名称大小写均可）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web 界面位于 <http://homeassistant:3778/zm>。

### 设置步骤

1. 启动插件后访问 Web 界面
2. 通过 Web 界面配置摄像头
3. 配置运动侦测区域和警报
4. 配置录像存储位置
5. 需要安装 MariaDB 插件用于数据库存储

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `Images_location` | str | `/config/addons_config/zoneminder/images` | 存储摄像头图像的路径 |

### 示例配置

```yaml
Images_location: "/share/zoneminder/images"
```

### 数据库要求

Zoneminder 需要 MySQL/MariaDB 数据库。请安装 MariaDB 插件并配置 Zoneminder 使用它。

### 存储路径

- 图像：通过 `Images_location` 选项配置
- 事件：`/var/cache/zoneminder/events2`
- 声音：`/var/cache/zoneminder/sounds2`
- 配置：`/config/addons_config/zoneminder`

### 附加资源

详细配置请参阅：https://github.com/ZoneMinder/zmdockerfiles/blob/master/utils/entrypoint.sh

## 安装

此插件的安装非常 straightforward（简单直接），与其他插件的安装流程没有区别。

1. 将我的插件仓库添加到 Home Assistant 实例（在 Supervisor 插件商店右上角，或如果您已配置好我的 HA，则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示预填入特定仓库 URL 的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 将插件选项设置为您的偏好设置。
1. 启动插件。
1. 查看插件日志以确认一切是否正常。
1. 打开 Web UI 并调整软件选项

## 在 Home Assistant 中的集成

https://www.home-assistant.io/integrations/zoneminder/

## 支持

在 GitHub 上创建问题报告。

## 插图

![viewmonitor-stream](https://user-images.githubusercontent.com/44178713/157933856-33ed3d44-6b91-4ce2-8a9b-daf9b618176c.png)

[repository]: https://github.com/alexbelgium/hassio-addons

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
