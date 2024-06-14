import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { Heading } from "@chakra-ui/react";
import { Badge, Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import ProjectOne from "./ProjectOne";

export default function Post({ project }) {
  if (!project) {
    return <p>No project data available!</p>;
  }

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
      <br></br>
      <Heading as="h4" size="md">
        Project {project.title}
      </Heading>
      <p>Security awareness in corporate culture, {project.date}</p>
      <br></br>
      <Stack direction="row">
        {project.tags.map((tag, index) => (
          <Badge key={index} colorScheme={getColorScheme(index)}>
            {tag}
          </Badge>
        ))}
      </Stack>
      <br></br>
      <Text as="i">{project.reference}</Text>
      <Heading as="h4" size="md">
        Why is this topic relevant?
      </Heading>
      <Text>{project.intro}</Text>
      <ProjectOne></ProjectOne>
    </div>
  );
}
function getColorScheme(index) {
  const colorSchemes = ["green", "red", "purple", "blue", "orange"];
  return colorSchemes[index % colorSchemes.length];
}
