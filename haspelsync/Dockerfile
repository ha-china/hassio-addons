ARG BUILD_FROM
FROM ghcr.nju.edu.cn/rdiger-36/haspelsync:1.4.2

# Allow startup permission management
USER root
RUN apk add --no-cache su-exec

COPY run.sh /run.sh

# Normalize line endings and set executable permissions
RUN sed -i 's/\r$//' /run.sh \
    && chmod 755 /run.sh

# Explicitly start through the shell
ENTRYPOINT ["/bin/sh", "/run.sh"]
