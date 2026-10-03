#!/usr/bin/with-contenv bashio

cd /

#---- Create lognow variable
#  lognow=$(date +%Y%m%d)

#---- set tail to log out to HA log
#---- Use lognow variable to select latest file
#---- Print tail of latest log

#   message=$(echo "[SBFspot Upload Log Latest] $(tail -n1 /data/sbfspot/log/SBFspotUpload$lognow.log)")
#   bashio::log.info "${message:="Hello World..."}"
## Print the message the user supplied, defaults to "Hello World..."

# Sleep until log updated from last SBFspot run
sleep 45

bashio::log.info "[SBFspot Upload Log Latest]"     #$(tail -n1 "/data/sbfspot/log/SBFspotUpload$lognow.log")"
# just used for timestamp display in logs.

#---- Delete old log files 
#busybox command for minus 1 day
#date +%Y%m%d -d @$(($(date +%s)-86400))

# remove log files older than 3 days no longer required, however keeping for the message in the log.
##  find /data/sbfspot/log -mtime +3 -exec rm {} \; 
