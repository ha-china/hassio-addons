# Home Assistant 附加组件：Flaresolver

我在业余时间维护和托管其他 Home Assistant 附加组件：跟进上游更改、HA 更改以及在真实硬件上进行测试需要大量时间（和一些金钱）。我大约使用 5-10 个我的 >110 个附加组件，所以我经常安装测试机器（并购买一些测试服务如 VPN）来补救和改善附加组件

如果您节省了我的时间或让我的设置更容易，我会非常感谢您们的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fone%2Fone%2Fone%2Fi%2Fi%2Fhassio-addons%2Fmaster%2Fflaresolverr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Fone%2Fone%2Fone%2Fi%2Fi%2Fhassio-addons%2Fmaster%2Fflaresolverr%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Fone%2Fone%2Fone%2Fi%2Fi%2Fhassio-addons%2Fmaster%2Fflaresolverr%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家星标我的仓库！要星标它，请点击下面的图片，它就会被放在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/flaresolverr/stats.png)

## 介绍

[FlareSolverr](https://github.com/FlareSolverr/FlareSolverr)是一个代理服务器，用于绕过 Cloudflare 保护。它启动一个代理服务器，该服务器在空闲状态下等待用户请求，使用少量资源。当请求到达时，它使用 Puppeteer 和 stealth 插件创建一个无头浏览器（Firefox）来解决 Cloudflare 挑战。

主要特性:
- 自动绕过 Cloudflare 保护
- 使用 Firefox 的无头浏览器自动化
- 用于与其他工具集成的 RESTful API
-  Cookie 提取以进行后续请求
- 支持各种 Cloudflare 挑战类型

**注意**: 网络浏览器会消耗大量内存。避免在 RAM 有限的系统上发出许多并发请求。

## 安装

此附加组件的安装非常简单，与其他任何附加组件的安装都没有区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例（在 supervisor 附加组件存储中点击右上角，或如果您已配置 HA 则点击以下按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否正常。

## 配置

Web 界面可在 <http://homeassistant:8191> 处找到。
此附加组件没有配置选项 - 开箱即用。

### API 使用

FlareSolverr 提供了一个 REST API 用于与其他应用程序集成：

**端点**: `http://homeassistant:8191/v1`

**示例请求**:
```json
{
  "cmd": "request.get",
  "url": "https://example.com",
  "maxTimeout": 60000
}
```

### 与 *arr 应用程序的集成

配置您的索引器以使用 FlareSolverr:
- **Prowlarr/Jackett**: 设置 FlareSolverr URL 为 `http://homeassistant:8191`
- **Sonarr/Radarr**: 配置索引器以使用 FlareSolverr 代理

### 选项

不可用任何配置选项 - FlareSolverr 自动工作，使用默认设置。

### 资源要求

- **内存**: 推荐 512MB+
- **CPU**: 挑战解决期间适度使用
- **网络**: 需要互联网连接以运行

### 环境变量

使用附加组件 `env_vars` 选项来传递额外的环境变量（大小写名称均可）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 以获取详细信息。

## 支持

在 github 上创建一个问题

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
