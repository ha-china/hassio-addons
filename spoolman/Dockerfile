ARG BUILD_FROM
FROM ghcr.nju.edu.cn/donkie/spoolman:0.22.1

# Expose poort die we in HA gebruiken
EXPOSE 7912

COPY run.sh /run.sh
RUN chmod +x /run.sh

ENTRYPOINT ["/run.sh"]
