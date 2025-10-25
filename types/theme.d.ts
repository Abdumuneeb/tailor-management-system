import { PaletteColorOptions, PaletteColor } from "@mui/material/styles";

// ✅ Extend Palette for custom color `blue`
declare module "@mui/material/styles" {
  interface Palette {
    darkBlue: PaletteColor;
    maroon: PaletteColor;
    teal: PaletteColor;
    purple: PaletteColor;
    pending: PaletteColor;
    failed: PaletteColor;
    gray: PaletteColor;
    black: PaletteColor;
  }
  interface PaletteOptions {
    darkBlue?: PaletteColorOptions;
    maroon?: PaletteColorOptions;
    teal?: PaletteColorOptions;
    purple?: PaletteColorOptions;
    pending?: PaletteColorOptions;
    failed?: PaletteColorOptions;
    gray: ?PaletteColorOptions;
    black: ?PaletteColorOptions;
  }

  // ✅ Extend Breakpoints to include `xxs`
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

// ✅ Allow <Button color="blue" />
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    blue: true;
  }
}
