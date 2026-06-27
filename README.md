# Discord.json
An attempt at documenting switches in the Discord settings.json

## Know anything not mentioned in here? Make a PR! All contributions welcome!

It is very easy to contribute! Everything is just JSDoc in `settings.json.d.ts`!

`README.md` is gitignored because the bot will always generate it.

If you wanna give it a go locally, just run `npm i` & `npx typedoc`.

The `prepend.md` file is what is attached to the top of the documentation.

## Config File location

### Windows
```
%appdata%\discord\settings.json
```

### Linux
```
~/.config/discord/settings.json
```

### MacOS
```
~/Library/Application Support/discord/settings.json
```

## Note
`DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING` is excluded from the table because it messes up my tables.
This is just the `boolean` toggle for Chromium devtools in Discord. **On builds other than stable, it defaults to `true`**

## Interfaces

### OpenAsarSettingsJson

#### Extends

- [`SettingsJson`](#settingsjson)

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="openasar"></a> `openasar` | `object` | OpenASAR specific settings. Only applies if you are using OpenASAR |
| `openasar.quickstart` | `boolean` | Quickstart toggle |
| `openasar.setup` | `boolean` | Whether setup has been completed |

***

### SettingsJson

#### Extended by

- [`OpenAsarSettingsJson`](#openasarsettingsjson)

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="asyncvideoinputdeviceinit"></a> `asyncVideoInputDeviceInit` | `boolean` | - |
| <a id="audiosubsystem"></a> `audioSubsystem` | `"experimental"` | **Default** `"experimental"` |
| <a id="background_color"></a> `BACKGROUND_COLOR` | `string` | Hex color of the theme the Discord client is using Can be a custom color with nitro, or preset from a theme. * **Note:** Discord will ignore manual updates to this variable **Default** `#000000` |
| <a id="chromiumswitches"></a> `chromiumSwitches` | `object` | unsure if this is different from accepted command line args? **Link** https://peter.sh/experiments/chromium-command-line-switches/ |
| <a id="desktop_tti_early_update_check"></a> `DESKTOP_TTI_EARLY_UPDATE_CHECK` | `boolean` | **Default** `[Windows: true]` |
| <a id="discord_tti_dnstcp_warmup"></a> `DISCORD_TTI_DNSTCP_WARMUP` | `boolean` | **Default** `[Windows: true]` |
| <a id="enablehardwareacceleration"></a> `enableHardwareAcceleration` | `boolean` | Whether hardware acceleration is enabled Controlled by the "Enable Hardware Acceleration" setting **Default** `true` |
| <a id="is_maximized"></a> `IS_MAXIMIZED` | `boolean` | Whether the window is maximized |
| <a id="is_minimized"></a> `IS_MINIMIZED` | `boolean` | Whether the window is minimized |
| <a id="min_height"></a> `MIN_HEIGHT` | `number` | - |
| <a id="min_width"></a> `MIN_WIDTH` | `number` | - |
| <a id="minimize_to_tray"></a> `MINIMIZE_TO_TRAY` | `boolean` | Whether Discord minimizes to the tray when closed Controlled by the "Minimize Discord to System Tray" option |
| <a id="offloadadmcontrols"></a> `offloadAdmControls` | `boolean` | **Default** `true` |
| <a id="open_on_startup"></a> `OPEN_ON_STARTUP` | `boolean` | - |
| <a id="openh264enabled"></a> `openH264Enabled` | `boolean` | **Default** `[Linux: true]` |
| <a id="skip_host_update"></a> `SKIP_HOST_UPDATE` | `boolean` | Whether discord will attempt to auto update **Default** `true` |
| <a id="skip_module_update"></a> `SKIP_MODULE_UPDATE` | `boolean` | - |
| <a id="start_minimized"></a> `START_MINIMIZED` | `boolean` | Whether Discord minimizes to the tray at startup Controlled by the "Start Discord Minimized" option |
| <a id="trayballoonshown"></a> `trayBalloonShown` | `boolean` | - |
| <a id="use_new_updater"></a> `USE_NEW_UPDATER` | `boolean` | - |
| <a id="webapp_endpoint"></a> `WEBAPP_ENDPOINT` | `string` | Points to the respective endpoint for Discord. ptb has ptb.discord.com, etc. **Default** `"https://discord.com/app"` |
| <a id="window_bounds"></a> `WINDOW_BOUNDS` | `object` | Location and size of the Discord window |
| `WINDOW_BOUNDS.height` | `number` | Height of the window in pixels |
| `WINDOW_BOUNDS.width` | `number` | Width of the window in pixels |
| `WINDOW_BOUNDS.x` | `number` | Horizontal position of the window |
| `WINDOW_BOUNDS.y` | `number` | Vertical position of the window |
