import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function Footer() {
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <Box w="full" p={4} bg={bg} textAlign={"center"}>
      <Text opacity={0.5}>&copy; Copyright 2023.</Text>
    </Box>
  );
}

export default Footer;
