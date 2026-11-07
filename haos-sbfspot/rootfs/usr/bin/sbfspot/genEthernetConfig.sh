#!/usr/bin/with-contenv bashio

CFG_PATH="${1}"
CFG_PATH_UPLOAD="${2}"
#  CONFIG_PATH=/data/options.json

#  CONFIG_CONNECTION_TYPE="$(bashio::config 'Connection_Type' )"
#  CONFIG_BTADDRESS="$(bashio::config 'BTAddress' '00:00:00:00:00:00' )"
#  CONFIG_LOCALBTADDRESS="$(bashio::config 'LocalBTAddress' '00:00:00:00:00:00' )"
CONFIG_IP_ADDRESS="$(bashio::config 'IP_Address' '255.255.255.255' )"
CONFIG_PASSWORD="$(bashio::config 'Password' '0000' )"
CONFIG_MSI_ENABLED="$(bashio::config 'MIS_Enabled' '0')"
CONFIG_PLANTNAME="$(bashio::config 'Plantname')"
CONFIG_OUTPUTPATH="$(bashio::config 'OutputPath' '/data/sbfspot/%Y')"
CONFIG_OUTPUTPATHEVENTS="$(bashio::config 'OutputPathEvents' '/data/sbfspot/%Y/events')"
CONFIG_LATITUDE="$(bashio::config 'Latitude')"
CONFIG_LONGITUDE="$(bashio::config 'Longitude')"
CONFIG_CALCULATEMISSINGSPOTVALUES="$(bashio::config 'CalculateMissingSpotValues' '1')"
#  CONFIG_DATETIMEFORMAT="$(bashio::config 'DateTimeFormat' '%Y-%m-%d%H:%M:%S%z')"
CONFIG_DATEFORMAT="$(bashio::config 'DateFormat' '%d/%m/%Y')"
CONFIG_DECIMALPOINT="$(bashio::config 'DecimalPoint' 'comma')"
CONFIG_TIMEFORMAT="$(bashio::config 'TimeFormat' '%H:%M:%S%')"
CONFIG_SYNCHTIME="$(bashio::config 'SynchTime' '0')"
CONFIG_SYNCHTIMELOW="$(bashio::config 'SynchTimeLow' '1')"
CONFIG_SYNCHTIMEHIGH="$(bashio::config 'SynchTimeHigh' '3600')"
CONFIG_SUNRSOFFSET="$(bashio::config 'SunRSOffset' '900')"
CONFIG_LOCALE="$(bashio::config 'Locale' 'en-US')"
CONFIG_TIMEZONE="$(bashio::config 'Timezone')"
CONFIG_BTCONNECTRETRIES="$(bashio::config 'BTConnectRetries' '10')"
CONFIG_CSV_EXPORT="$(bashio::config 'CSV_Export' '0')"
CONFIG_CSV_EXTENDEDHEADER="$(bashio::config 'CSV_ExtendedHeader' '1')"
CONFIG_CSV_HEADER="$(bashio::config 'CSV_Header' '1')"
CONFIG_CSV_SAVEZEROPOWER="$(bashio::config 'CSV_SaveZeroPower' '1')"
CONFIG_CSV_DELIMITER="$(bashio::config 'CSV_Delimiter' 'semicolon')"
CONFIG_CSV_SPOT_TIMESOURCE="$(bashio::config 'CSV_Spot_TimeSource' 'Inverter')"
CONFIG_CSV_SPOT_WEBBOXHEADER="$(bashio::config 'CSV_Spot_WebboxHeader' '0')"
CONFIG_SQL_DATABASE="$(bashio::config 'SQL_Database' 'SBFspot')"
CONFIG_SQL_HOSTNAME="$(bashio::config 'SQL_Hostname' 'core-mariadb')"
CONFIG_SQL_PORT="$(bashio::config 'SQL_Port' '3306')"
CONFIG_SQL_USERNAME="$(bashio::config 'SQL_Username' 'sbfspot')"
CONFIG_SQL_PASSWORD="$(bashio::config 'SQL_Password' )"
CONFIG_MQTT_PUBLISHER="$(bashio::config 'MQTT_Publisher' '/usr/bin/mosquitto_pub')"
CONFIG_MQTT_HOST="$(bashio::config 'MQTT_Host' 'core-mosquitto')" 
CONFIG_MQTT_PORT="$(bashio::config 'MQTT_Port')"
#  CONFIG_MQTT_USER="$(bashio::config 'MQTT_User')"
#  CONFIG_MQTT_PASS="$(bashio::config 'MQTT_Pass')"
CONFIG_MQTT_TOPIC="$(bashio::config 'MQTT_Topic' 'homeassistant/sbfspot_{plantname}/sbfspot_{serial}')"
CONFIG_MQTT_ITEMFORMAT="$(bashio::config 'MQTT_ItemFormat' '"{key}": {value}')"
CONFIG_MQTT_ITEMDELIMITER="$(bashio::config 'MQTT_ItemDelimiter' 'comma')"
#  CONFIG_MQTT_PUBLISHERARGS="$(bashio::config 'MQTT_PublisherArgs')"
CONFIG_MQTT_DATA="$(bashio::config 'MQTT_Data')"
#  CONFIG_LOGDIR="$(bashio::config 'LogDir')"
CONFIG_LOGLEVEL="$(bashio::config 'LogLevel' 'info')"
CONFIG_PVOUTPUT_SID="$(bashio::config 'PVoutput_SID' '0123456789:12345')"
CONFIG_PVOUTPUT_KEY="$(bashio::config 'PVoutput_Key' 'fake9364fake4545afke834fake')"

