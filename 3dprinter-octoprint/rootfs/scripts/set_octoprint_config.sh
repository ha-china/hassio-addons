# #!/usr/bin/bash
# # Set/update parts of OctoPrint config to work with addon.

# export OCTOPRINT_HOME=/data/config/octoprint

# # Access control
# octoprint -b $OCTOPRINT_HOME config set --json accessControl '
# {
#     "localNetworks": [
#         "127.0.0.0/8",
#         "::1/128",
#         "172.30.32.2"
#     ]
# }
# '

# # API config
# octoprint -b $OCTOPRINT_HOME config set --json api '
# {
#   "allowCrossOrigin": true
# }
# '

# # Folder config
# octoprint -b $OCTOPRINT_HOME config set --json folder '
# {
#   "generated": "/tmp/octoprint/generated",
#   "timelapse_tmp": "/tmp/octoprint/timelapse/tmp"
# }
# '

# # Server config
# octoprint -b $OCTOPRINT_HOME config set --json server '
# {
#   "allowFraming": true,
#   "commands": {
#     "serverRestartCommand": "/scripts/octoprint_restart.sh",
#     "systemRestartCommand": "/scripts/system_restart.sh",
#     "systemShutdownCommand": "/scripts/system_shutdown.sh"
#   }
# }
# '
# # Webcam config
# octoprint -b $OCTOPRINT_HOME config set --json webcam '
# {
#   "ffmpeg": "/usr/bin/ffmpeg"
# }
# '