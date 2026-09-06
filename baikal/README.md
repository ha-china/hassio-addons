## &#9888; 开放请求 : [✨ [请求] Baikal - 允许使用 Tailscale 证书和密钥以使用 HTTPS (已于 2025-07-03 开启)](https://github.com/alexbelgium/hassio-addons/issues/1935) 由 [@frederickjh](https://github.com/frederickjh) 提出

# Home Assistant 添加组件：Baikal

我在业余时间维护此及其他 Home Assistant 添加组件：跟踪上游更改、HA 更改以及在真实硬件上测试需要大量时间（以及一些金钱）。我大约使用 5-10 个不仅我自己使用，而且定期安装测试机（并购买一些测试服务如 vpn）来排查问题和改进添加组件的 >110 个组件。

如果您使用此添加组件节省时间或使您的设置更简单，我将不胜感激地接受您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐款][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 添加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbazarr%2Fconfig.yaml)
![入口点 (Ingress)](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbazarr%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbazarr%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20代码库)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_非常感谢大家给我的仓库星标！要星标它，请点击下图，然后它就会显示在右上角。谢谢！_

[![@alexbelgium/hassio-addons 星标者仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/baikal/stats.png)

## 关于

---

[Baikal](https://sabre.io/baikal/) 是一个轻量级的 CalDAV+CardDAV 服务器。它提供具有易于管理的用户、地址簿和日历的扩展 Web 界面。它安装快速简单，只需要一个基本的 php 支持服务器。数据可以存储在 MySQL 或 SQLite 数据库中。
它发布的是由 [sabre-io](https://github.com/sabre-io/Baikal/releases) 发布的版本，运行在由 <https://github.com/ckulka/baikal-docker> 构建的 nginx 和 php-fpm 镜像上。

在 Baikal 本身更新后，打开一次 Web 管理：Baikal 会在再次提供日历之前要求确认升级。日历、联系人、用户和 Baikal 配置会被保留，但手动在应用程序文件夹内所做的编辑在每次启动时都会被替换。

## 配置

---

Web 界面可以在 <http://homeassistant:PORT> 处找到。
配置可以通过应用程序 Web UI 完成，除了以下选项

```yaml

```

### 自定义脚本和环境变量

此添加组件支持通过 `addon_config` 映射自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在添加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：请参阅 [向添加组件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

## 安装

---

此添加组件的安装非常简单，与其他任何添加组件的安装没有不同。

1. 将我的添加组件库添加到您的 Home Assistant 实例中（在 supervisor 添加组件存储的右上角，或者如果您已配置我的 HA，则点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加添加组件库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此添加组件。
3. 点击 `保存` 按钮以存储您的配置。
4. 将添加组件选项设置为您的偏好设置
5. 启动添加组件。
6. 查看添加组件的日志以查看一切是否正常。
7. 打开 Web UI 并调整软件选项

### 环境变量

使用添加组件的 `env_vars` 选项来传递额外的环境变量（名称为大写或小写）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详细信息。

## 支持

在 github 上创建问题

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