cat > "$CFG_PATH" <<EOL
################################################################################
#                     ____  ____  _____                _   
#                    / ___|| __ )|  ___|__ _ __   ___ | |_ 
#                    \___ \|  _ \| |_ / __| '_ \ / _ \| __|
#                     ___) | |_) |  _|\__ \ |_) | (_) | |_ 
#                    |____/|____/|_|  |___/ .__/ \___/ \__|
#                                         |_|              
#
#  SBFspot.cfg - Configuration file for SBFspot.exe
#  SBFspot - Yet another tool to read power production of SMA� solar inverters
#  (c)2012-2018, SBF
#
#  DISCLAIMER:
#  A user of SBFspot software acknowledges that he or she is receiving this
#  software on an "as is" basis and the user is not relying on the accuracy 
#  or functionality of the software for any purpose. The user further
#  acknowledges that any use of this software will be at his own risk 
#  and the copyright owner accepts no responsibility whatsoever arising from
#  the use or application of the software. 
#
#  	SMA and Speedwire are registered trademarks of SMA Solar Technology AG
################################################################################

# SMA Inverter's Bluetooth address
# Windows: smaspot -scan
# Linux  : hcitool scan
# IMPORTANT FOR SPEEDWIRE USERS: COMMENT OUT BTADDRESS (PUT # IN FRONT)
# BTAddress=

# If multiple local BT adapters are available, select the one to use
# LocalBTAddress=

# SMA Inverter's Speedwire IP address
# If IP_Address is not set or is 0.0.0.0 SBFspot will try to detect the speedwire inverter by broadcast
# If IP_Address is set to a valid IP, SBFspot will try to connect directly to that IP without broadcast detection
# Multiple IP addresses can be provided (comma separated)
IP_Address=$CONFIG_IP_ADDRESS


# User password (default 0000)
Password=$CONFIG_PASSWORD

# MIS_Enabled (Multi Inverter Support: Default=0 Disabled)
# +------------+-------+-------------+
# | #Inverters | NetID | MIS_Enabled |
# +------------+-------+-------------+
# |      1     |   1   | Don't Care  |
# +------------+-------+-------------+
# |      1     |   >1  |      0      |
# +------------+-------+-------------+
# |      >1    |   >1  |      1      |
# +------------+-------+-------------+
MIS_Enabled=$CONFIG_MSI_ENABLED

# Plantname
Plantname=$CONFIG_PLANTNAME

# OutputPath (Place to store CSV files)
# 
# Windows: C:\Users\Public\SMAdata\%Y
# Linux  : /home/pi/smadata/%Y
# %Y %m and %d will be expanded to Year Month and Day
OutputPath=$CONFIG_OUTPUTPATH

