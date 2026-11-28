# 🌙 - `ambianic` _插件_

此 [Home Assistant](http://home-assistant.io) 插件利用 [Ambianic 项目](https://ambianic.ai/) 来检测和分类图像中的实体。更多关于此 _插件_ 的信息 [请参考](docs/ABOUT.md)。

## 状态
此 _插件_ 适用于以下架构，并在 [Docker Hub](https://hub.docker.com/r/dcmartin/addon-ambianic) 上可用。

![](https://img.shields.io/badge/amd64-yes-green.svg)[![](https://images.microbadger.com/badges/image/dcmartin/amd64-addon-ambianic.svg)](https://microbadger.com/images/dcmartin/amd64-addon-ambianic)[![](https://images.microbadger.com/badges/version/dcmartin/amd64-addon-ambianic.svg)](https://microbadger.com/images/dcmartin/amd64-addon-ambianic)[![](https://img.shields.io/docker/pulls/dcmartin/amd64-addon-ambianic.svg)](https://hub.docker.com/r/dcmartin/amd64-addon-ambianic)

![](https://img.shields.io/badge/aarch64-yes-green.svg)[![](https://images.microbadger.com/badges/image/dcmartin/aarch64-addon-ambianic.svg)](https://microbadger.com/images/dcmartin/aarch64-addon-ambianic)[![](https://images.microbadger.com/badges/version/dcmartin/aarch64-addon-ambianic.svg)](https://microbadger.com/images/dcmartin/aarch64-addon-ambianic)[![](https://img.shields.io/docker/pulls/dcmartin/aarch64-addon-ambianic.svg)](https://hub.docker.com/r/dcmartin/aarch64-addon-ambianic)

![](https://img.shields.io/badge/armv7-yes-green.svg)[![](https://images.microbadger.com/badges/image/dcmartin/armv7-addon-ambianic.svg)](https://microbadger.com/images/dcmartin/armv7-addon-ambianic)[![](https://images.microbadger.com/badges/version/dcmartin/armv7-addon-ambianic.svg)](https://microbadger.com/images/dcmartin/armv7-addon-ambianic)[![](https://img.shields.io/docker/pulls/dcmartin/armv7-addon-ambianic.svg)](https://hub.docker.com/r/dcmartin/armv7-addon-ambianic)

## 使用方法
通过 Home Assistant 插件商店安装；将此仓库 `http://github.com/dcmartin/hassio-addons` 添加到您的商店并选择 `ambianic` _插件_。

## 配置
Ambianic _插件_ 具有以下配置选项（更多信息请参考 [DOCS.md](DOCS.md)）：

### `sources`
传感器来源，例如来自网络摄像头的 `RTSP` 流。

### `ai_models`
可以使用 `CPU` 仅执行或与 Google Coral 加速器一起执行的 TensorFlow Lite 模型。

### `pipelines`
管道定义了一系列按顺序组合的 _动作_。

### `actions`
特定的函数执行，例如 `detect`

## 更新日志与发布
发布基于语义版本控制，并使用 `MAJOR.MINOR.PATCH` 格式。简而言之，版本将根据以下情况增加：

- `MAJOR`：不兼容或主要变更。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的补丁和包更新。

## 作者与贡献者
David C Martin (github@dcmartin.com)

[提交记录]: https://github.com/dcmartin/addon-ambianic/commits/master
[贡献者]: https://github.com/dcmartin/addon-ambianic/graphs/contributors
[dcmartin]: https://github.com/dcmartin
[问题]: https://github.com/dcmartin/addon-ambianic/issues
[keepchangelog]: http://keepachangelog.com/en/1.0.0/
[发布]: https://github.com/dcmartin/addon-ambianic/releases
[仓库]: https://github.com/dcmartin/hassio-addons

<img width="1" src="http://clustrmaps.com/map_v2.png?cl=ffffff&w=a&t=n&d=nHYT4NR2G2QC7Y7yBZRLYccEBA0WFVBI5AgkTmURk9c"/>