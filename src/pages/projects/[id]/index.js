import Post from "../../../../public/Components/Post";
import useProjectsStore from "@/store/useProjects";
import { useRouter } from "next/router";
export default function ProjectDetailPage() {
  const { getProjectById } = useProjectsStore();
  const router = useRouter();
  const { id } = router.query;
  console.log("Router Project ID:", id);
  const project = getProjectById(Number(id));
  console.log("Fetched Project:", project); // Check what project data is fetched

  return <>{project ? <Post project={project} /> : <p>Project not found</p>}</>;
}
