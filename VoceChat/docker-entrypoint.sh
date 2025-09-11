#!/bin/sh

#uid=${UID:=$(id -u)}
#gid=${GID:=$(id -g)}
#admin_user=${ADMIN_USER:="admin"}
#admin_password=${ADMIN_PASSWORD:="123456"}
#domain=${DOMAIN:=""}
#
#if test ! -z $domain; then
#  sed -i "s/# domain = .*\$/domain = \"$domain\"/ig" /home/vocechat-server/config/config.toml
#fi
#
#if grep -q "name = \"$admin_user\"" /home/vocechat-server/config/config.toml; then
#cat <<EOT >> /home/vocechat-server/config/config.toml
#[[user]]
#name = "$admin_user"
#password = "$admin_password"
#email = "$admin_user@$domain"
#is_admin = true
#EOT
#fi

cd /config/addons_config/vocechat-server


cp /home/vocechat-server/vocechat-server /config/addons_config/vocechat-server/vocechat-server
if [ ! -d "/config/addons_config/vocechat-server/data" ]; then
  cp -r /home/vocechat-server/data /config/addons_config/vocechat-server/data
fi
if [ ! -d "/config/addons_config/vocechat-server/config" ]; then
  cp -r /home/vocechat-server/config /config/addons_config/vocechat-server/config
fi



cmd="./vocechat-server"
if test $# -gt 0; then
  case "$1" in
      *.toml)
        cmd="./vocechat-server $@"
        break
        ;;
      --*)
        cmd="./vocechat-server $@"
        break
        ;;
      *) cmd="$@";;
  esac
fi
echo $cmd
$cmd
# exec "$cmd"
