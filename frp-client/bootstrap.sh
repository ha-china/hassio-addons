#!/usr/bin/env bashio
build_arch=$1
frp_version=$2

frp_url="https://ghfast.top/github.com/fatedier/frp/releases/download/"
app_path="/usr/src"

function select_machine() {
    local machine;
    case $build_arch in
        "aarch64")
            machine="arm64"
        ;;
        "amd64")
            machine="amd64"
        ;;
        "armhf")
            machine="arm"
        ;;
        "armv7")
            machine="arm"
        ;;
        "i386")
            machine="386"
        ;;
    esac;

    echo "$machine"
}

function install() {
    bashio::log.info "Installing frpc"
    local machine=$(select_machine)
    local file_name="frp_${frp_version}_linux_${machine}.tar.gz"
    local file_url="${frp_url}v${frp_version}/${file_name}"
    bashio::log.info "URL ${file_url}"
    local file_dir=$(echo ${file_name} | sed 's/.tar.gz//')

    mkdir -p /tmp/$file_dir
    mkdir -p $app_path
    curl -o /tmp/${file_name} -sSL $file_url
    tar xzf /tmp/${file_name} -C /tmp

    ls -la /tmp/${file_dir}
    cp -f /tmp/${file_dir}/frpc ${app_path}/
    rm -rf /tmp/${file_name}
    rm -rf /tmp/${file_dir}
    ls -la $app_path
}

install
