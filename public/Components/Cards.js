import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
  Text,
  Divider,
} from "@chakra-ui/react";
import useProjectsStore from "@/store/useProjects";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Cards() {
  const { projects } = useProjectsStore();
  return (
    <SimpleGrid maxWidth="1000px" spacing={4} columns={4}>
      {projects.map((project, index) => (
        <Card key={project.id} className={styles.card}>
          <Image
            src={project.background}
            alt={project.title}
            width={200}
            height={200}
          />
          <p className={styles.date}>{project.date}</p>
          <CardHeader>
            <Heading size="md">{project.title}</Heading>
          </CardHeader>
          <Divider />
          <CardBody>
            <Text>{project.subtitle}</Text>
          </CardBody>
          <CardFooter>
            <Button project={project} as="a" href={`/projects/${project.id}`}>
              View here
            </Button>{" "}
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
}
