import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import useCincuStore from "@/store/useCincu";
import Link from "next/link";
import { Box, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
const MotionText = motion(Text);
const MotionImage = motion(Image);

const fadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 3 } },
};
export default function Home() {
  function highlightText(text, words) {
    const regex = new RegExp(`(${words.join("|")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) => {
      if (words.includes(part.toLowerCase())) {
        return (
          <motion.code
            key={index}
            className={styles.code}
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            custom={index}
          >
            {part}
          </motion.code>
        );
      } else {
        return (
          <motion.span
            key={index}
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            custom={index}
          >
            {part}
          </motion.span>
        );
      }
    });
  }

  const { cincu, updateCincu } = useCincuStore();
  const info = cincu.info;
  const wordsToHighLight = [
    "web developer",
    "cyber-security",
    "python",
    "digital infrastructures",
  ];
  return (
    <>
      <Head>
        <title> portfolio </title>
      </Head>
      <Box
        w="100%"
        h="100%"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        overflow="hidden"
      >
        <VStack
          maxH="100vh"
          alignItems="center"
          justifyItems="flex-start"
          spacing={8}
        >
          <MotionImage
            className={styles.logo}
            src="/images/imgccc.png"
            alt="photo of the site owner"
            width={200}
            height={100}
            priority
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
          />
          <Text fontSize="xxl" className={styles.intro}>
            Welcome! I am {cincu.name.substring(6, 11)}.
          </Text>
          <MotionText fontFamily="Quicksand" fontSize="lg">
            {highlightText(info, wordsToHighLight)}{" "}
            <Link href="./about">Click for more </Link>
          </MotionText>
        </VStack>
      </Box>
    </>
  );
}
