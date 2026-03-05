ARG BUILD_FROM
FROM ghcr.nju.edu.cn/donkie/spoolman:0.23.1

# Expose port
EXPOSE 7912

COPY run.sh /run.sh
RUN chmod +x /run.sh

ENTRYPOINT ["/run.sh"]
