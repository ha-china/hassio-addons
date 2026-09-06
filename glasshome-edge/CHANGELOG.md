# Changelog

## 1.3.0

Everything from the 1.3.0 betas, rolled up for the stable channel. Since 1.2.0:

### New Features

- Give each person their own access: which rooms they see, whether they can control things, which sensitive devices (locks, alarm, cameras, garage) stay off limits, which dashboards they open, and whether their access ends on a date. Settings, People & Devices.
- Shared screens are now their own members: a kitchen tablet gets its own access, starts on its own dashboard, uses its own theme, and no longer borrows whoever paired it.
- Invite someone by link: they pick a password and land on the dashboards you gave them. Links work once and expire after 7 days; resend or cancel them from People & Devices.
- People you invited sign in with their own name, exactly as they typed it when they joined, from the "Local sign in" door on the welcome screen.
- Everyone can see their own row in People & Devices: what they have access to and where they are signed in.
- After this update, admins see a one-time note in People & Devices to review screens that were paired before it.

### Changes

- Limited access is enforced everywhere: people with limited access only see and control what you gave them, in the app and in every widget, and a change applies within a second. Removing someone signs them out of every device right away. When access ends, one clear screen says so, with "Sign in again" and "Sign out".
- People who cannot edit dashboards no longer see the edit and add-widget controls, and the server refuses edits from them. People limited to some dashboards only see those.
- Only admins can change the household theme, background, general settings, the Home Assistant address, remote access, pair devices, approve device codes, and install or remove widgets. Pictures follow the dashboard rule: people who can edit dashboards can add and delete them.
- Your Home Assistant login token now stays on the GlassHome server. The app, every widget, and every signed-in device reach Home Assistant only through GlassHome, so nothing in the browser ever holds the key.
- If GlassHome loses its link to Home Assistant (for example after a password reset there), admins see a banner with a one-tap "Sign in to Home Assistant" button; everyone else is told to ask someone who manages the home.
- People with limited access cannot use energy dashboards or edit entity settings yet; full members and admins are unaffected.

### Improvements

- Panels that open over the dashboard, like widget settings, adding a person, or pairing a screen, now scroll inside themselves. On a wall tablet a long form no longer pushes its buttons off the bottom of the screen, and the close button is easier to hit.
- In Settings, a group's label now sits right above its own rows instead of floating under the card title.

### Security

- Someone guessing a password or an invite link can no longer dodge the sign-in limit by faking their address.

### Fixes

- Turning on automatic widget updates, or approving a widget's new permissions, now takes effect straight away. It used to sit and wait for the next scheduled check, up to six hours later.
- Your dashboard now loads at full speed when your home has no internet. It used to sit on "Updating widgets" and then show an empty screen for up to half a minute before your widgets appeared, even though every widget was already on your box.
- When a widget update fails, the message now names the widget and says why, instead of just counting a failure.

## 1.3.0-beta.8

### Security

- Someone guessing a password or an invite link can no longer dodge the sign-in limit by faking their address.

### Fixes

- In Settings, a group's label now sits right above its own rows instead of floating under the card title.
- When a widget update fails, the message now names the widget and says why, instead of just counting a failure.

## 1.3.0-beta.7

### Fixes

- Turning on automatic widget updates, or approving a widget's new permissions, now takes effect straight away. It used to sit and wait for the next scheduled check, up to six hours later.
- Your dashboard now loads at full speed when your home has no internet. It used to sit on "Updating widgets" and then show an empty screen for up to half a minute before your widgets appeared, even though every widget was already on your box.

## 1.3.0-beta.4

### Improvements

- Panels that open over the dashboard, like widget settings, adding a person, or pairing a screen, now scroll inside themselves. On a wall tablet a long form no longer pushes its buttons off the bottom of the screen, and the close button is easier to hit.

## 1.3.0-beta.1

### New Features

- Give each person their own access: which rooms they see, whether they can control things, which sensitive devices (locks, alarm, cameras, garage) stay off limits, which dashboards they open, and whether their access ends on a date. Settings, People & Devices.
- Invite someone by link: they pick a password and land on the dashboards you gave them. Links work once and expire after 7 days; resend or cancel them from People & Devices. They sign in with their own name from the "Local sign in" door on the welcome screen.
- Shared screens are now their own members: a kitchen tablet gets its own access, starts on its own dashboard, uses its own theme, and no longer borrows whoever paired it.
- Everyone can see their own row in People & Devices: what they have access to and where they are signed in. When access ends, one clear screen says so, with "Sign in again" and "Sign out".
- After this update, admins see a one-time note in People & Devices to review screens that were paired before it.

### Changes

- Your Home Assistant login token now stays on the GlassHome server. The app, every widget, and every signed-in device reach Home Assistant only through GlassHome, so nothing in the browser or the mobile app ever holds the key.
- If GlassHome loses its link to Home Assistant (for example after a password reset there), admins see a banner with a one-tap "Sign in to Home Assistant" button; everyone else is told to ask someone who manages the home.
- Admins only: changing the household theme, background and general settings, installing or removing widgets, changing or disconnecting the Home Assistant address, turning remote access on and off, and pairing devices or approving device codes.
- People who cannot edit dashboards no longer see the edit and add-widget controls, and people limited to some dashboards only see those. Pictures follow the same rule: whoever can edit dashboards can add and delete them, and clearing out unused pictures is left to admins.
- Removing someone signs them out of every device right away, and a change to what someone can see applies within a second.
- People with limited access cannot use energy dashboards or edit entity settings yet; full members and admins are unaffected.

## 1.2.0

Everything from the 1.2.0 beta, rolled up for the stable channel. Since 1.1.3:

