# &#127968; - Ambianic Edge

## 描述
这个 Home Assistant 的 _插件_ 利用边缘人工智能（即在当前设备上）来检测和分类感兴趣的实体。使用 Google TensorFlow Lite 的 AI 可以在仅使用 CPU 或使用 USB 连接的 **Coral TPU** 上运行。

## `sources`
可消耗的传感器的来源，例如来自网络摄像头的 `RTSP` 流。来源应使用以下属性定义：

+ `name` - 来源的名称；应唯一（例如 `camera1`）
+ `uri` - 来源的 _通用资源标识符_，例如 `rtsp://username:password@192.168.1.221/live`
+ `live` - 布尔值；默认：`true`；指示摄像头是实时还是录制媒体
+ `type` - 枚举值；来源的内容类型；选项：`video`，`image`，`audio`

## `ai_models`
可以使用 `CPU` 仅或与 Google Coral 加速器一起执行的 TensorFlow Lite 模型。AI 模型应使用以下属性定义：

+ `name` - 模型的名称；应唯一（例如 `mobilenet_ssd_v2_face`）
+ `type` - 模型的类型；可以是 `video` 或 `audio`（注意：`audio` 目前尚未实现）
+ `labels` - 用于识别实体的术语集
+ `entity` - 要检测的实体；可以是 `object` 或 `face`
+ `tflite` - 作为 Ambianic 运行时安装的模型
+ `top_k` - 返回的最大结果数；范围： (1-20)

### `tflite`

1. `inception_v1_224_quant`
1. `inception_v2_224_quant`
1. `inception_v3_299_quant`
1. `inception_v4_299_quant`
1. `mobilenet_ssd_v1_coco_quant_postprocess`
1. `mobilenet_ssd_v2_coco_quant_postprocess`
1. `mobilenet_ssd_v2_face_quant_postprocess`
2. `mobilenet_v1_1.0_224_quant`
2. `mobilenet_v1_1.0_224_quant_embedding_extractor`
2. `mobilenet_v2_1.0_224_inat_bird_quant`
2. `mobilenet_v2_1.0_224_inat_insect_quant`
2. `mobilenet_v2_1.0_224_inat_plant_quant`
2. `mobilenet_v2_1.0_224_quant`

### `labels`

1. `coco`
1. `imagenet`
1. `inat_bird`
1. `inat_insect`
1. `inat_plant`
1. `pet`

## `pipelines`
管道定义了一系列按顺序组合的 _操作_；管道的 _名称_ 用于区分，并且每个 _操作_ 集合的名称应唯一。

+ `name` - 管道的名称；每个管道 _操作_ 应重复（例如 `pipeline1`）
+ `source` - 内容来源，用于输入管道
+ `type` - 模型的类型；可以是 `video` 或 `audio`（注意：`audio` 目前尚未实现）
+ `action` - 要执行的 `操作` 的名称

## `actions`

+ `name` - 操作的名称；应唯一（例如 `saveAction`）
+ `act` - 要执行的函数；可以是 `detect`，`save` 或 `send`（注意：`send` 目前尚未实现）
+ `type` - 模型的类型；可以是 `video` 或 `audio`（注意：`audio` 目前尚未实现）
+ `ai_model` - 要使用的 _ai_model_ 的名称；必须在 `ai_models` 中定义
+ `confidence` - 成功所需的最小置信度级别；范围： [0,100)

## 示例配置

```
log_level: info
workspace: /data/ambianic
ai_models:
  - name: mobilenet_v2_coco
    type: video
    entity: object
    top_k: 10
    labels: coco
    tflite: mobilenet_ssd_v2_coco_quant_postprocess
  - name: mobilenet_v2_face
    type: video
    entity: face
    labels: coco
    top_k: 2
    tflite: mobilenet_ssd_v2_face_quant_postprocess
pipelines:
  - name: pipeline1
    source: camera1
    type: video
    action: detectObject
  - name: pipeline1
    type: video
    action: saveObject
  - name: pipeline1
    source: camera1
    type: video
    action: detectFace
  - name: pipeline1
    type: video
    action: saveFace
actions:
  - name: detectObject
    act: detect
    type: video
    entity: object
    ai_model: mobilenet_v2_coco
    confidence: 0.6
  - name: saveObject
    act: save
    type: video
    entity: object
    interval: 2
    idle: 600
  - name: detectFace
    act: detect
    type: video
    entity: face
    ai_model: mobilenet_v2_face
    confidence: 0.6
  - name: saveFace
    act: save
    type: video
    entity: face
    interval: 2
    idle: 600
sources:
  - name: camera1
    uri: 'http://192.168.1.163/img/snapshot.cgi'
    type: image
    live: true
```

## 更改日志与发布
发布基于语义版本控制，并使用 `MAJOR.MINOR.PATCH` 格式。简而言之，版本将根据以下情况进行增加：

- `MAJOR`：不兼容或主要更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的补丁和包更新。

## 作者与贡献者
David C Martin (github@dcmartin.com)

[提交记录]: https://github.com/dcmartin/hassio-addons/ambianic/commits/master
[贡献者]: https://github.com/dcmartin/hassio-addons/ambianic/graphs/contributors
[dcmartin]: https://github.com/dcmartin
[问题]: https://github.com/dcmartin/hassio-addons/ambianic/issues
[keepchangelog]: http://keepachangelog.com/en/1.0.0/
[发布]: https://github.com/dcmartin/hassio-addons/ambianic/releases
[仓库]: https://github.com/dcmartin/hassio-addons

<img width="1" src="http://clustrmaps.com/map_v2.png?cl=ffffff&w=a&t=n&d=nHYT4NR2G2QC7Y7yBZRLYccEBA0WFVBI5AgkTmURk9c"/>