#!/usr/bin/with-contenv bashio

bashio::log.warning "Restart addon."

bashio::addon.restart
