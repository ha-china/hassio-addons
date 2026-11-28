#!/usr/bin/with-contenv /usr/bin/bashio

# ==============================================================================
set -o nounset  # Exit script on use of an undefined variable
set -o pipefail # Return exit status of the last command in the pipe that failed
set -o errexit  # Exit script when a command exits with non-zero status
set -o errtrace # Exit on error inside any functions or sub-shells

# ==============================================================================
# RUN LOGIC
# ------------------------------------------------------------------------------

tpeap_install()
{
  bashio::log.trace "${FUNCNAME[0]}"

  cd /opt/omada/Omada_SDN_Controller_v5.9.31_Linux_x64
  yes YES | bash -x ./install.sh &> /dev/stderr || true
}


main()
{

  bashio::log.trace "${FUNCNAME[0]}"
  local JSON
  local VALUE

  # HOST
  JSON='{"log_level":"'$(bashio::config "log_level")'","hostname":"'"$(hostname)"'","arch":"'"$(arch)"'","date":'$(/bin/date +%s)
  # TIMEZONE
  VALUE=$(bashio::config "timezone")
  if [ -z "${VALUE}" ] || [ "${VALUE}" == "null" ]; then VALUE="GMT"; fi

  bashio::log.info "Setting TIMEZONE ${VALUE}" >&2

  JSON="${JSON}"',"timezone":"'"${VALUE}"'"'
  # PHAROS
  JSON="${JSON}"',"tpeap":{"port":8088}'
  # DONE w/ horizon
  JSON="${JSON}"'}'

  bashio::log.debug "CONFIGURATION:" $(echo "${JSON}" | jq -c '.')

  # test for data
  if [ ! -d /data/tplink ]; then
    mkdir -p /data/tplink
  fi
  ln -s /data/tplink /opt

  # install tpeap
  tpeap_install

  # start tpeap
  tpeap start

  # run forever
  while true; do
    bashio::log.debug "Sleeping ..."
    sleep 120
    tpeap status
  done
}

main "$@"

