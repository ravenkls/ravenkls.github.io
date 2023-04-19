import chroma from "chroma-js";

export const generateThemeColours = (colour: string) => {
  const baseColor = chroma(colour).hex();

  const colorScheme = {
    50: chroma(baseColor).brighten(3).hex(),
    100: chroma(baseColor).brighten(2.5).hex(),
    200: chroma(baseColor).brighten(2).hex(),
    300: chroma(baseColor).brighten(1.5).hex(),
    400: chroma(baseColor).brighten(1).hex(),
    500: chroma(baseColor).brighten(0.5).hex(),
    600: baseColor,
    700: chroma(baseColor).darken(0.5).hex(),
    800: chroma(baseColor).darken(1).hex(),
    900: chroma(baseColor).darken(1.5).hex(),
  };

  return colorScheme;
};
