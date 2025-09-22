ARG BUILD_FROM="ghcr.nju.edu.cn/hassio-addons/base/amd64:15.0.2"
ARG BUILD_ARCH="amd64"

FROM $BUILD_FROM

# from: https://ghfast.top/github.com/raph2i/hassio-addons

# Add env
ENV LANG C.UTF-8

#Install snapcast
RUN apk add --no-cache snapcast bash alsa-plugins-pulse

# Copy data for add-on
COPY data/run.sh /
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]
