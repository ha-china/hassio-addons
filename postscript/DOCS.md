# PostScript 打印机应用程序

## 简介

该代码库包含一个用于 PostScript 打印机的打印机应用程序，使用 [PAPPL](https://www.msweet.org/pappl) 支持来自多个操作系统的 IPP 打印。此外，它使用 [cups-filters 2.x](https://github.com/OpenPrinting/cups-filters)（libcupsfilters、libppd 中的过滤器功能）和 [pappl-retrofit](https://github.com/OpenPrinting/pappl-retrofit) （将经典 CUPS 驱动程序封装在打印机应用程序中）的资源。这项工作（或现在的 pappl-retrofit 代码）源于 [hp-printer-app](https://github.com/michaelrsweet/hp-printer-app)。

欢迎您的贡献。请发布 [问题和拉取请求](https://github.com/OpenPrinting/ps-printer-app)。

### 此打印机应用程序是一个工作模型，用于

- 一个非光栅打印机应用程序：目标格式是 PostScript，一种高级/矢量格式。接受 PostScript 或 PDF 格式的输入数据，并且不需要任何中间光栅步骤即可完成转换。

- 一个使用 cups-filters 2.x 新过滤器功能的打印机应用程序。过滤器功能是源自 CUPS 过滤器的库函数，并包含自 2000 年 CUPS 引入以来数十年的开发和完善。

- 一个为经典 CUPS 驱动程序 retro-fit 的打印机应用程序，在这种情况下，只有 PostScript 打印机的 PPD 文件的最简单形式。它列出了 Snap 中包含的存储库中的 PPD 文件，加载实际打印机所需的 PPD，从 PPD 中提取选项以在 Web 界面中显示，接受作为 IPP 属性的作业设置，并将 PPD 提供的 PostScript 代码正确插入输出数据流中。

- 一个不通过原始（输入格式为打印机的本机格式）作业的打印机应用程序。为了确保始终将 PPD 文件的 PostScript 代码插入输出流，我们将打印机的本机格式称为 "application/vnd.printer-specific"，该格式不存在作为输入格式，因此强制通过 pstops() 过滤器函数输入 "application/postscript"。

- 一个可扩展的打印机应用程序：用户可以通过管理 Web 界面添加 PPD 文件以支持其他打印机型号。

进一步的属性包括：

- 为了避免重新发明用于分叉到子进程的代码，使我们能够通过一系列过滤器传递数据，我们创建了一个过滤器函数，将数据发送到打印机，并使用过滤器链过滤器函数（pstops() 和 pdftops() 的实际转换过滤器函数之一）形成转换过滤器函数的链。

- 对于 PWG/Apple Raster 输入，我们使用光栅回调，以便处理是流式的，允许大型甚至无限长的作业。我们使用 libppd 函数将 PPD 选项的 PostScript 代码插入输出流，并使用 filterPOpen() 函数创建文件描述符，以便 libppd 函数将数据发送到设备。

- PostScript 打印机应用程序 Snap 内置了 [foomatic-db](https://github.com/OpenPrinting/foomatic-db) 和 [HPLIP](https://developers.hp.com/hp-linux-imaging-and-printing) 项目的所有 PostScript PPD 文件，因此大多数 PostScript 打印机 PPD 通常随 Linux 发行版提供。为了避免这大量的 PPD 文件增加 Snap 的大小，我们使用 [pyppd](https://github.com/OpenPrinting/pyppd) 对其进行高度压缩。请注意，一些 PPD 使用某些 CUPS 过滤器以获得额外功能。这些过滤器包含在 Snap 中，因此支持额外功能（在大多数情况下是 PIN 保护的打印）。用户可以在不需要重建 Snap 的情况下添加其他 PPD（请参见下面）。

- 我们使用打印机的 IEEE-1284 设备 ID 初步识别它是否为 PostScript 打印机（通过 CMD: 字段），以查看是否受到支持，然后基于制造商和型号检查是否显式支持它的 PPD。对于没有 PPD 的 PostScript 打印机，将分配一个通用 PPD。通过在制造商/型号查找之前检查 CMD: 字段，我们确保如果 PostScript 是由附加模块提供的，则该模块实际上已安装。

- 标准作业 IPP 属性被映射到与之最匹配的 PPD 选项设置，以便用户可以从任何类型的客户端打印（例如手机或物联网设备），这些客户端仅支持标准 IPP 属性，无法检索 PPD 选项。纸盘、介质大小、介质类型和双面可以轻松映射，但当涉及到颜色和质量时就变得更加复杂，因为相关选项在 PPD 文件中差异很大。在此，我们使用算法自动（谁会手动编辑 ~10000 个 PPD 进行分配）为当前打印机的 PPD 中每种 `print-color-mode` (`color`/`monochrome`)、`print-quality` (`draft`/`normal`/`high`) 和 `print-content-optimize` (`auto`/`photo`/`graphics`/`text`/`text-and-graphics`) 的组合找到正确的选项设置。因此，您可以轻松访问打印机的全部质量或速度，而无需处理特定于打印机的选项设置（原始选项仍可通过 Web 管理界面访问）。

- 针对给定打印机型号的打印机能力（打印机应用程序中的“驱动程序”）在打印机应用程序中设置的打印队列的整个生命周期内不是静态的。用户可以通过 Web 管理界面中的页面配置安装在打印机上的哪些硬件附件（额外纸盘、双面单元、整理机等），并且打印机应用程序会更新驱动程序数据结构及其打印机能力。响应获取打印机属性的 IPP 请求会相应更新。

- PostScript 是一种功能齐全的编程语言，许多 PostScript 打印机允许查询选项的设置和可安装硬件附件的存在，执行适当的 PostScript 代码。如果可以查询某个设置，制造商会将所需的 PostScript 代码放入 PPD 文件中，以及可查询的选项。这些查询通过打印机应用程序的 Web 界面得到支持。

- 可用打印机设备是通过 CUPS 的后端发现（和使用），而不是通过 PAPPL 的后端。这样可以使用 USB 打印机的兼容性问题的解决方法（并且是可编辑的），并且除了套接字（通常是 9100 端口）外，还可以通过 IPP、IPPS（加密！）和 LPD 将 PostScript 输出发送到打印机。可以配置 SNMP 后端（社区、地址范围）。

- 如果您的系统配置不寻常或有个人防火墙，您的打印机可能不会被发现。在这种情况下，全手动的“网络打印机”条目与主机名/IP 字段的组合可能会有所帮助。

<!-- Begin Included Components -->
## 包含组件
  - pappl v1.4.8
  - qpdf v11.9.1
  - ghostscript ghostpdl-10.05.0-test-base-001
  - cups v2.4.11
  - libcupsfilters 2.1.0
  - libppd 2.1.0
  - cups-filters 2.0.1
  - pyppd release-1-1-0
  - foomatic-db 20240504
  - hplip debian/3.22.10+dfsg0-5
<!-- End Included Components -->

## 法律声明

PostScript 打印机应用程序版权 © 2020 由 Till Kamppeter 拥有。

它源于 HP PCL 打印机应用程序，这是第一个使用 PAPPL 的光栅打印机应用程序的工作模型。可在以下位置获得：

https://github.com/michaelrsweet/hp-printer-app

HP PCL 打印机应用程序版权 © 2019-2020 由 Michael R Sweet 拥有。

此软件根据 Apache License Version 2.0 许可，附加例外允许与 GPL2/LGPL2 软件（如较旧版本的 CUPS）链接。有关更多信息，请参见“LICENSE”和“NOTICE”文件。
