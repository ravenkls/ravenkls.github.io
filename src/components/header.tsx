import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function Header() {
  const bg = useColorModeValue("gray.100", "gray.900");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      justify="space-between"
      align="center"
      w="full"
      p={4}
      bg={bg}
      pos="sticky"
      top={0}
    >
      <Heading as={Link} to="/" size="md">
        ravenkls.github.io
      </Heading>
      <HStack>
        <IconButton
          aria-label="Switch colour mode"
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          size="sm"
          variant="ghost"
        />
      </HStack>
    </Flex>
  );
}

export default Header;
