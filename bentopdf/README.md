# Home Assistant 插件：BentoPDF

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbentopdf%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbentopdf%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbentopdf%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Lint](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

一款隐私优先的 PDF 工具集，完全在你的浏览器中运行——无需上传，无需云端，无需追踪。所有处理均在本地通过 WebAssembly 完成。此插件将从您的 Home Assistant 实例提供 BentoPDF Web 应用程序，以便您可以从网络上的任何位置访问它。

---

## 功能

### 组织与编辑

| 工具 | 工具 | 工具 |
|------|------|------|
| 合并 PDF | 拆分 PDF | 组织 PDF |
| 删除页面 | 提取页面 | 反向页面 |
| 旋转 PDF | 自定义旋转 | 裁剪 PDF |
| 添加空白页 | 分页 | N 列 PDF |
| 交替合并 | 组合单页 | PDF 手册 |
| PDF 合并与拆分 | 修复页面尺寸 | |

### 转换为 PDF

| 工具 | 工具 | 工具 |
|------|------|------|
| Word 到 PDF | Excel 到 PDF | PowerPoint 到 PDF |
| 图像到 PDF | JPG 到 PDF | PNG 到 PDF |
| BMP 到 PDF | TIFF 到 PDF | WEBP 到 PDF |
| HEIC 到 PDF | SVG 到 PDF | PSD 到 PDF |
| Markdown 到 PDF | HTML/电子邮件到 PDF | RTF 到 PDF |
| TXT 到 PDF | CSV 到 PDF | JSON 到 PDF |
| XML 到 PDF | ODT 到 PDF | ODS 到 PDF |
| ODP 到 PDF | ODG 到 PDF | EPUB 到 PDF |
| MOBI 到 PDF | FB2 到 PDF | CBZ 到 PDF |
| XPS 到 PDF | VSD 到 PDF | PUB 到 PDF |
| WPS 到 PDF | WPD 到 PDF | 页面到 PDF |

### 从 PDF 转换

| 工具 | 工具 | 工具 |
|------|------|------|
| PDF 到 DOCX | PDF 到 Excel | PDF 到 JPG |
| PDF 到 PNG | PDF 到 BMP | PDF 到 TIFF |
| PDF 到 WEBP | PDF 到 SVG | PDF 到文本 |
| PDF 到 Markdown | PDF 到 JSON | PDF 到 CSV |
| PDF 到 PDF/A | PDF 到 ZIP | PDF 到灰度 |

### 安全与元数据

| 工具 | 工具 | 工具 |
|------|------|------|
| 加密 PDF | 解密 PDF | 更改权限 |
| 移除限制 | 签署 PDF | 数字签署 PDF |
| 验证签名 | 编辑元数据 | 查看元数据 |
| 移除元数据 | 净化 PDF | 扁平化 PDF |
| 移除注释 | 修复 PDF | |

### 增强与处理

| 工具 | 工具 | 工具 |
|------|------|------|
| 压缩 PDF | OCR PDF | 消斜 PDF |
| 将 PDF 转换为位图 | 线性化 PDF | PDF 到 PDF/A |
| 调整颜色 | 反色 | 文本颜色 |
| 背景颜色 | Bates 编号 | 页码 |
| 页眉和页脚 | 添加水印 | 添加印章 |
| 扫描效果 | 将 PDF 分割为色阶 | 字体转轮廓 |
| PDF 图层 | 比较 PDF | 为 AI 做准备 |

### 表单及其他

| 工具 | 工具 | 工具 |
|------|------|------|
| 表单创建器 | 表单填充器 | 目录 |
| 书签 | PDF 编辑器 | 提取图像 |
| 提取表格 | 提取附件 | 编辑附件 |
| 添加附件 | 页面尺寸 | PDF 工作流程 |

---

## 安装

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在监督器插件商店右上角，或如果您已配置我的 HA 则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击`保存`按钮以存储您的配置。
1. 启动插件。
1. 查看插件日志以确认一切正常。
1. 在`https://<您的 HA 主机名>:8443`打开 Web UI。

---

## 配置

| 选项 | 默认值 | 描述 |
|--------|---------|-------------|
| `log_level` | `info` | 日志详细程度：`info`、`debug`、`warn`、`error` |
| `ssl` | `false` | 若启用，使用 `/ssl` 中的自发电证书代替自签名证书在 8443 端口提供服务 |
| `certfile` | `fullchain.pem` | `/ssl` 中的证书文件，当 `ssl` 为 true 时使用 |
| `keyfile` | `privkey.pem` | `/ssl` 中的私钥文件，当 `ssl` 为 true 时使用 |

不需要其他任何配置。只需将文件放置其中即可。

### 简单模式构建

上游每发布一次版本会出现两个构建，此插件使用的是简单模式版本。它会排除 bentopdf.com 的营销页面：导航栏、英雄区域、功能介绍、常见问题解答和页脚。

您仍然可以获得全部 130 个工具页面以及标准构建相同的 LibreOffice WebAssembly 负载。删除这些页面也将降低所服务的负载大小，降至约 228 MB，从原来的约 258 MB 减少。

---

## 隐私

- 所有 PDF 处理均在浏览器中通过 **WebAssembly** 运行（PyMuPDF、Ghostscript、Tesseract、LibreOffice、CPDF）
- 文件**从不上传**到任何服务器——即使不是运行此插件的服务器
- 无遥测，无分析，无外部请求
- 一旦加载后可完全**离线**工作

---

## 支持

在 [github](https://github.com/alexbelgium/hassio-addons/issues) 上创建问题，并标记 @ToledoEM

- BentoPDF 上游 → [github.com/alam00000/bentopdf](https://github.com/alam00000/bentopdf)

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
