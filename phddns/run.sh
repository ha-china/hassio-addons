/usr/bin/phtunnel -l /var/log/phddns/phtunnel.log -c /data/phtunnel.json -r -i 11431 -k 9bb2a2e255c5fd80 -e client-ua:HSKEMD/5.1.0/Raspi/20060501;vendor:Oray &



#phddns enable
#phddns start
sleep 10
phddns status

while true; do
    sleep 60
    phddns status
done
