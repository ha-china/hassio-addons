ARG BUILD_FROM
FROM ghcr.nju.edu.cn/rdiger-36/bambulab-ams-spoolman-filamentstatus:1.1.0

# Add script and default config
COPY run.sh /run.sh

RUN chmod +x /run.sh

ENTRYPOINT ["/run.sh"]
