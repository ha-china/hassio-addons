# Home Assistant 附加组件：Free Games Claimer

我利用空闲时间维护此附加组件及其他 Home Assistant 附加组件。跟进上游变更、Home Assistant 变更，以及在真实硬件上进行测试需要耗费大量时间。

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffree_games_claimer%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffree_games_claimer%2Fconfig.yaml)

[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

## 关于

此附加组件基于
[Free Games Claimer Remaster](https://github.com/P-Adamiec/Free-Games-Claimer-Remaster)。
它可以从以下平台领取免费游戏：

- Epic Games Store，包括其每周免费的移动游戏
- Fab（Epic 的资产市场）
- Amazon Prime Gaming
- GOG
- Steam
- Ubisoft 促销活动
- AliExpress 每日金币签到
- GamerPower 支持的商店（当明确启用时）

为了与以前的附加组件版本保持兼容，默认商店选择仍为 Epic Games、Prime Gaming 和 GOG。其他商店可以通过将它们添加到 `STORES` 来启用，例如 `epic,prime,gog,fab,ubisoft`，并且每个商店都需要在 `config.env` 中拥有自己的凭据。

## Web 界面

noVNC 界面仍然在端口 `6080` 上可用：

```text
http://homeassistant:6080
```

可用于初始登录、验证码处理或其他手动浏览器交互。请在 `config.env` 中设置 `VNC_PASSWORD` 以保护 VNC 会话。

## 附加组件选项

| 选项 | 默认值 | 描述 |
|------|--------|------|
| `CONFIG_LOCATION` | `/config/config.env` | 持久化环境配置文件 |
| `RUN_ONCE` | `true` | 运行所选的所有领取器一次，然后像以前的版本一样停止附加组件 |
| `STORES` | 空 | 可选的以逗号分隔的覆盖选项，例如 `epic,prime,gog,steam` |
| `CMD_ARGUMENTS` | `node epic-games ; node prime-gaming ; node gog` | 已弃用的兼容性选项；识别的旧命令名称将被转换为 `STORES` |
| `env_vars` | `[]` | 传递给附加组件的附加环境变量 |

### 运行模式

当 `RUN_ONCE: true` 时，附加组件执行一次领取循环然后停止。这是默认设置，保留了旧版 vogler 附加组件的行为。

当 `RUN_ONCE: false` 时，re-master 将继续运行并使用其内置调度器。请在 `config.env` 中设置 `SCHEDULER_HOURS` 以控制间隔。

## 应用程序数据

附加组件将应用程序写入的所有内容存储到 `/config/data`，Home Assistant 将其暴露为 `/addon_configs/xxx-free_games_claimer/data`。它可以通过文件浏览器附加组件进行 inspected，而无需使用 `docker exec`，并且包含以下内容：

| 路径 | 内容 |
|------|------|
| `fgc.db` | SQLite 领取历史记录 |
| `screenshots/<store>/` | 领取运行期间拍摄的截图 |
| `browser/` | 每个商店对应的一个 Chromium 配置文件 |
| `TurboVNC.log` | 虚拟显示服务器日志 |
| `config.env` | `CONFIG_LOCATION` 的运行时副本 |

**此目录是机密的。** `browser/` 包含已登录的商店会话，`config.env` 包含账户凭据，因此任何人只要获得 `addon_configs` 的访问权限（例如文件编辑器附加组件和 Samba 附加组件）就可以使用它们。请勿分享或发布它。

2.1.1 及以下的版本将此数据保留在私有的 `/data` 卷中。一旦启动版本 2.2.0，现有负载会被复制一次到 `/config/data`。该复制过程需要大致与现有数据相等的临时空间，如果浏览器配置文件很大，可能需要几分钟。不从 `/data` 中删除任何内容，因此降级功能仍然有效；在确认新位置可用后，可以手动删除旧副本。

## 环境配置

附加组件将其配置保持在 `CONFIG_LOCATION`，默认为 `/config/config.env`。从 Home Assistant 来看，它存储在附加组件的私有 `app_configs` 目录中，可以使用兼容的文件浏览器附加组件进行编辑。

启动时会创建模板。常见的例子如下：

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

附加组件禁用了上游的发布更新通知 (`NOTIFY_UPDATES`)，因为它建议在附加组件实际上是通过 Home Assistant 附加组件商店更新时运行 `docker compose pull`。在 `config.env` 中将 `NOTIFY_UPDATES=true` 可重新启用它。

现有的变量（如 `EG_EMAIL`, `EG_PASSWORD`, `PG_EMAIL`, `PG_PASSWORD`, `PG_OTPKEY`, `GOG_EMAIL`, `GOG_PASSWORD`, `SHOW`, `WIDTH`, `HEIGHT`, `TIMEOUT`, `LOGIN_TIMEOUT`, `DRYRUN` 和 `NOTIFY`）仍然保持兼容。请查看上游的
[配置参考](https://github.com/P-Adamiec/Free-Games-Claimer-Remaster#configuration)
以了解所有可用设置。

## 从版本 1.8 升级

版本 2.0 将应用程序引擎从
`vogler/free-games-claimer`（Node.js, Playwright 和 Firefox）更改为
`P-Adamiec/Free-Games-Claimer-Remaster`（Python, nodriver 和 Chromium）。
附加组件会在首次启动时自动执行以下迁移：

1. 现有的 `config.env` 保持在配置的同一位置。
2. 旧版本的 `epic-games.json`, `prime-gaming.json` 和 `gog.json` 领取历史记录被导入到 re-master 的 SQLite 数据库 `/config/data/fgc.db` 中。
3. 检测到现有的数据库行，如果重试迁移则不会重复。
4. 当存在现有的 `fgc.db` 时，会创建一个预迁移数据库备份。
5. 所有旧文件保留在 `/config/data/data` 下，以便回滚或手动恢复。

由于旧附加组件使用共享的 Firefox 配置文件，而 re-master 为每个商店使用单独的 Chromium 配置文件，因此无法转换浏览器会话。凭据仍然可以通过 `config.env` 访问，但需要交互式身份验证的账户可能在升级后需要通过 noVNC 进行一次登录。旧的 Firefox 配置文件会被保留并永远不会被删除。

外部 noVNC 端口仍然是 `6080`，尽管单独的重构镜像通常使用端口 `7080`。

## 上游更新策略

镜像是根据 Dockerfile 中的 `ARG BUILD_UPSTREAM` 命名的上游版本构建的，下载为匹配的 `v<version>` 源代码压缩包。仓库更新器跟踪上游版本并增加该值，附加组件版本和 `CHANGELOG.md` 一起更新，因此新的上游版本无需手动编辑即可到达附加组件。

发布标签是一个可变引用。重新构建相同的 `BUILD_UPSTREAM` 会安装该标签指向的任何内容，因此如果上游标签被强制移动或删除，则会导致构建更改或失败而无需附加组件更改。这是自动跟踪所接受的成本，也是此仓库中所有其他自动更新附加组件做出的相同权衡；以前的提交固定不可变，但只能手动推进。

上游的开发标签（如 `v1.7d` 等）通过 `"github_exclude": "d"` 在 `updater.json` 中被过滤掉。如果没有它，更新器会将 `v1.7d` 标签报告为发布 `1.7`，而 GitHub 不提供该版本的源代码归档，构建将会失败。

附加组件版本不跟踪上游版本。附加组件使用 `2.x` 系列，而上游是 `1.x`，Home Assistant 仅在最新版本严格高于旧版本时才提供更新，因此更新器增加附加组件版本（从 `2.1.0` 到 `2.1.1`）而不是发布一个排序较低的版本号。实际安装的上游版本记录在 `updater.json` 中的 `upstream_version`，在 `CHANGELOG.md` 中以及在附加组件的启动横幅中。

## 安装

1. 将此附加组件仓库添加到 Home Assistant 附加组件商店。
2. 安装 **Free Games Claimer**。
3. 根据需要配置附加组件选项。
4. 启动附加组件并查看其日志。
5. 如果账户需要手动身份验证，打开 noVNC。

[![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)

## 自定义脚本和环境变量

- [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- [向附加组件传递环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)

## 支持

在 [附加组件仓库](https://github.com/alexbelgium/hassio-addons/issues) 中创建一个问题。

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
