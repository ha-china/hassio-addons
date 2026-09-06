# Home Assistant 附加组件：Elasticsearch 服务器

我在空闲时间维护这个以及其他 Home Assistant 附加组件：跟踪上游变更、HA 变更以及在实际硬件上测试需要大量时间（而且有些还要花钱）。我使用的附加组件约为 110 个中的 5-10 个，所以我定期安装测试机（购买一些我自己不用的测试服务，如 vpn）来排查问题并改进这些附加组件

如果您的附加组件能为您节省时间或让您的配置更简单，我会非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Felasticsearch%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Felasticsearch%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Felasticsearch%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_非常感谢所有星了我的仓库！如果想星标它，请点击下面的图片，然后它会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/elasticsearch/stats.png)

## 概览

---

[Elasticsearch](https://github.com/elastic/elasticsearch) 是 [Elastic Stack](https://www.elastic.co/fr/products/) 分布式的 RESTful 搜索和分析引擎的核心。您可以使用 Elasticsearch 来存储、搜索和管理以下数据：

- 日志
- 指标
- 搜索后端
- 应用监控
- 端点安全
- ... 更多！

要了解更多关于 Elasticsearch 的功能和能力，请访问其 [产品页面](https://www.elastic.co/fr/elasticsearch/) 。

在这里，此附加组件用于构建一个单节点集群，可被其他需要它的附加组件调用。

## 安装

---

此附加组件的安装非常简单，与其他任何附加组件并无不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店中点击右上角，或者如果您已配置了我的 HA，则点击下方的按钮）[![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `Save` 按钮以保存您的配置。
4. 将附加组件选项设置为您自己的偏好设置。
5. 启动附加组件。
6. 检查附加组件的日志，看看一切是否顺利。

## 配置

Elasticsearch 运行于单节点集群，可通过 <http://homeassistant:9200> 访问。
此附加组件没有 Web 界面 - 它向其他应用程序提供 API 端点。

### API 端点

- **HTTP API**: 端口 9200，用于 REST API 调用
- **Transport**: 端口 9300，用于内部集群通信

### 选项

无法通过附加组件界面配置任何选项。Elasticsearch 已预配置为单节点操作模式，配置如下：
- 内存分配：1GB 堆内存 (ES_JAVA_OPTS)
- 发现类型：单节点
- 内存锁定：已启用
- Tini 子再父进程：已启用

### 使用示例

其他应用程序可以通过以下方式连接至 Elasticsearch：
- URL：`http://homeassistant:9200`
- 不需要身份验证（仅限局域网）

### 集成示例

- **Nextcloud**: 配置全文搜索应用以使用此 Elasticsearch 实例
- **Home Assistant**: 与 Elasticsearch 组件配合使用以发布事件

### 环境变量

使用附加组件 `env_vars` 选项来传递额外的环境变量（名称可大写或小写）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Elasticsearch 设置可以通过名为 `ES_SETTING_<SETTING_WITH_UNDERSCORES>` 的变量进行设置；例如 `ES_SETTING_XPACK_SECURITY_ENABLED` 映射到 `xpack.security.enabled`。

### 安全性

为了保留之前版本的原始 HTTP 行为（以及与 Home Assistant Elasticsearch 集成的兼容性），`xpack.security.enabled` 默认值为 `false`。要启用 Elasticsearch 安全性，请在 `env_vars` 中添加了 `ES_SETTING_XPACK_SECURITY_ENABLED` 并设置值为 `true`。

## 从 7.x 版本升级

升级到 Elasticsearch 8.x 是自动的，且为 **单向**：

1. 在更新之前对附加组件进行 Home Assistant 备份。
2. 更新附加组件并启动它。Elasticsearch 将在首次启动时就地升级现有索引——这在大数据集上可能需要一些时间；首次启动时 **不要** 停止附加组件。
3. 之前的捆绑配置目录已归档到 `/data/config.bak-<old-version>`；请将任何自定义设置重新应用到新的配置中。

Elasticsearch 不支持降级——请恢复备份以恢复。

## 与 HA 的集成

组件 : https://community.home-assistant.io/t/elasticsearch-component-publish-home-assistant-events-to-elasticsearch/66877

## 支持

在 github 上创建一个问题

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
