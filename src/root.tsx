import { Container, Flex } from "@chakra-ui/react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <Flex minH="100vh" direction="column">
      <Header />
      <Container flex={1} maxW="container.xl" my={8}>
        <Outlet />
      </Container>
      <Footer />
    </Flex>
  );
}

export default Root;
