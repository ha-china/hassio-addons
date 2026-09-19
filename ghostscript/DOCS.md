# Ghostscript 打印机应用程序

## 简介

该存储库包含一个打印机应用程序，适用于 Ghostscript 内置打印驱动程序支持的打印机以及一些额外的过滤器。

它使用 [PAPPL](https://www.msweet.org/pappl) 支持来自多个操作系统的 IPP 打印。此外，它利用 [cups-filters 2.x](https://github.com/OpenPrinting/cups-filters)（libcupsfilters、libppd 中的过滤功能）和 [pappl-retrofit](https://github.com/OpenPrinting/pappl-retrofit)（将经典 CUPS 驱动程序封装到打印机应用程序中）的资源。此工作（或现在的 pappl-retrofit 代码）源自 [hp-printer-app](https://github.com/michaelrsweet/hp-printer-app)。

有关打印机能力和驱动程序使用信息，请使用 OpenPrinting 的 Foomatic 数据库（在线访问 [按打印机](http://www.openprinting.org/printers/)、[按驱动程序](http://www.openprinting.org/drivers/)、[下载](http://github.com/OpenPrinting/foomatic-db)）。

欢迎您的贡献。请发布 [issues 和 pull requests](https://github.com/OpenPrinting/ghostscript-printer-app)。

### 包含的打印机驱动程序

- **Ghostscript 内置**:
  ```
  ap3250, appledmp, bj10e, bj10vh, bj10v, bj10, bj200, bj8XXYYZ.upp,
  bjc250gs, bjc600, bjc800, bjc880j, cdj500, cdj550, cdnj500, chp2200,
  cljet5, cp50, declj250, deskjet, dj505j, djet500, dnj650c,
  eplaser-jp, eplaser, eps9high, eps9mid, epsonc, epson, escpage,
  fmlbp, fmpr, gdi, hl1250, hl7x0, ibmpro, imagen, iwhi, jetp3852,
  jj100, la50, la70, la75plus, la75, laserjet, lbp310, lbp320, lbp8,
  lex5700, lex7000, lips2p, lips3, lips4v, lips4, lj250, lj4dithp,
  lj4dith, lj5gray, ljet2p, ljet3d, ljet3, ljet4d, ljet4, ljetplus,
  ln03, lp2000, lp2563, lp8000, lq850, lxm3200-tweaked, lxm5700m,
  m8510, md1xMono, md2k, md50Eco, md50Mono, md5k, mj700v2c, ml600,
  necp2xX.upp, necp6, npdl, oce9050, oki182, oki4w, okiibm, paintjet,
  pcl3, picty180, pjetxl, pjxl300, pjxl, pj, ps2write, pr150, pr201,
  pxlcolor, pxldpl, pxlmono, r4081, rpdl, sharp.upp, sipixa6.upp,
  sj48, stcolor, t4693dX, tek4696, xes
  ```

  这为许多旧型和古老的打印机提供支持，还支持 PCL 激光打印机（特别是 PCL 6/XL）和针式打印机。

  包含的 Ghostscript 可能有更多驱动程序，但这些是我们从 Foomatic 获得 PPD 支持的驱动程序，并且未被其他驱动程序认为过时。

- **`hpijs` of HPLIP**: 适用于非 HP PCL 打印机（请为 HP 打印机使用 [HPLIP 打印机应用程序](https://snapcraft.io/hplip-printer-app)）。打印质量优于 Ghostscript 的内置驱动程序。

- **`pnm2ppa`**: 针对使用专有协议的一些较老的 HP 打印机的驱动程序，可能是唯一不受 HPLIP 支持的 HP 打印机。甚至连 HP 的专有插件也不支持。Snap 中的配置文件可由用户编辑，请见下文。

- **`pxljr`**: 适用于 HP Color LaserJet 3500/3550/3600，输出质量应优于 HPLIP。

- **`foo2zjs`**: 针对来自戴尔、爱普生、富士、HP、京瓷、利盟、（柯尼卡）美能达、Oki、奥利维提、理光、三星、施乐的专有语言激光打印机的驱动程序。请注意，此打印机应用程序未包含针对 HP 的固件加载功能，使用 [HPLIP 打印机应用程序](https://snapcraft.io/hplip-printer-app)（在应用内下载专有插件，通过 веб 界面）进行这些打印机的操作，固件本来就是专有的。在 Snap 中，用户可以添加颜色配置文件，请见下文。

- **`SpliX`**: 针对来自戴尔、利盟、三星、东芝、施乐的专有语言激光打印机的驱动程序。

- **`brlaser`**: 针对 Brother HL、DCP 和 MFC 激光打印机的驱动程序，这些打印机不理解 PostScript 或 PCL。

- **`fxlinuxprint`**: 富士施乐为其 PDF 打印机提供的驱动程序，早于无驱动 IPP 的时代。

- **`c2esp`**: Kodak EasyShare 打印机的驱动程序。

- **`rastertosag-gdi`**: 针对少数不支持 PostScript 或 PCL 的理光型号：Ricoh Aficio SP 1000S/1100S。

- **`dymo`**: 针对 Dymo 标签打印机的驱动程序。

- **`ptouch`**: 针对 Brother P-Touch 标签打印机的驱动程序。

- **`c2050`, `cjet`, `min12xxw`, `m2300w`**: 针对较老的利盟、佳能和美能达打印机的驱动程序。对于 Snap 中的 `m2300w`，用户可以添加颜色配置文件，请见下文。

- **`CUPS`, `cups-filters`**: 包含 PCL、针式打印机（Oki、爱普生）、标签打印机（Dymo、Intellitech、Zebra）和一些较老的 HP DesignJet 大型打印机的驱动程序。

- **厂商提供的 PPD 文件**: 针对来自理光和 OEM（Gestetner、InfoPrint、Infotec、Lanier、NRG、理光、Savin）以及三星的 PCL 和 PDF 打印机。

### 属性

- 一个提供基于 Ghostscript 的打印机驱动程序的打印机应用程序。输入数据转换为 PDF 或 PostScript（如果尚未以这些格式提供），因为这是 Ghostscript 的输入数据格式，然后通过 Ghostscript 转换为打印机的本地语言。在某些情况下，Ghostscript 生成的通用光栅输出由附加过滤器转换为打印机的语言。

- PWG 光栅、Apple 光栅或图像输入数据被转换为 PostScript，而不是 PDF，因为 PostScript 可流式传输，这样大作业所需的资源更少，理论上甚至可以打印无限作业。

- 此打印机应用程序还包括一些独立的旧的且现在不再维护的打印机驱动程序，这些驱动程序对于自己的打印机应用程序来说项目太小。它们也可以由 CUPS Raster 过滤器组成，如果输入是 PWG 光栅、Apple 光栅或图像，则不需要 Ghostscript。

- 请注意，大多数驱动程序（无论是 Ghostscript 内部的还是单独的过滤器）都是旧的、不再维护的代码，针对旧打印机，我们没有测试访问权限。Snap（以及使用 Debian 源的 Debian）中的打包是最低侵入性的，以确保以前可用的代码保持工作，但由于 GCC 和库的变化或 Snap 环境，无法保证其正常工作。

- 此打印机应用程序支持数千种（通常是较老的）打印机型号。所需的打印机能力和驱动程序使用信息主要来自 OpenPrinting 的 Foomatic 数据库，但也来自个别驱动程序随附的信息。

- 从 Foomatic 数据中，CUPS PPD 文件被预构建、压缩并打包到 Snap 中。还包括 cups-filters 的 foomatic-rip 过滤器、Ghostscript 和额外的打印机驱动程序过滤器。通过这种方式，我们不需要修改或适配现在大多数不再维护的打印机驱动程序代码，亦不需要修改 Foomatic 数据或 PPD 文件。这很重要，因为我们没有用于测试的打印机。

- 我们使用打印机的 IEEE-1284 设备 ID 来识别打印机的制造商和型号，并寻找该型号的明确驱动程序支持。如果未找到，我们检查 ID 的 CMD: 字段，以查看打印机是否支持任何常见数据格式，目前包括 PostScript、PCL-6/XL、PCL 5c 和 PCL 5e，以选择通用驱动程序。

- 可用打印机设备通过 CUPS 的后端进行发现（和使用），而不是通过 PAPPL 自身的后端。以这种方式，可以使用 USB 打印机的兼容性问题的特殊解决方法（并且可以编辑），并且任何驱动程序的输出还可以通过 IPP、IPPS（加密！）和 LPD 发送到打印机，除此之外还可以通过套接字（通常是 9100 端口）。可以配置 SNMP 后端（社区，地址范围）。

- 如果您有不寻常的系统配置或个人防火墙，则可能无法发现您的打印机。在这种情况下，“网络打印机”条目的完全手动输入与主机名/IP 字段的组合可能会有所帮助。

- 标准作业 IPP 属性被映射到驱动程序的选项设置，以便用户可以从任何类型的客户端（例如手机或 IoT 设备）进行打印，这些客户端仅支持标准 IPP 属性，并且无法检索 PPD 选项。托盘、媒体尺寸、媒体类型和双面打印可以轻松映射，但当涉及到颜色和质量时，就变得更复杂，因为 PPD 文件中的相关选项差异很大。在这里，我们使用一种算法，该算法自动找到每种 `print-color-mode`（`color` / `monochrome`）、`print-quality`（`draft` / `normal` / `high`）和 `print-content-optimize`（`auto` / `photo` / `graphics` / `text` / `text-and-graphics`）的组合在当前打印机的 PPD 中的正确选项设置组合。因此，您无需处理特定于打印机的选项设置，就可以轻松访问打印机的全部质量或速度（原始选项仍可通过 Web 管理界面访问）。

<!-- 开始包含的组件 -->
## 包含的组件
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
  - c2050 debian/0.3-7
  - cjet debian/0.8.9-11
  - min12xxw debian/0.0.9-11
  - pnm2ppa debian/1.13-13
  - c2esp debian/27-11
  - dymo-cups-drivers debian/1.4.0-12
  - foo2zjs debian/20200505dfsg0-3
  - fxlinuxprint debian/1.1.0+ds-4
  - m2300w debian/0.51-15
  - printer-driver-oki 1.0.2
  - pxljr debian/1.4+repack0-6
  - rastertosag-gdi debian/0.1-8
  - splix debian/2.0.1-1
  - brlaser v6
  - ptouch-driver debian/1.7-1
<!-- 结束包含的组件 -->

## 法律声明

Ghostcript 打印机应用程序版权 © 2020 Till Kamppeter。

它源于 HP PCL 打印机应用程序，这是一个使用 PAPPL 的光栅打印机应用程序的首个工作模型。它可在这里获取：

https://github.com/michaelrsweet/hp-printer-app

HP PCL 打印机应用程序版权 © 2019-2020 Michael R Sweet。

该软件根据 Apache 许可证第 2.0 版获得许可，并附带允许链接到 GPL2/LGPL2 软件（如较旧版本的 CUPS）的例外情况。有关更多信息，请参见文件 “LICENSE” 和 “NOTICE”。