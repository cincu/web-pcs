import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../../public/Components/Navbar";
import useCincuStore from "@/store/useCincu";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  function highlightText(text, words) {
    const regex = new RegExp(`(${words.join("|")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) => {
      if (words.includes(part.toLowerCase())) {
        return (
          <code key={index} className={styles.code}>
            {" "}
            {part}
          </code>
        );
      } else {
        return part;
      }
    });
  }
  const { cincu, updateCincu } = useCincuStore();
  const info = cincu.info;
  //TO CC: maybe also wordsToLowLight and make another class ex.code2, have a hierarchy in between 2 highlights
  const wordsToHighLight = [
    "web developer",
    "cyber-security",
    "python",
    "digital infrastructures",
  ];
  return (
    <>
      <Head>
        <title> oiloʇɟᴙoq </title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar />
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/images/imgccc.png"
            alt="photo of the site owner"
            width={200}
            height={100}
            priority
          />
          <p className={styles.intro}>
            Welcome! I&apos;m {cincu.name.substring(6, 11)}.&nbsp;
          </p>
          <p>
            {highlightText(info, wordsToHighLight)}{" "}
            <Link href="./about">Click for more </Link>
          </p>
        </div>
      </main>
    </>
  );
}
