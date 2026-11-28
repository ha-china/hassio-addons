# Home Assistant 附加组件：Elasticsearch 服务器

我利用闲暇时间维护此及其他 Home Assistant 附加组件：跟上上游变更、HA 变更，以及在真实硬件上进行测试需要耗费大量时间（以及一些金钱）。我使用了大约 10 个至 500 个附加组件，所以我会定期安装测试机（并购买一些我自己不使用的测试服务，如 vpn）来调试和改进这些附加组件。

如果这个附加组件能为您节省时间或让您的设置更简单，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Felasticsearch%2Fconfig.yaml)
![入口点](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Felasticsearch%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Felasticsearch%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_非常感谢所有人给我的仓库星标！要星标它，请点击下图，它将显示在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标收藏者仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/elasticsearch/stats.png)

## 关于

---

[Elasticsearch](https://github.com/elastic/elasticsearch) 是 [Elastic Stack](https://www.elastic.co/fr/products) 的核心，它是一个分布式、RESTful 搜索和分析引擎。您可以使用 Elasticsearch 来存储、搜索和管理以下数据：

- 日志
- 指标
- 搜索后端
- 应用监控
- 端点安全
- ... 等等！

想了解更多关于 Elasticsearch 的功能和能力，请访问他们的 [产品页面](https://www.elastic.co/fr/elasticsearch/)。

在这里，这个附加组件用于单节点组，可以从其他需要它的附加组件中调用。

## 安装

---

此附加组件的安装非常简单，与其他附加组件的安装没有区别。

1. 将我的附加组件存储库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置了我的 HA 则点击下方的按钮） [![打开您的 Home Assistant 实例并显示带有特定存储库 URL 预填充的对话框以添加附加组件存储库。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `保存` 按钮以存储您的配置。
4. 将附加组件选项设置为您的偏好设置。
5. 启动附加组件。
6. 检查附加组件的日志以查看一切是否顺利。

## 配置

Elasticsearch 运行为一个单节点集群，可通过 <http://homeassistant:9200> 访问。
此附加组件没有 Web 界面 - 它为其他应用程序提供 API 端点。

### API 端点

- **HTTP API**：端口 9200，用于 REST API 调用
- **传输**：端口 9300，用于内部集群通信

### 选项

附加组件界面中不可用任何配置选项。Elasticsearch 已预先配置为单节点操作，包含：
- 内存分配：1GB 堆内存 (ES_JAVA_OPTS)
- 发现类型：单节点
- 内存锁定：启用
- Tini 子进程：启用

### 使用示例

使用以下连接其他应用程序到 Elasticsearch：
- URL: `http://homeassistant:9200`
- 无需身份验证（仅限本地网络）

### 集成示例

- **Nextcloud**：配置全文搜索应用程序以使用此 Elasticsearch 实例
- **Home Assistant**：与 Elasticsearch 组件配合使用以发布事件

### 环境变量

使用附加组件的 `env_vars` 选项来传递额外的环境变量（大小写无关紧要名称）。有关详细信息，请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Elasticsearch 设置可以通过命名为 `ES_SETTING_<SETTING_WITH_UNDERSCORES>` 的变量来设置；例如 `ES_SETTING_XPACK_SECURITY_ENABLED` 映射到 `xpack.security.enabled`。

### 安全

为了保留先前版本的简单 HTTP 行为（以及与 Home Assistant Elasticsearch 集成的兼容性），`xpack.security.enabled` 默认设置为 `false`。若要启用 Elasticsearch 安全功能，请在 `env_vars` 中添加 `ES_SETTING_XPACK_SECURITY_ENABLED`，其值为 `true`。

由于附加组件使用主机网络，在安全功能禁用时，Elasticsearch 可以在主机的每个网络接口上无需身份验证即可访问：网络上的任何人都可以读取、更改和删除所有归档数据。请配合防火墙来限制访问，或按照上述启用安全功能。当安全功能未启用时，附加组件会在启动日志中打印警告。

## 从 7.x 升级

升级到 Elasticsearch 8.x 是自动的，并且是 **单向** 的：

1. 在更新之前对附加组件进行 Home Assistant 备份。
2. 更新附加组件并启动它。Elasticsearch 将在首次启动时原地升级 Existing 索引——这在大数据集上可能需要很长时间；在首次启动时 **不要** 停止附加组件。
3. 旧的捆绑配置目录已被归档到 `/data/config.bak-<old-version>`；请将任何自定义设置重新应用到新配置中。

之后不支持降级——请恢复备份而不是降级。

## 与 HA 的集成

组件：https://community.home-assistant.io/t/elasticsearch-component-publish-home-assistant-events-to-elasticsearch/66877

## 支持

在 github 上创建问题。

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
