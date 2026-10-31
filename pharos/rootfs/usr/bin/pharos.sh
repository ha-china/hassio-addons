#!/usr/bin/with-contenv /usr/bin/bashio

# ==============================================================================
set -o nounset  # Exit script on use of an undefined variable
set -o pipefail # Return exit status of the last command in the pipe that failed
set -o errexit  # Exit script when a command exits with non-zero status
set -o errtrace # Exit on error inside any functions or sub-shells

# ==============================================================================
# RUN LOGIC
# ------------------------------------------------------------------------------

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

  cp /usr/share/zoneinfo/${VALUE} /etc/localtime
  JSON="${JSON}"',"timezone":"'"${VALUE}"'"'
  # PHAROS
  JSON="${JSON}"',"pharos":{"port":9321}'
  # DONE w/ horizon
  JSON="${JSON}"'}'

  bashio::log.debug "CONFIGURATION:" $(echo "${JSON}" | jq -c '.')

  # stop pharos
  if [ -e /var/run/pharoscontrol ]; then
    /etc/init.d/pharoscontrol stop
  fi

  if [ -d /data/pharoscontrol ]; then
    rm -fr /opt/pharoscontrol
  else
    mv /opt/pharoscontrol /data
  fi
  ln -s /data/pharoscontrol /opt/pharoscontrol

  # start pharos
  /etc/init.d/pharoscontrol start

  # run forever
  while true; do
    bashio::log.debug "Sleeping ..."
    sleep 120
    /etc/init.d/pharoscontrol status
  done
}

main "$@"
