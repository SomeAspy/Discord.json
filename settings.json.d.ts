export interface SettingsJson {
  /**
   * Whether Discord minimizes to the tray when closed
   * Controlled by the "Minimize Discord to System Tray" option
   */
  MINIMIZE_TO_TRAY: boolean;
  /**
   * Whether Discord minimizes to the tray at startup
   * Controlled by the "Start Discord Minimized" option
   */
  START_MINIMIZED: boolean;
  /**
   * Whether discord will attempt to auto update
   * @default true
   */
  SKIP_HOST_UPDATE: boolean;
  SKIP_MODULE_UPDATE: boolean;
  USE_NEW_UPDATER: boolean;
  offloadAdmControls: boolean;
  openH264Enabled: boolean;
  /**
   * Whether Chromium Developer Tools are enabled
   * @default false
   */
  DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING: boolean;
  /**
   * Hex color of the theme the Discord client is using
   * Can be a custom color with nitro, or preset from a theme.
   * * **Note:** Discord will ignore manual updates to this variable
   * @default #000000
   * @readonly
   */
  BACKGROUND_COLOR: string;
  /**
   * **Undocumented**
   * @default true
   */
  DISCORD_TTI_DNSTCP_WARMUP: boolean;
  /**
   * **Undocumented**
   * @default true
   */
  DESKTOP_TTI_EARLY_UPDATE_CHECK: boolean;
  /**
   * unsure if this is different from accepted command line args?
   * @link https://peter.sh/experiments/chromium-command-line-switches/
   */
  chromiumSwitches: {};

  /**
   * Whether hardware acceleration is enabled
   * Controlled by the "Enable Hardware Acceleration" setting
   * @default true
   */
  enableHardwareAcceleration: boolean;
  /** Whether the window is maximized */
  IS_MAXIMIZED: boolean;
  /** Whether the window is minimized */
  IS_MINIMIZED: boolean;
  /** Location and size of the Discord window */
  WINDOW_BOUNDS: {
    /** Horizontal position of the window */
    x: number;
    /** Vertical position of the window */
    y: number;
    /** Width of the window in pixels */
    width: number;
    /** Height of the window in pixels */
    height: number;
  };
  OPEN_ON_STARTUP: boolean;
  MIN_WIDTH: number;
  MIN_HEIGHT: number;
  trayBalloonShown: boolean;
  asyncVideoInputDeviceInit: boolean;
  /**
   * **Undocumented**
   * @default "experimental"
   */
  audioSubsystem: "experimental";
}

export interface OpenAsarSettingsJson extends SettingsJson {
  /**
   * OpenASAR specific settings. Only applies if you are using OpenASAR
   */
  openasar: {
    /** Whether setup has been completed */
    setup: boolean;
    /** Quickstart toggle */
    quickstart: boolean;
  };
}
