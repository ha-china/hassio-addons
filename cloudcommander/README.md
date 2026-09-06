# Home Assistant 插件：Cloudcommander

我利用业余时间维护此及其他 Home Assistant 插件：跟进上游更改、HA 更改以及对真实硬件的测试非常耗时（并且需要一些金钱）。我使用大约 5-10 个我在 110 多个插件中的插件，因此我安装测试机（并购买一些测试服务如 vpn）我自己不使用，以便排查问题和改进插件

如果此插件为您节省了时间或让您的设置更简单，我将非常感激您给予的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcloudcommander%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcloudcommander%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcloudcommander%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_非常感谢大家给我的仓库投票！点击上方图片投票，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/cloudcommander/stats.png)

## 关于

[Cloud Commander](https://github.com/coderaiser/cloudcmd) 是一个带控制台和编辑器的文件系统 Web 管理器。
此插件基于 [docker 镜像](https://hub.docker.com/r/coderaiser/cloudcmd)。

## 配置

Web 界面可通过 <http://homeassistant:8000> 访问，或通过侧边栏使用 Ingress 访问。
除了以下选项外，配置均可在应用 Web 界面中进行。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `CUSTOM_OPTIONS` | str | | 自定义 CLI 选项 (例如，`--name Homeassistant`) |
| `DROPBOX_TOKEN` | str | | Dropbox 集成令牌 (参见 https://cloudcmd.io/) |
| `localdisks` | str | | 挂载的本地驱动器 (例如，`sda1,sdb1,MYNAS`) |
| `networkdisks` | str | | 挂载的 SMB 共享 (例如，`//SERVER/SHARE`) |
| `cifsusername` | str | | SMB 共享的用户名 |
| `cifspassword` | str | | SMB 共享的密码 |
| `cifsdomain` | str | | SMB 共享的域 |
| `smbv1` | bool | `false` | 启用 SMB v1 协议 |

### 配置示例

```yaml
CUSTOM_OPTIONS: "--name Homeassistant"
DROPBOX_TOKEN: "your-dropbox-token"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/files"
cifsusername: "fileuser"
cifspassword: "password123"
cifsdomain: "workgroup"
smbv1: false
```

### 挂载驱动器

此插件支持挂载本地驱动器及远程 SMB 共享：

- **本地驱动器**：参见 [插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件支持自定义脚本和环境变量：

- **自定义脚本**：参见 [插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（名称大小写均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此插件的安装非常直观，与安装任何其他 Hass.io 插件相同。

1. 将我的插件仓库添加到 Home Assistant 实例中（在 supervisor 插件商店右上角，或如果你已配置了 HA，则点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击 `Save` 按钮以保存您的配置。
4. 启动插件。
5. 检查插件日志以查看是否一切正常。

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
