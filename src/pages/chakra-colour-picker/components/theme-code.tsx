import { Card, CardBody, useColorModeValue } from "@chakra-ui/react";
import Prism from "prism-react-renderer";
import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/oceanicNext";
import lightTheme from "prism-react-renderer/themes/github";

type Props = {
  colourScheme: Record<number, string>;
};

const getCode = (colourScheme: Record<number, string>) => {
  const code = `import { extendTheme } from "@chakra-ui/react"
  
const theme = extendTheme({
  colors: {
    brand: {
      50: "${colourScheme[50]}",
      100: "${colourScheme[100]}",
      200: "${colourScheme[200]}",
      300: "${colourScheme[300]}",
      400: "${colourScheme[400]}",
      500: "${colourScheme[500]}",
      600: "${colourScheme[600]}",
      700: "${colourScheme[700]}",
      800: "${colourScheme[800]}",
      900: "${colourScheme[900]}",
    },
  },
})`;

  return code;
};

function ThemeCode({ colourScheme }: Props) {
  const theme = useColorModeValue(lightTheme, darkTheme);

  return (
    <Card>
      <CardBody>
        <Highlight
          {...defaultProps}
          code={getCode(colourScheme)}
          language={"tsx"}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{ ...style, backgroundColor: "transparent" }}
            >
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </CardBody>
    </Card>
  );
}

export default ThemeCode;
