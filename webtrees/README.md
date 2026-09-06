# Home Assistant 附加组件：Webtrees

我在业余时间维护此及其他 Home Assistant 附加组件：跟踪上游更改、HA 更改，以及在真实硬件上进行测试需要大量时间（以及一些金钱）。我使用约 5-10 个我的 >110 个附加组件，因此定期安装测试机器（并购买一些我自己不使用的测试服务，如 VPN）来调试和改进附加组件。

如果您使用此附加组件节省了时间或让您的设置更简单，您的支持将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtrees%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtrees%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtrees%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢对我仓库进行星标的所有人！要星标它，请点击下方的图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/webtrees/stats.png)

## 关于

[webtrees](http://www.webtrees.net) 是网络上领先的在线协作家谱应用程序。

此附加组件基于 Docker 镜像 https://github.com/NathanVaughn/webtrees-docker。

## 配置

使用附加组件的 `env_vars` 选项来传递额外的环境变量（大小写名称均可）。有关详细信息，请参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web 入口管理界面可在 <http://homeassistant:PORT> 处访问。

用户名和密码可通过启动向导进行定义。

选项可以通过以下两种方式配置：

- 附加组件选项

```yaml
LANG: "en-US" # 默认设置 webtrees 的语言
BASE_URL: "http://192.168.178.69" # 您访问 webtrees 的网址
DB_TYPE: "sqlite" # 您的数据库类型：sqlite 用于自动配置，external 用于手动配置
CONFIG_LOCATION: webtrees 配置文件的位置 (见下文)
localdisks: sda1 # 请放置您要挂载的硬件驱动器名称，用逗号分隔，或放置其标签。例如：sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，列出要挂载的 smb 服务器，用逗号分隔
cifsusername: "用户名" # 可选，smb 用户名，适用于所有 smb 共享
cifspassword: "密码" # 可选，smb 密码
trusted_headers: 单个地址，或 CIDR 格式的地址范围
base_url_portless: 不带端口的基础网址
```

- config.yaml

`addon_built_config.yaml` 中引用的 `config.yaml` 文件中可以添加自定义环境变量。包含此文件的目录不属于根/主目录（HA 的 configuration.yaml 所在的目录），而是 /root/addon_configs（见 [HA 文档](https://developers.home-assistant.io/blog/2023/11/06/public-addon-config/)）。完整的环境变量列表请参见：https://github.com/linuxserver/docker-paperless-ng。必须在有效的 yaml 格式中输入，附加组件启动时将进行验证。

## 安装

此附加组件的安装非常简单，与其他任何附加组件的安装没有不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件存储顶部右侧，或者如果您已配置我的 HA，请点击下方按钮）。
   [![打开您的 Home Assistant 实例并显示添加附加组件仓库对话框，其中预填有特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击“保存”按钮以存储您的配置。
4. 将附加组件选项设置为您自己的偏好设置。
5. 启动附加组件。
6. 查看附加组件的日志，确认一切是否正常。
7. 打开 Web 界面并调整软件选项。

## 远程访问

可以将此附加组件配置为允许外部访问（供家庭和好友使用）。
这可以免费完成，并且不会将您的网络对外开放。
其中一种解决方案是 [Cloudflare 隧道](https://github.com/brenner-tobias/addon-cloudflared)。论坛上有关于如何进行的大量介绍资料，以及使用附加规则进行安全设置和 Google 邮箱验证的视频教程。
这里有一些关于配置集成的考虑因素：

Webtrees 配置

```yaml
BASE_URL: https://your_tunnel_domain_name.example.com # 您将使用此外部 URL 访问该页面。
# 尽管附加组件的基础配置不使用 SSL，但在使用了 Cloudflare 时，基础网址必须包含 https。
# 这是因为当隧道运行时，Cloudflare 会为其连接应用自己的 SSL。
# 如果基础网址包含 http://，将导致不匹配，导致某些块无法正确加载。
ssl: false # 已禁用，由 Cloudflare 处理此功能。
base_url_portless: true # 必须启用。

# rest 是标准设置
DATA_LOCATION: /config/data
certfile: fullchain.pem
keyfile: privkey.pem
```

Cloudflared 配置

```yaml
external_hostname: "" # 无，仅通过自家公司访问 HA，但也可以用于同时提供两种访问方式。
additional_hosts:
  - hostname: your_tunnel_domain_name.example.com # 注意，这与 webtrees 配置中的内容相同。
    service: http://your_HA_IP:9999 # 注意，这里是 http 并且指定了端口，尽管 webtrees 配置为无端口。
tunnel_name: 您的隧道名称
```

## 支持

在 github 上创建问题报告。

## 说明

![illustration](https://installatron.infomaniak.com/installatron//images/ss2_webtrees.jpg)

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
