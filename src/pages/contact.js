import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../../public/Components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <div>
      <Head>
        <title> oiloʇɟᴙoq </title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar />
        <h2>Contact</h2>
      </main>
    </div>
  );
}
