# Home Assistant 添加组件：Organizr

我利用空闲时间维护此及其他 Home Assistant 添加组件：跟上上游变更、HA 变更，并在真实硬件上进行测试，这需要花费大量时间（以及一些金钱）。我约使用我的 110 多个添加组件中的 5-10 个，因此我安装测试机（并购买一些我不常用的测试服务，如 vpn），以便进行故障排除和改进添加组件。

如果此添加组件为您节省时间或简化您的设置，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 添加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Forganizr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Forganizr%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Forganizr%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库打上星标的人！要给它打上星标，请点击下方的图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/organizr/stats.png)

## 简介

这是一个用 PHP 编写的 HTPC/Homelab 服务提供商组织者。
此添加组件基于 linuxserver.io 的 [docker 镜像](https://hub.docker.com/r/organizr/organizr)。

## 安装

此添加组件的安装非常简单，与其他 Hass.io 添加组件的安装没有不同。

1. 将我的添加组件存储库添加到您的 home assistant 实例中（在 supervisor 添加组件商店的右上角，或者如果您已配置了我的 HA，则点击下方的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此添加组件。
1. 点击 `Save` 按钮以保存配置。
1. 启动添加组件。
1. 检查添加组件的日志，以查看一切是否顺利。
1. 仔细根据偏好配置添加组件，有关详细信息，请参阅官方文档。

## 配置

使用添加组件的 `env_vars` 选项传递额外的环境变量（大小写均可）。有关详细信息，请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 可以在 <http://homeassistant:80> 或通过侧边栏使用 Ingress 访问。
配置可以通过应用程序 Web UI 进行，但以下选项除外。

### 设置步骤

1. 启动附加组件并访问 Web 界面
2. 按照设置向导创建管理账户
3. 通过 Web 界面配置您的服务和选项卡
4. 数据库文件存储在 `/data/` 目录中

### 选项

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |

### 示例配置

```yaml
PGID: 1000
PUID: 1000
```

**注意**：Organizr 需要通过添加组件选项进行最小配置。包括服务集成、身份验证和主题设置在内的大多数设置都是通过 Web 界面配置的。

## 支持

在 github 上创建问题

## 插图

![bjaSt3fTfdXhw5vyl-7Lqz1EOjJIyh8lrdqxA53qO6E](https://user-images.githubusercontent.com/44178713/123061812-43601b00-d40c-11eb-993c-2aed31072775.jpg)

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
