import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

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
