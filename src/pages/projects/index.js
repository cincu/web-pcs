import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import styles from "@/styles/Home.module.css";
import Navbar from "@/../public/Components/Navbar";
import Cards from "../../../public/Components/Cards";

export default function Projects() {
  return (
    <div>
      <Head>
        <title> portfolio </title>
      </Head>
      <Cards />
    </div>
  );
}