### New Features

- Settings has a new Media section: how much room your pictures take, a row of the ones you added most recently, and an Upload button. "Browse library" opens the full collection a page at a time, where you can see any picture full size and delete the ones no widget is using. Household admins can also raise or lower how much can be stored.
- A new Picture Frame widget shows your own photos on a dashboard, one at a time or as a slideshow that fades from one to the next.

### Improvements

- Very large background photos are now turned away instead of being opened. A wallpaper over roughly 40 megapixels, a long panorama or a big scan, could eat enough memory to slow your home down or take the dashboard offline while it loaded. If yours is refused, scale it down in any photo app and upload it again.

## 1.2.0-beta.1

### Changes

- Settings has a new Media section: how much room your pictures take, a row of the ones you added most recently, and an Upload button. "Browse library" opens the full collection a page at a time, where you can see any picture full size and delete the ones no widget is using. Household admins can also raise or lower how much can be stored.
- A new Picture Frame widget shows your own photos on a dashboard, one at a time or as a slideshow that fades from one to the next.
- Very large background photos are now turned away instead of being opened. A wallpaper over roughly 40 megapixels, a long panorama or a big scan, could eat enough memory to slow your home down or take the dashboard offline while it loaded. If yours is refused, scale it down in any photo app and upload it again.

## 1.1.3

### Changes

- Widget SDK bumped to 1.11.0.

## 1.1.2

### Bug Fixes

- Widgets no longer reload from scratch when you come back to the dashboard tab or after you place, remove, or edit another widget. Open sections and scroll positions stay where you left them, and to-do widgets stop flashing a "Widget unmounted" error while their list refreshes.

## 1.1.1

### Bug Fixes

- Fixed build flag handling; the dashboard loads a little lighter.

## 1.1.0

Everything from the 1.1.0 betas, rolled up for the stable channel. Since 1.0.0:

### New Features

- Widgets can live on some screen sizes and not others: your phone dashboard can stay short while your desktop stays full.
- The widget browser shows a picture of each widget before you install it, in light and dark.
- Setup and Settings draw how your home connects (your browser, GlassHome, Home Assistant) and mark the link that is failing.
- Widgets can show your Home Assistant calendars and to-do lists, within the permissions you granted.

### Improvements

- Widgets respect the smallest and largest sizes their author set.
- Rearranging a dashboard saves gesture by gesture, and two people can rearrange the same dashboard at once without overwriting each other.
- Setup names the connection that failed, warns when a Home Assistant address won't work from outside your home, and if your device can't open Home Assistant's sign-in page within a few seconds it brings you back and suggests the IP address.
- Settings and notifications read more calmly: quieter badges, names and roles on one line, short titles with the detail underneath.
- Reduced-transparency mode and the Midnight Glass theme look right inside widgets.

### Security

- A widget can only reach the devices you approved when you installed it. No catalog widget misused this and your Home Assistant password was never exposed, but a widget you installed could have controlled more than you allowed.
- A website you visit can no longer reach your dashboard on your behalf, and adding a widget from a typed address can no longer make your GlassHome server fetch from your own network.
- Remote-access tokens are no longer sent to the browser.

### Bug Fixes

- A widget whose settings could not be upgraded keeps them instead of falling back to defaults.
- Updating all widgets at once asks for permission when one of them wants new access.
- Sensor history charts keep drawing when a second widget shows the same sensor.
- The custom theme colour picker shows the right swatch for strongly coloured shades.
- Going back during setup no longer lands on a blank step; help links open the right page.

## 1.1.0-beta.7

### Bug Fixes

- Signing in with `http://homeassistant.local:8123` works again. Since beta.1, pressing Continue after entering Home Assistant by name sent your browser to an address only the add-on itself could reach, so the page never loaded and nothing explained why. Your browser is now sent to exactly the address you typed.
- If your device can't open Home Assistant's sign-in page within a few seconds, the setup screen brings you back and suggests using the IP address, instead of leaving you waiting on a blank page.

## 1.1.0-beta.6

### Bug Fixes

- Sensor history charts keep drawing when a second widget shows the same sensor. Removing one of the two used to clear the shared history, and the widget still on screen quietly stopped adding new readings until you reloaded.
- The custom theme colour picker shows the right swatch for strongly coloured shades, instead of one slightly off from the colour actually applied.

### Security

- A website you visit can no longer talk to your dashboard on your behalf. A page hosted on a domain named to look like a home network address could reach your GlassHome server while you were signed in, and read what it returned.
- Adding a widget from a hand-typed address can no longer be used to make your GlassHome server fetch from addresses on your own network or from the machine it runs on.

## 1.1.0-beta.5

### Bug Fixes

- To-do list widgets show your lists again. Widgets that ask Home Assistant for a list, like your to-dos, could send the question but never receive the answer, so they sat empty. The answer now reaches them, and only for the lists you granted access to.

## 1.1.0-beta.4

### Bug Fixes

- Calendar widgets show your events again. Since beta.2, widgets that display Home Assistant calendars came up empty, because the way they read calendar data was closed off when widget permissions were tightened. They now have a proper way to read calendars, and it stays inside the permissions you granted.
- Help and documentation links in the app open the right page again instead of landing on a missing one.

## 1.1.0-beta.3

### Bug Fixes

- Your dashboard connects to Home Assistant again. On beta.2 it could sit on "reachable but not connected" forever: GlassHome reached your home, then no devices ever arrived and nothing on the dashboard worked.
- When Home Assistant answers but the live connection isn't up, the dashboard now says so and points at Disconnect and connect again, instead of telling you to try reconnecting, which was not something you could do from that screen.

