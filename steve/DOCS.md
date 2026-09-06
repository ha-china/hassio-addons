# Home Assistant App: SteVe

SteVe OCPP server for communicationg with charge points

![Supports aarch64 Architecture][aarch64-shield] ![Supports amd64 Architecture][amd64-shield]

## About

Important: This app requires that the MariaDB app is installed and running!

This app is experimental.
Steve is an OCPP server for communicationg with charge points

## Installation

Follow these steps to get the app installed on your system:

Add the repository `https://github.com/erik73/hassio-addons`.
Find the "SteVe" app and click it.
Click on the "INSTALL" button.

## How to use

### Starting the app

After installation you are presented with a default configuration.

Important: This app requires that the MariaDB app is installed and running!

The only configuration that is needed is to provide the admin_user and admin_password.
Save the app configuration by clicking the "SAVE" button.
Start the app.

## Configuration

Important: This app requires that theMariaDB app is installed and running!

Example configuration:

```yaml
admin_user: admin
admin_password: admin
```

Please note: This app consumes lots of memory.
The absolute minimum is 4GB of RAM intsalled in the host.
Depending on other apps that are installed 4GB might not be enough.

It is also important to understand that the admin_user and admin_password can not be
changed after the first start of the app, since the MariaDB database is created with
these credentials the first time the app is started.

There is no ingress support, so to reach the SteVe web interface you have to point your
browser to http://<your.homeassistant.host.ip>:8180 to login in to SteVe.

## Support

Got questions?

You could [open an issue here][issue] GitHub.

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[issue]: https://github.com/erik73/app-steve/issues
