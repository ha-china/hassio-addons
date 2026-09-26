# Home Assistant 附加组件：免费游戏领取器

我在业余时间维护此附加组件以及其他 Home Assistant 附加组件。跟上上游变更、Home Assistant 变更以及在真实硬件上进行测试需要相当多的时间。

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffree_games_claimer%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffree_games_claimer%2Fconfig.yaml)

[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

## 简介

此附加组件基于
[Free Games Claimer Remaster](https://github.com/P-Adamiec/Free-Games-Claimer-Remaster)。
它可以领取以下平台的免费游戏：

- Epic Games Store，包括其每周免费移动游戏
- Fab，Epic 的资产市场 (`fab`)
- Amazon Prime Gaming
- GOG
- Steam
- Ubisoft 抽奖活动 (`ubisoft`)
- AliExpress 每日签到领币 (`aliexpress`)
- GamerPower 支持的商店（当明确启用时）

为了与之前的附加组件版本兼容，默认的商店选择仍为 Epic Games、Prime Gaming 和 GOG。其他商店通过将它们添加到 `STORES` 来启用，例如 `epic,prime,gog,fab,ubisoft`，每个商店都需要在 `config.env` 中拥有自己的凭据。

## Web 界面

noVNC 界面仍在 `6080` 端口可用：

```text
http://homeassistant:6080
```

可用于初始登录、CAPTCHA 处理或其他手动浏览器交互。请在 `config.env` 中设置 `VNC_PASSWORD` 以保护 VNC 会话。

## 附加组件选项

| Option | Default | Description |
|--------|---------|-------------|
| `CONFIG_LOCATION` | `/config/config.env` | 持久化环境配置文件 |
| `RUN_ONCE` | `true` | 运行所有选定的领取器一次，然后像之前的发布那样停止附加组件 |
| `STORES` | empty | 可选的逗号分隔的覆盖选项，例如 `epic,prime,gog,steam` |
| `CMD_ARGUMENTS` | `node epic-games ; node prime-gaming ; node gog` | 已弃用的兼容选项；识别的遗留命令名称将转换为 `STORES` |
| `env_vars` | `[]` | 传递给附加组件的额外环境变量 |

### 运行模式

设置 `RUN_ONCE: true` 时，附加组件执行一次领取并通过。这是默认设置，保留了先前基于 vogler 的附加组件的行为。

设置 `RUN_ONCE: false` 时，remaster 将继续运行并使用其内部调度器。请在 `config.env` 中设置 `SCHEDULER_HOURS` 来控制间隔。

## 应用程序数据

附加组件在 `/config/data` 中存储应用程序写入的所有内容，Home Assistant 将其 exposed 为 `/addon_configs/xxx-free_games_claimer/data`。它可以不用 `docker exec` 通过文件浏览附加组件进行 inspect，并且包含：

| Path | Contents |
|------|----------|
| `fgc.db` | SQLite 领取历史记录 |
| `screenshots/<store>/` | 在领取运行时拍摄的截图 |
| `browser/` | Chromium 配置文件，每个商店一个 |
| `TurboVNC.log` | 虚拟显示服务器日志 |
| `config.env` | `CONFIG_LOCATION` 的运行时副本 |

**此目录是秘密的。** `browser/` 包含已登录的商店会话，`config.env` 包含账户凭据，因此访问 `addon_configs`（例如文件编辑器和 Samba 附加组件）的人可以使用它们。请勿共享或发布。

2.1.1 版本之前的版本将数据存储在不安全的 `/data` 卷中。一旦在 2.2.0 版本的初次启动时，现有的 payload 就会被复制到 `/config/data`。复制需要临时空闲空间，其大小大致等于现有数据的大小，当浏览器配置文件较大时可能需要几分钟。/data 中不会删除任何内容，因此降级仍能正常工作；一旦确认新位置可用，可以手动删除旧副本。

## 环境变量配置

附加组件在其配置中保留 `CONFIG_LOCATION`，默认值为 `/config/config.env`。从 Home Assistant 来看，这存储在附加组件的私有 `app_configs` 目录中，可以使用兼容的文件浏览附加组件进行编辑。

首次启动时会创建一个模板。常见的示例如下：

```env
# 保留前端的默认选择
STORES=epic,prime,gog

# Epic Games
EG_EMAIL=your-email@example.com
EG_PASSWORD=your-password
EG_OTPKEY=

# Amazon Prime Gaming
PG_EMAIL=your-amazon-email@example.com
PG_PASSWORD=your-password
PG_OTPKEY=

# GOG
GOG_EMAIL=your-gog-email@example.com
GOG_PASSWORD=your-password

# 可选的 Steam 支持
STEAM_USERNAME=your-steam-username
STEAM_PASSWORD=your-password

# 可选的通知
NOTIFY=tgram://bot-token/chat-id
# DISCORD_WEBHOOK=https://discord.com/api/webhooks/...
```

上游的发布更新通知 (`NOTIFY_UPDATES`) 已被附加组件禁用，因为它建议在附加组件实际通过 Home Assistant 附加组件商店更新时运行 `docker compose pull`。在 `config.env` 中设置 `NOTIFY_UPDATES=true` 可以重新启用它。

现有的变量，如 `EG_EMAIL`, `EG_PASSWORD`, `PG_EMAIL`, `PG_PASSWORD`, `PG_OTPKEY`, `GOG_EMAIL`, `GOG_PASSWORD`, `SHOW`, `WIDTH`, `HEIGHT`, `TIMEOUT`, `LOGIN_TIMEOUT`, `DRYRUN` 和 `NOTIFY` 保持兼容。请参阅上游的 [配置参考](https://github.com/P-Adamiec/Free-Games-Claimer-Remaster#configuration) 了解所有可用设置。

## 从 1.8 版本升级

2.0 版本将应用程序引擎从 `vogler/free-games-claimer`（Node.js、Playwright 和 Firefox）更改为`P-Adamiec/Free-Games-Claimer-Remaster`（Python、nodriver 和 Chromium）。附加组件会在首次启动时自动执行以下操作：

1. 现有的 `config.env` 保持在相同的配置位置。
2. 遗留的 `epic-games.json`、`prime-gaming.json` 和 `gog.json` 领取历史记录被导入到 remaster SQLite 数据库（位于 `/config/data/fgc.db`）。
3. 现有的数据库行将被检测，如果重新尝试迁移则不会重复。
4. 如果存在现有的 `fgc.db`，将创建一个预迁移数据库备份。
5. 所有旧文件仍保留在 `/config/data/data` 下，以便回滚或手动恢复。

由于旧附加组件使用共享的 Firefox 配置文件，而 remaster 为每个商店使用单独的 Chromium 配置文件，因此无法转换浏览器会话。凭据仍可通过 `config.env` 获得，但需要交互式认证的账户可能在升级后需要通过 noVNC 进行一次登录。旧的 Firefox 配置文件会被保留且永远不会被删除。

外部 noVNC 端口仍为 `6080`，尽管独立的 remaster 镜像通常使用端口 `7080`。

## 上游更新策略

镜像是根据 Dockerfile 中 `ARG BUILD_UPSTREAM` 指定的上游发布构建的，下载为相应的 `v<version>` 源码压缩包。仓库更新器跟踪上游发布并更新该值，附加组件版本和 `CHANGELOG.md` 一起更新，因此新的上游发布可以在无需手动编辑的情况下到达附加组件。

发布标签是一个可变的引用。重建相同的 `BUILD_UPSTREAM` 会安装该标签指向的内容，因此强制移动或删除上游标签会导致构建更改或失败，而无需附加组件更改。这是自动跟踪的接受代价，这也是此存储库中每个其他自动更新附加组件所做的权衡；之前的提交固定是不可变的，但只能通过手动方式推进。

上游的开发标签（如 `v1.7d` 及类似名称）通过 `"github_exclude": "d"` 在 `updater.json` 中进行过滤。没有它，更新器会将 `v1.7d` 标签报告为 1.7 版发布，而 GitHub 不提供该版本的源码归档，构建将失败。

附加组件版本不与上游版本进行跟踪。附加组件使用 `2.x` 系列，而上游处于 `1.x`，且 Home Assistant 仅在新版本严格排序更高时才提供更新，因此更新器会增加附加组件版本（从 `2.1.0` 到 `2.1.1`），而不是发布一个排序更低的上游版本号。实际安装的上游发布记录在 `updater.json` 中的 `upstream_version`、`CHANGELOG.md` 以及附加组件的启动横幅中。

## 安装

1. 将此附加组件仓库添加到 Home Assistant 附加组件商店。
2. 安装 **Free Games Claimer**。
3. 根据需要配置附加组件选项。
4. 启动附加组件并查看其日志。
5. 如果需要账户进行手动认证，打开 noVNC。

[![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)

## 自定义脚本和环境变量

- [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- [将环境变量传递给附加组件](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)

## 支持

在 [附加组件仓库](https://github.com/alexbelgium/hassio-addons/issues) 中打开问题。

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