## 1.1.0-beta.2

### Bug Fixes

- Widgets work again. In beta.1 they either showed an error tile or looked normal and did nothing: tapping a light or a switch did not reach your home, and widget settings would not save.
- Widget previews in the browser render again, and at the size the widget will actually be on your dashboard rather than a size smaller.

### Security

- A widget can now only reach the devices you approved when you installed it. Previously a widget could bypass those permissions and control anything in your home. No widget in the catalog did this, and your Home Assistant password was never exposed, but a widget you installed could have.

## 1.1.0-beta.1

### New Features

- Widgets can now live on some screen sizes and not others. Adding a widget asks whether it should appear on every size or only the one you're using, and removing one asks the same, so your phone dashboard can stay short while your desktop stays full.
- The widget browser shows a picture of each widget before you install it, rendered in both light and dark.
- Setup and Settings now draw how your home connects: your browser, GlassHome, and Home Assistant, with the link that is failing marked so you can see where a connection stopped rather than guessing.

### Improvements

- Widgets now respect the smallest and largest sizes their author set, so resizing can no longer squash one below the size it needs to be readable.
- Moving and resizing widgets now saves more reliably: each finished gesture is stored on its own, so a flaky connection can no longer lose a whole dashboard's arrangement.
- Two people can rearrange the same dashboard at the same time without overwriting each other's whole layout. Each widget keeps the position it was given last, and a widget one person removes stays removed.
- Setup names the connection that failed instead of showing a generic error, warns you when a Home Assistant address will not work from outside your home, and points a stuck sign-in at Quick Connect.
- Home Assistant addresses ending in `.local` now work for browser sign-in.
- Going back in your browser during setup no longer lands you on a blank step.
- Settings reads more calmly: quieter device badges, member names and their roles on one line, and a count beside the entity list.
- Notifications that were one long line are now a short title with the detail underneath.
- Widgets look right again with reduced-transparency mode on, and the Midnight Glass theme matches the rest of the palette.

### Bug Fixes

- A widget whose settings could not be upgraded no longer loses them. Previously a failed upgrade replaced your configuration with the widget's defaults and saved that over the original.
- Updating a widget's settings no longer looks at another household's copy of that widget when deciding which version it is on.
- Updating all widgets at once now asks for permission when one of them wants new access, instead of skipping the question.
- Remote-access tokens are no longer sent to the browser. They stayed on your GlassHome box, but they were included in a settings response where nothing needed them.
- Signing in stops with a clear error if Home Assistant cannot be recorded properly, rather than continuing into a half-connected state.

## 1.0.0

GlassHome v1. Everything since 0.10.0:

### New Features

- A short, personal welcome note the first time you open GlassHome.
- Add a phone or tablet by scanning a QR code, with no tokens to copy. Devices without a camera can enter a 6-digit code on an on-screen numpad instead, and you see clear progress while it connects.
- Settings now tells you when a newer version of GlassHome is available, showing the version you're on and the one to update to.
- Widgets can use icons from any icon set, not just a small built-in selection. Icons are cached on your box after first use, so they keep working offline, and they no longer flicker or shift while you scroll.
- Turn off every light or lock every door straight from the dashboard header: the lights and lock chips are now buttons.

### Improvements

- The dashboard's frosted-glass blur is faster and lighter, especially with many widgets on screen. A new Blur setting lets you choose: Performant (the new default, the same look at a fraction of the cost), Dynamic (real-time and most accurate, heaviest on the device), or None (solid surfaces, the lightest option).
- Remote access lives in one place: a single card for the managed GlassHome tunnel and your own addresses (a home reverse proxy, a VPN, or your own tunnel). A reverse proxy at home is free; a public address needs Pro.
- The mobile app now works away from home, reaching Home Assistant securely through your dashboard server. Album art and camera images load over remote access too, not just on your home network.
- No more dead ends when you're away: if Home Assistant can't be reached, that option is clearly marked unavailable with what to do instead, rather than a browser error page.
- A redesigned sign-in screen with clear, colour-coded options, the best one for your situation highlighted, your home's name shown, and your Home Assistant address filled in for you.
- Browsing and adding widgets share one cleaner card layout, with a tidy search-and-filter bar and a side-by-side view of the widget you're inspecting.
- The Area widget was redesigned as a clean column of tiles, making each light, switch, and sensor easier to see and tap.
- Installing a community widget shows one clear permission dialog instead of two, listing exactly what it wants access to, with a "How widgets are kept safe" explainer.
- Pro now covers your whole home: when one member has Pro, every member, kiosk, and family phone gets Pro too, and it keeps working for two weeks if your home goes offline.
- Settings shows you and your home together in a single household card, and the Devices screen groups connected devices by person and clears out stale sessions.
- Widgets download as smaller, faster bundles and update automatically after you upgrade.
- Badges and buttons across Settings got a visual refresh: frosted status chips, polished gradient Pro and Early Bird badges, and pill-shaped buttons. Dropdown menus have a consistent size and no longer waste space on mobile.
- The dashboard header temperature matches the unit you set in Home Assistant, switching between °C and °F with it.

### Security

- Community widgets ask permission before touching your home and can only do what you approve; if a widget ever tries to do more, the attempt is blocked and you get a notification. Each widget runs in its own isolated space, can't interfere with the rest of your dashboard, and can never send your home's data anywhere except your Home Assistant and GlassHome. Widgets never see your Home Assistant login, and your Home Assistant token is no longer handed to the browser. A help page explains, in plain language, what widgets can and cannot do: glasshome.app/docs/widget-security.

### Fixes

