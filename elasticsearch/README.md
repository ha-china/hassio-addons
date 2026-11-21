# Home Assistant 附加组件：Elasticsearch 服务器

我在闲暇时间维护此及其他 Home Assistant 附加组件：跟踪上游变更、适配 HA 变化以及在实际硬件上测试需要耗费大量时间（还包括一些费用）。我使用的约 5-10 个附加组件在我拥有的>110 个附加组件中。因此，我会定期安装测试机器（并购买一些测试服务，如 VPN），即使我自己不使用，也用于排查问题和改进附加组件。

如果您在使用此附加组件时节省了时间或使设置更方便，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falcbelgium%2Fhassio-addons%2Fmaster%2Felasticsearch%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falcbelgium%2Fhassio-addons%2Fmaster%2 Felasticsearch%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falcbelgium%2Fhassio-addons%2Fmaster%2Felasticsearch%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家为我 repo 点星！要点击星，请点击下图，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/elasticsearch/stats.png)

## 关于

---

[Elasticsearch](https://github.com/elastic/elasticsearch) 是 [Elastic Stack](https://www.elastic.co/fr/products/) 核心的分布式、RESTful 搜索和分析引擎。您可以使用 Elasticsearch 存储、搜索和管理以下数据：

- 日志
- 指标
- 搜索后端
- 应用监控
- 端点安全
- ... 更多！

要了解更多关于 Elasticsearch 的功能和特性，请访问其[产品页面](https://www.elastic.co/fr/elasticsearch/) 。

在此，此附加组件用于单个节点，其他附加组件需要时可以调用它。

## 安装

---

此附加组件的安装非常简单，与其他附加组件的安装没有区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或者如果您已配置了我的 HA，请点击下方的按钮）[![打开您的 Home Assistant 实例并显示带有特定仓库预填充 URL 的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falcbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `Save` 按钮以存储您的配置。
4. 将附加组件选项设置为您的偏好设置。
5. 启动附加组件。
6. 检查附加组件的日志，以查看一切是否正常运行。

## 配置

Elasticsearch 以单节点集群运行，可通过 <http://homeassistant:9200> 访问。
此附加组件没有 Web 界面——它为其他应用程序提供 API 端点。

### API 端点

- **HTTP API**：端口 9200 用于 REST API 调用
- **Transport**：端口 9300 用于内部集群通信

### 选项

附加组件界面中不可用任何配置选项。Elasticsearch 预配置为单节点运行，配置如下：
- 内存分配：1GB 堆 (ES_JAVA_OPTS)
- 发现类型：单节点
- 内存锁定：启用
- Tini 子重现器：启用

### 使用示例

使用以下连接其他应用程序到 Elasticsearch：
- URL: `http://homeassistant:9200`
- 不需要认证（仅限本地网络）

### 集成示例

- **Nextcloud**：配置全文搜索应用使用此 Elasticsearch 实例
- **Home Assistant**：与 Elasticsearch 组件配合使用以发布事件

### 环境变量

使用附加组件的 `env_vars` 选项来传递额外的环境变量（大小写名称均可）。有关详细信息，请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 。

Elasticsearch 设置可通过名为 `ES_SETTING_<SETTING_WITH_UNDERSCORES>` 的变量设置；例如 `ES_SETTING_XPACK_SECURITY_ENABLED` 映射到 `xpack.security.enabled`。

### 安全

为了保留先前版本的纯 HTTP 行为（并与 Home Assistant Elasticsearch 集成保持兼容性），`xpack.security.enabled` 默认设置为 `false`。要启用 Elasticsearch 安全功能，请在 `env_vars` 中添加 `ES_SETTING_XPACK_SECURITY_ENABLED`，值为 `true`。

由于附加组件使用主机网络，在禁用的安全模式下，Elasticsearch 在每个主机网络接口上都可以无认证访问：您的网络上的任何人都可以读取、更改和删除所有已索引的数据。请使用防火墙限制访问，或如上启用安全。当安全未启用时，附加组件会在启动日志中打印警告。

## 从 7.x 升级

升级到 Elasticsearch 8.x 是自动的且是**单向**的：

1. 在更新之前对附加组件进行 Home Assistant 备份。
2. 更新附加组件并启动它。Elasticsearch 首次启动时会在原地升级现有索引——这在大型数据集上可能需要很长时间；首次启动时**不要**停止附加组件。
3. 先前捆绑的配置目录将被归档到 `/data/config.bak-<old-version>`；将任何自定义设置重新应用到新配置。

Elasticsearch 随后不支持降级——请恢复备份。

## 与 HA 的集成

组件：https://community.home-assistant.io/t/elasticsearch-component-publish-home-assistant-events-to-elasticsearch/66877

## 支持

在 github 上创建问题

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
