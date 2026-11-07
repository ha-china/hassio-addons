#!/usr/bin/with-contenv bashio

bashio::log.info "Preparing Terraform backend state directory..."

# terrastate path
mkdir -p /data/terrastate/storage
chown -R terrastate:terrastate /data/terrastate
