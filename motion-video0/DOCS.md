# &#127916; `motion` Classic configuration 
The `motion` add-on processes video information into motion detection JSON events, multi-frame GIF animations, and one representative frame with entities detected, classified, and annotated (n.b. requires Open Horizon `yolo4motion` service).  This addon is designed to work with a variety of sources, including:

+ `3GP` - motion-detecting WebCams (e.g. Linksys WCV80n); received via the `FTP` community _addon_
+ `MJPEG` - network accessible cameras providing Motion-JPEG real-time feed
+ `V4L2` - video for LINUX (v2) for direct attach cameras, e.g. Sony Playstation3 Eye camera or RaspberryPi v2

The key options for configuration of this _addon_; the _group_, _device_, and _camera_ options identify the collection of computers and associated video sources; the `MQTT` broker is **required** to receive messages from this _addon_ as well as to enable the [`motion-ai`](http://github.com/dcmartin/motion-ai) solution.

## `group`, `device`, and `client`
The _identifiers_ distinguish collections as well as individuals; camera identifiers _must_ be unique across the group.

+ `group` - identifier for collection of devices; default: `motion`
+ `device` - identifier for the computer; default: _none_
+ `client` - limits topic subscriptions to one or all (n.b. `+`) devices

&#9995; **Identifiers** may **ONLY** include lower-case letters (`a-z`), numbers (`0-9`), and _underscore_ (`_`).

## `mqtt`
+ `mqtt.host` - if using a single MQTT broker on a LAN, utilize the TCP/IPv4 addresss, e.g. `192.168.1.40`.
+ `mqtt.port` - TCP/IP port number; default: `1883`
+ `mqtt.username` - credentials for access to broker; default: _none_
+ `mqtt.password` - credentials for access to broker; default: _none_

## `cameras` **required**
+ `cameras[].name` - identifier for the camera; unique across _device_ and _group_; default: _none_
+ `cameras[].type` - `netcam`, `ftp`, `mqtt`; `local` is valid only for [motion-video0](http://github.com/dcmartin/addon-motion-video) version
+ `cameras[].w3w` - location of camera as three strings; from what3words.com; use `[]` for none

## `cameras` _optional_
+ `cameras[].top` - top location of icon in percent (0-95)
+ `cameras[].left` - left location of icon in percent (0-95)
+ `cameras[].icon` - icon for camera from materialdesignicons.com (n.b. not including the `mdi:` component)
+ `cameras[].framerate` - number of frames per second to capture/attempt
+ `cameras[].threshold_percent` - pecentage of pixels changed; over-ride count with `threshold`
+ `cameras[].threshold` - number pixels changed

### Example
```
group: motion
device: kelispond
client: kelispond
timezone: America/Los_Angeles
mqtt:
  host: core-mosquitto
  port: '1883'
  username: username
  password: password
cameras:
  - name: kelispond
    type: local
    w3w: []
    framerate: 3
    threshold_percent: 1
```

# Details
The following section details the attributes which may be used to configure the _addon_.

### Camera _type_: `network`
Network cameras are accessed directly by the _addon_ using one of three transports: `MJPEG`, `RTSP`, or `HTTP`; different cameras
require specific transports and associated attributes, e.g. credentials.  Examples are listed below:

#### `MJPEG`
```
  - name: shedcam
    type: netcam
    w3w: []
    width: 640
    height: 480
    netcam_url: 'mjpeg://192.168.1.92:8090/1'
    netcam_userpass: 'username:password'
    threshold_percent: 1
```

#### `RTSP`
```
  - name: testcam
    type: netcam
    w3w: []
    framerate: 3
    netcam_url: 'rtsp://192.168.93.3/live'
    threshold_percent: 1
    netcam_userpass: 'username:password'
    width: 1920
    height: 1080
```

#### `HTTP`
```
  - name: road
    w3w: []
    netcam_url: 'http://192.168.1.36:8081/img/video.mjpeg'
    type: netcam
    netcam_userpass: 'username:password'
    width: 640
    height: 480
```

### Camera  _type_: `ftpd`

```
  - name: backyard
    w3w: []
    type: ftpd
    netcam_url: 'http://192.168.1.183/img/video.mjpeg'
    icon: texture-box
    netcam_userpass: '!secret netcam-userpass'
```

# Example (_subset_)

```
...
group: motion
device: raspberrypi
client: raspberrypi
timezone: America/Los_Angeles
cameras:
  - name: local
    type: local
    w3w: []
    top: 50
    left: 50
    icon: webcam
    width: 640
    height: 480
    framerate: 10
    minimum_motion_frames: 30
    event_gap: 60
    threshold: 1000
  - name: network
    type: netcam
    w3w:
      - what
      - three
      - words
    icon: door
    netcam_url: 'rtsp://192.168.1.224/live'
    netcam_userpass: 'username:password'
    width: 640
    height: 360
    framerate: 5
    event_gap: 30
    threshold_percent: 2
```
