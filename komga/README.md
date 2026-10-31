# Home Assistant Add-on: Komga

Free and open source comics/mangas media server.

[Komga](https://komga.org) organizes your comics, mangas, BDs, magazines and ebooks, serves them
through a web reader, and exposes OPDS, Kobo sync and a REST API for third-party readers
(Tachiyomi/Mihon, Panels, Chunky, ...).

## About

- Browse and read CBZ, CBR, PDF and EPUB files from any browser
- Import metadata, edit series/books, build collections and read lists
- Multi-user, with per-user library restrictions and age ratings
- OPDS v1/v2, Kobo sync, and a documented REST API

## Installation

1. Add this repository to Home Assistant.
2. Install the **Komga** add-on.
3. Start the add-on and open it from the sidebar (ingress), or on port `25600` at
   `http://homeassistant:25600/komga`.
4. Create the initial user account when the web interface asks for it.
5. Add a library pointing at your comics, for example `/media/comics` or `/share/comics`.

The first start takes longer than usual: Komga is a JVM application and builds its database and
search index on first boot.

## Configuration

| Option | Description |
|--------|-------------|
| `PUID` / `PGID` | Ownership applied to the add-on configuration directory. Defaults to `0` (root). |
| `TZ` | Timezone, e.g. `Europe/Paris`. |
| `localdisks` | Local disks to mount, e.g. `sda1` or a disk label. Add a folder after the drive to mount only that folder, e.g. `MYNAS/public` mounts only that folder, at `/mnt/MYNAS/public`. Folder mounts need an add-on version released after 2026-09-19. |
| `networkdisks` | SMB shares to mount, e.g. `//192.168.1.2/comics`. Mounted under `/mnt`. |
| `cifsusername` / `cifspassword` / `cifsdomain` | Credentials for the SMB shares. |
| `smbv1` | Allow the legacy SMBv1 protocol. |
| `env_vars` | Extra environment variables passed to Komga. See the [wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2). |

Most Komga settings can be passed through `env_vars` using the upstream naming, see the
[Komga configuration options](https://komga.org/docs/installation/configuration/). A common one:

- `JAVA_TOOL_OPTIONS` = `-Xmx1g` — cap the JVM heap on small machines.

`SERVER_SERVLET_CONTEXTPATH` and `SERVER_PORT` are reserved by the add-on: ingress is built
around the `/komga` path on port 25600, and overriding either breaks the sidebar panel.

## Ingress and URLs

Komga is served from the `/komga` subpath so that it works behind Home Assistant ingress:

- from the Home Assistant sidebar: ingress, no extra setup
- directly: `http://homeassistant:25600/komga`

External clients — OPDS readers, Kobo sync, Tachiyomi/Mihon, Panels — must use the direct
`http://homeassistant:25600/komga` url. Ingress is browser-session based, so those clients cannot
authenticate through it.


## Data

Komga's database, logs and search index live in `/config` inside the add-on, which Home Assistant
maps to this add-on's own configuration directory — `/addon_configs/<repository_id>_komga`, browsable
with the Filebrowser add-on. They survive add-on updates. Libraries stay where you put them, under
`/media`, `/share` or a mounted disk.

## Support

- [Komga upstream project](https://github.com/gotson/komga)
- [Add-on repository issues](https://github.com/alexbelgium/hassio-addons/issues)

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
