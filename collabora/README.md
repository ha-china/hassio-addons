# Home assistant add-on: Collabora

我利用业余时间维护这个和其他Home Assistant add-ons：跟上上游的变化、HA的变化，并在真实硬件上进行测试需要大量时间（和一些钱）。我大约使用我超过110个add-ons中的5-10个，所以我安装了一些我自己不使用的测试机器（和一些测试服务，如VPN）来调试和提高这些add-ons。

如果这个add-on为你节省了时间或使你的设置更简单，我将非常感谢你的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcollabora%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcollabora%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcollabora%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有star了我的repo的人！要star它，请点击下面的图片，然后它将在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/collabora/stats.png)

## About

Collabora Online是一个基于LibreOffice技术的协作办公套件。

## Installation

---

1. 将我的add-ons仓库添加到你的Home Assistant实例中，或点击下面的My链接。
1. 安装add-on。
1. 启动add-on。
1. 检查add-on日志以验证成功启动。

<a href="https://my.home-assistant.io/redirect/supervisor_addon/?addon=local_collabora" target="_blank"><img src="https://my.home-assistant.io/badges/supervisor_addon.svg" alt="打开你的Home Assistant实例并显示添加add-on仓库对话框"/></a>

## Configuration

---

Webui可以在`https://homeassistant:9980/browser/dist/admin/admin.html`找到。

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `aliasgroup1` | str | | Nextcloud外部域名，使用两个反斜杠转义点（例如`nextcloud_domain\\.com`） |
| `domain1` | str | | Collabora外部域名，使用两个反斜杠转义点（例如`code_domain\\.com`） |
| `extra_params` | str | | 传递给Collabora启动脚本的额外参数 |
| `ssl` | bool | `false` | 使用来自/ssl的证书启用SSL |
| `certfile` | str | `fullchain.pem` | 位于/ssl中的证书文件名 |
| `keyfile` | str | `privkey.pem` | 位于/ssl中的私钥文件名 |
| `username` | str | | Collabora管理控制台的用户名 |
| `password` | str | | Collabora管理控制台的密码 |
| `dictionaries` | str | | 要安装的字典语言的空格分隔列表 |

### Example configuration

```yaml
aliasgroup1: nextcloud_domain\\.com
domain1: code_domain\\.com
extra_params: ""
ssl: true
certfile: fullchain.pem
keyfile: privkey.pem
username: admin
password: changeme
```

### 使用Nextcloud的Collabora

1. 安装Collabora add-on并配置上述选项。
1. 启动add-on并将Collabora服务器暴露到外部域名。
1. 安装并配置Nextcloud add-on。
1. 在Nextcloud中，安装**Nextcloud Office**应用。
1. 在Nextcloud **管理设置→Office**中，将Collabora服务器URL设置为`https://yourdomain:9980`并启用**禁用证书验证**。

### 自定义脚本和环境变量

这个add-on通过`addon_config`映射支持自定义脚本和环境变量：

- **自定义脚本**：参见[在Addons中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars选项**：使用add-on的`env_vars`选项传递额外的环境变量（大小写名称均可）。参见https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2了解详情。

## Support

在GitHub上创建问题




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
