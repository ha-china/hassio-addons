#!/command/with-contenv bashio
# shellcheck shell=bash
# ==============================================================================
# Setup options
# s6-overlay docs: https://github.com/just-containers/s6-overlay
# ==============================================================================

declare -a options
  
export Email="$(jq --raw-output '.NOIP_Email' $CONFIG_PATH)"
export Password="$(jq --raw-output '.NOIP_Password' $CONFIG_PATH)"
export NOIP_TOTP_KEY="$(jq --raw-output '.NOIP_TOTP_KEY' $CONFIG_PATH)"
export Translate="$(jq --raw-output '.Translate_Enabled' $CONFIG_PATH)"