- Signing in with your GlassHome account reliably lands you on your home and your dashboards, instead of an empty page or a duplicate "Home". Connecting your account from Settings fixes accounts stuck on earlier versions and cleans up the duplicate profile automatically. Failed sign-ins now show a clear message instead of a silent dead end.
- Home Assistant admins are admins in GlassHome too, so you can manage your home's members; your role updates on your next sign-in. Every home always has a dashboard, restored on next sign-in if yours was missing.
- Sign-in works behind a reverse proxy that terminates HTTPS, and Home Assistant error messages show the real text instead of "[object Object]".
- Notification banners show the correct colours in light mode and under custom themes.
- Performant Blur (the default) now works on iPhone, iPad, and Mac. Changing your background updates the frosted glass instantly, and the frosted look is identical in every blur mode.
- Widgets size correctly across more tile shapes, no longer look too small right after the opening animation, and "ghost" tiles no longer linger in empty slots.
- Reduce Blur and Reduce Motion now apply inside widgets too, and in dark mode widgets follow your custom theme's colours and corner roundness.
- A widget that fails to auto-update quietly retries once before showing an error, and widgets no longer freeze when switching between dashboards.
- The interactive demo loads with every widget fully styled, and each visitor gets their own private demo that tidies itself up afterward.
- The Home Assistant logo was updated to its current mark, and the icon next to a page's title is properly centred.

## 1.0.0-beta.12

### Improvements

- Settings now tells you when a newer version of GlassHome is available. The General section shows your current version, and a badge appears with the version to update to when there's a newer release.

### Fixes

- Notification banners now show the correct colors in light mode and under custom themes, instead of looking washed-out grey.

## 1.0.0-beta.11

### Improvements

- Badges and buttons across Settings got a visual refresh for a cleaner, more consistent look: frosted status chips, polished gradient Pro and Early Bird badges, and pill-shaped buttons.
- Entity and area pickers now only load live data while they're open, so opening Settings feels lighter and snappier.

### Fixes

- Fixed Home Assistant sign-in failing when GlassHome runs behind a reverse proxy that terminates HTTPS.
- Home Assistant error messages now show the real text instead of "[object Object]".

## 1.0.0-beta.10

### Improvements

- Settings now shows you and your home together in a single household card, instead of two separate "You" and "Your Home" cards.
- The Devices screen groups your connected devices by person and clears out stale sessions, so the list stays tidy.
- The Remote Access settings got a visual refresh: the managed tunnel and your own addresses are now clearly separated with icons and dividers.

### Fixes

- Widgets now size correctly across more tile shapes. State cards size to the tile's height as well as its width, so they no longer look cramped or oversized.
- Fixed "ghost" widget tiles that could linger in empty slots, and gave every widget slot the same consistent look.
- Updated the Home Assistant logo to its current mark.

## 1.0.0-beta.9

### Improvements

- Adding a phone or tablet is now as easy as scanning a QR code. Open the new device dialog, scan the code with the new device, and confirm with one tap, no sign-in or typing needed. Devices without a camera can enter a 6-digit code instead, with an on-screen numpad for touch screens. While a device is connecting you now see clear progress indicators instead of a frozen screen.
- The sign-in screen now fills in your Home Assistant address for you, taken from your home's settings, so there's one less thing to type. You can still change it if you need to. The welcome screen also fits better on short screens instead of pushing content off the bottom.
- The Area widget was redesigned. It now shows your room's controls as a clean column of tiles, making each light, switch, and sensor easier to see and tap.
- Installing a community widget now shows one clear permission dialog instead of two back-to-back popups. It lists exactly what the widget wants access to, with a "How widgets are kept safe" explainer if you want the details.
- Widgets can now use icons from any icon set, not just a small built-in selection. Icons are cached on your box after first use, so they keep working offline. Icons also no longer flicker or shift while you scroll.
- Widgets now download as smaller, faster bundles and update automatically after you upgrade.
- The dropdown menus in Settings now have a consistent size and no longer waste space on mobile.

### Fixes

- Performant Blur (the default frosted-glass mode) now works on iPhone, iPad, and Mac. Before, glass surfaces on those devices showed no blur at all.
- Changing your background now updates the frosted glass instantly, instead of showing the old background's frost until you reloaded.
- The frosted-glass look is now identical in every blur mode, with the same strength and tint everywhere. Kiosks and tablets also get their frost instantly after a reload instead of re-computing it.
- Widgets no longer appear slightly too small right after the dashboard's opening animation.

## 1.0.0-beta.8

### Fixes

- Album art and camera images now load when you're away from home, not just on your home network. Media-player widgets show cover art and camera widgets show their picture over remote access, the same as at home.

## 1.0.0-beta.7

### Improvements

- The dashboard's frosted-glass blur is now faster and lighter, especially when you have many widgets on screen. A new Blur setting lets you choose how it looks: Performant Blur (the new default, the same frosted look at a fraction of the cost), Dynamic Blur (real-time and most accurate, but heaviest on the device), or No Blur (solid surfaces, the lightest option).
- The lights and lock summary in the dashboard header are now two buttons. Tap the lights chip to turn off every light in view, or the lock chip to lock every door, right from the dashboard.

### Fixes

- The icon next to a page's title is now properly centered.

## 1.0.0-beta.6

### Improvements

- Remote access now lives in one place. Settings has a single "Remote access" card covering both the managed GlassHome tunnel and your own addresses (a home reverse proxy, a VPN, or your own tunnel). A reverse proxy on your home network is free; a public address needs GlassHome Pro.
- The sign-in screen was redesigned. The ways to sign in are now clear, colour-coded cards, with the best one for your situation highlighted: Home Assistant at home, your GlassHome account when you're away. It also shows your home's name so you know where you're signing in.
- No more dead ends when you're away from home. If Home Assistant can't be reached, that option is clearly marked unavailable with what to do instead, rather than dropping you on a browser error page.
- The mobile app now works away from home, not just on your home network. It reaches Home Assistant securely through your dashboard server, the same way the web app does.

