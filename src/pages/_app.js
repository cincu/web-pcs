import "@/styles/globals.css";
import { Box, Center, ChakraProvider, Container, Text } from "@chakra-ui/react";
import useCincuStore from "@/store/useCincu";
import Navbar from "../../public/Components/Navbar";
export default function App({ Component, pageProps }) {
  const { cincu, updateCincu } = useCincuStore();
  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <Center as="main" w="100%" minH="100vh" p={3}>
          <Container maxW="container.lg">
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
