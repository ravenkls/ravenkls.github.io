import { SearchIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  ChakraProvider,
  Checkbox,
  CircularProgress,
  Code,
  Heading,
  IconButton,
  Input,
  Progress,
  Radio,
  RadioGroup,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spinner,
  Stack,
  Switch,
  Tag,
  createLocalStorageManager,
  extendTheme,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

type Props = {
  colourScheme: Record<number, string>;
};

function ColorModeSwitcher({ colorMode }: { colorMode: string }) {
  const { setColorMode } = useColorMode();
  useEffect(() => setColorMode(colorMode), [colorMode]);

  return null;
}

const manager = createLocalStorageManager("chakra-preview-theme");

function ChakraDemo({ colourScheme }: Props) {
  const { colorMode } = useColorMode();

  const theme = extendTheme({
    initialColorMode: colorMode,
    colors: {
      brand: colourScheme,
    },
  });

  const primaryColor = useColorModeValue("brand.600", "brand.300");

  return (
    <ChakraProvider theme={theme} colorModeManager={manager}>
      <ColorModeSwitcher colorMode={colorMode} />

      <SimpleGrid columns={[1, 1, 3]} spacing={4}>
        <Card>
          <CardHeader>
            <Heading size="md">Forms</Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={3}>
              <Box>
                <Button colorScheme="brand">Button</Button>
              </Box>
              <Checkbox defaultChecked colorScheme="brand">
                Checkbox
              </Checkbox>
              <RadioGroup colorScheme="brand" defaultValue={"2"}>
                <Stack direction="row">
                  <Radio value="1">First</Radio>
                  <Radio value="2">Second</Radio>
                  <Radio value="3">Third</Radio>
                </Stack>
              </RadioGroup>
              <Slider colorScheme="brand" defaultValue={30}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Switch defaultChecked colorScheme="brand" />
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">Data Display</Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={3}>
              <Box>
                <Badge colorScheme="brand">Badge</Badge>
              </Box>
              <Box>
                <Code colorScheme="brand">console.log("hello")</Code>
              </Box>
              <Box>
                <Tag colorScheme="brand">Tag</Tag>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Feedback</Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={3}>
              <Box>
                <CircularProgress
                  isIndeterminate
                  color={primaryColor}
                  size="50px"
                />
              </Box>
              <Box>
                <Spinner color={primaryColor} />
              </Box>
              <Progress size="md" colorScheme="brand" isIndeterminate />
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </ChakraProvider>
  );
}

export default ChakraDemo;
