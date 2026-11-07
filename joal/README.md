# Home assistant插件：Joal

我在空闲时间维护这个和其他Home Assistant插件：跟上上游的变更、HA的变更，并在真实硬件上测试，这需要很多时间（和一些金钱）。我大约使用我超过110个插件中的5-10个非常频繁，所以我安装了一些我本人不使用的测试机器（和一些测试服务如VPN）来调试和改进插件。

如果这个插件节省了你的时间或使你的设置更简单，我将非常感谢你的支持！

[![给我买咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过PayPal捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoal%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoal%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fjoal%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库加星的人！要加星，请点击下面的图片，然后它就会在右上角。谢谢！_

[![加星者的仓库列表 for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/joal/stats.png)

## 关于

一个开源的命令行RatioMaster，带有Web UI。
这个插件基于Anthony Raymond的[docker镜像](https://hub.docker.com/r/anthonyraymond/joal)。
这个应用程序的所有功劳都归于Anthony Raymond，请访问他的仓库：https://github.com/anthonyraymond/joal

## 配置

使用插件的`env_vars`选项来传递额外的环境变量（大小写名称）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web UI可以在<http://homeassistant:PORT>或通过入口在侧边栏中找到。
配置详情可以在插件日志中找到。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `secret_token` | 字符串 | `lrMY24Byhx` | Web界面的认证令牌 |
| `ui_path` | 字符串 | `joal` | Web UI路径 |
| `run_duration` | 字符串 | `12h` | 运行时长（例如，5s，2m，12h，5d） |
| `verbose` | 布尔值 | | 启用详细日志 |

### 示例配置

```yaml
secret_token: "your-custom-token-here"
ui_path: "joal"
run_duration: "24h"
verbose: true
```

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库][repository]添加到你的Hass.io实例。
1. 安装这个插件。
1. 点击`保存`按钮来存储你的配置。
1. 确保你的路由器上开放了两个端口。
1. 启动插件。
1. 检查插件的日志，看看是否一切顺利。
1. 小心配置插件以符合你的偏好，查看官方文档了解更多信息。

## 支持

对于HA：在github上创建一个问题
对于Joal：请查看上游仓库：https://github.com/anthonyraymond/joal

## 插图

![image](https://user-images.githubusercontent.com/44178713/117990142-29c3b200-b33d-11eb-86c8-a3007d73c3da.png)

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
