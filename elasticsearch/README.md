# Home Assistant 插件：Elasticsearch 服务器

我利用业余时间维护此及其他 Home Assistant 插件：跟踪上游变更、处理 HA 变更以及在真实硬件上进行测试需要花费大量时间（以及一些金钱）。我常用的插件约有 5-10 个（我的插件总数超过 110 个），因此我会安装测试机（并购买一些测试服务，如 vpn），但这些服务我自己不使用，用于调试和改进插件。

如果此插件为您节省了时间或使您的设置更简单，我将不胜感激！

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

_感谢每一位星标我的库的人！要星标它，请点击下图，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/elasticsearch/stats.png)

## 关于

---

[Elasticsearch](https://github.com/elastic/elasticsearch) 是 [Elastic Stack](https://www.elastic.co/fr/products). 核心的分布式、RESTful 搜索和分析引擎。您可以使用 Elasticsearch 存储、搜索和管理以下数据：

- 日志
- 指标
- 搜索后端
- 应用监控
- 端点安全
- ... 更多！

要了解更多关于 Elasticsearch 的功能和特性，请访问他们的 [产品页面](https://www.elastic.co/fr/elasticsearch/) 。

在此，此插件用于创建一个单节点集群，供其他需要它的插件调用。

## 安装

---

此插件的安装非常简单，与其他任何插件的安装并无不同。

1. 将我的插件库添加到您的 Home Assistant 实例中（在 supervisor 插件仓库页面右上角，或如果您已配置我的 HA，请点击下方按钮）[![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击 `Save` 按钮以保存配置。
4. 将插件设置为您偏好的选项。
5. 启动插件。
6. 检查插件的日志，以查看是否一切正常。

## 配置

Elasticsearch 运行在单节点集群上，可通过 <http://homeassistant:9200> 访问。
此插件没有 Web 界面——它为其他应用程序提供 API 端点。

### API 端点

- **HTTP API**：9200 端口用于 REST API 调用
- **Transport**：9300 端口用于内部集群通信

### 选项

在插件界面中不可用任何配置选项。Elasticsearch 已预配置为单节点运行：
- 内存分配：1GB 堆内存 (ES_JAVA_OPTS)
- 发现类型：单节点
- 内存锁定：启用
- Tini subreaper：启用

### 使用示例

通过以下方式连接其他应用程序到 Elasticsearch：
- 网址：`http://homeassistant:9200`
- 不需要认证（仅限本地网络）

### 集成示例

- **Nextcloud**：配置全文搜索应用以使用此 Elasticsearch 实例
- **Home Assistant**：配合 Elasticsearch 组件用于事件发布

### 环境变量

使用插件 `env_vars` 选项传递额外的环境变量（名称可为大写或小写）。详情见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 。

Elasticsearch 设置可以通过命名为 `ES_SETTING_<SETTING_WITH_UNDERSCORES>` 的变量设置；例如，`ES_SETTING_XPACK_SECURITY_ENABLED` 映射到 `xpack.security.enabled`。

### 安全性

为了保留先前版本的纯 HTTP 行为（以及兼容 Home Assistant Elasticsearch 集成），`xpack.security.enabled` 默认为 `false`。要启用 Elasticsearch 安全功能，请在 `env_vars` 中添加 `ES_SETTING_XPACK_SECURITY_ENABLED`，值为 `true`。

## 从 7.x 升级

升级到 Elasticsearch 8.x 是自动的且为 **单向** 过程：

1. 在更新之前，对插件进行 Home Assistant 备份。
2. 更新插件并启动它。Elasticsearch 将在首次启动时就地升级现有索引——对于大型数据集，这可能耗时较长；首次启动期间 **不要** 停止插件。
3. 以前的捆绑配置目录已归档至 `/data/config.bak-<old-version>`；请将任何自定义设置重新应用到新配置中。

此后降级回 7.x 不是支持的——请恢复备份。

## 与 HA 集成

组件：https://community.home-assistant.io/t/elasticsearch-component-publish-home-assistant-events-to-elasticsearch/66877

## 支持

在 github 上创建 Issue

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
