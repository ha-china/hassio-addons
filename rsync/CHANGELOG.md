## Changes in this version

### 🚨 Breaking changes

- The folder configuration changes in favor of the bidirectional sync. Please adjust your config to the new structure. A short glimpse:
  ```yaml
  folders:
    - local: /config
      remote: /home/user/config-target
      direction: push
    - local: /media/playlists
      remote: /home/user/cool-playlists
      options: '--archive --recursive --compress'
      direction: pull
  ```

### ✨ New features

- ✨ bidirectional sync @MB901 ([#5](https://github.com/Poeschl-HomeAssistant-Addons/rsync/pull/5))

### ⬆️ Dependency updates

- ⬆️ Update openssh-client-default to version 9.3_p2-r3 @[github-actions[bot]](https://github.com/apps/github-actions) ([#6](https://github.com/Poeschl-HomeAssistant-Addons/rsync/pull/6))
