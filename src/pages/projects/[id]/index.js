import Post from "@/../../public/Components/Post";
import useProjectsStore from "@/store/useProjects";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useEffect, useState } from "react";
import { Spinner, Text } from "@chakra-ui/react";

export default function ProjectDetailPage() {
  const { getProjectById } = useProjectsStore();
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const projectId = parseInt(id, 10);

      if (!isNaN(projectId)) {
        const fetchedProject = getProjectById(projectId);
        setProject(fetchedProject);
      }
      setLoading(false);
    }
  }, [id, getProjectById]);

  if (loading) {
    return <Spinner />;
  }

  if (!project) {
    return <Text>Project not found</Text>;
  }

  return (
    <>
      <div>
        <Head>
          <title>portfolio</title>
        </Head>
        <Post project={project} />
      </div>
    </>
  );
}
