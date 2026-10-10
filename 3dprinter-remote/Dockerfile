ARG BUILD_FROM="ghcr.nju.edu.cn/home-assistant/amd64-base"

FROM ${BUILD_FROM} AS final

ENV LANG C.UTF-8

RUN echo "Install base requirements." \
    && apk add --no-cache ser2net
COPY rootfs/ /
WORKDIR /

# Make files executable
RUN chmod +x /etc/cont-init.d/*.sh
RUN chmod +x /etc/services.d/*/*
