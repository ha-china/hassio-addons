# Home assistant 插件：BentoPDF

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbentopdf%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbentopdf%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbentopdf%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库%20Lint)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

一个完全在浏览器中运行的隐私优先 PDF 工具包——无上传、无云端、无追踪。所有处理均通过 WebAssembly 在本地进行。该插件将 BentoPDF 网页应用程序托管在您 Home Assistant 实例上，以便您可以从网络上的任何地方访问它。

---

## 功能

### 组织与编辑

| 工具 | 工具 | 工具 |
|------|------|------|
| 合并 PDF | 拆分 PDF | 整理 PDF |
| 删除页面 | 提取页面 | 反向页面 |
| 旋转 PDF | 自定义旋转 | 裁剪 PDF |
| 添加空白页面 | 分页 | 多侧栏 PDF |
| 交替合并 | 单个页面组合 | PDF 手册页 |
| PDF 合并与拆分 | 修复页面尺寸 | |

### 转换为 PDF

| 工具 | 工具 | 工具 |
|------|------|------|
| Word 转 PDF | Excel 转 PDF | PowerPoint 转 PDF |
| 图像转 PDF | JPG 转 PDF | PNG 转 PDF |
| BMP 转 PDF | TIFF 转 PDF | WEBP 转 PDF |
| HEIC 转 PDF | SVG 转 PDF | PSD 转 PDF |
| Markdown 转 PDF | HTML / 电子邮件转 PDF | RTF 转 PDF |
| TXT 转 PDF | CSV 转 PDF | JSON 转 PDF |
| XML 转 PDF | ODT 转 PDF | ODS 转 PDF |
| ODP 转 PDF | ODG 转 PDF | EPUB 转 PDF |
| MOBI 转 PDF | FB2 转 PDF | CBZ 转 PDF |
| XPS 转 PDF | VSD 转 PDF | PUB 转 PDF |
| WPS 转 PDF | WPD 转 PDF | Pages 转 PDF |

### 从 PDF 转换

| 工具 | 工具 | 工具 |
|------|------|------|
| PDF 转 DOCX | PDF 转 Excel | PDF 转 JPG |
| PDF 转 PNG | PDF 转 BMP | PDF 转 TIFF |
| PDF 转 WEBP | PDF 转 SVG | PDF 转文本 |
| PDF 转 Markdown | PDF 转 JSON | PDF 转 CSV |
| PDF 转 PDF/A | PDF 转 ZIP | PDF 转灰度 |

### 安全与元数据

| 工具 | 工具 | 工具 |
|------|------|------|
| 加密 PDF | 解密 PDF | 更改权限 |
| 移除限制 | 签名 PDF | 数字签名 PDF |
| 验证签名 | 编辑元数据 | 查看元数据 |
| 移除元数据 | 清理 PDF | 扁平化 PDF |
| 移除标注 | 修复 PDF | |

### 增强与处理

| 工具 | 工具 | 工具 |
|------|------|------|
| 压缩 PDF | OCR PDF | 校正纸张倾斜度 |
| 将 PDF 栅格化 | 线性化 PDF | PDF 转 PDF/A |
| 调整颜色 | 反转颜色 | 文字颜色 |
| 背景色 | Bates 编号 | 页码 |
| 页眉和页脚 | 添加水印 | 添加印章 |
| 扫描效果 | Posterize PDF | 字体转轮廓 |
| PDF 图层 | 比较 PDF 文件 | 为 AI 做准备 |

### 表单及其他

| 工具 | 工具 | 工具 |
|------|------|------|
| 表单创建器 | 表单填充工具 | 目录 |
| 书签 | PDF 编辑器 | 提取图像 |
| 提取表格 | 提取附件 | 编辑附件 |
| 添加附件 | 页面尺寸 | PDF 工作流 |

---

## 安装

1. 将我的附加组件仓库添加到您的 home assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置 HA 则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 单击 `保存` 按钮以存储您的配置。
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否正常。
1. 在 `https://<your-HA-IP>:8443` 打开 web 界面。

---

## 配置

| 选项 | 默认值 | 描述 |
|--------|---------|-------------|
| `log_level` | `info` | 日志详细程度：`info`, `debug`, `warn`, `error` |

无需其他配置。将文件放入即开始使用。

### 简单模式构建

上游在每个发布周期发布两个构建，此附加组件使用简单模式构建。它跳过了 bentopdf.com 的营销页面：导航栏、首屏、功能介绍、常见问题解答和页脚。

您仍然可以获得所有 130 个工具页面与标准构建相同的 LibreOffice WebAssembly 载荷。删除这些页面也将使服务载荷减少到约 228 MB，从原来的约 258 MB 减少。

---

## 隐私

- 所有 PDF 处理均 **在浏览器中通过 WebAssembly 进行**（PyMuPDF、Ghostscript、Tesseract、LibreOffice、CPDF）
- 文件 **永远不会上传** 到任何服务器——甚至连运行此附加组件的服务器都不包括在内
- 无遥测、无分析、无外部请求
- 加载后即可完全 **离线工作**

---

## 支持

在 [github](https://github.com/alexbelgium/hassio-addons/issues) 上创建问题并标注 @ToledoEM

- BentoPDF 上游 → [github.com/alam00000/bentopdf](https://github.com/alam00000/bentopdf)

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
