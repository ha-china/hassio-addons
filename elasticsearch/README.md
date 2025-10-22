# Home assistant add-on: elasticsearch server

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Felasticsearch%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Felasticsearch%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Felasticsearch%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标我的仓库的人！要星标它，请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/elasticsearch/stats.png)

## 关于

---

[Elasticsearch](https://github.com/elastic/elasticsearch) 是 [Elastic Stack](https://www.elastic.co/fr/products/) 的核心分布式、RESTful 搜索和分析引擎。
您可以使用 Elasticsearch 来存储、搜索和管理以下类型的数据：

- 日志
- 指标
- 搜索后端
- 应用程序监控
- 终点安全
- 更多！

要了解更多关于 Elasticsearch 的功能和特性，请查看他们的 [产品页面](https://www.elastic.co/fr/elasticsearch/)。

在这里，这个插件用于单个节点，可以被其他需要它的插件调用。

## 安装

---

这个插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的 home assistant 实例中（在 supervisor 插件商店的右上角，或如果您已经配置了我的 HA，请点击下面的按钮 [![打开您的 Home Assistant 实例并显示填充了特定仓库 URL 的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons))
2. 安装这个插件。
3. 点击 `保存` 按钮以保存您的配置。
4. 设置插件的选项以符合您的偏好。
5. 启动插件。
6. 检查插件的日志以查看是否一切正常。

## 配置

Elasticsearch 以单个节点集群的形式运行，可在 <http://homeassistant:9200> 访问。
这个插件没有 Web 界面，它提供 API 端点供其他应用程序使用。

### API 端点

- **HTTP API**: 端口 9200 用于 REST API 调用
- **传输**: 端口 9300 用于内部集群通信

### 选项

通过插件界面没有可用的配置选项。Elasticsearch 预配置为单节点操作，包括：
- 内存分配：1GB 堆 (ES_JAVA_OPTS)
- 发现类型：单节点
- 内存锁定：启用
- Tini 子回收器：启用

### 示例用法

使用以下方式将其他应用程序连接到 Elasticsearch：
- URL: `http://homeassistant:9200`
- 无需认证（仅限本地网络）

### 集成示例

- **Nextcloud**: 配置全文搜索应用程序以使用此 Elasticsearch 实例
- **Home Assistant**: 使用 Elasticsearch 组件发布 Home Assistant 事件

## 与 Home Assistant 集成

组件：https://community.home-assistant.io/t/elasticsearch-component-publish-home-assistant-events-to-elasticsearch/66877

## 支持

在 github 上创建问题
