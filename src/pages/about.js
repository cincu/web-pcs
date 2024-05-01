import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../../public/Components/Navbar";
import Card from "../../public/Components/Card";
const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div>
      <Head>
        <title> oiloʇɟᴙoq </title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar />
        <div className={styles.center}>
          <Card></Card>
        </div>
      </main>
    </div>
  );
}
