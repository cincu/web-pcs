import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/../public/Components/Navbar";
import Cards from "../../../public/Components/Cards";
const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  return (
    <div>
      <Head>
        <title> oiloʇɟᴙoq </title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar />

        <div className={styles.cards}>
          <Cards />
        </div>
      </main>
    </div>
  );
}
