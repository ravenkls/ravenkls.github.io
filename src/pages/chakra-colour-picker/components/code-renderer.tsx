import React from "react";
import {
  Box,
  Code,
  ChakraProvider,
  extendTheme,
  ThemeProvider,
} from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

type Colour = {
  name: string;
  hex: string;
};

type ColourThemeGeneratorProps = {
  colours: Colour[];
};

const camelCase = (str: string) =>
  str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "");

const generateTheme = (colours: Colour[]) => {
  const themeColors: Record<string, any> = {};

  colours.forEach((colour) => {
    const camelCasedName = camelCase(colour.name);

    themeColors[camelCasedName] = {
      500: colour.hex,
    };
  });

  return themeColors;
};

const CodeRenderer: React.FC<ColourThemeGeneratorProps> = ({ colours }) => {
  const customTheme = generateTheme(colours);
  const themeText = JSON.stringify(customTheme, null, 2);

  return (
    <Box width="100%" p={4}>
      <pre>{themeText}</pre>
    </Box>
  );
};

export default CodeRenderer;
