#!/usr/bin/with-contenv bashio

bashio::log.info "Creating OpenBao data directories..."
mkdir -p /data/openbao/data
mkdir -p /data/openbao/config
mkdir -p /data/openbao/logs

chown -R openbao:openbao /data/openbao

if bashio::fs.file_exists '/data/openbao/init.json'; then
    chmod 600 /data/openbao/init.json
fi

bashio::log.info "Generating OpenBao server configuration..."
gomplate \
    -f /etc/defaults/openbao.json.gotmpl \
    -d options=/data/options.json \
    -o /data/openbao/config/openbao.json

bashio::log.info "OpenBao configuration generated."
