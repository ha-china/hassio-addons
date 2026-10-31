# Home Assistant App: Roundcube

Roundcube web based email client.

![Supports aarch64 Architecture][aarch64-shield] ![Supports amd64 Architecture][amd64-shield]

## About

Important: This app requires that the MariaDB app is installed and running!

This app is experimental, and provides a webmail frontend that connects
to the Mailserver app. It also enables you to configure Sieve scripts
for your mailbox.

You reach the Roundcube interface by clicking the Web UI button in the app
page to use ingress feature. Login with your IMAP credentials.
If you want to reach the app directly you can specify a port in the optional
ports section. Lets say you set the port 2665:
Point your browser to: http://{homeassistant IP}:2665.
If you enable the SSL option it is https://{homeassistant IP}:2665.
It is also possible to use the hostname insted of IP address.
If you want to forward your chosen port in your router, HTTPS is
highly recommended!

## Installation

Follow these steps to get the app installed on your system:

Add the repository `https://github.com/erik73/hassio-addons`.
Find the "Roundcube" app and click it.
Click on the "INSTALL" button.

## How to use

### Starting the app

After installation you are presented with a default and example configuration.

Adjust the app configuration to match your requirements.
Save the app configuration by clicking the "SAVE" button.
Start the app.

## Configuration

Please note: During the startup of the app, a database is created in the
MariaDB app.

### Option: `ssl`

Enables/Disables SSL (HTTPS) on the web interface of Roundcube
Set it `true` to enable it, `false` otherwise.

### Option: `certfile`

The certificate file to use for SSL.

**Note**: _The file MUST be stored in `/ssl/`, which is the default_

### Option: `keyfile`

The private key file to use for SSL.

**Note**: _The file MUST be stored in `/ssl/`, which is the default_

## Support

Got questions?

You could [open an issue here][issue] GitHub.

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[issue]: https://github.com/erik73/app-roundcube/issues
[repository]: https://github.com/erik73/hassio-addons
