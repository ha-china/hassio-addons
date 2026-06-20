# 家居助手插件：Zoraxy

我在业余时间维护这个以及其他Home Assistant插件：跟上上游变更、HA变更和在实际硬件上的测试都需要大量的时间（还有一些金钱）。我经常使用我超过110个插件中的5-10个，所以我安装了测试机器（并购买了一些测试服务，如vpn），这些服务我自己并不使用，用于故障排除和改进插件。

如果这个插件为您节省了时间或使您的设置更简单，我将非常感激您的支持！

[![请给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过PayPal捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoraxy%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoraxy%2Fconfig.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

## 关于

[Zoraxy](https://github.com/tobychui/zoraxy) 是一个通用目的的HTTP请求（反向）代理和转发工具，具有干净的Web管理界面。它可以作为现代、积极维护的Nginx代理管理器的替代品：创建反向代理主机、管理TLS证书（包括ACME / Let's Encrypt）、设置重定向、访问规则、基本Web服务器等。

此插件基于tobychui的官方[docker镜像](https://github.com/tobychui/zoraxy/tree/main/docker)。

## 安装

此插件的安装相当简单，与安装任何其他Hass.io插件没有区别。

1. 将我的插件仓库添加到您的Home Assistant实例中（在监督器插件商店右上角，或点击下面的按钮如果您已经配置了我的HA）
   [![打开您的Home Assistant实例并显示一个带有特定仓库URL预填充的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击“保存”按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 打开Web UI并创建您的管理员账户。

## 配置

管理Web UI暴露在端口`8000`上。由于Zoraxy充当一个必须拥有标准Web端口的反向代理，它**不是**通过Home Assistant入口服务——直接打开：

Webui可以在`http://homeassistant.local:8000`找到

反向代理本身监听端口`80`（HTTP）和`443`（HTTPS）。请确保这些端口在主机上是免费的（例如，不是由另一个代理插件使用），如果您想从外部访问您的服务，请通过您的路由器转发它们。

所有配置、数据库、日志和插件都持久地存储在插件配置文件夹中（`/addon_configs/<slug>_zoraxy/`，在容器内部暴露为`/config`），因此它们在插件更新和重启后仍然存在。

### 选项

| 选项      | 默认 | 描述                                                                                      |
| --------- | ---- | ---------------------------------------------------------------------------------------- |
| `NOAUTH`  | `false` | 禁用管理界面的认证（请谨慎使用）。                                                                 |
| `ZEROTIER` | `false` | 启用ZeroTier全局区域网络控制器（使用`NET_ADMIN`能力以及`/dev/net/tun`，这两个都由插件授予）。 |
| `FASTGEOIP` | `false` | 启用高速GeoIP查找（使用额外的约1GB内存）。                                                           |
| `MDNS`    | `true`  | 启用mDNS服务发现。                                                                         |
| `TZ`      | -       | 时区，例如`Europe/Brussels`。                                                                   |
| `env_vars`  | `[]`    | 传递任何额外的上游环境变量（例如`AUTORENEW`、`DB`、`MDNSNAME`等）。                                 |

任何其他在[Zoraxy docker README](https://github.com/tobychui/zoraxy/tree/main/docker)中记录的上游设置都可以通过`env_vars`提供：

```yaml
env_vars:
  - name: AUTORENEW
    value: "86400"
  - name: DB
    value: "auto"
```

## 支持

在[仓库](https://github.com/alexbelgium/hassio-addons)上创建一个问题。
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
