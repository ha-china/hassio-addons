# Gutenprint打印应用程序

## 介绍

该存储库包含一个用于使用Gutenprint打印机驱动程序进行打印的打印应用程序。这允许在各种喷墨、激光和染料升华打印机上进行高质量打印，特别是Epson和Canon的喷墨打印机、PCL激光打印机（黑白和彩色）以及染料升华摄影打印机。此驱动程序特别推荐用于照片和美术打印。它也是[PCL 4/5c/e激光打印机的Ghostscript打印应用程序](https://github.com/OpenPrinting/ghostscript-printer-app)的替代方案。

它使用[PAPPL](https://www.msweet.org/pappl)来支持来自多个操作系统的IPP打印。此外，它使用[cups-filters 2.x](https://github.com/OpenPrinting/cups-filters)（libcupsfilters、libppd中的过滤功能）和[pappl-retrofit](https://github.com/OpenPrinting/pappl-retrofit)（将经典CUPS驱动程序封装在打印应用程序中）提供的资源。pappl-retrofit的代码源自[hp-printer-app](https://github.com/michaelrsweet/hp-printer-app)。

打印机驱动程序本身以及与打印机硬件通信的软件来自[Gutenprint项目](http://gimp-print.sourceforge.net/)，同时也包含有关受支持打印机型号及其功能的信息。

欢迎您的贡献。请发布[问题和拉取请求](https://github.com/OpenPrinting/gutenprint-printer-app)。

请检查您的打印机是否是无驱动IPP打印机（AirPrint、Mopria、IPP Everywhere、Wi-Fi Direct Print、手机打印），因为在这种情况下您根本不需要任何打印应用程序。大多数现代打印机，即使是最便宜的型号，都是无驱动IPP打印机。即使是仅USB连接的打印机也可以是无驱动IPP打印机，通常您可以通过USB使用无驱动IPP，首先尝试[ipp-usb](https://github.com/OpenPrinting/ipp-usb)处理这些情况。

### 属性

- 一个提供Gutenprint CUPS Raster打印机驱动程序和所有Gutenprint打印机PPD的打印应用程序。这允许轻松实现高质量打印，包括在照片纸上的照片。还包括具有专有USB通信协议的染料升华打印机的专用CUPS后端。

- 打印应用程序检查安装的PAPPL库支持的供应商特定选项/属性的数量，`PAPPL_MAX_VENDOR`并且仅在支持256个或更多供应商特定选项时使用专家PPD，否则使用简化PPD。默认情况下，数量为32，在Snap中我们将其修改为256，这意味着Snap Store中的Gutenprint打印应用程序使用专家PPD，而使用已安装的标准PAPPL库快速构建`make`则使用简化PPD文件。

- 可用打印设备通过CUPS的后端和Gutenprint的染料升华打印机后端发现（并使用），而不是通过PAPPL自己的后端。通过这种方式，染料升华打印机通过其完全专有的通信协议的正确后端被发现。此外，针对具有兼容性问题的USB打印机使用了变通法（并且是可编辑的），Gutenprint的输出可以通过IPP、IPPS（加密！）和LPD发送到打印机，此外还有socket（通常是9100端口）。可以配置SNMP后端（社区，地址范围）。

- 如果您的系统配置不寻常或有个人防火墙，您的打印机可能不会被发现。在这种情况下，完全手动的“网络打印机”条目与主机名/IP字段组合可能会有所帮助。

- PWG Raster、Apple Raster或图像输入数据不会转换为PostScript或PDF，它仅转换/缩放到所需的颜色空间和分辨率，然后输入到Gutenprint CUPS Raster驱动程序中。

- PDF和PostScript输入数据使用Ghostscript渲染为光栅数据。

- 关于哪些打印机型号受支持及其功能的信息基于使用CUPS时Gutenprint自动生成的PPD文件。PPD生成器包含在Snap中。

- 标准作业IPP属性映射到与之最匹配的驱动程序选项设置，以便用户可以从任何类型的客户端（例如手机或物联网设备）打印，这些客户端仅支持标准IPP属性并无法检索PPD选项。托盘、介质尺寸、介质类型和双面打印可以轻松映射，但在涉及颜色和质量时会变得更加复杂，因为相关选项在PPD文件中差异很大。这里我们使用一个算法，会自动找到每个`print-color-mode`（`color`/`monochrome`）、`print-quality`（`draft`/`normal`/`high`）和`print-content-optimize`（`auto`/`photo`/`graphics`/`text`/`text-and-graphics`）的组合所需的正确选项设置集（谁想要手动编辑大约3000个PPD文件进行分配）。这样您就可以轻松访问打印机的全质量或速度，而无需处理特定于打印机的选项设置（原始选项仍然可以通过Web管理界面访问）。

<!-- Begin 包含组件 -->
## 包含组件
  - pappl v1.4.8
  - qpdf v11.9.1
  - ghostscript ghostpdl-10.05.0-test-base-001
  - cups v2.4.11
  - libcupsfilters 2.1.0
  - libppd 2.1.0
  - gutenprint debian/5.3.4.20220624T01008808d602-4
<!-- End 包含组件 -->

## 法律事项

Gutenprint打印应用程序 版权所有 © 2020 by Till Kamppeter。

它源于HP PCL打印应用程序，这是使用PAPPL的光栅打印应用程序的第一个工作模型。可以在此处找到：

https://github.com/michaelrsweet/hp-printer-app

HP PCL打印应用程序 版权所有 © 2019-2020 by Michael R Sweet。

该软件根据Apache许可证第2.0版获得许可，附带例外条款，允许链接到GPL2/LGPL2软件（如较旧版本的CUPS）。有关更多信息，请参见“LICENSE”和“NOTICE”文件。