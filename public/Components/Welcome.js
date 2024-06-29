import { Box, Text, Image, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styles from "@/styles/Home.module.css";

const MotionBox = motion(Box);

export default function Welcome() {
  return (
    <Center h="100vh" w="100%">
      <MotionBox
        position="relative"
        w="300px"
        h="300px"
        borderRadius="full"
        overflow="hidden"
        whileHover={{ scale: 1.05 }}
      >
        <Image
          className={styles.logo}
          src="/images/imgccc.png"
          alt="photo of the site owner"
          width={200}
          height={100}
          priority
        />
        <Center
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.6)"
          color="white"
          opacity="0"
          _groupHover={{ opacity: 1 }}
          transition="opacity 0.3s ease-in-out"
        >
          <Text fontSize="2xl" fontWeight="bold">
            Welcome, I am CC
          </Text>
        </Center>
      </MotionBox>
    </Center>
  );
}
