# Home assistant add-on: whoogle-search

## 💖 支持开发

我利用业余时间维护这个和其他Home Assistant插件：跟上上游变化、HA变化，并在真实硬件上测试都需要大量时间（和一些钱）。我大约有5-10个我的 >110个插件我经常使用，我安装了一些我自己的测试机器（和一些测试服务，如VPN）来调试和改进插件。

如果这个插件节省了你的时间或使你的设置更简单，我将非常感谢你的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwhoogle%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwhoogle%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwhoogle%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/whoogle/stats.png)

## 关于

[whoogle-search](https://github.com/benbusby/whoogle-search) 是一个自托管、无广告、尊重隐私的元搜索引擎。
这个插件基于这个Docker镜像 https://hub.docker.com/r/benbusby/whoogle-search/tags

## 配置

使用插件的 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 可以在 <http://homeassistant:PORT> 或通过Ingress在侧边栏中找到。
配置可以通过应用WebUI进行，除了以下选项。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `TZ` | 字符串 | `Europe/Amsterdam` | 时区 |
| `WHOOGLE_CONFIG_LANGUAGE` | 字符串 | `lang_en` | 界面语言 |
| `WHOOGLE_CONFIG_URL` | 字符串 | | 服务的基本URL |
| `WHOOGLE_CONFIG_THEME` | 列表 | | 主题（system/light/dark） |
| `WHOOGLE_CONFIG_COUNTRY` | 字符串 | | 搜索结果的国别代码 |
| `WHOOGLE_CONFIG_SEARCH_LANGUAGE` | 字符串 | | 搜索语言 |
| `WHOOGLE_CONFIG_BLOCK` | 字符串 | | 要阻止的网站列表，用逗号分隔 |
| `WHOOGLE_CONFIG_SAFE` | 列表 | | 安全搜索（0/1） |
| `WHOOGLE_CONFIG_ALTS` | 列表 | | 使用替代前端（0/1） |
| `WHOOGLE_CONFIG_NEW_TAB` | 列表 | | 在新标签页中打开结果（0/1） |
| `WHOOGLE_CONFIG_VIEW_IMAGE` | 列表 | | 启用查看图片选项（0/1） |
| `WHOOGLE_CONFIG_GET_ONLY` | 列表 | | 仅GET请求（0/1） |
| `WHOOGLE_CONFIG_DISABLE` | 列表 | | 禁止更改设置（0/1） |
| `WHOOGLE_AUTOCOMPLETE` | 列表 | | 启用自动完成（0/1） |
| `WHOOGLE_MINIMAL` | 列表 | | 简化模式（0/1） |
| `WHOOGLE_CSP` | 列表 | | 内容安全策略（0/1） |
| `WHOOGLE_RESULTS_PER_PAGE` | 整数 | | 每页结果数（5-100） |
| `WHOOGLE_USER` | 字符串 | | 认证用户名 |
| `WHOOGLE_PASS` | 密码 | | 认证密码 |
| `WHOOGLE_PROXY_TYPE` | 字符串 | | 代理类型 |
| `WHOOGLE_PROXY_LOC` | 字符串 | | 代理位置 |
| `WHOOGLE_PROXY_USER` | 字符串 | | 代理用户名 |
| `WHOOGLE_PROXY_PASS` | 字符串 | | 代理密码 |
| `WHOOGLE_ALT_TW` | 字符串 | | Twitter替代前端 |
| `WHOOGLE_ALT_YT` | 字符串 | | YouTube替代前端 |
| `WHOOGLE_ALT_IG` | 字符串 | | Instagram替代前端 |
| `WHOOGLE_ALT_RD` | 字符串 | | Reddit替代前端 |
| `WHOOGLE_ALT_MD` | 字符串 | | Medium替代前端 |
| `WHOOGLE_ALT_TL` | 字符串 | | TikTok替代前端 |
| `HTTPS_ONLY` | 列表 | | 仅HTTPS模式（0/1） |

### 示例配置

```yaml
TZ: "Europe/London"
WHOOGLE_CONFIG_LANGUAGE: "lang_en"
WHOOGLE_CONFIG_URL: "https://search.mydomain.com"
WHOOGLE_CONFIG_THEME: "dark"
WHOOGLE_CONFIG_COUNTRY: "US"
WHOOGLE_CONFIG_SAFE: "0"
WHOOGLE_AUTOCOMPLETE: "1"
WHOOGLE_USER: "admin"
WHOOGLE_PASS: "secure-password"
WHOOGLE_RESULTS_PER_PAGE: 20
```

完整的环境变量文档请见：https://github.com/benbusby/whoogle-search#environment-variables

## 安装

这个插件的安装非常简单，与其他插件的安装没有区别。

1. 将我的插件仓库添加到你的Home Assistant实例（在supervisor插件商店的右上角，或者如果你已经配置了我的HA，点击下面的按钮）
   [![打开你的Home Assistant实例并显示添加插件仓库对话框，预填了特定的仓库URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击 `Save` 按钮来保存你的配置。
1. 设置插件选项到你的偏好。
1. 启动插件。
1. 检查插件的日志，看看是否一切正常。
1. 打开WebUI并调整软件选项

## 支持

在github上创建一个问题

## 插图

![插图](https://github.com/benbusby/whoogle-search/raw/main/docs/screenshot_desktop.jpg)

[repository]: https://github.com/alexbelgium/hassio-addons
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
