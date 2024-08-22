// components/Post.js
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { Heading, Badge, Stack, Text } from "@chakra-ui/react";
import ProjectAwareness from "./ProjectAwareness";
import ProjectPhish from "./ProjectPhish";
import ProjectFlag from "./ProjectFlag";
import ProjectNessus from "./ProjectNessus";
import ProjectSplunk from "./ProjectSplunk";
export default function Post({ project }) {
  if (!project) {
    return <p>No project data available!</p>;
  }
  const renderProjectComponent = (title) => {
    if (title.includes("Awareness")) {
      return <ProjectAwareness />;
    } else if (title.includes("Sazan")) {
      return <ProjectPhish />;
    } else if (title.includes("Flag")) {
      return <ProjectFlag />;
    } else if (title.includes("Nessus")) {
      return <ProjectNessus />;
    } else if (title.includes("Splunk")) {
      return <ProjectSplunk />;
    } else {
      return null;
    }
  };
  console.log(project);
  return (
    <div className={styles.postContainer}>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src={project.banner}
        alt={project.title}
      />
      <br />
      <Heading
        className={styles.projectHeading}
        as="h2"
        size="xl"
        noOfLines={1}
        fontFamily="Quicksand"
      >
        Project {project.title}
      </Heading>
      <Text fontFamily="Quicksand" className={styles.leftAlignedText}>
        {project.subtitle}, {project.date}
      </Text>
      <br />
      <Stack direction="row">
        {project.tags.map((tag, index) => (
          <Badge key={index} colorScheme={getColorScheme(index)}>
            {tag}
          </Badge>
        ))}
      </Stack>
      <br />
      <Text fontFamily="Quicksand" as="i" className={styles.leftAlignedText}>
        {project.reference}
      </Text>
      <Heading
        fontFamily="Quicksand"
        as="h3"
        size="lg"
        className={styles.projectSubtitle}
      >
        Why is this topic relevant?
      </Heading>
      <Text fontFamily="Quicksand" className={styles.leftAlignedText}>
        {project.intro}
      </Text>
      <br></br>
      {renderProjectComponent(project.title)}
    </div>
  );
}

function getColorScheme(index) {
  const colorSchemes = ["green", "red", "purple", "blue", "orange"];
  return colorSchemes[index % colorSchemes.length];
}
