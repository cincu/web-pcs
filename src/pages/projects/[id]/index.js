import Post from "@/../../public/Components/Post";
import useProjectsStore from "@/store/useProjects";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/../../public/Components/Navbar";

export default function ProjectDetailPage() {
  const { getProjectById } = useProjectsStore();
  const router = useRouter();
  const { id } = router.query;
  console.log("Router Project ID:", id);
  const project = getProjectById(Number(id));
  console.log("Fetched Project:", project); // Check what project data is fetched

  return (
    <>
      {project ? (
        <div>
          <Head>
            <title> oiloʇɟᴙoq </title>
          </Head>
          <main className={`${styles.main} ${inter.className}`}>
            <Navbar />
            <Post project={project} />
          </main>
        </div>
      ) : (
        <p>Project not found</p>
      )}
    </>
  );
}