### Fixes

- A widget that fails to auto-update now quietly retries once before showing an error.

## 1.0.0-beta.5

### Improvements

- Browsing and adding widgets got a cleaner, more consistent look. The widget browser ("Get more widgets") and the add-widget picker now share the same card layout, with a tidy search-and-filter bar and a side-by-side view for the widget you're inspecting.
- Pro now covers your whole home. When one member has Pro, every member, kiosk, and family phone gets Pro features too. If your home goes offline, Pro keeps working for two weeks before it steps down.
- After you sign out, the setup screen remembers and pre-fills your last Home Assistant address, so reconnecting is one less thing to type.

### Fixes

- The Reduce Blur and Reduce Motion accessibility settings now apply inside widgets too, not just the rest of the app.
- In dark mode, widgets now follow your custom theme's colors and corner roundness instead of falling back to the defaults.

## 1.0.0-beta.4

### Improvements

- Set a light's color with a new color wheel and brightness slider — pick any hue and shade at a glance instead of fiddling with sliders.
- The energy widget has a cleaner, redesigned look that makes it easier to see how power flows through your home.
- If a sign-in attempt doesn't go through, you can simply try again — failed attempts no longer leave you stuck.

### Under the hood

- Security and stability hardening.

## 1.0.0-beta.3

### Fixes

- Signing in with your GlassHome account now takes you to your home and your dashboards. Before, it could land you on an empty page or quietly create a second "Home".
- Connecting your GlassHome account from Settings now works for accounts that got stuck on earlier versions, and the duplicate profile the old bug created is cleaned up automatically when you reconnect.
- When a sign-in or account connection fails, you now see a clear message explaining what to do instead of a silent dead end or a confusing "invalid code".
- Home Assistant admins are now admins in GlassHome too, so you can manage your home's members. Your role updates the next time you sign in.
- Every home always has a dashboard. If yours was missing one, it comes back on your next sign-in.
- Widgets no longer freeze when switching between dashboards.

## 1.0.0-beta.2

### Security

- Community widgets now ask permission before touching your home. When you install a widget that uses your devices, you see exactly what it wants ("Control your lights") and approve it. The widget can only do what you approved, and if it ever tries to do more, the attempt is blocked and you get a notification.
- Widgets can no longer send your home's data anywhere except your Home Assistant and GlassHome, and they never see your Home Assistant login. Each widget runs in its own isolated space and can't interfere with the rest of your dashboard.
- A new help page explains, in plain language, what widgets can and cannot do: glasshome.app/docs/widget-security.

## 1.0.0-beta.1

### Improvements

- The temperature in your dashboard header now matches the unit you set in Home Assistant. Switch between °C and °F in Home Assistant and the header follows.

### Security

- Your Home Assistant access token is no longer handed to the browser. Nothing changes in how you use the dashboard; your connection is just better protected.

## 0.10.0

Stable release. Everything from the 0.10.0 betas:

### New Features

- Sign in with a GlassHome account. Start the sign-in from settings and approve it by entering a short code at glasshome.app/link. Your dashboard knows you across devices, no password typed on the TV or tablet.
- GlassHome Pro. Community widgets and custom theming are now part of Pro. Free dashboards keep the full built-in widget set; a clear upgrade prompt appears when you reach for a Pro-only feature.
- Editing your dashboard is clearer: the page dims behind the widgets, each widget gets crisp corner buttons for move, remove, and resize, and holding a widget opens its settings directly.
- Try a demo home. From the welcome screen you can explore a fully populated dashboard, Pro features included, before connecting your own Home Assistant.
- Pair a second screen with Quick-Connect. A kiosk or extra tablet shows a short code you confirm once, instead of copying tokens by hand.
- Theme cards in the theme picker now show each theme's actual background and color palette, plus a new sharp Monochrome look with a diamond grid background and a scattered-trees pattern for Forest Zen.
- Icons now load without an internet connection. Entity, area, and dock icons come straight from your own server instead of an external icon service.

### Improvements

- Redesigned welcome and setup. A calmer, conversational onboarding walks you through connecting your home one step at a time.
- Reworked Settings. Your account and your home live in clearly separated cards, Settings → Your Home lists every member with their role, and a new "Reduce Motion" toggle dials back animations.
- Widgets you drop on the dashboard appear at a readable size by default instead of the 1x1 minimum.
- Searching for an entity by its friendly name works in every widget picker.
- Faster installs and updates. The add-on download is about a third smaller.

### Bug Fixes

- Upgrading from 0.9.x preserves your dashboards, placed widgets, and custom themes.
- Homes sharing one server are fully separated: community widgets, custom themes, and background updates belong to your home only.
- Dashboard reconnects to Home Assistant automatically after the app comes back from the background.
- Drag and resize work immediately after adding the first widget to a fresh dashboard.
- Batteries widget shows your batteries on setups where it used to come up empty.

## 0.10.0-beta.7

### Improvements

- The demo now includes Pro features: browse community widgets and create custom themes without a subscription, so you can see everything GlassHome offers before connecting your home.
- Demo-only installs now put "Demo mode" front and center on every sign-in screen. Home Assistant and Quick Connect are shown disabled with a notice instead of leading you into a connection that isn't available.

### Bug Fixes

- Your Pro plan now shows as a single PRO badge in Settings → Account instead of a row of one-letter badges.

