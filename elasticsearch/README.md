# Home Assistant Add-on: Elasticsearch Server

我利用业余时间维护此及其他 Home Assistant Add-on：跟进上游变更、HA 变更，并在真实硬件上进行测试，这些工作耗时且（偶尔）需要一些成本。我使用了超过 110 个 Add-on 中的 5-10 个，因此会安装测试机（并购买一些我个人不使用的测试服务，如 vpn），以便调试和改进这些 Add-on。

如果此 Add-on 为您节省时间或让您配置更轻松，我将不胜感激，期待您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Add-on 信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Felasticsearch%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Felasticsearch%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Felasticsearch%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_非常感谢所有人给我的仓库星标！请在下方图片上点击将其星标，它将被置顶。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/elasticsearch/stats.png)

## 关于

---

[Elasticsearch](https://github.com/elastic/elasticsearch) 是 [Elastic Stack](https://www.elastic.co/fr/products/) 的核心分布式 RESTful 搜索和分析引擎。
您可以使用 Elasticsearch 存储、搜索和管理以下数据：

- 日志 (Logs)
- 指标 (Metrics)
- 搜索后端
- 应用监控
- 端点安全 (Endpoint security)
- ... 更多！

要了解 Elasticsearch 的功能和能力，请访问其 [产品页面](https://www.elastic.co/fr/elasticsearch/) 。

在此，此 Add-on 用于构建一个单节点集群，其他需要它的 Add-on 可以调用其服务。

## 安装

---

此 Add-on 的安装非常简单，与其他 Add-on 的安装方式几乎无异。

1. 将我的 Add-on 仓库添加到您的 Home Assistant 实例中（在 supervisor 的 Add-on Store 中点击右上角，或如果您配置了此 HA 则点击下方按钮）
   [![在你的 Home Assistant 实例中打开添加 Add-on 仓库对话框，并预填充特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此 Add-on。
3. 点击“保存”按钮以存储您的配置。
4. 将 Add-on 的选项设置为您偏好的值。
5. 启动 Add-on。
6. 查看 Add-on 的日志以确认一切正常。

## 配置

Elasticsearch 运行在一个单节点集群中，可通过 <http://homeassistant:9200> 访问。
此 Add-on 没有 Web 界面 —— 它提供 API 端点供其他应用程序使用。

### API 端点

- **HTTP API**：9200 端口，用于 REST API 调用
- **Transport**：9300 端口，用于集群内部通信

### 选项

无法通过 Add-on 界面配置任何选项。Elasticsearch 已预配置为单节点运行模式：
- 内存分配：1GB 堆内存 (ES_JAVA_OPTS)
- 发现类型：单节点 (single-node)
- 内存锁定：已启用
- Tini 子重父进程：已启用

### 使用示例

使用以下方式连接其他应用程序至 Elasticsearch：
- 地址（URL）: `http://homeassistant:9200`
- 无需认证（仅限本地网络）

### 集成功能示例

- **Nextcloud**：配置全文搜索应用以使用此 Elasticsearch 实例
- **Home Assistant**：与 Elasticsearch 组件配合使用以发布事件。

### 环境变量

使用 Add-on 的 `env_vars` 选项传递额外的环境变量（支持大小写）。具体详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Elasticsearch 的设置可以通过名为 `ES_SETTING_<SETTING_WITH_UNDERSCORES>` 的变量进行配置；例如 `ES_SETTING_XPACK_SECURITY_ENABLED` 对应于 `xpack.security.enabled`。

### 安全性

为了保留先前版本的纯 HTTP 行为（并与 Home Assistant Elasticsearch 集成保持兼容），`xpack.security.enabled` 默认为 `false`。若要启用 Elasticsearch 安全性，请在 `env_vars` 中添加 `ESSetting_XPACK_SECURITY_ENABLED` 并将值设置为 `true`。

## 从 7.x 升级

升级到 Elasticsearch 8.x 是自动的且**单向**的：

1. 在更新之前，对 Add-on 进行 Home Assistant 备份。
2. 更新并启动 Add-on。Elasticsearch 会在首次启动时原地升级现有的索引 —— 对于大型数据集，这可能需要很长时间；在首次启动期间**不要**停止 Add-on。
3. 之前的捆绑包配置目录已被归档到 `/data/config.bak-<old-version>`；请将任何自定义设置重新应用至新配置。

此后不支持降级 —— 请恢复备份。

## 与 Home Assistant 的集成集成功

组件：https://community.home-assistant.io/t/elasticsearch-component-publish-home-assistant-events-to-elasticsearch/66877

## 支持

在 GitHub 上创建 Issue

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
