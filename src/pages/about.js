import Head from "next/head";
import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import Navbar from "../../public/Components/Navbar";
import Cv from "../../public/Components/Cv";
import styles from "@/styles/Home.module.css";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Me | Portfolio</title>
      </Head>
      <Navbar />
      <Container maxW="container.lg" py={10}>
        <VStack spacing={10} align="stretch">
          <Cv />
        </VStack>
      </Container>
    </div>
  );
}
