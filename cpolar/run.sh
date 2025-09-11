Authtoken
Authtoken=$(jq -r '.Authtoken' /data/options.json)
cpolar authtoken $Authtoken
