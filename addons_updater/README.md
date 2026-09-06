# Home Assistant 附加组件：addons 更新器

我在业余时间维护此附加组件及其他 Home Assistant 附加组件：跟踪上游变化、HA 的变化以及在真实硬件上进行测试会耗费大量时间（以及一些金钱）。我使用大约 5-10 个我的 >110 个附加组件中的，因此经常安装测试机器（并购买一些测试服务，例如 VPN），这些机器我不自行使用，用于故障排除和改进附加组件。

如果这个附加组件为您节省时间或使您的设置更简单，我将不胜感激！

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

_感谢所有为我仓库点星的人！要点星，请点击下图，然后它会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/addons_updater/stats.png)

## 关于本工具

此脚本允许基于上游新发布自动更新附加组件。这仅是开发人员使用的辅助工具。最终用户无需更新附加组件——当有可用更新时，HA 会自动向 ними 发出通知。

## 安装

此附加组件的安装非常简单，与安装任何其他的 Hass.io 附加组件没有不同。

1. 将我存储库中的附加组件添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置我的 HA 则点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 根据您的偏好配置附加组件，见下文。
4. 点击 `Save` 按钮以保存您的配置。
5. 启动附加组件。
6. 检查附加组件的日志，看看一切是否顺利。

## 配置

没有 Web UI。配置通过两种方式设置。

### updater.json

在您存储库中附加组件的文件夹中（即包含 config.json 的文件夹）下，创建一个"updater.json"文件。
此文件将被附加组件用于获取附加组件上游信息。
只有带有 updater.json 文件的附加组件才会被更新。
这里是 [一个示例](https://github.com/alexbelgium/hassio-addons/blob/master/arpspoof/updater.json)。

您可以在文件中添加以下标签：

- github_fulltag: true 例如 "v3.0.1-ls67"，false 为 "3.0.1"
- github_beta: true/false ; 是否只查找发布而非预发布
- github_havingasset : true 如果有要求发布具有二进制文件而不仅仅是源代码
- github_tagfilter: 在发布名称中过滤文本
- github_exclude: 在发布名称中排除文本
- last_update: 自动填充，上游最后一次更新日期
- repository: 'name/repo' 来自 github
- paused: true # 暂停更新
- slug: 来自您的附加组件的 slug 名称
- source: dockerhub/github,gitlab,bitbucket,pip,hg,sf,website-feed,local,helm_chart,wiki,system,wp,codeberg (Codeberg 通过其 Gitea API 支持，该 API 配置为自动完成)
- upstream_repo: name/repo，例如 'linuxserver/docker-emby'
- upstream_version: 自动填充，对应附加组件中引用的当前上游版本
- dockerhub_by_date: 在 dockerhub 中，使用 last_update 日期而不是版本
- dockerhub_list_size: 在 dockerhub 中，考虑多少容器作为最新版本

### 附加组件的版本编号

`config.yaml` 中写入的 `version` 是 Home Assistant 进行比较以决定是否可用更新的版本。Home Assistant 在能够按顺序比较两个版本且新版本不是严格更新版本时隐藏更新（`1.2.3` -> `1.2.3-2` 是一个 semver 预发布，因此它更旧），并且完全无法按顺序处理标签 `version-bf9e0b4f` 或 `ubuntu-2026-06-01`。

因此，附加组件版本是从上游标签派生的：

- 一个 Home Assistant 可以按顺序且更新的标签被原样使用
- `1.2.3-4` 和 `1.2.3+4` 变为 `1.2.3.4`
- 预发布标记成为独立的章节，因此它携带的数字保持附加组件的顺序：`5.0.0b5` -> `5.0.0.5`
- 无法按顺序处理的标签保留其携带的每个数字，按顺序：`v26.2-ls256` -> `v26.2.256`，`nightly-2.6.1.5509-ls8` -> `2.6.1.5509.8`，`4.16-r0-ls94` -> `4.16.0.94`，`ubuntu-2026-07-28` -> `2026.07.28`。不包含数字的单词、架构以及任何其他内容（如提交哈希）都会被省略
- 不包含任何数字的标签（`version-bf9e0b4f`，`sts`）会递增当前附加组件版本（`1.37` -> `1.38`），或者在没有递增可用时使用日期（`2026.08.01`，则同一天的第二次更新为 `2026.08.01.1`）

`updater.json` 始终保留原始上游标签，因此下一次运行仍然将上游与 upstream 进行比较，并且单个上游发布不会触发两次附加组件更新。原始标签也保留在 Dockerfile 和构建文件中的，并在其不同于附加组件版本时添加到更改日志条目中。

这些规则由 `python3 /usr/bin/ha_version.py --selftest` 检查，可以在附加组件容器的终端中运行。

### 附加组件配置

在此处定义允许附加组件连接到您存储库的值。

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

此附加组件支持通过 `addon_config` 映射使用自定义脚本和环境变量：

- **自定义脚本**：参见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：使用附加组件 `env_vars` 选项，并参见 [为您的附加组件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon) 了解详细信息。

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
