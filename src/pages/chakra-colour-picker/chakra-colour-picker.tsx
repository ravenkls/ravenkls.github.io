import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import { usePersistedHex } from "./hooks/use-persisted-colour";
import ChakraDemo from "./components/chakra-demo";
import { generateThemeColours } from "./util";
import ThemeCode from "./components/theme-code";

function ChakraColourPicker() {
  const { colour, setColour, isValid } = usePersistedHex("#4d73d1");
  const [currentColour, setCurrentColour] = useState(colour);

  useEffect(() => {
    if (isValid) {
      setCurrentColour(colour);
    }
  }, [colour, isValid]);

  const colourScheme = useMemo(
    () => generateThemeColours(currentColour),
    [currentColour]
  );

  return (
    <Stack spacing={4}>
      <Heading mb={4}>Theme Colour Tool</Heading>
      <FormControl isInvalid={!isValid}>
        <FormLabel>Colour</FormLabel>
        <Flex gap={2} pos="relative">
          <FormLabel
            htmlFor="colourPicker"
            w={12}
            bg={colour}
            m={0}
            rounded="md"
            cursor="pointer"
          ></FormLabel>
          <Input
            pos="absolute"
            type="color"
            w="0"
            visibility={"hidden"}
            id="colourPicker"
            value={colour}
            onChange={(e) => setColour(e.target.value)}
          />
          <InputGroup>
            <Input
              placeholder="#000000"
              value={colour.toUpperCase()}
              onChange={(e) => setColour(e.target.value)}
              maxLength={7}
            />
            <InputRightElement>
              {isValid && <CheckIcon color="green" />}
            </InputRightElement>
          </InputGroup>
        </Flex>
        <FormErrorMessage>Enter a valid colour code</FormErrorMessage>
      </FormControl>

      <ChakraDemo colourScheme={colourScheme} />

      <ThemeCode colourScheme={colourScheme} />
    </Stack>
  );
}

export default ChakraColourPicker;
