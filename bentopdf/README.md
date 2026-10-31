# Home assistant add-on: BentoPDF

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbentopdf%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbentopdf%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbentopdf%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

一款隐私优先的 PDF 工具包，完全在您的浏览器中运行——无需上传，无需云端，无需追踪。所有处理均通过 WebAssembly 在本地进行。该附加组件将 BentoPDF 网页应用托管于您的 Home Assistant 实例之中，以便您从网络上的任何位置访问它。

---

## 功能特性

### 整理与编辑

| Tool | Tool | Tool |
|------|------|------|
| Merge PDF | Split PDF | Organize PDF |
| Delete Pages | Extract Pages | Reverse Pages |
| Rotate PDF | Rotate Custom | Crop PDF |
| Add Blank Page | Divide Pages | N-Up PDF |
| Alternate Merge | Combine Single Page | PDF Booklet |
| PDF Merge & Split | Fix Page Size | |

### 转换为 PDF

| Tool | Tool | Tool |
|------|------|------|
| Word to PDF | Excel to PDF | PowerPoint to PDF |
| Image to PDF | JPG to PDF | PNG to PDF |
| BMP to PDF | TIFF to PDF | WEBP to PDF |
| HEIC to PDF | SVG to PDF | PSD to PDF |
| Markdown to PDF | HTML / Email to PDF | RTF to PDF |
| TXT to PDF | CSV to PDF | JSON to PDF |
| XML to PDF | ODT to PDF | ODS to PDF |
| ODP to PDF | ODG to PDF | EPUB to PDF |
| MOBI to PDF | FB2 to PDF | CBZ to PDF |
| XPS to PDF | VSD to PDF | PUB to PDF |
| WPS to PDF | WPD to PDF | Pages to PDF |

### 从 PDF 转换

| Tool | Tool | Tool |
|------|------|------|
| PDF to DOCX | PDF to Excel | PDF to JPG |
| PDF to PNG | PDF to BMP | PDF to TIFF |
| PDF to WEBP | PDF to SVG | PDF to Text |
| PDF to Markdown | PDF to JSON | PDF to CSV |
| PDF to PDF/A | PDF to ZIP | PDF to Greyscale |

### 安全与元数据

| Tool | Tool | Tool |
|------|------|------|
| Encrypt PDF | Decrypt PDF | Change Permissions |
| Remove Restrictions | Sign PDF | Digital Sign PDF |
| Validate Signature | Edit Metadata | View Metadata |
| Remove Metadata | Sanitize PDF | Flatten PDF |
| Remove Annotations | Repair PDF | |

### 增强与处理

| Tool | Tool | Tool |
|------|------|------|
| Compress PDF | OCR PDF | Deskew PDF |
| Rasterize PDF | Linearize PDF | PDF to PDF/A |
| Adjust Colors | Invert Colors | Text Color |
| Background Color | Bates Numbering | Page Numbers |
| Header & Footer | Add Watermark | Add Stamps |
| Scanner Effect | Posterize PDF | Font to Outline |
| PDF Layers | Compare PDFs | Prepare for AI |

### 表单与更多

| Tool | Tool | Tool |
|------|------|------|
| Form Creator | Form Filler | Table of Contents |
| Bookmark | PDF Editor | Extract Images |
| Extract Tables | Extract Attachments | Edit Attachments |
| Add Attachments | Page Dimensions | PDF Workflow |

---

## 安装

1. 将我的附加组件仓库添加到 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置好我的 HA，请点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，查看一切是否顺利。
1. 在 `https://<your-HA-IP>:8443` 打开网页界面。

---

## 配置

| Option | Default | Description |
|--------|---------|-------------|
| `log_level` | `info` | 日志详细程度：`info`, `debug`, `warn`, `error` |
| `ssl` | `false` | 使用 `/ssl` 目录中的自定义证书代替自签名证书来服 8443 端口 |
| `certfile` | `fullchain.pem` | `/ssl` 目录中的证书文件，当 `ssl` 为 true 时使用 |
| `keyfile` | `privkey.pem` | `/ssl` 目录中的私钥文件，当 `ssl` 为 true 时使用 |

不需要其他配置。只需放入文件即可开始。

### Simple Mode build

上游发布两次构建，此附加组件使用的是 Simple Mode 版本。它排除了 bentopdf.com 的营销页面：导航栏、横幅、功能介绍、常见问题解答和页脚。

您仍然可以获得所有 130 个工具页面，与标准构建拥有相同的 LibreOffice WebAssembly 负载。将这些页面剔除还将使服务器负载从约 258 MB 减少到约 228 MB。

---

## 隐私

- 所有 PDF 处理均通过 **WebAssembly** 在浏览器中运行（PyMuPDF, Ghostscript, Tesseract, LibreOffice, CPDF）
- 文件 **永远不会** 上传到任何服务器——即使是运行此附加组件的服务器
- 无遥测，无分析，无外部请求
- 加载后即可完全 **离线** 工作

---

## 支持

在 [github](https://github.com/alexbelgium/hassio-addons/issues) 创建问题，并标记 @ToledoEM

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
