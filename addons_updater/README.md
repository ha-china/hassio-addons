# Home Assistant 附加组件：addons updater

我利用业余时间维护此附加组件及其他 Home Assistant 附加组件：跟踪上游变更、HA 变更以及在真实硬件上测试需要大量时间（以及一些金钱）。我使用系统中约 5-10 个超过 110 个附加组件中的附加组件，因此我定期安装测试机器（并购买一些我自己不使用的测试服务如 VPN）来调试和改进附加组件

如果您使用此附加组件节省时间或让您的配置更简单，您的支持对我来说将非常宝贵！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Faddons_updater%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Faddons_updater%2Fconfig.json)
![Arch](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Faddons_updater%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我的仓库打星！点击下方的图片给它打星，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/addons_updater/stats.png)

## 关于本工具

此脚本允许根据上游的新发布自动更新附加组件。这仅供开发人员使用的辅助工具。终端用户无需手动更新附加组件——当可更新时，HA 会自动通知他们

## 安装

安装此附加组件非常简单，与其他任何 Hass.io 附加组件的安装方式没有区别。

1. 将我的附加组件库添加到您的 Home Assistant 实例中（在 supervisor 的 addons store 中于右上角点击，或者如果您已配置了我的 HA，点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 根据您的喜好配置附加组件，详见下方。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志以确认一切是否顺利。

## 配置

没有 Web 界面。配置通过两种方式设置。

### Updater.json

在您的库中附加组件文件夹内（其中包含 `config.json`），创建一个 `updater.json` 文件。
该文件将被附加组件用于获取上游附加组件信息。
只有包含 `updater.json` 文件的附加组件会被更新。
这里有一个 [示例](https://github.com/alexbelgium/hassio-addons/blob/master/arpspoof/updater.json)。

您可以在文件中添加以下标签：

- `github_fulltag`: 如果为 `true` 则是例如 `"v3.0.1-ls67"`，如果为 `false` 则是 `"3.0.1"`
- `github_beta`: `true`/`false`；是否仅查找正式发布而非预发布版本
- `github_havingasset`: 如果为 `true` 则要求发布物必须包含二进制文件而不仅仅是源代码
- `github_tagfilter`: 筛选发布物名称中的文本
- `github_exclude`: 排除发布物名称中的文本
- `last_update`: 自动填充，表示最后一次上游更新的日期
- `repository`: `'name/repo'`，来自 GitHub
- `paused`: `true` # 暂停更新
- `slug`: 您的附加组件的 slug 名称
- `source`: container/dockerhub/github,gitlab,bitbucket,pip,hg,sf,website-feed,local,helm_chart,wiki,system,wp,codeberg (Codeberg 通过其 Gitea API 支持，该 API 已自动配置)
- `upstream_repo`: `name/repo`，例如 `'linuxserver/docker-emby'`。使用 `source: container` 时，它则是一个完整的镜像引用，例如 `'ghcr.io/imagegenius/immich:3'`
- `upstream_version`: 自动填充，对应于附加组件中引用的当前上游版本
- `dockerhub_by_date`: 在 dockerhub 中，使用 `last_update` 日期而不是版本号
- `dockerhub_list_size`: 在 dockerhub 中，考虑多少个容器作为最新版本

### 基于他人镜像构建的附加组件

一个不自行构建应用程序，而是 `FROM` 他人发布的镜像的附加组件，必须发布该镜像持有的版本，而不是应用程序的最新发行版。`ghcr.io/imagegenius/immich:3` 是一个重建的 immich 镜像，滞后于上游数天甚至数周：跟踪 `immich-app/immich` 发布的版本时，附加组件不包含该版本，而随着镜像最终追上，附加组件就没有理由再进行重建了。

`source: container` 从镜像本身读取版本。将 `upstream_repo` 设置为 `build.json` 中使用的确切镜像引用（包含标签）：

```json
{
  "source": "container",
  "upstream_repo": "ghcr.io/imagegenius/immich:3"
}
```

版本来自镜像的 `org.opencontainers.image.version` 标签，该标签由发布第一个对应于该标签的 linux 镜像的镜像读取；如果没有该标签可读，附加组件将被跳过。针对 `ghcr.io`（提供来自 `https://ghcr.io/token` 的匿名拉取令牌）；如果使用不同的容器镜像标识符进行身份验证（如 Docker Hub），则无法读取版本，附加组件将被跳过。

Digest 会记录在版本旁边，存入 `upstream_digest`，当两者中的任何一个改变时，附加组件将被重建。对于为了修复基础镜像安全问题或调整打包方式而重建相同版本版的发布者，该发布会将标签重新指向新内容下的相同标签，而 Digest 则是唯一能表明这一点的证据。`upstream_digest` 是自动填充的；当您迁移附加组件到此来源时，可手动初始化它，否则首次运行时会将未知的 Digest 视为变更，并毫无意义地重建一次。

标签是由发布者选择元数据。有些镜像不包含标签，有些镜像记录自己的打包修订版本而非应用程序版本，因此此来源是附加组件的可选功能，而非默认设置。

### 附加组件版本号

`config.yaml` 中写入的 `version` 是 Home Assistant 用来决定是否有可用更新的根据进行比较的值。Home Assistant 在无法按顺序排列两个版本且新版本不是严格更旧时（`1.2.3` -> `1.2.3-2` 是半版本号的预发布版，因此*更旧*），它无法排序诸如 `version-bf9e0b4f` 或 `ubuntu-2026-06-01` 这样的标签。

因此附加组件的版本号源自上游标签：

- 使用 Home Assistant 可以排序且更新的标签本身
- `1.2.3-4` 和 `1.2.3+4` 变为 `1.2.3.4`
- 预发布标记成为独立部分，其携带的数量用于排序附加组件：`5.0.0b5` -> `5.0.0.5`
- 它无法排序的标签保留其携带的所有数字，并保持顺序：`v26.2-ls256` -> `v26.2.256`，`nightly-2.6.1.5509-ls8` -> `2.6.1.5509.8`，`4.16-r0-ls94` -> `4.16.0.94`，`ubuntu-2026-07-28` -> `2026.07.28`。不包含数字的单词、架构和其他内容（如提交哈希）将被省略
- 不包含任何数字的标签（`version-bf9e0b4f`, `sts`）递增当前的附加组件版本（`1.37` -> `1.38`），或者当无法递增时使用日期（`2026.08.01`，则同一天第二次更新为 `2026.08.01.1`）

`updater.json` 始终保留原始上游标签，因此下次运行时将再次比较上游与上游，单个上游发行版永远不会触发两次附加组件更新。原始标签也被保留在 Dockerfile 和构建文件中，并在其与附加组件版本不同时添加到更改日志条目中。

这些规则由 `python3 /usr/bin/ha_version.py --selftest` 检查，可以在附加组件容器的终端中运行。

### 附加组件配置

此处定义将允许附加组件连接到您的库所用的值。

```yaml
repository: 'name/repo' coming from github
gituser: your github username
gitapi: your github api token(classic) https://github.com/settings/tokens
gitmail: your github email
date_iso8601: true # 使用 ISO8601 日期 (YYYY-MM-DD) 而不是 DD-MM-YYYY
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

此附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**: 参见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**: 使用附加组件 `env_vars` 选项并参见 [为您的附加组件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon) 了解更多细节。

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