## 0.10.0-beta.6

### New Features

- Editing your dashboard is clearer: the page dims behind the widgets, each widget gets crisp corner buttons for move, remove, and resize, and holding a widget opens its settings directly.
- Try GlassHome without a Home Assistant connection. The setup screen now offers "Or try the demo", which drops you into a shared demo home you can explore freely.
- Theme cards in the theme picker now show each theme's actual background and color palette, so you can see what you're picking before you apply it.
- New sharp Monochrome look with a rotated diamond grid background, and a new scattered-trees pattern for Forest Zen.
- Icons now load without an internet connection. Entity, area, and dock icons come straight from your own server instead of an external icon service.

### Improvements

- The Your Home settings section is tidier: flatter layout, a clear person icon for members, and the Add Link button where you expect it.

### Bug Fixes

- Installing a widget from the Widget Browser now updates the card immediately to "Installed", no need to reopen the dialog.
- Approving a new device while signed out no longer dead-ends on a GlassHome-only login page; you're taken through setup and back to the approval screen.
- Background patterns are easier to see, and changing themes no longer resets your background color.
- Uploading a custom background now shows the Pro upgrade prompt up front instead of quietly accepting a file you can't use.

## 0.10.0-beta.5

### New Features

- See who's in your home. Settings → Your Home now lists every member with their name, email, and role.

### Improvements

- Changing the dashboard background now shows the Pro lock up front. Free dashboards see lock badges on background options and an upgrade prompt, instead of clicks that silently did nothing.

### Bug Fixes

- Custom themes created on 0.9.x are back. If your saved themes disappeared from the theme editor after upgrading, they reappear and can be edited again.
- Homes sharing one server are now fully separated: community widgets and custom themes belong to your home only and no longer show up for other households on the same install.
- Background widget updates run for every home on a shared server, not just the first one.

## 0.10.0-beta.4

### Bug Fixes

- Your dashboard shows up again after upgrading. Some upgraded installs opened to a blank screen and widgets you added vanished on save; your existing dashboard and widgets now appear, and edits stick.

## 0.10.0-beta.3

### Bug Fixes

- Home Assistant reconnects after upgrading. If an upgrade left your dashboard signed in but showing no devices, sign in to Home Assistant again and the connection is restored automatically, or set the address under Settings (which now saves correctly).

## 0.10.0-beta.2

### Bug Fixes

- Upgrading from an earlier version no longer fails to start. Your existing dashboards and placed widgets carry over into the new accounts setup instead of being lost.

## 0.10.0-beta.1

### New Features

- Sign in with a GlassHome account. Open settings, start the sign-in, and approve it by entering the short code at glasshome.app/link. Your dashboard then knows who you are across devices, no password typed on the TV or tablet.
- GlassHome Pro. Community widgets and custom theming are now part of Pro. Free dashboards keep the full built-in widget set; an upgrade prompt appears when you reach for a Pro-only feature.
- Try a demo home. From the welcome screen you can explore a fully populated dashboard with sample rooms and devices before connecting your own Home Assistant.
- Pair a second screen with Quick-Connect. A kiosk or extra tablet shows a short code you confirm once, instead of copying tokens by hand.

### Improvements

- Redesigned welcome and setup. A calmer, conversational onboarding walks you through connecting your home one step at a time, with a smoother brand intro.
- Reworked Settings. Your account and your home now live in clearly separated cards, every section shares the same rounded, layered look, and corners follow the radius you pick in the theme editor.
- New "Reduce Motion" toggle in settings. Turn it on to dial back animations across the dashboard.
- Settings sections and widgets ease in with a gentle staggered entrance instead of appearing all at once.
- Faster installs and updates. The add-on download is about a third smaller, so upgrades land quicker.

## 0.9.7-beta.5

### Improvements

- Widgets you drop on the dashboard now appear at a readable size by default. Climate, light, clock, cover, batteries land at 2x2 instead of the 1x1 minimum; weather and media-player at 3x2; area and camera at 3x3. You can still resize each tile as before.
- Analogue clock now shows the date underneath the dial when you turn on "Show Date" in widget settings. The toggle is visible in both digital and analogue clock modes.
- Widget Browser icons (Settings → Browse Widgets) are legible. They used to render as muddy brown.

## 0.9.7-beta.4

### Bug Fixes

- Adding an external link to the dock now works. The button silently failed on installs served over plain HTTP on the LAN.
- The Home Assistant server URL field shows your saved URL after you leave settings and come back. The stale "Save" button that could overwrite your reverse-proxy URL with the default is gone.
- Light-mode widget picker icons are legible. They used to render as muddy brown on cream.
- The widget picker search box clears itself between adds, so you no longer see a stale query when reopening the dialog.
- Analog clock hour marks are visible in light mode. They used to render in white-on-cream and disappear.
- Widgets with multiple entities (lights, switches, sensors, etc.) show a comma-separated list of friendly names as the default title instead of only the first entity's name.

## 0.9.7-beta.3

### Bug Fixes

- Editing a placed widget now shows the full entity list again. The "No entities found" message that appeared when reopening a widget's settings is gone.
- Searching for an entity by its friendly name works in every widget picker. Typing "Solar Power" finds your sensor whether you remember the entity_id or not.
- Newly-created Home Assistant areas appear in the area widget picker live, without restarting the dashboard.

## 0.9.7-beta.2

### Improvements

- First update after this release pulls a single multi-architecture image instead of two separate ones, so future updates download faster.

## 0.9.7-beta.1

### Bug Fixes

