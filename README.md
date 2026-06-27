# Discord.json
An attempt at documenting switches in the Discord settings.json

## Know anything not mentioned in here? Make a PR! All contributions welcome!

## Config File location

### Windows
```
%appdata%\discord\settings.json
```

### Linux
```
~/.config/discord/settings.json
```

## Interfaces

### OpenAsarSettingsJson

Defined in: [settings.json.d.ts:83](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L83)

#### Extends

- [`SettingsJson`](#settingsjson)

#### Properties

##### asyncVideoInputDeviceInit

> **asyncVideoInputDeviceInit**: `boolean`

Defined in: [settings.json.d.ts:75](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L75)

###### Inherited from

[`SettingsJson`](#settingsjson).[`asyncVideoInputDeviceInit`](#asyncvideoinputdeviceinit-1)

##### audioSubsystem

> **audioSubsystem**: `"experimental"`

Defined in: [settings.json.d.ts:80](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L80)

**Undocumented**

###### Default

```ts
"experimental"
```

###### Inherited from

[`SettingsJson`](#settingsjson).[`audioSubsystem`](#audiosubsystem-1)

##### BACKGROUND\_COLOR

> `readonly` **BACKGROUND\_COLOR**: `string`

Defined in: [settings.json.d.ts:33](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L33)

Hex color of the theme the Discord client is using
Can be a custom color with nitro, or preset from a theme.
* **Note:** Discord will ignore manual updates to this variable

###### Default

```ts
#000000
@readonly
```

###### Inherited from

[`SettingsJson`](#settingsjson).[`BACKGROUND_COLOR`](#background_color-1)

##### chromiumSwitches

> **chromiumSwitches**: `object`

Defined in: [settings.json.d.ts:48](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L48)

unsure if this is different from accepted command line args?

###### Link

https://peter.sh/experiments/chromium-command-line-switches/

###### Inherited from

[`SettingsJson`](#settingsjson).[`chromiumSwitches`](#chromiumswitches-1)

##### DANGEROUS\_ENABLE\_DEVTOOLS\_ONLY\_ENABLE\_IF\_YOU\_KNOW\_WHAT\_YOURE\_DOING

> **DANGEROUS\_ENABLE\_DEVTOOLS\_ONLY\_ENABLE\_IF\_YOU\_KNOW\_WHAT\_YOURE\_DOING**: `boolean`

Defined in: [settings.json.d.ts:25](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L25)

Whether Chromium Developer Tools are enabled

###### Default

```ts
false
```

###### Inherited from

[`SettingsJson`](#settingsjson).[`DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING`](#dangerous_enable_devtools_only_enable_if_you_know_what_youre_doing-1)

##### DESKTOP\_TTI\_EARLY\_UPDATE\_CHECK

> **DESKTOP\_TTI\_EARLY\_UPDATE\_CHECK**: `boolean`

Defined in: [settings.json.d.ts:43](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L43)

**Undocumented**

###### Default

```ts
true
```

###### Inherited from

[`SettingsJson`](#settingsjson).[`DESKTOP_TTI_EARLY_UPDATE_CHECK`](#desktop_tti_early_update_check-1)

##### DISCORD\_TTI\_DNSTCP\_WARMUP

> **DISCORD\_TTI\_DNSTCP\_WARMUP**: `boolean`

Defined in: [settings.json.d.ts:38](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L38)

**Undocumented**

###### Default

```ts
true
```

###### Inherited from

[`SettingsJson`](#settingsjson).[`DISCORD_TTI_DNSTCP_WARMUP`](#discord_tti_dnstcp_warmup-1)

##### enableHardwareAcceleration

> **enableHardwareAcceleration**: `boolean`

Defined in: [settings.json.d.ts:55](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L55)

Whether hardware acceleration is enabled
Controlled by the "Enable Hardware Acceleration" setting

###### Default

```ts
true
```

###### Inherited from

[`SettingsJson`](#settingsjson).[`enableHardwareAcceleration`](#enablehardwareacceleration-1)

##### IS\_MAXIMIZED

> **IS\_MAXIMIZED**: `boolean`

Defined in: [settings.json.d.ts:57](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L57)

Whether the window is maximized

###### Inherited from

[`SettingsJson`](#settingsjson).[`IS_MAXIMIZED`](#is_maximized-1)

##### IS\_MINIMIZED

> **IS\_MINIMIZED**: `boolean`

Defined in: [settings.json.d.ts:59](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L59)

Whether the window is minimized

###### Inherited from

[`SettingsJson`](#settingsjson).[`IS_MINIMIZED`](#is_minimized-1)

##### MIN\_HEIGHT

> **MIN\_HEIGHT**: `number`

Defined in: [settings.json.d.ts:73](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L73)

###### Inherited from

[`SettingsJson`](#settingsjson).[`MIN_HEIGHT`](#min_height-1)

##### MIN\_WIDTH

> **MIN\_WIDTH**: `number`

Defined in: [settings.json.d.ts:72](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L72)

###### Inherited from

[`SettingsJson`](#settingsjson).[`MIN_WIDTH`](#min_width-1)

##### MINIMIZE\_TO\_TRAY

> **MINIMIZE\_TO\_TRAY**: `boolean`

Defined in: [settings.json.d.ts:6](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L6)

Whether Discord minimizes to the tray when closed
Controlled by the "Minimize Discord to System Tray" option

###### Inherited from

[`SettingsJson`](#settingsjson).[`MINIMIZE_TO_TRAY`](#minimize_to_tray-1)

##### offloadAdmControls

> **offloadAdmControls**: `boolean`

Defined in: [settings.json.d.ts:19](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L19)

###### Inherited from

[`SettingsJson`](#settingsjson).[`offloadAdmControls`](#offloadadmcontrols-1)

##### OPEN\_ON\_STARTUP

> **OPEN\_ON\_STARTUP**: `boolean`

Defined in: [settings.json.d.ts:71](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L71)

###### Inherited from

[`SettingsJson`](#settingsjson).[`OPEN_ON_STARTUP`](#open_on_startup-1)

##### openasar

> **openasar**: `object`

Defined in: [settings.json.d.ts:87](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L87)

OpenASAR specific settings. Only applies if you are using OpenASAR

###### quickstart

> **quickstart**: `boolean`

Quickstart toggle

###### setup

> **setup**: `boolean`

Whether setup has been completed

##### openH264Enabled

> **openH264Enabled**: `boolean`

Defined in: [settings.json.d.ts:20](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L20)

###### Inherited from

[`SettingsJson`](#settingsjson).[`openH264Enabled`](#openh264enabled-1)

##### SKIP\_HOST\_UPDATE

> **SKIP\_HOST\_UPDATE**: `boolean`

Defined in: [settings.json.d.ts:16](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L16)

Whether discord will attempt to auto update

###### Default

```ts
true
```

###### Inherited from

[`SettingsJson`](#settingsjson).[`SKIP_HOST_UPDATE`](#skip_host_update-1)

##### SKIP\_MODULE\_UPDATE

> **SKIP\_MODULE\_UPDATE**: `boolean`

Defined in: [settings.json.d.ts:17](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L17)

###### Inherited from

[`SettingsJson`](#settingsjson).[`SKIP_MODULE_UPDATE`](#skip_module_update-1)

##### START\_MINIMIZED

> **START\_MINIMIZED**: `boolean`

Defined in: [settings.json.d.ts:11](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L11)

Whether Discord minimizes to the tray at startup
Controlled by the "Start Discord Minimized" option

###### Inherited from

[`SettingsJson`](#settingsjson).[`START_MINIMIZED`](#start_minimized-1)

##### trayBalloonShown

> **trayBalloonShown**: `boolean`

Defined in: [settings.json.d.ts:74](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L74)

###### Inherited from

[`SettingsJson`](#settingsjson).[`trayBalloonShown`](#trayballoonshown-1)

##### USE\_NEW\_UPDATER

> **USE\_NEW\_UPDATER**: `boolean`

Defined in: [settings.json.d.ts:18](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L18)

###### Inherited from

[`SettingsJson`](#settingsjson).[`USE_NEW_UPDATER`](#use_new_updater-1)

##### WINDOW\_BOUNDS

> **WINDOW\_BOUNDS**: `object`

Defined in: [settings.json.d.ts:61](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L61)

Location and size of the Discord window

###### height

> **height**: `number`

Height of the window in pixels

###### width

> **width**: `number`

Width of the window in pixels

###### x

> **x**: `number`

Horizontal position of the window

###### y

> **y**: `number`

Vertical position of the window

###### Inherited from

[`SettingsJson`](#settingsjson).[`WINDOW_BOUNDS`](#window_bounds-1)

***

### SettingsJson

Defined in: [settings.json.d.ts:1](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L1)

#### Extended by

- [`OpenAsarSettingsJson`](#openasarsettingsjson)

#### Properties

##### asyncVideoInputDeviceInit

> **asyncVideoInputDeviceInit**: `boolean`

Defined in: [settings.json.d.ts:75](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L75)

##### audioSubsystem

> **audioSubsystem**: `"experimental"`

Defined in: [settings.json.d.ts:80](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L80)

**Undocumented**

###### Default

```ts
"experimental"
```

##### BACKGROUND\_COLOR

> `readonly` **BACKGROUND\_COLOR**: `string`

Defined in: [settings.json.d.ts:33](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L33)

Hex color of the theme the Discord client is using
Can be a custom color with nitro, or preset from a theme.
* **Note:** Discord will ignore manual updates to this variable

###### Default

```ts
#000000
@readonly
```

##### chromiumSwitches

> **chromiumSwitches**: `object`

Defined in: [settings.json.d.ts:48](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L48)

unsure if this is different from accepted command line args?

###### Link

https://peter.sh/experiments/chromium-command-line-switches/

##### DANGEROUS\_ENABLE\_DEVTOOLS\_ONLY\_ENABLE\_IF\_YOU\_KNOW\_WHAT\_YOURE\_DOING

> **DANGEROUS\_ENABLE\_DEVTOOLS\_ONLY\_ENABLE\_IF\_YOU\_KNOW\_WHAT\_YOURE\_DOING**: `boolean`

Defined in: [settings.json.d.ts:25](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L25)

Whether Chromium Developer Tools are enabled

###### Default

```ts
false
```

##### DESKTOP\_TTI\_EARLY\_UPDATE\_CHECK

> **DESKTOP\_TTI\_EARLY\_UPDATE\_CHECK**: `boolean`

Defined in: [settings.json.d.ts:43](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L43)

**Undocumented**

###### Default

```ts
true
```

##### DISCORD\_TTI\_DNSTCP\_WARMUP

> **DISCORD\_TTI\_DNSTCP\_WARMUP**: `boolean`

Defined in: [settings.json.d.ts:38](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L38)

**Undocumented**

###### Default

```ts
true
```

##### enableHardwareAcceleration

> **enableHardwareAcceleration**: `boolean`

Defined in: [settings.json.d.ts:55](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L55)

Whether hardware acceleration is enabled
Controlled by the "Enable Hardware Acceleration" setting

###### Default

```ts
true
```

##### IS\_MAXIMIZED

> **IS\_MAXIMIZED**: `boolean`

Defined in: [settings.json.d.ts:57](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L57)

Whether the window is maximized

##### IS\_MINIMIZED

> **IS\_MINIMIZED**: `boolean`

Defined in: [settings.json.d.ts:59](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L59)

Whether the window is minimized

##### MIN\_HEIGHT

> **MIN\_HEIGHT**: `number`

Defined in: [settings.json.d.ts:73](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L73)

##### MIN\_WIDTH

> **MIN\_WIDTH**: `number`

Defined in: [settings.json.d.ts:72](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L72)

##### MINIMIZE\_TO\_TRAY

> **MINIMIZE\_TO\_TRAY**: `boolean`

Defined in: [settings.json.d.ts:6](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L6)

Whether Discord minimizes to the tray when closed
Controlled by the "Minimize Discord to System Tray" option

##### offloadAdmControls

> **offloadAdmControls**: `boolean`

Defined in: [settings.json.d.ts:19](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L19)

##### OPEN\_ON\_STARTUP

> **OPEN\_ON\_STARTUP**: `boolean`

Defined in: [settings.json.d.ts:71](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L71)

##### openH264Enabled

> **openH264Enabled**: `boolean`

Defined in: [settings.json.d.ts:20](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L20)

##### SKIP\_HOST\_UPDATE

> **SKIP\_HOST\_UPDATE**: `boolean`

Defined in: [settings.json.d.ts:16](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L16)

Whether discord will attempt to auto update

###### Default

```ts
true
```

##### SKIP\_MODULE\_UPDATE

> **SKIP\_MODULE\_UPDATE**: `boolean`

Defined in: [settings.json.d.ts:17](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L17)

##### START\_MINIMIZED

> **START\_MINIMIZED**: `boolean`

Defined in: [settings.json.d.ts:11](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L11)

Whether Discord minimizes to the tray at startup
Controlled by the "Start Discord Minimized" option

##### trayBalloonShown

> **trayBalloonShown**: `boolean`

Defined in: [settings.json.d.ts:74](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L74)

##### USE\_NEW\_UPDATER

> **USE\_NEW\_UPDATER**: `boolean`

Defined in: [settings.json.d.ts:18](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L18)

##### WINDOW\_BOUNDS

> **WINDOW\_BOUNDS**: `object`

Defined in: [settings.json.d.ts:61](https://github.com/SomeAspy/Discord.json/blob/4c3f802c8ac2b85b9a6d04a92e03a555572ede5c/settings.json.d.ts#L61)

Location and size of the Discord window

###### height

> **height**: `number`

Height of the window in pixels

###### width

> **width**: `number`

Width of the window in pixels

###### x

> **x**: `number`

Horizontal position of the window

###### y

> **y**: `number`

Vertical position of the window
