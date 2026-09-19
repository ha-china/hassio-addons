# 文档

## 配置

- `mjpg_input`: 为 mjpg_streamer 指定输入参数。

## 如何使用

通过 `mjpg_input` 配置选项设置输入参数，然后启动插件。

## 从 Home Assistant 访问摄像头

摄像头流和快照可以通过 e.g. [MJPEG IP Camera](https://www.home-assistant.io/integrations/mjpeg/) 访问，网址为：
* MJPEG URL: `http://cce6f2d5-camera-mjpg-streamer/?action=stream`
* 静态图像 URL: `http://cce6f2d5-camera-mjpg-streamer/?action=snapshot`。

插件主机名可以在 [插件设置](https://my.home-assistant.io/redirect/supervisor_addon/?addon=cce6f2d5_camera-mjpg-streamer&repository_url=https%3A%2F%2Fgithub.com%2Ffredrikbaberg%2Fha-3dprinter-addons) 下找到。

## Ingress?

Ingress 支持仅包含用于验证摄像头是否可以访问。流媒体可能仅在“JavaScript”标签中工作。

## 测试

要进行测试，可以将 `mjpg_input` 设置为：
> input_file.so -f /www_mjpg -e

这将导致显示测试图像。

## 版本

有关软件和版本的一些说明。
并非所有软件都在所有镜像中安装。

- mjpg-streamer
  - 编译自 [https://github.com/jacksonliam/mjpg-streamer](https://github.com/jacksonliam/mjpg-streamer)。