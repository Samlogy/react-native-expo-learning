import { NativeBaseProvider, extendTheme } from "native-base";

export const fontConfig = {
  Roboto: {
    300: {
      normal: "Roboto-Light",
      italic: "Roboto-LightItalic",
    },
    400: {
      normal: "Roboto-Regular",
      italic: "Roboto-Italic",
    },
    500: {
      normal: "Roboto-Medium",
    },
    600: {
      normal: "Roboto-Medium",
      italic: "Roboto-MediumItalic",
    },
    700: {
      normal: "Roboto-Bold",
    },
    800: {
      normal: "Roboto-Bold",
      italic: "Roboto-BoldItalic",
    },
  },
};
export const fonts = {
  heading: "Roboto",
  body: "Roboto",
  mono: "Roboto",
};
// set up dark mode
export const themeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const colors = {
  // Add new color
  primary: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E",
  },
  accent: {
    400: "#d97706",
  },
};

export const breakpoints = {
  base: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280,
};
