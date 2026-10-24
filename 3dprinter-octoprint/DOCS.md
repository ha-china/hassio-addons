# Startup

Set a network port in add-on settings to be able to access the WebUI.

# Add-on configuration

## Trusted proxies

*If you have placed a reverse proxy in front of Home Assistant*, by setting trusted proxies you should be able to use HTTPS. For more information, see [Caddy documentation](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy).

## Camera URL

By entering a URL to a camera you can make it available at `<OctoPrint URL>/camera/`. Note that this means that anyone with access to your OctoPrint instance can access the stream (even if not signed in! https://community.octoprint.org/t/why-is-there-no-access-control-for-the-webcam-in-octoprint-why-is-my-webcam-always-on/233). **Making this secure is up to you!**

# OctoPrint integration

You can use the OctoPrint integration with this add-on. Go to Home Assistant, add integration OctoPrint, and use the following:
- Host: `cce6f2d5-3dprinter-octoprint` (use the add-on hostname, the first part could differ).
- port: 5000
- Don't use SSL (leave unchecked)

Go to OctoPrint WebUI, you should see a request for authentication.

# Camera

This add-on does not include a camera server, that has to be installed and setup separately.

You could, for instance, use the add-on [camera-mjpg-streamer](https://github.com/fredrikbaberg/ha-3dprinter-addons/tree/main/camera-mjpg-streamer) available in the same repository. This will work for snapshots, but not necessarily for video as the video stream has to be available by the browser/app directly, **not just the host running OctoPrint**.

Instead of exposing the video stream directly, you could try to use the `Camera URL` option. **Note that this is mostly untested.** In theory you should be able to:
* Install the [camera-mjpg-streamer](https://github.com/fredrikbaberg/ha-3dprinter-addons/tree/main/camera-mjpg-streamer) add-on. Start it and make sure you can see the image from the camera in that add-on.
* In options for this add-on, set `Camera URL` to hostname of the add-on where the camera is running, e.g. `http://cce6f2d5-camera-mjpg-streamer`.
* In OctoPrint, set:
    * `Stream URL` to `http://<octoprint URL>/camera/?action=stream`
    * `Snapshot URL` to `http://<octoprint URL>/camera/?action=snapshot`. This will make it easier to check that it works, but should later be changed to the local URL, e.g. `http://cce6f2d5-camera-mjpg-streamer/?action=snapshot`.

# Remote access

If you need remote access, have a look at [remote access plugins for OctoPrint](https://plugins.octoprint.org/topics/remote_access/). Remember to **NEVER** directly portforward your OctoPrint instance to the internet!
