# Home Assistant 插件：免费游戏领取器

我利用业余时间维护此插件及其他 Home Assistant 插件。跟进上游变更、Home Assistant 变更以及在真实硬件上测试需要花费大量时间。

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffree_games_claimer%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffree_games_claimer%2Fconfig.yaml)

[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

## 简介

此插件基于
[Free Games Claimer Remaster](https://github.com/P-Adamiec/Free-Games-Claimer-Remaster)。
它可以领取以下平台的免费游戏：

- Epic Games Store（包括其每周免费的手机游戏）
- Fab，Epic 的资产市场 (`fab`)
- Amazon Prime Gaming
- GOG
- Steam
- Ubisoft 活动 (`ubisoft`)
- AliExpress 每日签到领币 (`aliexpress`)
- GamerPower 支持商店（仅当显式启用时）

为了与之前的插件版本兼容，默认选择的商店仍然是 Epic Games、Prime Gaming 和 GOG。其他商店通过将其添加到 `STORES` 中启用，例如 `epic,prime,gog,fab,ubisoft`，每个商店都需要在 `config.env` 中拥有自己的凭据。

## Web 界面

noVNC 界面仍然可在端口 `6080` 上访问：

```text
http://homeassistant:6080
```

它可用于首次登录、验证码处理或其他手动浏览器交互。在 `config.env` 中设置 `VNC_PASSWORD` 以保护 VNC 会话。

## 插件选项

| 选项 | 默认值 | 描述 |
|--------|---------|-------------|
| `CONFIG_LOCATION` | `/config/config.env` | 持久化环境变量配置文件 |
| `RUN_ONCE` | `true` | 运行一次所有选定的领取器后停止，如同之前的版本 |
| `STORES` | 空 | 可选的逗号分隔覆盖列表，例如 `epic,prime,gog,steam` |
| `CMD_ARGUMENTS` | `node epic-games ; node prime-gaming ; node gog` | 弃用兼容选项；已知的 Legacy 命令名称将转换为 `STORES` |
| `env_vars` | `[]` | 传递给插件的附加环境变量 |

### 运行模式

当 `RUN_ONCE: true` 时，插件会执行一次领取并停止。这是默认行为，保留了之前基于 vogler 的插件的行为。

当 `RUN_ONCE: false` 时，Remaster 将继续运行并使用其内部调度器。在 `config.env` 中设置 `SCHEDULER_HOURS` 以控制间隔。

## 应用数据

插件将应用程序生成的所有内容存储到 `/config/data`，Home Assistant 将其暴露为 `/addon_configs/xxx-free_games_claimer/data`。可以无需 `docker exec` 使用文件浏览器插件来检查它，内容如下：

| 路径 | 内容 |
|------|----------|
| `fgc.db` | SQLite 领取历史 |
| `screenshots/<store>/` | 领取期间捕获的屏幕截图 |
| `browser/` | Chromium 配置文件，每个商店一个 |
| `TurboVNC.log` | 虚拟显示服务日志 |
| `config.env` | `CONFIG_LOCATION` 的运行副本 |

**此目录包含敏感信息。** `browser/` 存储已登录的商店会话，`config.env` 存储账户凭据。因此，任何访问 `addon_configs` 的人（例如文件编辑器和 Samba 插件）都可以使用它们。请勿分享或发布此信息。

2.1.1 及更早版本将数据存储在私有的 `/data` 卷中。在 2.2.0 版本的初次启动时，现有的数据会复制到 `/config/data`。此复制需要大小约等于现有数据空间的临时免费空间，如果浏览器配置文件较大，可能需要几分钟。不会从 `/data` 删除任何内容，因此降级后仍可工作；一旦确认新位置可用，可以手动删除旧副本。

## 环境变量配置

插件的配置保存在 `CONFIG_LOCATION` 中，默认为 `/config/config.env`。从 Home Assistant 来看，它存储在插件的私有 `app_configs` 目录中，可以使用兼容的文件浏览器插件进行编辑。

首次启动时会自动生成模板。常见示例如下：

```env
# 保留之前的默认选择
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

插件禁用了上游的更新通知 (`NOTIFY_UPDATES`)，因为它建议在使用 Home Assistant 插件商店实际更新插件的同时运行 `docker compose pull`。在 `config.env` 中设置 `NOTIFY_UPDATES=true` 可以重新启用它。

现有的变量如 `EG_EMAIL`, `EG_PASSWORD`, `PG_EMAIL`, `PG_PASSWORD`, `PG_OTPKEY`, `GOG_EMAIL`, `GOG_PASSWORD`, `SHOW`, `WIDTH`, `HEIGHT`, `TIMEOUT`, `LOGIN_TIMEOUT`, `DRYRUN` 和 `NOTIFY` 保持兼容。详见
[上游配置参考](https://github.com/P-Adamiec/Free-Games-Claimer-Remaster#configuration)
了解所有可用设置。

## 从版本 1.8 升级

版本 2.0 将应用引擎从
`vogler/free-games-claimer`（Node.js, Playwright 和 Firefox）更改为
`P-Adamiec/Free-Games-Claimer-Remaster`（Python, nodriver 和 Chromium）。
插件会在首次启动时自动执行以下迁移操作：

1. 现有的 `config.env` 保持在已配置的相同位置。
2. Legacy `epic-games.json`, `prime-gaming.json` 和 `gog.json` 领取历史被导入到 remaster 的 SQLite 数据库 `/config/data/fgc.db` 中。
3. 检测到现有数据库行，如果重新尝试迁移则不会重复。
4. 如果存在现有的 `fgc.db`，会创建迁移前的数据库备份。
5. 所有旧文件保留在 `/config/data/data` 下，以便回滚或手动恢复。

由于旧插件使用共享的 Firefox 配置文件而 Remaster 使用每个商店独立的 Chromium 配置文件，因此无法转换浏览器会话。凭据仍可通过 `config.env` 获取，但对于需要交互式认证的账户，升级后可能需要通过 noVNC 进行一次性登录。旧的 Firefox 配置文件被保留且永远不会被删除。

外部的 noVNC 端口仍然为 `6080`，尽管独立 Remaster 镜像通常使用端口 `7080`。

## 上游更新策略

镜像是从 Dockerfile 中名为 `ARG BUILD_UPSTREAM` 的上游版本构建的，下载为匹配的 `v<version>` 源码 tarball。仓库更新程序跟踪上游发布并提升该值，插件版本和 `CHANGELOG.md` 一起提升，因此新上游发布无需手动编辑即可到达插件。

发布标签是可变引用。重新构建相同的 `BUILD_UPSTREAM` 会安装该标签指向的内容，因此强制移动或删除上游标签会导致构建更改或失败，除非进行插件变更。这是自动跟踪的公认代价，也是此仓库中其他所有自动更新的插件所做的权衡；之前的提交锁定是不可变的，但必须由手工推动。

上游的开发标签（如 `v1.7d` 及其类似物）通过 `updater.json` 中的 `"github_exclude": "d"` 进行过滤。没有它，更新程序会将 `v1.7d` 标签报告为发布 `1.7`，而 GitHub 为它不提供源码包，导致构建失败。

插件版本不跟踪上游版本。插件使用 `2.x` 系列而上游使用 `1.x`，且 Home Assistant 仅在最新版本严格高于旧版本时才提供更新，因此更新程序递增插件版本（`2.1.0` 到 `2.1.1`），而不是发布一个低排序的上游数字。实际安装的上游版本记录在 `updater.json` 中的 `upstream_version`、`CHANGELOG.md` 以及插件的启动横幅中。

## 安装

1. 将此插件仓库添加到 Home Assistant 插件商店。
2. 安装 **Free Games Claimer**。
3. 根据需要配置插件选项。
4. 启动插件并查看其日志。
5. 如果需要账户手动认证，打开 noVNC。

[![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)

## 自定义脚本和环境变量

- [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- [将环境变量传递给插件](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)

## 支持

在
[插件仓库](https://github.com/alexbelgium/hassio-addons/issues) 中打开 Issue。

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
