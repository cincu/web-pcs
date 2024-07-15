import "@/styles/globals.css";
import { Box, Center, ChakraProvider, Container, Text } from "@chakra-ui/react";
import useCincuStore from "@/store/useCincu";
import Navbar from "../../public/Components/Navbar";
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <Center
          as="main"
          w="100%"
          minH="100vh"
          pt={{ base: "100px", md: "100px" }}
        >
          <Container maxW="container.xl">
            <Component {...pageProps} />
          </Container>
        </Center>
      </Box>
      <Box as="footer" py={6} textAlign="center" w="100%">
        <Text fontSize="sm">
          © {new Date().getFullYear()} CCCM. All rights reserved.
        </Text>
      </Box>
    </ChakraProvider>
  );
}
