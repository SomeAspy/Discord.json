export interface SettingsJson {
  MINIMIZE_TO_TRAY: boolean;
  SKIP_HOST_UPDATE: boolean;
  SKIP_MODULE_UPDATE: boolean;
  USE_NEW_UPDATER: boolean;
  offloadAdmControls: boolean;
  openH264Enabled: boolean;
  DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING: boolean;
  BACKGROUND_COLOR: string; // This is a hex color value
  DISCORD_TTI_DNSTCP_WARMUP: boolean;
  chromiumSwitches: {
    // unsure if this is different from accepted command line args?
    // https://peter.sh/experiments/chromium-command-line-switches/
  };

  enableHardwareAcceleration: boolean;
  IS_MAXIMISED: boolean;
  IS_MINIMISED: boolean;
  WINDOW_BOUNDS: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  OPEN_ON_STARTUP: boolean;
  MIN_WIDTH: number;
  MIN_HEIGHT: number;
  trayBalloonShown: boolean;
  asyncVideoInputDeviceInit: boolean;
}

export interface OpenAsarSettingsJson extends SettingsJson {
  openasar: {
    setup: boolean;
    quickstart: boolean;
  };
}
