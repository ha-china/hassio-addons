#!/usr/bin/with-contenv bashio
# shellcheck shell=bash
# ==============================================================================
# Home Assistant Add-on: Promtail
# This file makes the config file from inputs
# ==============================================================================
readonly CONFIG_DIR=/etc/promtail
readonly CONFIG_FILE="${CONFIG_DIR}/config.yaml"
readonly BASE_CONFIG="${CONFIG_DIR}/base-config.yaml"
readonly LOCAL_JOURNAL_SCRAPE_CONFIG="${CONFIG_DIR}/local-journal-scrape-config.yaml"
readonly CUSTOM_SCRAPE_CONFIGS="${CONFIG_DIR}/custom-scrape-config.yaml"
declare add_stages
declare add_scrape_configs
scrape_configs="${LOCAL_JOURNAL_SCRAPE_CONFIG}"

bashio::log.info 'Setting base config for promtail...'
cp "${BASE_CONFIG}" "${CONFIG_FILE}"

# Set up client section
if ! bashio::config.is_empty 'client.username'; then
    bashio::log.info 'Adding basic auth to client config...'
    bashio::config.require 'client.password' "'client.username' is specified"
    {
        echo "    basic_auth:"
        echo "      username: $(bashio::config 'client.username')"
        echo "      password: $(bashio::config 'client.password')"
    } >> "${CONFIG_FILE}"
fi

# Add in scrape configs
{
    echo
    echo "scrape_configs:"
} >> "${CONFIG_FILE}"
if bashio::config.true 'skip_local_journal_scrape_config'; then
    bashio::log.info 'Skipping default journald scrape config...'
    if ! bashio::config.is_empty 'additional_pipeline_stages'; then
        bashio::log.warning
        bashio::log.warning "'additional_pipeline_stages' ignored since 'skip_local_journal_scrape_config' is true!"
        bashio::log.warning 'See documentation for more information.'
        bashio::log.warning
    fi
    bashio::config.require 'additional_scrape_configs' "'skip_local_journal_scrape_config' is true"

elif ! bashio::config.is_empty 'additional_pipeline_stages'; then
    bashio::log.info "Adding additional pipeline stages to default journal scrape config..."
    add_stages="$(bashio::config 'additional_pipeline_stages')"
    scrape_configs="${CUSTOM_SCRAPE_CONFIGS}"
    if ! bashio::fs.file_exists "${add_stages}"; then
        bashio::log.fatal
        bashio::log.fatal "The file specified for 'additional_pipeline_stages' does not exist!"
        bashio::log.fatal "Ensure the file exists at the path specified"
        bashio::log.fatal
        bashio::exit.nok
    fi

    yq -NP eval-all \
        'select(fi == 0) + [{"add_pipeline_stages": select(fi == 1)}]' \
        "${LOCAL_JOURNAL_SCRAPE_CONFIG}" "${add_stages}" \
    | yq -NP e \
        '[(.[0] * .[1]) | {"job_name": .job_name, "journal": .journal, "relabel_configs": .relabel_configs, "pipeline_stages": .pipeline_stages + .add_pipeline_stages}]' \
        - > "${scrape_configs}"
fi

if ! bashio::config.is_empty 'additional_scrape_configs'; then
    bashio::log.info "Adding custom scrape configs..."
    add_scrape_configs="$(bashio::config 'additional_scrape_configs')"
    if ! bashio::fs.file_exists "${add_scrape_configs}"; then
        bashio::log.fatal
        bashio::log.fatal "The file specified for 'additional_scrape_configs' does not exist!"
        bashio::log.fatal "Ensure the file exists at the path specified"
        bashio::log.fatal
        bashio::exit.nok
    fi

    if bashio::config.true 'skip_default_scrape_config'; then
        yq -NP e '[] + .' "${add_scrape_configs}" >> "${CONFIG_FILE}"
    else
        yq -NP eval-all 'select(fi == 0) + select(fi == 1)' \
            "${scrape_configs}" "${add_scrape_configs}" >> "${CONFIG_FILE}"
    fi
else
    yq -NP e '[] + .' "${scrape_configs}" >> "${CONFIG_FILE}"
fi