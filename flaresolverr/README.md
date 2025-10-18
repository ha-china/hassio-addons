# Home assistant add-on: Flaresolver

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fflaresolverr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fflaresolverr%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fflaresolverr%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它将在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/flaresolverr/stats.png)

## 关于

[FlareSolverr](https://github.com/FlareSolverr/FlareSolverr) 是一个代理服务器，用于绕过 Cloudflare 保护。它启动一个代理服务器，在空闲状态下等待用户请求，使用少量资源。当请求到达时，它使用带有隐身插件的 Puppeteer 创建一个无头浏览器（Firefox），以解决 Cloudflare 挑战。

主要功能：
- 自动绕过 Cloudflare 保护
- 使用 Firefox 进行无头浏览器自动化
- 提供RESTful API以与其他工具集成
- 用于后续请求的Cookie提取
- 支持各种 Cloudflare 挑战类型

**注意**：网络浏览器消耗大量内存。避免在内存有限的系统上发起许多并发请求。

## 安装

这个插件的安装非常简单，与安装其他插件没有区别。

1. 将我的插件仓库添加到您的 home assistant 实例中（在 supervisor 插件商店的右上角，或如果您已配置我的 HA，请点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库URL预填的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志，看看是否一切正常。

## 配置

Web 界面可以在 <http://homeassistant:8191> 找到。
这个插件没有配置选项 - 它可以直接使用。

### API 使用

FlareSolverr 提供了一个 REST API，用于与其他应用程序集成：

**端点**： `http://homeassistant:8191/v1`

**示例请求**：
```json
{
  "cmd": "request.get",
  "url": "https://example.com",
  "maxTimeout": 60000
}
```

### 与 *arr 应用程序集成

配置您的索引器以使用 FlareSolverr：
- **Prowlarr/Jackett**：将 FlareSolverr URL 设置为 `http://homeassistant:8191`
- **Sonarr/Radarr**：配置索引器使用 FlareSolverr 代理

### 选项

没有可用的配置选项 - FlareSolverr 使用默认设置自动工作。

### 资源需求

- **内存**：推荐 512MB+
- **CPU**：在解决挑战期间使用适度
- **网络**：需要互联网访问才能正常工作

## 支持

在 github 上创建问题

[repository]: https://github.com/alexbelgium/hassio-addons