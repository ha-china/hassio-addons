# Home assistant add-on: whoogle-search

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/json?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwhoogle%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwhoogle%2Fconfig.json)
![Arch](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwhoogle%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，它将在右上角显示。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/whoogle/stats.png)

## 关于

[whoogle-search](https://github.com/benbusby/whoogle-search) 是一个自托管、无广告、尊重隐私的元搜索引擎。
这个插件基于 Docker 镜像 https://hub.docker.com/r/benbusby/whoogle-search/tags

## 配置

Web UI 可以在 <http://homeassistant:PORT> 或通过 Ingress 在侧边栏中访问。
配置可以通过应用程序的 Web UI 进行，以下选项除外。

### 选项

| 选项 | 类型 | 默认 | 描述 |
|------|------|------|------|
| `TZ` | 字符串 | `Europe/Amsterdam` | 时区 |
| `WHOOGLE_CONFIG_LANGUAGE` | 字符串 | `lang_en` | 界面语言 |
| `WHOOGLE_CONFIG_URL` | 字符串 | | 服务的基本 URL |
| `WHOOGLE_CONFIG_THEME` | 列表 | | 主题（system/light/dark） |
| `WHOOGLE_CONFIG_COUNTRY` | 字符串 | | 搜索结果的地区代码 |
| `WHOOGLE_CONFIG_SEARCH_LANGUAGE` | 字符串 | | 搜索语言 |
| `WHOOGLE_CONFIG_BLOCK` | 字符串 | | 要阻止的网站列表，用逗号分隔 |
| `WHOOGLE_CONFIG_SAFE` | 列表 | | 安全搜索（0/1） |
| `WHOOGLE_CONFIG_ALTS` | 列表 | | 使用替代前端（0/1） |
| `WHOOGLE_CONFIG_NEW_TAB` | 列表 | | 在新标签页中打开结果（0/1） |
| `WHOOGLE_CONFIG_VIEW_IMAGE` | 列表 | | 启用查看图片选项（0/1） |
| `WHOOGLE_CONFIG_GET_ONLY` | 列表 | | 仅使用 GET 请求（0/1） |
| `WHOOGLE_CONFIG_DISABLE` | 列表 | | 禁止更改设置（0/1） |
| `WHOOGLE_AUTOCOMPLETE` | 列表 | | 启用自动完成（0/1） |
| `WHOOGLE_MINIMAL` | 列表 | | 简化模式（0/1） |
| `WHOOGLE_CSP` | 列表 | | 内容安全策略（0/1） |
| `WHOOGLE_RESULTS_PER_PAGE` | 整数 | | 每页结果数量（5-100） |
| `WHOOGLE_USER` | 字符串 | | 认证用户名 |
| `WHOOGLE_PASS` | 密码 | | 认证密码 |
| `WHOOGLE_PROXY_TYPE` | 字符串 | | 代理类型 |
| `WHOOGLE_PROXY_LOC` | 字符串 | | 代理位置 |
| `WHOOGLE_PROXY_USER` | 字符串 | | 代理用户名 |
| `WHOOGLE_PROXY_PASS` | 字符串 | | 代理密码 |
| `WHOOGLE_ALT_TW` | 字符串 | | Twitter 替代前端 |
| `WHOOGLE_ALT_YT` | 字符串 | | YouTube 替代前端 |
| `WHOOGLE_ALT_IG` | 字符串 | | Instagram 替代前端 |
| `WHOOGLE_ALT_RD` | 字符串 | | Reddit 替代前端 |
| `WHOOGLE_ALT_MD` | 字符串 | | Medium 替代前端 |
| `WHOOGLE_ALT_TL` | 字符串 | | TikTok 替代前端 |
| `HTTPS_ONLY` | 列表 | | 仅 HTTPS 模式（0/1） |

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

有关完整的环境变量文档，请参阅：https://github.com/benbusby/whoogle-search#environment-variables

## 安装

这个插件的安装非常简单，与安装其他插件没有区别。

1. 将我的插件仓库添加到你的 Home Assistant 实例中（在 Supervisor 插件商店的右上角，或者如果你已经配置了我的 HA，点击下面的按钮）
   [![打开你的 Home Assistant 实例并显示添加插件仓库对话框，预填充特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击 `保存` 按钮以保存你的配置。
1. 设置插件的选项以符合你的偏好。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开 Web UI 并调整软件选项

## 支持

在 github 上创建问题

## 插图

![illustration](https://github.com/benbusby/whoogle-search/raw/main/docs/screenshot_desktop.jpg)

[repository]: https://github.com/alexbelgium/hassio-addons