# OutputPathEvents (Place to store CSV files for events)
# If omitted, OutputPath is used
OutputPathEvents=$CONFIG_OUTPUTPATHEVENTS

# Position of pv-plant http://itouchmap.com/latlong.html
# Example for Ukkel, Belgium
Latitude=$CONFIG_LATITUDE
Longitude=$CONFIG_LONGITUDE

# Calculate Missing SpotValues
# If set to 1, values not provided by inverter will be calculated
# eg: Pdc1 = Idc1 * Udc1
CalculateMissingSpotValues=$CONFIG_CALCULATEMISSINGSPOTVALUES

# DateTimeFormat (default %d/%m/%Y %H:%M:%S)
# For details see strftime() function
# http://www.cplusplus.com/reference/clibrary/ctime/strftime/
# DateTimeFormat= ###CONFIG_DATETIMEFORMAT
DateTimeFormat=%Y-%m-%dT%H:%M:%S%z

# DateFormat (default %d/%m/%Y)
DateFormat=$CONFIG_DATEFORMAT

# DecimalPoint (comma/point default comma)
DecimalPoint=$CONFIG_DECIMALPOINT

# TimeFormat (default %H:%M:%S)
TimeFormat=$CONFIG_TIMEFORMAT

# SynchTime (0-30 - 0=disabled, 1=once a day (default), 7=once a week, 30=once a month)
# If set to non-zero value, the plant time is synchronised with local host time
# Some inverters don't have a real-time clock
SynchTime=$CONFIG_SYNCHTIME

# SynchTimeLow (1-120 - default 1)
# SynchTimeHigh (1200-3600 - default 3600)
# Plant time is adjusted to local host time when SynchTime=1 and
# time difference is between SynchTimeLow and SynchTimeHigh limits
SynchTimeLow=$CONFIG_SYNCHTIMELOW
SynchTimeHigh=$CONFIG_SYNCHTIMEHIGH

# SunRSOffset
# Offset to start before sunrise and end after sunset (0-3600 - default 900 seconds)
SunRSOffset=$CONFIG_SUNRSOFFSET

# Locale
# Translate Entries in CSV files
# Supported locales: de-DE;en-US;fr-FR;nl-NL;es-ES;it-IT
# Default en-US
Locale=$CONFIG_LOCALE

# Timezone
# Select the right timezone in date_time_zonespec.csv
# e.g. Timezone=Europe/Brussels
Timezone=$CONFIG_TIMEZONE

# BTConnectRetries
# Number of Bluetooth Connection attempts (1-15; Default=10) 
BTConnectRetries=$CONFIG_BTCONNECTRETRIES

###########################
### CSV Export Settings ###
###########################
# With CSV_* settings you can define the CSV file format

# CSV_Export (default 1 = Enabled)
# Enables or disables the CSV Export functionality
CSV_Export=$CONFIG_CSV_EXPORT

# CSV_ExtendedHeader (default 1 = On)
# Enables or disables the SMA extended header info (8 lines)
# isep=;
# Version CSV1|Tool SBFspot|Linebreaks CR/LF|Delimiter semicolon|Decimalpoint comma|Precision 3
# etc...
# This is usefull for manual data upload to pvoutput.org
CSV_ExtendedHeader=$CONFIG_CSV_EXTENDEDHEADER

# CSV_Header (default 1 = On)
# Enables or disables the CSV data header info (1 line)
# dd/MM/yyyy HH:mm:ss;kWh;kW
# This is usefull for manual data upload to pvoutput.org
# If CSV_ExtendedHeader is enabled, CSV_Header is also enabled
CSV_Header=$CONFIG_CSV_HEADER

# CSV_SaveZeroPower (default 1 = On)
# When enabled, daily csv files contain all data from 00:00 to 23:55
# This is usefull for manual data upload to pvoutput.org
CSV_SaveZeroPower=$CONFIG_CSV_SAVEZEROPOWER

# CSV_Delimiter (comma/semicolon default semicolon)
CSV_Delimiter=$CONFIG_CSV_DELIMITER

# CSV_Spot_TimeSource (Inverter|Computer default Inverter)
CSV_Spot_TimeSource=$CONFIG_CSV_SPOT_TIMESOURCE

