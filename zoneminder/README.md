# Home Assistant 扩展：Zoneminder

我在业余时间维护这个以及其他 Home Assistant 扩展：跟进上游变更、Home Assistant 变更以及在真实硬件上测试都需要花费大量的时间（以及一些金钱）。我经常使用大约 5-10 个我的 >110 个扩展，因此我会安装测试机器（并购买一些我自己不使用的测试服务，例如 VPN），以便进行故障排除和改进扩展。

如果这个扩展为您节省了时间或使您的设置变得更简单，我将非常感激您的支持！

[![买我一杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 扩展信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoneminder%2Fconfig.yaml)
![入站](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoneminder%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoneminder%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我的仓库加星的人！要加星，请点击下面的图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/zoneminder/stats.png)

## 关于

["Zoneminder](https://zoneminder.com/) 是一款功能齐全、开源的尖端视频监控系统。

此扩展基于 docker 镜像 https://github.com/ZoneMinder/zmdockerfiles/blob/master/utils/entrypoint.sh

## 配置

使用扩展的 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

WebUI 可以在 <http://homeassistant:3778/zm> 找到。

### 设置步骤

1. 在启动扩展后访问 Web 界面
2. 通过 Web 界面配置摄像头
3. 设置运动检测区域和警报
4. 配置记录存储位置
5. 需要 MariaDB 扩展来存储数据库

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `Images_location` | str | `/config/addons_config/zoneminder/images` | 存储摄像头图像的路径 |

### 示例配置

```yaml
Images_location: "/share/zoneminder/images"
```

### 数据库要求

ZoneMinder 需要一个 MySQL/MariaDB 数据库。安装 MariaDB 扩展并配置 Zoneminder 使用它。

### 存储路径

- 图像：通过 `Images_location` 选项配置
- 事件：`/var/cache/zoneminder/events2`
- 声音：`/var/cache/zoneminder/sounds2`
- 配置：`/config/addons_config/zoneminder`

### 其他资源

详细配置：https://github.com/ZoneMinder/zmdockerfiles/blob/master/utils/entrypoint.sh

## 安装

此扩展的安装非常简单，与安装任何其他扩展没有太大区别。

1. 将我的扩展仓库添加到您的 Home Assistant 实例中（在 supervisor 的扩展存储中右上角，或者如果您已经配置了我的 HA，请点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示具有特定仓库 URL 预填充的添加扩展仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此扩展。
2. 点击 `保存` 按钮以存储您的配置。
3. 将扩展选项设置为您的偏好设置。
4. 启动扩展。
5. 检查扩展的日志以查看是否一切顺利。
6. 打开 WebUI 并调整软件选项

## 集成到 Home Assistant 中

https://www.home-assistant.io/integrations/zoneminder/

## 支持

在 github 上创建一个问题

## 示例

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
