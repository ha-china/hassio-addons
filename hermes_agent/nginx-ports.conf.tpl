%%DASHBOARD_TOKEN_MAPS%%

    # ── HTTP (direct LAN access) ─────────────────────────────────────
    server {
        listen %%HTTP_PORT%%;
        server_name _;

        %%AUTH_BASIC_ON%%

        location = / {
            %%AUTH_BASIC_OFF%%
            root /var/www;
            try_files /landing.html =404;
            add_header Cache-Control "no-cache";
        }

%%HTTP_PROFILE_LOCATIONS%%

        location = /cert/ca.crt {
            %%AUTH_BASIC_OFF%%
            alias %%CERTS_DIR%%/ca.crt;
            default_type application/x-x509-ca-cert;
            add_header Content-Disposition 'attachment; filename="hermes-agent-ca.crt"';
        }

        location = /health {
            %%AUTH_BASIC_OFF%%
            access_log off;
            return 200 "OK\n";
            add_header Content-Type text/plain;
        }
    }

    # ── HTTPS (direct LAN access, TLS) ───────────────────────────────
    server {
        listen %%HTTPS_PORT%% ssl;
        server_name _;

        ssl_certificate %%CERTS_DIR%%/server.crt;
        ssl_certificate_key %%CERTS_DIR%%/server.key;
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers HIGH:!aNULL:!MD5;

        %%AUTH_BASIC_ON%%

        location = / {
            %%AUTH_BASIC_OFF%%
            root /var/www;
            try_files /landing.html =404;
            add_header Cache-Control "no-cache";
        }

%%HTTPS_PROFILE_LOCATIONS%%

        location = /cert/ca.crt {
            %%AUTH_BASIC_OFF%%
            alias %%CERTS_DIR%%/ca.crt;
            default_type application/x-x509-ca-cert;
            add_header Content-Disposition 'attachment; filename="hermes-agent-ca.crt"';
        }

        location = /health {
            %%AUTH_BASIC_OFF%%
            access_log off;
            return 200 "OK\n";
            add_header Content-Type text/plain;
        }
    }
