# Home assistant add-on: Flaresolver

我利用业余时间维护这个Home Assistant插件和其他插件：跟上上游的变更、Home Assistant的变更，并在真实硬件上测试需要大量时间（和一些金钱）。我大约使用了我超过110个插件中的5-10个，因此我安装了一些我自己的测试机器（和一些我不用来测试的服务，如VPN），以便调试和改进插件。

如果这个插件节省了你的时间或使你的设置更简单，我将非常感谢你的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fflaresolverr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fflaresolverr%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fflaresolverr%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库点赞的人！点击下面的图片给它点赞，它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/flaresolverr/stats.png)

## About

[FlareSolverr](https://github.com/FlareSolverr/FlareSolverr) 是一个代理服务器，用于绕过Cloudflare保护。它启动一个代理服务器，在空闲状态下等待用户请求，使用少量资源。当请求到达时，它使用带有stealth插件的Puppeteer创建一个无头浏览器（Firefox），以解决Cloudflare挑战。

主要功能：
- 自动绕过Cloudflare保护
- 使用Firefox进行无头浏览器自动化
- RESTful API用于与其他工具集成
- 用于后续请求的Cookie提取
- 支持各种Cloudflare挑战类型

**注意**：网络浏览器消耗大量内存。在内存有限的系统上避免进行许多并发请求。

## Installation

这个插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到你的Home Assistant实例中（在supervisor插件商店的右上角，或者如果你已经配置了我的HA，点击下面的按钮）
   [![打开你的Home Assistant实例并显示添加插件仓库对话框，预填充特定的仓库URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击`Save`按钮保存你的配置。
1. 启动插件。
1. 检查插件的日志，看看一切是否正常。

## Configuration

Web界面可以在 <http://homeassistant:8191> 找到。
这个插件没有配置选项 - 它可以开箱即用。

### API Usage

FlareSolverr提供了一个REST API用于与其他应用程序集成：

**端点**： `http://homeassistant:8191/v1`

**示例请求**：
```json
{
  "cmd": "request.get",
  "url": "https://example.com",
  "maxTimeout": 60000
}
```

### Integration with *arr Apps

配置你的索引器使用FlareSolverr：
- **Prowlarr/Jackett**：将FlareSolverr URL设置为`http://homeassistant:8191`
- **Sonarr/Radarr**：配置索引器使用FlareSolverr代理

### Options

没有可用的配置选项 - FlareSolverr使用默认设置自动工作。

### Resource Requirements

- **内存**：推荐512MB+
- **CPU**：在解决挑战时使用中等
- **网络**：需要互联网访问才能正常运行

### Environment variables

使用插件的`env_vars`选项传递额外的环境变量（名称大小写均可）。查看 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

## Support

在github上创建一个问题

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
