# Home assistant 附加组件：Zoraxy

我利用业余时间维护此及其他 Home Assistant 附加组件：跟进上游变化、HA 变化以及在真实硬件上测试需要大量时间（和一些金钱）。我使用了大约 5-10 个超过 110 个附加组件中的功能，因此我定期安装测试机器（并购买一些我本人不使用的测试服务，如 vpn），以便用于故障排除和改进附加组件。

如果这个附加组件为您节省了时间或让您的设置更加轻松，我将非常感谢您提供的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoraxy%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoraxy%2Fconfig.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

## 关于

[Zoraxy](https://github.com/tobychui/zoraxy) 是一个通用的 HTTP 请求（反向）代理和转发工具，附带简洁的 Web 管理界面。它可以作为 Nginx Proxy Manager 的现代、 actively-maintained（持续维护）的替代方案：创建反向代理主机，管理 TLS 证书（包括 ACME / Let's Encrypt），设置重定向、访问规则、基本 Web 服务器等。

此附加组件基于 tobychui 提供的官方 [docker 镜像](https://github.com/tobychui/zoraxy/tree/main/docker)。

## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件没有区别。

1. 将我的附加组件库添加到您的 home assistant 实例中（在 supervisor 附加组件商店右上角，或者如果您已经配置了我的 HA，请点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示“添加附加组件”对话框，同时预填充特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，查看一切是否顺利。
1. 打开 Web 界面并创建管理员账户。

## 配置

管理 Web 界面暴露于 `8000` 端口。由于 Zoraxy 充当反向代理，且必须拥有标准 Web 端口，因此它 **不** 通过 Home Assistant 的入口服务进行服务转发——直接打开它：

Web 界面可在 `http://homeassistant.local:8000` 访问。

反向代理本身监听 `80`（HTTP）和 `443`（HTTPS）端口。请确保这些端口在主机上是空闲的（例如，未被其他代理附加组件使用），并且，如果您想从外部访问您的服务，请在您的路由器上转发它们。

所有配置、数据库、日志和插件都持久化存储在附加组件配置文件夹中（`/app_configs/<slug>_zoraxy/`，在容器内暴露为 `/config`），因此它们可以存活于附加组件更新和重启。

### 选项

| 选项      | 默认值 | 描述                                                                                        |
| --------- | ------ | ------------------------------------------------------------------------------------------- |
| `NOAUTH`  | `false` | 禁用管理界面的认证（需谨慎使用）。                                                           |
| `ZEROTIER`| `false` | 启用 ZeroTier 全球区域网控制器（使用 `NET_ADMIN` 能力和 `/dev/net/tun`，这两者均附加组件授予）。 |
| `FASTGEOIP`| `false` | 启用高速 GeoIP 查找（使用约 1 GB 额外内存）。                                                 |
| `MDNS`    | `true` | 启用 mDNS 服务发现。                                                                          |
| `TZ`      | -      | 时区，例如 `Europe/Brussels`。                                                               |
| `env_vars`| `[]`   | 传递任何额外的上游环境变量（例如 `AUTORENEW`, `DB`, `MDNSNAME`, ...）。                       |

在 [Zoraxy docker README](https://github.com/tobychui/zoraxy/tree/main/docker) 中记录的任何其他上游设置都可以通过 `env_vars` 提供：

```yaml
env_vars:
  - name: AUTORENEW
    value: "86400"
  - name: DB
    value: "auto"
```

## 支持

在 [仓库](https://github.com/alexbelgium/hassio-addons) 上创建问题。

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