- Drag and resize work immediately after adding the first widget to a fresh dashboard. No more refresh-or-add-second-widget workaround.
- Batteries widget now shows your batteries. Some setups previously saw an empty widget even when Home Assistant had battery entities.
- Dashboard reconnects to Home Assistant automatically after the iPad app comes back from the background. You no longer have to open Settings to bring widgets back to life.
- After upgrading to a new dashboard release, your widgets update and load on first paint with a brief "Updating widgets…" splash. No more opaque "Failed to load widget" toasts. If the hub is unreachable, the splash gives up after 10s and any incompatible tile shows a one-click "Update" button.
- Background widget auto-updates actually run now. They had been silently skipped on every paired install.

## 0.9.6

### Improvements

- Widget colors are more vibrant, especially at low opacity and in dark mode. Icons stay readable against their tinted backgrounds.
- Climate widget mode colors (heat, cool, auto, off) render distinctly in both light and dark themes instead of washing out.

### Bug Fixes

- Widgets that need a newer dashboard than yours no longer get auto-installed and broken. Auto-update now skips incompatible versions and tells you why.
- Climate widget no longer crashes when debug info is open.
- Widget tiles render correctly on existing dashboards after updating.
- Updating to a new dashboard release no longer leaves older bundled code lingering in your browser's cache. Updates take effect on first reload.

## 0.9.6-beta.3

### Bug Fixes

- Updating to a new dashboard release no longer leaves older bundled code lingering in your browser's cache. The dashboard now ships with versioned bundle names so updates take effect on first reload.

## 0.9.6-beta.2

### Bug Fixes

- The previous beta could fail to load widgets on existing dashboards because of an internal version mismatch between bundled and installed pieces. Widget tiles render correctly again after updating.

## 0.9.6-beta.1

### Improvements

- Widget colors are more vibrant, especially at low opacity and in dark mode. Icons stay readable against their tinted backgrounds.
- Climate widget mode colors (heat, cool, auto, off) now render distinctly in both light and dark themes instead of washing out.

### Bug Fixes

- Widgets that need a newer dashboard than yours no longer get auto-installed and broken. Auto-update now skips incompatible versions and tells you why.
- Climate widget no longer crashes when debug info is open.

## 0.9.5

### New Features

- Drag a widget into the top or bottom edge of the screen and the page autoscrolls. Long dashboards no longer require dropping a tile mid-move.
- Active dashboard in the dock is highlighted by a sliding pill indicator that animates between items.
- Mobile bottom-sheet rebuilt in-house: smoother drag-to-dismiss with velocity, proper keyboard avoidance, nested sheets, and popovers that no longer fight the stacking context.

### Improvements

- Mobile widget gestures redesigned. Tap toggles, long-press (500 ms with haptic bump on supported devices) opens the detail dialog. Fine control — sliders, color, presets — lives in the dialog. Page scroll over widgets is now snappy and predictable. Mouse and pen retain in-tile tap, hold, and slide.
- Edit mode pickup on mobile requires a 300 ms long-press with haptic confirmation, so a quick swipe through the dashboard no longer accidentally grabs a tile. Page scroll passes through the gaps between widgets.
- Resize handle hit target enlarged to 44×44 (visual grip unchanged), so even 1×1 tiles are resizable with a finger.
- Settings "Home Assistant" section uses the Home Assistant logo. Status chips on the dashboard and settings are now compact and consistently sized.
- Empty dashboards scroll and center properly in the viewport.

### Bug Fixes

- Widgets react to Home Assistant state changes in production again. Tapping a widget would toggle the entity in HA but the dashboard UI stayed frozen until refresh — a vendor-build module duplication caused entity subscriptions to never be sent.
- Background layer tracks the large viewport on mobile (100lvh) so it no longer repaints when browser chrome collapses on scroll.
- Web theme defaults to dark so the browser experience matches the native shell.
- Widget picker config dialog no longer flickers on close.
- Stale signal write during grid teardown silenced.

### Under the Hood

- @glasshome/ui 0.2.1 → 0.2.2 (drops @corvu/drawer)
- @glasshome/widget-sdk 0.3.4 → 0.3.7 (gesture grammar split by pointer type, touch-action derived from config)
- @glasshome/sync-layer 0.1.9 → 0.1.10 (duplicate-instance detection guards)
- Hub bearer auth restored for the CLI publish flow (server-side fix after better-auth 1.6 bump)
- CI bumped to bun 1.3.11 to match local

## 0.9.4

### Under the Hood

- Updated authentication library and validation framework — eliminates a class of startup crashes caused by dependency drift between local builds and CI
- Bundled weather demo content now ships with the dashboard out of the box

## 0.9.3

### Bug Fixes

- Fixed demo mode failing to start on fresh installs

## 0.9.2

### New Dashboard Header

- Glass header on every dashboard with the dashboard name and icon, time-of-day greeting, current date and time
- Live weather (temperature and condition) from your Home Assistant `weather.home` entity
- Lights-on and open-door counts that automatically scope to the dashboard's area when one is set
- Connection chips for Home Assistant and the GlassHome Hub so you can spot an offline side at a glance
- Smooth crossfade when entering edit mode — header swaps to dashboard controls without a jarring jump
- Responsive layout that scales down cleanly to phone-sized screens; edit-mode buttons collapse to icons on mobile

### Unified Settings Shell

- Settings pages now share the same glass header and status chips as the dashboard
- Consistent navigation, spacing, and look across every settings screen

### Bug Fixes

