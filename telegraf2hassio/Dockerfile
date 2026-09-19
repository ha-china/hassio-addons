ARG BUILD_FROM
FROM $BUILD_FROM

LABEL João Loureiro <joaofl@gmail.com>

# Set shell

ENV LANG C.UTF-8

# Install requirements for add-on
RUN apk update && apk add --no-cache bash python3 py3-paho-mqtt && \
                            rm -rf /var/cache/apk/*

COPY source/* /opt/telegraf2hassio/
COPY run.sh /
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]
