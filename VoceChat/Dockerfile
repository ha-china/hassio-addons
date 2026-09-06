ARG BUILD_FROM
FROM $BUILD_FROM

# Setup base

# Copy data


#COPY /etc/ssl/certs /etc/ssl/certs

#COPY vocechat-server /home/vocechat-server/vocechat-server
#COPY data /home/vocechat-server/data
#COPY config /home/vocechat-server/config 
COPY docker-entrypoint.sh / 
RUN chmod +x /docker-entrypoint.sh 


#COPY /home/vocechat-server/vocechat-server /config/addons_config/vocechat-server/vocechat-server
#COPY /home/vocechat-server/data /config/addons_config/vocechat-server/data
#COPY /home/vocechat-server/config /config/addons_config/vocechat-server/config
WORKDIR /config/addons_config/vocechat-server