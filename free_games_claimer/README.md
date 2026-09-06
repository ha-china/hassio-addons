# Home Assistant 配套应用：免费游戏领取器

我在业余时间维护这个 Home Assistant 配套应用以及其他配套应用。跟进上游更新、Home Assistant 自身的变化以及在实际硬件上的测试耗费了大量的时间。

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 配套应用信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffree_games_claimer%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffree_games_claimer%2Fconfig.yaml)

[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

## 简介

该配套应用基于
[Free Games Claimer Remaster](https://github.com/P-Adamiec/Free-Games-Claimer-Remaster)。它可以领取以下平台的免费游戏：

- Epic Games Store，包括其每周免费的手机游戏
- Fab（Epic 的资产市场，名称为 `fab`）
- Amazon Prime Gaming
- GOG
- Steam
- Ubisoft 抽奖活动 (`ubisoft`)
- AliExpress 每日签到领金币 (`aliexpress`)
- 仅当明确启用时，GamerPower 支持的游戏商店

为了与之前的配套应用版本保持兼容，默认商店选择仍为 Epic Games、Prime Gaming 和 GOG。其他商店通过在 `STORES` 中添加它们来启用（例如 `epic,prime,gog,fab,ubisoft`），每个商店都需要在 `config.env` 中拥有其各自的凭据。

## Web 界面

noVNC 界面继续保留在端口 `6080`：

```text
http://homeassistant:6080
```

可用于首次登录、处理验证码或其他需要手动浏览器交互的操作。在 `config.env` 中设置 `VNC_PASSWORD` 以保护 VNC 会话。

## 配套应用选项

| Option | Default | Description |
|--------|---------|-------------|
| `CONFIG_LOCATION` | `/config/config.env` | 持久化的环境配置文件 |
| `RUN_ONCE` | `true` | 运行一次选定的领取器后立即停止配套应用，如同之前的版本 |
| `STORES` | empty | 可选的逗号分隔覆盖项，例如 `epic,prime,gog,steam` |
| `CMD_ARGUMENTS` | `node epic-games ; node prime-gaming ; node gog` | 弃用的兼容性选项；识别的旧版命令名称将转换为 `STORES` |
| `env_vars` | `[]` | 传递给配套应用的额外环境变量 |

### 运行模式

当 `RUN_ONCE: true` 时，配套应用执行一次领取操作然后停止。这是默认设置，保持了以前基于 vogler 的配套应用的行为。

当 `RUN_ONCE: false` 时，remaster 将继续运行并使用其内部调度器。在 `config.env` 中设置 `SCHEDULER_HOURS` 来控制间隔时间。

## 环境变量配置

配套应用将其配置保存在 `CONFIG_LOCATION` 中，默认为 `/config/config.env`。从 Home Assistant 来看，它存储在配套的私有 `addon_configs` 目录中，可以使用兼容的文件浏览器配套应用进行编辑。

首次启动时会创建模板。常见示例如下：

```env
# 保留以前的默认选择
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

# 可选 Steam 支持
STEAM_USERNAME=your-steam-username
STEAM_PASSWORD=your-password

# 可选通知
NOTIFY=tgram://bot-token/chat-id
# DISCORD_WEBHOOK=https://discord.com/api/webhooks/...
```

配套应用禁用了上游的 release-update 通知 (`NOTIFY_UPDATES`)，因为它建议在执行 `docker compose pull` 时更新，但实际上配套应用是通过 Home Assistant 配套应用商店来更新的。在 `config.env` 中设置 `NOTIFY_UPDATES=true` 可以重新启用它。

现有的变量如 `EG_EMAIL`, `EG_PASSWORD`, `PG_EMAIL`, `PG_PASSWORD`, `PG_OTPKEY`, `GOG_EMAIL`, `GOG_PASSWORD`, `SHOW`, `WIDTH`, `HEIGHT`, `TIMEOUT`, `LOGIN_TIMEOUT`, `DRYRUN`, 和 `NOTIFY` 保持兼容。请参阅
[上游配置参考](https://github.com/P-Adamiec/Free-Games-Claimer-Remaster#configuration) 以查看所有可用设置。

## 从版本 1.8 升级

版本 2.0 将应用引擎从
`vogler/free-games-claimer`（Node.js, Playwright 和 Firefox）更改为
`P-Adamiec/Free-Games-Claimer-Remaster`（Python, nodriver 和 Chromium）。配套应用会在首次启动时自动执行以下迁移操作：

1. 现有的 `config.env` 保持在相同的配置位置。
2. 旧版 `epic-games.json`, `prime-gaming.json` 和 `gog.json` 的收入历史被导入到 remaster SQLite 数据库 `/data/fgc.db`。
3. 检测到现有的数据库行，如果重试迁移则不会重复添加。
4. 当存在现有的 `fgc.db` 时，会创建一个预迁移数据库备份。
5. 所有旧文件继续保留在 `/data/data` 下，以便回滚或手动恢复。

由于旧版配套应用使用共享 Firefox 配置文件，而 remaster 使用每个商店单独的 Chromium 配置文件，因此无法转换浏览器会话。凭据仍然可以通过 `config.env` 访问，但需要交互式认证的可能需要在升级后通过 noVNC 进行一次性登录。旧的 Firefox 配置文件会被保留并且永远不会被删除。

外部 noVNC 端口保持为 `6080`，尽管单独的 remaster 镜像通常使用端口 `7080`。

## 上游更新策略

镜像是从上游发布构建的，该发布由 Dockerfile 中的 `ARG BUILD_UPSTREAM` 命名，下载的匹配 `v<version>` 源代码归档。仓库追踪器跟踪上游发布并更新该值，配套应用版本和 `CHANGELOG.md` 一起更新，因此新上游发布可以自动到达配套应用，无需手动编辑。

发布标签是可变的引用。重新构建相同的 `BUILD_UPSTREAM` 会安装该标签指向的任何内容，因此如果上游标签被强制移动或删除，构建会改变或失败，除非修改配套应用。这是自动追踪所接受的成本，也是此仓库中每个其他自动更新的配套应用所做的权衡；之前的提交指针是 immutable 的，只能通过手动推进。

上游的开发标签（如 `v1.7d` 等）通过 `"github_exclude": "d"` 在 `updater.json` 中被过滤掉。没有它，追踪器会报告 `v1.7d` 标签为发布版本 `1.7`，该版本 GitHub 不提供源代码归档，构建将失败。

配套应用的版本号不跟踪上游版本号。配套应用使用 `2.x` 系列，而上游使用 `1.x`，Home Assistant 仅在版本严格更高时才提供更新，因此追踪器会递增配套应用版本号（例如 `2.1.0` 到 `2.1.1`），而不是发布一个排序更低的版本号。实际安装的 upstream 发布记录在 `updater.json` 中的 `upstream_version`、`CHANGELOG.md` 和配套的启动横幅中。

## 安装

1. 将此配套应用仓库添加到 Home Assistant 配套应用商店。
2. 安装 **Free Games Claimer**。
3. 根据需要配置配套应用选项。
4. 启动配套应用并查看其日志。
5. 如果需要账户进行手动认证，则打开 noVNC。

[![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)

## 自定义脚本和环境变量

- [在配套应用中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- [将环境变量传递给配套应用](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)

## 技术支持

在
[配套应用仓库](https://github.com/alexbelgium/hassio-addons/issues) 中打开 issues。

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
