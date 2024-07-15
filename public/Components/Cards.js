import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
  Divider,
  Wrap,
  WrapItem,
  Box,
  Center,
} from "@chakra-ui/react";
import useProjectsStore from "@/store/useProjects";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Cards() {
  const { projects } = useProjectsStore();
  return (
    <Wrap maxWidth="1200px" justify="center" spacing={4}>
      {projects.map((project, index) => (
        <WrapItem key={project.id}>
          <Card
            p="1.2rem"
            h="600px"
            w="250px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box w="100%" flex="1" display="flex" flexDirection="column">
              <Center>
                <Image
                  src={project.background}
                  alt={project.title}
                  width={200}
                  height={200}
                />{" "}
              </Center>

              <p className={styles.date}>{project.date}</p>
              <CardHeader>
                <Heading size="md">{project.title}</Heading>
              </CardHeader>
              <Divider />

              <CardBody>
                <Text>{project.subtitle}</Text>
              </CardBody>
            </Box>

            <CardFooter mt="auto">
              <Button project={project} as="a" href={`/projects/${project.id}`}>
                View here
              </Button>{" "}
            </CardFooter>
          </Card>
        </WrapItem>
      ))}
    </Wrap>
  );
}
