# Home Assistant 插件：addons updater

我在业余时间维护这些及其他 Home Assistant 插件：跟踪上游变更、适配 Home Assistant 的更新以及在真实硬件上进行测试需要大量时间（有些还需要花钱）。我日常使用的插件大约有 5-10 个（总共有超过 110 个），因此我经常安装测试机（购买一些不我自己使用的测试服务，如 vpn）来调试和改进这些插件。

如果这个插件能为您节省时间或让您的设置更轻松，您的支持将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Faddons_updater%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Faddons_updater%2Fconfig.json)
![Arch](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Faddons_updater%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢为我仓库投 Star 的每一位朋友！点下下方的图片即可投 Star，它会显示在右上角。感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/addons_updater/stats.png)

## 简介

此脚本允许根据上游的新版本自动更新插件。这只是一个开发人员的辅助工具。最终用户不需要手动更新插件——当 Home Assistant 有可用更新时会自动通知用户。

## 安装

此插件的安装非常简单，与其他 Hass.io 插件的安装方式并无不同。

1. 将我的插件仓库添加到您的 Home Assistant 实例（在 Supervisor 插件商店右上角，或如果您已配置好我的 HA，则点击按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 根据您的偏好配置插件，见下文。
1. 点击 `Save` 按钮保存您的配置。
1. 启动插件。
1. 查看插件日志以确认一切正常。

## 配置

没有 Web UI。配置通过两种方式设置。

### Updater.json

