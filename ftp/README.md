# Home Assistant Community Add-on: FTP

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Discord][discord-shield]][discord] [![Community Forum][forum-shield]][forum]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

一个为 Home Assistant 提供安全且快速 FTP 服务的管理插件

## 关于

FTP 协议有时会派上用场。虽然它已经过时，但仍然有其用途。例如，大多数 IP 摄像头仍然支持通过 FTP 上传图像或视频。

此插件以相对安全的方式为 Hass.io 提供一个 FTP 服务器。虽然 FTP 本身（未加密）并不完全安全，但此插件支持 FTP over SSL (FTPS) 并将其虚拟用户限制在其家目录中。

当然，如果你真的想这样做，你也可以使用此插件再次通过 FTP 访问你的 Home Assistant 配置。

[discord-shield]: https://img.shields.io/discord/478094546522079232.svg
[discord]: https://discord.me/hassioaddons
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-ftp/36799?u=frenck
[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[maintenance-shield]: https://img.shields.io/maintenance/yes/2025.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[release-shield]: https://img.shields.io/badge/version-v5.3.4-blue.svg
[release]: https://github.com/hassio-addons/addon-ftp/tree/v5.3.4