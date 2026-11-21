# Home Assistant 附加组件：BentoPDF

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=$.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbentopdf%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=$.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbentopdf%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=$.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbentopdf%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库 代码 检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

这是一个完全在浏览器中运行的隐私优先 PDF 工具箱——无需上传，无需云端，无需跟踪。所有处理均通过 WebAssembly 在本地进行。此附加组件让您的 Home Assistant 实例提供 BentoPDF 网页应用，以便您从网络上的任何位置访问它。

---

## 功能

### 组织与编辑

| 工具 | 工具 | 工具 |
|------|------|------|
| 合并 PDF | 拆分 PDF | 整理 PDF |
| 删除页面 | 提取页面 | 反向页面 |
| 旋转 PDF | 自定义旋转 | 裁剪 PDF |
| 添加空白页 | 分页 | N 倍 PDF |
| 交替合并 | 组合单页 | PDF 小册子 |
| PDF 合并与拆分 | 修复页面大小 | |

### 转换为 PDF

| 工具 | 工具 | 工具 |
|------|------|------|
| Word 转 PDF | Excel 转 PDF | PowerPoint 转 PDF |
| 图像转 PDF | JPG 转 PDF | PNG 转 PDF |
| BMP 转 PDF | TIFF 转 PDF | WEBP 转 PDF |
| HEIC 转 PDF | SVG 转 PDF | PSD 转 PDF |
| Markdown 转 PDF | HTML / 邮件转 PDF | RTF 转 PDF |
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
| 删除限制 | 签署 PDF | 数字签署 PDF |
| 验证签名 | 编辑元数据 | 查看元数据 |
| 删除元数据 | 清理 PDF | 扁平化 PDF |
| 删除注释 | 修复 PDF | |

### 增强与处理

| 工具 | 工具 | 工具 |
|------|------|------|
| 压缩 PDF | 识别文字 PDF (OCR) | 纠偏 PDF |
| 矢量扫描 PDF | 线性化 PDF | PDF 转 PDF/A |
| 调整颜色 | 反转颜色 | 文字颜色 |
| 背景颜色 | Bates 编号 | 页码 |
| 页眉和页脚 | 添加水印 | 添加印章 |
| 扫描仪效果 | 调色板处理 PDF | 字体转轮廓 |
| PDF 图层 | 比较 PDF | 为 AI 做准备 |

### 表格与更多

| 工具 | 工具 | 工具 |
|------|------|------|
| 表单创建器 | 表单填充器 | 目录 |
| 书签 | PDF 编辑器 | 提取图像 |
| 提取表格 | 提取附加文件 | 编辑附加文件 |
| 添加附加文件 | 页面尺寸 | PDF 工作流 |

---

## 安装

1. 将我的附加组件仓库添加到您的 home assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置了我的 HA，则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有预填特定仓库 URL 的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `保存` 按钮以存储您的配置。
4. 启动附加组件。
5. 检查附加组件的日志，看看是否一切正常。
6. 在 `https://<您的-HA-IP>:8443` 处打开 Web 界面。

---

## 配置

| 选项 | 默认值 | 描述 |
|------|--------|------|
| `log_level` | `info` | 日志详细程度：`info`, `debug`, `warn`, `error` |
| `ssl` | `false` | 使用 `/ssl` 中的您自己的证书代替自签名证书，在 8443 端口提供服务 |
| `certfile` | `fullchain.pem` | `/ssl` 中的证书文件，用于当 `ssl` 为 true 时 |
| `keyfile` | `privkey.pem` | `/ssl` 中的私钥文件，用于当 `ssl` 为 true 时 |

不需要其他配置。将您的文件放入即可。

### 简易模式构建

上游每届发布两个构建，此附加组件使用的是简易模式版本。它会省略 bentopdf.com 的营销页面：导航栏、首图、功能、常见问题解答和页脚。

您仍然可以获得所有 130 个工具页面以及与标准构建相同的 LibreOffice WebAssembly 负载。取消这些页面后，所服务的负载将减少到约 228 MB，从约 258 MB 下降。

---

## 隐私

- 所有 PDF 处理均在浏览器中通过 **WebAssembly** 运行 (PyMuPDF, Ghostscript, Tesseract, LibreOffice, CPDF)
- 文件 **绝不会上传** 到任何服务器——甚至连运行此附加组件的服务器也不上传
- 无遥测，无分析，无外部请求
- 加载后完全支持 **离线** 使用

---

## 支持

在 [github](https://github.com/alexbelgium/hassio-addons/issues) 上创建一个问题并标记 @ToledoEM

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