# CSV_Spot_WebboxHeader (Default 0 = Off)
# When enabled, use Webbox style header (DcMs.Watt[A];DcMs.Watt[B]...)
CSV_Spot_WebboxHeader=$CONFIG_CSV_SPOT_WEBBOXHEADER

###########################
###   SQL DB Settings   ###
###########################

# SQLite
# SQL_Database (Fullpath to SQLite DB)
# Windows: C:\Users\Public\SMAdata\SBFspot.db
# Linux  : /home/pi/smadata/SBFspot.db
#SQL_Database=/home/pi/smadata/SBFspot.db

# MySQL
SQL_Database=$CONFIG_SQL_DATABASE
SQL_Hostname=$CONFIG_SQL_HOSTNAME
SQL_Port=$CONFIG_SQL_PORT
SQL_Username=$CONFIG_SQL_USERNAME
SQL_Password=$CONFIG_SQL_PASSWORD

#########################
###   MQTT Settings   ###
#########################


MQTT_Publisher=$CONFIG_MQTT_PUBLISHER
MQTT_Host=$CONFIG_MQTT_HOST
MQTT_Port=$CONFIG_MQTT_PORT

MQTT_Topic=$CONFIG_MQTT_TOPIC
MQTT_ItemFormat=$CONFIG_MQTT_ITEMFORMAT
MQTT_ItemDelimiter=$CONFIG_MQTT_ITEMDELIMITER
MQTT_PublisherArgs=-h $(bashio::config 'MQTT_Host' 'core-mosquitto') -u $(bashio::config 'MQTT_User') -P $(bashio::config 'MQTT_Pass') -t {topic} -m "{{message}}" -d
MQTT_Data=$CONFIG_MQTT_DATA
EOL

#cat $1

cat > "$CFG_PATH_UPLOAD" <<EOL
################################################################################
#  SBFspotUpload.cfg - Configuration file for SBFspotUploadService/Daemon
#  (c)2012-2014, SBF (https://sbfspot.codeplex.com)
#
#  DISCLAIMER:
#  A user of SBFspotUploadService/Daemon software acknowledges that he or she is
#  receiving this software on an "as is" basis and the user is not relying on
#  the accuracy or functionality of the software for any purpose. The user
#  further acknowledges that any use of this software will be at his own risk
#  and the copyright owner accepts no responsibility whatsoever arising from
#  the use or application of the software.
#
################################################################################


################################
### Log Settings             ###
################################
# Windows: C:\Users\Public\SMAdata\Logs
# Linux  : /home/pi/smadata/logs
#LogDir=C:\Users\Public\SMAdata\Logs
#  LogDir=  ###   CONFIG_LOGDIR

#LogLevel=debug|info|warning|error (default info)
LogLevel=$CONFIG_LOGLEVEL

################################
### PVoutput Upload Settings ###
################################
#PVoutput_SID
#Map inverters to PVoutput System ID's
#PVoutput_SID=SerialNmbrInverter_1:PVoutput_System_ID_1,SerialNmbrInverter_2:PVoutput_System_ID_2
#e.g. PVoutput_SID=200212345:4321
PVoutput_SID=$CONFIG_PVOUTPUT_SID

#PVoutput_Key
#Sets PVoutput API Key
PVoutput_Key=$CONFIG_PVOUTPUT_KEY

################################
### SQL DB Settings          ###
################################
# SQL_Database (Fullpath to SQLite DB)
# Windows: C:\Users\Public\SMAdata\SBFspot.db
# Linux  : /home/pi/smadata/SBFspot.db
#SQL_Database=C:\Users\Public\SMAdata\SBFspot.db
#SQL_Database=/home/pi/smadata/SBFspot.db

# Reserved for MySQL
SQL_Database=$CONFIG_SQL_DATABASE
SQL_Hostname=$CONFIG_SQL_HOSTNAME
SQL_Port=$CONFIG_SQL_PORT
SQL_Username=$CONFIG_SQL_USERNAME
SQL_Password=$CONFIG_SQL_PASSWORD
EOL

#cat $CFG_PATH_UPLOAD

# create folders
mkdir -p "$CONFIG_OUTPUTPATH"
# mkdir -p  ##### "CONFIG_LOGDIR"
