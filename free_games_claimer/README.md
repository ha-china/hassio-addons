# Home Assistant 插件：Free Games Claimer

我利用空闲时间维护此及其他 Home Assistant 插件。保持与上游变更、Home Assistant 自身变更的同步以及在真实硬件上的测试需要花费大量时间。

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffree_games_claimer%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffree_games_claimer%2Fconfig.yaml)

[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

## 关于

此插件基于 [Free Games Claimer Remaster](https://github.com/P-Adamiec/Free-Games-Claimer-Remaster)。它可以从以下商店领取免费游戏：

- Epic Games Store，包括其每周发布的免费手机游戏
- Fab（Epic 的资产市场，称为 `fab`）
- Amazon Prime Gaming
- GOG
- Steam
- Ubisoft 抽奖活动（`ubisoft`）
- AliExpress 每日签到领币（`aliexpress`）
- GamerPower 支持的商店（仅在显式启用时）

为了与之前版本的插件兼容，默认商店选择仍为 Epic Games、Prime Gaming 和 GOG。若要启用其他商店，请将其添加到 `STORES` 中，例如 `epic,prime,gog,fab,ubisoft`，并且每个商店都需要在 `config.env` 中拥有各自的凭据。

## Web 界面

noVNC 接口仍在端口 `6080` 上可用：

```text
http://homeassistant:6080
```

可用于初次登录、处理验证码或其他需要在浏览器中的手动操作。请在 `config.env` 中设置 `VNC_PASSWORD` 以保护 VNC 会话。

## 插件选项

| Option | Default | Description |
|--------|---------|-------------|
| `CONFIG_LOCATION` | `/config/config.env` | 持久化环境配置文件位置 |
| `RUN_ONCE` | `true` | 运行所选的所有索取器一次，然后停止插件（与之前的版本行为一致） |
| `STORES` | empty | 可选的逗号分隔的覆盖设置，如 `epic,prime,gog,steam` |
| `CMD_ARGUMENTS` | `node epic-games ; node prime-gaming ; node gog` | 弃用兼容选项；已识别的旧命令名称会被转换为 `STORES` |
| `env_vars` | `[]` | 传递给插件的额外环境变量 |

### 运行模式

当 `RUN_ONCE: true` 时，插件执行一次索取操作后停止。这是默认行为，并保留了先前基于 vogler 的插件的行为。

当 `RUN_ONCE: false` 时，Remaster 继续保持运行并使用其内部调度器。请在 `config.env` 中设置 `SCHEDULER_HOURS` 来控制时间间隔。

## 环境变量配置

插件将在 `CONFIG_LOCATION`（默认位于 `/config/config.env`）中保存其配置。从 Home Assistant 的角度来看，这存储在插件的私有 `app_configs` 目录中，可以使用兼容的文件浏览器插件进行编辑。

首次启动时会创建一个模板。常见的示例如下：

```env
# 保留旧版默认选择
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

上游的发布更新通知 (`NOTIFY_UPDATES`) 已被插件禁用，因为这建议在执行 Home Assistant 插件商店更新插件时运行 `docker compose pull`。如果在 `config.env` 中将 `NOTIFY_UPDATES=true` 设置为真，则重新启用它。

现有的变量如 `EG_EMAIL`, `EG_PASSWORD`, `PG_EMAIL`, `PG_PASSWORD`, `PG_OTPKEY`, `GOG_EMAIL`, `GOG_PASSWORD`, `SHOW`, `WIDTH`, `HEIGHT`, `TIMEOUT`, `LOGIN_TIMEOUT`, `DRYRUN` 和 `NOTIFY` 保持兼容。请参阅上游的 [配置参考](https://github.com/P-Adamiec/Free-Games-Claimer-Remaster#configuration) 以查看所有可用设置。

## 从版本 1.8 进行升级

版本 2.0 将应用引擎从 `vogler/free-games-claimer`（使用 Node.js、Playwright 和 Firefox）更改为 `P-Adamiec/Free-Games-Claimer-Remaster`（使用 Python、nodriver 和 Chromium）。插件会在首次启动时自动执行以下迁移步骤：

1. 现有的 `config.env` 保留在原有的配置位置。
2. 旧的 `epic-games.json`、`prime-gaming.json` 和 `gog.json` 索取历史被导入到位于 `/data/fgc.db` 的 Remaster SQLite 数据库中。
3. 检测到现有的数据库行，如果重新迁移则不会重复。
4. 如果存在现有的 `fgc.db` 文件，则会在迁移前创建数据库备份。
5. 所有旧文件保留在 `/data/data` 目录下，以便回滚或手动恢复。

由于旧插件使用共享的 Firefox 配置文件，而 Remaster 为每个商店使用单独的 Chromium 配置文件，因此无法转换浏览会话。凭据仍然可以通过 `config.env` 获取，但需要交互式认证的账户在升级后可能需要通过 noVNC 进行一次一次性登录。旧的 Firefox 配置被保留且永远不会被删除。

外部 noVNC 端口仍为 `6080`（尽管独立的 Remaster 映像通常使用端口 `7080`）。

## 上游更新策略

该映像由 Dockerfile 中的 `ARG BUILD_UPSTREAM` 指定的上游版本构建，并下载为匹配的 `v<版本>` 源码归档。仓库更新器跟踪上游版本并更新该值，插件版本和 `CHANGELOG.md` 会随之更新，因此新的上游版本发布到插件时无需手动编辑。

发布标签是一个可变的引用。重建相同的 `BUILD_UPSTREAM` 将安装该标签指向的任意内容，因此如果强制移动或删除上游标签，构建可能会改变或失败而无需更改插件。这是自动跟踪所付出的代价，也是此仓库中每个自动更新的插件所做的权衡；之前的提交锁定是不可变的，但只能通过手动推进。

上游的开发标签（如 `v1.7d` 等）已通过 `"github_exclude": "d"` 过滤器排除（位于 `updater.json` 中）。如果没有它，更新器会将 `v1.7d` 标签报告为发布版本 `1.7`，而 GitHub 为此版本不提供源码归档，导致构建失败。

插件版本不跟踪上游版本。插件使用 `2.x` 系列，而上游处于 `1.x` 版本，且 Home Assistant 仅在新生成版本严格排序更高时才提供更新，因此更新器会递增插件版本号（如从 `2.1.0` 到 `2.1.1`），而不是发布一个排序较低的上游版本号。实际安装的上游版本记录在 `updater.json` 的 `upstream_version` 中、`CHANGELOG.md` 以及插件的启动横幅中。

## 安装

1. 将此插件仓库添加到 Home Assistant 插件商店。
2. 安装 **Free Games Claimer**。
3. 根据需要配置插件选项。
4. 启动插件并查看其日志。
5. 如需手动认证账户，打开 noVNC。

[![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)

## 自定义脚本和环境变量

- [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- [将环境变量传递给插件](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)

## 支持

在 [插件仓库](https://github.com/alexbelgium/hassio-addons/issues) 中打开问题。

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
