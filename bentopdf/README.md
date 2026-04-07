# 家居助理插件：BentoPDF

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbentopdf%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbentopdf%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbentopdf%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

一个以隐私为首要考虑的PDF工具包，完全运行在您的浏览器中——无上传，无云服务，无追踪。所有处理都通过WebAssembly在本地进行。此插件从您的Home Assistant实例中提供BentoPDF网络应用程序，让您可以在您的网络上的任何位置访问它。

---

## 功能

### 组织与编辑

| 工具 | 工具 | 工具 |
|------|------|------|
| 合并PDF | 分割PDF | 组织PDF |
| 删除页面 | 提取页面 | 反转页面 |
| 旋转PDF | 自定义旋转 | 裁剪PDF |
| 添加空白页 | 分页 | N-Up PDF |
| 交替合并 | 合并单页 | PDF小册子 |
| PDF合并与分割 | 修复页面大小 | |

### 转换为PDF

| 工具 | 工具 | 工具 |
|------|------|------|
| Word转PDF | Excel转PDF | PowerPoint转PDF |
| 图片转PDF | JPG转PDF | PNG转PDF |
| BMP转PDF | TIFF转PDF | WEBP转PDF |
| HEIC转PDF | SVG转PDF | PSD转PDF |
| Markdown转PDF | HTML/电子邮件转PDF | RTF转PDF |
| TXT转PDF | CSV转PDF | JSON转PDF |
| XML转PDF | ODT转PDF | ODS转PDF |
| ODP转PDF | ODG转PDF | EPUB转PDF |
| MOBI转PDF | FB2转PDF | CBZ转PDF |
| XPS转PDF | VSD转PDF | PUB转PDF |
| WPS转PDF | WPD转PDF | Pages转PDF |

### 从PDF转换

| 工具 | 工具 | 工具 |
|------|------|------|
| PDF转DOCX | PDF转Excel | PDF转JPG |
| PDF转PNG | PDF转BMP | PDF转TIFF |
| PDF转WEBP | PDF转SVG | PDF转文本 |
| PDF转Markdown | PDF转JSON | PDF转CSV |
| PDF转PDF/A | PDF转ZIP | PDF转灰度 |

### 安全性与元数据

| 工具 | 工具 | 工具 |
|------|------|------|
| 加密PDF | 解密PDF | 更改权限 |
| 移除限制 | 签署PDF | 数字签名PDF |
| 验证签名 | 编辑元数据 | 查看元数据 |
| 移除元数据 | 清理PDF | 压平PDF |
| 移除批注 | 修复PDF | |

### 增强与处理

| 工具 | 工具 | 工具 |
|------|------|------|
| 压缩PDF | OCR PDF | 消除倾斜 |
| 光栅化PDF | 线性化PDF | PDF转PDF/A |
| 调整颜色 | 反转颜色 | 文本颜色 |
| 背景颜色 | 巴特斯编号 | 页码 |
| 页眉页脚 | 添加水印 | 添加印章 |
| 扫描效果 | 图案化PDF | 字体转轮廓 |
| PDF层 | 比较PDF | 准备AI |

### 表单与更多

| 工具 | 工具 | 工具 |
|------|------|------|
| 表单创建者 | 表单填写者 | 目录 |
| 书签 | PDF编辑器 | 提取图片 |
| 提取表格 | 提取附件 | 编辑附件 |
| 添加附件 | 页面尺寸 | PDF工作流程 |

---

## 安装

1. 将我的插件仓库添加到您的Home Assistant实例中（在管理员的插件存储中右上角，或点击下面的按钮如果您已经配置了HA）
   [![打开您的Home Assistant实例并显示带有特定仓库URL预填充的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击`保存`按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 在`https://<您的HA-IP>:8443`打开webUI。

---

## 配置

| 选项 | 默认 | 描述 |
|--------|---------|-------------|
| `log_level` | `info` | 日志详细程度：`info`、`debug`、`warn`、`error` |

无需其他配置。将您的文件放入即可。

---

## 隐私

- 所有PDF处理都在**浏览器中通过WebAssembly**运行（PyMuPDF、Ghostscript、Tesseract、LibreOffice、CPDF）
- 文件**永远不会上传**到任何服务器——甚至不是运行此插件的那个服务器
- 无遥测，无分析，无外部请求
- 加载后完全**离线**工作

---

## 支持

在[github](https://github.com/alexbelgium/hassio-addons/issues)上创建问题并标记@ToledoEM

- BentoPDF上游 → [github.com/alam00000/bentopdf](https://github.com/alam00000/bentopdf)
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