在您的仓库中插件文件夹（即 `config.json` 所在文件夹）下，创建一个 `updater.json` 文件。
此文件将被插件用于获取插件的上游信息。
仅有关联 `updater.json` 文件的插件才会被更新。
这里有一个 [示例](https://github.com/alexbelgium/hassio-addons/blob/master/arpspoof/updater.json)。

您可以在文件中添加以下标签：

- `github_fulltag`: 例如 "v3.0.1-ls67" 为 true，"3.0.1" 为 false
- `github_beta`: true/false；是否只在获取正式版本还是预发布版本
- `github_havingasset`: true 如果发布了必须包含二进制文件而不仅仅是源代码的发行版本
- `github_tagfilter`: 筛选发行版名称中的文本。使用 `~` 开头使用正则表达式（适用于每个源）；保持能被 Python 和 `grep -E` 都理解的语法（`[0-9]` 而不是 `\d`）且不要有空格。例如仅保留数字版本如 `1.2.3` 或 `v1.2.3`：`"github_tagfilter": "~^v?[0-9.]+$"`
- `github_exclude`: 排除发行版名称中的文本
- `last_update`: 自动填充，上次上游更新的日期
- `repository`: 'name/repo'（来自 GitHub）
- `paused`: true # 暂停更新
- `slug`: 您插件的短文件名
- `source`: container/dockerhub/github, gitlab, bitbucket, pip, hg, sf, website-feed, local, helm_chart, wiki, system, wp, codeberg（Codeberg 支持通过其 Gitea API 配置，配置将自动完成）
- `upstream_repo`: name/repo，例如 'linuxserver/docker-emby'。如果使用 `source: container`，则为完整的镜像引用，例如 'ghcr.io/imagegenius/immich:3'
- `upstream_version`: 自动填充，对应插件中引用的当前上游版本
- `dockerhub_by_date`: 在 dockerhub 中，使用 `last_update` 日期而不是版本
- `dockerhub_list_size`: 在 dockerhub 中，考虑多少个容器作为最新版本

### 搭建于他人镜像上的插件

如果插件不自己构建应用程序，而是 `FROM` 第三方发布的镜像构建，则必须发布该镜像所持版本，而不是应用程序的最新发行版。`ghcr.io/imagegenius/immich:3` 是 immich 一个滞后数天甚至数周的 rebuilt：跟踪 `immich-app/immich` 发布了插件不包含的版本，一旦镜像最终追赶上来，插件便有了没有重建理由。

`source: container` 将从镜像本身读取版本。将 `upstream_repo` 设置为 `build.json` 中使用的确切镜像引用（包含标签）：

```json
{
  "source": "container",
  "upstream_repo": "ghcr.io/imagegenius/immich:3"
}
```

版本号来自镜像的 `org.opencontainers.image.version` 标签，读取该标签发布的第一台 Linux 镜像，当没有可读取的标签时，插件保持不动。针对 `ghcr.io`，该服务从 `https://ghcr.io/token` 提供匿名拉取令牌；对使用不同认证的注册中心（如 Docker Hub），则无法获取版本，插件将被跳过。

版本号记录在其后，并存储在 `upstream_digest` 中，当其中任意一项变更时，插件将重新构建。如果发布者针对基本镜像的安全性修复或包装修订重新构建相同版本，则会重新分配标签指向新内容，标签保持不变，而 digests 才是表明变化的唯一依据。`upstream_digest` 会自动填充；在将插件迁移到此源时手动初始化，或者首次运行时将未知的 digest 视为变更并进行一次无用的重建。

标签是发布者选择的元数据。有些镜像没有任何标签，有些则记录自己的包装修订而不是应用程序版本，因此该源是按插件启用的，默认永不启用。

### 插件版本号命名

在插件 `config.yaml` 中写入的 `version` 是 Home Assistant 用于判断是否有可用更新进行比较的值。当 Home Assistant 能够比较两个版本且新版本并不严格更新时（例如 `1.2.3` -> `1.2.3-2`，这是 semver 预发布，因此是 *更旧* 的），它不会显示更新；它甚至无法比较标签，如 `version-bf9e0b4f` 或 `ubuntu-2026-06-01`。

因此，插件版本号由上游标签派生而来：

- 能够比较且更新使用的是原始标签
- `1.2.3-4` 和 `1.2.3+4` 变为 `1.2.3.4`
- 预发布标记变为一个独立的章节，其携带的数字继续有序排列插件版本号：`5.0.0b5` -> `5.0.0.5`
- 无法比较的标签保留其携带的所有数字，并保持顺序：`v26.2-ls256` -> `v26.2.256`, `nightly-2.6.1.5509-ls8` -> `2.6.1.5509.8`, `4.16-r0-ls94` -> `4.16.0.94`, `ubuntu-2026-07-28` -> `2026.07.28`。不包含数字的词（即不含数字的词）、一个架构以及任何其他内容（如提交哈希）都会被舍弃
- 完全不包含数字的标签（如 `version-bf9e0b4f`, `sts`）会递增当前插件版本号（`1.37` -> `1.38`），或者在有可递增对象时使用日期（`2026.08.01`，然后同一天第二次更新为 `2026.08.01.1`）

`updater.json` 始终保留原始上游标签，所以下一次运行时仍然比较上游与上游，单一次上游发行版不会触发两次插件更新。原始标签也保留在 Dockerfile 和构建文件中，并在其与插件版本号不同时添加到更新日志中。

这些规则可以通过运行 `python3 /usr/bin/ha_version.py --selftest` 进行检查，该命令可以在插件容器中从终端运行。

### 插件配置

在这里您定义将允许插件连接到您仓库的值。

```yaml
repository: 'name/repo' coming from github
gituser: your github username
gitapi: your github api token(classic) https://github.com/settings/tokens
gitmail: your github email
date_iso8601: true # use ISO8601 dates (YYYY-MM-DD) instead of DD-MM-YYYY
verbose: 'false'
```

示例：

```yaml
repository: alexbelgium/hassio-addons
gituser: your github username
gitapi: your github api token
gitmail: your github email
date_iso8601: true
verbose: "false"
```

### 自定义脚本和环境变量

此插件支持通过 `app_config` 映射自定义脚本和环境变量：

- **自定义脚本**: 参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**: 使用插件 `env_vars` 选项，详情参见 [向您的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)。

[repository]: https://github.com/alexbelgium/hassio-addons

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
