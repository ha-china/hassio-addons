# Home assistant 附加组件：Zoraxy

我在业余时间维护这个及其他 Home Assistant 附加组件：跟进上游更改、HA 更改，并在真实硬件上测试花费了大量时间（以及一些金钱）。我使用的附加组件大约有 5-10 个（总共 110 多个），所以我经常安装测试机器（并购买一些我自己不使用的测试服务，如 vpn）来排查和改condition 附加组件。

如果这个附加组件为您节省了时间或使您的设置更简便，我将非常感谢您的支持！

[![向我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐款][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoraxy%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoraxy%2Fconfig.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

## 关于内容

[Zoraxy](https://github.com/tobychui/zoraxy) 是一个功能通用的 HTTP 请求（反向）代理和转发工具，带有简洁的 Web 管理界面。它可以用作 Nginx Proxy Manager 的现代、积极维护的替代品：创建反向代理主机、管理 TLS 证书（包括 ACME / Let's Encrypt）、设置重定向、访问规则、基本 Web 服务器等。

该附加组件基于 tobychui 官方的 [docker 镜像](https://github.com/tobychui/zoraxy/tree/main/docker)。

## 安装

安装此附加组件非常直接，与安装任何其他 Hass.io 附加组件并无不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置过我的 HA，则点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示附加组件仓库对话框，其中包含预填充的特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，看看一切是否顺利。
1. 打开 Web 界面并创建管理员账户。

## 配置

管理 Web 界面在端口 `8000` 上公开。由于 Zoraxy 充当必须独占标准 Web 端口的反向代理，它**不会**通过 Home Assistant 网关提供——请直接打开它：

Web 界面位于 `http://homeassistant.local:8000`

反向代理本身监听着端口 `80`（HTTP）和 `443`（HTTPS）。请确保主机上的这些端口是空闲的（例如，未被另一个代理附加组件使用），并且，如果您希望从外部访问您的服务，请在路由器上转发它们。

所有配置、数据库、日志和插件都持久存储在附加组件配置文件夹中（`/addon_configs/<slug>_zoraxy/`，在容器中作为 `/config` 暴露），因此它们可以承受附加组件的更新和重启。

### 选项

| 选项      | 默认值 | 描述                                                                                  |
| --------- | ------ | ------------------------------------------------------------------------------------- |
| `NOAUTH`  | `false` | 禁用管理界面的认证（请谨慎使用）。                                                    |
| `ZEROTIER` | `false` | 启用 ZeroTier 全球局域网控制器（使用 `NET_ADMIN` 能力和 `/dev/net/tun`，二者均由附加组件授予）。 |
| `FASTGEOIP` | `false` | 启用高速地理 IP 查询（使用约 1 GB 额外内存）。                                          |
| `MDNS`    | `true`  | 启用 mDNS 服务发现。                                                                   |
| `TZ`      | -      | 时区，例如 `Europe/Brussels`。                                                        |
| `env_vars` | `[]`   | 传递任何上游环境变量（例如 `AUTORENEW`、`DB`、`MDNSNAME`...）。                       |

其他在 [Zoraxy docker README](https://github.com/tobychui/zoraxy/tree/main/docker) 中记录的上游设置可以通过 `env_vars` 提供：

```yaml
env_vars:
  - name: AUTORENEW
    value: "86400"
  - name: DB
    value: "auto"
```

## 支持

在 [存储库](https://github.com/alexbelgium/hassio-addons) 上创建问题。

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