- Uninstall failures now show plain-English messages (demo-mode block, server error, network failure) instead of leaking raw error text from the backend
- Long-pressing a widget on mobile no longer accidentally selects text inside the tile or carries that highlight into the dialog you opened
- Switching dashboards from the settings page now actually opens the dashboard you picked, and the choice survives a page reload
- Switching between dashboards no longer briefly shows widgets from the previous dashboard — fixed a race that left stale instances on screen for a frame
- First-install demo content rebuilt: three curated dashboards (Home, Bedroom, Energy) wired to the dock with correct layouts
- Home dashboard weather widget pointed at a real demo entity so it shows data out of the box

### Under the Hood

- Updated to `@glasshome/ui` 0.2.1

## 0.9.1

### Performance

- Smarter entity subscriptions — only subscribes to entities your widgets actually use, not everything
- Reduced unnecessary UI refreshes from Home Assistant heartbeat updates
- Smoother drag and slide gestures on widgets

### Bug Fixes

- Fixed area names and floor changes not updating in the UI
- Fixed a race condition that could briefly drop entity subscriptions during reconnection
- Fixed incorrect timestamp tracking for entity state changes

## 0.9.0

### Widget Auto-Update

- Automatic background updates for installed widgets — polls the hub and installs compatible new versions
- Per-widget auto-update toggle to opt individual widgets in or out
- Separate controls for official and community widgets in Settings
- Update history with recent runs and failure surfacing
- Dock badge showing available widget updates

### Widget Rollback & Safe Mode

- Config snapshots on every install, upgrade, and config change — automatic, zero setup
- One-click rollback button on widgets that fail to mount, restoring the last known-good config
- Safe Mode toggle in Settings that disables all widget loading for recovery from broken states
- Uninstall now warns when active instances exist across dashboards and offers cascade removal

### Widget Browser Improvements

- New detail dialog when browsing widgets — full description, version info, compatibility, and install status
- Per-registry error banners with retry instead of a single opaque failure
- Better error messages with 8 distinct error types in human-readable language
- "Update All" counter with accessibility support
- Yanked widget detection — amber banner on dashboard widgets that have been pulled from the hub
- Clear labels when a widget requires a newer SDK version
- Reworked community consent dialog

### Performance & Reliability

- Debounced layout saves to prevent redundant writes during rapid edits
- Stale module eviction on install/uninstall — no more phantom widgets lingering after changes
- Config migration moved out of the render path — eliminates unnecessary re-renders
- Lazy hub manifest loading in widget browser — only fetches details when you open them
- Atomic install pipeline with per-widget locking — no more race conditions during concurrent installs
- Generation counter on widget map to detect and discard stale state

### Toast & Notification Overhaul

- Fully responsive, theme-aware toast system with proper variants (success, error, warning, info)

### Security

- Hardened bundle downloads: size limits, timeout, content-type checks, SHA-256 verification
- Auth required on all user-scoped routes and background uploads
- SSRF and path traversal protections on all external requests
- CSP headers and Trusted Types for defense-in-depth
- Community widget updates gated behind explicit consent

### Bug Fixes

- Fixed SSE subscription auth — token now passed correctly
- Fixed demo reset wiping all data instead of just demo content
- Fixed stale widget map causing phantom widgets after rapid edits
- Fixed stale dialog state in widget config dialogs
- Fixed spurious dashboard save when navigating to settings
- Fixed spinner flicker across widget cards during install

## 0.9.0-beta.3

### Zod-first widget config system
- Widget config driven by Zod schemas — types, defaults, validation, and forms all derived automatically
- Auto-generated edit forms replace hand-built forms across all 15 widgets
- EntitySelector and AreaPicker now in @glasshome/ui as proper form components
- SchemaForm renders consistent forms from JSON Schema (generated from Zod)

### Toast system overhaul
- Responsive positioning: top-center on mobile, bottom-right on desktop
- Theme-aware: follows dark/light mode
- Proper variants: toast.success(), toast.error(), toast.loading(), toast.info()
- Dock-aware offset so toasts don't overlap navigation

### UX improvements
- Bottom sheet swipe-to-close on mobile
- Widget browser blocks incompatible widgets ("Requires newer dashboard")
- SDK version shown in settings footer
- Fixed spurious "Main dashboard updated" toast on settings navigation
- Fixed text selection on widget long-press

### Widget CLI
- `bun widget publish --name <widget> --bump <patch|minor|major>` for non-interactive publishing

## 0.8.2

### Bug Fixes

- Fix authentication failing when accessing the dashboard via local network IPs outside the 192.168.x range (e.g. 10.x.x.x, 172.x.x.x)

## 0.8.0-beta.8

- Fixed database migration not completing (missing statement breakpoints in SQLite)
- Fixed HA connection lost after update (auto-create anonymous session for unauthenticated requests)
- Fixed widget install/uninstall ON CONFLICT error

## 0.8.0-beta.7

- Upgraded to Vite 8 (Rolldown bundler) — ~3x faster builds
- Migrated from TanStack Router to @solidjs/router
- Fixed vendor chunk generation — pre-built separately to eliminate bundler-dependent fragility
- Removed per-user widget installs — installed widgets are now instance-wide
- Fixed migration journal timestamps causing skipped migrations
- Fixed widget CLI registration failing with FK constraint errors
- Replaced lucide-solid with iconify-icon for dev server compatibility

## 0.8.0-beta.6

- Fixed widgets failing to load in production (shared dependency exports were tree-shaken from vendor chunks)

## 0.8.0-beta.4

- Redesigned setup wizard: single-screen flow replaces 5-step wizard
- Fixed setup redirect loop for anonymous users
- Fixed device pairing (join flow) with signed session cookies
- Removed default user seeding; per-user config created on sign-in
- Auto-create default dashboard on user creation

## 0.8.0-beta.1

First edge release. This channel receives early builds for testing before they ship to stable.
