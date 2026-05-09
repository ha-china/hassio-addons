# 家居助手插件：Webtrees

我在业余时间维护这个以及其他一些家居助手插件：跟进上游变更、家居助手变更以及在真实硬件上进行测试都需要花费大量的时间和一些金钱。我经常使用大约5-10个我的>110个插件，所以我安装了测试机器（并购买了一些我不使用的测试服务，如vpn），用于调试和改进插件。

如果这个插件为您节省了时间或使您的设置更加容易，我会非常感激您的支持！

[![给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过PayPal捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtrees%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtrees%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtrees%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我的仓库点星的人！要点星，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/webtrees/stats.png)

## 关于

[webtrees](http://www.webtrees.net) 是网络上领先的在线协作家谱应用。

此插件基于 docker 镜像 https://github.com/NathanVaughn/webtrees-docker

## 配置

使用插件的 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 可以在 <http://homeassistant:PORT> 找到。

用户名和密码通过启动向导定义。

选项可以通过两种方式配置：

- 插件选项

```yaml
LANG: "en-US" # webtrees 的默认语言
BASE_URL: "http://192.168.178.69" # 你访问 webtrees 的 url
DB_TYPE: "sqlite" # 你的数据库类型：sqlite 用于自动配置，或 external 用于手动配置
CONFIG_LOCATION: config.yaml 的位置（见下文）
localdisks: sda1 # 放置你的驱动器硬件名称，以逗号分隔，或其标签。例如：sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，要挂载的 smb 服务器列表，以逗号分隔
cifsusername: "username" # 可选，smb 用户名，对所有 smb 共享相同
cifspassword: "password" # 可选，smb 密码
trusted_headers: 单个地址，或 CIDR 格式的地址范围
base_url_portless: 不带端口的基 url
```

- Config.yaml

可以在引用的插件选项中的 config.yaml 文件中添加自定义环境变量。包含此文件的文件夹不属于根/config 目录（其中包含 HA 的配置.yaml），而是 /root/addon_configs ([HA 文档](https://developers.home-assistant.io/blog/2023/11/06/public-addon-config/))。完整的环境变量可以在以下位置找到：https://github.com/linuxserver/docker-paperless-ng。它必须以有效的 yaml 格式输入，该格式在插件启动时进行验证。

## 安装

此插件的安装相当简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的家居助手实例中（在右上角的监督器插件存储中，或点击下面的按钮如果您已配置我的 HA）
   [![打开您的家居助手实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击“保存”按钮以存储您的配置。
1. 将插件选项设置为您的偏好设置
1. 启动插件。
1. 检查插件的日志以查看是否一切顺利。
1. 打开 WebUI 并调整软件选项

## 远程访问

可以公开此插件以供外部访问（供家人和朋友使用）。
这可以免费完成，并且不会将您的网络暴露在外部。
解决方案之一是 [Cloudflare tunnel](https://github.com/brenner-tobias/addon-cloudflared)。有关如何操作的资料在论坛和 YouTube 上有很多，包括使用额外的规则和 Google 邮箱验证来确保安全。
以下是在配置集成时需要考虑的事项：

Webtrees 配置

```yaml
BASE_URL: httpS://your_tunnel_domain_name.example.com
# 这是您将使用的外部 URL 来访问页面。
# 即使插件的基配置不使用 SSL，但在使用 Cloudflare 时，基_url 中的 https 很重要
# 这是因为当隧道运行时，Cloudflare 将应用其自己的 SSL 到连接。
# 如果 base_url 使用 http://，这将导致不匹配，并且某些块将无法正确加载
ssl: false #禁用，Cloudflare 负责此操作
base_url_portless: true #必须启用

#其余的是标准配置
DATA_LOCATION: /config/data
certfile: fullchain.pem
keyfile: privkey.pem
```

Cloudflared 配置

```yaml
external_hostname: "" #无，以保持 HA 仅通过 Nabu Casa 可访问，但可以用于同时进行两项操作
additional_hosts:
  - hostname: your_tunnel_domain_name.example.com #注意它与 webtrees 配置中的相同
    service: http://your_HA_IP:9999 #注意这里使用 http 并带有端口号，尽管 webtrees 配置为不带端口号
tunnel_name: Your_tunnel_name
```

## 支持

在 GitHub 上创建问题

## 示例

![示例](https://installatron.infomaniak.com/installatron//images/ss2_webtrees.jpg)
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
