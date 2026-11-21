# HPLIP打印机应用程序

## 简介

该仓库包含用于在HP和Apollo打印机上打印的打印机应用程序，这些打印机由HP的HPLIP驱动程序套件支持。

它使用[PAPPL](https://www.msweet.org/pappl)来支持来自多个操作系统的IPP打印。此外，它还使用[cups-filters 2.x](https://github.com/OpenPrinting/cups-filters)（libcupsfilters、libppd中的过滤器功能）和[pappl-retrofit](https://github.com/OpenPrinting/pappl-retrofit)（将经典CUPS驱动程序封装在打印机应用程序中）的资源。这项工作（或现在的pappl-retrofit代码）源自[hp-printer-app](https://github.com/michaelrsweet/hp-printer-app)。

打印机驱动程序本身和与打印机硬件通信的软件来自[HPLIP (HP Linux Imaging and Printing)驱动套件](https://developers.hp.com/hp-linux-imaging-and-printing/)，同时也提供了关于支持的打印机型号及其功能的信息。

欢迎您的贡献。请发布[问题和拉取请求](https://github.com/OpenPrinting/hplip-printer-app)。

对于PostScript打印机，您也可以使用[PostScript打印机应用程序](https://github.com/OpenPrinting/ps-printer-app)，特别是如果您已经为某些非HP PostScript打印机安装了它。

还要检查您的打印机是否是无驱动的IPP打印机（AirPrint、Mopria、IPP Everywhere、Wi-Fi Direct Print、从手机打印），因为在这种情况下，您根本不需要任何打印机应用程序。大多数现代HP打印机，即使是最便宜的型号，都是无驱动的IPP打印机。即使是仅USB连接的打印机也可以是无驱动的IPP，通常可以通过USB使用无驱动的IPP，首先尝试[ipp-usb](https://github.com/OpenPrinting/ipp-usb)。

### 属性

- 一个打印机应用程序，提供`hpcups`打印机驱动程序和所有HPLIP打印机的PPD，支持在大多数HP和Apollo打印机上打印。这允许高质量的易操作打印，包括在照片纸上打印照片。`hpps` CUPS过滤器用于在PostScript打印机上进行PIN保护打印。

- 打印机也通过HPLIP进行发现。对于USB打印机，使用`hp` CUPS后端，对于网络打印机，使用`hp-probe`实用程序（封装在脚本中以表现为CUPS后端）。

- 与打印机的通信通过`hp` CUPS后端进行，因此（至少在USB的情况下）使用IEEE-1284.4数据包协议（USB上的协议7/1/3），而不是简单的流协议（如标准CUPS和PAPPL后端所使用的）。这样一来，用户应该能够同时打印和扫描，或者至少在打印时检查打印机状态。并非所有打印机都支持该协议，如果不支持，则使用标准流协议。同时，任何其他需要`hp`后端的特定功能也受支持。在“添加打印机”Web界面页面的“设备”下，选择“HPLIP (HP)”条目。

- 请注意，`hp`后端不允许访问打印机的双向访问。如果您有一台PostScript打印机并更倾向于支持远程查询打印机附件配置，而不是同时打印和扫描，CUPS的标准后端也可用于USB和网络打印机。

- 如果您有不寻常的系统配置或个人防火墙，HP的后端可能无法发现您的打印机。在此情况下，标准后端包括完全手动的“网络打印机”条目，结合主机名/IP字段，也可能会有所帮助。

- 使用CUPS的标准后端而不是PAPPL的标准后端，可以对使用兼容性问题的USB打印机进行故障处理（并且是可编辑的），输出可以通过IPP、IPPS（加密！）以及LPD发送到打印机，此外还可以通过套接字（通常是9100端口）发送。SNMP后端可以被配置（社区、地址范围）。

- PWG Raster、Apple Raster或要在非PostScript打印机上打印的图像输入数据不会被转换为PostScript或PDF，只会被转换/缩放到所需的颜色空间和分辨率，然后输入到`hpcups`驱动程序中。

- 对于在非PostScript打印机上打印，PDF和PostScript输入数据会使用Ghostscript渲染为光栅数据。Ghostscript也被用于将PDF转换为PostScript，用于PostScript打印机。

- 关于支持哪些打印机型号以及它们的功能的信息基于HPLIP中包含的PPD文件。它们作为压缩归档打包在Snap中。

- 标准作业IPP属性被映射到最符合它们的驱动程序选项设置，以便用户可以从任何类型的客户端（例如手机或物联网设备）打印，这些客户端只支持标准IPP属性，无法提取PPD选项。纸盘、介质尺寸、介质类型和双面打印可以轻松映射，但在颜色和质量方面就变得更复杂，因为相关选项在PPD文件中差别很大。在这里，我们使用一种算法，自动（谁想手动编辑~3000个PPD文件进行分配）找到每个`print-color-mode`（`color`/`monochrome`）、`print-quality`（`draft`/`normal`/`high`）和`print-content-optimize`（`auto`/`photo`/`graphics`/`text`/`text-and-graphics`）组合的正确选项设置。因此，您无需处理与打印机特定选项设置相关的问题即可轻松访问打印机的全质量或速度（原始选项仍然可以通过Web管理界面访问）。

- HPLIP打印机应用程序的Snap从Debian的打包仓库获取HPLIP的源代码，而不是直接从HP获取，因为Debian的包修复了大约80个报告给HP但没有上游采用的补丁。因此，使用Snap，用户应该获得与Debian包相同的可靠性和质量体验。

- 通过Web界面的附加页面支持下载HPLIP的专有插件。这增加了对某些激光打印机的支持，这些打印机需要每次开机加载其固件，或者使用特定的专有打印数据格式。这在Snap和打印机应用程序的经典安装中均有效（必须以root身份运行，否则只能检查插件的状态）。

<!-- Begin Included Components -->
## 包含的组件
  - pappl v1.4.8
  - qpdf v11.9.1
  - ghostscript ghostpdl-10.05.0-test-base-001
  - cups v2.4.11
  - libcupsfilters 2.1.0
  - libppd 2.1.0
  - pyppd release-1-1-0
  - hplip debian/3.22.10+dfsg0-5
<!-- End Included Components -->

## 法律声明

HPLIP打印机应用程序版权 © 2020 由Till Kamppeter持有。

它源自HP PCL打印机应用程序，这是使用PAPPL的光栅打印机应用程序的第一个工作模型。可以在此处获得：

https://github.com/michaelrsweet/hp-printer-app

HP PCL打印机应用程序版权 © 2019-2020 由Michael R Sweet持有。

本软件根据Apache许可证第2.0版授权，并附有例外，以允许与GPL2/LGPL2软件（如较旧版本的CUPS）链接。有关更多信息，请参见“LICENSE”和“NOTICE”文件。