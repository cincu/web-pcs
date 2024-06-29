import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../../public/Components/Navbar";
import Cv from "../../public/Components/Cv";
import { Button, ButtonGroup } from "@chakra-ui/react";
const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div>
      <Head>
        <title> oiloʇɟᴙoq </title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Cv />
        <Button className={styles.requestButton} colorScheme="blue">
          Request CV
        </Button>{" "}
        <div className={styles.center}></div>
      </main>
    </div>
  );
}
