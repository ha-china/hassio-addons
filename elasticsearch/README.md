# Home Assistant 插件：Elasticsearch 服务器

我利用业余时间维护此及其他 Home Assistant 插件：跟进上游更改、适配 HA 变更，以及在真实硬件上进行测试花费了大量时间（以及一些金钱）。我大约使用 5-10 个插件（我拥有>110 个插件），因此我定期安装测试机（并购买一些测试服务，如 VPN）来排查问题并改进这些插件。

如果此插件为您节省时间或简化了您的设置，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Felasticsearch%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Felasticsearch%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Felasticsearch%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家为我仓库星标（Star）！要星标它，请点击下图，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/elasticsearch/stats.png)

## 关于

---

[Elasticsearch](https://github.com/elastic/elasticsearch) 是 [Elastic Stack](https://www.elastic.co/fr/products/) 的分布式、RESTful 搜索和分析引擎的核心。您可以使用 Elasticsearch 存储、搜索和管理以下类型的数据：

- 日志（Logs）
- 指标（Metrics）
- 搜索后端
- 应用监控
- 端点安全
- ... 还有很多！

有关 Elasticsearch 的功能和能力的更多信息，请参阅其 [产品页面](https://www.elastic.co/fr/elasticsearch/)。

此处，此插件支持单节点模式，其他需要该功能的插件可以从其他插件调用。

## 安装

---

此插件的安装非常简单，与其他插件的安装没有显著差异。

1. 将我的插件仓库添加到您的 Home Assistant 实例（在 supervisor 插件商店顶部右侧，或如果您已配置了我的 HA，则点击下方的按钮）[![打开您的 Home Assistant 实例并显示添加插件仓库对话框，带有预填的具体仓库 URL](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击 `保存` 按钮以保存您的配置。
4. 将插件选项设置为您的偏好设置。
5. 启动插件。
6. 检查插件日志以查看是否一切正常。

## 配置

Elasticsearch 运行作为单个节点集群，可通过 <http://homeassistant:9200> 访问。此插件没有 Web 界面——它为其他应用程序提供 API 端点。

### API 端点

- **HTTP API**：端口 9200 用于 REST API 调用
- **传输**：端口 9300 用于内部集群通信

### 选项

插件界面不提供配置选项。Elasticsearch 已预配置为单节点运行模式，包含：
- 内存分配：1GB 堆内存（ES_JAVA_OPTS）
- 发现类型：单节点
- 内存锁定：已启用
- Tini 子重父进程：已启用

### 使用示例

其他应用程序可通过以下方式连接到 Elasticsearch：
- 网址：`http://homeassistant:9200`
- 无需身份验证（仅限本地网络）

### 集成示例

- **Nextcloud**：配置全文搜索应用以使用此 Elasticsearch 实例
- **Home Assistant**：配合 Elasticsearch 组件用于事件发布

### 环境变量

使用插件 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详情参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Elasticsearch 设置可以通过名为 `ES_SETTING_<SETTING_WITH_UNDERSCORES>` 的变量设置；例如 `ES_SETTING_XPACK_SECURITY_ENABLED` 映射到 `xpack.security.enabled`。

### 安全性

为了保持以前版本的普通 HTTP 行为（以及与 Home Assistant Elasticsearch 集成的兼容性），`xpack.security.enabled` 默认为 `false`。要启用 Elasticsearch 安全性，请在 `env_vars` 中添加 `ES_SETTING_XPACK_SECURITY_ENABLED`，值为 `true`。

## 从 7.x 升级到 8.x

升级到 Elasticsearch 8.x 是自动的，并且是 **单向** 的：

1. 更新前，请备份 Home Assistant 插件。
2. 更新插件并启动它。Elasticsearch 会在首次启动时就地升级现有索引——这对于大型数据集可能需要较长时间；首次启动期间 **不要** 停止插件。
3. 之前捆绑的配置目录已存档到 `/data/config.bak-<old-version>`；请将任何自定义设置重新应用到新配置中。

之后不支持降级——请还原备份代替。

## 与 HA 的集成

组件：https://community.home-assistant.io/t/elasticsearch-component-publish-home-assistant-events-to-elasticsearch/66877

## 支持

在 github 上创建 issue

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
