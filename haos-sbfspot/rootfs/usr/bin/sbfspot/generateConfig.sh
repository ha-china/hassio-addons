CFG_PATH=$1
CFG_PATH_UPLOAD=$2
CONFIG_PATH=/data/options.json

#CONFIG_CONNECTION_TYPE="$(jq --raw-output '.Connection_Type' $CONFIG_PATH)"
#CONFIG_BLUETOOTH="$(jq --raw-output '.Bluetooth' $CONFIG_PATH)"
#CONFIG_ETHERNET="$(jq --raw-output '.Ethernet' $CONFIG_PATH)"
CONFIG_BTADDRESS="$(jq --raw-output '.BTAddress' $CONFIG_PATH)"
CONFIG_LOCALBTADDRESS="$(jq --raw-output '.LocalBTAddress' $CONFIG_PATH)"
CONFIG_IP_ADDRESS="$(jq --raw-output '.IP_Address' $CONFIG_PATH)"
CONFIG_PASSWORD="$(jq --raw-output '.Password' $CONFIG_PATH)"
CONFIG_MSI_ENABLED="$(jq --raw-output '.MIS_Enabled' $CONFIG_PATH)"
CONFIG_PLANTNAME="$(jq --raw-output '.Plantname' $CONFIG_PATH)"
CONFIG_OUTPUTPATH="$(jq --raw-output '.OutputPath' $CONFIG_PATH)"
CONFIG_OUTPUTPATHEVENTS="$(jq --raw-output '.OutputPathEvents' $CONFIG_PATH)"
CONFIG_LATITUDE="$(jq --raw-output '.Latitude' $CONFIG_PATH)"
CONFIG_LONGITUDE="$(jq --raw-output '.Longitude' $CONFIG_PATH)"
CONFIG_CALCULATEMISSINGSPOTVALUES="$(jq --raw-output '.CalculateMissingSpotValues' $CONFIG_PATH)"
CONFIG_DATETIMEFORMAT="$(jq --raw-output '.DateTimeFormat' $CONFIG_PATH)"
CONFIG_DATEFORMAT="$(jq --raw-output '.DateFormat' $CONFIG_PATH)"
CONFIG_DECIMALPOINT="$(jq --raw-output '.DecimalPoint' $CONFIG_PATH)"
CONFIG_TIMEFORMAT="$(jq --raw-output '.TimeFormat' $CONFIG_PATH)"
CONFIG_SYNCHTIME="$(jq --raw-output '.SynchTime' $CONFIG_PATH)"
CONFIG_SYNCHTIMELOW="$(jq --raw-output '.SynchTimeLow' $CONFIG_PATH)"
CONFIG_SYNCHTIMEHIGH="$(jq --raw-output '.SynchTimeHigh' $CONFIG_PATH)"
CONFIG_SUNRSOFFSET="$(jq --raw-output '.SunRSOffset' $CONFIG_PATH)"
CONFIG_LOCALE="$(jq --raw-output '.Locale' $CONFIG_PATH)"
CONFIG_TIMEZONE="$(jq --raw-output '.Timezone' $CONFIG_PATH)"
CONFIG_BTCONNECTRETRIES="$(jq --raw-output '.BTConnectRetries' $CONFIG_PATH)"
CONFIG_CSV_EXPORT="$(jq --raw-output '.CSV_Export' $CONFIG_PATH)"
CONFIG_CSV_EXTENDEDHEADER="$(jq --raw-output '.CSV_ExtendedHeader' $CONFIG_PATH)"
CONFIG_CSV_HEADER="$(jq --raw-output '.CSV_Header' $CONFIG_PATH)"
CONFIG_CSV_SAVEZEROPOWER="$(jq --raw-output '.CSV_SaveZeroPower' $CONFIG_PATH)"
CONFIG_CSV_DELIMITER="$(jq --raw-output '.CSV_Delimiter' $CONFIG_PATH)"
CONFIG_CSV_SPOT_TIMESOURCE="$(jq --raw-output '.CSV_Spot_TimeSource' $CONFIG_PATH)"
CONFIG_CSV_SPOT_WEBBOXHEADER="$(jq --raw-output '.CSV_Spot_WebboxHeader' $CONFIG_PATH)"
CONFIG_SQL_DATABASE="$(jq --raw-output '.SQL_Database' $CONFIG_PATH)"
CONFIG_SQL_HOSTNAME="$(jq --raw-output '.SQL_Hostname' $CONFIG_PATH)"
CONFIG_SQL_PORT="$(jq --raw-output '.SQL_Port' $CONFIG_PATH)"
CONFIG_SQL_USERNAME="$(jq --raw-output '.SQL_Username' $CONFIG_PATH)"
CONFIG_SQL_PASSWORD="$(jq --raw-output '.SQL_Password' $CONFIG_PATH)"
CONFIG_MQTT_PUBLISHER="$(jq --raw-output '.MQTT_Publisher' $CONFIG_PATH)" 
CONFIG_MQTT_HOST="$(jq --raw-output '.MQTT_Host' $CONFIG_PATH)"
CONFIG_MQTT_PORT="$(jq --raw-output '.MQTT_Port' $CONFIG_PATH)"
CONFIG_MQTT_TOPIC="$(jq --raw-output '.MQTT_Topic' $CONFIG_PATH)"
CONFIG_MQTT_ITEMFORMAT="$(jq --raw-output '.MQTT_ItemFormat' $CONFIG_PATH)"
CONFIG_MQTT_ITEMDELIMITER="$(jq --raw-output '.MQTT_ItemDelimiter' $CONFIG_PATH)"
CONFIG_MQTT_PUBLISHERARGS="$(jq --raw-output '.MQTT_PublisherArgs' $CONFIG_PATH)"
CONFIG_MQTT_DATA="$(jq --raw-output '.MQTT_Data' $CONFIG_PATH)"
CONFIG_LOGDIR="$(jq --raw-output '.LogDir' $CONFIG_PATH)"
CONFIG_LOGLEVEL="$(jq --raw-output '.LogLevel' $CONFIG_PATH)"
CONFIG_PVOUTPUT_SID="$(jq --raw-output '.PVoutput_SID' $CONFIG_PATH)"
CONFIG_PVOUTPUT_KEY="$(jq --raw-output '.PVoutput_Key' $CONFIG_PATH)"

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
  BTAddress=$CONFIG_BTADDRESS

# If multiple local BT adapters are available, select the one to use
  LocalBTAddress=$CONFIG_LOCALBTADDRESS

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
  DateTimeFormat=$CONFIG_DATETIMEFORMAT

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
  MQTT_PublisherArgs=$CONFIG_MQTT_PUBLISHERARGS
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
# LogDir=C:\Users\Public\SMAdata\Logs
  LogDir=$CONFIG_LOGDIR

# LogLevel=debug|info|warning|error (default info)
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
 SQL_Username=$CONFIG_SQL_USERNAME
 SQL_Password=$CONFIG_SQL_PASSWORD
EOL

#cat $CFG_PATH_UPLOAD

# create folders
mkdir -p "$CONFIG_OUTPUTPATH"
mkdir -p "$CONFIG_LOGDIR"