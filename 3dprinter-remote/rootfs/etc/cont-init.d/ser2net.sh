#!/usr/bin/with-contenv bashio
# ==============================================================================
# Add-on: 3dprinter-remote
# Setup ser2net.conf
# ==============================================================================

# Generate ser2net configuration
bashio::var.json \
    printer_path "$(bashio::config 'printer_path')" \
    printer_baudrate "$(bashio::config 'printer_baudrate')" \
    ser2net_args "$(bashio::config 'ser2net_args')" \
    | tempio \
        -template /usr/share/tempio/ser2net/ser2net.conf.gtpl \
        -out /etc/ser2net.conf
