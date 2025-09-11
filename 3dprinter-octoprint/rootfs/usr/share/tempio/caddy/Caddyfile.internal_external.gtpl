# Internal and external access. Used for:
# * Home-Assistant OctoPrint integration.
# * Accessing OctoPrint WebUI through external port.
:5000 {
	{{ if .camera_url }}
	handle_path /camera* {
		reverse_proxy {{ .camera_url }} {
			trusted_proxies {{ .trusted_proxies }}
			flush_interval -1
		}
	}
	{{ end }}
	reverse_proxy http://127.0.0.1:80 {
		trusted_proxies {{ .trusted_proxies }}
	}
}
