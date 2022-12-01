import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      blueDark: "#202060",
      pinkDark: "#602080",
      pink: "#b030b0",
      blueLight: "#6c91bf",
      poolBlue: "#5bc8af",
      poolBlueLight: "#b7e1d7",
      white: "#fff",
      greyLight: "#E8E8E8",
      halfTransparentWhite: "rgba(255,255,255,0.4)",
    },
  },
});
